import ListRender from "../listRender";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import whocanapply from "../../assets/whocanapply.svg";
import Loading from "../loading";

const whoApply = [
    {
        title: 'Working Professionals seeking to improve IT Skills',
        desc: 'Working professionals seeking to improve their IT skills can choose between evening or weekend sessions.'
    },
    {
        title:'High School Graduates',
        desc: 'High school graduates can opt for the regular track or apply for scholarships.'
    },
    {
        title:'Students Looking for Vacation/Weekend Classes',
        desc:'Students seeking vacation or weekend classes can choose between the regular track or weekend sessions.'
    },
    {
        title:'Junior IT Professionals Seeking Mentorship',
        desc:'Junior tech professionals seeking mentorship can opt for the Career Accelerator or the upcoming Freelancer program.'
    },
    {
        title:'Company Looking to Up-skill its Employees',
        desc:'Companies looking to up-skill their employees can choose from Corporate Up-skilling Workshops or Scholarships.'
    },
    {
        title: 'Local Schools and Institutions Looking for an industry Partner',
        desc: 'Local schools and institutions seeking an industry partner can opt for Corporate Up-skilling Workshops or bespoke partnership.'
    }
]
const WhoCanApply = () =>{
    return(
        <>
           <section className="bg-[#F2F4F7] h-fit flex w-full justify-center pb-20">
        <div>
            <div className="md:mt-40 md:w-[55%] sm:w-4/5 text-center mx-auto md:my-10">
            
            <h2 className="text-4xl font-bold sm:pb-4">Who can apply to Hypermedia?</h2>
            <p className="my-6 sm:hidden">Whether you&apos;re a recent graduate, a career changer, or someone looking to enhance your tech skills, 
                Hypermedia welcomes individuals who are passionate about advancing their careers in technology.
                </p>
            
            </div>
            
                <div className="w-4/5 grid grid-col-1 md:grid-cols-2 md:gap-4 mx-auto">
                    <div className="sm:hidden md:block">
                    <Suspense fallback={<Loading />}>
                        <Image src={whocanapply.src} width={800} height={800} loading={'lazy'} alt={'Who can apply'}/>
                    </Suspense>
                    </div>
                    <div>
                        <ListRender data={whoApply}/>
                        <div className="w-full flex justify-center">
                        <Link href={''}><button className="primary-btn sm:ml-0 sm:my-4 px-5 !w-auto">Apply now</button></Link>
                        </div>
                    </div>
                </div>
                </div>
        </section>
        </>
    )
}

export default WhoCanApply;