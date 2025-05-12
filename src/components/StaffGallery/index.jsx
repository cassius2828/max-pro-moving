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
  {
    src1: `${CDN_PATH}/lg/moving-action-6.psd`,
    src2: `${CDN_PATH}/lg/moving-action-6.psd`,
    src3: `${CDN_PATH}/lg/moving-action-6.psd`,
    alt: "Moving Action 6",
  },
  {
    src1: `${CDN_PATH}/lg/moving-action-7.jpeg`,
    src2: `${CDN_PATH}/lg/moving-action-7.jpeg`,
    src3: `${CDN_PATH}/lg/moving-action-7.jpeg`,
    alt: "Moving Action 7",
  },
  {
    src1: `${CDN_PATH}/lg/moving-action-8.heic`,
    src2: `${CDN_PATH}/lg/moving-action-8.heic`,
    src3: `${CDN_PATH}/lg/moving-action-8.heic`,
    alt: "Moving Action 8",
  },
  {
    src1: `${CDN_PATH}/lg/moving-action-9.png`,
    src2: `${CDN_PATH}/lg/moving-action-9.png`,
    src3: `${CDN_PATH}/lg/moving-action-9.png`,
    alt: "Moving Action 9",
  },
  {
    src1: `${CDN_PATH}/lg/moving-action-10.HEIC`,
    src2: `${CDN_PATH}/lg/moving-action-10.HEIC`,
    src3: `${CDN_PATH}/lg/moving-action-10.HEIC`,
    alt: "Moving Action 10",
  },
  {
    src1: `${CDN_PATH}/lg/moving-action-11.JPG`,
    src2: `${CDN_PATH}/lg/moving-action-11.JPG`,
    src3: `${CDN_PATH}/lg/moving-action-11.JPG`,
    alt: "Moving Action 11",
  },
  {
    src1: `${CDN_PATH}/lg/moving-action-12.JPG`,
    src2: `${CDN_PATH}/lg/moving-action-12.JPG`,
    src3: `${CDN_PATH}/lg/moving-action-12.JPG`,
    alt: "Moving Action 12",
  },
  {
    src1: `${CDN_PATH}/lg/moving-action-13.JPG`,
    src2: `${CDN_PATH}/lg/moving-action-13.JPG`,
    src3: `${CDN_PATH}/lg/moving-action-13.JPG`,
    alt: "Moving Action 13",
  },
  {
    src1: `${CDN_PATH}/md/moving-action-14.png`,
    src2: `${CDN_PATH}/md/moving-action-14.png`,
    src3: `${CDN_PATH}/md/moving-action-14.png`,
    alt: "Moving Action 14",
  },
];

const StaffGallery = () => {
  return (
    <div className="w-full min-h-screen relative mt-16 md:mt-0">
      <Marquee speed={30}>
        <div className="flex h-screen items-stretch">
          {images.map((image) => {
            return (
              <img
                key={image.src1}
                className="h-screen w-auto object-cover flex-shrink-0"
                src={image.src2}
                srcSet={`${image.src1} 600w, ${image.src2} 1400w, ${image.src3} 2000w`}
                sizes="(max-width: 600px) 100vw, (max-width: 1400px) 50vw, 33vw"
                alt={image.alt}
              />
            );
          })}
        </div>
      </Marquee>
      <div className="absolute top-0 left-0 w-full h-full bg-neutral-900 opacity-90 z-10"></div>
    </div>
  );
};
export default StaffGallery;
