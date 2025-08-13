interface IconTypes{
    authorName: string;
}

export function Icon({authorName}: IconTypes){
    return(
        <div>
            <button className="rounded-full bg-yellow-700 px-3 py-1 text-white">{authorName[0]}</button>
        </div>
    )
}