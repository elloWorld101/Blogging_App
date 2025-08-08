interface SubtitleTypes{
    content: React.Dispatch<React.SetStateAction<string>>
}

export function Subtitle({content}: SubtitleTypes){
    return(
        <div>
            <textarea  placeholder="Tell your story..." onChange={function(e){
                content(e.target.value);
            }}
            className="text-gray-600 outline-none w-full md:pl-3 text-2xl resize-none h-100"/>
        </div>
    )
}

