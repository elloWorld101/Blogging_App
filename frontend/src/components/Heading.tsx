interface HeadingTypes{
    heading: string;
    subheading: string;
    link: string;
    page: string;
}

export function Heading({heading, subheading, link, page}: HeadingTypes){
    return(
        <div className="text-center">
            <h2 className="font-bold text-3xl">{heading}</h2>
            <p className="text-gray-600 pt-1">{subheading} <a href={page} className="underline">{link}</a></p>
        </div>
    )
}