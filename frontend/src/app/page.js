import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "/Rectangle 36.png", width: 78, height: 182 },
  { src: "/Rectangle 38.png", width: 451, height: 312 },
  { src: "/Rectangle 40.png", width: 295, height: 392 },
  { src: "/Rectangle 43.png", width: 290, height: 348 },
  { src: "/Rectangle 45.png", width: 262, height: 433 },
  { src: "/Rectangle 37.png", width: 185, height: 323 },
  { src: "/Rectangle 39.png", width: 344, height: 242 },
  { src: "/Rectangle 41.png", width: 178, height: 242 },
  { src: "/Rectangle 44.png", width: 258, height: 196 },
];

const fetchData = async () => {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/products?populate=*",
      {
        headers: {
          Authorization: "bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
        },
      }
    );
    // console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const products = await fetchData();
  // console.log(products);
  return (
    <main>
      <section>
        <div className="w-full h-[715px] relative flex items-center justify-end max-md:h-[500px]">
          <Image src="/homeImg.png" fill className="-z-10" />
          <div className="w-[640px] h-[440px] bg-[#FFF3E3] rounded-lg mr-14 px-10 py-12 flex flex-col max-md:w-[65%] max-md:h-[55%] max-md:p-8 max-md:mr-10">
            <p className="font-semibold">New Arrival</p>
            <p className="font-bold text-primary text-[52px] max-md:text-xl">
              Discover Our New Collection
            </p>
            <p className="font-medium text-lg max-md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adispiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="font-bold px-[72px] py-6 bg-primary text-white w-[222px] mt-auto max-md:px-4 max-md:py-4 max-md:w-auto max-md:text-sm">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-14 mt-14">
        <div>
          <p className="font-bold text-[32px] text-center max-md:text-2xl">
            Browse The Range
          </p>
          <p className="text-xl text-gray-500 text-center max-md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adispiscing elit.
          </p>
        </div>
        <div className="flex gap-5 max-md:px-3">
          <div className="dining flex flex-col items-center gap-7 max-md:gap-4">
            <Link href={"/shop?cat=Dining"}>
              <Image src="/Mask Group.png" width={380} height={480} />
            </Link>
            <p className="font-semibold text-2xl max-md:text-lg">Dining</p>
          </div>
          <div className="living flex flex-col items-center gap-7 max-md:gap-4">
            <Link href="/shop?cat=LivingRoom">
              <Image src="/Image-living room.png" width={380} height={480} />
            </Link>
            <p className="font-semibold text-2xl max-md:text-lg">Living</p>
          </div>
          <div className="bedroom flex flex-col items-center gap-7 max-md:gap-4">
            <Link href="/shop?cat=Bedroom">
              <Image src="/Mask Group (1).png" width={380} height={480} />
            </Link>
            <p className="font-semibold text-2xl max-md:text-lg">Bedroom</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-8 mt-14">
        <p className="font-bold text-[40px] max-md:text-3xl">Our Products</p>
        <div className="flex flex-wrap gap-8 justify-center max-md:flex-col">
          {/* <Card />
          <Card />
          <Card />
          <Card /> */}
          {products.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
        <button className="font-semibold text-primary border border-primary py-3 px-16 hover:bg-primary hover:text-white">
          <Link href="/shop">Show More</Link>
        </button>
      </section>

      <section className="flex h-[670px] bg-[#fcf8f3] mt-16 items-center gap-11 justify-center max-md:flex-col max-md:h-max">
        <div className="w-1/3 pl-36 ml-11 max-md:w-full max-md:p-3 max-md:m-1">
          <p className="font-bold text-[40px] text-[#3a3a3a] max-md:text-3xl">
            50+ beautiful room inpsiration
          </p>
          <p className="text-gray-500">
            Our designers already made a lot of beautiful prototypes of rooms
            that would inspire you.
          </p>
          <button className="py-3 px-9 bg-primary text-white mt-6">
            Explore More
          </button>
        </div>
        <div className="w-2/3 max-md:w-full">
          <Carousel />
        </div>
      </section>

      <section className="flex flex-col items-center w-full mt-16 gap-4 mb-12">
        <div>
          <p className="font-semibold text-xl text-gray-600 text-center max-md:text-lg">
            Share your setup with
          </p>
          <p className="font-bold text-[40px] text-[#3A3A3A] max-md:text-3xl">
            #FuniroFurniture
          </p>
        </div>
        <div className="w-full">
          <PhotoAlbum
            layout="masonry"
            photos={photos}
            spacing={10}
            columns={4}
          />
        </div>
      </section>
    </main>
  );
}
