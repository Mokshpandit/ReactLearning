
const TopHeader = () => {
  return (
    <header className=" border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Left Nav */}
        <div className="flex gap-8 text-[13px] uppercase font-medium text-gray-700 tracking-wide">
          <a href="#" className="hover:underline">Magazine</a>
          <a href="#" className="hover:underline">Newsletters</a>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <h1 className="font-bold md:text-[26px] font-serif tracking-widest text-gray-900 uppercase select-none ">
            National Daily News
          </h1>
        </div>

        {/* Right Nav */}
        <div className="flex gap-8 text-[13px] uppercase font-medium text-gray-700 tracking-wide">
          <a href="#" className="hover:underline">Login</a>
          <a href="#" className="hover:underline">Subscribe</a>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
