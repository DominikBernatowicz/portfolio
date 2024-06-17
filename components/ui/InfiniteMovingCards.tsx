"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import { Button } from "./MovingBorder";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    title: string;
    desc: string;
    thumbnail: string
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {/* {items.map((item, idx) => (
          <li
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: 'rgb(0,20,35)',
              backgroundColor: 'linear-gradient(90deg, rgba(0,20,35,1) 0%, rgba(2,26,78,1) 86%, rgba(10,37,59,1) 100%)'
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="me-3">
                  <img src="/profile.svg" alt="profile" />
                </div>
                <span className="flex flex-col">
                  <span className=" text-xl leading-[1.2] text-white font-bold">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.2] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))} */}
        {items.map(({ id, title, desc, thumbnail }) => (
          <Button
            key={id}
            duration={Math.floor(Math.random() * 10000) + 5000}
            borderRadius='1.75rem'
            className='flex-1 text-white dark:border-slate-800'
          >
            <div className='flex md:flex-row flex-col items-center justify-center p-3 py6 md:p-5 lg:p-10 gap-2'>
              <img
                src={thumbnail}
                alt={title}
                className='lg:w-32 md:w-20 w-16'
              />
              <div className='lh:ms-5'>
                <h1 className='md:text-start text-center text-xl md:text-2xl font-bold'>
                  {title}
                </h1>
                <p className='md:text-start text-center text-white-100 mt-3 font-semibold'>
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </ul>
    </div>
  );
};
