"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { removeItem } from "@/redux/cartReducer";
import { useDispatch, useSelector } from "react-redux";

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

const Panel = ({ handleClick, products }) => {
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const dispatch = useDispatch();

  return (
    <div>
      <div
        className="bg-black w-full h-full fixed top-0 left-0 opacity-55 z-10"
        onClick={handleClick}
      />
      <div className="fixed top-0 right-0 h-[550px] w-[420px] bg-white z-20 p-7 flex flex-col justify-between gap-6 max-md:h-[450px] max-md:w-80">
        <div>
          <h1 className="font-semibold text-2xl mb-3">Shopping Cart</h1>
          <hr className="w-3/4 border-gray-400 " />
        </div>
        <div className="overflow-y-scroll">
          {products.map((item, index) => (
            <div key={index} className="flex items-center gap-3 mb-5">
              <div className="w-[105px] h-[105px] relative">
                <Image
                  src={process.env.NEXT_PUBLIC_UPLOAD_URL + item.img}
                  fill
                />
              </div>
              <div className="text-center flex-2 overflow-hidden ">
                <p className="mb-2">{item.name}</p>
                <span>{item.quantity}</span>
                <span className="mx-4">X</span>
                <span className="text-primary">${item.price}</span>
              </div>
              <div className="ml-auto w-5 h-5 relative">
                <Image
                  src="/x.png"
                  fill
                  onClick={() => dispatch(removeItem(item.id))}
                  className="cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <span>Total</span>
            <span className="text-primary">${totalPrice()}</span>
          </div>
          <hr className="border-gray-400" />
          <div className="flex justify-between">
            <button className="border rounded-[50px] py-2 px-7 border-black">
              <Link href="/cart">Cart</Link>
            </button>
            <button className="border rounded-[50px] py-2 px-7 border-black">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const [showCart, setShowCart] = useState(false);

  const products = useSelector((state) => state.cart.products);

  const handleClick = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <div className="relative">
      {products.length > 0 && (
        <span className="absolute -top-3 -right-2 rounded-full bg-primary px-2 py-1 text-white text-xs font-extralight">
          {products.length}
        </span>
      )}
      <Image
        src={"/cart.png"}
        width={28}
        height={28}
        alt="cart logo"
        onClick={handleClick}
        className="cursor-pointer max-md:h-6 max-md:w-6"
      />

      {showCart && <Panel handleClick={handleClick} products={products} />}
    </div>
  );
};

export default Cart;
