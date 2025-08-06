import { useState } from "react"
import { Spinner } from "./Spinner";

export function Button({content} : {content: string}){
    const [isdisable, SetIsdisable] = useState(false);

    function buttonClicked(){
        console.log("Button clicked");
        SetIsdisable(true);
    }

    return (
        <div className="mt-4 ">
            <button onClick={buttonClicked} disabled={isdisable}
            className=" bg-neutral-900 text-white w-[100%] md:p-2 p-1 rounded-sm outline-none">
                {isdisable ? <Spinner/> : content}
            </button>
        </div>
    )
}