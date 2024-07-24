import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "react-i18next";
import ProfileImg from "../img/profile.jpg";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme(); // Tema yönetimi
  const { changeLanguage } = useLanguage(); // Dil yönetimi
  const { t, i18n } = useTranslation(); // Çeviri işlemleri

  // Dil değişim fonksiyonu
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="p-8 bg-gray-100 flex flex-col items-center dark:bg-darkBackGround1 ">
      <div className="w-full max-w-5xl flex justify-end mb-4">
        <button
          className="flex items-center px-5 text-gray-500 dark:text-customGray"
          onClick={toggleDarkMode}
          aria-label={darkMode ? t("header.lightMode") : t("header.darkMode")}
        >
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
            className="toggle-checkbox"
            aria-label={darkMode ? t("header.lightMode") : t("header.darkMode")}
          />
          <span className="ml-2 font-semibold text-base">
            {darkMode ? t("header.lightMode") : t("header.darkMode")}
          </span>
        </button>
        <span className="flex items-center mr-5 text-gray-500"> | </span>
        <button
          className="text-customPink hover:text-customPink font-semibold"
          onClick={() =>
            handleLanguageChange(i18n.language === "en" ? "tr" : "en")
          }
          aria-label={i18n.language === "en" ? "TÜRKÇE" : "İNGİLİZCE "}
        >
          {i18n.language === "en" ? "TÜRKÇE" : "İNGİLİZCE"}
        </button>
        <span className="text-gray-500">{t("header.add")}</span>
      </div>

      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center mb-4 dark:text-white">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-2xl mt-2">{t("header.greeting")}</p>
          <h2 className="text-5xl mt-2 mr-20 font-medium leading-[64px] text-customBlack dark:text-white">
            {t("header.intro")}
          </h2>
          <div className="flex justify-center md:justify-start mt-4">
            <a
              href="https://www.linkedin.com/in/k%C3%BCbra-alp-41636913b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-customPink mr-4 dark:text-white"
              aria-label="LinkedIn Profilim"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="https://github.com/kubraalp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-customPink mr-4 dark:text-white"
              aria-label="GitHub Profilim"
            >
              <FaGithub size={24} />
            </a>
          </div>
          <p className="mt-2 text-gray-600 dark:text-white">
            {t("header.currently")}{" "}
            <span className="text-customPink">{t("header.Freelancing")}</span>{" "}
            <span>{t("header.for")} </span>
            <span className="text-customPink">{t("header.Web")} </span>
            <span>{t("header.Project")} </span>
          </p>
          <p className="mt-2 text-gray-600 dark:text-white">
            {t("header.invite")}{" "}
            <a
              href="mailto:kubra.alp.k@gmail.com"
              className="text-customPink hover:text-pink-700"
              aria-label="E-posta Gönder"
            >
              kubra.alp.k@gmail.com
            </a>
          </p>
        </div>
        <div className="relative bg-customPink p-1 rounded-xl md:ml-8 mb-4 md:mb-0">
          <img
            src={ProfileImg}
            alt={t("header.profileImageAlt")}
            className="w-[400px] h-auto rounded-lg z-10 translate-x-4 translate-y-4"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
