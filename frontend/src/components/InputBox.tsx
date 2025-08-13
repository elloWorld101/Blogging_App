
interface inputTypes {
    title: string;
    placeholder: string;
    functionCalled : (e: any) => void
    type? : string;
}

export function InputBox({ title, placeholder, functionCalled, type } : inputTypes){
    return(

        <div className="mt-5 mx-auto ">
            <p className="md:font-semibold pb-1">{title}</p>
            <input type={type || "text"} placeholder={placeholder} onChange={functionCalled}
            className="border rounded-sm placeholder:text-gray-400 w-full md:py-1 outline-none md:pl-3 pl-1 "/>
        </div>
    )
}

