"use client";

import { useState, useRef, useCallback } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import NavBranding from "../molecules/navbar/navBranding";
import NavMenu from "../molecules/navbar/navMenu";
import BtnContactanos from "../molecules/navbar/btnContactanos";
import MobileMenuToggle from "../molecules/navbar/mobileMenuToggle";
import MobileMenuPanel from "../molecules/navbar/mobileMenuPanel";

export default function Navbar({ menu }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  useClickOutside(menuRef, closeMenu, isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">

        <NavBranding onClick={closeMenu} />

        <NavMenu
          menu={menu}
          className="hidden md:flex"
          orientation="horizontal"
        />

        <div className="flex items-center" ref={menuRef}>
          <BtnContactanos className="hidden md:block" />
          <MobileMenuToggle
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen(!isMenuOpen)}
          />
          {isMenuOpen && (
            <MobileMenuPanel menu={menu} onClose={closeMenu} />
          )}
        </div>

      </nav>
    </header>
  );
}