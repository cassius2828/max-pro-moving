import Marquee from "react-fast-marquee";
const images = [
  { src: "/images/moving-action-1.jpeg", alt: "Moving Action 1" },
  { src: "/images/moving-action-2.jpeg", alt: "Moving Action 2" },
  { src: "/images/moving-action-3.jpeg", alt: "Moving Action 3" },
  { src: "/images/moving-action-4.jpeg", alt: "Moving Action 4" },
  { src: "/images/moving-action-5.jpeg", alt: "Moving Action 5" },
];

const StaffGallery = () => {
  return (
    <div className="w-full relative mt-16 md:mt-0">
      <Marquee speed={20}>
        <div className="  flex justify-evenly">
          {images.map((image) => {
            return (
              <img
                key={image.src}
                className="max-w-50vw"
                src={image.src}
                alt={image.alt}
              />
            );
          })}
        </div>
      </Marquee>
      <div className="absolute top-0 left-0 w-full h-full bg-blue-800 opacity-90 z-10"></div>
    </div>
  );
};
export default StaffGallery;
