import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import firstBg from "../assets/imgs/albassami-bg-0.jpg";
import secondBg from "../assets/imgs/albassami-bg-1.jpg";
import thirdBg from "../assets/imgs/albassami-bg-2.jpg";

const Hero = () => {
  const [currImageIndex, setCurrImageIndex] = useState(0);
  const { t, i18n } = useTranslation();
  return (
    <section className="relative flex overflow-x-hidden max-w-6xl mx-auto my-20 md:my-44">
      <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p
          className={`text-white font-semibold text-lg md:text-xl md:tracking-widest md:leading-loose ${
            i18n.resolvedLanguage === "ar"
              ? "text-right font-arabic"
              : "text-left font-display"
          }`}
        >
          {t(`hero.${currImageIndex + 1}`)}
        </p>
        <p></p>
      </div>
      <button
        className={`absolute  ${
          currImageIndex === 2 ? "text-gray-500" : "text-gray-300"
        } top-[100px] md:top-[200px] font-bold right-2 w-6 h-6 flex items-center justify-center text-xl z-10 ring-2 md:ring-4 p-4 rounded-full`}
        disabled={currImageIndex === 2}
        onClick={() => setCurrImageIndex((curr) => curr + 1)}
      >
        {">"}
      </button>
      <button
        className={`absolute  ${
          currImageIndex === 0 ? "text-gray-500" : "text-gray-300"
        } top-[100px] md:top-[200px] font-bold left-2 w-6 h-6 flex items-center justify-center text-xl z-10 ring-2 md:ring-4 p-4 rounded-full`}
        disabled={currImageIndex === 0}
        onClick={() => setCurrImageIndex((curr) => curr - 1)}
      >
        {"<"}
      </button>
      <img
        className={`brightness-50 min-w-full max-h-[450px] transition duration-200 ${
          currImageIndex === 0 ? "translate-x-0" : "-translate-x-full"
        }`}
        src={firstBg}
        alt="Albassami Building"
      />
      <img
        className={`brightness-50 min-w-full max-h-[450px] transition duration-200 ${
          currImageIndex === 1 ? "-translate-x-full" : "-translate-x-[200%]"
        }`}
        src={secondBg}
        alt="Albassami Building"
      />
      <img
        className={`brightness-50 min-w-full max-h-[450px] transition duration-200 ${
          currImageIndex === 2 ? "-translate-x-[200%]" : "-translate-x-[300%]"
        }`}
        src={thirdBg}
        alt="Albassami Building"
      />
    </section>
  );
};

export default Hero;
