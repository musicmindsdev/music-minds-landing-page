import * as React from "react";

const Logo: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="39"
    fill="none"
    viewBox="0 0 33 39"
  >
    <path
      fill="url(#paint0_linear_6582_79644)"
      stroke="url(#paint1_linear_6582_79644)"
      strokeOpacity="0.75"
      strokeWidth="0.205"
      d="M32.81 6.188v21.783c0 3.817-2.915 6.92-6.5 6.92-3.567 0-6.5-3.103-6.5-6.92 0-3.797 2.933-6.9 6.5-6.9 1.52 0 2.879.558 3.984 1.483V5.528l-7.545 7.193-9.132-2.877v21.849c0 3.817-2.934 6.92-6.501 6.92-3.585 0-6.5-3.103-6.5-6.92 0-3.798 2.915-6.901 6.5-6.901 1.503 0 2.86.559 3.965 1.465V9.215c0-2.834.745-5.126 3.907-4.839l3.45 1.007 3.449 1.295 5.174-5.179c1.15-1.268 3.332-1.616 4.6-.575 1.285 1.022 1.15 2.874 1.15 5.264Z"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_6582_79644"
        x1="16.715"
        x2="16.715"
        y1="0.312"
        y2="38.612"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF00DF"></stop>
        <stop offset="0.547" stopColor="#9F3DF3"></stop>
        <stop offset="0.729" stopColor="#5243FE"></stop>
        <stop offset="1" stopColor="#5243FE"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_6582_79644"
        x1="16.715"
        x2="16.715"
        y1="0.312"
        y2="38.612"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF36E6"></stop>
        <stop offset="0.557" stopColor="#AB3CF2"></stop>
        <stop offset="0.703" stopColor="#5243FE"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default Logo;
