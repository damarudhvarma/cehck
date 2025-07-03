/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-5xl lg:max-w-[80vw] flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="rounded-full p-[4px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-xl">
              <img
                src="/profile.jpeg"
                alt="Tiruvayipati Praneeth's Profile"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start md:justify-center gap-6">
            <p className="uppercase tracking-[0.2em] text-sm md:text-base text-center md:text-left text-blue-100 font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Go Developer & Data Analytics Specialist
            </p>

            <div className="space-y-4">
              <TextGenerateEffect
                words="Building High-Performance Systems with Data-Driven Intelligence"
                className="text-center md:text-left text-3xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
              />

              <p className="text-center md:text-left text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                Hi! I&apos;m Tiruvayipati Praneeth, specializing in Go microservices development and advanced data analytics for scalable, intelligent systems
              </p>
            </div>

            <div className="mt-2">
              <a href="#about">
                <MagicButton
                  title="View My Work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
