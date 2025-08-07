interface inputTypes {
    title: string;
    placeholder: string;
    setStateVariable: React.Dispatch<React.SetStateAction<string>>;
    
}

export function InputBox({ title, placeholder, setStateVariable } : inputTypes){
    return(

        <div className="mt-5 mx-auto ">
            <p className="md:font-semibold pb-1">{title}</p>
            <input type="text" placeholder={placeholder} onChange={function(e){
                const value = e.target.value;
                setStateVariable(value);
            }}
            className="border rounded-sm placeholder:text-gray-400 w-full md:py-1 outline-none md:pl-3 pl-1 "/>
        </div>
    )
}

