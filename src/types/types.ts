export type FAQType={
    id: number, 
    // icon: string, 
    heading: string, 
    content: string,
    link?: string
}

export type ModuleType = {
    topic?: string;
    desc?: string;
  };
  
  export interface courseType{
    id: string,
    image_url: string,
    course: string,
    rating: number,
    desc: string,
    type: string,
    level: string,
    price: string,
    duration: string,
    modules?: ModuleType[]
  };