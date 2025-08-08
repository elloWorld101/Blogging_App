import image from "../assets/mediumImage.jpg"
import { Logo } from "../components/Logo"

export function Landing(){
    return(
        <div className="h-screen bg-[#F7F4ED] flex flex-col">
            
            <div className="flex flex-row justify-between py-5">
                <div className="md:basis-2/3 mx-[5%]">
                    <Logo/>       
                </div>
                
                
                <div className="text-sm md:text-lg flex flex-row gap-5 md:basis-1/3 ">
                    <a href="/signin" className="hidden md:block py-2 text-sm font-semibold">Sign in</a>
                    <button className="bg-neutral-900 rounded-full text-white px-5 text-sm font-semibold mr-3 md:mx-none">
                        <a href="api/v1/signup">Get Started</a>
                    </button>
                </div>
            </div>

            <div className="flex justify-between border-1 items-center flex-row  md:h-auto flex-1 md:flex-0"> 
                <div className="mt-5 font-domine mx-[5%] basis-2/3">
                    <h2 className= "text-7xl md:text-9xl" >Human <br /> stories & ideas</h2>
                    <p className="text-xl mt-7 font-roboto">A place to read, write, and deepen your understanding</p>
                    <button className="bg-neutral-900 rounded-full px-10 py-2 mt-10 text-white">
                        <a href="/signup" className="text-xl">Start Reading</a>
                    </button>
                </div>
                <div className="pt-5">
                    <img src={image} alt="" 
                    className="hidden h-150 w-110 md:block"/>
                </div>
                
            </div>

            <div>

            </div>
        
        </div>
    )
}