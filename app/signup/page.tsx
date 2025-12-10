"use client";

import axios from "axios";
import { useState } from "react";

export default function Page(){
    const [username,setusername]=useState("");
    const [password,setPassword]=useState("");
    return(<div className="h-screen w-screen  flex justify-center items-center ">
            <div className="flex flex-col bg-white text-black border-2 border-amber-400">
            <input type="text" placeholder="name" className="text-black" onChange={(e=>{
                setusername(e.target.value)
            })}></input>
            <input type="password" placeholder="password"  onChange={(e=>{
                setPassword(e.target.value)
            })}></input>
            <button type="submit" className="cursor-pointer" onClick={()=>{
                axios.post("http://localhost:3000/api/v1/signup",{
                    username,password
                })
            }}>submit</button>
            </div>
    </div>)
}