import Link from "next/link";
    const CallToAction = () =>{
    return(
        <>
        <div className="md:w-3/5 bg-stats-gradient p-20 mx-auto translate-y-32">
            <div className="block md:flex">
                <div className="md:w-4/5">
                    <h3 className="text-4xl font-bold">Ready to begin?</h3>
                    <p className="text-2xl pt-4">Acquire the skills needed for today&apos;s top jobs.</p>
                </div>
                <div className="md:w-1/5">
                <Link href={''}><button className="primary-btn sm:ml-0 sm:my-4 px-5 !w-auto text-sm">Explore programmes</button></Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default CallToAction;