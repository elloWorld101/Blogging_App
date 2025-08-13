import type { SignupInput } from "@ritzcreates/common-app";

interface inputTypes {
    title: string;
    placeholder: string;
    // stateVariable: SignupInput;
    // setStateVariable: React.Dispatch<React.SetStateAction<SignupInput>>;
    // toChange: string
    functionCalled : (e: any) => void
}

export function InputBox({ title, placeholder, functionCalled } : inputTypes){
    return(

        <div className="mt-5 mx-auto ">
            <p className="md:font-semibold pb-1">{title}</p>
            <input type="text" placeholder={placeholder} onChange={functionCalled}
            className="border rounded-sm placeholder:text-gray-400 w-full md:py-1 outline-none md:pl-3 pl-1 "/>
        </div>
    )
}

