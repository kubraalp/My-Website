import React, { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import Header from "./Header";
import Skills from "./Skills";
import Profile from "./Profile";
import Projects from "./Projects";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";

function AppContent() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { changeLanguage } = useLanguage();

  useEffect(() => {
    toast("Sayfama hoş geldin");
  }, []);

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <ToastContainer position="top-left" />
      <Header toggleDarkMode={toggleDarkMode} />
      <Skills />
      <Profile />
      <Projects />
      <Footer changeLanguage={changeLanguage} />
    </div>
  );
}

export default AppContent;
