import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store/store";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./i18n";
import "./index.css";
function App() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    toast("Sayfama hoş geldin");
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <Provider store={store}>
      <div className="app-container">
        <ToastContainer position="top-left" />
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
