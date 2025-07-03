/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Looking for a <span className="text-purple">Data Analytics</span> expert for your next project?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center max-w-2xl">
          Let&apos;s collaborate to transform your data into actionable insights. Whether it&apos;s ETL pipeline optimization, 
          predictive analytics, or business intelligence solutions, I&apos;m here to help.
        </p>
        <a href="mailto:pranneth.32@gmail.com">
          <MagicButton
            title="Connect with me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          © 2024 | Crafted with passion by Tiruvayipati Praneeth | Data Analytics Portfolio
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple/50 transition-colors duration-200"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
