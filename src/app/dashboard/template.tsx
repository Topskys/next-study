/**
 * layout和template区别
 * 1.layout切换页面会保留组件状态，而template不会
 * 2.layout和template同时存在，layout优先级更高且包裹template，template内容会在layout内展示
 */
"use client";
import React, { useState } from "react";

export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);

  return (
    <div className="border-2 border-dashed border-black p-4 max-auto mt-4">
      <div>Dashboard Template {count}</div>
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
