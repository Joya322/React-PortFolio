
import { Outlet } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';
const Root = () => {
    return (
      <div className="bg-gradient-to-b from-sky-50 to-sky-200  w-full h-svh">
          <Navbar />
        <div className="w-11/12 mx-auto py-6 px-10">
          <Outlet />
        </div>
      </div>
    );
};

export default Root;