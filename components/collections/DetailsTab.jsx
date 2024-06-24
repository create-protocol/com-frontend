import { useTranslation } from "react-i18next";
export default function Details() {
  const { t } = useTranslation();
  return (
    <div className="rounded-t-2lg rounded-b-2lg rounded-tl-none border border-jacarta-100 bg-white p-6 dark:border-[#4A4A4A]/90 dark:bg-[#4A4A4A] md:p-10">
      <div className="mb-4 flex items-center">
        <span className="mr-2 min-w-[9rem] dark:text-jacarta-300">
          {t("explore").detail.contract}:
        </span>
        <span
          className="js-copy-clipboard cursor-pointer select-none text-jacarta-700 dark:text-white"
          data-tippy-content="Copy"
        >
          0x1cBB182322Aee8ce9F4F1f98d7460173ee30Af1F
        </span>
        {/*<a href="#" className="text-accent">*/}
        {/*  0x1cBB182322Aee8ce9F4F1f98d7460173ee30Af1F*/}
        {/*</a>*/}
      </div>
      <div className="mb-2 flex flex-col items-start">
        <span className="mr-2 mb-2 min-w-[9rem] dark:text-jacarta-300">
          {t("explore").detail.prompt}:
        </span>
        <input
          name="prompt"
          type="text"
          id="item-name"
          className="w-1/2 rounded-lg border-jacarta-100 mb-6 py-3 hover:ring-2 hover:ring-[#03b56a]/30 focus:ring-[#03b56a] dark:border-jacarta-600 dark:bg-[#FFF]/30 dark:text-white dark:placeholder:text-[#FFF]/80"
          placeholder={`${t("explore").detail.type}...`}
          required
        />
        <button
          disabled
          className="cursor-default rounded-full bg-[#03b56a] py-3  px-8 text-center font-semibold text-white transition-all disabled:opacity-60"
        >
          {t("explore").detail.generate}
        </button>
      </div>
    </div>
  );
}
