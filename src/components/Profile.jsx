import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sabit profil verisi
  const profileInfo = {
    id: 1,
    email: "kubra.alp.k@gmail.com",
    first_name: "Kübra",
    last_name: "Alp",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  };

  useEffect(() => {
    // API çağrısı yapmak yerine doğrudan sabit verileri kullanıyoruz
    setTimeout(() => {
      setProfileData(profileInfo);
      setLoading(false);
    }, 500); // Kısa bir yükleme efekti için 500ms bekletiyoruz
  }, []);

  if (loading) {
    return (
      <section className="p-4 sm:p-8 bg-gray-100 flex flex-col items-center dark:bg-darkBackGround1 dark:text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-12 text-center mt-6 sm:mt-12">
          {t("profile.title")}
        </h2>
        <p>{t("loading")}</p>
      </section>
    );
  }

  return (
    <section className="p-4 sm:p-8 bg-gray-100 flex flex-col items-center dark:bg-darkBackGround1 dark:text-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-12 text-center mt-6 sm:mt-12">
        {t("profile.title")}
      </h2>

      {profileData ? (
        <div className="w-full max-w-5xl mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-lg dark:bg-profileback">
            <h3 className="text-xl sm:text-2xl font-semibold mt-2 sm:mt-8 ml-2 sm:ml-7 text-customPink font-playfair">
              {t("profile.basic")}
            </h3>
            <div className="leading-7 sm:leading-8 text-sm sm:text-lg ml-2 sm:ml-8 mt-4 sm:mt-6">
              <div className="flex flex-col sm:flex-row mb-3 sm:mb-4">
                <span className="font-bold mr-0 sm:mr-4 mb-1 sm:mb-0">
                  {t("profile.basicInfo.birthDate")}
                </span>
                <span>30/08/1994</span>
              </div>
              <div className="flex flex-col sm:flex-row mb-3 sm:mb-4">
                <span className="font-bold mr-0 sm:mr-4 mb-1 sm:mb-0">
                  {t("profile.basicInfo.education")}
                </span>
                <span>{t("profile.basicInfo.university")}</span>
              </div>
              <div className="flex flex-col sm:flex-row mb-3 sm:mb-4">
                <span className="font-bold mr-0 sm:mr-4 mb-1 sm:mb-0">
                  {t("profile.basicInfo.location")}
                </span>
                <span>{t("profile.basicInfo.location1")}</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-bold mr-0 sm:mr-4 mb-1 sm:mb-0">
                  {t("profile.basicInfo.preferredRole")}
                </span>
                <span>Frontend, UI</span>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              {t("profile.aboutMe")}
            </h3>
            <p className="text-sm sm:text-lg">{t("profile.aboutMe2")}</p>
          </div>
        </div>
      ) : (
        <p>{t("loading")}</p>
      )}
    </section>
  );
};

export default Profile;
