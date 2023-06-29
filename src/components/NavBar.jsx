import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portifolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20  bg-black px-4  text-white  fixed">
      <h1 className="text-5xl ml-2"> Respect</h1>
      <ul className=" hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
        <Link smooth={500} to={link}>{link}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {
        nav &&(
          <ul className="flex flex-col md:hidden justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-black to-gray-500">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 py-6 cursor-pointer capitalize text-4xl ">
            <Link onClick={()=>{
              setNav(!nav)
            }} smooth={500} to={link} >{link}</Link>
          </li>
        ))}
      </ul>
        )
      }
     
    </div>
  );
};

export default NavBar;
