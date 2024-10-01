'use client';
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../assets/icons/leftArrow.svg";
import rightArrow from "../assets/icons/rightArrow.svg";
import ProfilePicture from "./profilePicture";

const testimonials = [
    {
        img: '',
        name: 'Isabella Appiah',
        title: 'Graduate | Microsoft Office Suite',
        message: `Hypermedia Ghana is a leading institution in ICT education, known for its practical, hands-on training approach. By combining theoretical knowledge with real-world applications, they ensure students are well-prepared for the tech industry. 
            Their commitment to quality education and innovation makes Hypermedia Ghana an excellent choice for anyone looking to excel in ICT.`
    },
    {
        img:'',
        name:'Isaac Opoku Nelson',
        title:'Student | Software Development',
        message:` Hypermedia is the premier IT training institution in Ghana, renowned for its cutting-edge technology, 
            comprehensive training programs, and expert instructors. They offer a robust platform for developing the skills and knowledge needed to excel in the IT industry, 
            making it the best choice for anyone looking to advance their career in this field.`
    },
    {
        img:'',
        name: 'Praise Kwawu',
        title:'Graduate | Software Development',
        message: ` I am excited to share my experience at Hypermedia. The teachers here are not only highly knowledgeable but also incredibly friendly and approachable,
             creating a welcoming and supportive learning environment. Their program is meticulously designed to cater to beginners and amateurs who are looking to break into the field of IT and programming. The curriculum is perfectly structured, making complex concepts accessible and engaging. 
            If you're considering a career in IT, I highly recommend Hypermedia for its excellent faculty and beginner-friendly programs`
    },
    {
        img: '',
        name: 'Fiifi Appiah',
        title:'Instructor & Academic Head',
        message:`As an instructor, Hypermedia provides me with essential resources to enhance my tutoring experience. With computers provided for all students, 
            I can ensure that no student is left behind and that everyone can fully concentrate in class. Hypermedia is the best.`        
    }
];


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width:'80px !important', right:'10%' }}
      onClick={onClick}
    >
      <Image src={rightArrow.src} alt="Next" width={1000} height={1000}/>
      </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width:'80px !important', left:'10%', position:'absolute', zIndex: '100'}}
      onClick={onClick}
    >
      <Image src={leftArrow.src} alt="Previous" width={1000} height={1000}/>
      </div>
  );
}



function WhatStudentsSayCarousel() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    arrows: true,
  };
  return (
    <div className="slider-container md:-translate-y-40">
      <Slider {...settings}>
       {
        testimonials.map(({img, name, title, message})=>(
            <div className="w-4/5" key={name}>
              <div className="md:!w-[801px] md:h-[452px] sm:h-max-fit !mx-auto border bg-white p-20 text-center shadow-[rgba(0,_0,_0,_0.16)_0px_1px_4px] text-[#344054]">
                <div className="flex justify-center">
            <ProfilePicture src={img.src} name={name} width={50} height={50} className={'mx-auto'}/>
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
