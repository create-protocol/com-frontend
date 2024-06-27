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
                <span className=" font-body text-sm text-white">Art</span>
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
                <span className=" font-body text-sm text-white">Movies</span>
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
                <span className="font-body text-sm text-white">Music</span>
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
                <span className="font-body text-sm text-white">Gaming</span>
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
                <span className="font-body text-sm text-[#000]">Text</span>
                {/*<span className="font-display text-sm text-white/40">BTC</span>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
