"use client";
import React, { useEffect, useState } from "react";
import { app } from "@/data/apps";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Apps = () => {
  const { t } = useTranslation();

  const categories = [
    {
      id: 0,
      value: t("app").category.all,
      name: "All",
    },
    {
      id: 1,
      value: t("app").category.community,
      name: "Community",
    },
    {
      id: 2,
      value: t("app").category.defi,
      name: "DeFi",
    },
    {
      id: 3,
      value: t("app").category.gaming,
      name: "Gaming",
    },
    {
      id: 4,
      value: t("app").category.infra,
      name: "Infra",
    },
    {
      id: 4,
      value: t("app").category.nft,
      name: "NFT",
    },
    {
      id: 5,
      value: t("app").category.social,
      name: "Social",
    },
  ];
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const [filtered, setFiltered] = useState(app);

  useEffect(() => {
    let tempfiltered = [];
    if (activeCategory == categories[0].name) {
      tempfiltered = app;
    } else {
      tempfiltered = app.filter((elm) => elm.category == activeCategory);
    }

    setFiltered(tempfiltered);
  }, [activeCategory]);

  return (
    <section className="relative bg-light-base py-24 dark:bg-[#191919]">
      <div className="container">
        <h1 className="py-16 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
          {t("app").title}
        </h1>
        <div className="mb-8 flex flex-wrap items-center justify-between">
          <ul className="flex flex-wrap items-center">
            <li className="my-1 mr-2.5">
              <div
                onClick={() => setActiveCategory(categories[0].name)}
                className={`  ${
                  activeCategory == categories[0].name
                    ? "bg-jacarta-100"
                    : "bg-white"
                }  ${
                  activeCategory == categories[0].name
                    ? "dark:bg-[#156F49]"
                    : " dark:bg-[#4A4A4A]"
                } cursor-pointer group flex h-9 items-center rounded-lg border border-jacarta-100  px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-[#03b56a] hover:text-white dark:border-jacarta-600  dark:text-white dark:hover:border-transparent dark:hover:bg-[#03b56a] dark:hover:text-white`}
              >
                {categories[0].value}
              </div>
            </li>
            {categories.map((elm, i) => (
              <li
                onClick={() => setActiveCategory(elm.name)}
                key={i}
                className={`my-1 mr-2.5 ${i == 0 ? "hidden" : ""}`}
              >
                <div
                  className={`  ${
                    activeCategory == elm.name ? "bg-jacarta-100" : "bg-white"
                  }  ${
                    activeCategory == elm.name
                      ? "dark:bg-[#156F49]"
                      : " dark:bg-[#4A4A4A]"
                  } cursor-pointer group flex h-9 items-center rounded-lg border border-jacarta-100  px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-[#03b56a] hover:text-white dark:border-jacarta-600  dark:text-white dark:hover:border-transparent dark:hover:bg-[#03b56a] dark:hover:text-white`}
                >
                  <span>{elm.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          {filtered.map((elm, i) => (
            <article key={i}>
              <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-[2rem] transition-shadow hover:shadow-lg dark:text-white dark:border-[#4A4A4A] dark:bg-[#4A4A4A]">
                <div className="w-full h-full flex justify-between items-center flex-col md:flex-row">
                  <div className="flex flex-col md:flex-row h-full gap-6 items-start">
                    <img
                      src={elm.avatar}
                      alt="item 1"
                      className="md:h-28 md:w-28 bg-white rounded-[0.625rem] object-cover"
                    />
                    <div className="md:w-2/3 flex flex-col gap-2">
                      <span className="flex items-center md:gap-2 justify-between">
                        <p className="text-2xl font-semibold">{elm.name}</p>
                        <p className="bg-[#156041] text-xs text-white px-2 py-1 rounded-3xl">
                          {elm.category}
                        </p>
                      </span>
                      <p className="w-full">{elm.description}</p>
                    </div>
                  </div>
                  <button class="md:mt-0 mt-10 md:w-fit w-3/4 cursor-pointer font-semibold overflow-hidden relative z-100 border border-green group px-8 py-1 rounded-lg flex items-center justify-center">
                    <span class="relative z-10 text-green group-hover:text-white text-xl duration-500">
                      Visit
                    </span>
                    <span class="absolute w-full h-full bg-green -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                    <span class="absolute w-full h-full bg-green -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apps;
