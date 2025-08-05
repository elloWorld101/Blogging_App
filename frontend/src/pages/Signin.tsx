import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SideBar } from "../components/SideBar"
import { Button } from "../components/Button"

export function Signin(){
    return(
        <div className="flex h-screen">
            <div className="basis-1/2 flex flex-col">
                <div className="w-[50%] m-auto">
                    <Heading heading="Sign in to your account" subheading="Don't have an account? " page="/signup" link="Sign up"/>
                    <InputBox title="Username" placeholder="m@example.com" />
                    <InputBox title="Password" placeholder="" />   
                    <Button content="Sign In" />
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