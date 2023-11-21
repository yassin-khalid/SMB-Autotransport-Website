import React from "react";
const steps = ["Shipped", "Transit", "Arrived", "Delivered"];
const Stepper = ({ currentStepNumber }) => {
  return (
    <ol class="flex flex-wrap gap-y-3 items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse max-w-xl mx-auto mb-10">
      {steps.map((s, i) => (
        <li
          class={`flex items-center text-primary ${
            i < currentStepNumber ? "font-semibold" : ""
          }`}
        >
          <span
            class={`flex items-center justify-center w-5 h-5 me-2 text-xs border ${
              i < currentStepNumber
                ? "border-darkPrimary dark:border-primary"
                : "border-gray-500 dark:border-gray-400"
            } rounded-full shrink-0`}
          >
            {i < currentStepNumber ? (
              <svg
                fill="#035AA6"
                height="200px"
                width="200px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 511.947 511.947"
                stroke="#035AA6"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M508.827,115.067L434.16,40.4c-4.16-4.16-10.88-4.16-15.04,0l-259.2,259.2l-67.093-67.093c-4.16-4.16-10.88-4.16-15.04,0 L3.12,307.173c-4.16,4.16-4.16,10.88,0,15.04l149.333,149.333c4.16,4.16,10.88,4.16,15.04,0l341.333-341.333 C512.987,126.053,512.987,119.227,508.827,115.067z M159.92,448.933L25.627,314.64l59.627-59.627l67.093,67.093 c4.16,4.16,10.88,4.16,15.04,0l259.2-259.093l59.627,59.627L159.92,448.933z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            ) : (
              i + 1
            )}
          </span>
          {s}
          {i < steps.length - 1 && (
            <svg
              class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Stepper;
