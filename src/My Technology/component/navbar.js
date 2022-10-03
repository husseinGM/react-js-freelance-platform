import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItem, account } from "../data/data";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    setNav(nav)
  },[nav])
  return (
    <>
    <nav className="bg-redP2">
      <div className="container  mx-auto">
        <div className="flex ">
          <div className="brand sm:mx-2 sm:text-md mb-1 font-bold my-auto mx-6 text-xl text-white p-1">
            <Link className="opacity-100" to={"/"}>
              My Technology
            </Link>
          </div>
          <button onClick={e => {
            setNav(!nav);
          }} className="lg:hidden md:ml-auto sm:ml-auto text-white p-2">
            <i className={nav? 'fa fa-window-close': 'fa fa-bars transition-all duration-500'}></i>
          </button>
          <div
            className={
              nav
                ? "flex sm:flex-col md:flex-col top-11 left-16 justify-center rounded w-3/4 z-10 sm:absolute md:absolute"
                : "lg:flex lg:relative md:hidden sm:hidden justify-between w-4/5"
            }
          >
            <div id="toggle" className={nav? 'list md:block bg-redP2 ': 'list sm:hidden md:hidden lg:flex'}>
              <ul className="flex lg:h-full lg:flex-row md:text-center sm:flex-col text-white font-medium">
                {navItem.map((item) => (
                  <li key={item.id} className="mx-2 p-2">
                    <NavLink to={`/${item.path}`}><i className={item.icon}></i> {item.list}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className={nav? 'account sm:block md:block text-white bg-redP2 font-medium' : 'account sm:hidden md:hidden lg:block ml-auto text-white font-medium'}>
              <ul className={nav? 'register flex': 'register flex'}>
                {account.map((item) => (
                  <li key={item.id} className="p-2 mx-1 sm-text-center sm:mx-4 border-l-1">
                    <NavLink to={`/${item.account}`}>{item.account}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    {nav? <div className="md:absolute sm:absolute bg-black w-full h-full top-10 opacity-25"></div>: ''}
    </>
  );
};

export default Navbar;
