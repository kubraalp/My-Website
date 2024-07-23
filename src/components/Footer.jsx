import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useTranslation(); // useTranslation'dan t fonksiyonunu al
  const { changeLanguage } = useLanguage();

  return (
    <section className="p-8 flex flex-col items-center dark:bg-darkBackGround2 dark:text-white">
      <div className="mt-32 p-8 flex max-w-2xl">
        <div className="flex-1">
          <p className="text-4xl mt-8 mr-12 mb-8 text-right leading-10">
            {t("footer.callToAction")}
          </p>
        </div>
        <div className="flex flex-col text-start gap-2 text-xl font-bold">
          <a
            href="https://github.com/kubraalp"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 text-gitHubBlue"
          >
            {t('Github')}
          </a>
          <a
            href="https://example.com/personal-blog" // Buraya gerçek URL ekleyin
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2"
          >
            {t('footer.links.personalBlog')}
          </a>
          <a
            href="https://www.linkedin.com/in/k%C3%BCbra-alp-41636913b/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 text-linkedinBlue"
          >
            {t('Linkedin')}
          </a>
          <a
            href="mailto:kubra.alp.k@gmail.com"
            className="text-emailPink mb-2"
          >
            {t('Email')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;