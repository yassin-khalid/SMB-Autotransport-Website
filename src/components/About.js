import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <section
      id="about"
      className="my-32 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8"
    >
      <img
        className="flex-1"
        src="delivery-0.jpg"
        alt="Albassami Taking A car"
      />
      <div className="flex-1 px-4 md:px-0">
        <h2
          className={`text-primary ${
            i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
          } text-3xl md:text-4xl text-center mb-10`}
        >
          {t("about.header")}
        </h2>
        <p
          className={`text-center ${
            i18n.resolvedLanguage === "ar" ? "text-xl" : "text-lg"
          }`}
        >
          {t("about.paragraph.first")}
        </p>
        <br />
        <p className={`text-center text-lg`}>{t("about.paragraph.last")}</p>
      </div>
    </section>
  );
};

export default About;
