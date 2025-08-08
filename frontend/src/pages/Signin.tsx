import { useState } from "react"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SideBar } from "../components/SideBar"
import { Button } from "../components/Button"
import axios from "axios"
import { useSetRecoilState } from "recoil"
import { disableAtom } from "../store/atom"
import { useNavigate } from "react-router-dom"
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export function Signin(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setDisable = useSetRecoilState(disableAtom);
    const navigate = useNavigate();

    function signin(): void{
        setDisable(true);

        axios.post(`${BASE_URL}/signin`,{
        email: email,
        password: password
        
            }).then(function(response){
                setDisable(false);

                if(response.data.error){
                    alert(response.data.error)
                }

                if(response.data.token){
                    const token = response.data.token;
                    localStorage.setItem("jwtToken","Bearer"+ token);
                }

                const msg = response.data.msg;
                if(msg == "Signin Successfull"){
                    navigate("/dashboard");
                }else{
                    alert(msg);
                }

            }).catch(error => {
                setDisable(false);
                alert(error);
            })

    }

    return(
        <div className="md:flex h-screen bg-gray-200 md:bg-white">
            <div className="md:basis-1/2 flex flex-col justify-center h-screen ">
                <div className="md:w-[50%] mx-auto w-[70%]">
                    <Heading heading="Login to your account" subheading="Don't have an account? " page="/signup" link="Sign up"/>
                    <InputBox title="Email" placeholder="m@example.com" setStateVariable={setEmail} />
                    <InputBox title="Password" placeholder="" setStateVariable={setPassword}/>   
                    <Button content="Sign In" functionCalled={signin}/>
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