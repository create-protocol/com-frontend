"use client";
import Link from "next/link";
import Image from "next/image";
import CompanyLinks from "@/components/footer/CompanyLinks";
import { useTranslation } from "react-i18next";

export default function Footer1() {
  const { t } = useTranslation();
  return (
    <footer className="page-footer bg-white dark:bg-[#000]">
      <div className="container">
        <div className="grid grid-cols-6 gap-x-7 gap-y-14 pt-12 pb-12 md:grid-cols-12">
          <div className="col-span-full sm:col-span-3 md:col-span-10">
            <Link href="/" className="mb-6 inline-block">
              <Image
                width={65}
                height={49}
                src="/img/black.png"
                className="max-h-7 dark:hidden"
                alt="COM "
              />
              <Image
                width={65}
                height={49}
                src="/img/white.png"
                className="hidden max-h-7 dark:block"
                alt="COM"
              />
            </Link>
            <p className="mb-12 dark:text-jacarta-300">{t("footer1").title}</p>

            {/*<div className="flex space-x-5">*/}
            {/*  <Socials />*/}
            {/*</div>*/}
          </div>

          <div className="col-span-full sm:col-span-3 col-start-8 md:col-span-2">
            <h3 className="mb-6 font-display text-sm text-jacarta-700 dark:text-white">
              {t("footer1").company}
            </h3>
            <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
              <CompanyLinks />
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between space-y-2 pb-8 sm:flex-row sm:space-y-0">
          <span className="text-sm dark:text-[#FFF]/80">
            &copy; {new Date().getFullYear()} {t("footer1").made}{" "}
            <a
              target="_blank"
              href="https://www.createprotocol.org/"
              className="hover:text-[#03b56a]"
            >
              {t("footer1").protocol}
            </a>
          </span>
          <ul className="flex flex-wrap space-x-4 text-sm dark:text-[#FFF]/80">
            <li>
              <a href="/tos" className="hover:text-[#03b56a]">
                {t("footer1").terms}
              </a>
            </li>
            <li>
              <a href="/tos" className="hover:text-[#03b56a]">
                {t("footer1").policy}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
