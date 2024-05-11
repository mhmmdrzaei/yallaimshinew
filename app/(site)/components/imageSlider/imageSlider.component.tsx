"use client"
import { Settings } from '@/sanity/types/Settings';
import { useState, useEffect } from 'react';
import Image from 'next/image';

type HeaderProps = {
  desktopImages: Settings[];
  mobileImages: Settings[];
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
    }, 500); // Change image every 0.5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isMobile, desktopImages.length, mobileImages.length]);

  return (
    <div>
      {isMobile && mobileImages.length > 0 && (
        <Image
          src={mobileImages[currentIndex].heroImgUrl}
          alt={`Mobile Image ${currentIndex}`}
          width={400}
          height={300}
        />
      )}
      {!isMobile && desktopImages.length > 0 && (
        <Image
          src={desktopImages[currentIndex].heroImgUrl}
          alt={`Desktop Image ${currentIndex}`}
          width={800}
          height={600}
        />
      )}
    </div>
  );
};

export default ImageSlider;
