export function Button({content} : {content: string}){
    return (
        <div className="mt-4">
            <button className=" bg-neutral-900 text-white w-full p-2 rounded-sm outline-none">
                {content}
            </button>
        </div>
    )
}