import React, { useState, useEffect } from 'react'
import { useNavigate, NavLink, Link } from 'react-router-dom'
import axios from 'axios'
import { create } from 'zustand'

export const useDataUser = () => {

    const api = import.meta.env.VITE_API_URL

    const [loading, setLoading] = useState(true)

    const token = localStorage.getItem("token");
    
    const navigate = useNavigate();

    const fetchData = async () => {

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        
        await axios.get(`${api}api/user`)
        .then((response) => {
            
            setUser(response.data.user);
            setUserMake(response.data.user_make);

            setLoading(false);

        })
    }

    useEffect(() => {

        if(!token) {
            navigate('/')
        }
        
        fetchData();
    }, []);


    const [user, setUser] = useState({})
    const [userMake, setUserMake] = useState({})

    return {
        userData: user,
        loadingData: loading,
        userMake: userMake,
    }

}




export const useUserData = create((set, get) => {

    return {
        userName: "Lefi",

        // userNameCek: ()=>{
        //     return {
        //         userName: "Lefi"
        //     }
        // },
    }

})