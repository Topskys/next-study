"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const links = [
  { name: "About", href: "/dashboard/about" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /**
   * 问题：SRC不能使用useState
   * 解决：在该文件头部添加 "use client" 变为CSR即可使用
   */
  const [count, setCount] = useState(0);
  const pathname = usePathname(); // /dashboard/about

  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 max-auto mt-4">
      <div className="flex gap-4 font-bold text-lg mb-4">
        {links.map(({ name, href }) => (
          <Link
            key={name}
            className={pathname === href ? "text-purple-500" : ""}
            href={href}
          >
            {name}
          </Link>
        ))}
      </div>
      <div>Dashboard Layout {count}</div>
      <button
        className="bg-black text-white p-2 my-4 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {children}
    </div>
  );
}
