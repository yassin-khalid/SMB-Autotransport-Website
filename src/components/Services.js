import React from "react";
import { useTranslation } from "react-i18next";
import flat from "../assets/imgs/flat.png";
import carrying from "../assets/imgs/carrying.png";
import duration from "../assets/imgs/duration.png";
import peak from "../assets/imgs/peak.png";

const imgs = [carrying, flat, duration, peak];
const Services = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="my-20 md:my-44 max-w-6xl mx-auto px-6 lg:px-0">
      <h2
        className={`md:text-4xl text-3xl font-bold text-center text-primary ${
          i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
        } mb-8`}
      >
        {t("services.header")}
      </h2>
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        dir={`${i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}`}
      >
        {Array.from({ length: 4 }, (_, k) => k).map((i) => (
          <li className="ring-2 ring-primary flex-1 p-3 rounded-md">
            <h3
              className={`md:text-xl text-lg font-semibold text-center text-primary ${
                i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
              } mb-5`}
            >
              {t(`services.${i + 1}.header`)}
            </h3>
            <ul
              className="grid grid-cols-3 gap-3"
              dir={`${i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}`}
            >
              {Array.from({ length: 3 }, (_, k) => k).map((j) => (
                <li className="flex flex-col items-center">
                  <img
                    className="w-10"
                    src={j === 0 && i < 2 ? imgs[j] : imgs[j + 1]}
                    alt=""
                  />
                  <span
                    className={`text-center text-lg font-semibold dark:text-[#B4B4B4]`}
                  >
                    {t(`services.${i + 1}.description.${j + 1}`)}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
