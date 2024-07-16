import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/workintech")
      .then((response) => setProfileData(response.data))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    <section className="p-8 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-center">Profile</h2>

      {profileData ? (
        <div className=" w-full max-w-5xl  mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
          <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Basic Information</h3>
            <p>
              <strong>Birth Date:</strong> 30/08/1994
            </p>
            <p>
              <strong>Education:</strong> Computer and Instructional
              Technologies Education
            </p>
            <p>
              <strong>Location:</strong> Ankara, Turkey
            </p>
            <p>
              <strong>Work Experience:</strong> 6 years
            </p>
          </div>
          <div className="p-4dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">About me</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus magnam provident quia quisquam molestiae error maxime
              ducimus rem! Minus cum repudiandae delectus quod numquam incidunt
              vel vitae unde quis iste.
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default Profile;
