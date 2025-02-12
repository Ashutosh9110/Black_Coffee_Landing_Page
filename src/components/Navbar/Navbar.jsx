import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return <nav className="absolute top-0 left-0 w-full pt-10 text-white z-20">
    <div className="container">
      <div>
        {/* Logo section */}
        <h1 className="text-2xl font-semibold">
          <span className="text-primary">Black </span>Coffee
        </h1>
        {/* Hamburger Menu Section */}
        <div>
          <GiHamburgerMenu className="text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  </nav>;
};

export default Navbar;
