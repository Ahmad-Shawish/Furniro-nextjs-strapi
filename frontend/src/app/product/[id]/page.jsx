// "use client";
// import { useParams } from "next/navigation";

import Card from "@/components/Card";
import Product from "@/components/Product";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Product",
  description: "Product Description",
};

// const getParam = () => {
//   const params = useParams();
//   console.log("in function: ", params);
//   return params;
// };

const fetchData = async (id) => {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL +
        // `/products?populate=*&[filters][categories][id][$eq]=${catId}`,
        `/products/${id}?populate=*`,
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
const fetchSimilar = async (catId) => {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL +
        `/products?populate=*&[filters][categories][id][$eq]=${catId}`,
      // `/products/${id}?populate=*`,
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

const SingleProductPage = async (param) => {
  // const SingleProductPage = ({ products, id }) => {
  //   const param = getParam();
  //   console.log(param);

  const productDetails = await fetchData(param.params.id);
  // console.log(productDetails.attributes.categories.data[0].id);
  const relatedProducts = await fetchSimilar(
    productDetails.attributes.categories.data[0].id
  );
  // console.log(products);
  return (
    <main>
      {/* Header Nav */}
      <div className="h-24 flex items-center gap-4 bg-secondary px-24 max-md:h-16 max-md:px-14">
        <Link href="/" className="text-gray-400">
          Home
        </Link>
        {">"}
        <Link href="/shop" className="text-gray-400">
          Shop
        </Link>
        {">"}
        <hr className="h-9 border border-gray-400" />
        <span>{param.params.id}</span>
        {/* <span>{id}</span> */}
      </div>

      {/* Product */}
      <Product item={productDetails} />

      <hr />

      {/* Description */}
      <div className="flex flex-col px-24 items-center gap-8 py-14">
        <h2 className="text-2xl font-medium">Description</h2>
        <p className="text-gray-400 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aliquid distinctio saepe, repudiandae deserunt voluptate, fugiat
          perspiciatis incidunt porro unde quae omnis nesciunt facilis hic, sed
          dicta fuga? Illum, sit.
        </p>
        <p className="text-gray-400 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          laudantium, vero numquam magnam possimus odio quidem sit natus id,
          maxime sed. Placeat eveniet voluptas dolores voluptatibus similique
          molestiae voluptates distinctio! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Consectetur cumque vel aut obcaecati
          voluptate, velit quo delectus expedita eius aperiam aspernatur illum
          nam soluta deserunt, quibusdam nisi omnis quos voluptatibus!
        </p>
        <div className="flex flex-wrap gap-8">
          {/* <Image src="/Group 106.png" width={605} height={348} />
          <Image src="/Group 107.png" width={605} height={348} /> */}
          <Image
            src={
              process.env.NEXT_PUBLIC_UPLOAD_URL +
              productDetails.attributes.img1.data.attributes.url
            }
            width={605}
            height={348}
            className="object-contain"
          />
          <Image
            src={
              process.env.NEXT_PUBLIC_UPLOAD_URL +
              productDetails.attributes.img2.data.attributes.url
            }
            width={605}
            height={348}
            className="object-contain"
          />
        </div>
      </div>

      <hr />
      {/* Related */}
      <div className="related flex flex-col items-center">
        <h2 className="font-medium text-4xl text-center mt-14 mb-6 max-md:text-3xl">
          Related Products
        </h2>
        <div className="cards flex justify-around flex-wrap gap-8 px-24">
          {/* <Card />
          <Card />
          <Card />
          <Card /> */}
          {relatedProducts.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
        <button className="font-semibold py-3 px-20 border border-primary text-primary mt-11 mb-24">
          <Link href="">Show More</Link>
        </button>
      </div>
    </main>
  );
};

// export async function getServerSideProps(context) {
//   try {
//     const res = await axios.get(
//       process.env.NEXT_PUBLIC_API_URL + "/products?populate=*",
//       {
//         headers: {
//           Authorization: "bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
//         },
//       }
//     );
//     const products = res.data.data;
//     return {
//       props: {
//         products,
//         id: context.params.id,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       props: {
//         products: null, // Handle error case, can be an empty array or null
//         id: context.params.id,
//       },
//     };
//   }
// }

export default SingleProductPage;
