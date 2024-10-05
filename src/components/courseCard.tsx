import React from 'react';
import { Rate } from 'antd';
import Image from "next/image";
import { truncateTextByWords } from '../shared/utils';
import { courseType } from '@/types/types';



const App = ({rate}:{rate:number}) => <Rate disabled allowHalf defaultValue={rate} />;

const CourseCard: React.FC<{ data: courseType }> = ({ data }) => {
    const {course, image_url, desc, level, duration,rating} = data;
    return(
        <>
        <div className="w-auto h-max-fit bg-white sm:my-4">
            <div className='w-full h-40 overflow-hidden'>
                <Image src={image_url} width={1000} height={1000} alt={`${course}`}/>
            </div>
                <div className='p-4'>
                    <h3 className='font-bold'>{course}</h3>
                    <p className='py-2 text-left'>{truncateTextByWords(desc)}</p>
                    <ul>
                        <li><span className='text-sm font-bold'>Level</span>: {level}</li>
                        <li><span className='text-sm font-bold'>Duration:</span> {duration}</li>
                        <li><span className='text-sm font-bold'>Ratings:</span> <App rate={rating}/></li>
                    </ul>
                </div>
        </div>
        </>
    )
}

export default CourseCard;