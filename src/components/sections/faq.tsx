import Collapsible from "../collapsible";
import Image from "next/image";
import imageToast1 from "../../assets/imageToast1.png";

export const faqs = [
    {
        id:1,
        heading: "What courses do you offer?",
        content: `We offer training in software development, IT Systems, data analytics, database technology, Microsoft Office, Graphic Design, UI/UX Design and more.`,
        link: `<a href="/courses">&rarr; visit our course</a>`,
    },
    {
        id:2,
        heading: "How much are your courses?",
        content: "We organise training programs on-demand and fee may vary from time to time, kindly speak to a centre agent to find out current fees for your preferred course(s).",
        link:'',
    },
    {
        id:3,
        heading: "Is it Free?",
        content: "We provide paid IT training courses, however we assist our students through discounts and scholarship offers.",
        link:'',
    },
    {
        id:4,
        heading: "Do I get a Certificate after completion?",
        content: "Yes, students receive certificates after satisfying all required theoretical and practical requirements.",
        link:'',

    },
    {
        id:5,
        heading: "How do I access my course materials?",
        content: "Upon successful registration, students are on-boarded onto a learning platform where they can access all relevant course materials.",
        link:'',

    },
    {
        id:6,
        heading: "Where are you located?",
        content: "Currently, our training centre is located at Takoradi No.3, near Bank of Ghana.",
        link:'',
    },
    {
        id:7,
        heading: "Are your courses online or in-person?",
        content: "We provide a hybrid training model; both online and in-person options are available for students depending on their needs.",
        link:'',
    },
    {
        id:8,
        heading: "What are your class schedules?",
        content: "The options available are Weekday, Weekend(Saturday only), Evening Classes.",
        link:'',
    },
    {
        id:9,
        heading: "Why many hours does a class take?",
        content: "Weekday and Evening Classes take 2hours per session, Saturday Class take 3hours per session and may extend on special circumstances",
        link:'',
    },
    {
        id:10,
        heading: "Can I take two or more courses at a time?",
        content: "No, our courses are technically rigorous and requires focus and attention on one area at a time. To ensure our students are well versed and prepared for professional challenges, we have made it a practice to only assign one per student.",
        link:'',

    },
    {
        id:11,
        heading: "How do I register?",
        content: "Kindly contact a centre agent to take you through the registration process. Office: 053 526 1239",
        link:'',
    },
]





const FAQ: React.FC = () => {
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
                <Collapsible faqs={faqs}/>
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