"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { products } from "@/app/page";

// interface IProps {
//   params: { id: string };
// }

/**
 * 使用平行路由软刷新实现弹出modal（路由拦截）
 */
export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  const photo = products.find((v) => v.id === id)!;

  return (
    <div
      onClick={router.back}
      className="flex justify-center items-center fixed inset-0 bg-gray-500/[.8]"
    >
      <Image
        src={photo.image}
        width={300}
        height={300}
        alt={photo.name}
        className="rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
