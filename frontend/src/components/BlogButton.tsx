import { useRecoilValue } from "recoil";
import { Spinner } from "./Spinner";
import { disableAtom } from "../store/atom";

interface BlogButtonTypes{
    functionCalled: () => void;
}

export function BlogButton({functionCalled}: BlogButtonTypes){
    const isDisable = useRecoilValue(disableAtom);
    
    return(
        <div>
            <button onClick={functionCalled} disabled={isDisable}
            className="bg-green-600 rounded-full px-3  py-0.5 text-white ">
                {isDisable ? <Spinner/> : "Publish"}
            </button>
        </div>
    )
}