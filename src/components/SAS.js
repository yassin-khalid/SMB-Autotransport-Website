import React from "react";
import { useTranslation } from "react-i18next";

const SAS = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="my-20 md:my-44 max-w-6xl mx-auto px-6 lg:px-0">
      <h2
        className={`md:text-4xl text-3xl font-bold text-center text-primary ${
          i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
        }`}
      >
        {t("sas.header")}
      </h2>
      <p className="mb-8 text-center">{t("sas.description")}</p>
      <ul
        className="grid md:grid-cols-3 gap-8"
        dir={`${i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}`}
      >
        {Array.from({ length: 3 }, (_, k) => k).map((i) => (
          <li>
            <h3
              className={`md:text-xl text-lg font-bold text-center text-primary mb-3 ${
                i18n.resolvedLanguage === "ar"
                  ? "font-arabic text-lg"
                  : "font-display"
              }`}
            >
              {t(`sas.services.${i + 1}.header`)}
            </h3>
            <p>{t(`sas.services.${i + 1}.description`)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SAS;
