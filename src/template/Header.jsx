import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const brand = "Niko Bocheser";
  const cvUrl = "/CV.pdf";

  return (
    <header
      className="w-full top-0 z-50 backdrop-blur-sm border-b"
      style={{
        background:
          "linear-gradient(90deg, #174F70 0%, rgba(23,79,112,0.95) 100%)",
        borderBottomColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-4">
          <div
            className="w-10 h-10 flex items-center justify-center text-white font-bold text-lg shadow"
            style={{
              backgroundColor: "#0f3b52",
              borderRadius: 0,
              border: "2px solid rgba(255,255,255,0.06)",
            }}
          >
            {brand.charAt(0)}
          </div>
          <div className="text-white">
            <div className="font-semibold tracking-tight">{brand}</div>
            <div className="text-xs text-white/80 -mt-1">
              Lập trình viên Fullstack
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-white">
          <a className="text-sm hover:underline" href="#home">
            Home
          </a>
          <a className="text-sm hover:underline" href="#about">
            About
          </a>
          <a className="text-sm hover:underline" href="#projects">
            Projects
          </a>
          <a className="text-sm hover:underline" href="#contact">
            Contact
          </a>

          <a
            href={cvUrl}
            download
            className="ml-4 px-4 py-2 bg-white text-[#174F70] font-medium rounded-none border-2 border-white/10 transition-transform hover:-translate-y-0.5 focus:outline-none"
          >
            Tải CV
          </a>
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 rounded-none border border-white/10 text-white hover:bg-white/5 transition-colors"
            style={{ backgroundColor: "transparent" }}
          >
            {open ? "Đóng" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t border-white/6"
          style={{ background: "#123845" }}
        >
          <div className="px-6 py-4 flex flex-col gap-3 text-white">
            <a href="#home" className="py-2 border-b border-white/6">
              Home
            </a>
            <a href="#about" className="py-2 border-b border-white/6">
              About
            </a>
            <a href="#projects" className="py-2 border-b border-white/6">
              Projects
            </a>
            <a href="#contact" className="py-2 border-b border-white/6">
              Contact
            </a>
            <a
              href={cvUrl}
              download
              className="mt-2 inline-block px-4 py-2 bg-white text-[#174F70] font-medium rounded-none border-2 border-white/10 text-center"
            >
              Tải CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
