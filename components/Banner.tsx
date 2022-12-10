import Image from "next/image";
import banner from "../assets/images/banner.png";
import bannerMap from "../assets/images/banner-map.png";
import { ImageLoader } from "../utils/image-loader";

export default function Banner() {
  return (
    <div className="pt-36 relative bg-[#fbfbfb] lg:pt-28 md:pt-20 sm:pt-16">
      <Image
        loader={ImageLoader}
        src={banner}
        alt="banner"
        className="absolute top-0 left-0 w-full h-full object-cover"
        fill
      />
      <div className="container relative">
        <div className="text-center mb-20">
          <h1 className="text-display-2xl text-transparent font-bold mb-6 bg-clip-text bg-text sm:text-display-xs sm:mb-3">
            DeFi. Simplified.
          </h1>
          <p className="text-lg text-gray-400 mb-[104px] md:mb-8 sm:text-sm">
            Algorithmic on-chain Indexes and Strategies. <br />
            Effortlessly.
          </p>
          <div className="flex items-center justify-center gap-20 lg:gap-10 md:gap-5 sm:flex-wrap">
            <button type="button" className="btn-secondary">
              Discover More
            </button>
            <button type="button" className="btn-primary">
              Launch App
            </button>
          </div>
        </div>
      </div>
      <Image
        loader={ImageLoader}
        src={bannerMap}
        alt="Map"
        className="relative"
      />
    </div>
  );
}
