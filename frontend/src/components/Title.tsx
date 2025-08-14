interface TitleInputs{
    heading: React.Dispatch<React.SetStateAction<string>>
}

export function Title({heading}: TitleInputs){
    return(
        <div className="md:pl-[1%] w-full ">
            <input placeholder="Title" onChange={function(e){
                const value = e.target.value;
                heading(value);
            }} 
            className="text-4xl outline-0 w-full caret-gray-500 placeholder:text-gray-500 resize-none whitespace-normal h-[10%]"/>
        </div>
    )
}