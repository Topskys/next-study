import Image, { StaticImageData } from "next/image";

interface IProps {
  content: string;
  imgUrl: StaticImageData;
  alt?: string;
}

export default function Page(props: IProps) {
  const { alt = "image", imgUrl, content } = props;
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={imgUrl}
          fill
          style={{ objectFit: "cover" }}
          alt={alt}
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1 className="text-white text-6xl">{content}</h1>
      </div>
    </div>
  );
}
