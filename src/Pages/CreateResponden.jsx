import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import axios from 'axios';
import LayoutMain from '../Layouts/LayoutMain'

const CreateResponden = () => {

    const api = import.meta.env.VITE_API_URL

    const [users, setUsers] = useState([])
    
    const { id } = useParams();

    const fetchDataUsers = async () => {

        await axios.get(`${api}api/manage-survey/detail-survei/${id}`)
            .then(response => {
                
                setUsers(response.data.manage_survey);

        })
    }

    useEffect(() => {
        
        fetchDataUsers();
        
      }, []);

      console.log(users);

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Tambah Responden</title>
        <link rel="canonical" href="https://lefi.com/" />
    </Helmet>
    <LayoutMain>
    
    <form>
        
    </form>
                            
    </LayoutMain>
    </>
  )
}

export default CreateResponden