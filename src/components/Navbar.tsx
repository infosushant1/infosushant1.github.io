import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["about", "skills", "projects", "achievements", "certifications", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        Sushant<span>.</span>
      </a>

      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>
            {link[0].toUpperCase() + link.slice(1)}
          </a>
        ))}
      </nav>

      <div className="nav-right">
        <a className="nav-contact" href="#contact">Let's talk <span>↗</span></a>
        <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}
