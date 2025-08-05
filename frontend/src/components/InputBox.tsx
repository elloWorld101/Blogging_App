interface inputTypes {
    title: string;
    placeholder: string;

}

export function InputBox({ title, placeholder } : inputTypes){
    return(
        <div className="mt-5">
            <p className="font-semibold pb-1">{title}</p>
            <input type="text" placeholder={placeholder}
            className="border rounded-sm placeholder:text-gray-600 w-full py-1 outline-none pl-3"/>
        </div>
    )
}