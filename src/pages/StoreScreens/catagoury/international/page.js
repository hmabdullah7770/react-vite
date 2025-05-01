import React from "react";
import { client } from "@/lib/client";
import Product from "../../components/Product";

async function fetchInternational() {
  const query = '*[_type == "product" && categoury == "International"]';
  return await client.fetch(query);
}

const International = async () => {
  const allInternational = await fetchInternational();
  return (
    <div className=" flex flex-wrap justify-center gap-3 mt-28 w-full">
      {allInternational?.map((prod) => (
        <Product key={prod._id} product={prod} />
      ))}
    </div>
  );
};

export default International;
