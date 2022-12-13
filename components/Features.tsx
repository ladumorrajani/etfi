import Image from "next/image";
import polygon from "../assets/images/polygon.png";
import reBalancing from "../assets/images/rebalancing.svg";
import wallet from "../assets/images/wallet.svg";
import liquidity from "../assets/images/liquidity.svg";
import redeemable from "../assets/images/redeemable.svg";
import { ImageLoader } from "../utils/image-loader";

const features = [
  {
    img: reBalancing,
    title: "Automated Rebalancing",
    description:
      "Indices are rebalanced once a month by our protocol, not by human hands. Your investment is protected from clupsy fingers and mistakes.",
  },
  {
    img: wallet,
    title: "Non Custodial",
    description:
      "Your funds are securely in our audited smart contracts. As safe as possible. As DeFi should be.",
  },
  {
    img: liquidity,
    title: "Liquidity First",
    description:
      "Indices made to weather the storms. Allocations are carefully calculated by our DeFi experts based on multiple factors: liquidity, safety longevity.",
  },
  {
    img: redeemable,
    title: "Redeemable",
    description:
      "You will never have to wait for a redemption - it’s immediate. Indices are long-term investments but you can enter or exit 24/7, immediately.",
  },
];

export default function Features() {
  return (
    <div className="py-36 bg-blue-600 relative lg:py-28 md:py-20 sm:py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="text-display-md font-semibold text-primary mb-6 lg:mb-4 sm:text-display-sm">
            Decentralized Smart Indices
          </h2>
          <p className="text-lg text-gray-400 mb-20 lg:mb-12 sm:text-base">
            Designed with safety and decentralisation in mind
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 lg:gap-6 sm:grid-cols-1">
          {features.map((feature, index) => {
            return (
              <div key={index} className="bg-white rounded-xl p-8 sm:p-5">
                <div className="w-11 h-11 rounded-full border border-blue-500 overflow-hidden flex items-center justify-center mb-2">
                  <Image
                    loader={ImageLoader}
                    src={feature.img}
                    alt={feature.title}
                    className="max-w-full block"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-6 leading-9 lg:mb-4">
                  {feature.title}
                </h3>
                <p className="text-base font-medium text-gray-400 leading-6 mb-0">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
