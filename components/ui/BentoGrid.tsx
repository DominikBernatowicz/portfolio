"use client"

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import React, { useEffect, useState } from "react";
import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline, IoDownloadOutline, IoReaderOutline } from "react-icons/io5";
import { techStack } from "@/data";
import { Meteors } from "./Meteors";
import { LinkPreview } from "./LinkPreview";

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

type BentoGridItemProps = {
  id?: number,
  className?: string,
  title?: string | React.ReactNode,
  titleClassName?: string,
  description?: string | React.ReactNode,
  img?: string,
  imgClassName?: string,
  spareImg?: string
}

export const BentoGridItem = ({ id, className, title, titleClassName, description, img, imgClassName, spareImg }: BentoGridItemProps) => {

  const [opened, setOpened] = useState<boolean>(false)
  const [animationKey, setAnimationKey] = useState<number>(0)

  const handleOpenCV = () => {
    const pdfUrl = '/Dominik_Bernatowicz_CV.pdf'
    window.open(pdfUrl, '_blank')

    setOpened(true)
    setInterval(() => {
      setOpened(false)
      setAnimationKey(animationKey + 1)
    }, 5000)
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(0,20,35)',
        backgroundColor: 'linear-gradient(90deg, rgba(0,20,35,1) 0%, rgba(2,26,78,1) 86%, rgba(10,37,59,1) 100%)'
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className='w-full h-full absolute'>
          {img &&
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          }
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg &&
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover object-center w-full h-full'}
            />
          }
        </div>
        {id === 6 &&
          <BackgroundGradientAnimation>
            <div className="flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        }

        <div className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}>
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold`}>
            {title}
          </div>

          {id === 2 && <>
            <GlobeDemo />
            <Meteors number={20} />
          </>}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 opacity-70">
              <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
                {techStack.leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-2xs lg:text-base opacity-70 rounded-lg text-center bg-[#151a47]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#151a47]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
                <span className="py-4 px-3 rounded-lg text-center bg-[#151a47]"></span>
                {techStack.rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-2xs lg:text-base opacity-70 rounded-lg text-center bg-[#151a47]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 &&
            <div className="mt-5 relative">
                <MagicButton
                  title={opened ? 'I appreciate' : 'Check me'}
                  icon={<IoReaderOutline />}
                  position="left"
                  otherClasses="bg-[#161a31]"
                  handleClick={handleOpenCV}
                />
            </div>
          }
        </div>
      </div>
    </div>
  );
};
