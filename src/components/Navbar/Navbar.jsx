import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/skills">Skills</NavLink>
      </li>
      <li>
        <NavLink to="/experiences">Experiences</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 bg-gradient-to-t from-sky-50 to-sky-100 opacity-90 shadow-lg px-0 py-7">
      <div className="w-11/12 mx-auto px-10">
        <div className="navbar-start ">
          <a className="btn btn-ghost text-3xl font-bold px-0">
            Jannatul Ferdoush
          </a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 text-lg hidden lg:flex justify-end gap-2">
            {links}
          </ul>

          {/* menu icon */}
          <div className="dropdown  lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
