import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../components/firebase-config";
import MenuItems from "./MenuItems";
import getMenuItems from "../menuItems";
import "../App.css";

const Navbar = () => {
  const menuItems = getMenuItems();
  const [isAuth, setIsAuth] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogOutClick = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
      localStorage.clear();
      window.location.pathname = "/";
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuth(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>

        <ul className={`menus ${mobileMenuOpen ? "open" : ""}`}>
          {menuItems.map((menu, index) => (
            <MenuItems items={menu} key={index} depthLevel={0} />
          ))}
        </ul>

        <div className="menu-items auth-controls">
          {!isAuth ? (
            <a href="/login">Login</a>
          ) : (
            <div className="auth-links">
              <a href="/createpost">CreatePost</a>
              <button className="LogOut-Button" onClick={handleLogOutClick}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
