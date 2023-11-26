import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import branchList from "../assets/branch-list.xlsx";

const FAQs = () => {
  const [opens, setOpens] = useState([]);
  const { t, i18n } = useTranslation();
  return (
    <section id="FAQs" className="my-48 max-w-6xl mx-auto">
      <h2
        className={`md:text-4xl text-3xl font-bold text-center text-primary ${
          i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
        }`}
      >
        {t("faq.header")}
      </h2>
      <p className="mb-8 text-center">
        {t("faq.call")}
        <a
          className={`text-primary text-sm underline ${
            i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
          }`}
          href="tel:+966-920-005-587"
        >
          +966920005587
        </a>
      </p>
      <div className="max-w-lg mx-auto flex flex-col gap-4 px-4 md:px-0">
        {Array.from({ length: 6 }, (_, k) => k).map((i) => (
          <div key={i}>
            <button
              className={`ring-2 ${
                i18n.resolvedLanguage === "ar"
                  ? "flex-row-reverse font-arabic text-xl"
                  : "flex-row"
              } ring-primary py-2 px-5 flex items-center justify-between gap-6 rounded w-full text-primary`}
              onClick={() =>
                opens.includes(i)
                  ? setOpens((opens) => opens.filter((o) => o !== i))
                  : setOpens((opens) => [...opens, i])
              }
            >
              <span
                className={`${
                  i18n.resolvedLanguage === "ar"
                    ? "text-right font-arabic"
                    : "text-start font-display"
                }`}
              >
                {t(`faq.questions.${i + 1}`)}
              </span>
              <span className="font-bold">{opens.includes(i) ? "-" : "+"}</span>
            </button>
            <p
              className={`text-slate-400 py-2 px-5 border-2 dark:border-gray-400 rounded text-sm ${
                opens.includes(i) ? "animate-expand" : "hidden"
              } ${i18n.resolvedLanguage === "ar" ? "text-lg text-right" : ""}`}
            >
              {t(`faq.answers.${i + 1}`)}
              {i === 0 && (
                <>
                  {" "}
                  <a
                    className="text-primary underline"
                    download
                    href={branchList}
                  >
                    ({t("faq.attached")})
                  </a>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
