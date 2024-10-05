'use client';
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../assets/icons/leftArrow.svg";
import rightArrow from "../assets/icons/rightArrow.svg";
import ProfilePicture from "./profilePicture";



export interface ArrowTypes{
  className: string, 
  style: React.CSSProperties, 
  onClick: (param:Event)=>void
}

const NextArrow:React.FC<ArrowTypes> = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width:'80px !important', right:'10%' }}
      onClick={()=>onClick}
    >
      <Image src={rightArrow.src} alt="Next" width={1000} height={1000}/>
      </div>
  );
}

const PrevArrow:React.FC<ArrowTypes> = ({className, style, onClick })=> {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width:'80px !important', left:'10%', position:'absolute', zIndex: '100'}}
      onClick={()=>onClick}
    >
      <Image src={leftArrow.src} alt="Previous" width={1000} height={1000}/>
      </div>
  );
}

const handleClick = (e:Event) =>{
  return e.target;
}

export interface TestimonialType{
  id:number, 
  img:string, 
  name: string, 
  title:string, 
  message: string
}

const WhatStudentsSayCarousel: React.FC<{testimonials:TestimonialType[]}>=({testimonials})=>{
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <NextArrow className={''} style={{ cursor: 'pointer', color: 'blue' }} onClick={(e)=>handleClick(e)}/>,
    prevArrow: <PrevArrow className={''} style={{ cursor: 'pointer', color: 'blue' }} onClick={(e)=>handleClick(e)}/>,
    arrows: true,
  };
  return (
    <div className="slider-container md:-translate-y-40">
      <Slider {...settings}>
       {
        testimonials.map(({id, img, name, title, message})=>(
            <div className="w-4/5" key={id}>
              <div className="md:!w-[801px] md:h-[452px] sm:h-max-fit !mx-auto border bg-white p-20 text-center shadow-[rgba(0,_0,_0,_0.16)_0px_1px_4px] text-[#344054]">
                <div className="flex justify-center">
            <ProfilePicture src={img} name={name} width={50} height={50} className={'mx-auto'}/>
                </div>
            <h3 className="font-bold">{name}</h3>
            <h4 className="text-xs text-[#344054]">{title}</h4>
            <p className="pt-10">
                {message}
            </p>
            </div>
          </div>
        ))
       }
    

       
      </Slider>
    </div>
  );
}

export default WhatStudentsSayCarousel;
