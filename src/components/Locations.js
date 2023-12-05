import "mapbox-gl/dist/mapbox-gl.css";
import {
  GeolocateControl,
  Map,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";
import { distance } from "../assets/locations";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Locations = () => {
  const { i18n, t } = useTranslation();
  const [index, setIndex] = useState(-1);
  const locations = t("location.locations", { returnObjects: true });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setIndex(
          locations
            .map(({ position: { lat, lng } }) =>
              distance(latitude, longitude, lat, lng)
            )
            .reduce((a, x, i) => (x < a ? i : a))
        );
      }
    );
  }, []);

  return (
    <>
      <h2
        className={`md:text-4xl text-3xl font-bold text-center text-primary mb-8 ${
          i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
        }`}
      >
        {t("location.header")}
      </h2>
      <Map
        style={{ width: "100%", height: "90vh" }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        initialViewState={{
          latitude: 24.713606091940523,
          longitude: 46.67427494656205,
          zoom: 5,
        }}
        mapStyle={process.env.REACT_APP_MAPBOX_MAP_STYLE}
      >
        {locations.map(
          (
            {
              position: { lat, lng },
              link,
              area,
              WH,
              branch,
              city,
              service,
              FWH,
            },
            i
          ) => (
            <div key={i}>
              <Marker
                color="#F21D44"
                latitude={lat}
                longitude={lng}
                onClick={(e) => {
                  e.originalEvent.stopPropagation();
                  setIndex(i);
                }}
              />
              {index === i && (
                <Popup
                  latitude={lat}
                  longitude={lng}
                  closeButton
                  onClose={() => setIndex(-1)}
                  offset={10}
                >
                  <div
                    className={`p-5 rounded-md bg-white text-black ${
                      i18n.resolvedLanguage === "ar" ? "text-right" : ""
                    }`}
                    rtl={i18n.resolvedLanguage === "ar"}
                  >
                    <div>
                      <span className="text-primary font-arabic text-lg font-semibold">
                        {t("location.area")}
                      </span>
                      <span className="text-lg">{area}</span>
                    </div>
                    <div>
                      <span className="text-primary font-arabic text-lg font-semibold">
                        {t("location.city")}
                      </span>
                      <span className="text-lg">{city}</span>
                    </div>
                    <div>
                      <span className="text-primary font-arabic text-lg font-semibold">
                        {t("location.branch")}
                      </span>
                      <span className="text-lg">{branch}</span>
                    </div>
                    <div>
                      <span className="text-primary font-arabic text-lg font-semibold">
                        {t("location.WH")}
                      </span>
                      <span className="text-lg">{WH}</span>
                    </div>
                    <div>
                      <span className="text-primary font-arabic text-lg font-semibold">
                        {t("location.FWH")}
                      </span>
                      <span className="text-lg">{FWH}</span>
                    </div>
                    <div>
                      <span className="text-primary font-arabic text-lg font-semibold">
                        {t("location.service")}
                      </span>
                      <span className="text-lg">{service}</span>
                    </div>
                    <a
                      href={link}
                      target="_blank"
                      className="text-primary underline"
                      rel="noopener noreferrer"
                    >
                      {t("location.link")}
                    </a>
                  </div>
                </Popup>
              )}
            </div>
          )
        )}
        <GeolocateControl />
        <NavigationControl />
      </Map>
    </>
  );
};

export default Locations;
