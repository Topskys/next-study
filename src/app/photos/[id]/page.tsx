import { products } from "@/app/page";
import Image from "next/image";
import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const photo = products.find((v) => v.id === id)!;
  return (
    <div className="container mx-auto pt-8">
      <Image
        src={photo.image}
        width={300}
        height={300}
        alt={photo.name}
        className="rounded-lg object-cover mx-auto block"
      />
      <div className="border-2 border-dashed mt-5 p-5 rounded-lg leading-8">
        <p>
          <strong>Title:</strong>
          {photo.name}
        </p>
        <p>
          <strong>Price:</strong>
          {photo.price}
        </p>
        <p>
          <strong>Desc:</strong>
          {photo.desc}
        </p>
      </div>
    </div>
  );
}
