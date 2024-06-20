import { accessoryData } from "@/data/itemDetails";
import Link from "next/link";

export default function Properties() {
  return (
    <div className="rounded-t-2lg rounded-b-2lg rounded-tl-none border border-jacarta-100 bg-white p-6 dark:border-jacarta-600 dark:bg-[#4A4A4A] md:p-10">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
        {accessoryData.map((elm, i) => (
          <Link
            key={i}
            href="/collections"
            className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg dark:border-[#4A4A4A]/90 dark:bg-[#4A4A4A]"
          >
            <span className="text-sm uppercase text-accent">{elm.type}</span>
            <span className="text-base text-jacarta-700 dark:text-white">
              {elm.name}
            </span>
            <span className="text-sm text-jacarta-400">
              {elm.percentage}% have this trait
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
