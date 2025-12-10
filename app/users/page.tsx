"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Userpage(){
    const [loading,setLoading]=useState(true);
    const [data,setData]=useState();
    useEffect(()=>{
        axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details").then(response =>{
            //@ts-ignore
            setData(response.data);
            setLoading(false);
    })
    },[])
    if (loading) {
        return <div>
            loading...
        </div>
    }

return(<div>
        {data.name}
    </div>)
}