import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="flex items-center">
            <img src="/assets/logo.png" className="h-8 mr-2" alt="BITSA Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              BITSA
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              CHECKOUT
            </h2>
            <ul className="text-gray-600">
              <li className="mb-4">
                <a href="/events" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline">
                  Our Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Follow us
            </h2>
            <ul className="text-gray-600 flex flex-col justify-center items-start">
              <li className="mb-1">
                <Link
                  href="https://www.youtube.com/@bitsaclub"
                  target={"_blank"}
                  className="hover:underline "
                >
                  Youtube
                </Link>
              </li>
              <li className="mb-1">
                <a
                  href="https://www.linkedin.com/in/bitsa-club-494159255/"
                  target={"_blank"}
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/BitsaClub"
                  target={"_blank"}
                  className="hover:underline"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline">
            BITSA
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
