"use client";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasReveal";

const Approach = () => {

  return (
    <section
      className="w-full py-20"
      id="approach"
    >
      <h1 className='heading'>
        My {' '}
        <span className='text-purple'>
          approach
        </span>
      </h1>

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Planing & Strategy"
          iconText='Phase 1'
          description="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Develop & Progress Update"
          iconText='Phase 2'
          description="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Develop & Launch"
          iconText='Phase 3'
          description="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  iconText,
  description,
  children,
}: {
  title: string;
  iconText: string;
  description: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const isShown = title === hovered

  const handleHovered = (title: string) => {
    if (title === hovered) setHovered(null)
    else setHovered(title)
  }
  
  const handleCardClick = () => {
    if (window.innerWidth < 768) handleHovered(title)
  }

  return (
    <div
      onMouseEnter={() => setHovered(title)}
      onMouseLeave={() => setHovered(null)} 
      onClick={handleCardClick}
      className="border border-black/[0.2] flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 m-3 relative lg:h-[35rem] h-[15rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {title === hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className={`text-center ${isShown && '-translate-y-4 opacity-0'} transition duration-200 w-full  mx-auto absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`}>
          <AceternityIcon
            order={iconText}
          />
        </div>
        <h2 className={`dark:text-white opacity-0 ${isShown && 'opacity-100 text-white -translate-y-2'} relative z-10 text-black mt-4 font-bold transition duration-200 text-center text-3xl `}>
          {title}
        </h2>
        <h2
          className={`text-sm text-center dark:text-white opacity-0 ${isShown && 'opacity-100 text-white -translate-y-2'} relative z-10 text-black mt-4 font-bold transition duration-200`}
          style={{ color: '#e4ecff' }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({
  order
}: {
  order: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-sm font-medium text-white backdrop-blur-3xl">
        {order}
      </span>
    </button>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};


export default Approach