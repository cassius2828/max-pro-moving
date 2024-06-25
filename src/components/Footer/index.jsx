const Footer = () => {
  return (
    <footer className="bg-[#0d0d0e] text-[#f2f2f2] py-10 ">
      <div className="flex flex-col justify-evenly lg:mt-28 p-10">
        <div>
          <h3 className="text-center text-4xl lg:text-6xl">
            Max Protection Moving
          </h3>
          <p className="text-4xl mt-10 lg:mb-0 mb-8">ENL INvestment LLC</p>
        </div>

        <div>
          <h4 className="text-4xl text-blue-500 mt-4">Location</h4>
          <p className="text-3xl mb-8 lg:mb-0 mt-3 lg:mt-10 capitalize">
            temp arizona
          </p>
        </div>

        <div>
          <h4 className="text-4xl text-blue-500 mt-4">Contact</h4>
          <p className="text-3xl mt-3 lg:mt-10">
            MaxProtection@ENLWorkforce.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
