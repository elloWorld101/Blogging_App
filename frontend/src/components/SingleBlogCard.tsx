import { Icon } from "./Icon";

interface SingleBlogCardTypes{
    authorName: string;
    title: string;
    content: string;
}

export function SingleBlogCard({authorName, title, content}: SingleBlogCardTypes){
    return(

        <div className="flex justify-center mt-20">
            <div className="flex flex-col  min-w-2xl">
                <div className="flex items-center gap-3 ">

                    <Icon authorName = {authorName}/> 
                    <h3 className="font-[500] font-roboto  text-gray-700 text-lg">
                        {authorName}
                    </h3>
                    
                </div>

                <div className="font-semibold text-5xl font-roboto mt-3">
                    <h2>{title}</h2>
                </div>

                <div className="font-[500] text-gray-500 font-roboto mt-10 text-2xl">
                    <p>{content.length > 100 ? content.slice(0,100) + "..." : content.slice(0,100)}</p>
                </div>
    
                <div className="text-bg-500 mt-2 text-lg ">
                    {`${Math.ceil(content.length/100)} min read`}
                </div>
            </div>


        </div>
    )
}