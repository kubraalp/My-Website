import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useTranslation();
  const { changeLanguage } = useLanguage();

  return (
    <section className="p-4 sm:p-8 flex flex-col items-center dark:bg-darkBackGround2 dark:text-white">
      <div className="mt-16 sm:mt-32 p-4 sm:p-8 flex flex-col sm:flex-row max-w-2xl">
        <div className="flex-1 mb-4 sm:mb-0">
          <p className="text-2xl sm:text-4xl mt-4 sm:mt-8 sm:mr-12 mb-4 sm:mb-8 text-center sm:text-right leading-8 sm:leading-10">
            {t("footer.callToAction")}
          </p>
        </div>
        <div className="flex flex-col text-center sm:text-start gap-2 text-base sm:text-xl font-bold">
          <a
            href="https://github.com/kubraalp"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 text-gitHubBlue"
          >
            {t("Github")}
          </a>
          <a
            href="https://kubra-alp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2"
          >
            {t("footer.links.personalBlog")}
          </a>
          <a
            href="https://www.linkedin.com/in/k%C3%BCbra-alp-41636913b/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 text-linkedinBlue"
          >
            {t("Linkedin")}
          </a>
          <a
            href="mailto:kubra.alp.k@gmail.com"
            className="text-emailPink mb-2"
          >
            {t("Email")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
