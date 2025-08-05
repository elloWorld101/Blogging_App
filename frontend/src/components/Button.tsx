export function Button({content} : {content: string}){
    return (
        <div className="mt-4 ">
            <button className=" bg-neutral-900 text-white w-[100%] md:p-2 p-1 rounded-sm outline-none">
                {content}
            </button>
        </div>
    )
}