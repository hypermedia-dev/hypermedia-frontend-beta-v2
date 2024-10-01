import Image from "next/image";
import imagMap1 from "../../assets/imageMap1.png";
import StatisticsCards from "../statCard";
import {courses} from "@/shared/api";


const stats = [
    {
        metric: 'Students Trained',
        stat: 500,
        unit: '+'
    },
    {
        metric: 'Courses available',
        stat: courses.length,
        unit: '+'
    },
    {
        metric: 'Student Satisfaction',
        stat: 95,
        unit: '%'
    },
    {
        metric: 'Training Hours',
        stat: 44,
        unit: 'K+'
    }

]

const StatsSectionComponent = () =>{
    return(
        <>
        <section className="h-max-fit bg-stats-gradient">
            <div className="sm:w-full md:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-4 md:p-20 sm:p-10 mx-auto items-center">
            <div>
                <div className="md:w-4/6">
                <h2 className="text-3xl">We’ve Assisted Hundreds of Individuals in Launching Fulfilling Career Journeys.</h2>
                <p className="py-6">Empowering individuals with the skills and opportunities to achieve their career goals.</p>
                <StatisticsCards stats={stats}/>
                </div>
                    
            </div>
            <div class="flex justify-center items-center sm:hidden md:block">
            <Image src={imagMap1.src} alt={'image map'} loading={'lazy'} width={600} height={500}/>
            </div>
            </div>
            
        </section>
        </>
    )
}

export default StatsSectionComponent;