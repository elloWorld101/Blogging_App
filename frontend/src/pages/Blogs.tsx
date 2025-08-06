import { Svg } from "../components/Svg"
import { Title } from "../components/Title"
import { Subtitle } from "../components/Subtitle"
import { Icon } from "../components/Icon"
import { BlogButton } from "../components/BlogButton"
import { Logo } from "../components/Logo"
import { Draft } from "../components/Draft"

export function Blogs(){
    return(
        
        <div className="flex justify-center h-screen ">
            <div className="basis-3/4">

                <div className="flex justify-between mt-[1%]"> 
                    <div className="flex items-center gap-2.5">
                        <Logo/>
                        <Draft name="Rithvikbansal" />      
                    </div>

                    <div className="flex items-center gap-3">
                        <BlogButton/>
                        <Icon/>
                    </div>
                </div>

                <div className="flex mt-[4%] w-[80%] m-auto ">
                    <div className="basis-1/15"><Svg/></div>
                    <div className="basis-14/15 border-l border-neutral-500 rounded-none w-full"><Title/></div>
                </div>

                <div className="w-[80%] m-auto flex mt-[2%] ">
                    <div className="basis-1/15"></div>
                    <div className="basis-14/15 ">
                        <Subtitle/>
                    </div>
                </div>

            </div>
        </div>
    )
}