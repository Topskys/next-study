import React from "react";
/**
 * 问题：不能在use client导入
 * 解决：删除use client，但antd组件需要use client处理，可将其抽出单独客户端组件
 */
import type { Metadata } from "next";
// 引入客户端组件
import BlogList from "@/components/BlogList";

export const metadata: Metadata = {
  title: "博客列表",
};

export default function page() {
  return <BlogList />;
}
