import Image from "next/image";
import check from "../assets/icons/check.svg";
const ListRender = ({data}) =>{
    return(
        <>
        <ul>
            {
              data && data.map(({title, desc},index)=>(
                <div className="flex items-start [&>li]:pl-2" key={index}>
                <Image src={check.src} alt={title} width={20} height={20} priority className="mt-4"/>
                    <li key={index} className="my-2">
                        <h3 className="text-lg font-medium">{title}</h3>
                        <p className="text-sm">{desc}</p>
                    </li>
                </div>
                ))
            }
        </ul>
        </>
    )
}

export default ListRender;