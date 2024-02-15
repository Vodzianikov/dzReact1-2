import { useState, useEffect, } from "react"
import { Link } from "react-router-dom"
import { UserMain } from "../UserMain/UserMain"
import axios from "axios"





export const Users =()=>{
    const [count, setCount] = useState(0)
    const [userData, setUserData] = useState([])
    const API_URL = "https://fakestoreapi.com/products/"
    useEffect(()=>{
        axios.get(API_URL)
        .then((resp)=>setUserData(resp.data))
    },[count])
    
    
    //     useEffect(() => {
    //     fetch(API_URL)
    //         .then((resp) => resp.json())
    //         .then(( data ) => setUserData(data))
    // }, [])
    return(
        <>
        <UserMain users={userData}/>
        </>
    )
    }
