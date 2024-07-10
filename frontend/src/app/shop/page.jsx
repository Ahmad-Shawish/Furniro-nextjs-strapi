"use client";

import Banner from "@/components/Banner";
import Card from "@/components/Card";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// export const metadata = {
//   title: "Shop",
//   description: "Shop Description",
// };

const List = ({ view, sort, show, products }) => {
  return (
    <div
      className={`cards flex flex-wrap justify-center gap-8 px-24 mt-12 mb-20 ${
        view == "list" ? "flex-col" : ""
      }`}
      // className={
      //   view == "grid"
      //     ? "cards flex flex-wrap justify-center gap-8 px-24 mt-12 mb-20"
      //     : "flex flex-col gap-8 px-24 mt-12 mb-20"
      // }
    >
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
      {products.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

const ShopPage = (params) => {
  // console.log(params.searchParams.cat);

  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("default");
  const [show, setShow] = useState(16);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    params.searchParams.cat ? [params.searchParams.cat] : []
  );
  const [selectedTags, setSelectedTags] = useState([]);

  const changeView = (val) => {
    setView(val);
  };
  const changeSort = (e) => {
    setSort(e.target.value);
  };
  const changeShow = (e) => {
    setShow(e.target.value);
  };

  // console.log("View: " + view + ", Show: " + show + ", Sort: " + sort);

  const handleCategoryChange = (e) => {
    const val = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCategory(
      isChecked
        ? [...selectedCategory, val]
        : selectedCategory.filter((item) => item !== val)
    );
  };

  const handleTagChange = (e) => {
    const val = e.target.value;
    const isChecked = e.target.checked;

    setSelectedTags(
      isChecked
        ? [...selectedTags, val]
        : selectedTags.filter((item) => item !== val)
    );
  };

  const [products, setProducts] = useState([]);

  // console.log(selectedCategory);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catQueryParams = selectedCategory
          .map((item) => `[filters][categories][title][$eq]=${item}`)
          .join("&");
        const tagQueryParams = selectedTags
          .map((item) => `[filters][sub_categories][title][$eq]=${item}`)
          .join("&");

        const res = await axios.get(
          // process.env.NEXT_PUBLIC_API_URL +
          //   `/products?populate=*${selectedCategory.map(
          //     (item) => `&[filters][categories][title][$eq]=${item}`
          //   )}`,
          `${
            process.env.NEXT_PUBLIC_TUNNEL_API_URL
          }/products?populate=*&${catQueryParams}&${tagQueryParams}&${
            sort == "default" ? "" : `sort=price:${sort}`
          }`,
          {
            headers: {
              Authorization: "bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
            },
          }
        );
        // console.log(res.data.data);
        setProducts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [selectedTags, selectedCategory, sort]);

  return (
    <main>
      {/* Header with Image */}
      <div className="w-full h-80 relative flex flex-col justify-center items-center gap-y-2 max-md:h-72">
        <Image src="/HeadImg.png" fill alt="Header Image" className="-z-10" />
        <Image src="/logo.png" width={50} height={32} alt="logo" />
        <p className="text-5xl font-medium max-md:text-4xl">Shop</p>
        <div className="">
          <Link href="/" className="font-medium max-md:text-sm">
            Home
          </Link>
          {" > "}
          <span className="font-light max-md:text-sm">Shop</span>
        </div>
      </div>

      {/* Filter */}
      <div className="filters w-full h-24 bg-[#F9F1E7] flex justify-between items-center px-24 max-md:px-12 max-md:py-3 max-md:flex-col max-md:gap-4 max-md:h-max">
        <div className="left flex items-center">
          <Image
            src="/filter.png"
            width={25}
            height={25}
            className="mr-3 cursor-pointer"
            onClick={() => setShowFilters((prev) => !prev)}
          />
          <span>Filter</span>
          <Image
            src="/grid-view.png"
            width={25}
            height={25}
            className="mx-6 cursor-pointer"
            onClick={() => changeView("grid")}
          />
          <Image
            src="/list-view.png"
            width={25}
            height={25}
            className="mr-7 cursor-pointer"
            onClick={() => changeView("list")}
          />
          <hr className="h-9 border border-gray-400" />
          <p className="ml-8 max-md:text-sm">Showing 1 - 16 of 32 results</p>
        </div>
        <div className="right flex gap-4 items-center">
          <span className="text-xl max-md:text-base">Show</span>
          <select
            name="show"
            id="show"
            className="w-[55px] h-[55px] appearance-none text-center text-gray-400 max-md:w-10 max-md:h-10"
            onChange={changeShow}
          >
            <option value="16">16</option>
            <option value="32">32</option>
          </select>
          <span className="text-xl max-md:text-base">Sort By</span>
          <select
            name="sort"
            id="sort"
            className="w-24 h-[55px] appearance-none text-center text-gray-400 max-md:w-16 max-md:h-10"
            onChange={changeSort}
          >
            <option value="default">Default</option>
            <option value="asc">Lowest First</option>
            <option value="desc">Highest First</option>
          </select>
        </div>
      </div>
      {showFilters && (
        <div className="w-full h-24 bg-[#f9f1e7] flex items-center justify-between px-24 max-md:flex-col max-md:px-12 max-md:justify-center max-md:gap-4 max-md:pb-1">
          <div className="flex items-center gap-3">
            <span>Category: </span>
            <input
              type="checkbox"
              name="dining"
              id="dining"
              value="Dining"
              onChange={handleCategoryChange}
              // checked={params.searchParams.cat == "Dining" ? "true" : ""}
            />
            <label htmlFor="dining">Dining</label>
            <input
              type="checkbox"
              name="bedroom"
              id="bedroom"
              value="Bedroom"
              onChange={handleCategoryChange}
            />
            <label htmlFor="bedroom">Bedroom</label>
            <input
              type="checkbox"
              name="livingRoom"
              id="livingRoom"
              value="LivingRoom"
              onChange={handleCategoryChange}
            />
            <label htmlFor="livingRoom">Living Room</label>
          </div>
          <div className="flex items-center gap-3">
            <span>Tags: </span>
            <input
              type="checkbox"
              name="chair"
              id="chair"
              value="chair"
              onChange={handleTagChange}
            />
            <label htmlFor="chair">Chair</label>
            <input
              type="checkbox"
              name="lamp"
              id="lamp"
              value="lamp"
              onChange={handleTagChange}
            />
            <label htmlFor="lamp">Lamp</label>
            <input
              type="checkbox"
              name="sofa"
              id="sofa"
              value="sofa"
              onChange={handleTagChange}
            />
            <label htmlFor="sofa">Sofa</label>
            <input
              type="checkbox"
              name="table"
              id="table"
              value="table"
              onChange={handleTagChange}
            />
            <label htmlFor="table">Table</label>
          </div>
        </div>
      )}

      {/* List */}
      <div>
        <List sort={sort} view={view} show={show} products={products} />
      </div>

      <Banner />
    </main>
  );
};

export default ShopPage;
