import { Svg } from "../components/Svg"
import { Title } from "../components/Title"

export function Blogs(){
    return(
        <div>

            <div> {/*for header hai yeh -- to publish and all*/}</div>

            <div className="flex ">
                <div className=""><Svg/></div>
                <div className="border border-neutral-500 rounded-none"></div>
                <div className="w-full"><Title/></div>
            </div>
        
            <div>
                
            </div>

        </div>
    )
}