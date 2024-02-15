import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import LayoutMain from '../Layouts/LayoutMain'
import ReactLoading from 'react-loading'

import {useDataUser} from '../Store/State'

import axios from 'axios'

import Moment from 'moment'

const SurveiAnda = () => {

  const api = import.meta.env.VITE_API_URL

    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])
    
    const token = localStorage.getItem("token")

    const fetchDataUsers = async () => {

        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        await axios.get(`${api}api/manage-survey`)
            .then(response => {
                
                setUsers(response.data.surveys);
                setLoading(false);

        })
    }

    useEffect(() => {
        
        fetchDataUsers();
        
      }, []);

      // console.log(users)


 

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Survei Anda</title>
        <link rel="canonical" href="https://lefi.com/" />
    </Helmet>
    <LayoutMain>

    




    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Survei Anda</h1>
          <p className="mt-2 text-sm text-gray-700">
            Dibawah ini adalah list survei yang anda buat di Surveiku
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          
        </div>
      </div>

      {loading ? <ReactLoading className='mt-5' type="spin" color="#4F46E5" width={50} /> :
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Nama Survei
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Tanggal Survei
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Jumlah Responden
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {users.map((survey) => (
                    <tr key={survey.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {survey.survey_name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {Moment(survey.survey_start).format('DD-MM-YYYY')} sd {Moment(survey.survey_end).format('DD-MM-YYYY')}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{survey.count}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Link to={'/responden-survei/' + survey.slug} className="text-indigo-600 hover:text-indigo-900">
                          Responden<span className="sr-only">, {survey.survey_name}</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      }
    </div>


    </LayoutMain>
    </>
  )
}

export default SurveiAnda