import Link from "next/link";
import CourseCard from "./w3Slider/courseCard";
import {courses} from "@/shared/api";
import SkillsIcons from "./skillIcons";

const CourseCatalogue = () =>{
    return(
        <>
        <section className="bg-[#F2F4F7] h-fit p-10 flex w-full justify-center">
            <div>
            <div className="md:mt-40 md:w-[55%] text-center mx-auto md:my-10">
            
            <h2 className="text-4xl font-bold">Discover our range of courses.</h2>
            <p className="my-6">Discover a diverse range of courses designed to enhance your skills and knowledge. 
                From foundational topics to advanced specialties, find the perfect fit for your learning journey.
                </p>
            
                <Link href={''}><button className="primary-btn sm:ml-0 sm:my-4 px-5 !w-auto">View all courses</button></Link>
            </div>
            
                <div className="md:w-4/5 grid grid-col-1 md:grid-cols-4 md:gap-4 mx-auto">
               
               {
                   courses && courses.slice(0, 4).map((item)=>(
                       <CourseCard data={item} key={item.id}/>
                   ))
               }
                </div>
              
              <div className="md:mt-40 md:w-[55%] text-center mx-auto my-10">
              <h2 className="text-4xl font-bold">Tools & Frameworks we work with</h2>
                <p className="my-6">
                    Explore the diverse set of tools and technologies that empower our work. 
                    These essential resources help us deliver high-quality solutions and drive innovation in every project. 
                    From cutting-edge software to reliable frameworks, discover how our tools support our commitment to excellence and efficiency.
                </p>
                <SkillsIcons/>
              </div>
                </div>
        </section>
        </>
    )
}

export default CourseCatalogue;