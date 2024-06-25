const Landing = () => {
  return (
    <div className="w-full h-full relative">
      <img className="w-full" src="/images/moving-hero.jpeg" alt="" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-9xl text-black mb-10 font-extrabold ">Get a free quote now!</h1>
        <button className="border-black border-4 rounded p-5 text-7xl text-black my-10 bg-blue-500 hover:bg-blue-800">free quote</button>
      </div>
    </div>
  );
};
export default Landing;
