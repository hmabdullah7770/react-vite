import React from "react";
import { client } from "@/lib/client";
import Product from "../../components/Product";

async function fetchRetro() {
  const query = '*[_type == "product" && categoury == "Retro"]';
  return await client.fetch(query);
}

const Retro = async () => {
  const allRetro = await fetchRetro();
  return (
    <div className="products-container2 flex flex-wrap justify-center gap-3 mt-28 w-full">
      {allRetro?.map((prod) => (
        <Product key={prod._id} product={prod} />
      ))}
    </div>
  );
};

export default Retro;
