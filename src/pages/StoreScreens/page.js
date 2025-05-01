export const revalidate = 0;
export const dynamic = "force-dynamic";
import { client } from "../lib/client";
import {
  Product,
  FooterBanner,
  Herobanner,
  Box,
  Carousel,
  Footer,
} from "./components";

const Home = async () => {
 
  
 
  // Fetch data with revalidation
  let products = [];
  let bannerData = [];
  let carouselData = [];
  let boxData = [];

  try {
    [products, bannerData, carouselData, boxData] = await Promise.all([
      client.fetch('*[_type == "product"]', {}, { next: { revalidate: 10 } }),
      client.fetch('*[_type == "banner"]', {}, { next: { revalidate: 10 } }),
      client.fetch('*[_type == "carousel"]', {}, { next: { revalidate: 10 } }),
      client.fetch('*[_type == "box"]', {}, { next: { revalidate: 10 } }),
    ]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <main className="min-h-screen">
      {/* Top Margin */}
      <div className="mt-[75px]" />

      {/* Carousel Section */}
      <Carousel slides={carouselData} />
      {/*  carousel={carouselData} /> */}

      {/* Category Heading */}
      <div className="text-center my-10">
        <h2 className="flex justify-center items-center m-0 p-0 mt-10 mb-8 text-4xl font-extrabold text-[#324d67]">
          Choose your Category
        </h2>
      </div>

      {/* Category Box */}
      <Box boxes={boxData} />

      {/* Hero Banner */}
      <Herobanner heroBanner={bannerData.length && bannerData[0]} />

      {/* Products Section */}
      <div className="text-center my-10 text-[#324d67]">
        <h2 className="text-4xl font-extrabold">NEW Stock</h2>
        <p className="text-base font-light">
          Find every unique product and buy
        </p>
      </div>

      {/* Products Grid */}
      <div className="flex flex-wrap justify-center lg:gap-24 xl:gap-24 md:gap-24 mt-5 w-full gap-3 ">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
