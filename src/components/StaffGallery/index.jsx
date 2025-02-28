import Marquee from "react-fast-marquee";
const CDN_PATH = import.meta.env.VITE_CDN_PATH;
const images = [
  {
    src1: `${CDN_PATH}/sm/moving-action-1-sm.webp`,
    src2: `${CDN_PATH}/md/moving-action-1-md.webp`,
    src3: `${CDN_PATH}/lg/moving-action-1-lg.webp`,
    alt: "Moving Action 1",
  },
  {
    src1: `${CDN_PATH}/sm/moving-action-2-sm.webp`,
    src2: `${CDN_PATH}/md/moving-action-2-md.webp`,
    src3: `${CDN_PATH}/lg/moving-action-2-lg.webp`,
    alt: "Moving Action 2",
  },
  {
    src1: `${CDN_PATH}/sm/moving-action-3-sm.webp`,
    src2: `${CDN_PATH}/md/moving-action-3-md.webp`,
    src3: `${CDN_PATH}/lg/moving-action-3-lg.webp`,
    alt: "Moving Action 3",
  },
  {
    src1: `${CDN_PATH}/sm/moving-action-4-sm.webp`,
    src2: `${CDN_PATH}/md/moving-action-4-md.webp`,
    src3: `${CDN_PATH}/lg/moving-action-4-lg.webp`,
    alt: "Moving Action 4",
  },
  {
    src1: `${CDN_PATH}/sm/moving-action-5-sm.webp`,
    src2: `${CDN_PATH}/md/moving-action-5-md.webp`,
    src3: `${CDN_PATH}/lg/moving-action-5-lg.webp`,
    alt: "Moving Action 5",
  },
];

const StaffGallery = () => {
  return (
    <div className="w-full relative mt-16 md:mt-0">
      <Marquee speed={20}>
        <div className="flex justify-evenly">
          {images.map((image) => {
            return (
              <img
                key={image.src1}
                className="lg:h-100svh"
                src={image.src2} // Default image source
                srcSet={`${image.src1} 600w, ${image.src2} 1400w, ${image.src3} 2000w`}
                sizes="(max-width: 600px) 100vw, (max-width: 1400px) 50vw, 33vw"
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
