import { Icon } from "./Icon";

interface BlogCardTypes{
    authorName: string;
    title: string;
    content: string;
}

export function BlogCard({authorName, title, content}: BlogCardTypes){

    
    return(

        <div className="flex justify-center">
            <div className="flex flex-col border-b min-w-xl w-[40%]">
                <div className="flex items-center gap-3 ">

                    <Icon authorName= {authorName}/> 
                    <h3 className="font-[400] font-roboto  text-gray-700">
                        {authorName}
                    </h3>
                    
                </div>

                <div className="font-semibold text-xl font-roboto mt-3">
                    <h2>{title}</h2>
                </div>

                <div className="font-[500] text-gray-500 font-roboto mt-1 w-max-2xl ">
                    <p>{content.length > 100 ? content.slice(0,150) + "..." : content.slice(0,100)}</p>
                </div>
    
                <div className="text-bg-500 mt-2 ">
                    {`${Math.ceil(content.length/200)} min read`}
                </div>
            </div>


        </div>
    )
}