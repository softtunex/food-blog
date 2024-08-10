import Image from "next/image";

import images1 from "@/assets/annie-spratt-R3LcfTvcGWY-unsplash.jpg";
import images2 from "@/assets/artur-rutkowski-GdTLaWamFHw-unsplash.jpg";
import images3 from "@/assets/dominik-martin-JYFmYif4n70-unsplash.jpg";

const imageList = [
  { src: images1, alt: "Food 1" },
  { src: images2, alt: "Food 2" },
  { src: images3, alt: "Food 3" },
];

export default function ImageSlideshow() {
  return (
    <>
      {imageList.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          priority
        />
      ))}
    </>
  );
}
