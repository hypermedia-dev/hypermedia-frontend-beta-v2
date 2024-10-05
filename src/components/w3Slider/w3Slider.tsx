'use client';
import { useState, useEffect} from 'react';
import Image from 'next/image';
import slide_1 from '../../assets/1.jpg';
import slide_2 from '../../assets/2.jpg';
import slide_3 from '../../assets/3.jpg';
import FloatingSearchComponent from '../floatingSearch';


const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (n: number) => setSlideIndex(n);

  return (
    <section>
      <div className="relative mx-auto max-w-full">
        {/* Slide container */}
        <div className="relative md:h-[75vh] sm:h-[40vh] lg:h-[75vh] overflow-hidden">
          {/* Slide 1 */}
          <div
            className={`absolute w-full h-[85vh] sm:h-[75vh] md:h-[65vh] lg:h-[85vh] transition-opacity duration-1000 ease-in-out ${
              slideIndex === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide_1.src}
              alt="Slide 1"
              quality={100}
              priority
              fill
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-10 sm:translate-x-5 md:translate-x-20 bg-opacity-75 p-4 text-white w-full sm:w-[80%] md:w-[65%] lg:w-[45%]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                Elevate Your Tech Skills to <span className="text-primary">New Heights</span>
              </h1>
              <p className="sm:hidden md:block my-6 text-sm sm:text-base md:text-lg lg:text-xl">
                Unlock your potential with our cutting-edge tech courses designed to enhance your skills and propel your career forward.
              </p>
              <button className="primary-btn px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl !w-auto mt-2">
                Register Now
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className={`absolute w-full h-[85vh] sm:h-[75vh] md:h-[65vh] lg:h-[85vh] transition-opacity duration-1000 ease-in-out ${
              slideIndex === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide_2.src}
              alt="slide 2"
              fill
              quality={100}
              priority
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-10 sm:translate-x-5 md:translate-x-20 bg-opacity-75 p-4 text-white w-full sm:w-[80%] md:w-[65%] lg:w-[45%]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                Elevate Your Tech Skills to <span className="text-primary">New Heights</span>
              </h1>
              <p className="sm:hidden md:block my-6 text-sm sm:text-base md:text-lg lg:text-xl">
                Unlock your potential with our cutting-edge tech courses.
              </p>
              <button className="primary-btn px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl !w-auto mt-2">
                Register Now
              </button>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className={`absolute w-full h-[85vh] sm:h-[80vh] md:h-[65vh] lg:h-[85vh] transition-opacity duration-1000 ease-in-out ${
              slideIndex === 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide_3.src}
              alt="Slide 3"
              fill
              quality={100}
              priority
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-10 sm:translate-x-5 md:translate-x-20 bg-opacity-75 p-4 text-white w-full sm:w-[80%] md:w-[65%] lg:w-[45%]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                Elevate Your Tech Skills to <span className="text-primary">New Heights</span>
              </h1>
              <p className="sm:hidden md:block my-6 text-sm sm:text-base md:text-lg lg:text-xl">
                Master the technologies shaping the future.
              </p>
              <button className="primary-btn px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl !w-auto">
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Dots for navigation */}
        <div className="absolute md:bottom-24 sm:bottom-40 w-full text-center">
          <span
            className={`inline-block h-[13px] w-[13px] mx-[2px] bg-gray-400 rounded-full cursor-pointer ${
              slideIndex === 0 ? "bg-white" : ""
            }`}
            onClick={() => handleDotClick(0)}
          ></span>
          <span
            className={`inline-block h-[13px] w-[13px] mx-[2px] bg-gray-400 rounded-full cursor-pointer ${
              slideIndex === 1 ? "bg-white" : ""
            }`}
            onClick={() => handleDotClick(1)}
          ></span>
          <span
            className={`inline-block h-[13px] w-[13px] mx-[2px] bg-gray-400 rounded-full cursor-pointer ${
              slideIndex === 2 ? "bg-white" : ""
            }`}
            onClick={() => handleDotClick(2)}
          ></span>
        </div>
        <FloatingSearchComponent />
      </div>
    </section>
  );
};

export default Slideshow;
