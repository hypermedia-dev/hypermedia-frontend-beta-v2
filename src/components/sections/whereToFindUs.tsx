import Image from "next/image";
import hypermediaMap from "../../assets/HypermediaMaps.svg";
import CallToAction from "./callToAction";
import location from "../../assets/location.jpg"

const WhereToFindUs = () =>{
    return(
        <>
    <section className="bg-[#F2F4F7] h-fit flex w-full justify-center">
        <div className="w-full">
            <Image className="!mx-auto md:mt-20 sm:mb-10 shadow-lg" src={location.src} width={1000} height={1000} alt="location" priority/>
    <div className="md:mt-40 text-center mx-auto md:mb-10 sm:w-4/5">
            
            <h2 className="text-4xl font-bold">Where to Find Us</h2>
            <p className="my-6">
            Discover our convenient location and visit us to learn more about our offerings.
                </p>
            </div>
            <div className="relative w-full flex justify-center">
            <Image src={hypermediaMap} alt={'hypermedia location map'} quality={100} priority width={1000} height={1000}/>
            </div>
            <CallToAction/>
            </div>
    </section>
        </>
    )
}

export default WhereToFindUs;