import image from "../../public/1.png";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Hero imgUrl={image} alt="home" content="Professional Cloud Hosting" />
  );
}
