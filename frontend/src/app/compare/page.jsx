import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Compare",
  description: "Compare Description",
};

const ComparePage = () => {
  return (
    <main>
      {/* Header with Image */}
      <div className="w-full h-80 relative flex flex-col justify-center items-center gap-y-2">
        <Image src="/HeadImg.png" fill alt="Header Image" className="-z-10" />
        <Image src="/logo.png" width={50} height={32} alt="logo" />
        <p className="text-5xl font-medium">Product Comparison</p>
        <div className="">
          <Link href="/" className="font-medium">
            Home
          </Link>
          {" > "}
          <span className="font-light">Comparison</span>
        </div>
      </div>
      ComparePage
    </main>
  );
};

export default ComparePage;
