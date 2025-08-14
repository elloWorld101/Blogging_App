
interface SearchInputs{
    functionCalled: void;
    setter: React.Dispatch<React.SetStateAction<string>>
}


export function Search({functionCalled, setter}: SearchInputs){


    return(
        <div className="flex border border-white  rounded-full items-center bg-gray-100">  
            <div className="px-4">
                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
            </div> 
            <div>
                <input type="text" placeholder="Search" onChange={(e) => {
                    const value = e.target.value;
                    setter(value);
                    functionCalled

                }}
                className="outline-0 text-sm placeholder:text-gray-800 placeholder:font-roboto placeholder:font-300]"/>
            </div>
        </div>
    )
}