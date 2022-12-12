const benefits = [
  {
    count: "01",
    title: "Benefit",
    description:
      "ETFI provides complete exposure to the largest and highest performing assets across 3 of the top 10 chains.",
  },
  {
    count: "02",
    title: "Benefit",
    description:
      "Investors have the best of both worlds; a very liquid asset class which doubles as a very robust long-term investment.",
  },
  {
    count: "03",
    title: "Benefit",
    description:
      "Rebalancing is managed 100% on-chain with a mechanism to avoid high price impacts.",
  },
];

export default function Benefits() {
  return (
    <div className="py-36 bg-white1 lg:py-28 md:py-20 sm:py-16">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-10 lg:gap-6 md:grid-cols-1">
          <h2 className="text-display-md font-bold text-primary md:text-center md:mb-10 sm:text-display-sm sm:mb-4">
            The benefits
          </h2>
          <div className="pr-20 flex flex-col gap-44 relative lg:pr-0 md:gap-10">
            <div className="absolute w-[1px] h-[90%] border border-dashed border-blue-500 left-9 top-0 sm:left-6 sm:h-[80%]" />
            {benefits.map((benefit, index) => {
              return (
                <div
                  key={index}
                  className="flex items-start gap-16 relative lg:gap-8 md:gap-5"
                >
                  <div className="bg-white border border-blue-500 p-3 w-[72px] h-[72px] rounded-full sm:w-12 sm:h-12 sm:p-1">
                    <div className="bg-blue-200 py-3 px-1 text-lg text-white w-full h-full rounded-full text-center sm:p-1 sm:text-base sm:flex sm:items-center sm:justify-center">
                      {benefit.count}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-primary mb-6 font-bold lg:mb-4">
                      {benefit.title}
                    </h4>
                    <p className="font-medium text-base leading-6 text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
