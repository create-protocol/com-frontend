/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function NewsLetter() {
  const { t } = useTranslation();
  return (
    <section className="relative pb-24">
      {/*<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">*/}
      {/*  <Image*/}
      {/*    width={1920}*/}
      {/*    height={789}*/}
      {/*    src="/img/gradient_light.jpg"*/}
      {/*    alt="gradient"*/}
      {/*    className="h-full w-full"*/}
      {/*  />*/}
      {/*</picture>*/}
      <div className="container">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className=" lg:w-[45%] lg:pr-16">
            <h2 className="mb-6 font-display text-2xl text-jacarta-700 dark:text-white">
              {t("home").newsletter.title}
            </h2>
            <p className="mb-10 text-lg leading-normal dark:text-jacarta-300">
              {t("home").newsletter.desc}
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                placeholder={t("home").newsletter.email}
                className="w-full rounded-full border border-jacarta-100 py-3 px-4 focus:ring-[#03b56a] dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder-white"
              />
              <button className="absolute top-2 right-2 rounded-full bg-[#03b56a] px-6 py-2 font-display text-sm text-white hover:bg-[#03b56a]/90">
                {t("home").newsletter.subscribe}
              </button>
            </form>
          </div>

          <div className="lg:w-[55%]">
            <div className="relative">
              {/*<svg*/}
              {/*  viewBox="0 0 200 200"*/}
              {/*  xmlns="http://www.w3.org/2000/svg"*/}
              {/*  className="mx-auto mt-8 w-[80%] rotate-[8deg]"*/}
              {/*>*/}
              {/*  <defs>*/}
              {/*    <clipPath id="clipping" clipPathUnits="userSpaceOnUse">*/}
              {/*      <path*/}
              {/*        d="*/}
              {/*      M 0, 100*/}
              {/*      C 0, 17.000000000000004 17.000000000000004, 0 100, 0*/}
              {/*      S 200, 17.000000000000004 200, 100*/}
              {/*          183, 200 100, 200*/}
              {/*          0, 183 0, 100*/}
              {/*  "*/}
              {/*        fill="#9446ED"*/}
              {/*      ></path>*/}
              {/*    </clipPath>*/}
              {/*  </defs>*/}
              {/*  <g clipPath="url(#clipping)">*/}
              {/*    <image*/}
              {/*      href="/img/about/story.jpg"*/}
              {/*      width="200"*/}
              {/*      height="200"*/}
              {/*      clipPath="url(#clipping)"*/}
              {/*    />*/}
              {/*  </g>*/}
              {/*</svg>*/}
              {/*<Image*/}
              {/*  width={740}*/}
              {/*  height={602}*/}
              {/*  src="/img/hero/3D_elements.png"*/}
              {/*  alt="image"*/}
              {/*  className="absolute top-0 animate-fly"*/}
              {/*/>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
