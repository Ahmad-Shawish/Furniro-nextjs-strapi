import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ item }) => {
  return (
    <Link
      href={`/product/${item.id}`}
      className="cursor-pointer relative w-max"
    >
      {/* <div className="h-[445px] w-72 absolute top-0 left-0 z-10 hover:bg-black hover:opacity-65"></div> */}
      <div className="w-72 h-[445px] bg-[#F4F5F7] relative flex flex-col gap-2 hover:scale-105 ease-linear transition-transform max-sm:w-60 max-sm:h-96">
        {item?.attributes.isNew && (
          <div className="bg-red-200 w-12 h-12 rounded-full absolute top-6 right-6 flex items-center justify-center max-sm:w-10 max-sm:h-10 max-sm:text-sm">
            New
          </div>
        )}
        <div className="w-72 h-[300px]">
          <Image
            src={
              process.env.NEXT_PUBLIC_UPLOAD_URL +
              item?.attributes.img1.data.attributes.url
            }
            width={285}
            height={300}
            className="object-contain max-sm:w-60"
          />
        </div>
        <p className="font-semibold text-2xl text-[#3A3A3A] mt-2 px-4">
          {item?.attributes.title}
        </p>
        <p className="text-gray-400 font-medium px-4">
          {item?.attributes.desc}
        </p>
        <span className="font-semibold text-xl text-[#3A3A3A] px-4">
          ${item?.attributes.price}
        </span>
      </div>
    </Link>
  );
};

export default Card;
