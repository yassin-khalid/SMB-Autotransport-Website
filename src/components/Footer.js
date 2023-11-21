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
                href="/"
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
          <a href="https://twitter.com/saudi_SMB">
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
          <a href="https://www.instagram.com/smbexpress/">
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
          </a>
          <a href="https://www.snapchat.com">
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
                  <path d="M46.77344,35.07813c-5.80469,-0.95703 -8.45703,-6.96875 -8.54297,-7.16406c-0.01172,-0.03516 -0.03906,-0.09766 -0.05469,-0.13281c-0.17578,-0.35156 -0.35156,-0.84766 -0.20312,-1.19922c0.25391,-0.60156 1.46094,-0.98437 2.18359,-1.21484c0.25391,-0.08203 0.49609,-0.15625 0.68359,-0.23047c1.75391,-0.69531 2.62891,-1.60156 2.60938,-2.70312c-0.01562,-0.88672 -0.69531,-1.69922 -1.69531,-2.05078c-0.34766,-0.14844 -0.74609,-0.22266 -1.14844,-0.22266c-0.27344,0 -0.6875,0.03906 -1.08594,0.22266c-0.66797,0.3125 -1.25391,0.48047 -1.67187,0.5c-0.08984,-0.00391 -0.16797,-0.01172 -0.23437,-0.02344l0.04297,-0.6875c0.19531,-3.10937 0.44141,-6.98437 -0.60937,-9.33984c-3.10156,-6.94141 -9.67187,-7.48047 -11.61328,-7.48047l-0.88281,0.00781c-1.9375,0 -8.49609,0.53906 -11.58984,7.47656c-1.05078,2.35547 -0.80859,6.22656 -0.60937,9.33984l0.00781,0.11719c0.01172,0.19141 0.02344,0.38281 0.03516,0.56641c-0.43359,0.07813 -1.28125,-0.06641 -2.16016,-0.47656c-1.19531,-0.55859 -3.34766,0.17969 -3.64453,1.74219c-0.13281,0.69141 0.02734,2.00391 2.57422,3.00781c0.19141,0.07813 0.42969,0.15234 0.6875,0.23438c0.71875,0.23047 1.92578,0.60938 2.17969,1.21484c0.14844,0.35156 -0.02734,0.84766 -0.23437,1.27344c-0.10937,0.25391 -2.74609,6.26563 -8.5625,7.22266c-0.74219,0.12109 -1.26953,0.77734 -1.23047,1.53516c0.01172,0.19922 0.0625,0.39844 0.14453,0.59375c0.52734,1.23828 2.44531,2.08984 6.02344,2.67188c0.0625,0.21094 0.13281,0.52344 0.17188,0.69531c0.07422,0.35547 0.15625,0.71484 0.26563,1.08984c0.10547,0.35547 0.46875,1.17969 1.60156,1.17969c0.34375,0 0.71875,-0.07422 1.12109,-0.15234c0.59375,-0.11719 1.33594,-0.26172 2.28906,-0.26172c0.53125,0 1.07813,0.04688 1.62891,0.13672c1.01563,0.16797 1.93359,0.82031 3,1.57031c1.66406,1.17969 3.55078,2.51172 6.47656,2.51172c0.07813,0 0.15625,-0.00391 0.23047,-0.00781c0.10547,0.00391 0.21484,0.00781 0.32422,0.00781c2.92578,0 4.8125,-1.33594 6.48047,-2.51172c1.01563,-0.72266 1.97656,-1.39844 2.99609,-1.57031c0.55078,-0.08984 1.09766,-0.13672 1.62891,-0.13672c0.91797,0 1.64453,0.11719 2.29297,0.24609c0.46094,0.08984 0.82813,0.13281 1.16797,0.13281c0.75781,0 1.33984,-0.43359 1.55078,-1.16016c0.10938,-0.36719 0.1875,-0.72266 0.26563,-1.08203c0.03125,-0.13281 0.10547,-0.46875 0.17188,-0.69141c3.57813,-0.58203 5.49609,-1.43359 6.01953,-2.66016c0.08594,-0.19531 0.13281,-0.39844 0.14844,-0.60937c0.03906,-0.74609 -0.48828,-1.40234 -1.23047,-1.52734z"></path>
                </g>
              </g>
            </svg>
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
