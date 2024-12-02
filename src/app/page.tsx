import { Metadata } from "next";
import image from "../../public/1.png";
import Hero from "@/components/Hero";

/**
 * 元数据（静态）
 * 
 * <meta name="title" content={metaData.title} />
 */
export const metadata:Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <Hero imgUrl={image} alt="home" content="Professional Cloud Hosting" />
  );
}
