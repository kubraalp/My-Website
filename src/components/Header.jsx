import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/settingsSlice";
import { useTranslation } from "react-i18next";
import { setLanguage } from "../features/languageSlice";
import ProfileImg from "../img/profile.jpg";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.setting.darkMode);
  const { t, i18n } = useTranslation();
  const currentLanguage = useSelector((state) => state.language.language);

  const handleLanguageChange = (lng) => {
    dispatch(setLanguage(lng));
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  return (
    <header className="p-8 bg-gray-100 flex flex-col items-center dark:bg-darkBackGround1">
      <div className="w-full max-w-5xl flex justify-end mb-4">
        <p className="px-5">
          <button
            className="flex items-center"
            onClick={() => dispatch(toggleDarkMode())}
          >
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => dispatch(toggleDarkMode())}
              className="toggle-checkbox"
            />
            <span className="ml-2 text-gray-500 font-semibold text-base dark:text-customGray">
               {darkMode ? t("header.lightMode") : t("header.darkMode")}
            </span>
          </button>
        </p>
        <span className="flex items-center mr-5 text-gray-500 ">|</span>
        <p className="text-gray-500 font-semibold">
          <button
            className="text-customPink hover:text-customPink cursor-pointer"
            onClick={() =>
              handleLanguageChange(currentLanguage === "en" ? "tr" : "en")
            }
          >
            {currentLanguage === "en"}
              {t('header.changeLanguage')}
          </button>{" "}
          {t('header.add')}
        </p>
      </div>
      <div className="w-full max-w-5xl flex justify-between items-center mb-4 dark:text-white">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="mt-2 text-2xl"> {t("header.greeting")}</p>
          <h2 className="text-5xl mt-2 mr-20 font-medium leading-[64px] text-customBlack dark:text-white">
          {t("header.intro")}
            <br />
           
          </h2>
          <div className="flex justify-center md:justify-start mt-4">
            <a
              href="https://www.linkedin.com/in/k%C3%BCbra-alp-41636913b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-customPink mr-4 dark:text-white"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kubraalp"
              className="hover:text-customPink mr-4"
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
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:kubra.alp.k@gmail.com"
              className="text-customPink hover:text-pink-700 mr-4"
            >
              kubra.alp.k@gmail.com
            </a>
          </p>
        </div>
        <div className="relative bg-customPink p-1 rounded-xl md:ml-8 mb-4 md:mb-0">
          <img
            src={ProfileImg}
            alt="Kübra'nın Profil Resmi"
            className="width-[350px] h-auto  rounded-lg z-10 translate-x-4 translate-y-4"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
