import { SingleBlogCard } from "@/components/SingleBlogCard";
import { Icon } from "@/components/Icon";
import { IconSkeleton } from "@/components/IconSkeleton";
import { Logo } from "@/components/Logo";
import { Write } from "@/components/Write";
import axios from "axios"
import { useState , useEffect } from "react";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;
import { useLocation } from "react-router-dom";
import { BlogCardSkeleton } from "@/components/BlogCardSkeleton";


interface BlogTypes {
    title: string;
    content: string;
    author: {
        name: string;
    }
}

export function SingleBlog(){


    const {state}= useLocation();
    const [blog, setBlog] = useState<BlogTypes>({
        title: " ",
        content: " ",
        author: {
            name: " "
        }
    });
    const [iconSkelton, setIconSkeleton] = useState(true);
    const [skeleton, setSkeleton] = useState(true);
    const holderName = state.holderName;
    const authorName = state.authorName;

    console.log(state);

    useEffect(()=>{
        const getBlog = async ()=>{

            const response = await axios.get(`${BASE_URL}/blog/${state.id}`,{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('jwtToken')
                }
            });
            console.log(response.data.blog);
            setBlog(response.data.blog)
            setSkeleton(false);
            setIconSkeleton(false);

        }

        getBlog();
    },[]);
    console.log(blog);
    
    return(
        <div>
            <div className="flex justify-between border-b-1 p-3 shadow-xs border-white">
                <div className="flex gap-3">
                    <Logo/>
                </div>
                <div className="flex gap-4 items-center">
                    <Write/>
                    {iconSkelton ? <IconSkeleton/> : <Icon authorName={holderName || "Anonymous"} />}
                </div>
            </div>

            <div>
                {skeleton ? <BlogCardSkeleton/>: <SingleBlogCard authorName={authorName || "Anonymous"} title={blog.title} content={blog.content}/>}
            </div>
       </div>
    )
}