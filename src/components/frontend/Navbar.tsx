"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download, Rocket } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-lg bg-black/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 flex items-center"
          >
            <Rocket size={20} className="inline-block mr-2 text-purple-400" />
            <span>Cosmic Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-blue-100 hover:text-cyan-300 transition-colors font-semibold relative group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Resume Button */}
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white px-4 py-2 rounded-md hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              <Download size={16} />
              <span>Star Map</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-blue-100 hover:text-cyan-300 p-2 rounded-md focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-md z-40 pt-20">
            <div className="px-4 py-6 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-blue-100 hover:text-cyan-300 transition-colors text-lg font-medium block"
                >
                  {link.title}
                </Link>
              ))}
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white px-4 py-2 rounded-md w-full justify-center">
                <Download size={16} />
                Star Map
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
