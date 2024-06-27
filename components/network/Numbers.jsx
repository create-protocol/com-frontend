"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const Numbers = () => {
  const { t } = useTranslation();

  return (
    <div className="container flex justify-between mt-12 gap-6 lg:mt-20">
      <div className="bg-[#000]/5 rounded-2xl p-2 dark:bg-[#4A4A4A] w-full">
        <h1 className="pt-4 text-center font-display text-base font-medium tracking-wider text-jacarta-700 dark:text-white">
          {t("network").numbers.value}
        </h1>
        <p className="text-center font-bold text-6xl text-green">80M</p>
      </div>
      <div className="bg-[#000]/5 rounded-2xl p-2 dark:bg-[#4A4A4A] w-full">
        <h1 className="pt-4 text-center font-display text-base font-medium tracking-wider text-jacarta-700 dark:text-white">
          {t("network").numbers.count}
        </h1>
        <p className="text-center font-bold text-6xl text-green">6M</p>
      </div>
      <div className="bg-[#000]/5 rounded-2xl p-2 dark:bg-[#4A4A4A] w-full">
        <h1 className="pt-4 text-center font-display text-base font-medium tracking-wider text-jacarta-700 dark:text-white">
          {t("network").numbers.batches}
        </h1>
        <p className="text-center font-bold text-6xl text-green">254,452</p>
      </div>
    </div>
  );
};

export default Numbers;
