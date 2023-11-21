import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const locales = {
  en: {
    title: "EN",
  },
  ar: {
    title: "AR",
  },
};
const MainNav = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <nav className="px-4 lg:px-0 fixed top-0 z-30 left-0 right-0 bg-white dark:bg-[#121212] shadow-md">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between ${
          i18n.resolvedLanguage === "ar" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <a href="#">
          <img className="h-20" src="bassami-logo-2.png" alt="Albassami logo" />
        </a>

        <div
          className={`flex ${
            i18n.resolvedLanguage === "ar" ? "flex-row-reverse" : "flex-row"
          } items-center gap-4`}
        >
          <ul
            className={`animate-expand flex ${
              open ? "block" : "hidden"
            } md:flex md:mr-8 md:gap-12 items-center font-display absolute md:static top-[100%] left-0 z-20 right-0 flex-col md:flex-row justify-center py-6 gap-8 bg-primary md:bg-transparent text-white md:text-darkPrimary dark:md:text-primary`}
          >
            <li>
              <a
                className="font-semibold text-lg hover:font-bold transition duration-150 md:hover:text-primary hover:underline hover:underline-offset-8 hover:decoration-4"
                href="/"
              >
                {t("nav.home")}
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-lg hover:font-bold transition duration-150 md:hover:text-primary hover:underline hover:underline-offset-8 hover:decoration-4"
                href="#about"
              >
                {t("nav.about")}
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-lg hover:font-bold transition duration-150 md:hover:text-primary hover:underline hover:underline-offset-8 hover:decoration-4"
                href="#FAQs"
              >
                {t("nav.faq")}
              </a>
            </li>
            <li className="animate-bounce">
              <a
                className="font-semibold text-lg hover:font-bold transition duration-150 md:hover:text-primary hover:underline hover:underline-offset-8 hover:decoration-4"
                href="#trace"
              >
                {t("nav.trace")}
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-lg hover:font-bold transition duration-150 md:hover:text-primary hover:underline hover:underline-offset-8 hover:decoration-4"
                href="#contact"
              >
                {t("nav.contact")}
              </a>
            </li>
          </ul>
          <svg
            className="cursor-pointer dark:hidden"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => document.documentElement.classList.toggle("dark")}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g clip-path="url(#clip0_429_11017)">
                {" "}
                <path
                  d="M20.9955 11.7115L22.2448 11.6721C22.2326 11.2847 22.0414 10.9249 21.7272 10.698C21.413 10.4711 21.0113 10.4029 20.6397 10.5132L20.9955 11.7115ZM12.2885 3.00454L13.4868 3.36028C13.5971 2.98873 13.5289 2.58703 13.302 2.2728C13.0751 1.95857 12.7153 1.76736 12.3279 1.75516L12.2885 3.00454ZM20.6397 10.5132C20.1216 10.667 19.5716 10.75 19 10.75V13.25C19.815 13.25 20.6046 13.1314 21.3512 12.9098L20.6397 10.5132ZM19 10.75C15.8244 10.75 13.25 8.17564 13.25 5H10.75C10.75 9.55635 14.4437 13.25 19 13.25V10.75ZM13.25 5C13.25 4.42841 13.333 3.87841 13.4868 3.36028L11.0902 2.64879C10.8686 3.39542 10.75 4.18496 10.75 5H13.25ZM12 4.25C12.0834 4.25 12.1665 4.25131 12.2492 4.25392L12.3279 1.75516C12.219 1.75173 12.1097 1.75 12 1.75V4.25ZM4.25 12C4.25 7.71979 7.71979 4.25 12 4.25V1.75C6.33908 1.75 1.75 6.33908 1.75 12H4.25ZM12 19.75C7.71979 19.75 4.25 16.2802 4.25 12H1.75C1.75 17.6609 6.33908 22.25 12 22.25V19.75ZM19.75 12C19.75 16.2802 16.2802 19.75 12 19.75V22.25C17.6609 22.25 22.25 17.6609 22.25 12H19.75ZM19.7461 11.7508C19.7487 11.8335 19.75 11.9166 19.75 12H22.25C22.25 11.8903 22.2483 11.781 22.2448 11.6721L19.7461 11.7508Z"
                  fill="#035AA6"
                ></path>{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="clip0_429_11017">
                  {" "}
                  <rect width="24" height="24" fill="white"></rect>{" "}
                </clipPath>{" "}
              </defs>{" "}
            </g>
          </svg>
          <svg
            className="cursor-pointer hidden dark:block"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => document.documentElement.classList.toggle("dark")}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g
                clip-path="url(#a)"
                stroke="#035AA6"
                stroke-width="1.5"
                stroke-miterlimit="10"
              >
                {" "}
                <path
                  d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  fill="#3977ff"
                  fill-opacity=".16"
                ></path>{" "}
                <path d="M12 19v4M12 1v4" stroke-linecap="round"></path>{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="a">
                  {" "}
                  <path fill="#ffffff" d="M0 0h24v24H0z"></path>{" "}
                </clipPath>{" "}
              </defs>{" "}
            </g>
          </svg>
          <svg
            viewBox="0 0 32 32"
            width="30"
            height="30"
            className={`cursor-pointer ${open ? "hidden" : "block"} md:hidden`}
            enable-background="new 0 0 32 32"
            id="Filled_Line"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            onClick={() => setOpen(true)}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <circle
                cx="5"
                cy="6"
                fill="none"
                id="XMLID_528_"
                r="1"
                stroke="#6192ff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              ></circle>
              <circle
                cx="5"
                cy="16"
                fill="none"
                id="XMLID_441_"
                r="1"
                stroke="#035AA6"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              ></circle>
              <circle
                cx="5"
                cy="26"
                fill="none"
                id="XMLID_442_"
                r="1"
                stroke="#336be6"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              ></circle>
              <line
                fill="none"
                id="XMLID_443_"
                stroke="#2853b3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                x1="10"
                x2="28"
                y1="6"
                y2="6"
              ></line>
              <line
                fill="none"
                id="XMLID_444_"
                stroke="#2853b3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                x1="10"
                x2="28"
                y1="16"
                y2="16"
              ></line>
              <line
                fill="none"
                id="XMLID_445_"
                stroke="#2853b3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                x1="10"
                x2="28"
                y1="26"
                y2="26"
              ></line>
            </g>
          </svg>
          <svg
            viewBox="0 0 24 24"
            width="30"
            height="30"
            className={`cursor-pointer ${open ? "block" : "hidden"} md:hidden`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setOpen(false)}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
                fill="#3977ff"
              ></path>{" "}
            </g>
          </svg>
          <ul className="flex items-center gap-1">
            {Object.keys(locales).map((locale) => (
              <li key={locale} className="text-primary">
                <button
                  className={`${
                    i18n.resolvedLanguage === locale
                      ? "font-bold text-sm"
                      : "font-normal text-xs"
                  }`}
                  onClick={() => i18n.changeLanguage(locale)}
                >
                  {locales[locale].title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
