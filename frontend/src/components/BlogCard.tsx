interface BlogCardTypes{
    title: string;
    content: string;
}

export function BlogCard({title, content}: BlogCardTypes){
    return(
        <div>
            {title}
            {content}
        </div>
    )
}