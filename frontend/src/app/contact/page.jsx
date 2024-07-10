import Banner from "@/components/Banner";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Contact Description",
};

const ContactPage = () => {
  return (
    <main className="flex flex-col gap-8 ">
      {/* Header with Image */}
      <div className="w-full h-80 relative flex flex-col justify-center items-center gap-y-2 max-md:h-72">
        <Image src="/HeadImg.png" fill alt="Header Image" className="-z-10" />
        <Image src="/logo.png" width={50} height={32} alt="logo" />
        <p className="text-5xl font-medium max-md:text-4xl">Contact</p>
        <div className="">
          <Link href="/" className="font-medium max-md:text-sm">
            Home
          </Link>
          {" > "}
          <span className="font-light max-md:text-sm">Contact</span>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col items-center justify-center my-6">
        <h2 className="text-4xl font-semibold max-md:text-2xl">
          Get in Touch With Us
        </h2>
        <p className="text-gray-400 w-[630px] text-center max-md:text-sm max-md:w-[75%]">
          For More Information About Our Products & Services, Please Feel Free
          To Drop Us An Email. Out Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      {/* INFO AND FORM */}
      <div className="px-48 flex gap-8 max-md:px-10 max-md:flex-col max-md:gap-4">
        {/* INFO */}
        <div className="flex flex-col justify-start items-start flex-1 p-12 gap-10">
          {/* SINGLE ITEM | ADDRESS */}
          <div className="flex items-start justify-center gap-7">
            <Image src="/location.png" width={22} height={22} />
            <div className="flex flex-col">
              <p className="font-medium text-2xl">Address</p>
              <span>236 5th SE Avenue, New York NY10000, United States</span>
            </div>
          </div>
          {/* SINGLE ITEM | PHONE */}
          <div className="flex items-start justify-center gap-7">
            <Image src="/phone.png" width={22} height={22} />
            <div className="flex flex-col">
              <p className="font-medium text-2xl">Phone</p>
              <span>
                Mobile: +1 (123)456-789
                <br />
                Mobile: +1 (123)456-789
              </span>
            </div>
          </div>
          {/* SINGLE ITEM | TIME */}
          <div className="flex items-start justify-center gap-7">
            <Image src="/clock.png" width={22} height={22} />
            <div className="flex flex-col">
              <p className="font-medium text-2xl">Working Time</p>
              <span>
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </span>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="flex-2 flex flex-col gap-6 p-12">
          <p className="font-medium">Your Name</p>
          <input
            type="text"
            placeholder="abc"
            className="border border-gray-400 outline-none rounded-lg px-8 py-6 max-md:px-6 max-md:py-4"
          />
          <p className="font-medium">Email Address</p>
          <input
            type="email"
            placeholder="abc@email.com"
            className="border border-gray-400 outline-none rounded-lg px-8 py-6 max-md:px-6 max-md:py-4"
          />
          <p className="font-medium">Subject</p>
          <input
            type="text"
            placeholder="This is Optional"
            className="border border-gray-400 outline-none rounded-lg px-8 py-6 max-md:px-6 max-md:py-4"
          />
          <p className="font-medium">Message</p>
          <textarea
            type="text"
            placeholder="Hi! I'd like to ask about.."
            className="border border-gray-400 outline-none rounded-lg px-8 py-6 h-[120px] resize-none max-md:px-6 max-md:py-4"
          />
          <button className="bg-primary text-white px-20 py-3 w-60 rounded-md">
            Submit
          </button>
        </div>
      </div>

      {/* Banner */}
      <Banner />
    </main>
  );
};

export default ContactPage;
