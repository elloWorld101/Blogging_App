import { useState } from "react"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { SideBar } from "../components/SideBar"
import { Heading } from "../components/Heading"
import axios from "axios";
import { useSetRecoilState } from "recoil"
import { disableAtom } from "../store/atom"
import { useNavigate } from "react-router-dom"
import type { SignupInput } from "@ritzcreates/common-app"
const BASE_URL = import.meta.env.VITE_BACKEND_URL

export function Signup(){
    // const [username, setUsername] = useState<string>("");
    // const [email, setEmail] = useState<string>("");
    // const [password, setPassword] = useState<string>("");
    const [userInputs, setUserInputs] = useState<SignupInput>({
        email: "",
        name: "",
        password: ""
    })
    const setDisable = useSetRecoilState(disableAtom)
    const navigate = useNavigate();

    function signup(): void{
        console.log(userInputs);
        
        setDisable(true);

        axios.post(`${BASE_URL}/user/signup`, {
            userInputs
        })
            .then(function(response){

                if(response.data.error){
                    alert(response.data.error);
                }
                if(response.data.token){
                    const token = response.data.token;
                    localStorage.setItem('jwtToken', token)
                }
                const msg = response.data.msg;
                if(msg == "User created"){
                    navigate("/dashboard");
                }else{
                    alert(msg);
                }

                setDisable(false);

            }).catch(error =>{
                setDisable(false)
                alert(error);   
            })
    }


    return(
        <div className="md:flex h-screen md:bg-white bg-gray-200"> 

            <div className="md:basis-1/2 flex flex-col justify-center h-screen">
                <div className=" md:w-[50%] mx-auto w-[70%]">
                    <Heading heading="Create an account" subheading="Already have an account? " link="Login" page="/signin"/>
                    <InputBox title="Username" placeholder="Rithvik" functionCalled={function(e){
                        setUserInputs({
                            ...userInputs,
                            name: e.target.value
                        })
                    }}/>
                    <InputBox title="Email" placeholder="m@example.com" functionCalled={function(e){
                        setUserInputs({
                            ...userInputs,
                            email: e.target.value
                        })
                    }}/>
                    <InputBox title="Password" placeholder="" type="password" functionCalled={(e)=>{
                        setUserInputs({
                            ...userInputs,
                            password: e.target.value
                        })
                    }} />

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