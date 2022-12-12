import Image from "next/image";
import animation from "../assets/images/animation.png";
import { ImageLoader } from "../utils/image-loader";

export default function BgAnimation() {
  return (
    <div className="w-full h-[307px] overflow-hidden bg-white relative">
      <Image
        loader={ImageLoader}
        src={animation}
        alt="Animation"
        className="absolute top-1/2 left-0 -mt-[50%] rotate"
      />
    </div>
  );
}
