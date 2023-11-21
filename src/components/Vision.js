import React from "react";
import { useTranslation } from "react-i18next";

const Vision = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="my-28 max-w-6xl mx-auto px-6 md:px-0">
      <h2
        className={`text-primary font-bold text-center  text-3xl md:text-4xl mb-10 ${
          i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
        }`}
      >
        {t("visionAndMission")}
      </h2>

      <div
        className={`max-w-2xl py-3 px-6 rounded mx-auto gap-8 ring-2 ring-primary text-primary flex items-center justify-between ${
          i18n.resolvedLanguage === "ar" ? "flex-row-reverse" : ""
        } mb-6`}
      >
        <div
          className={`${
            i18n.resolvedLanguage === "ar" ? "text-right text-lg" : ""
          }`}
        >
          <h3
            className={`text-2xl text-primary ${
              i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
            } mb-2`}
          >
            {t("vision.header")}
          </h3>
          <p>{t("vision.description")}</p>
        </div>
        <svg
          height="100px"
          width="100px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#000000"
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
              style={{ fill: "#035AA6" }}
              d="M256,0c141.439,0,256,114.561,256,256S397.439,512,256,512S0,397.439,0,256S114.561,0,256,0z"
            ></path>{" "}
            <path
              style={{ fill: "#035AA6" }}
              d="M38.944,256C163.42,56.265,348.7,56.265,473.176,256C348.7,455.735,163.42,455.735,38.944,256z"
            ></path>{" "}
            <path
              style={{ fill: "#FEFEFE" }}
              d="M38.944,256C163.42,72.87,348.7,72.87,473.176,256C348.7,439.13,163.42,439.13,38.944,256z"
            ></path>{" "}
            <circle
              style={{ fill: "#035AA6" }}
              cx="256"
              cy="256"
              r="105.601"
            ></circle>{" "}
            <circle
              style={{ fill: "#035AA6" }}
              cx="256"
              cy="256"
              r="73.825"
            ></circle>{" "}
            <circle
              style={{ fill: "#FFFFFF" }}
              cx="256"
              cy="256"
              r="38.346"
            ></circle>{" "}
            <g>
              {" "}
              <circle
                style={{ fill: "#FFFFFF" }}
                cx="203.677"
                cy="212.517"
                r="18.277"
              ></circle>{" "}
              <circle
                style={{ fill: "#FFFFFF" }}
                cx="287.776"
                cy="287.776"
                r="12.424"
              ></circle>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
      <div
        className={`max-w-2xl py-3 px-6 bg-primary rounded mx-auto gap-8 ring-2 ring-primary text-white flex items-center justify-between ${
          i18n.resolvedLanguage === "ar" ? "flex-row-reverse" : ""
        }`}
      >
        <div
          className={`${
            i18n.resolvedLanguage === "ar" ? "text-right text-lg" : ""
          }`}
        >
          <h3
            className={`text-2xl ${
              i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
            } mb-2`}
          >
            {t("mission.header")}
          </h3>
          <p>{t("mission.description")}</p>
        </div>
        <svg
          fill="#FFFFFF"
          height="100px"
          width="200px"
          version="1.1"
          id="Icons"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M30.9,5.6C30.8,5.2,30.4,5,30,5h-3V2c0-0.4-0.2-0.8-0.6-0.9C26,0.9,25.6,1,25.3,1.3l-4,4C21.1,5.5,21,5.7,21,6v3.6l-5.7,5.7 c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l5.7-5.7H26c0.3,0,0.5-0.1,0.7-0.3l4-4C31,6.4,31.1,6,30.9,5.6z"></path>{" "}
            <path d="M18.1,18.1C17.6,18.7,16.8,19,16,19s-1.6-0.3-2.1-0.9c-1.2-1.2-1.2-3.1,0-4.2l2.8-2.8C16.5,11,16.2,11,16,11 c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5c0-0.2,0-0.5-0.1-0.7L18.1,18.1z"></path>{" "}
            <path d="M28.1,12.1C27.6,12.7,26.8,13,26,13h-2.8l-0.7,0.7c0.3,0.7,0.4,1.5,0.4,2.3c0,3.9-3.1,7-7,7s-7-3.1-7-7s3.1-7,7-7 c0.8,0,1.6,0.2,2.3,0.4L19,8.8V6c0-0.8,0.3-1.6,0.9-2.1l1-1C19.3,2.3,17.7,2,16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14 c0-1.7-0.3-3.3-0.9-4.9L28.1,12.1z"></path>{" "}
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Vision;
