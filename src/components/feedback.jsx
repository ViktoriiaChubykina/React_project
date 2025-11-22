import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

function Feedback() {
  const detailsRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const details = detailsRef.current;
    const tooltip = tooltipRef.current;

    const showTooltip = () => {
      details.classList.add("highlight");

      // Позиціонування tooltip праворуч від textarea
      const rect = details.getBoundingClientRect();
      tooltip.style.left = rect.right + 10 + "px";
      tooltip.style.top = rect.top + "px";
      tooltip.style.display = "block";
    };

    const hideTooltip = () => {
      details.classList.remove("highlight");
      tooltip.style.display = "none";
    };

    details.addEventListener("mouseover", showTooltip);
    details.addEventListener("mouseout", hideTooltip);

    // Очищення подій при розмонтуванні
    return () => {
      details.removeEventListener("mouseover", showTooltip);
      details.removeEventListener("mouseout", hideTooltip);
    };
  }, []);

  return (
    <div className="app form-feedback">
      <Link to="/" className="button nav-link" style={{ textDecoration: "none" }}>
        Повернутися на головний екран
      </Link>

      <form>
        <fieldset>
          <legend>Персональна інформація</legend>

          <label htmlFor="full-name">Призвіще та ім'я:</label>
          <input type="text" id="full-name" name="full-name" placeholder="Призвіще ім'я" required />
          <br/>
          <br/>

          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
          <br/>
          <br/>

          <label htmlFor="age">Вік:</label>
          <input type="number" id="age" name="age" min="0" max="120" required />
          <br/>
          <br/>

          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=]).{8,16}$"
            title="Пароль може містити лише латинські літери та цифри"
            required
          />
          <br/>
          <br/>

          <label htmlFor="study-level">Чи вже вивчаєте мову?</label>
          <select name="study-level" id="study-level" required defaultValue="">
            <option value="" disabled hidden>
              Оберіть варіант
            </option>
            <option value="profi">Так, я профі</option>
            <option value="beginner">Так, але знаю початки</option>
            <option value="planning">Планую</option>
            <option value="no">Ні</option>
          </select>
        </fieldset>

        <br/>

        <label htmlFor="feedback-goal">Мета зворотнього зв’язку:</label>
        <select name="feedback-goal" id="feedback-goal" required defaultValue="">
          <option value="" disabled hidden>
            Оберіть варіант
          </option>
          <option value="collaboration">Співпраця</option>
          <option value="complaint">Скарга на неякісний контент</option>
          <option value="proposal">Пропозиція</option>
          <option value="error">Наявність помилки</option>
        </select>
        <br/>
        <br/>

        <label htmlFor="details">Детально:</label>
        <textarea
          id="details"
          name="details"
          maxLength="500"
          rows="5"
          cols="50"
          placeholder="Опишіть ваше питання чи проблему..."
          ref={detailsRef}
        ></textarea>
        <div id="details-tooltip" className="tooltip" ref={tooltipRef}>
          Ваша думка для нас важлива! Конкретизуйте мету звернення, будь ласка.
        </div>
        <br/>
        <br/>

        <div className="checkbox">
          <input type="checkbox" id="consent" name="consent" required />
          <label htmlFor="consent">Я даю згоду на обробку моїх персональних даних</label>
        </div>
        <br/>
        <br/>

        <button type="submit" className="button">Відправити</button>
      </form>
    </div>
  );
}

export default Feedback;
