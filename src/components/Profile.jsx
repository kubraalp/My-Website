import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/workintech")
      .then((response) => setProfileData(response.data))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    <section className="p-8 bg-gray-100 flex flex-col items-center dark:bg-darkBackGround1 dark:text-white ">
      <h2 className="text-3xl font-bold mb-12 text-center mt-12 ">
        {t("profile.title")}
      </h2>

      {profileData ? (
        <div className=" w-full max-w-5xl  mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="  p-4 bg-white  rounded-lg shadow-lg dark:bg-profileback">
            <h3 className="text-2xl font-semibold mt-8 ml-7 text-customPink font-playfair  ">
              {t("profile.basic")}
            </h3>
            <div className="leading-8 text-lg ml-8 mt-6 ">
              <div className="flex mb-4">
                <span className="font-bold mr-4">{t("profile.basicInfo.birthDate")}</span>
                <span>30/08/1994</span>
              </div>
              <div className="flex mb-4">
                <span className="font-bold mr-4">{t("profile.basicInfo.education")}</span>
                <span>{t("profile.basicInfo.university")}</span>
              </div>
              <div className="flex mb-4">
                <span className="font-bold mr-4">{t("profile.basicInfo.location")}</span>
                <span>{t("profile.basicInfo.location1")}</span>
              </div>
              <div className="flex">
                <span className="font-bold mr-4">{t("profile.basicInfo.preferredRole")}</span>
                <span>Frontend, UI</span>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-lg ">
            <h3 className="text-2xl font-semibold mb-2">{t("profile.aboutMe")}</h3>
            <p className="text-lg">
              {t(
                "profile.aboutMe2"
              )}
            </p>
          </div>
        </div>
      ) : (
        <p>{t("Loading...")}</p>
      )}
    </section>
  );
};

export default Profile;
