import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
        const value = await req.json();
        console.log(value)
        return NextResponse.json({
        message:"user signed up"
     })
}