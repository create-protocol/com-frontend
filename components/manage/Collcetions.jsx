"use client";
import { useritems } from "@/data/item";
import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import tippy from "tippy.js";

import { collections3 } from "@/data/collections";
import Activity from "./Activity";
import Link from "next/link";
import Image from "next/image";
import { useAccount } from "wagmi";

export default function Collcetions() {
  const [allItems, setAllItems] = useState(useritems);
  const { isConnected, account, isConnecting, isReconnecting } = useAccount()
  useEffect(() => {
    tippy("[data-tippy-content]");
  }, []);
  const addLike = (id) => {
    const items = [...allItems];
    const item = items.filter((elm) => elm.id == id)[0];
    const indexToReplace = items.findIndex((item) => item.id === id);
    if (!item.liked) {
      item.liked = true;
      item.likes += 1;
      items[indexToReplace] = item;
      setAllItems(items);
    } else {
      item.liked = false;
      item.likes -= 1;
      items[indexToReplace] = item;
      setAllItems(items);
    }
  };

  // console.log('isReconnecting--',isReconnecting,isConnected,isConnecting,account)
  return (
    <section className="relative py-24 pt-20 h-full">
      {/*<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">*/}
      {/*  <Image*/}
      {/*    width={1920}*/}
      {/*    height={789}*/}
      {/*    src="/img/gradient_light.jpg"*/}
      {/*    alt="gradient"*/}
      {/*    className="h-full w-full"*/}
      {/*  />*/}
      {/*</picture>*/}
      <div className="container h-full">
        {/* Tabs Nav */}
        {(isConnecting || isReconnecting)
          ? <></>
          : !isConnected
            ? <p className='w-full h-full text-center dark:text-[#FFFFFF]'>Please connect your wallet to manage your COMs.</p>
            : <div className='h-full w-full flex flex-col sm:flex-row gap-4'>
              <div className="">
                <ul
                  className="scrollbar-custom mb-12 mr-8 flex sm:flex-col items-start justify-start lg:h-[70%] overflow-x-auto sm:overflow-x-hidden  overflow-y-hidden border-jacarta-100 pb-px dark:border-jacarta-600"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav2-link active relative flex items-center whitespace-nowrap py-3 px-6 pe-12 gap-2 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                      id="on-sale-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#on-sale"
                      type="button"
                      role="tab"
                      aria-controls="on-sale"
                      aria-selected="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="mr-1 h-5 w-5 fill-current"
                      >
                        <path
                          d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.5 9.5V14.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 18C9 18.75 8.79001 19.46 8.42001 20.06C7.73001 21.22 6.46 22 5 22C3.54 22 2.26999 21.22 1.57999 20.06C1.20999 19.46 1 18.75 1 18C1 15.79 2.79 14 5 14C7.21 14 9 15.79 9 18Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.4917 17.9795H3.51172"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 16.5195V19.5095"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 15.3V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H8.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-display text-base font-medium">
                        Create Credit
                      </span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav2-link relative flex items-center whitespace-nowrap py-3 px-6 pe-8 gap-2 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                      id="owned-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#owned"
                      type="button"
                      role="tab"
                      aria-controls="owned"
                      aria-selected="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="mr-1 h-5 w-5 fill-current"
                      >
                        <path
                          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span className="font-display text-base font-medium">Settings</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav2-link relative flex items-center whitespace-nowrap py-3 px-6 pe-8 gap-2 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                      id="created-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#created"
                      type="button"
                      role="tab"
                      aria-controls="created"
                      aria-selected="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="mr-1 h-5 w-5 fill-current"
                      >
                        <path
                          d="M3 12C7.5 12 12 7.5 12 3C12 7.5 16.5 12 21 12C16.5 12 12 16.5 12 21C12 16.5 7.5 12 3 12Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 19.5C2.83333 19.5 4.5 17.8333 4.5 17C4.5 17.8333 6.16667 19.5 7 19.5C6.16667 19.5 4.5 21.1667 4.5 22C4.5 21.1667 2.83333 19.5 2 19.5Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 5C17 5 19 3 19 2C19 3 21 5 22 5C21 5 19 7 19 8C19 7 17 5 16 5Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span className="font-display text-base font-medium">
                        Created
                      </span>
                    </button>
                  </li>
                  {/*<li className="nav-item" role="presentation">*/}
                  {/*  <button*/}
                  {/*    className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"*/}
                  {/*    id="collections-tab"*/}
                  {/*    data-bs-toggle="tab"*/}
                  {/*    data-bs-target="#collections"*/}
                  {/*    type="button"*/}
                  {/*    role="tab"*/}
                  {/*    aria-controls="collections"*/}
                  {/*    aria-selected="false"*/}
                  {/*  >*/}
                  {/*    <svg*/}
                  {/*      xmlns="http://www.w3.org/2000/svg"*/}
                  {/*      viewBox="0 0 24 24"*/}
                  {/*      width="24"*/}
                  {/*      height="24"*/}
                  {/*      className="mr-1 h-5 w-5 fill-current"*/}
                  {/*    >*/}
                  {/*      <path fill="none" d="M0 0h24v24H0z" />*/}
                  {/*      <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z" />*/}
                  {/*    </svg>*/}
                  {/*    <span className="font-display text-base font-medium">*/}
                  {/*      Collections*/}
                  {/*    </span>*/}
                  {/*  </button>*/}
                  {/*</li>*/}
                  {/* <li className="nav-item" role="presentation">
                  <Link
                      href='/create'
                      className="nav2-link relative flex items-center whitespace-nowrap py-3 px-6 pe-8 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                      // id="activity-tab"
                      // data-bs-toggle="tab"
                      // data-bs-target="#activity"
                      // type="button"
                      // role="tab"
                      // aria-controls="activity"
                      // aria-selected="false"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="mr-1 h-5 w-5 fill-current"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M11.95 7.95l-1.414 1.414L8 6.828 8 20H6V6.828L3.465 9.364 2.05 7.95 7 3l4.95 4.95zm10 8.1L17 21l-4.95-4.95 1.414-1.414 2.537 2.536L16 4h2v13.172l2.536-2.536 1.414 1.414z" />
                    </svg>
                    <span className="font-display text-base font-medium">
                Create New
              </span>
                  </Link>
                </li> */}
                </ul>
                <button className="flex items-center justify-center whitespace-nowrap rounded-full bg-[#03b56a] py-3 px-6 text-center font-semibold text-white  transition-all hover:bg-[#029e57] disabled:opacity-0.7 disabled:pointer-events-none w-[100%] h-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="mr-1 h-5 w-5 fill-current"
                  >
                    <path
                      d="M8 12H16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className=" font-body text-base font-normal">
                    Create New
                  </span>
                </button>
              </div>

              <div className="tab-content">
                {/* On Sale Tab */}
                <div
                  className="tab-pane fade show active"
                  id="on-sale"
                  role="tabpanel"
                  aria-labelledby="on-sale-tab"
                >
                  {/* Filters */}
                  {/*<Filter />*/}
                  {/* end filters */}

                  {/* Grid */}
                  <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                    {allItems
                      .filter((elm) => elm.type == "onsale")
                      .map((elm, i) => (
                        <article key={i}>
                          <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-[#4A4A4A] dark:bg-[#4A4A4A]">
                            <figure className="relative">
                              <Link href={`/explore/${elm.id}`}>
                                <Image
                                  width={230}
                                  height={230}
                                  src={elm.imageSrc}
                                  alt="item 5"
                                  className="w-full rounded-[0.625rem]"
                                  loading="lazy"
                                />
                              </Link>
                              {/*<div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">*/}
                              {/*<span*/}
                              {/*    onClick={() => addLike(elm.id)}*/}
                              {/*    className={`js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0 ${*/}
                              {/*        elm.liked ? "js-likes--active" : ""*/}
                              {/*    }`}*/}
                              {/*    data-tippy-content="Favorite"*/}
                              {/*>*/}
                              {/*  <svg*/}
                              {/*      xmlns="http://www.w3.org/2000/svg"*/}
                              {/*      viewBox="0 0 24 24"*/}
                              {/*      width="24"*/}
                              {/*      height="24"*/}
                              {/*      className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"*/}
                              {/*  >*/}
                              {/*    <path fill="none" d="M0 0H24V24H0z" />*/}
                              {/*    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />*/}
                              {/*  </svg>*/}
                              {/*</span>*/}
                              {/*          <span className="text-sm dark:text-jacarta-200">*/}
                              {/*  {elm.likes}*/}
                              {/*</span>*/}
                              {/*        </div>*/}
                              <div className="absolute left-3 -bottom-3">
                                <div className="flex -space-x-2">
                                  <a href="#">
                                    <Image
                                      width={24}
                                      height={24}
                                      src={elm.creatorAvatar}
                                      alt="creator"
                                      className="h-6 w-6 rounded-full border-2 border-white hover:border-[#03b56a] dark:border-jacarta-600 dark:hover:border-[#03b56a]"
                                      data-tippy-content="Creator: Sussygirl"
                                    />
                                  </a>
                                  <a href="#">
                                    <Image
                                      width={24}
                                      height={24}
                                      src={elm.ownerAvatar}
                                      alt="owner"
                                      className="h-6 w-6 rounded-full border-2 border-white hover:border-[#03b56a] dark:border-jacarta-600 dark:hover:border-[#03b56a]"
                                      data-tippy-content="Owner: Sussygirl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </figure>
                            <div className="mt-7 flex items-center justify-between">
                              <Link href={`/explore/${elm.id}`}>
                                <span className="font-display text-base text-jacarta-700 hover:text-[#03b56a] dark:text-white">
                                  {elm.title}
                                </span>
                              </Link>
                              {/*<div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">*/}
                              {/*  <a*/}
                              {/*      href="#"*/}
                              {/*      className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"*/}
                              {/*      role="button"*/}
                              {/*      id="itemActions"*/}
                              {/*      data-bs-toggle="dropdown"*/}
                              {/*      aria-expanded="false"*/}
                              {/*  >*/}
                              {/*    <svg*/}
                              {/*        width="16"*/}
                              {/*        height="4"*/}
                              {/*        viewBox="0 0 16 4"*/}
                              {/*        fill="none"*/}
                              {/*        xmlns="http://www.w3.org/2000/svg"*/}
                              {/*        className="fill-jacarta-500 dark:fill-jacarta-200"*/}
                              {/*    >*/}
                              {/*      <circle cx="2" cy="2" r="2" />*/}
                              {/*      <circle cx="8" cy="2" r="2" />*/}
                              {/*      <circle cx="14" cy="2" r="2" />*/}
                              {/*    </svg>*/}
                              {/*  </a>*/}
                              {/*  <div*/}
                              {/*      className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"*/}
                              {/*      aria-labelledby="itemActions"*/}
                              {/*  >*/}
                              {/*    <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">*/}
                              {/*      New bid*/}
                              {/*    </button>*/}
                              {/*    <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />*/}
                              {/*    <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">*/}
                              {/*      Refresh Metadata*/}
                              {/*    </button>*/}
                              {/*    <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">*/}
                              {/*      Share*/}
                              {/*    </button>*/}
                              {/*    <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">*/}
                              {/*      Report*/}
                              {/*    </button>*/}
                              {/*  </div>*/}
                              {/*</div>*/}
                            </div>
                            <div className="mt-2 text-sm">
                              <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">
                                {elm.price}
                              </span>
                              <span className="text-jacarta-500 dark:text-jacarta-300">
                                {elm.bidCount}
                              </span>
                            </div>

                            <div className="mt-8 flex items-center justify-between">
                              <button
                                className="font-display text-sm font-semibold text-[#03b56a]"
                                data-bs-toggle="modal"
                                data-bs-target="#buyNowModal"
                              >
                                Buy now
                              </button>
                              <Link
                                href={`/explore/${elm.id}`}
                                className="group flex items-center"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="24"
                                  height="24"
                                  className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-[#03b56a] dark:fill-jacarta-200"
                                >
                                  <path fill="none" d="M0 0H24V24H0z" />
                                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                </svg>
                                <span className="font-display text-sm font-semibold group-hover:text-[#03b56a] dark:text-jacarta-200">
                                  View History
                                </span>
                              </Link>
                            </div>
                          </div>
                        </article>
                      ))}
                  </div>
                  {/* end grid */}
                </div>
                {/* end on sale tab */}

                {/* Owned Tab */}
                <div
                  className="tab-pane fade"
                  id="owned"
                  role="tabpanel"
                  aria-labelledby="owned-tab"
                >
                  {/* Filters */}
                  {/*<Filter />*/}
                  {/* end filters */}

                  {/* Grid */}
                  <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                    {allItems
                      .filter((elm) => elm.type == "owned")
                      .map((elm, i) => (
                        <article key={i}>
                          <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-[#4A4A4A] dark:bg-[#4A4A4A]">
                            <figure className="relative">
                              <Link href={`/explore/${elm.id}`}>
                                <Image
                                  width={230}
                                  height={230}
                                  src={elm.imageSrc}
                                  alt="item 5"
                                  className="w-full rounded-[0.625rem]"
                                  loading="lazy"
                                />
                              </Link>
                              {/*<div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">*/}
                              {/*<span*/}
                              {/*    onClick={() => addLike(elm.id)}*/}
                              {/*    className={`js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0 ${*/}
                              {/*        elm.liked ? "js-likes--active" : ""*/}
                              {/*    }`}*/}
                              {/*    data-tippy-content="Favorite"*/}
                              {/*>*/}
                              {/*  <svg*/}
                              {/*      xmlns="http://www.w3.org/2000/svg"*/}
                              {/*      viewBox="0 0 24 24"*/}
                              {/*      width="24"*/}
                              {/*      height="24"*/}
                              {/*      className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"*/}
                              {/*  >*/}
                              {/*    <path fill="none" d="M0 0H24V24H0z" />*/}
                              {/*    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />*/}
                              {/*  </svg>*/}
                              {/*</span>*/}
                              {/*          <span className="text-sm dark:text-jacarta-200">*/}
                              {/*  {elm.likes}*/}
                              {/*</span>*/}
                              {/*        </div>*/}
                              <div className="absolute left-3 -bottom-3">
                                <div className="flex -space-x-2">
                                  <a href="#">
                                    <Image
                                      width={24}
                                      height={24}
                                      src={elm.creatorAvatar}
                                      alt="creator"
                                      className="h-6 w-6 rounded-full border-2 border-white hover:border-[#03b56a] dark:border-jacarta-600 dark:hover:border-[#03b56a]"
                                      data-tippy-content="Creator: Sussygirl"
                                    />
                                  </a>
                                  <a href="#">
                                    <Image
                                      width={24}
                                      height={24}
                                      src={elm.ownerAvatar}
                                      alt="owner"
                                      className="h-6 w-6 rounded-full border-2 border-white hover:border-[#03b56a] dark:border-jacarta-600 dark:hover:border-[#03b56a]"
                                      data-tippy-content="Owner: Sussygirl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </figure>
                            <div className="mt-7 flex items-center justify-between">
                              <Link href={`/explore/${elm.id}`}>
                                <span className="font-display text-base text-jacarta-700 hover:text-[#03b56a] dark:text-white">
                                  {elm.title}
                                </span>
                              </Link>
                              {/*<div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">*/}
                              {/*  <a*/}
                              {/*      href="#"*/}
                              {/*      className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"*/}
                              {/*      role="button"*/}
                              {/*      id="itemActions"*/}
                              {/*      data-bs-toggle="dropdown"*/}
                              {/*      aria-expanded="false"*/}
                              {/*  >*/}
                              {/*    <svg*/}
                              {/*        width="16"*/}
                              {/*        height="4"*/}
                              {/*        viewBox="0 0 16 4"*/}
                              {/*        fill="none"*/}
                              {/*        xmlns="http://www.w3.org/2000/svg"*/}
                              {/*        className="fill-jacarta-500 dark:fill-jacarta-200"*/}
                              {/*    >*/}
                              {/*      <circle cx="2" cy="2" r="2" />*/}
                              {/*      <circle cx="8" cy="2" r="2" />*/}
                              {/*      <circle cx="14" cy="2" r="2" />*/}
                              {/*    </svg>*/}
                              {/*  </a>*/}
                              {/*  <div*/}
                              {/*      className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"*/}
                              {/*      aria-labelledby="itemActions"*/}
                              {/*  >*/}
                              {/*    <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">*/}
                              {/*      New bid*/}
                              {/*    </button>*/}
                              {/*    <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />*/}
                              {/*    <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">*/}
                              {/*      Refresh Metadata*/}
                              {/*    </button>*/}
                              {/*    <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">*/}
                              {/*      Share*/}
                              {/*    </button>*/}
                              {/*    <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">*/}
                              {/*      Report*/}
                              {/*    </button>*/}
                              {/*  </div>*/}
                              {/*</div>*/}
                            </div>
                            <div className="mt-2 text-sm">
                              <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">
                                {elm.price}
                              </span>
                              <span className="text-jacarta-500 dark:text-jacarta-300">
                                {elm.bidCount}
                              </span>
                            </div>

                            <div className="mt-8 flex items-center justify-between">
                              <button
                                className="font-display text-sm font-semibold text-[#03b56a]"
                                data-bs-toggle="modal"
                                data-bs-target="#buyNowModal"
                              >
                                Buy now
                              </button>
                              <Link
                                href={`/explore/${elm.id}`}
                                className="group flex items-center"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="24"
                                  height="24"
                                  className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-[#03b56a] dark:fill-jacarta-200"
                                >
                                  <path fill="none" d="M0 0H24V24H0z" />
                                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                </svg>
                                <span className="font-display text-sm font-semibold group-hover:text-[#03b56a] dark:text-jacarta-200">
                                  View History
                                </span>
                              </Link>
                            </div>
                          </div>
                        </article>
                      ))}
                  </div>
                  {/* end grid */}
                </div>
                {/* end owned tab */}

                {/* Created Tab */}
                <div
                  className="tab-pane fade"
                  id="created"
                  role="tabpanel"
                  aria-labelledby="created-tab"
                >
                  {/* Filters */}
                  {/*<Filter />*/}
                  {/* end filters */}

                  {/* Grid */}
                  <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                    {allItems
                      .filter((elm) => elm.type == "created")
                      .map((elm, i) => (
                        <article key={i}>
                          <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-[#4A4A4A] dark:bg-[#4A4A4A]">
                            <figure className="relative">
                              <Link href={`/explore/${elm.id}`}>
                                <Image
                                  width={230}
                                  height={230}
                                  src={elm.imageSrc}
                                  alt="item 5"
                                  className="w-full rounded-[0.625rem]"
                                  loading="lazy"
                                />
                              </Link>
                              {/*<div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">*/}
                              {/*<span*/}
                              {/*    onClick={() => addLike(elm.id)}*/}
                              {/*    className={`js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0 ${*/}
                              {/*        elm.liked ? "js-likes--active" : ""*/}
                              {/*    }`}*/}
                              {/*    data-tippy-content="Favorite"*/}
                              {/*>*/}
                              {/*  <svg*/}
                              {/*      xmlns="http://www.w3.org/2000/svg"*/}
                              {/*      viewBox="0 0 24 24"*/}
                              {/*      width="24"*/}
                              {/*      height="24"*/}
                              {/*      className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"*/}
                              {/*  >*/}
                              {/*    <path fill="none" d="M0 0H24V24H0z" />*/}
                              {/*    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />*/}
                              {/*  </svg>*/}
                              {/*</span>*/}
                              {/*          <span className="text-sm dark:text-jacarta-200">*/}
                              {/*  {elm.likes}*/}
                              {/*</span>*/}
                              {/*        </div>*/}
                              <div className="absolute left-3 -bottom-3">
                                <div className="flex -space-x-2">
                                  <a href="#">
                                    <Image
                                      width={24}
                                      height={24}
                                      src={elm.creatorAvatar}
                                      alt="creator"
                                      className="h-6 w-6 rounded-full border-2 border-white hover:border-[#03b56a] dark:border-jacarta-600 dark:hover:border-[#03b56a]"
                                      data-tippy-content="Creator: Sussygirl"
                                    />
                                  </a>
                                  <a href="#">
                                    <Image
                                      width={24}
                                      height={24}
                                      src={elm.ownerAvatar}
                                      alt="owner"
                                      className="h-6 w-6 rounded-full border-2 border-white hover:border-[#03b56a] dark:border-jacarta-600 dark:hover:border-[#03b56a]"
                                      data-tippy-content="Owner: Sussygirl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </figure>
                            <div className="mt-7 flex items-center justify-between">
                              <Link href={`/explore/${elm.id}`}>
                                <span className="font-display text-base text-jacarta-700 hover:text-[#03b56a] dark:text-white">
                                  {elm.title}
                                </span>
                              </Link>
                              {/*<div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">*/}
                              {/*  <a*/}
                              {/*      href="#"*/}
                              {/*      className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"*/}
                              {/*      role="button"*/}
                              {/*      id="itemActions"*/}
                              {/*      data-bs-toggle="dropdown"*/}
                              {/*      aria-expanded="false"*/}
                              {/*  >*/}
                              {/*    <svg*/}
                              {/*        width="16"*/}
                              {/*        height="4"*/}
                              {/*        viewBox="0 0 16 4"*/}
                              {/*        fill="none"*/}
                              {/*        xmlns="http://www.w3.org/2000/svg"*/}
                              {/*        className="fill-jacarta-500 dark:fill-jacarta-200"*/}
                              {/*    >*/}
                              {/*      <circle cx="2" cy="2" r="2" />*/}
                              {/*      <circle cx="8" cy="2" r="2" />*/}
                              {/*      <circle cx="14" cy="2" r="2" />*/}
                              {/*    </svg>*/}
                              {/*  </a>*/}
                              {/*  <div*/}
                              {/*      className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"*/}
                              {/*      aria-labelledby="itemActions"*/}
                              {/*  >*/}
                              {/*    <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">*/}
                              {/*      New bid*/}
                              {/*    </button>*/}
                              {/*    <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />*/}
                              {/*    <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">*/}
                              {/*      Refresh Metadata*/}
                              {/*    </button>*/}
                              {/*    <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">*/}
                              {/*      Share*/}
                              {/*    </button>*/}
                              {/*    <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">*/}
                              {/*      Report*/}
                              {/*    </button>*/}
                              {/*  </div>*/}
                              {/*</div>*/}
                            </div>
                            <div className="mt-2 text-sm">
                              <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">
                                {elm.price}
                              </span>
                              <span className="text-jacarta-500 dark:text-jacarta-300">
                                {elm.bidCount}
                              </span>
                            </div>

                            <div className="mt-8 flex items-center justify-between">
                              <button
                                className="font-display text-sm font-semibold text-[#03b56a]"
                                data-bs-toggle="modal"
                                data-bs-target="#buyNowModal"
                              >
                                Buy now
                              </button>
                              <Link
                                href={`/explore/${elm.id}`}
                                className="group flex items-center"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="24"
                                  height="24"
                                  className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-[#03b56a] dark:fill-jacarta-200"
                                >
                                  <path fill="none" d="M0 0H24V24H0z" />
                                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                </svg>
                                <span className="font-display text-sm font-semibold group-hover:text-[#03b56a] dark:text-jacarta-200">
                                  View History
                                </span>
                              </Link>
                            </div>
                          </div>
                        </article>
                      ))}
                  </div>
                  {/* end grid */}
                </div>
                {/* end created tab */}

                {/* Collections Tab */}
                {/*<div*/}
                {/*  className="tab-pane fade"*/}
                {/*  id="collections"*/}
                {/*  role="tabpanel"*/}
                {/*  aria-labelledby="collections-tab"*/}
                {/*>*/}
                {/*  <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">*/}
                {/*    {collections3.slice(0, 4).map((elm, i) => (*/}
                {/*      <article key={i}>*/}
                {/*        <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">*/}
                {/*          <Link*/}
                {/*            href={`/collection/${elm.id}`}*/}
                {/*            className="flex space-x-[0.625rem]"*/}
                {/*          >*/}
                {/*            <span className="w-[74.5%]">*/}
                {/*              <Image*/}
                {/*                width={152}*/}
                {/*                height={242}*/}
                {/*                src={elm.images[0]}*/}
                {/*                alt="item 1"*/}
                {/*                className="h-full w-full rounded-[0.625rem] object-cover"*/}
                {/*                loading="lazy"*/}
                {/*              />*/}
                {/*            </span>*/}
                {/*            <span className="flex w-1/3 flex-col space-y-[0.625rem]">*/}
                {/*              {elm.images.slice(1).map((img, i2) => (*/}
                {/*                <Image*/}
                {/*                  width={68}*/}
                {/*                  height={74}*/}
                {/*                  key={i2}*/}
                {/*                  src={img}*/}
                {/*                  alt="item 1"*/}
                {/*                  className="h-full rounded-[0.625rem] object-cover"*/}
                {/*                  loading="lazy"*/}
                {/*                />*/}
                {/*              ))}*/}
                {/*            </span>*/}
                {/*          </Link>*/}

                {/*          <Link*/}
                {/*            href={`/explore/${elm.id}`}*/}
                {/*            className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"*/}
                {/*          >*/}
                {/*            {elm.name}*/}
                {/*          </Link>*/}

                {/*          <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">*/}
                {/*            <div className="flex flex-wrap items-center">*/}
                {/*              /!*<Link*!/*/}
                {/*              /!*  href={`/user/${elm.id}`}*!/*/}
                {/*              /!*  className="mr-2 shrink-0"*!/*/}
                {/*              /!*>*!/*/}
                {/*                <Image*/}
                {/*                  width={20}*/}
                {/*                  height={20}*/}
                {/*                  src={elm.avatar}*/}
                {/*                  alt="owner"*/}
                {/*                  className="h-5 w-5 rounded-full mr-2 shrink-0"*/}
                {/*                />*/}
                {/*              /!*</Link>*!/*/}
                {/*              <span className="mr-1 dark:text-jacarta-400">by</span>*/}
                {/*              /!*<Link href={`/user/${elm.id}`} className="text-accent">*!/*/}
                {/*                <span className="text-accent">{elm.ownerName}</span>*/}
                {/*              /!*</Link>*!/*/}
                {/*            </div>*/}
                {/*            <span className="text-sm dark:text-jacarta-300">*/}
                {/*              {elm.itemCount} Items*/}
                {/*            </span>*/}
                {/*          </div>*/}
                {/*        </div>*/}
                {/*      </article>*/}
                {/*    ))}*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/* end collections tab */}

                {/* Activity Tab */}
                <div
                  className="tab-pane fade"
                  id="activity"
                  role="tabpanel"
                  aria-labelledby="activity-tab"
                >
                  <Activity />
                </div>
                {/* end activity tab */}
              </div>
            </div>
        }
      </div>
    </section>
  );
}
