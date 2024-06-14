"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
 
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error maiores molestias consequatur architecto saepe labore. Ratione quis quidem aut!",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati beatae iusto tempore itaque, vel reiciendis numquam autem vitae?",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src=""
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
     " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores accusantium hic repellendus autem minus rem dolorem tempore blanditiis maiores esse iste, magnam iure perferendis quis. Corporis cupiditate facere placeat eveniet!",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
function Third() {
  return (
    <div className="p-10">
    <StickyScroll content={content} />
  </div>
  )
}

export default Third
