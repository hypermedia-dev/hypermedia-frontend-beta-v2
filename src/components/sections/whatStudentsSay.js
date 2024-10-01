import WhatStudentsSayCarousel from "../whatStudentsSayCarousel";
const WhatStudentsSay = () =>{
    return(
        <>
            <section className="bg-stats-gradient w-full md:h-[420px] p-20 overflow-hidden">
                <div className="md:w-2/5 mx-auto text-center">
                    <h2 className="text-3xl font-bold">What our students say about us</h2>
                    <p className="py-10">Hear firsthand from our graduates and current students about their transformative experiences and successes.</p>
                </div>
            </section>
            <section className="bg-[#F2F4F7]">
                <WhatStudentsSayCarousel/>
            </section>
        </>
    )
}

export default WhatStudentsSay;