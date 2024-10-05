'use client';
import { useState } from "react";
import Link from "next/link";
import ToggleMenuButton from "./toggleMenu";
import HM_Logo from "../assets/icons/hm-logo-small.svg";
import Image from "next/image";

const MobileMenu = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <>
            <nav className="sm:w-[80%] md:hidden sm:block sm:mx-auto sm:my-4">
            <div className="flex justify-between">
            <Link href={"/"}>
                <Image src={HM_Logo} width={70} height={70} quality={100} alt="official logo" />
             </Link>
            <ToggleMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            </div>
            {isMenuOpen && 
            <>
              <ul className={`sm:[&>li]:px-4 [&>li]:sm:block [&>li]:sm:text-center [&>li]:sm:py-4 text-[#B0B0B0] ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'} duration-300 ease-in-out`}>
                    <li><Link href={"/courses"}>courses</Link></li>
                    <li><Link href={"/"}>about us</Link></li>
                    <li><Link href={"/contactus"}>contact us</Link></li>
                </ul>
                <div className="sm:[&>input]:px-4 [&>input]:sm:block [&>input]:w-full sm:[&>input]:rounded-full sm:[&>input]:my-4">
                    <input type="button" value={"login"} className={`secondary-btn`}/>
                    
                    <button className="primary-btn sm:ml-0 px-5 !w-auto !w-full !rounded-full">
                        <Link href={'/student/registration'}>Register</Link>
                    </button>
                </div>
            </>
            }
        </nav>
        </>
    )
}

export default MobileMenu;