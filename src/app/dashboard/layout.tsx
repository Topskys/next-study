"use client";
import Link from "next/link";
import React, { useState } from "react";

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

  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 max-auto mt-4">
      <div className="flex gap-4 font-bold text-lg mb-4 text-purple-500">
        <Link href="/dashboard/about">About</Link>
        <Link href="/dashboard/settings">Settings</Link>
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
