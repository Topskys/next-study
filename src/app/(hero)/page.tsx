import { Metadata } from "next";
import image from "/public/1.png";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Home",
  description: "Cloud Hosting",
};

export default function Home() {
  return (
    <Hero imgUrl={image} alt="home" content="Professional Cloud Hosting" />
  );
}
