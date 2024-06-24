"use client";
import { explore, homes, manageComs, pages, resources } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useAccount } from "wagmi";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const { address, isConnecting, isReconnecting } = useAccount();
  const isActiveParentMenu = (menus) => {
    return menus.some(
      (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
    );
  };
  return (
    <>
      <li className="group">
        <Link
          href="/"
          className={`flex items-center justify-between py-3.5 font-display text-base  ${
            "/".split("/")[1] == pathname.split("/")[1]
              ? "text-[#03b56a] dark:text-[#03b56a]"
              : "text-[#4A4A4A] dark:text-white"
          }  hover:text-[#03b56a] focus:text-[#03b56a] dark:hover:text-[#03b56a] dark:focus:text-[#03b56a] lg:px-3`}
        >
          {t("nav").home}
        </Link>
      </li>
      <li className="group">
        <Link
          href="/explore"
          className={`flex items-center justify-between py-3.5 font-display text-base  ${
            "/explore".split("/")[1] == pathname.split("/")[1]
              ? "text-[#03b56a] dark:text-[#03b56a]"
              : "text-[#4A4A4A] dark:text-white"
          }  hover:text-[#03b56a] focus:text-[#03b56a] dark:hover:text-[#03b56a] dark:focus:text-[#03b56a] lg:px-3`}
        >
          {t("nav").explore}
        </Link>
      </li>
      <li className="group">
        <Link
          href="/network"
          className={`flex items-center justify-between py-3.5 font-display text-base  ${
            "/network".split("/")[1] == pathname.split("/")[1]
              ? "text-[#03b56a] dark:text-[#03b56a]"
              : "text-[#4A4A4A] dark:text-white"
          }  hover:text-[#03b56a] focus:text-[#03b56a] dark:hover:text-[#03b56a] dark:focus:text-[#03b56a] lg:px-3`}
        >
          {t("nav").network}
        </Link>
      </li>
      <li className="group">
        <Link
          href="/applications"
          className={`flex items-center justify-between py-3.5 font-display text-base  ${
            "/applications".split("/")[1] == pathname.split("/")[1]
              ? "text-[#03b56a] dark:text-[#03b56a]"
              : "text-[#4A4A4A] dark:text-white"
          }  hover:text-[#03b56a] focus:text-[#03b56a] dark:hover:text-[#03b56a] dark:focus:text-[#03b56a] lg:px-3`}
        >
          {t("nav").apps}
        </Link>
      </li>
      <li className="group">
        <Link
          href="https://github.com/create-protocol"
          target="_blank"
          className={`flex items-center justify-between py-3.5 font-display text-base text-[#4A4A4A] dark:text-white hover:text-[#03b56a] dark:hover:text-[#03b56a] lg:px-3`}
        >
          {t("nav").devs}
        </Link>
      </li>
      {address && !isConnecting && !isReconnecting && (
        <>
          <li className="group lg:hidden">
            <Link
              href="/manage"
              className={`flex items-center justify-between py-3.5 font-display text-base  ${
                "/settings".split("/")[1] == pathname.split("/")[1]
                  ? "text-[#03b56a] dark:text-[#03b56a]"
                  : "text-[#4A4A4A] dark:text-white"
              }  hover:text-[#03b56a] focus:text-[#03b56a] dark:hover:text-[#03b56a] dark:focus:text-[#03b56a] lg:px-3`}
            >
              {t("nav").settings}
            </Link>
          </li>
          <li className="js-nav-dropdown group relative lg:hidden">
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
              {t("nav").manage}
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
        </>
      )}
    </>
  );
}
