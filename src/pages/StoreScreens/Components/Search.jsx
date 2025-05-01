import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { client, urlFor } from '../../lib/client';

const Search = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Fetch all products once when component mounts
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const query = `*[_type == "product"] {
          _id,
          name,
          slug,
          price,
          "imageUrl": image[0]
        }`;
        const products = await client.fetch(query);
        setAllProducts(products);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchAllProducts();
    setIsClient(true);
  }, []);

  // Memoized search function
  const getSearchResults = useMemo(() => {
    return (term) => {
      if (!term.trim()) {
        return [];
      }

      const searchTermLower = term.toLowerCase();
      
      return allProducts
        .filter(product => {
          const productName = product.name.toLowerCase();
          
          // Exact match
          if (productName === searchTermLower) return true;
          
          // Contains search term
          if (productName.includes(searchTermLower)) return true;
          
          // Check for word matches
          const searchWords = searchTermLower.split(' ');
          return searchWords.some(word => 
            productName.includes(word) && word.length > 1
          );
        })
        .sort((a, b) => {
          const aName = a.name.toLowerCase();
          const bName = b.name.toLowerCase();
          
          // Exact matches first
          if (aName === searchTermLower) return -1;
          if (bName === searchTermLower) return 1;
          
          // Starts with search term next
          if (aName.startsWith(searchTermLower)) return -1;
          if (bName.startsWith(searchTermLower)) return 1;
          
          return 0;
        })
        .slice(0, 10); // Limit results to 10 items
    };
  }, [allProducts]);

  // Debounced search effect
  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      const results = getSearchResults(searchTerm);
      setSearchResults(results);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, getSearchResults]);

  const handleProductClick = (slug) => {
    router.push(`/product/${slug.current}`);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    setSearchTerm('');
    setSearchResults([]);
  };

  if (!isClient) return null;

  return (
    <>
      <button onClick={() => setOpen(true)} aria-label="Open search">
        <SearchIcon className="text-black transition-transform duration-400 ease-in-out hover:scale-125" />
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-screen text-center">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-30"
                onClick={handleClose}
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="inline-block w-full max-w-2xl relative bg-white rounded-lg shadow-xl p-6 mt-20 mx-auto"
              >
                {/* Search Input */}
                <div className="relative mb-4">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    autoFocus
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-3 text-gray-900 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button
                    onClick={handleClose}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <CloseIcon className="text-gray-500 hover:text-gray-700" />
                  </button>
                </div>

                {/* Search Results */}
                <div className="max-h-96 overflow-y-auto">
                  {isLoading ? (
                    <div className="text-center py-4">
                      <span className="text-gray-500">Searching...</span>
                    </div>
                  ) : (
                    <motion.ul layout className="space-y-2">
                      {searchResults.map((product) => (
                        <motion.li
                          key={product._id}
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="border-b border-gray-100 last:border-0"
                        >
                          <button
                            onClick={() => handleProductClick(product.slug)}
                            className="w-full p-3 text-left hover:bg-gray-50 rounded-lg flex items-center gap-4"
                          >
                            {product.imageUrl && (
                              <img
                                src={urlFor(product.imageUrl)}
                                alt={product.name}
                                className="w-12 h-12 object-cover rounded"
                              />
                            )}
                            <div>
                              <p className="font-medium text-gray-900">{product.name}</p>
                              <p className="text-sm text-gray-500">Rs. {product.price}</p>
                            </div>
                          </button>
                        </motion.li>
                      ))}
                      {searchTerm && searchResults.length === 0 && !isLoading && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-center py-8 text-gray-500"
                        >
                          No products found
                        </motion.div>
                      )}
                    </motion.ul>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Search;
