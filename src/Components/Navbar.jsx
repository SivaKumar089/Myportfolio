import React, { useState } from "react";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false); // Close menu on mobile after clicking a link
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center p-2 sm:p-3 lg:p-5 sm:flex-col sm:leading-10 md:flex-row md:gap-2 lg:flex-row sticky top-0 bg-gray-700 z-50 shadow-md">
        <h1 className="text-4xl font-serif text-white">Siva Kumar</h1>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex sm:gap-2 lg:gap-5 text-white font-bold">
          <li className="px-3 py-1 cursor-pointer" onClick={() => scrollToSection("home")}>Home</li>
          <li className="px-3 py-1 cursor-pointer" onClick={() => scrollToSection("about")}>About Me</li>
          <li className="px-3 py-1 cursor-pointer" onClick={() => scrollToSection("education")}>Education</li>
          <li className="px-3 py-1 cursor-pointer" onClick={() => scrollToSection("skills")}>Skills</li>
          <li className="px-3 py-1 cursor-pointer" onClick={() => scrollToSection("myworks")}>My Works</li>
          <li className="px-3 py-1 cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <span
          className="sm:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          <i className="fa-solid fa-bars"></i>
        </span>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-gray-500 text-black transform transition-transform duration-300 ${
            showMenu ? "translate-x-0" : "translate-x-full"
          } z-50 shadow-lg p-5`}
        >
          <span
            className="absolute top-4 right-4 text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            <i className="fa-solid fa-xmark"></i>
          </span>

          <ul className="flex flex-col mt-10 space-y-4 font-bold">
            <li className="cursor-pointer" onClick={() => scrollToSection("home")}>Home</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("about")}>About Me</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("education")}>Education</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("skills")}>Skills</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("myworks")}>My Works</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </div>

        {/* Overlay (Backdrop) */}
        {showMenu && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </>
  );
};
