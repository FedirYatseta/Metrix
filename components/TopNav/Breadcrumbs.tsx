// components/Breadcrumbs.tsx
"use client";
import { inter } from "@/styles/fonts";
import { Home } from "@/image/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use next/navigation

const Breadcrumbs = () => {
  const currentPath = usePathname();


  const pathSegments = currentPath
    .split("/")
    .filter((segment) => segment !== "");

  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    return { label: segment, path };
  });

  return (
    <div className="flex items-center px-5 py-1 border-t-2 border-stroke dark:border-black-800">
      <Link href="/">
        <Home />
      </Link>
      {breadcrumbs.map((breadcrumb, index) => (
        <span
          key={breadcrumb.path}
          className={` ${inter.className} pl-2 text-sm text-black-200`}
        >
          {index >= 0 && " / "}
          <Link href={breadcrumb.path} className="capitalize px-1 ">
            {breadcrumb.label}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
