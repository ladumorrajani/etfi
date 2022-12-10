import Image from "next/image";
import polygon from "../assets/images/polygon.png";
import arbitrum from "../assets/images/arbitrum.png";
import fantom from "../assets/images/fantom.png";
import leftPattern from "../assets/images/indices-left.svg";
import rightPattern from "../assets/images/indices-right.svg";
import { ImageLoader } from "../utils/image-loader";

const indicesList = [
  {
    img: polygon,
    categories: ["DeFi", "Gaming"],
    title: "Polygon Metaverse",
    description:
      "This index is based on the top projects for on chain liquidity building DeFi apps with a specific focus on gaming and NFT in the Polygon Blockchain Ecosystem.",
    buttonTitle: "Invest Now",
    buttonLink: "#",
  },
  {
    img: polygon,
    categories: ["DeFi"],
    title: "Polygon DeFi",
    description:
      "This index is based on the top projects for on chain liquidity building DeFi apps with a specific focus on gaming and NFT in the Polygon Blockchain Ecosystem.",
    buttonTitle: "Invest Now",
    buttonLink: "#",
  },
  {
    img: arbitrum,
    categories: ["DeFi"],
    title: "Arbitrum DeFi",
    description:
      "This index is based on the top projects for on chain liquidity building DeFi apps with a specific focus on gaming and NFT in the Polygon Blockchain Ecosystem.",
    buttonTitle: "Invest Now",
    buttonLink: "#",
  },
  {
    img: fantom,
    categories: ["DeFi"],
    title: "Fantom DeFi",
    description:
      "This index is based on the top projects for on chain liquidity building DeFi apps with a specific focus on gaming and NFT in the Polygon Blockchain Ecosystem.",
    buttonTitle: "Invest Now",
    buttonLink: "#",
  },
];

export default function Indices() {
  return (
    <div className="py-36 bg-white1 relative lg:py-28 md:py-20 sm:py-16">
      <div className="absolute bottom-0 left-0">
        <Image
          loader={ImageLoader}
          src={leftPattern}
          alt="Left"
          className="max-w-full block"
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          loader={ImageLoader}
          src={rightPattern}
          alt="Right"
          className="max-w-full block"
        />
      </div>
      <div className="container relative">
        <div className="text-center">
          <h2 className="text-display-md font-bold text-primary mb-6 sm:text-display-sm">
            EFTI Indices
          </h2>
          <p className="text-lg text-gray-400 mb-20 lg:mb-12 sm:text-base">
            Diversified exposure to the general market, all with just one
            position.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8 lg:grid-cols-3 lg:gap-4 md:grid-cols-2 sm:grid-cols-1">
          {indicesList.map((indices, index) => {
            return (
              <div
                key={index}
                className="bg-white border border-blue-500 rounded-xl p-4 flex flex-col sm:text-center"
              >
                <Image
                  loader={ImageLoader}
                  src={indices.img}
                  alt={indices.title}
                  className="max-w-full block mb-4 w-full"
                  height={120}
                />
                <div className="flex gap-4 mb-6 sm:justify-center">
                  {indices.categories.map((category, index) => {
                    return (
                      <div
                        key={`${index}${index}`}
                        className="bg-blue-500 rounded-3xl px-3 py-[2px] text-sm text-blue-100 font-semibold"
                      >
                        {category}
                      </div>
                    );
                  })}
                </div>
                <h3 className="text-xl font-bold text-primary mb-6">
                  {indices.title}
                </h3>
                <p className="text-sm font-semibold text-gray-400 mb-8 flex-1">
                  {indices.description}
                </p>
                <div className="flex justify-center">
                  <a className="btn-primary mx-auto" href={indices.buttonLink}>
                    {indices.buttonTitle}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
