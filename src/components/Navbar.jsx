import logo from "../assets/logo-new.png";
import rightArrow from "../assets/arrow.svg";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center h-[54px] max-[600px]:gap-4 max-[600px]:pt-3 max-[600px]:flex-col max-[600px]:h-max">
        <div className="flex items-center gap-2 tracking-wide">
          <img src={logo} alt="logo" className="" />
          <p className="text-white font-bold">TECH</p>
        </div>
        <div className="text-white/70 flex gap-6">
          <p className="cursor-pointer">Solutions</p>
          <p className="cursor-pointer">Services</p>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Culture</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-700 text-white rounded-3xl px-4 py-2 ">
            Contact us
          </button>
          <div className="bg-slate-700 max-[600px]:hidden rounded-full flex justify-center items-center w-10 h-10">
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
