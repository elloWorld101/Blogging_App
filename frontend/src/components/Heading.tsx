interface HeadingTypes{
    heading: string;
    subheading: string;
    link: string;
    page: string;
}

export function Heading({heading, subheading, link, page}: HeadingTypes){
    return(
        <div className="text-center  md:pt-0">
            <h2 className="font-bold md:text-3xl text-2xl">{heading}</h2>
            <p className="text-gray-600 pt-1 md:text-base text-xs">{subheading} <a href={page} className="underline">{link}</a></p>
        </div>
    )
}