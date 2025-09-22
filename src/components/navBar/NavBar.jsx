import "./NavBar.css";
import { RiMenuFold2Fill } from "react-icons/ri";
const NavBar = () => {
  return (
    <div className="sticky top-0 bg-gradient-to-t from-sky-50 to-sky-100 opacity-90 shadow-lg">
      <nav className="w-11/12 mx-auto px-10 py-6 flex justify-between items-center">
        {/* logo */}
        <div id="logo" className="flex justify-center items-center gap-3">
          <img
            className="w-[60px] h-[60px]"
            src="images/Jannat-circle-cropped.jpg"
            alt=""
          />
          <h1 className="text-3xl font-bold">Jannatul Ferdoush</h1>
        </div>

        <RiMenuFold2Fill />
        {/* routes */}
        <ul className="md:flex justify-center items-center gap-5 text-lg font-medium">
          <li className="hover:text-white hover:bg-violet-600 px-5 py-3 rounded-lg selected">
            <a href="">Home</a>
          </li>
          <li className="hover:text-white hover:bg-violet-600 px-5 py-3 rounded-lg">
            <a href="">About</a>
          </li>
          <li className="hover:text-white hover:bg-violet-600 px-5 py-3 rounded-lg">
            <a href="">Skills</a>
          </li>
          <li className="hover:text-white hover:bg-violet-600 px-5 py-3 rounded-lg">
            <a href="">Experiences</a>
          </li>
          <li className="hover:text-white hover:bg-violet-600 px-5 py-3 rounded-lg">
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
