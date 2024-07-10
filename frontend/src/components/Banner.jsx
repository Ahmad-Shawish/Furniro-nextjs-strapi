import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="h-[270px] bg-[#FAF3EA] flex items-center justify-between px-12 mb-1 max-md:flex-col max-md:py-3">
      <div className="flex gap-2 items-center">
        <Image
          src="/trophy.png"
          width={60}
          height={60}
          className="max-md:w-10 h-10"
        />
        <div>
          <p className="text-2xl font-semibold max-md:text-xl">High Quality</p>
          <span className="text-xl font-medium text-gray-400 max-md:text-lg">
            Crafted from top materials
          </span>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Image
          src="/guarantee.png"
          width={60}
          height={60}
          className="max-md:w-10 h-10"
        />
        <div>
          <p className="text-2xl font-semibold max-md:text-xl">
            Warranty Protection
          </p>
          <span className="text-xl font-medium text-gray-400 max-md:text-lg">
            Over 2 years
          </span>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Image
          src="/shipping.png"
          width={60}
          height={60}
          className="max-md:w-10 h-10"
        />
        <div>
          <p className="text-2xl font-semibold max-md:text-xl">Free Shipping</p>
          <span className="text-xl font-medium text-gray-400 max-md:text-lg">
            Order over 100$
          </span>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Image
          src="/customer-support.png"
          width={60}
          height={60}
          className="max-md:w-10 h-10"
        />
        <div>
          <p className="text-2xl font-semibold max-md:text-xl">
            24 / 7 Support
          </p>
          <span className="text-xl font-medium text-gray-400 max-md:text-lg">
            Dedicated support
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
