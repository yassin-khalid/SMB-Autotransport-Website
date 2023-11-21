import React from "react";
import { useTranslation } from "react-i18next";

const Values = () => {
  const {
    t,
    i18n: { resolvedLanguage },
  } = useTranslation();
  return (
    <section>
      <h2
        className={`text-center font-bold text-primary text-3xl md:text-4xl ${
          resolvedLanguage === "ar" ? "font-arabic" : "font-display"
        } mb-10`}
      >
        {t("value.header")}
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
          <div className="md:py-10 py-5 flex flex-col gap-4 items-center shadow-lg rounded-xl dark:bg-[#333]">
            <img className="w-24" src="trust.png" alt="" />
            <h3
              className={`${
                resolvedLanguage === "ar" ? "font-arabic" : "font-display"
              } text-lg text-primary`}
            >
              {t("value.values.credibility")}
            </h3>
            <p
              className={`px-6 ${
                resolvedLanguage === "ar" ? "text-lg" : ""
              } text-center text-darkPrimary dark:text-white`}
            >
              {t("value.description.credibility")}
            </p>
          </div>
          <div className="md:py-10 py-5 flex flex-col gap-4 items-center shadow-lg rounded-xl dark:bg-[#333]">
            <img className="w-24" src="accuracy.png" alt="" />
            <h3
              className={`${
                resolvedLanguage === "ar" ? "font-arabic" : "font-display"
              } text-lg text-primary`}
            >
              {t("value.values.accuracy")}
            </h3>
            <p
              className={`px-6 ${
                resolvedLanguage === "ar" ? "text-lg" : ""
              } text-center text-darkPrimary dark:text-white`}
            >
              {t("value.description.accuracy")}
            </p>
          </div>
          <div className="md:py-10 py-5 flex flex-col gap-4 items-center shadow-lg rounded-xl dark:bg-[#333]">
            <img className="w-24" src="transparency.png" alt="" />
            <h3
              className={`${
                resolvedLanguage === "ar" ? "font-arabic" : "font-display"
              } text-lg text-primary`}
            >
              {t("value.values.transparency")}
            </h3>
            <p
              className={`px-6 ${
                resolvedLanguage === "ar" ? "text-lg" : ""
              } text-center text-darkPrimary dark:text-white`}
            >
              {t("value.description.transparency")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
