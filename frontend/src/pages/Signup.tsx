import { useState } from "react"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { SideBar } from "../components/SideBar"
import { Heading } from "../components/Heading"
import axios from "axios";
import { useSetRecoilState } from "recoil"
import { disableAtom } from "../store/atom"
const BASE_URL = import.meta.env.VITE_BACKEND_URL

export function Signup(){
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const setDisable = useSetRecoilState(disableAtom)


    function signup(): void{
        
        setDisable(true);

        axios.post(`${BASE_URL}/signup`, {
            name: username,
            email: email,
            password: password
        })
            .then(function(response){
                setDisable(false);
                if(response.data.error){
                    alert(response.data.error);
                }
                if(response.data.token){
                    const token = response.data.token;
                    localStorage.setItem('jwtToken', token)
                }
                const msg = response.data.msg;
                alert(msg);
            }).catch(error =>{
                alert(error);   
            })
    }


    return(
        <div className="md:flex h-screen md:bg-white bg-gray-200"> 

            <div className="md:basis-1/2 flex flex-col justify-center h-screen">
                <div className=" md:w-[50%] mx-auto w-[70%]">
                    <Heading heading="Create an account" subheading="Already have an account? " link="Login" page="/signin"/>
                    <InputBox title="Username" placeholder="Rithvik" setStateVariable = {setUsername} />
                    <InputBox title="Email" placeholder="m@example.com" setStateVariable={setEmail} />
                    <InputBox title="Password" placeholder="" setStateVariable={setPassword} />

                    <Button content="Sign Up" functionCalled={signup}></Button>
                </div>
            </div>

            <div className="hidden md:block md:bg-gray-200 md:basis-1/2 md:flex flex-col flex-1 md:justify-center">
                <div className=" px-[15%]">
                    <SideBar heading='"The customer service I recieved was exceptional. The support team went above and beyond to address my concerns."'  subheading="Jules Winnfield" footer = "CEO, Acme Inc"/>
                </div>
            </div>

        </div>
    )
}