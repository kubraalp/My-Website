import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { setLanguage } from "./features/languageSlice";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currentLanguage = useSelector((state) => state.language.language);

  const handleLanguageChange = (lng) => {
    dispatch(setLanguage(lng));
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange("en")}>
        {t("changeLanguageToEnglish")}
      </button>
      <button onClick={() => handleLanguageChange("tr")}>
        {t("changeLanguageToTurkish")}
      </button>
    </div>
  );
};

export default LanguageSwitcher;