import Image from "next/image";
import Link from "next/link";
import HM_Logo from "../../../v1/assets/hm-logo.svg";

const Footer = () =>{
    return(
        <>
        <footer className="w-full bg-[#1D2939] text-[#98A2B3] p-20">
            <div className="md:w-4/5 grid grid-cols-1 md:grid-cols-4 gap-10 !mx-auto pt-40">
                <div>
                    <h4 className="font-bold text-[#667085]">Company</h4>
                    <ul className="[&>li]:py-2">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Training</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                <h4 className="font-bold text-[#667085]">Use cases</h4>
                    <ul className="[&>li]:py-2">
                        <li>Startups</li>
                        <li>Enterprise</li>
                        <li>Government</li>
                        <li>SaaS</li>
                        <li>Marketplaces</li>
                        <li>Ecommerce</li>
                    </ul>
                </div>
                <div>
                <div>
                <h4 className="font-bold text-[#667085]">Social</h4>
                    <ul className="[&>li]:py-2">
                        <li>Twitter</li>
                        <li>Linkedin</li>
                        <li>Facebook</li>
                        <li>GitHub</li>
                        <li>AngelList</li>
                        <li>Dribble</li>
                    </ul>
                </div>
                </div>
                <div>
                <div>
                <h4 className="font-bold text-[#667085]">Legal</h4>
                    <ul className="[&>li]:py-2">
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                        <li>Licenses</li>
                        <li>Settings</li>
                        <li>Contact</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="md:w-4/5 !mx-auto mt-20">
            <hr/>
                <div className="md:flex md:justify-between !items-center sm:text-center">
                <Link href={"/"}>
                <Image src={HM_Logo} width={300} height={1000} quality={100}  priority={1} alt="official logo" className="mt-4"/>
                </Link>
                <div>&copy; {new Date().getFullYear()} Hypermedia. All rights reserved.</div>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer;