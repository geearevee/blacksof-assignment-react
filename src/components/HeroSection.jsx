import rightArrow from "../assets/arrow.svg";

const HeroSection = () => {
  return (
    <div className="text-white mx-auto mt-40">
      <div className="flex gap-10 justify-center">
        {/* info left */}
        <div className="flex-[0_0_600px]">
          <h2 className="text-5xl font-light">
            Searching for{" "}
            <span className="font-normal">Augmented Development</span> Teams to
            steer your product towards triumph?
          </h2>
          <div className="flex justify-between mt-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">50+</h2>
              <p className="text-sm">clients</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">80+</h2>
              <p className="text-sm max-w-[150px]">
                Projects successfully completed
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">60%</h2>
              <p className="text-sm max-w-[200px]">
                of the clients converted into long term engagement partners
              </p>
            </div>
          </div>
        </div>
        {/* from right */}
        <div className="flex-[0_0_600px]">
          {/* linear-gradient(180deg, #DBDBDB 12.35%, #AAB1BA 100%) */}
          <form className="custom-bgGround rounded-xl py-10 px-5 text-black">
            <h3 className="text-2xl font-medium">Fill out the form.</h3>
            <p>Our team will touch base with you within 24 hours.</p>
            <div className="grid grid-cols-[1fr_1fr] gap-2 gap-y-4">
              <input
                className="col-span-1 row-span-1 bg-transparent border-t-0 border-x-0  outline-none border-b-2 border-b-gray-500 border-2 px-2 py-2"
                type="text"
                name=""
                id=""
                placeholder="Full Name*"
              />
              <input
                className="col-span-1 row-span-1 bg-transparent border-t-0 border-x-0 outline-none border-b-2 border-b-gray-500 border-2 px-2 py-2"
                type="text"
                name=""
                id=""
                placeholder="Email ID*"
              />
              <input
                className="col-span-1 row-span-1 bg-transparent border-t-0 border-x-0  outline-none border-b-2 border-b-gray-500 border-2 px-2 py-2"
                type="text"
                name=""
                id=""
                placeholder="Country"
              />
              <input
                className="col-span-1 row-span-1 bg-transparent border-t-0 border-x-0  outline-none border-b-2 border-b-gray-500 border-2 px-2 py-2"
                type="text"
                name=""
                id=""
                placeholder="Contact Number"
              />
              <input
                className="col-span-2 row-span-1 bg-transparent border-t-0 border-x-0  outline-none border-b-2 border-b-gray-500 border-2 px-2 py-2"
                type="text"
                name=""
                id=""
                placeholder="Tell us your requirements*"
              />
            </div>
            <div className="flex gap-2 mt-6">
              <button className="bg-black rounded-3xl text-white px-5 cursor-pointer">
                Submit
              </button>
              <div className="bg-slate-700 rounded-full flex justify-center items-center w-10 h-10">
                <img src={rightArrow} alt="" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
