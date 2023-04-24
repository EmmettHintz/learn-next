import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-full w-64 bg-transparent flex flex-col p-6 shadow-2xl">
      <div className="space-y-4">
        <Link href="/" passHref>
          <span className="text-white text-xl font-extrabold mb-6 cursor-pointer underline underline-offset-8 decoration-white font-sans transition-all duration-300 ease-in-out  hover:text-teal-300 hover:decoration-teal-300 hover:scale-110">
            Music App
          </span>
        </Link>
        <ul className="space-y-4">
          <li>
            <Link href="/" passHref>
              <span className="text-white hover:text-gray-400 cursor-pointer">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <span className="text-white hover:text-gray-400 cursor-pointer">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <span className="text-white hover:text-gray-400 cursor-pointer">
                Contact
              </span>
            </Link>
          </li>
          {/* Add more NavItems as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
