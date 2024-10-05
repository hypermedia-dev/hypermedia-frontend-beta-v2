import Image from "next/image";
import banner from "../../assets/banner.jpg";
const Billboard = () =>{
    return(
        <> 
        <div className="bg-[#F2F4F7] w-full h-20"></div>
        <section className="bg-[#F5FAFF] w-full h-[484px] overflow-hidden relative">
            <Image src={banner.src} alt={'billboard'} fill className=""/>
        </section>
        <div className="bg-[#F2F4F7] w-full h-20"></div>

        </>
    )
}
export default Billboard;