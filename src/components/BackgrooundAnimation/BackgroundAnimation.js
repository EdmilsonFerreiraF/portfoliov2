import React from 'react';
import AnimatedElipse from '../AnimatedElipse/AnimatedElipse';
import AnimatedPath from '../AnimatedPath/AnimatedPath';
import LinearGradient from '../LinearGradient/LinearGradient';
import RadialGradient from '../RadialGradient/RadialGradient';

const BackgroundAnimation = () => (
  <div>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.15">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
          stroke="url(#paint0_radial)"
          id="path_0"
        />
        <path
          d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
          stroke="url(#paint1_radial)"
          id="path_1"
        />
        <path
          d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
          stroke="url(#paint2_radial)"
          id="path_2"
        />
      </g>
      <AnimatedElipse
        attributes={[
          "295.027", "193.118", "translate(-295.027 -193.118)", "1.07306", "1.07433", "#945DD6",]} animate={["10s", "indefinite", "auto"]}
        mpath="#path_2"
      />
      <AnimatedElipse
        attributes={[
          "295.027", "193.118", "translate(-295.027 -193.118)", "1.07306", "1.07433", "#46737",]} animate={["5s", "indefinite", "auto", "1",]}
        mpath="#path_2"
      />
      <AnimatedPath attributes={[
        "M294.685 193.474L268.932 219.258", "translate(-294.685 -193.474) rotate(45 294.685 193.474)", "url(#paint7_linear)"]} animate={[
          "5s", "indefinite", "auto", "1",]} mpath="#path_2" />
      <AnimatedElipse
        attributes={[
          "476.525", "363.313", "1.07433", "1.07306",
          "translate(-476.525 -363.313) rotate(90 476.525 363.313)", "#945DD6",]} animate={["10s", "indefinite", "auto",]} mpath="#path_0"
      />
      <AnimatedPath attributes={["M476.171 362.952L450.417 337.168", "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
        "url(#paint4_linear)"]} animate={["10s", "indefinite", "auto"]} mpath="#path_0" />
      <AnimatedElipse
        attributes={[
          "382.164", "155.029", "1.07433", "1.07306",
          "translate(-382.164 -155.029) rotate(90 382.164 155.029)", "#F46737",]} animate={["10s", "indefinite", "auto", "1",]} mpath="#path_0"
      />
      <AnimatedPath attributes={["M381.81 154.669L356.057 128.885", "translate(-381.81 -154.669) rotate(-45 381.81 154.669)", "url(#paint5_linear)"]}
        animate={["10s", "indefinite", "auto", "1"]} mpath="#path_0" />
      <AnimatedElipse
        attributes={[
          "333.324", "382.691", "1.07306", "1.07433",
          "translate(-333.324 -382.691) rotate(-180 333.324 382.691)", "#F46737",]} animate={["5s", "indefinite", "auto", "0",]} mpath="#path_1"
      />
      <AnimatedPath attributes={["M333.667 382.335L359.42 356.551", "scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",
        "url(#paint6_linear)"]} animate={["5s", "indefinite", "auto", "0"]} mpath="#path_1" />
      <AnimatedElipse
        attributes={[
          "165.524", "93.9596", "1.07306", "1.07433",
          "translate(-165.524 -93.9596)", "#F46737",]} animate={["10s", "indefinite", "auto", "3",]} mpath="#path_0"
      />
      <AnimatedPath attributes={["M165.182 94.3159L139.429 120.1", "translate(-165.182 -94.3159) rotate(45 165.182 94.3159)", "url(#paint7_linear)"]}
        animate={["10s", "indefinite", "auto", "3"]} mpath="#path_0" />
      <AnimatedElipse
        attributes={[
          "476.525", "363.313", "1.07433", "1.07306",
          "translate(-476.525 -363.313) rotate(90 476.525 363.313)", "#13ADC7",]} animate={["12s", "indefinite", "auto", "4",]} mpath="#path_0"
      />
      <AnimatedPath attributes={["M476.171 362.952L450.417 337.168", "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
        "url(#paint11_linear)"]} animate={["12s", "indefinite", "auto", "4"]} mpath="#path_0" />
      <defs>
        <RadialGradient attributes={["paint0_radial", "0", "0", "1", "userSpaceOnUse", "translate(301 301) rotate(90) scale(300)",]} stops={[["#FBFBFB", , "0.333333"], ["white"]]} /> <RadialGradient attributes={["paint1_radial", "0", "0", "1", "userSpaceOnUse", "translate(301 301) rotate(90) scale(300)",]} stops={[["#FBFBFB", , "0.333333"], ["white"]]} /> <RadialGradient attributes={["paint2_radial", "0", "0", "1", "userSpaceOnUse", "translate(301 301) rotate(90) scale(300)",]} stops={[["#FBFBFB", , "0.333333"], ["white"]]} /> <LinearGradient attributes={["paint3_linear", "295.043", "193.116", "269.975", "218.154", "userSpaceOnUse",]} stops={[["#945DD6"], ["#945DD6"]]} /> <LinearGradient attributes={["paint4_linear", "476.529", "363.31", "451.461", "338.272", "userSpaceOnUse",]} stops={[["#945DD6"], ["#945DD6"]]} /> <LinearGradient attributes={["paint5_linear", "382.168", "155.027", "357.1", "129.989", "userSpaceOnUse",]} stops={[["#F46737"], ["#F46737"]]} /> <LinearGradient attributes={["paint6_linear", "333.309", "382.693", "358.376", "357.655", "userSpaceOnUse",]} stops={[["#F46737"], ["#F46737"]]} /> <LinearGradient attributes={["paint7_linear", "165.54", "93.9578", "140.472", "118.996", "userSpaceOnUse",]} stops={[["#F46737"], ["#F46737"]]} /> <LinearGradient attributes={["paint8_linear", "414.367", "301.156", "439.435", "276.118", "userSpaceOnUse",]} stops={[["#13ADC7"], ["#13ADC7"]]} /> <LinearGradient attributes={["paint9_linear", "515.943", "288.238", "541.339", "291.454", "userSpaceOnUse",]} stops={[["#13ADC7"], ["#13ADC7"]]} /> <LinearGradient attributes={["paint10_linear", "117.001", "230.619", "117.36", "258.193", "userSpaceOnUse",]} stops={[["#945DD6"], ["#945DD6"]]} /> <linearGradient id="paint11_linear" x1="476.529" y1="363.31" x2="451.461" y2="338.272" gradientUnits="userSpaceOnUse" > <stop stopColor="#13ADC7" /> <stop stopColor="#13ADC7" stopOpacity="0" offset="1" /> </linearGradient> <LinearGradient attributes={["paint11_linear", "476.529", "363.31", "451.461", "338.272", "userSpaceOnUse",]} stops={[["#13ADC7"], ["#13ADC7"]]} />
      </defs>
    </svg>
  </div>
);

export default BackgroundAnimation;