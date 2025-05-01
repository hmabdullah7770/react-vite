import { client } from "../../../lib/client";
import Product from "../../components/Product";

async function fetchClub() {
  const query = '*[_type == "product" && categoury == "Club"]'; // Changed "category" to "categoury"
  const products = await client.fetch(query);
  console.log("Fetched products:", products);
  return products;
}

export default async function Clubs() {
  const allClub = await fetchClub();
  console.log("Products in component:", allClub);

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-28 w-full">
      {allClub?.map((item) => (
        <Product key={item._id} product={item} />
      ))}
    </div>
  );
}
