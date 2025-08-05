import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { SideBar } from "../components/SideBar"
import { Heading } from "../components/Heading"

export function Signup(){
    return(
        <div className="flex h-screen "> 
            
            <div className="basis-1/2  flex flex-col justify-center">
                <div className=" w-[50%] mx-auto">
                    <Heading heading="Create an account" subheading="Already have an account? " link="Login" page="/signin"/>
                    <InputBox title="Username" placeholder="Enter your username" />
                    <InputBox title="Email" placeholder="m@example.com" />
                    <InputBox title="Password" placeholder="" />
                
                    <Button content="Sign Up"></Button>
                </div>
            </div>

            <div className="bg-gray-200 basis-1/2 flex flex-col justify-center">
                <div className=" px-[15%]">
                    <SideBar heading='"The customer service I recieved was exceptional. The support team went above and beyond to address my concerns."'  subheading="Jules Winnfield" footer = "CEO, Acme Inc"/>
                </div>
            </div>

        </div>
    )
}