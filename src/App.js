import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
