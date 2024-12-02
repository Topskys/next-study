"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "Performance",
    href: "/performance",
  },
  {
    name: "Reliability",
    href: "/reliability",
  },
  {
    name: "Scale",
    href: "/scale",
  },
];

const accessLinks = ["/", ...links.map((link) => link.href)];

export default function header() {
  const pathname = usePathname();
  /**
   * 问题：判断是否需要显示header，如果不在访问范围内，则显示404
   * 解决：因为layout组件不能转为client渲染，拿不到pathname，故在此处判断，而不在app/layout.tsx
   */
  if (!accessLinks.includes(pathname)) {
    return null;
  }
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between items-center container mx-auto text-white p-8">
        <Link href="/" className="text-3xl font-bold">
          Home
        </Link>
        <div className="text-xl space-x-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={pathname === link.href ? "text-purple-500" : ""}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
