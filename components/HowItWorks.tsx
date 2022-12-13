import Image from "next/image";
import howItWorks from "../assets/images/how-it-works.svg";
import { ImageLoader } from "../utils/image-loader";

export default function HowItWorks() {
  return (
    <div className="py-36 bg-blue-600 lg:py-28 md:py-20 sm:py-16">
      <div className="container">
        <div className="grid grid-cols-12 justify-between items-center gap-10 md:grid-cols-1 md:gap-y-14 sm:gap-0 sm:gap-y-11">
          <div className="col-span-4 lg:col-span-5 md:col-span-12">
            <h2 className="text-display-md font-semibold text-primary mb-8 sm:text-display-sm sm:mb-6">
              How it works
            </h2>
            <p className="text-base sm:text-sm text-gray-200 m-0 font-medium">
              ETFI combines an array of carefully selected tokens into an index.
            </p>
            <div className="w-5 h-[1px] bg-gray-400 my-3" />
            <p className="text-base sm:text-sm text-gray-200 m-0 font-medium">
              The index enables our users to invest in multiple tokens in the
              simplest way.
            </p>
            <div className="w-5 h-[1px] bg-gray-400 my-3" />
            <p className="text-base sm:text-sm text-gray-200 m-0 font-medium">
              An oracle guarantees that the index always represents the value of
              the underlying tokens accurately.
            </p>
            <p className="text-base sm:text-sm text-primary m-0 font-semibold mt-8">
              Your investment is always priced correctly and can be withdrawn at
              any time.
            </p>
          </div>
          <div className="lg:hidden" />
          <div className="col-span-7 md:col-span-12">
            <Image
              loader={ImageLoader}
              src={howItWorks}
              alt="How It Works"
              className="max-w-full block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
