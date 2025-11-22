import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

function EducationalTopics() {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const topics = [
    {
      id: "grammar",
      title: "Граматика",
      items: ["Часи", "Артиклі", "Модальні дієслова"],
      description: "Тип завдань: тести, вправи, письмові завдання",
      img: "https://www.e-land.com.ua/wp-content/uploads/2022/02/grammatika-anglijskij-ukr.jpg",
    },
    {
      id: "vocabulary",
      title: "Лексика",
      items: ["Подорожі", "Робота", "Їжа"],
      description: "Тип завдань: тести, вправи, розмовні завдання",
      img: "https://www.e-land.com.ua/wp-content/uploads/2020/02/grammatika-leksika.jpg.webp",
    },
    {
      id: "listening",
      title: "Аудіювання",
      items: ["Діалоги", "Інтерв’ю", "Підкасти"],
      description: "Тип завдань: прослуховування, тестування",
      img: "https://englishouse.ua/uploads/elfinder/what-is-listening-in-english.jpg",
    },
    {
      id: "reading",
      title: "Читання",
      items: ["Тексти для розуміння", "Статті", "Книги"],
      description: "Тип завдань: читання, заповнення пропусків",
      img: "https://naurok.com.ua/uploads/files/2329/5274/5306_html/images/5274.014.png",
    },
    {
      id: "writing",
      title: "Письмо",
      items: ["Листи", "Есе", "Звіти"],
      description: "Тип завдань: письмові вправи, контрольні",
      img: "https://enguide.ua/s/public/upload/images/bd5f/a207/da20/b5c6/e6a2/c451/4820/610x350.jpeg",
    },
    {
      id: "speaking",
      title: "Говоріння",
      items: ["Діалоги", "Рольові ігри", "Презентації"],
      description: "Тип завдань: усні завдання, рольові ігри",
      img: "https://fs04.vseosvita.ua/04012o5w-1849-378x198.jpg",
    },
    {
      id: "phonetics",
      title: "Фонетика",
      items: ["Звуки", "Акцент", "Інтонація"],
      description: "Тип завдань: аудіювання, вимова",
      img: "https://tsikavi-fakty.com.ua/wp-content/uploads/2022/09/6298c3e0426bb603725314.png",
    },
    {
      id: "lexicon",
      title: "Словниковий запас",
      items: ["Фразеологізми", "Ідіоми", "Синоніми та антоніми"],
      description: "Тип завдань: вправи на словниковий запас",
      img: "https://lh3.googleusercontent.com/XEsRoZl3xeRpbWZeezrra-NEX3EJdtnA8ctTk-rKaS59Cp5TAezZFy2uMGC0SgWsefH5xmStlKRCqfgD-E0V664nkiQA_EFTHlmUpdzFLwQI0z0iXjqJLwvyrAs_iaIBHWco7fY3FrQYPuojVNpRz-4",
    },
    {
      id: "culture",
      title: "Культура та традиції",
      items: ["Свята", "Історія", "Література"],
      description: "Тип завдань: читання, обговорення",
      img: "https://naurok.com.ua/uploads/files/75500/126452/137987_html/images/126452.026.jpg",
    },
    {
      id: "exam-prep",
      title: "Підготовка до іспитів",
      items: ["IELTS", "TOEFL", "Cambridge Exams"],
      description: "Тип завдань: тести, пробні завдання",
      img: "https://english-time.org/storage/uploads/mo9hC3wLBc7zfx0VHzFqyAZiUZ9noOPCFpFbD6OC.png.pagespeed.ce.8LJyiK8xmg.png",
    },
  ];

  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <div>
          <Link to="/" className="button nav-link" style={{ textDecoration: "none" }}>
            Повернутися на головний екран
          </Link>
        </div>
        <div className="header-logo">
          <img src="/img/logo.svg" alt="logo" />
          <h1>English school</h1>
        </div>
      </header>

      <div className="accordion-container">
        <button
          className="accordion"
          onClick={() => setAccordionOpen(!accordionOpen)}>
          Навчальні теми
        </button>
        {accordionOpen && (
          <div className="panel">
            <ul>
              {topics.map((topic) => (
                <li key={topic.id}>
                  <a href={`#${topic.id}`}>{topic.title}</a>
                  <p>{topic.items.join(", ")}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <section className="educational-topics">
        <h2>Список навчальних тем</h2>
        <input
          type="text"
          id="searchInput"
          placeholder="🔍 Введіть назву теми..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="topics-list">
          {filteredTopics.map((topic) => (
            <div className="topic" id={topic.id} key={topic.id}>
              <h3>{topic.title}</h3>
              <ul>
                {topic.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p>{topic.description}</p>
              <img src={topic.img} alt={topic.title} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default EducationalTopics;
