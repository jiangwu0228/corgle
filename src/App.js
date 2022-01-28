import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  //get system theme
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  //set default theme as system theme
  const [darkTheme, setDarkTheme] = useState(getCurrentTheme);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Nav />
        <Footer />
      </div>
    </div>
  );
}

export default App;
