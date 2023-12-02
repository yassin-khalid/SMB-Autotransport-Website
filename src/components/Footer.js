import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary text-white py-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 items-center justify-between">
        <nav>
          <ul className="flex gap-8">
            <li>
              <a
                className="font-semibold text-lg hover:font-bold transition duration-150 hover:underline hover:underline-offset-8 hover:decoration-4"
                href="#"
              >
                {t("nav.home")}
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-lg hover:font-bold transition duration-150 hover:underline hover:underline-offset-8 hover:decoration-4"
                href="#about"
              >
                {t("nav.about")}
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-lg hover:font-bold transition duration-150 hover:underline hover:underline-offset-8 hover:decoration-4"
                href="#FAQs"
              >
                {t("nav.faq")}
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-lg hover:font-bold transition duration-150 hover:underline hover:underline-offset-8 hover:decoration-4"
                href="#contact"
              >
                {t("nav.contact")}
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-8">
          <a href="https://twitter.com/SMBAutotranspor">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0,0,256,256"
            >
              <g
                fill="#fff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91406,15l14.10742,20h3.06445l-14.10742,-20z"></path>
                </g>
              </g>
            </svg>
          </a>
          {/* <a href="https://www.instagram.com/smbexpress/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0,0,256,256"
            >
              <g
                fill="#fff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"></path>
                </g>
              </g>
            </svg>
          </a> */}
          <a href="https://wa.me/966920005587">
            <svg
              viewBox="0 0 48 48"
              version="1.1"
              width="30"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>Whatsapp</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Color-"
                    transform="translate(-700.000000, -360.000000)"
                    fill="#FFFFFF"
                  >
                    {" "}
                    <path
                      d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                      id="Whatsapp"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
          <a href="tel:+966-920-005-587">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-lg">
              <svg
                viewBox="0 0 24 24"
                height="25"
                width="25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#FFFFFF"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.0748 6.63877C13.2878 6.1172 13.8906 5.86414 14.4212 6.07354C15.2276 6.39179 15.957 6.8728 16.5625 7.48549C17.1679 8.09818 17.6358 8.82892 17.936 9.63048C18.1335 10.1579 17.8587 10.7429 17.3221 10.9371C16.7856 11.1312 16.1905 10.8611 15.993 10.3336C15.7928 9.79925 15.4809 9.31209 15.0773 8.90363C14.6737 8.49517 14.1874 8.1745 13.6498 7.96233C13.1192 7.75293 12.8618 7.16035 13.0748 6.63877Z"
                    fill="#035AA6"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.0369 2.79776C13.1907 2.22376 13.7807 1.88313 14.3547 2.03693C16.1791 2.52577 17.8427 3.48623 19.1782 4.82178C20.5138 6.15732 21.4742 7.82088 21.9631 9.64527C22.1169 10.2193 21.7762 10.8093 21.2022 10.9631C20.6282 11.1169 20.0382 10.7762 19.8844 10.2022C19.4934 8.74273 18.725 7.41188 17.6566 6.34344C16.5881 5.27501 15.2573 4.50664 13.7978 4.11557C13.2238 3.96176 12.8831 3.37176 13.0369 2.79776Z"
                    fill="#035AA6"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.509 8.37614C9.83024 5.92369 7.38659 4.40893 4.9684 5.21552C3.3929 5.74099 2.43384 6.72133 2.1159 8.02892C1.82039 9.24432 2.1284 10.5559 2.60677 11.715C3.57009 14.0492 5.4767 16.3617 6.5562 17.442C7.6108 18.4974 9.91998 20.4123 12.2585 21.3844C13.4197 21.8671 14.7361 22.1805 15.9571 21.8857C17.2712 21.5684 18.2565 20.6044 18.7848 19.0178C19.5902 16.5997 18.0782 14.1542 15.6263 13.4745L15.6263 13.4745C13.9503 13.01 12.1927 13.453 10.9932 14.5295C10.7117 14.3115 10.4409 14.0733 10.1827 13.8149C9.92317 13.5552 9.68413 13.2828 9.46537 12.9995C10.5335 11.7996 10.9715 10.0473 10.509 8.37614L10.509 8.37614Z"
                    fill="#035AA6"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div className="text-sm text-slate-300 text-center mt-6 mb-3">
        {t("copyright")}
      </div>
    </footer>
  );
};

export default Footer;
