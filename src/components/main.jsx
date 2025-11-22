import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

function Main() {
  const [showModal, setShowModal] = useState(false);
  const goalRef = useRef(null); // посилання на article
  const timerRef = useRef(null);

  useEffect(() => {
    const goalSection = goalRef.current;
    let hasModalShown = false;

    if (!goalSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasModalShown) {
            // користувач бачить секцію — запускаємо таймер 30 сек
            timerRef.current = setTimeout(() => {
              setShowModal(true);
              hasModalShown = true; // щоб не показувати повторно
              document.body.style.overflow = "hidden"; // блокуємо прокрутку
            }, 30000); // 30 секунд
          } else {
            clearTimeout(timerRef.current);
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(goalSection);

    return () => {
      observer.disconnect();
      clearTimeout(timerRef.current);
      document.body.style.overflow = ""; // на випадок, якщо компонент зникне
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = ""; // розблокування прокрутки
  };

  return (
    <main className="app">
      <div className="home-page">
        <div className="main-logo">
          <div className="main-text">
            <h1>
              <span>English</span>
              <br />
              school
            </h1>
            <p>
              Триває набір на новий онлайн-курс. <br />
              Починайте своє навчання вже з 8-15 вересня.
            </p>
            <Link
              to="/feedback"
              className="button nav-link"
              style={{ textDecoration: "none" }}
            >
              Приєднатися
            </Link>
          </div>
        </div>

        <div className="main-info">
          <article ref={goalRef}>
            <h2>Мета створення веб-порталу</h2>
            <p>
              Наш веб-портал створено для того, щоб <b>допомогти учням</b> у 
              вивченні англійської мови, <em>надаючи сучасні інструменти 
              навчання, доступ до матеріалів та інтерактивні ресурси</em>.
            </p>

            <div className="about-goal">
              <h3>Завдання для досягнення мети:</h3>
              <ol type="A">
                <li>Надання якісних навчальних матеріалів.</li>
                <li>Інтерактивні курси і тести.</li>
                <li>Створення спільноти для обміну досвідом.</li>
              </ol>
            </div>
          </article>

          <aside>
            <h3>Новини</h3>
            <ul>
              <li>
                <a
                  href="https://buki.com.ua/news/vsi-chasy-angliiskoi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  👻 <i>Гайд "Як легко вивчити часи?"</i>
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/watch?v=9IE3DSfImlg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  💯 <i>Вебінар: Підготовка до IELTS</i>
                </a>
              </li>
            </ul>
            <p>*тисни на посилання</p>
          </aside>
        </div>

        {/* Модальне вікно */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Золоті правила навчання &#x1F4A1;</h2>
              <ul>
                <li>Навчайся регулярно — навіть 15 хвилин щодня важливі.</li>
                <li>Повторюй пройдений матеріал.</li>
                <li>Не бійся робити помилки — вони частина навчання.</li>
                <li>Використовуй англійську у житті.</li>
              </ul>
              <button onClick={closeModal}>Закрити</button>
            </div>
          </div>
        )}

        <section id="language-info">
          <h2>Загальна інформація про мову</h2>

          <p>
            <u>Англійська мова</u> є однією з найпоширеніших мов у світі. 
            Вона використовується в міжнародному спілкуванні, науці, бізнесі та культурі.
          </p>

          <div className="table">
            <table className="study-table">
              <caption>План вивчення англійської мови</caption>
              <thead>
                <tr>
                  <th rowSpan="2">№</th>
                  <th colSpan="2">Тема</th>
                  <th rowSpan="2">Рівень</th>
                  <th rowSpan="2">Примітки</th>
                </tr>
                <tr>
                  <th>Назва</th>
                  <th>Опис</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td rowSpan="2">Граматика</td>
                  <td>Часи дієслів</td>
                  <td>Базовий</td>
                  <td rowSpan="2">Основи для всіх тем</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Артиклі</td>
                  <td>Базовий</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td rowSpan="2">Лексика</td>
                  <td>Подорожі</td>
                  <td>Середній</td>
                  <td rowSpan="2">Розширення словникового запасу</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Робота</td>
                  <td>Середній</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td rowSpan="2">Аудіювання</td>
                  <td>Діалоги</td>
                  <td>Середній</td>
                  <td rowSpan="2">Важливо для іспитів</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Інтерв’ю</td>
                  <td>Високий</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5">Разом: 6 тем для вивчення</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <Link to="/educational-topics" className="nav-link">
            <i>Детальніше</i>
          </Link>
        </section>
      </div>
    </main>
  );
}

export default Main;
