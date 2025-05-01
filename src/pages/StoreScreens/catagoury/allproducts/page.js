// app/products/page.js
import { Suspense } from "react";
import { client } from "@/lib/client";
import Product from "../../components/Product";

// Keep original naming convention
const Products = async () => {
  return (
    <main>
      <Suspense fallback={<ProductsLoading />}>
        <AllProducts />
      </Suspense>
    </main>
  );
};

// Maintain Allproducts naming as per original
async function AllProducts() {
  const query = '*[_type == "product"]';
  const Allproducts = await client.fetch(query);

  if (!Allproducts?.length) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-gray-500">No products found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-[107px] w-full">
      {Allproducts?.map((prod) => (
        <Product key={prod._id} product={prod} />
      ))}
    </div>
  );
}

// Loading state component
function ProductsLoading() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-[107px] w-full">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gray-200 h-48 rounded-lg"></div>
          <div className="mt-4 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
