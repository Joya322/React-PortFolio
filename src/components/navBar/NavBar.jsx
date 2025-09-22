import { useState } from "react";
import Link from "../Link/Link";
import "./NavBar.css";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Skills", path: "/skills" },
    { id: 4, name: "Experiences", path: "/experiences" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

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

        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="md:hidden text-3xl font-bold  "
        >
          {open ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </div>

        {/* routes */}
        <ul
          className={`flex flex-col md:flex-row absolute md:static duration-1000 justify-center md:items-center gap-2 md:gap-5 text-lg font-medium   ${
            open
              ? " top-20 right-25 shadow-lg p-2 bg-gradient-to-b from-sky-50 to-sky-100 rounded-lg"
              : "-top-90 right-25"
          }    `}
        >
          {routes.map((route) => (
            <Link route={route} key={route.id} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
