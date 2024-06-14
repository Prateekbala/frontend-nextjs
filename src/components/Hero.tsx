"use client";
import React from "react";
import Link from "next/link"
import { Vortex } from "./ui/vortex";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/moving-border";
function Hero() {
    const words = ["better", "beautiful", "modern"];
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[40rem] overflow-hidden">
    <Vortex
      backgroundColor="black"
      className="flex items-center flex-col justify-center px-1 md:px-10 py-4 w-full h-full"
    >
      {/* <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        The hell is this?
      </h2>
      <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
        burned and you&apos;ll have a scar.
      </p>
      */}
     <div className="h-[40rem] font-bold flex justify-center items-center px-4">
     <div className="text-4xl font-bold md:text-6xl mx-auto text-neutral-600 dark:text-neutral-400">
      Build <FlipWords words={words} /> <br />
      <span className="block text-2xl mt-2 ml-5 ">Hi! I'm Prateek, and I’m here to make a difference.</span>
    </div>
      </div>
      <div className="mt-4">
                <Link href={"/courses"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore New
                    </Button>
                </Link>
            </div>

    </Vortex>
  </div>
  )
}

export default Hero
