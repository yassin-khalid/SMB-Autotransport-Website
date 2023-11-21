import React from "react";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-6xl mx-auto my-48">
      <h2 className="text-center font-bold text-primary text-3xl md:text-4xl font-display mb-10">
        {t("partner")}
      </h2>
      <div className="flex flex-wrap items-center justify-center md:justify-between px-8 lg:px-0 gap-4">
        <img
          className={`md:h-16 h-10 grayscale dark:grayscale-0`}
          src="alahli.jpg"
          alt="NCB Bank"
        />
        <img
          className={`md:h-16 h-10 grayscale dark:grayscale-0`}
          src="alarabi.jpg"
          alt="ANB Bank"
        />
        <img
          className={`md:h-16 h-10 grayscale dark:grayscale-0`}
          src="alrajhi.jpg"
          alt="Alrajhi Bank"
        />
        <img
          className={`md:h-16 h-10 grayscale dark:grayscale-0`}
          src="theeb.jpg"
          alt="Theeb Rent A Car"
        />
        <img
          className={`md:h-16 h-10 grayscale dark:grayscale-0`}
          src="autoworld.jpg"
          alt="Auto World Rent A Car"
        />
      </div>
    </section>
  );
};

export default Partners;
