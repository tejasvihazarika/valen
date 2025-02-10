import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import ValentinePrompt from "./Components/ValentinePrompt/ValentinePrompt";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showValentine, setShowValentine] = useState(false);

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} />

      <main>
        {showValentine ? (
          <ValentinePrompt setShowValentine={setShowValentine} />
        ) : (
          <>
            {currentPage === "home" && <Home setShowValentine={setShowValentine} />}
            {currentPage === "about" && <About />}
            {currentPage === "gallery" && <Gallery />}
          </>
        )}
      </main>
    </div>
  );
}

export default App;