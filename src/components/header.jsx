import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

function Header() {
  return (
    <header id="main-page" className="app">
      <nav>
        <div className="nav-logo">
          <img src="/img/logo.svg" alt="logo" />
          <p>
            English<br/>school
          </p>
        </div>

        <ul>
          <li>
            <Link to="/" className="header-button nav-link">
                Головна
            </Link>
          </li>
          <li>
            <Link to="/educational-topics" className="header-button nav-link">
                Навчальні теми
            </Link>
          </li>
          <li>
            <Link to="/feedback" className="header-button nav-link">
                Зворотній зв'язок
            </Link>
          </li>
        </ul>

        <div className="header-buttons">
          <Link to="/feedback" className="button nav-link" style={{ textDecoration: "none" }}>
            Перейти в особистий кабінет
          </Link>

            <Link to="/feedback" className="header-buttons-2 nav-link" style={{ textDecoration: "none" }}>
                Зареєструватися
            </Link>

        </div>
      </nav>
    </header>
  );
}

export default Header;
