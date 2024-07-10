const Footer = () => {
  return (
    <footer className="h-[505px] border-t max-md:h-max max-md:mb-4">
      <div className="flex flex-col justify-center px-24 gap-y-10 h-full max-md:pt-2 max-md:pb-3 max-md:px-12">
        {/* main */}
        <div className="main flex max-md:flex-col max-md:gap-10 pt-5">
          <div className="company flex-2 flex flex-col gap-y-9 max-md:gap-y-2">
            <p className="text-2xl font-bold">Furniro.</p>
            <span className="font-medium text-gray-400">
              400 University Drive Suite 200 Coral
              <br /> Gables,
              <br />
              FL 33134 USA
            </span>
          </div>
          <div className="links flex-1 flex flex-col gap-y-9 max-md:gap-y-2">
            <p className="font-medium text-gray-400">Links</p>
            <span className="font-medium">Home</span>
            <span className="font-medium">Shop</span>
            <span className="font-medium">About</span>
            <span className="font-medium">Contact</span>
          </div>
          <div className="help flex-1 flex flex-col gap-y-9 max-md:gap-y-2">
            <p className="font-medium text-gray-400">Help</p>
            <span className="font-medium">Payment Options</span>
            <span className="font-medium">Returns</span>
            <span className="font-medium">Privacy Policies</span>
          </div>
          <div className="newsletter flex-2 ">
            <p className="font-medium text-gray-400 mb-9 max-md:mb-2">
              Newsletter
            </p>
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="text-sm border-b border-black outline-none w-48"
            />
            <button className="font-medium text-sm ml-3">SUBSCRIBE</button>
          </div>
        </div>
        {/* horizontal line */}
        <hr />
        {/* copyright */}
        <div className="copyright">
          <p>2023 furniro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
