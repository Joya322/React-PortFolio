const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-10 items-center">
        <div id="home-content" className="md:w-2/4 order-2 md:order-1">
          <h1 className="text-6xl font-black">
            Hello, I'm <br /> Jannatul Ferdoush
          </h1>
          <p className="mt-5 text-justify">
            Motivated junior frontend developer skilled in HTML, CSS, Bootstrap
            5, Tailwind CSS, JavaScript and React. Passionate about creating
            responsive, user-friendly web applications with modern UI
            frameworks. Eager to contribute to a dynamic team and grow as a
            professional developer
          </p>

          <button className="btn px-5 py-3 bg-violet-600 text-white rounded-lg mt-6 hover:bg-violet-800">
            Download CV
          </button>
        </div>
        <div className="md:w-1/4 order-1 md:order-2">
          <img
            className="rounded-full w-full"
            src="/Jannat-WithoutBg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
