import Image from 'next/image';
import search_icon from '../assets/icons/search.svg';

const FloatingSearch = () =>{
    return(
        <>
        <div className="sm:my-10 sm:mx-auto flex items-center sm:w-4/5 md:w-[513px] h-auto md:h-24 bg-white rounded-[16px] shadow-lg border p-4 md:absolute md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-20">
  <div className="w-full flex justify-between items-center space-x-2">
    <div className="flex items-center w-10/12 border rounded-[10px] space-x-2 px-2">
      <label htmlFor="search">
        <Image src={search_icon.src} alt="search icon" width={20} height={20} quality={100} priority />
      </label>
      <input
        className="w-full focus:outline-none p-1 text-sm"
        type="search"
        placeholder="Search course by name here"
        id="search"
      />
    </div>
    <button className="primary-btn px-4 py-2 sm:py-1 text-sm sm:text-base sm:ml-0 sm:my-4 w-auto">
      Search
    </button>
  
  </div>
</div>

        </>
    )
}

export default FloatingSearch;