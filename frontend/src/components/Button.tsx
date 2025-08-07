import { Spinner } from "./Spinner";
import { useRecoilValue } from "recoil";
import { disableAtom } from "../store/atom";

interface ButtonTypes{
    content: string;
    functionCalled: () => void
}

export function Button({content, functionCalled} : ButtonTypes){
    const isDisable = useRecoilValue(disableAtom)



    return (
        <div className="mt-4 ">
            <button onClick={()=> functionCalled()} disabled={isDisable}
            className=" bg-neutral-900 text-white w-[100%] md:p-2 p-1 rounded-sm outline-none">
                {isDisable ? <Spinner/> : content}
            </button>
        </div>
    )
}