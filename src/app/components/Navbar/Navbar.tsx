"use client";

import { useEffect, useState } from "react";
import { fetchMenus } from "@/app/lib/wordpress/fetchMenus";
import type { MenusData } from "@/app/lib/types";

const Navbar: React.FC = () => {
  const [menus, setMenus] = useState<MenusData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const getMenus = async () => {
      const fetchedMenus = await fetchMenus();
      setMenus(fetchedMenus);
    };

    getMenus();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!menus) {
    return <div>Loading...</div>;
  }

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="top-bar-right">
          <a href="/">Contact Us</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
      </div>
      <div className="main-header">
        <div className="logo">
          <a href="/">Company</a>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`main-navigation ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-menu">
            {menus.menus.nodes[0].menuItems.nodes.map((menuItem) => (
              <li key={menuItem.path} className="menu-item">
                <a href={menuItem.path}>{menuItem.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
