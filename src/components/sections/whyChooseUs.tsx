import Image from "next/image";
import lesson from "../../assets/icons/Lesson.svg";
import industry from "../../assets/icons/Industrial.svg";
import profile from "../../assets/icons/Profile.svg";
import global from "../../assets/icons/global.svg";
import goal from "../../assets/icons/goal.svg";
const whyChooseUs = [
    {
        icon: industry.src,
        title: 'Comprehensive Curriculum',
        desc: 'We offer a well-structured curriculum that balances both theoretical and practical aspects of IT. Our hands-on training ensures you gain real-world skills that are directly applicable in the tech industry.'
    },
    {
        icon: global.src,
        title:'Supportive Learning Environment',
        desc:'At Hypermedia, we foster a welcoming atmosphere. Our friendly and approachable instructors are always ready to assist, making sure you feel supported throughout your learning journey.'
    },
    {
        icon: profile.src,
        title:'Professional Instructors',
        desc:'Our team of highly knowledgeable, supportive, and passionate instructors ensures that you receive top-tier IT education. Their dedication to teaching creates an environment where every student can thrive.'
    },
    {
        icon: lesson.src,
        title:'Learning Resources',
        desc:'With learning resources provided for all students, you can focus entirely on your studies without barriers. We ensure that every student has the tools they need to succeed.'
    },
    {
        icon: goal.src,
        title:'Proven Success',
        desc:'Our students have consistently shared their positive experiences and success stories. From beginner to pro in just six months, our graduates are well-prepared to excel in their IT careers.'
    },
    {
        icon: global.src,
        title:'Flexible Learning Options',
        desc:'Whether you prefer online or in-person classes, we offer top-notch education that fits your lifestyle. Our flexible learning options ensure you can learn in the way that suits you best.'
    },
    {
        icon: global.src,
        title: 'Leading IT Training Centre',
        desc: 'Consistently recognised by our students as one of the best IT training institutions in Ghana, Hypermedia is committed to providing high-quality education that sets you up for success in the tech industry.'
    },
    {
        icon: lesson.src,
        title: 'Accessible and Inclusive',
        desc: 'We pride ourselves on making our classes accessible to everyone. Our inclusive approach ensures that no student is left behind, and everyone can excel.'
    },
    {
        icon: global.src,
        title: 'Professionalism',
        desc: 'Our professionalism and commitment to excellence have earned us a reputation as a top choice for IT training. We are dedicated to your growth and development, ensuring you receive the best possible education.'
    }, 
    {
        icon: global.src,
        title: 'Hands-On Experience',
        desc: 'By combining theoretical knowledge with real-world applications, we ensure that you are well-prepared to tackle the challenges of the tech industry. Our hands-on approach equips you with the skills needed to succeed.'
    }
]

const WhyChooseUs = () =>{
    return(
        <>
        <section className="w-full bg-[#F5FAFF] p-10">
            <div className="md:w-2/5 text-center mx-auto pt-10">
                <h2 className="text-3xl font-bold">Why choose Hypermedia?</h2>
                <p className="py-4">Experience a range of cutting-edge tech courses designed to propel your career forward with practical skills and industry insights.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4">
                    {
                        whyChooseUs.map(({title, desc, icon}, index)=>(
                            <div className="bg-white border h-max-fit p-4" key={index}>
                                <Image src={icon} alt={''} width={40} height={40} loading="lazy"/>
                                <h3 className="font-bold pt-4">{title}</h3>
                                <p className="py-4">{desc}</p>
                            </div>
                        ))
                    }
            </div>
        </section>
        </>

    )
}

export default WhyChooseUs;