import React from "react";
import Image from "next/image";
import Link from "next/link";

export const products = [
  {
    id: "1",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
    name: "Earthen Bottle",
    price: "$48",
    desc: `Use these Tailwind CSS product list components to build storefront and category pages for your online store with images, prices, and links to more details or purchase options. These components are designed and built by the Tailwind CSS team, and include a variety of different styles and layouts.`,
  },
  {
    id: "2",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
    name: "Nomad Tumbler",
    price: "$35",
    desc: `Use these Tailwind CSS product list components to build storefront and category pages for your online store with images, prices, and links to more details or purchase options. These components are designed and built by the Tailwind CSS team, and include a variety of different styles and layouts.`,
  },
  {
    id: "3",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
    name: "Focus Paper Refill",
    price: "$89",
    desc: `Use these Tailwind CSS product list components to build storefront and category pages for your online store with images, prices, and links to more details or purchase options. These components are designed and built by the Tailwind CSS team, and include a variety of different styles and layouts.`,
  },
  {
    id: "4",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
    name: "Machined Mechanical Pencil",
    price: "$35",
    desc: `Use these Tailwind CSS product list components to build storefront and category pages for your online store with images, prices, and links to more details or purchase options. These components are designed and built by the Tailwind CSS team, and include a variety of different styles and layouts.`,
  },
  {
    id: "5",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
    name: "Earthen Bottle",
    price: "$48",
    desc: `Use these Tailwind CSS product list components to build storefront and category pages for your online store with images, prices, and links to more details or purchase options. These components are designed and built by the Tailwind CSS team, and include a variety of different styles and layouts.`,
  },
  {
    id: "6",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
    name: "Nomad Tumbler",
    price: "$35",
    desc: `Use these Tailwind CSS product list components to build storefront and category pages for your online store with images, prices, and links to more details or purchase options. These components are designed and built by the Tailwind CSS team, and include a variety of different styles and layouts.`,
  },
  {
    id: "7",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
    name: "Focus Paper Refill",
    price: "$89",
    desc: `Use these Tailwind CSS product list components to build storefront and category pages for your online store with images, prices, and links to more details or purchase options. These components are designed and built by the Tailwind CSS team, and include a variety of different styles and layouts.`,
  },
  {
    id: "8",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
    name: "Machined Mechanical Pencil",
    price: "$35",
    desc: `Use these Tailwind CSS product list components to build storefront and category pages for your online store with images, prices, and links to more details or purchase options. These components are designed and built by the Tailwind CSS team, and include a variety of different styles and layouts.`,
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-4xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((v, i) => {
            return (
              <Link href={`/photos/${v.id}`} className="group" key={v.name + i}>
                <Image
                  src={v.image}
                  alt={v.name + i}
                  width={200}
                  height={200}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                />
                {/* line-clamp-1 一行显示 */}
                <h3 className="mt-4 text-sm text-gray-700 line-clamp-1">
                  {v.name}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {v.price}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
