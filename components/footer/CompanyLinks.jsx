"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function CompanyLinks() {
  const { t } = useTranslation();
  const menuItems = [
    {
      href: "/about",
      name: t("footer1").companyLinks.blog,
    },
    {
      href: "/about",
      name: t("footer1").companyLinks.about,
    },
  ];

  return (
    <>
      {menuItems.map((elm, i) => (
        <li key={i}>
          <Link
            href={elm.href}
            className="hover:text-accent dark:hover:text-white"
          >
            {elm.name}
          </Link>
        </li>
      ))}
    </>
  );
}
