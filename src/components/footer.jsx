import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

function Footer() {
  return (
    <footer  className="app">
      <div id="contacts-info">
        <h2>Зворотній зв'язок</h2>

        <ul>
          <li><a href="/"><img src="/img/telegram.png" alt="Telegram" /></a></li>
          <li><a href="/"><img src="/img/social.png" alt="Instagram" /></a></li>
          <li><a href="/"><img src="/img/phone-call.png" alt="Phone" /></a></li>
        </ul>
          <Link to="/feedback" className="button nav-link" style={{ textDecoration: "none" }}>
              Зворотній зв'язок
          </Link>
      </div>

      <p>&copy; 2025 English school. Всі права захищені.</p>
    </footer>
  );
}

export default Footer;
