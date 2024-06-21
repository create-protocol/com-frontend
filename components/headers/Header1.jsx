/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Nav from "./component/Nav";
import {
  addMobileMenuToggle,
  removeMenuActive,
} from "@/utlis/mobileMenuToggle";
import Profile from "./component/Profile";
import { handleDarkMode } from "@/utlis/handleDarkMode";
import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useAccount} from "wagmi";
import {manageComs} from "@/data/menu";
import {usePathname} from "next/navigation";

export default function Header1() {
  const {address,isConnecting, isReconnecting} = useAccount();

  const pathname = usePathname();
  const isActiveParentMenu = (menus) => {
    return menus.some(
        (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
    );
  };

  useEffect(() => {
    addMobileMenuToggle();
    return () => {
      removeMenuActive();
    };
  }, []);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`js-page-header fixed top-0 z-30 w-full bg-[#FFF] dark:dark:bg-[#000] backdrop-blur transition-colors ${
          scrolled ? "js-page-header--is-sticky bg-[#000]/5 dark:bg-[#FFF]/5" : ""
        }`}
      >
        <div className="flex items-center px-6 py-6 xl:px-24 gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 font-display text-base text-[#4A4A4A]  dark:text-white  h-fit">
            {/*COM*/}
            <Image
              width={65}
              height={49}
              src="/img/white.png"
              // className="max-h-10"
              className="max-h-10 hidden dark:block"
              alt="COM"
            />
            <Image
                width={65}
                height={49}
                src="/img/black.png"
                // className="max-h-10"
                className="max-h-10 dark:hidden block"
                alt="COM"
            />
            {/*Create Protocol*/}
          </Link>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative hidden basis-3/12 lg:block"
          >
            <input
              type="search"
              className="w-full rounded-2xl border border-jacarta-100 py-[0.6875rem] px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-[#03b56a] dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
              placeholder="Search"
            />
            <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-4 w-4 fill-jacarta-500 dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
              </svg>
            </span>
          </form>

          {/* Menu / Actions */}
          <div className="flex-1 js-mobile-menu invisible lg:visible fixed inset-0 z-10 ml-auto rtl:mr-auto rtl:ml-0 lg:justify-between items-center bg-white opacity-0 dark:bg-[#4A4A4A] lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent ">
            {/* Mobile Logo / Menu Close */}
            <div className="t-0 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 dark:bg-jacarta-800 lg:hidden">
              {/* Mobile Logo */}
              <Link href="/" className=" font-display text-2xl text-[#4A4A4A] dark:text-white lg:text-3xl xl:text-4xl h-fit">
              {/*COM*/}
               <Image
                  width={65}
                  height={49}
                  src="/img/black.png"
                  className="max-h-7 dark:hidden"
                  alt="COM"
                />
                {/*<Image*/}
                {/*  width={130}*/}
                {/*  height={28}*/}
                {/*  src="/img/logo_white.png"*/}
                {/*  className="hidden max-h-7 dark:block"*/}
                {/*  alt="Xhibiter | NFT Marketplace"*/}
                {/*/>*/}
                <Image
                    width={65}
                    height={49}
                    src="/img/white.png"
                    // className="max-h-7"
                    className="max-h-7 hidden dark:block"
                    alt="COM"
                />
              </Link>

              {/* Mobile Menu Close */}
              <button
                className="js-mobile-close group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-[#03b56a] focus:border-transparent focus:bg-[#03b56a] dark:border-transparent dark:bg-white/[.15] dark:hover:bg-[#03b56a]"
                aria-label="close mobile menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </button>
            </div>

            {/* Mobile Search */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative mt-24 mb-8 w-full lg:hidden"
            >
              <input
                type="search"
                className="w-full rounded-2xl border border-jacarta-100 py-3 px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-[#03b56a] dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                placeholder="Search"
              />
              <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                </svg>
              </span>
            </form>

            {/* Primary Nav */}
            <nav className="navbar mt-24 lg:mt-0">
              <ul className="flex flex-col lg:flex-row">
                <Nav />
              </ul>
            </nav>

            {/* Mobile Connect Wallet / Socials */}
            <div className=" w-full lg:hidden mt-4">
              <ConnectButton />

              <hr className="my-5 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
            </div>

            {/* Actions */}
            <div className="ml-8  hidden lg:flex xl:ml-12">
              {(address && !isConnecting && !isReconnecting) &&(
                  <ul className='flex flex-col lg:flex-row'>
                    <li className="group">
                      <Link
                          href="/manage"
                          className={`flex items-center justify-between py-3.5 font-display text-base  ${
                              "/settings".split("/")[1] == pathname.split("/")[1]
                                  ? "text-[#03b56a] dark:text-[#03b56a]"
                                  : "text-[#4A4A4A] dark:text-white"
                          }  hover:text-[#03b56a] focus:text-[#03b56a] dark:hover:text-[#03b56a] dark:focus:text-[#03b56a] lg:px-3`}
                      >
                        Settings
                      </Link>
                    </li>
                    <li className="js-nav-dropdown group relative">
                      <a
                          href="/manage"
                          className={`flex items-center justify-between py-3.5 font-display text-base ${
                              isActiveParentMenu(manageComs)
                                  ? "text-[#03b56a] dark:text-[#03b56a]"
                                  : "text-[#4A4A4A] dark:text-white"
                          }  hover:text-[#03b56a]  dark:hover:text-[#03b56a] lg:px-4`}
                          id="navDropdown-1"
                          aria-expanded="false"
                          role="button"
                          data-bs-toggle="dropdown"
                      >
                        Manage
                        <i className="lg:hidden">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              className="h-4 w-4 dark:fill-white"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                          </svg>
                        </i>
                      </a>
                      <ul
                          className="dropdown-menu group-hover:visible lg:invisible left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-[#4A4A4A] lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                          aria-labelledby="navDropdown-4"
                      >
                        {manageComs.map((elm, i) => (
                            <li key={i}>
                              <Link
                                  href={elm.href}
                                  className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-[#03b56a] focus:text-[#03b56a] dark:hover:bg-[#156F49]"
                              >
                      <span
                          className={`font-display text-sm  ${
                              elm.href.split("/")[1] == pathname.split("/")[1]
                                  ? "text-[#03b56a] dark:text-[#03b56a]"
                                  : "text-[#4A4A4A] dark:text-white"
                          } `}
                      >
                        {elm.text}
                      </span>
                              </Link>
                            </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
              )}
              {/* Wallet */}
              <ConnectButton />

              {/* Profile */}
              {/*<Profile />*/}

              {/* Dark Mode */}
              <div
                onClick={() => handleDarkMode()}
                className="cursor-pointer  js-dark-mode-trigger  group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-[#03b56a] focus:border-transparent focus:bg-[#03b56a] dark:border-transparent dark:bg-white/[.15] dark:hover:bg-[#03b56a]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="dark-mode-dark hidden h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile Menu Actions */}
          <div className="ml-auto flex lg:hidden rtl:ml-0 rtl:mr-auto ">
            {/* Profile */}
            {/*<Link*/}
            {/*  href="/edit-profile"*/}
            {/*  className="group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"*/}
            {/*  aria-label="profile"*/}
            {/*>*/}
            {/*  <svg*/}
            {/*    xmlns="http://www.w3.org/2000/svg"*/}
            {/*    viewBox="0 0 24 24"*/}
            {/*    width="24"*/}
            {/*    height="24"*/}
            {/*    className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"*/}
            {/*  >*/}
            {/*    <path fill="none" d="M0 0h24v24H0z" />*/}
            {/*    <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />*/}
            {/*  </svg>*/}
            {/*</Link>*/}

            {/* Dark Mode */}
            <div
              onClick={() => handleDarkMode()}
              className="cursor-pointer js-dark-mode-trigger group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-[#03b56a] focus:border-transparent focus:bg-[#03b56a] dark:border-transparent dark:bg-white/[.15] dark:hover:bg-[#03b56a]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="dark-mode-dark hidden h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
              </svg>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="js-mobile-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-[#03b56a] focus:border-transparent focus:bg-[#03b56a] dark:border-transparent dark:bg-white/[.15] dark:hover:bg-[#03b56a]"
              aria-label="open mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
