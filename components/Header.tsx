import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);

  const menuOpen = () => {
    setActive(true);
  };

  const menuClose = () => {
    setActive(false);
  };

  return (
    <header className="py-3 border-b border-blue-500 sticky top-0 left-0 bg-white z-20">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-blue-300 text-md font-bold">
            ETFI
          </Link>
          <ul className="flex items-center justify-center gap-20 md:hidden">
            <li>
              <Link
                href="/"
                className="text-sm text-primary font-semibold transition-all hover:text-blue-200"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-sm text-primary font-semibold transition-all hover:text-blue-200"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-sm text-primary font-semibold transition-all hover:text-blue-200"
              >
                How it works
              </Link>
            </li>
          </ul>
          <button type="button" className="btn md:hidden">
            Go To Dapp
          </button>
          <div className="hidden md:block relative">
            <div className="w-6 h-5 relative cursor-pointer" onClick={menuOpen}>
              <div className="w-full h-[2px] rounded-sm bg-blue-100 absolute top-0 left-0" />
              <div className="w-11/12 h-[2px] rounded-sm bg-blue-100 absolute top-1/2 -translate-y-1/2 right-0" />
              <div className="w-full h-[2px] rounded-sm bg-blue-100 absolute bottom-0 left-0" />
            </div>
            <div
              className={`fixed top-0 left-0 w-full h-screen py-12 px-5 bg-blue-500 transition-all duration-500 ${
                active
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0"
              }`}
            >
              <div
                className="w-6 h-6 absolute top-4 right-5 cursor-pointer"
                onClick={menuClose}
              >
                <div className="w-full h-[2px] rounded-sm bg-blue-100 absolute top-1/2 -translate-y-1/2 left-0 -rotate-45" />
                <div className="w-full h-[2px] rounded-sm bg-blue-100 absolute top-1/2 -translate-y-1/2 left-0 rotate-45" />
              </div>
              <ul className="flex flex-col gap-2 mb-10">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-primary font-semibold transition-all hover:text-blue-200"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-primary font-semibold transition-all hover:text-blue-200"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-primary font-semibold transition-all hover:text-blue-200"
                  >
                    How it works
                  </Link>
                </li>
              </ul>
              <div className="flex justify-center">
                <button type="button" className="btn">
                  Go To Dapp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
