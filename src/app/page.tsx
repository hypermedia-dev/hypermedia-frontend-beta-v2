import CourseCatalogue from "../components/courseCatalogue";
import Navbar from "../components/navbar";
import W3Slider from "../components/w3Slider/w3Slider";
import Stats from "../components/sections/stats";
import WhyChooseUs from "../components/sections/whyChooseUs";
import Team from "../components/sections/team";
import WhatStudentsSay from "../components/sections/whatStudentsSay";
import WhoCanApply from "../components/sections/whoCanApplySection";
import Billboard from "../components/sections/billboard";
import FAQ from "../components/sections/faq";
import WhereToFindUs from "../components/sections/whereToFindUs";
import Footer from "../components/sections/footer";


const V2Home = () =>{
    return(
        <>
        <Navbar/>
        <W3Slider/>
        <CourseCatalogue/> 
        <Stats/>
        <Team/>
        <WhyChooseUs/>
        <WhatStudentsSay/> 
        <WhoCanApply/>
        <Billboard/>
        <FAQ/>
        <WhereToFindUs/>
        <Footer/>
        </>
    )
}

export default V2Home;