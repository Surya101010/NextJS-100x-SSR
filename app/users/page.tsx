"use client"
import axios from "axios";
// import { useEffect, useState } from "react";

export default async function Userpage(){
    // const [loading,setLoading]=useState(true);
    // const [data,setData]=useState();
    // useEffect(()=>{
    //     axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details").then(response =>{
    //         //@ts-ignore
    //         setData(response.data);
    //         setLoading(false);
    // })
    // },[])
    // if (loading) {
    //     return <div>
    //         loading...
    //     </div>
    // }
    const response = await axios.get("http://localhost:3000/api/v1/user/details")
    const data1 : any= response.data;

return(<div>
        {data1.name}
        <br />
        {data1.email}
    </div>)
}