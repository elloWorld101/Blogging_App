import {useEffect, useState} from "react"
import { Logo } from "../components/Logo"
import { Search } from "../components/Search"
import { Icon } from "../components/Icon"
import { Write } from "../components/Write"
import axios from "axios"
import { useRecoilState } from "recoil"
import { skeletonAtom } from "../store/atom"
import { SkeletonCN } from "../components/SkeletonCN"
import { BlogCard } from "@/components/BlogCard"
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export function Dashboard(){
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [isSkeleton, setIsSkeleton] = useRecoilState(skeletonAtom)

    useEffect(()=>{
        axios.get(`${BASE_URL}/blog/bulk`,{
            headers: {
                Authorization: "Bearer "+localStorage.getItem("jwtToken")
            }
        })
        .then(function(response){
            setIsSkeleton(false);
            setPosts(response.data.posts);
        }).catch(error =>{
            setIsSkeleton(false);
            alert(error);
        })
    },[]);


    return(
        <div>
            <div className="flex justify-between border-b-1 p-3 shadow-xs border-white">
                <div className="flex gap-3">
                    <Logo/>
                    <Search stateVariable={setSearch} />
                </div>
                <div className="flex gap-4 items-center">
                    <Write/>
                    <Icon/>
                </div>
            </div>

            <div>
                {isSkeleton ? <SkeletonCN/>: null}
                <BlogCard title="I FAILED Multiple coding Interviews Until I Learned THIS"  content="After rejection after rejection, one lesson changed how I prep, think, and perform in interviews."/>
                
            </div>
        </div>
    )
}