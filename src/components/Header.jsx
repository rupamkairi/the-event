import React from "react";
import { useAppContext } from "../contexts/AppContext";

export default function Header() {
  const { setHeaderActive, headerScrolled } = useAppContext();

  return (
    <header
      id="header"
      className={
        "d-flex align-items-center" +
        (headerScrolled ? " header-scrolled" : " ")
      }
    >
      <div className="container-fluid container-xxl d-flex align-items-center">
        <div id="logo" className="me-auto"></div>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <div
            className="menu"
            onClick={() => {
              setHeaderActive((prev) => !prev);
            }}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
    </header>
  );
}
