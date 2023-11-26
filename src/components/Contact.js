import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <section
      id="contact"
      className="bg-contact bg-cover bg-center py-10 flex items-center justify-center my-48 max-w-4xl mx-auto"
    >
      <form
        className="flex flex-col gap-5 w-2/3"
        action="mailto:info@smb.com.sa"
        method="get"
        enctype="text/plain"
      >
        <input
          type="email"
          name="email"
          placeholder={`${t("contact.email")}`}
          className={`outline-none ${
            i18n.resolvedLanguage === "ar" ? "text-right" : ""
          } ring-2 ring-primary bg-gray-600/50 rounded px-5 py-2 text-white font-semibold placeholder:text-white placeholder:font-normal`}
        />
        <input
          type="text"
          name="subject"
          placeholder={`${t("contact.subject")}`}
          className={`outline-none ${
            i18n.resolvedLanguage === "ar" ? "text-right" : ""
          } ring-2 ring-primary bg-gray-600/50 rounded px-5 py-2 text-white font-semibold placeholder:text-white placeholder:font-normal`}
        />
        <textarea
          name="body"
          id=""
          cols="30"
          rows="10"
          className={`resize-none outline-none ${
            i18n.resolvedLanguage === "ar" ? "text-right" : ""
          } ring-2 ring-primary bg-gray-600/50 rounded px-5 py-2 text-white font-semibold placeholder:text-white placeholder:font-normal`}
          placeholder={`${t("contact.message")}`}
        ></textarea>
        <button
          className={`bg-primary ${
            i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
          } uppercase text-lg text-white font-bold py-2 px-5 rounded transition duration-150 hover:bg-white hover:text-primary`}
          type="submit"
        >
          {t("contact.button")}
        </button>
      </form>
    </section>
  );
};

export default Contact;
