"use client";

import Image from "next/image";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartReducer";

// const images = ["/Asgaard sofa 5.png", "/Group 94.png", "/Group 98.png"];

const Product = ({ item }) => {
  const dispatch = useDispatch();

  const [mainImg, setMainImg] = useState(
    process.env.NEXT_PUBLIC_UPLOAD_URL +
      item?.attributes.img1.data.attributes.url
  );
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("S");

  return (
    <div className="flex gap-20 px-24 py-8 max-md:flex-col">
      {/* Left side images */}
      <div className="left flex flex-1 gap-8">
        <div className="sideImages flex flex-col w-2/12 gap-8">
          <Image
            src={
              process.env.NEXT_PUBLIC_UPLOAD_URL +
              item?.attributes.img1.data.attributes.url
            }
            width={76}
            height={80}
            onClick={() =>
              setMainImg(
                process.env.NEXT_PUBLIC_UPLOAD_URL +
                  item?.attributes.img1.data.attributes.url
              )
            }
            className="cursor-pointer object-contain"
          />
          <Image
            src={
              process.env.NEXT_PUBLIC_UPLOAD_URL +
              item?.attributes?.img2?.data?.attributes?.url
            }
            width={76}
            height={80}
            onClick={() =>
              setMainImg(
                process.env.NEXT_PUBLIC_UPLOAD_URL +
                  item?.attributes?.img2?.data?.attributes?.url
              )
            }
            className="cursor-pointer object-contain"
          />
          {item?.attributes?.img3?.data?.attributes?.url && (
            <Image
              src={
                process.env.NEXT_PUBLIC_UPLOAD_URL +
                item?.attributes?.img3?.data?.attributes?.url
              }
              width={76}
              height={80}
              onClick={() =>
                setMainImg(
                  process.env.NEXT_PUBLIC_UPLOAD_URL +
                    item?.attributes?.img3?.data?.attributes?.url
                )
              }
              className="cursor-pointer object-contain"
            />
          )}
        </div>
        <div className="mainImage w-10/12 relative h-[500px] bg-secondary max-md:h-80">
          <Image src={mainImg} fill className="object-contain" />
        </div>
      </div>

      {/* Right side info */}
      <div className="right flex-1 flex flex-col gap-4">
        <h2 className="text-[42px] max-md:text-3xl">{item.attributes.title}</h2>
        <p className="text-2xl font-medium text-gray-400 max-md:text-lg">
          USD. {item.attributes.price}
        </p>

        <p className="text-[13px]">{item.attributes.desc}</p>

        <span className="text-sm text-gray-400">Size</span>
        <div className="flex gap-4">
          <button
            className={`rounded text-[13px] w-[30px] h-[30px] ${
              size === "S" ? "bg-primary text-white" : "bg-secondary text-black"
            }`}
            onClick={() => setSize("S")}
          >
            S
          </button>
          <button
            className={`w-[30px] h-[30px] rounded text-[13px] ${
              size == "M" ? "bg-primary text-white" : "bg-secondary text-black"
            }`}
            onClick={() => setSize("M")}
          >
            M
          </button>
          <button
            className={`w-[30px] h-[30px] rounded text-[13px] ${
              size == "L" ? "bg-primary text-white" : "bg-secondary text-black"
            }`}
            onClick={() => setSize("L")}
          >
            L
          </button>
        </div>
        <span className="text-sm text-gray-400">Color</span>
        <div className="flex gap-4">
          <button className="rounded-full bg-black border w-[30px] h-[30px]"></button>
          <button className="rounded-full bg-white border w-[30px] h-[30px]"></button>
          <button className="rounded-full bg-gray-400 border w-[30px] h-[30px]"></button>
        </div>

        <div className="flex gap-4">
          <div className="border h-16 w-32 flex items-center justify-around rounded-lg max-md:h-14">
            <button
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button
            className="h-16 w-52 border border-black rounded-2xl text-xl max-md:h-14 max-md:w-44 max-md:text-lg"
            onClick={() =>
              dispatch(
                addToCart({
                  id: item.id,
                  title: item.attributes.title,
                  desc: item.attributes.desc,
                  price: item.attributes.price,
                  img: item.attributes.img1.data.attributes.url,
                  quantity,
                })
              )
            }
          >
            Add To Cart
          </button>
        </div>

        <hr />
        <div>
          <table>
            <tr>
              <td className="text-[#9f9f9f9f]">Category</td>
              <td className="text-[#9f9f9f9f] w-3">:</td>
              <td className="text-[#9f9f9f9f]">
                {item.attributes.categories.data[0].attributes.title}
              </td>
            </tr>
            <tr>
              <td className="text-[#9f9f9f9f]">Tags</td>
              <td className="text-[#9f9f9f9f] w-3">:</td>
              <td className="text-[#9f9f9f9f]">
                {item.attributes.sub_categories.data[0].attributes.title}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Product;
