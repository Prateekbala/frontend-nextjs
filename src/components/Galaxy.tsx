'use client'
import Link from "next/link"
import GalaxyData from "../data/data.json"
import { BackgroundGradient } from "./ui/background-gradient"
import Image from "next/image";

interface Galaxy{
    id: number,
    title: string,
    slug: string,
    description: string,
    isFeatured: boolean,
    image:string,
        
}

function FeaturedGalaxy() {
    const featuredGalaxy = GalaxyData.Galaxy.filter((Galaxy:Galaxy) => Galaxy.isFeatured)

 
  return (
    <div className="py-12 bg-black-900">
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED Galaxy</h2>
                <p className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Explore New Horizon</p>
            </div>
        </div>
        <div className="h-[45rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="mt-5 mx-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredGalaxy.map((Galaxy:Galaxy)=> (
                    <div key={Galaxy.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                            <Image
                                  src={Galaxy.image}
                                  alt="img"
                                  height="300"
                                      width="500"
                                      className="object-contain rounded-3xl"
                                />
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{Galaxy.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{Galaxy.description}</p>
                                <Link href={`/Galaxy/${Galaxy.slug}`} className="mt-0">
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        </div>
        <div className="mt-20 text-center">
            <Link href={"/Galaxy"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
            View All Galaxy
            </Link>
        </div>
    </div>
  )
}

export default FeaturedGalaxy
