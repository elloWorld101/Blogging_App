interface SidebarTypes{
    heading: string;
    subheading: string;
    footer: string;
}

export function SideBar({heading, subheading, footer} : SidebarTypes){
    return (
        <div>
            <h2 className="md:text-2xl md:font-[700] text-sm font-[600]">{heading}</h2>
            <p className="md:font-[700] mt-[2%] font-[500] md:text-base text-xs">{subheading}</p>
            <p className="text-gray-600 md:text-base text-xs">{footer}</p>
        </div>
    )
}