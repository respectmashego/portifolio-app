import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 8 years of experience building and desgining
            softwares.Currently , i love to work on web application using
            React,Tailwind,Next Js and GraphQl
          </p>

          <div>
            <Link to="portifolio" smooth={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer">
              Portifolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
            <img src={require('../assets/pp.jpg')} alt="my proflie"  className="rounded-2xl mx-auto  "  style={{ width: '700px' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
