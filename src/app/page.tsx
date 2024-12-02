import { Metadata } from "next";
import image from "../../public/1.png";
import Hero from "@/components/Hero";

/**
 * 元数据（静态）
 *
 * <meta name="title" content={metaData.title} />
 */
export const metadata: Metadata = {
  title: "Home",
  description: "Cloud Hosting",
  /**
   * 指定页面图标
  * 方式1，在元数据icons对象指定页面图标
  * 方式2，将favicon.ico放在./src/app下，程序会自动指定页面图标
  */
};

export default function Home() {
  return (
    <Hero imgUrl={image} alt="home" content="Professional Cloud Hosting" />
  );
}
