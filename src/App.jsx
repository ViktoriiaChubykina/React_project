import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Feedback from "./components/feedback";
import EducationalTopics from "./components/educationalTopics";

function App() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const hour = new Date().getHours();

    // Якщо з 21:00 до 06:00 → додаємо клас night
    if (hour >= 21 || hour < 6) {
      document.body.classList.add("night");
    } else {
      document.body.classList.remove("night");
    }
  }, []);


  return (
    <Router>
      <div className="night-overlay" ref={overlayRef}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/educational-topics" element={<EducationalTopics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
