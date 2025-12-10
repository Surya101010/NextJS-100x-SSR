import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
            name:"Surya",
            email:"abc@gamil.com"
        })
    
}