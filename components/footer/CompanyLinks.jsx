import Link from "next/link";

export default function CompanyLinks() {
const menuItems=[
    {
      href:'/about',
      name:'Blog'
    },
  {
    href:'/about',
    name:'About'
  },
]

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
