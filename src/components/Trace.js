import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Spinner from "./Spinner";
import Stepper from "./Stepper";
import Timeline from "./Timeline";
import useFetchTrackingData from "../hooks/useFetchTrackingData";

const Trace = () => {
  const {
    t,
    i18n: { resolvedLanguage },
  } = useTranslation();
  const [q, setQ] = useState("");
  const [
    loading,
    error,
    data,
    from,
    to,
    actions,
    dates,
    numOfCompletedActions,
    fetchTrackingData,
  ] = useFetchTrackingData();
  return (
    <section
      id="trace"
      className="max-w-6xl mx-auto py-48 flex flex-col items-center px-4 md:px-0"
    >
      <span className="text-sm text-slate-600 block text-center mb-2">
        {t("track.note")}
      </span>
      <form
        className="flex w-96 gap-2 mb-10"
        onSubmit={(e) => {
          e.preventDefault();
          fetchTrackingData(q);
        }}
      >
        <input
          className="flex-1 ring-2 ring-primary rounded outline-none px-4 dark:text-black"
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`${t("track.placeholder")}`}
        />
        <button
          className="bg-primary text-white px-5 py-2 rounded font-bold font-display uppercase"
          type="submit"
        >
          {t("track.button")}
        </button>
      </form>
      {loading && <Spinner />}
      {error && (
        <div
          className={`py-2 px-5 rounded ${
            resolvedLanguage === "ar" ? "text-xl text-right" : ""
          } text-red-800 bg-red-50 w-96 font-medium dark:bg-gray-800 dark:text-red-400`}
        >
          {t(error)}
        </div>
      )}
      {data && (
        <div className="flex items-center justify-between container max-w-xl mb-8">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg text-primary">From:</span>
            <span className="text-lg text-darkPrimary font-bold font-arabic">
              {from}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg text-primary">To:</span>
            <span className="text-lg text-darkPrimary font-bold font-arabic">
              {to}
            </span>
          </div>
        </div>
      )}
      {data && <Stepper currentStepNumber={numOfCompletedActions} />}
      {data && <Timeline actions={actions} dates={dates} />}
    </section>
  );
};

export default Trace;
