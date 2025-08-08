import {useState} from "react"
import { Svg } from "../components/Svg"
import { Title } from "../components/Title"
import { Subtitle } from "../components/Subtitle"
import { Icon } from "../components/Icon"
import { BlogButton } from "../components/BlogButton"
import { Logo } from "../components/Logo"
import { Draft } from "../components/Draft"

export function Blogs(){
    // const [heading, setHeading] = useState("");
    // const [content, setContent] = useState("");

    // function publish(){
        
    // }


    return(
        
        <div className="flex justify-center h-screen ">
            <div className="basis-3/4">

                <div className="flex justify-between mt-[1%]"> 
                    <div className="flex items-center gap-2.5">
                        <Logo/>
                        <div className="hidden md:block"><Draft name="Rithvikbansal" /></div>
                    </div>

                    <div className="flex items-center gap-3">
                        <BlogButton/>
                        <Icon/>
                    </div>
                </div>

                <div className="flex mt-[15%] md:mt-[4%] md:w-[80%] m-auto ">
                    <div className="hidden md:block md:basis-1/15"><Svg/></div>
                    <div className="md:basis-14/15 md:border-l border-neutral-500 rounded-none w-full"><Title /></div>
                </div>

                <div className="md:w-[80%] m-auto flex mt-[2%] ">
                    <div className="md:basis-1/15"></div>
                    <div className="md:basis-14/15 ">
                        <Subtitle/>
                    </div>
                </div>

            </div>
        </div>
    )
}