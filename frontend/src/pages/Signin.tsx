import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SideBar } from "../components/SideBar"
import { Button } from "../components/Button"

export function Signin(){
    return(
        <div className="md:flex h-screen bg-gray-200 md:bg-white">
            <div className="md:basis-1/2 flex flex-col justify-center h-screen ">
                <div className="md:w-[50%] mx-auto w-[70%]">
                    <Heading heading="Login to your account" subheading="Don't have an account? " page="/signup" link="Sign up"/>
                    <InputBox title="Username" placeholder="m@example.com" />
                    <InputBox title="Password" placeholder="" />   
                    <Button content="Sign In" />
                </div>
            </div>

            <div className="hidden md:block bg-gray-200 md:basis-1/2 md:flex md:flex-col md:justify-center">
                <div className=" px-[15%]">
                    <SideBar heading='"The customer service I recieved was exceptional. The support team went above and beyond to address my concerns."'  subheading="Jules Winnfield" footer = "CEO, Acme Inc"/>
                </div>
            </div>

        </div>
    )
}