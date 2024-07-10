"use client";

import Banner from "@/components/Banner";
import { removeItem, updateQuantity } from "@/redux/cartReducer";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

// export const metadata = {
//   title: "Cart",
//   description: "Cart Description",
// };

// const data = [
//   {
//     name: "Asgaard Sofa",
//     img: "/Asgaard sofa 5.png",
//     price: 500,
//     quantity: 1,
//     subtotal: 500,
//   },
//   {
//     name: "much bigger Asgaard Sofa",
//     img: "/Asgaard sofa 5.png",
//     price: 500,
//     quantity: 1,
//     subtotal: 500,
//   },
// ];

const CartPage = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateQuantity({ productId, newQuantity }));
  };

  return (
    <main className="flex flex-col gap-8">
      {/* Header with Image */}
      <div className="w-full h-80 relative flex flex-col justify-center items-center gap-y-2 max-md:h-72">
        <Image src="/HeadImg.png" fill alt="Header Image" className="-z-10" />
        <Image src="/logo.png" width={50} height={32} alt="logo" />
        <p className="text-5xl font-medium max-md:text-4xl">Cart</p>
        <div className="">
          <Link href="/" className="font-medium max-md:text-sm">
            Home
          </Link>
          {" > "}
          <span className="font-light max-md:text-sm">Cart</span>
        </div>
      </div>

      {/* Main Body */}
      <div className="cart px-24 flex gap-8 max-md:flex-col max-md:px-8">
        {/* items */}
        <div className="left w-3/4 flex flex-col gap-14 max-md:w-full">
          <div className="h-14 bg-secondary flex items-center px-10 max-md:px-4">
            <p className="font-medium w-[30%] text-center max-md:text-sm">
              Product
            </p>
            <p className="font-medium w-[30%] text-center max-md:text-sm">
              Price
            </p>
            <p className="font-medium w-[10%] text-center max-md:text-sm">
              Quantity
            </p>
            <p className="font-medium w-[30%] text-center max-md:text-sm">
              Subtotal
            </p>
          </div>
          {products.map((item, index) => (
            <div key={index} className="flex items-center justify-between px-5">
              <div className="flex items-center gap-6 w-[30%]">
                <div className="rounded-lg bg-[rgba(184,142,47,0.22)] w-[105px] h-[105px] relative">
                  <Image
                    src={process.env.NEXT_PUBLIC_UPLOAD_URL + item.img}
                    fill
                    className="object-contain"
                  />
                </div>
                <Link
                  href={`/product/${item.id}`}
                  className="w-1/2 text-gray-500"
                >
                  {item.title}
                </Link>
              </div>
              <p className="text-gray-500">{item.price}</p>
              {/* <p>{item.quantity}</p> */}
              <input
                type="number"
                min={1}
                value={item.quantity}
                className="w-9 border border-gray-400 rounded-lg outline-none text-center"
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value))
                }
              />
              <p>{item.quantity * item.price}</p>
              <Image
                src="/delete.png"
                width={28}
                height={28}
                onClick={() => dispatch(removeItem(item.id))}
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>
        {/* total */}
        <div className="right w-1/3 flex flex-col items-center bg-secondary h-96 px-[75px] max-md:w-full max-md:h-72">
          <p className="font-bold text-3xl mt-4 mb-16 max-md:text-2xl max-md:mb-6">
            Cart Total
          </p>
          <div className="w-full flex flex-col gap-5">
            <div className="flex justify-between w-full">
              <p className="font-semibold">Subtotal</p>
              <span className="text-gray-400">${totalPrice()}</span>
            </div>
            <div className="flex justify-between w-full">
              <p className="font-semibold">Discount</p>
              <span className="text-gray-400">$0</span>
            </div>
            <div className="flex justify-between w-full">
              <p className="font-semibold">Total</p>
              <span className="text-primary font-semibold text-xl">
                ${totalPrice()}
              </span>
            </div>
          </div>
          <button className="px-14 py-3 border rounded-2xl border-black mt-10 text-xl max-md:text-lg max-md:px-10 max-md:py-2">
            Check Out
          </button>
        </div>
      </div>
      {/* BANNER */}
      <Banner />
    </main>
  );
};

export default CartPage;
