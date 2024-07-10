import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <nav className="h-24 flex items-center justify-between px-12 max-md:flex-col max-md:gap-4 max-md:h-max overflow-hidden max-md:mb-2 max-md:px-4">
      {/* LOGO */}
      <div className="title flex gap-x-1 items-center">
        <Image
          src="/logo.png"
          width={50}
          height={32}
          alt="logo"
          className="object-contain"
        />
        <p className="text-3xl font-bold">Furniro</p>
      </div>

      {/* LINKS */}
      <div className="links flex gap-x-16 max-md:gap-x-10">
        <Link href="/" className="font-medium">
          Home
        </Link>
        <Link href="/shop" className="font-medium">
          Shop
        </Link>
        <Link href="" className="font-medium">
          About
        </Link>
        <Link href="/contact" className="font-medium">
          Contact
        </Link>
      </div>
      {/* ICONS */}
      <div className="icons flex gap-x-10">
        <Image
          src={"/account.png"}
          width={28}
          height={28}
          alt="account logo"
          className="max-md:w-6 max-md:h-6"
        />
        <Image
          src={"/search.png"}
          width={28}
          height={28}
          alt="search logo"
          className="max-md:w-6 max-md:h-6"
        />
        <Image
          src={"/heart.png"}
          width={28}
          height={28}
          alt="likes logo"
          className="max-md:w-6 max-md:h-6"
        />
        {/* <Image src={"/cart.png"} width={28} height={28} alt="cart logo" /> */}
        <div className="">
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
