"use client";

import Image from "@/node_modules/next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
  const handleScroll = () => {

  }
    
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
            Drive with style and convenience!
            </h1>
            <p className="hero__subtitle">
                Experience the joy of the journey with our curated car selection.
            </p>

            <CustomButton 
                title="Discover Vehicles"
                containerStyles="bg-orange-500 text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero"
                fill className="object-contain rounded-lg" />
            </div>
            <div className="hero__image-overlay">
            </div>
        </div>
    </div>
  )
}

export default Hero;
