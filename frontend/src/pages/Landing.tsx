export function Landing(){
    return(
        <div className="h-screen bg-[#F7F4ED]">
            <div className="flex justify-around py-5 border-1">
                <h2 className=" text-md md:text-3xl font-semibold">ManseLikh</h2>
                <div className="text-sm  md:text-lg">
                    <a href="/signup" className="">Signup</a>
                    <a href="/signin">Signin</a>
                </div>
            </div>

            <div>
                <h2>Human stories & ideas</h2>
                <p>A place to read, write, and deepen your understanding</p>
                <a href="/signup">Start Reading</a>
                <img src="" alt="" />
            </div>
        </div>
    )
}