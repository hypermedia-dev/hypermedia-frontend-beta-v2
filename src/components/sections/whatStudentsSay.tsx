import WhatStudentsSayCarousel from "../whatStudentsSayCarousel";
const testimonials = [
    {
        id:1,
        img: '',
        name: 'Isabella Appiah',
        title: 'Graduate | Microsoft Office Suite',
        message: `Hypermedia Ghana is a leading institution in ICT education, known for its practical, hands-on training approach. By combining theoretical knowledge with real-world applications, they ensure students are well-prepared for the tech industry. 
            Their commitment to quality education and innovation makes Hypermedia Ghana an excellent choice for anyone looking to excel in ICT.`
    },
    {
        id:2,
        img:'',
        name:'Isaac Opoku Nelson',
        title:'Student | Software Development',
        message:` Hypermedia is the premier IT training institution in Ghana, renowned for its cutting-edge technology, 
            comprehensive training programs, and expert instructors. They offer a robust platform for developing the skills and knowledge needed to excel in the IT industry, 
            making it the best choice for anyone looking to advance their career in this field.`
    },
    {
        id:3,
        img:'',
        name: 'Praise Kwawu',
        title:'Graduate | Software Development',
        message: ` I am excited to share my experience at Hypermedia. The teachers here are not only highly knowledgeable but also incredibly friendly and approachable,
             creating a welcoming and supportive learning environment. Their program is meticulously designed to cater to beginners and amateurs who are looking to break into the field of IT and programming. The curriculum is perfectly structured, making complex concepts accessible and engaging. 
            If you're considering a career in IT, I highly recommend Hypermedia for its excellent faculty and beginner-friendly programs`
    },
    {
        id:4,
        img: '',
        name: 'Fiifi Appiah',
        title:'Instructor & Academic Head',
        message:`As an instructor, Hypermedia provides me with essential resources to enhance my tutoring experience. With computers provided for all students, 
            I can ensure that no student is left behind and that everyone can fully concentrate in class. Hypermedia is the best.`        
    }
];
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
                <WhatStudentsSayCarousel testimonials={testimonials}/>
            </section>
        </>
    )
}

export default WhatStudentsSay;