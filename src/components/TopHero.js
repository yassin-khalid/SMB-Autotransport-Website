import React from "react";
import { useTranslation } from "react-i18next";
import alahli from "../assets/imgs/alahli-no-bg.png";
import alarabi from "../assets/imgs/alarabi-no-bg.png";
import alrajhi from "../assets/imgs/alrajhi.jpg";
import autoworld from "../assets/imgs/autoworld-no-bg.png";
import theeb from "../assets/imgs/theeb-no-bg.png";

const TopHero = () => {
  const { t, i18n } = useTranslation();
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="my-20 py-10 md:py-24 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="#trace"
          class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span class="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">
            {t("topHero.button.new")}
          </span>{" "}
          <span class="text-sm font-medium">{t("topHero.label")}</span>
          <svg
            class="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <h1
          class={`mb-4 text-4xl ${
            i18n.resolvedLanguage === "ar"
              ? "font-arabic md:leading-relaxed xl:leading-relaxed"
              : "font-display"
          } font-extrabold tracking-tight leading-relaxed text-primary md:text-5xl lg:text-6xl dark:text-white`}
        >
          {t("topHero.header")}
        </h1>
        <p
          class={`mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400`}
          dir={`${i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}`}
        >
          {t("topHero.subheader")}
        </p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#about"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-darkPrimary focus:ring-4 focus:ring-primary dark:focus:ring-darkPrimary"
          >
            {t("topHero.button.more")}
            <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#trace"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              viewBox="0 0 1024 1024"
              class="mr-2 -ml-1 w-5 h-5"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M709.485714 277.942857C709.485714 160.914286 614.4 65.828571 497.371429 65.828571S292.571429 160.914286 292.571429 277.942857c0 73.142857 204.8 358.4 204.8 358.4s212.114286-277.942857 212.114285-358.4z"
                  fill="#035AA6"
                ></path>
                <path
                  d="M497.371429 709.485714l-21.942858-29.257143c-36.571429-51.2-219.428571-307.2-219.428571-387.657142C256 160.914286 365.714286 51.2 497.371429 51.2s241.371429 109.714286 241.371428 241.371429c0 87.771429-182.857143 336.457143-226.742857 387.657142l-14.628571 29.257143z m0-607.085714C394.971429 102.4 307.2 182.857143 307.2 292.571429c0 43.885714 102.4 204.8 190.171429 321.828571C585.142857 497.371429 687.542857 336.457143 687.542857 292.571429c0-109.714286-87.771429-190.171429-190.171428-190.171429z"
                  fill="#012442"
                ></path>
                <path
                  d="M928.914286 819.2H102.4C58.514286 819.2 14.628571 782.628571 14.628571 731.428571s36.571429-87.771429 87.771429-87.771428h138.971429c14.628571 0 29.257143 14.628571 29.257142 29.257143s-7.314286 29.257143-21.942857 29.257143h-146.285714c-14.628571 0-29.257143 14.628571-29.257143 29.257142s14.628571 29.257143 29.257143 29.257143h819.2c14.628571 0 29.257143 14.628571 29.257143 29.257143s-7.314286 29.257143-21.942857 29.257143z"
                  fill="#012442"
                ></path>
                <path
                  d="M928.914286 936.228571H226.742857c-14.628571 0-29.257143-14.628571-29.257143-29.257142s14.628571-29.257143 29.257143-29.257143h694.857143c14.628571 0 29.257143-14.628571 29.257143-29.257143s-14.628571-29.257143-29.257143-29.257143H102.4c-14.628571 0-29.257143-14.628571-29.257143-29.257143s14.628571-29.257143 29.257143-29.257143h819.2c43.885714 0 87.771429 36.571429 87.771429 87.771429s-36.571429 87.771429-80.457143 87.771428z"
                  fill="#012442"
                ></path>
                <path
                  d="M497.371429 263.314286m-80.457143 0a80.457143 80.457143 0 1 0 160.914285 0 80.457143 80.457143 0 1 0-160.914285 0Z"
                  fill="#FDFBFB"
                ></path>
                <path
                  d="M497.371429 365.714286C438.857143 365.714286 394.971429 321.828571 394.971429 263.314286S438.857143 160.914286 497.371429 160.914286s102.4 43.885714 102.4 102.4S555.885714 365.714286 497.371429 365.714286z m0-153.6c-29.257143 0-51.2 21.942857-51.2 51.2s21.942857 51.2 51.2 51.2 51.2-21.942857 51.2-51.2-21.942857-51.2-51.2-51.2z"
                  fill="#012442"
                ></path>
              </g>
            </svg>
            {t("topHero.button.track")}
          </a>
        </div>
        <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span
            class={`font-semibold ${
              i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
            } text-primary uppercase"`}
          >
            {t("topHero.feature")}
          </span>
          <div class="flex gap-4 md:gap-8 flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            <img
              src={alahli}
              alt="NCB Bank Logo"
              className="h-6 sm:h-8 md:h-11"
            />
            <img
              src={alarabi}
              alt="Alarabi Bank Logo"
              className="h-6 sm:h-8 md:h-11"
            />
            <img
              src={alrajhi}
              alt="Alrajhi Bank Logo"
              className="h-6 sm:h-8 md:h-11"
            />
            <img
              src={autoworld}
              alt="Autoworld Logo"
              className="h-6 sm:h-8 md:h-11"
            />
            <img src={theeb} alt="Theeb Logo" className="h-6 sm:h-8 md:h-11" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHero;
