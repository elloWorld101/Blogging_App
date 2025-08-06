import { useState } from "react"
import { Spinner } from "./Spinner";

interface ButtonTypes{
    content: string;
    functionCalled: () => void
}

export function Button({content, functionCalled} : ButtonTypes){
    const [isdisable, SetIsdisable] = useState(false);



    return (
        <div className="mt-4 ">
            <button onClick={()=> functionCalled()} disabled={isdisable}
            className=" bg-neutral-900 text-white w-[100%] md:p-2 p-1 rounded-sm outline-none">
                {isdisable ? <Spinner/> : content}
            </button>
        </div>
    )
}