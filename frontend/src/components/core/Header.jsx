import { useState } from "react";
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import "../../styles/header.css"
import logo from "../../assets/img/logo.png"

export function Header() {
  

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="NicaraguaGo Logo" />
        NicaraguaGo</div>
    </header>
  );
}
