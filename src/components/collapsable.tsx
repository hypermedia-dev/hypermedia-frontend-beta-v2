'use client';
import Image from "next/image"
import chevronUp from "../../v2/assets/icons/chevron-up.svg";
import chevronDown from "../../v2/assets/icons/chevron-down.svg";
import { useEffect, useState } from "react";


const Collapsable = ({ faqs }) => {
    const [activeId, setActiveId] = useState(null);

    const handleDropDown = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <div className="p-10 mx-auto">
            {faqs.slice(0,4).map(({ id, icon, heading, content }) => (
                <div key={id}>
                    <div className="flex justify-between items-center p-2 my-4">
                        <div className="flex rounded-lg">
                        <Image
                            src={icon}
                            className="collapsable-icon rounded-lg"
                            width={30}
                            height={30}
                            alt={'icon'}
                        />
                        <h3 className="text-lg font-bold pl-4">{heading}</h3>
                        </div>
                        <Image
                            src={chevronDown.src}
                            className="collapsable-arrow cursor-pointer"
                            width={30}
                            height={30}
                            alt="Toggle"
                            onClick={() => handleDropDown(id)}
                        />
                    </div>

                    {/* Collapsible content with transition */}
                    <div
                        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeId === id ? 'max-h-screen' : 'max-h-0'}`}
                    >
                        <div className="collapsable-content p-4 pl-10">
                            {content}
                        </div>
                        <hr className="PY-4"/> 
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Collapsable;