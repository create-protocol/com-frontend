"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Hero1() {
  const { t } = useTranslation();
  return (
    <section className="relative h-screen bg-[#000]">
      {/*<Image*/}
      {/*    width={1920}*/}
      {/*    height={1014}*/}
      {/*    src="/img/hero/ico_landing_roadmap.jpg"*/}
      {/*    alt="image"*/}
      {/*    className="absolute inset-0 -z-10 h-full w-full object-cover"*/}
      {/*/>*/}
      <div className="ml-auto mr-auto h-full max-w-[91rem] lg:max-w-[85rem] px-4">
        <div className="grid h-full items-center gap-4 md:grid-cols-12">
          <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start lg:py-20">
            <h1 className="mb-6 text-center font-display text-3xl text-white md:text-left lg:text-4xl">
              {t("home").hero1.title}
            </h1>
            <p className="mb-8 text-center text-lg text-white md:text-left">
              {t("home").hero1.desc}{" "}
            </p>
            <div className="flex space-x-4">
              <Link
                href="/explore"
                className="rounded-full bg-[#03b56a] py-3 px-8 text-center font-semibold text-white shadow-[#03b56a]-volume transition-all hover:bg-[#03b56a]-dark"
              >
                {t("home").hero1.strtBtn}
              </Link>
              {/*<Link*/}
              {/*  href="/explore"*/}
              {/*  className="rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"*/}
              {/*>*/}
              {/*  Learn More*/}
              {/*</Link>*/}
            </div>
          </div>
          <div className="relative col-span-6 col-start-7 hidden h-full md:flex items-center justify-center">
            <img
              src="/img/anim-logo.png"
              alt="anim"
              className="mt-12 lg:mt-20"
            />
            <div className="absolute bottom-[20%] left-20 animate-bounce">
              <div className="flex items-center space-x-4 rounded-2lg bg-[#03b56a]/50 p-2.5 pr-6 pl-6 backdrop-blur-md">
                {/*<div className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">*/}
                {/*  <Image*/}
                {/*    width={48}*/}
                {/*    height={48}*/}
                {/*    src="/img/chains/polygon@2x.png"*/}
                {/*    alt="image"*/}
                {/*    className="max-w-[50%]"*/}
                {/*  />*/}
                {/*</div>*/}
                <span className=" font-body text-sm text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="mr-1 h-4 w-4 fill-white  transition-colors group-hover:fill-white dark:fill-jacarta-100"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                  Art
                </span>
                {/*<span className="font-display text-sm text-white/40">PY</span>*/}
              </div>
            </div>
            <div className="absolute bottom-[20%] right-8 animate-bounce">
              <div className="flex items-center space-x-4 rounded-2lg bg-[#03b56a]/50 p-2.5 pr-6 pl-6 backdrop-blur-md">
                {/*<div className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">*/}
                {/*  <Image*/}
                {/*    width={48}*/}
                {/*    height={48}*/}
                {/*    src="/img/chains/polygon@2x.png"*/}
                {/*    alt="image"*/}
                {/*    className="max-w-[50%]"*/}
                {/*  />*/}
                {/*</div>*/}
                <span className=" font-body text-sm text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="mr-1 h-4 w-4 fill-white  transition-colors group-hover:fill-white dark:fill-jacarta-100"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
                  </svg>
                  Movies
                </span>
                {/*<span className="font-display text-sm text-white/40">PY</span>*/}
              </div>
            </div>
            <div className="absolute right-8 top-1/2 animate-bounce">
              <div className="flex items-center space-x-4 rounded-2lg bg-white/30 p-2.5 pr-6 pl-6 backdrop-blur-md">
                {/*<div className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">*/}
                {/*  <Image*/}
                {/*    width={48}*/}
                {/*    height={48}*/}
                {/*    src="/img/chains/ethereum@2x.png"*/}
                {/*    alt="image"*/}
                {/*    className="max-w-[50%]"*/}
                {/*  />*/}
                {/*</div>*/}
                <span className="font-body text-sm text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="mr-1 h-4 w-4 fill-white  transition-colors group-hover:fill-white dark:fill-jacarta-100"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2 M14 11V2h1v9zM6 3v10H5V3z M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z" />
                  </svg>
                  Music
                </span>
                {/*<span className="font-display text-sm text-white/40">ETH</span>*/}
              </div>
            </div>
            <div className="absolute left-16 top-1/3 animate-bounce">
              <div className="flex items-center space-x-4 rounded-2lg bg-[#62688F]/50 p-2.5 pr-6 pl-6 backdrop-blur-md">
                {/*<div className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">*/}
                {/*  <Image*/}
                {/*    width={48}*/}
                {/*    height={48}*/}
                {/*    src="/img/chains/ethereum@2x.png"*/}
                {/*    alt="image"*/}
                {/*    className="max-w-[50%]"*/}
                {/*  />*/}
                {/*</div>*/}
                <span className="font-body text-sm text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="mr-1 h-4 w-4 fill-white  transition-colors group-hover:fill-white dark:fill-jacarta-100"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 2C10 2.93192 9.36261 3.71497 8.5 3.93699V9.02363C9.36261 9.10689 10 9.40053 10 9.75C10 10.1642 9.10457 10.5 8 10.5C6.89543 10.5 6 10.1642 6 9.75C6 9.40053 6.63739 9.10689 7.5 9.02363V3.93699C6.63739 3.71497 6 2.93192 6 2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2Z M0 9.66486V11.382C0 11.7607 0.214002 12.107 0.552786 12.2764L7.10557 15.5528C7.66863 15.8343 8.33137 15.8343 8.89443 15.5528L15.4472 12.2764C15.786 12.107 16 11.7607 16 11.382V9.66486C16 9.56485 15.9404 9.47447 15.8485 9.43507L9.5 6.71429V7.70834L14.727 9.88624C14.829 9.92874 14.8297 10.073 14.7281 10.1165L8.78784 12.6624C8.28474 12.878 7.71526 12.878 7.21216 12.6624L1.27187 10.1165C1.1703 10.073 1.17103 9.92874 1.27303 9.88624L6.5 7.70834L6.48718 6.71979L0.15152 9.43507C0.0595992 9.47447 0 9.56485 0 9.66486Z" />
                  </svg>
                  Gaming
                </span>
                {/*<span className="font-display text-sm text-white/40">ETH</span>*/}
              </div>
            </div>
            <div className="absolute right-1/3 top-1/4 animate-bounce">
              <div className="flex items-center space-x-4 rounded-2lg bg-orange p-2.5 pr-6 pl-6 backdrop-blur-md">
                {/*<div className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">*/}
                {/*  <Image*/}
                {/*    width={48}*/}
                {/*    height={48}*/}
                {/*    src="/img/chains/bitcoin@2x.png"*/}
                {/*    alt="image"*/}
                {/*    className="max-w-[50%]"*/}
                {/*  />*/}
                {/*</div>*/}
                <span className="font-body text-sm text-[#000] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-card-text"
                    viewBox="0 0 16 16"
                    className="mr-1 h-4 w-4 transition-colors group-hover:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
                  </svg>
                  Text
                </span>
                {/*<span className="font-display text-sm text-white/40">BTC</span>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
