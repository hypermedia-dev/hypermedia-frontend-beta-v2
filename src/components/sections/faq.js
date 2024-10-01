import Collapsable from "../collapsable.tsx";
import Image from "next/image";
import { faqs } from "@/shared/data";
import imageToast1 from "../../assets/imageToast1.png";
const FAQ = ()=>{
    return(
        <>
               <section className="bg-white h-fit flex w-full justify-center pb-20 sm:pt-10">
        <div>
            <div className="md:mt-20 sm:w-4/5 text-center mx-auto md:my-10">
            
            <h2 className="text-3xl font-bold">Frequently asked questions</h2>
            <p className="py-4">
                Find answers to the most common inquiries and get the information you need.
                </p>
            </div>

            <div className="md:w-4/5 grid grid-col-1 md:grid-cols-2 md:gap-4 mx-auto">
                <div>
                <Collapsable faqs={faqs}/>
                </div>
                <div className="sm:hidden md:block">
                    <Image src={imageToast1.src} alt="faqs" width={1000} height={1000} loading={'lazy'} quality={100}/>
                </div>
            </div>

            </div>
            </section>
        </>
    )
}

export default FAQ;