interface SidebarTypes{
    heading: string;
    subheading: string;
    footer: string;
}

export function SideBar({heading, subheading, footer} : SidebarTypes){
    return (
        <div>
            <h2 className="text-2xl font-[700]">{heading}</h2>
            <p className="font-[700] mt-[2%]">{subheading}</p>
            <p className="text-gray-600">{footer}</p>
        </div>
    )
}