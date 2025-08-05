interface inputTypes {
    title: string;
    placeholder: string;

}

export function InputBox({ title, placeholder } : inputTypes){
    return(
        <div className="mt-5 mx-auto ">
            <p className="md:font-semibold pb-1">{title}</p>
            <input type="text" placeholder={placeholder}
            className="border rounded-sm placeholder:text-gray-600 w-full md:py-1 outline-none md:pl-3 pl-1 "/>
        </div>
    )
}