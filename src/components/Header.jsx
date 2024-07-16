import ProfileImg from "../img/profile.jpg";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toggleDarkMode } from "../features/settingsSlice";

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.setting.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="p-8 bg-gray-100 flex flex-col items-center dark:bg-gray-800 dark:text-white  ">
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
              className="toggle-checkbox "
            />
            <span className="ml-2 text-gray-500 font-semibold text-base">
              DARK MODE
            </span>
          </button>
        </p>
        <span className=" flex items-center mr-5 text-gray-500 text-2xl  ">
          I
        </span>
        <p className="text-gray-500 font-semibold">
          {" "}
          <span className="text-pink-500 hover:text-pink-700">TÜRKÇE</span>'YE
          GEÇ
        </p>
      </div>
      <div className="w-full max-w-5xl flex justify-between items-center mb-4">
        <div className="text-center md:text-left mb-4 md:mb-0 ">
          <p className="mt-2">Hi! 👋,</p>
          <h2 className="text-5xl mt-2 mr-20 font-medium  leading-[64px] text-customBlack ">
            I'm Kübra. I'm a front-end developer. I can craft solid and scalable
            frontend products.
            <br />
            Let's meet!
          </h2>

          <div className="flex justify-center md:justify-start mt-4">
            <a
              href="https://www.linkedin.com/in/k%C3%BCbra-alp-41636913b/"
              target="_blank"
              className="text-black hover:text-pink-700 mr-4"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              target="_blank"
              href="https://github.com/kubraalp"
              className="hover:text-pink-700 mr-4"
            >
              <FaGithub size={24} />
            </a>
          </div>
          <p className="mt-2 text-gray-600  ">
            Currently <span className="text-customPink">Freelancing</span> for{" "}
            <span className="text-customPink">UX, UI, & Web Design </span>
            Project .
          </p>
          <p className="mt-2 text-gray-600">
            Invite me to join your team ➝{" "}
            <a
              target="_blank"
              href="mailto:kubra.alp.k@gmail.com"
              className="text-pink-500 hover:text-pink-700 mr-4"
            >
              kubra.alp.k@gmail.com
            </a>
          </p>
        </div>
        <div className="relative bg-customPink p-1 rounded-xl ">
          <img
            src={ProfileImg}
            alt="Kübra"
            className=" width-[350px] rounded-lg z-10 translate-x-4 translate-y-4 "
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
