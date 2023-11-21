import { useState } from "react";

const useFetchTrackingData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [actions, setActions] = useState([]);
  const [dates, setDates] = useState([]);
  const [numOfCompletedActions, setNumOfCompletedActions] = useState(null);

  const fetchTrackingData = (q) => {
    console.log(process.env.REACT_APP_TRACKING_URL);
    setData(null);
    setError(null);
    setLoading(true);
    fetch(`${process.env.REACT_APP_TRACKING_URL}?q=${q}`)
      .then((res) => res.text())
      .then((data) => {
        const dom = new DOMParser().parseFromString(data, "text/html");
        let firstTrack;
        if (!dom.querySelector(".first-track")) {
          throw new Error("error");
        } else {
          firstTrack = dom.querySelector(".first-track").textContent;
        }
        const from = firstTrack.substring(
          firstTrack.indexOf("from") + 4,
          firstTrack.indexOf("to")
        );
        const to = firstTrack.substring(
          firstTrack.indexOf("to") + 2,
          firstTrack.length
        );
        const dates = [...dom.querySelectorAll(".step-header .header")].map(
          (el) => el.textContent
        );
        const actions = [...dom.querySelectorAll(".step-header .subheader")]
          .filter((el) => el.textContent !== "")
          .map((el) => el.textContent);
        const numOfCompletedActions = [
          ...dom.querySelectorAll(".v-step.completed"),
        ].length;
        setData(dom);
        setFrom(from);
        setTo(to);
        setNumOfCompletedActions(numOfCompletedActions);
        setActions(actions.filter((a) => !a.includes("way")));
        setDates(dates.filter((_, i) => !actions[i].includes("way")));
      })
      .catch(() => setError("error"))
      .finally(() => setLoading(false));
  };
  return [
    loading,
    error,
    data,
    from,
    to,
    actions,
    dates,
    numOfCompletedActions,
    fetchTrackingData,
  ];
};

export default useFetchTrackingData;
