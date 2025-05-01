import { client } from '../../../lib/client';
import ProductDetails from './ProductDetails';

async function getProductData(slug) {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    product,
    products,
  };
}

export default async function Page({ params }) {
  const { product, products } = await getProductData(params.slug);
  
  if (!product) return <div>Product not found</div>;
  
  return <ProductDetails product={product} products={products} />;
}

