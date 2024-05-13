"use client"
import { HeroImage, Settings } from '@/sanity/types/Settings';
import { useState, useEffect } from 'react';
import Image from 'next/image';
export const dynamic = 'force-dynamic'

type HeaderProps = {
  desktopImages: HeroImage[];
  mobileImages: HeroImage[];
};

const ImageSlider = ({ desktopImages, mobileImages }: HeaderProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (isMobile ? mobileImages.length : desktopImages.length));
    }, 750); 

    return () => clearInterval(interval);
  }, [currentIndex, isMobile, desktopImages.length, mobileImages.length]);

  return (
    <>
        {isMobile && mobileImages.length > 0 && (
          <Image
            src={mobileImages[currentIndex].heroImgUrl}
            alt={`yalla imshi Studio project`}
            width={1000}
            height={1000}
            className="fadeTransition"
          />
        )}
        {!isMobile && desktopImages.length > 0 && (
          <Image
            src={desktopImages[currentIndex].heroImgUrl}
            alt={`yalla imshi Studio`}
            width={2000}
            height={2000}
            className="fadeTransition"
          />
        )}
    </>
  );
};

export default ImageSlider;

