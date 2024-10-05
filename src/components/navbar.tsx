import Link from "next/link";
import Image from "next/image";
import HM_Logo from "../assets/hm-logo.svg";
import MobileMenu from "../components/mobileMenu";

export default function Navbar(){
    return(
        <>
        <nav  className="md:w-11/12 md:h-10 md:flex md:justify-between md:items-center md:mx-auto md:my-4 sm:hidden md:p-10">
                <div>
                <Link href={"/"}>
                <Image src={HM_Logo} width={300} height={1000} quality={100}  priority alt="official logo"/>
                </Link>
                </div>
                <div>
                <ul className="flex items-center [&>li]:px-4">
                <li><Link href={"/courses"}>Home</Link></li>
                <li><Link href={"/courses"}>About us</Link></li>
                <li><Link href={"/courses"}>Services</Link></li>
                <li><Link href={"/courses"}>Training</Link></li>
                <li><Link href={"/courses"}>Courses</Link></li>
                <li><Link href={"/contactus"}>Contact us</Link></li>
                </ul>
                </div>
                <div>
                <Link href={'/student/registration'}><button className="primary-btn sm:ml-0 sm:my-4 px-5 !w-auto">Register</button></Link>
                </div>
        </nav>
        <MobileMenu/>
        </>
    )
}