import Link from "next/link";
import { ImageLoader } from "../utils/image-loader";
import telegram from "../assets/images/telegram.svg";
import discord from "../assets/images/discord.svg";
import twitter from "../assets/images/twitter.svg";
import github from "../assets/images/github.svg";
import logo from "../assets/images/logo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <header className="py-5 bg-blue-500 md:py-3">
      <div className="container">
        <div className="flex items-center justify-between md:flex-wrap md:gap-4 md:justify-center">
          <div className="flex flex-col gap-2 sm:items-center">
            <Image
              loader={ImageLoader}
              src={logo}
              alt="Logo"
              width={110}
              height={34}
            />
            <p className="text-xs font-semibold text-gray-300">
              © 2022 Etfi. All rights reserved.
            </p>
          </div>
          <ul className="flex items-center justify-center gap-6">
            <li>
              <Link
                href="/"
                className="text-xs font-semibold text-gray-300 transition-all hover:opacity-80"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-xs font-semibold text-gray-300 transition-all hover:opacity-80"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-xs font-semibold text-gray-300 transition-all hover:opacity-80"
              >
                Docs
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-6">
            <a
              href="/"
              target="_blank"
              className="transition-all hover:opacity-80"
            >
              <Image
                loader={ImageLoader}
                src={telegram}
                alt="Telegram"
                className="max-w-full block"
              />
            </a>
            <a
              href="/"
              target="_blank"
              className="transition-all hover:opacity-80"
            >
              <Image
                loader={ImageLoader}
                src={discord}
                alt="Discord"
                className="max-w-full block"
              />
            </a>
            <a
              href="/"
              target="_blank"
              className="transition-all hover:opacity-80"
            >
              <Image
                loader={ImageLoader}
                src={twitter}
                alt="Twitter"
                className="max-w-full block"
              />
            </a>
            <a
              href="/"
              target="_blank"
              className="transition-all hover:opacity-80"
            >
              <Image
                loader={ImageLoader}
                src={github}
                alt="Github"
                className="max-w-full block"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
