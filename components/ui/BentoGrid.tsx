/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";


import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [phoneNumberCopied, setPhoneNumberCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const defaultOptions = {
    loop: copied || phoneNumberCopied,
    autoplay: copied || phoneNumberCopied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = async () => {
    if (!mounted || typeof navigator === 'undefined') return;
    
    const text = "pranneth.32@gmail.com";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handlePhoneCopy = async () => {
    if (!mounted || typeof navigator === 'undefined') return;
    
    const phoneNumber = "+1 (469) 471-6425";
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setPhoneNumberCopied(true);
      setTimeout(() => setPhoneNumberCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Don't render copy buttons until mounted
  if (!mounted && (id === 6 || id === 7)) {
    return (
      <div
        className={cn(
          "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col",
          className
        )}
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex-grow">
            <div className="font-sans font-extralight text-sm text-[#C1C2D3] mb-2">
              {description}
            </div>
            <div className="font-sans text-2xl font-bold text-white mb-6">
              {title}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 || id === 7 ? "flex flex-col justify-between h-full" : ""} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative flex flex-col h-full"
          )}
        >
          {(id === 6 || id === 7) ? (
            <div className="flex flex-col h-full p-6">
              <div className="flex-grow">
                <div className="font-sans font-extralight text-sm text-[#C1C2D3] mb-2">
                  {description}
                </div>
                <div className="font-sans text-2xl font-bold text-white mb-6">
                  {title}
                </div>
              </div>
              
              <div className="relative">
                <div className={`absolute -bottom-5 right-0 ${id === 6 ? copied : phoneNumberCopied ? "block" : "block"}`}>
                  <Lottie options={defaultOptions} height={150} width={300} />
                </div>
                <MagicButton
                  title={id === 6 ? 
                    (copied ? "Email is Copied!" : "Copy my email address") :
                    (phoneNumberCopied ? "Phone Number Copied!" : "Copy my phone number")
                  }
                  icon={id === 6 ? <IoCopyOutline size={16} /> : <FaPhoneAlt size={16} />}
                  position="left"
                  handleClick={id === 6 ? handleCopy : handlePhoneCopy}
                  otherClasses="!bg-[#161A31] !text-sm !h-11 hover:!bg-[#1c2240] transition-colors"
                />
              </div>
            </div>
          ) : (
            <div className="p-5 lg:p-8">
              <div className="font-sans font-extralight md:max-w-32 text-xs lg:text-sm text-[#C1C2D3] z-10">
                {description}
              </div>
              <div className="font-sans text-base lg:text-xl max-w-96 font-bold z-10">
                {title}
              </div>

              {/* for the github 3d globe */}
              {id === 2 && <GridGlobe />}

              {/* Tech stack list div */}
              {id === 3 && (
                <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                  {/* tech stack lists */}
                  <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                    {leftLists.map((item, i) => (
                      <span
                        key={i}
                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                        lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                      >
                        {item}
                      </span>
                    ))}
                    <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                    <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                    {rightLists.map((item, i) => (
                      <span
                        key={i}
                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                        lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
