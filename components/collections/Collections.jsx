"use client";
import { collections3 } from "@/data/collections";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const sortingOptions = [
  { text: "Trending" },
  { text: "Top" },
  { text: "Recent" },
];
export default function Collections() {
  const { t } = useTranslation();
  const categories = [
    {
      id: 0,
      value: t("explore").category.all,
      name: "All",
    },
    {
      id: 1,
      value: t("explore").category.art,
      name: "Art",
      // icon: "M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3 M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8m-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7",
      icon: "M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3",
    },
    {
      id: 2,
      value: t("explore").category.music,
      name: "Music",
      // icon: "M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v2H0V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0M2 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 3h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1M6 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m7 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m.5-1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0 M0 6h16v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm2 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m7 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0",
      icon: "M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2 M14 11V2h1v9zM6 3v10H5V3z M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z",
    },
    {
      id: 3,
      value: t("explore").category.gaming,
      name: "Gaming",
      icon: "M10 2C10 2.93192 9.36261 3.71497 8.5 3.93699V9.02363C9.36261 9.10689 10 9.40053 10 9.75C10 10.1642 9.10457 10.5 8 10.5C6.89543 10.5 6 10.1642 6 9.75C6 9.40053 6.63739 9.10689 7.5 9.02363V3.93699C6.63739 3.71497 6 2.93192 6 2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2Z M0 9.66486V11.382C0 11.7607 0.214002 12.107 0.552786 12.2764L7.10557 15.5528C7.66863 15.8343 8.33137 15.8343 8.89443 15.5528L15.4472 12.2764C15.786 12.107 16 11.7607 16 11.382V9.66486C16 9.56485 15.9404 9.47447 15.8485 9.43507L9.5 6.71429V7.70834L14.727 9.88624C14.829 9.92874 14.8297 10.073 14.7281 10.1165L8.78784 12.6624C8.28474 12.878 7.71526 12.878 7.21216 12.6624L1.27187 10.1165C1.1703 10.073 1.17103 9.92874 1.27303 9.88624L6.5 7.70834L6.48718 6.71979L0.15152 9.43507C0.0595992 9.47447 0 9.56485 0 9.66486Z",
    },
    {
      id: 4,
      value: t("explore").category.fashion,
      name: "Fashion",
      icon: "M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5",
    },
    {
      id: 4,
      value: t("explore").category.film,
      name: "Film",
      icon: "M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z",
    },
  ];
  const [currentSorting, setCurrentSorting] = useState(sortingOptions[0]);
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const [filtered, setFiltered] = useState(collections3);
  useEffect(() => {
    let tempfiltered = [];
    if (activeCategory == categories[0].name) {
      tempfiltered = collections3;
    } else {
      tempfiltered = collections3.filter(
        (elm) => elm.category == activeCategory
      );
    }

    setFiltered(tempfiltered);
  }, [activeCategory]);

  return (
    <section className="relative py-24">
      {/*<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">*/}
      {/*    <Image*/}
      {/*        width={1920}*/}
      {/*        height={789}*/}
      {/*        priority*/}
      {/*        src="/img/gradient_light.jpg"*/}
      {/*        alt="gradient"*/}
      {/*        className="h-full w-full"*/}
      {/*    />*/}
      {/*</picture>*/}
      <div className="container">
        <h1 className="py-16 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
          {t("explore").title}
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d={elm.icon} />
                  </svg>
                  <span>{elm.value}</span>
                </div>
              </li>
            ))}
          </ul>
          {/*<div className="dropdown relative my-1 cursor-pointer">*/}
          {/*  <div*/}
          {/*    className="dropdown-toggle inline-flex w-48 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"*/}
          {/*    role="button"*/}
          {/*    id="categoriesSort"*/}
          {/*    data-bs-toggle="dropdown"*/}
          {/*    aria-expanded="false"*/}
          {/*  >*/}
          {/*    <span className="font-display">{currentSorting.text}</span>*/}
          {/*    <svg*/}
          {/*      xmlns="http://www.w3.org/2000/svg"*/}
          {/*      viewBox="0 0 24 24"*/}
          {/*      width="24"*/}
          {/*      height="24"*/}
          {/*      className="h-4 w-4 fill-jacarta-500 dark:fill-white"*/}
          {/*    >*/}
          {/*      <path fill="none" d="M0 0h24v24H0z" />*/}
          {/*      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />*/}
          {/*    </svg>*/}
          {/*  </div>*/}

          {/*  <div*/}
          {/*    className="dropdown-menu z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"*/}
          {/*    aria-labelledby="categoriesSort"*/}
          {/*  >*/}
          {/*    {" "}*/}
          {/*    {sortingOptions.map((elm, i) => (*/}
          {/*      <button*/}
          {/*        onClick={() => setCurrentSorting(elm)}*/}
          {/*        key={i}*/}
          {/*        className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"*/}
          {/*      >*/}
          {/*        {elm.text}*/}
          {/*        {currentSorting == elm && (*/}
          {/*          <svg*/}
          {/*            xmlns="http://www.w3.org/2000/svg"*/}
          {/*            viewBox="0 0 24 24"*/}
          {/*            width="24"*/}
          {/*            height="24"*/}
          {/*            className="h-4 w-4 fill-[#03b56a]"*/}
          {/*          >*/}
          {/*            <path fill="none" d="M0 0h24v24H0z" />*/}
          {/*            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />*/}
          {/*          </svg>*/}
          {/*        )}*/}
          {/*      </button>*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>

        <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((elm, i) => (
            <article key={i}>
              <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-[#4A4A4A] dark:bg-[#4A4A4A]">
                <Link
                  href={`/explore/${elm.id}`}
                  className="flex space-x-[0.625rem]"
                >
                  <span className="w-full">
                    <Image
                      width={152}
                      height={242}
                      src={elm.images[0]}
                      alt="item 1"
                      className="h-full w-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                  </span>
                  {/*<span className="flex w-1/3 flex-col space-y-[0.625rem]">*/}
                  {/*  {elm.images.slice(1).map((img, i2) => (*/}
                  {/*    <Image*/}
                  {/*      width={68}*/}
                  {/*      height={74}*/}
                  {/*      key={i2}*/}
                  {/*      src={img}*/}
                  {/*      alt="item 1"*/}
                  {/*      className="h-full rounded-[0.625rem] object-cover"*/}
                  {/*      loading="lazy"*/}
                  {/*    />*/}
                  {/*  ))}*/}
                  {/*</span>*/}
                </Link>

                <Link
                  href={`/explore/${elm.id}`}
                  className="mt-4 block font-display text-base text-jacarta-700 hover:text-[#03b56a] dark:text-white dark:hover:text-[#03b56a]"
                >
                  {elm.name}
                </Link>

                <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                  <div className="flex flex-wrap items-center">
                    {/*<Link href={`/user/${elm.id}`} className="mr-2 shrink-0">*/}
                    <Image
                      width={20}
                      height={20}
                      src={elm.avatar}
                      alt="owner"
                      className="h-5 w-5 rounded-full mr-2 shrink-0"
                    />
                    {/*</Link>*/}
                    <span className="mr-1 dark:text-jacarta-400">
                      {t("explore").by}
                    </span>
                    {/*<Link href={`/user/${elm.id}`} className="text-[#03b56a]">*/}
                    <span className="text-[#03b56a]">{elm.ownerName}</span>
                    {/*</Link>*/}
                  </div>
                  {/*<span className="text-sm dark:text-jacarta-300">*/}
                  {/*  {elm.itemCount} Items*/}
                  {/*</span>*/}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
