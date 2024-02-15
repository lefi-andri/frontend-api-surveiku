import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'
import LayoutMain from '../Layouts/LayoutMain'
import ReactLoading from 'react-loading'

import {useDataUser} from '../Store/State'
import { useNavigate, useParams, Link } from 'react-router-dom';


import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

import axios from 'axios'

const RespondenSurvei = () => {

    const api = import.meta.env.VITE_API_URL
    const siteUrl = import.meta.env.VITE_SITE_URL

    // const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)




    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])
    
    // const token = localStorage.getItem("token")
    const { id } = useParams();

    const fetchDataUsers = async () => {

        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        await axios.get(`${api}api/manage-survey/semua-responden/${id}`)
            .then(response => {
                
                setUsers(response.data);
                setLoading(false);

        })
    }

    useEffect(() => {
        
        fetchDataUsers();
        
      }, []);

      // console.log(users)









      const [open, setOpen] = useState(false)
      const [seletcedData, setSelectedData] = useState();

      const handleClick = (dataz) => {
        setOpen(true);
        setSelectedData(dataz);

        // fetchDetailResponden(dataz[0])

        // console.log(dataz);
      };


      const [detailResponden, setDetailResponden] = useState([])

      const fetchDetailResponden = async (uuid) => {

        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        await axios.get(`${api}/api/manage-survey/detail-responden/${id}/${uuid}`)
            .then(response => {
                
              setDetailResponden(response.data);

        })
      }

      // console.log(detailResponden)

      const [openModal, setOpenModal] = useState(false)

      const handleClickModal = () => {
        setOpenModal(true);
        // console.log(dataz);
      };


  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Responden Survei</title>
        <link rel="canonical" href="https://lefi.com/" />
    </Helmet>
    <LayoutMain>

    




    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Responden Survei</h1>
          <p className="mt-2 text-sm text-gray-700">
            Dibawah ini adalah list responden
          </p>
          <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Slug survei : </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={id}
                  />
                </div>
              </div>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          
        {/* <a
            href={`/create-responden/${id}`}
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Tambah Responden
          </a> */}

          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={()=> { handleClickModal();}}
          >
            Tambah Responden
          </button>

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
                      UUID
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Status
                    </th>

                    {(() => {
                        let td = [];
                        for (let i = 1; i <= users.count; i++) {
                        td.push(<th key={i} scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            Profil {i}
                            </th>);
                        }
                        return td;
                    })()}

                    
                    
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {users.responden.map((survey) => (
                    <tr key={survey.id_survey}>

                    {survey.map((datax) => (
                      <>
                      <td key={survey.id_survey} className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {datax}
                      </td>


                      </>
                      ))}

                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        

                        <button
                          type="button"
                          className="text-indigo-600 hover:text-indigo-900"
                          // onClick={handleClick}
                          onClick={()=> { handleClick(survey[0]);}}
                        >
                          Link Survei
                        </button>

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



    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">

                    {/* {(detailResponden.responden.is_submit == 1)? "Survey Finished" : "Open"} */}
                      Link Survei
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                      {/* {detailResponden.responden.waktu_isi} */}

                      {siteUrl}survei/{id}/{seletcedData}/do
                      </p>
                    </div>
                  </div>
                </div>

                

                {/* <div className="mt-5">
                  
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>

                </div> */}

                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <a
                    href={`${siteUrl}survei/${id}/${seletcedData}/do`}
                    target='_blank'
                    rel="noreferrer"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                  >
                    Menuju link survei
                  </a>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>




    <Transition.Root show={openModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      Tambah Responden
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Anda akan diarahkan ke halaman survey (surveiku.com), silahkan isi sampai <span className='font-bold'>Data Responden</span> saja, setelah itu anda bisa kembali ke halaman ini.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <a
                    href={`${siteUrl}survei/${id}`}
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                    target="_blank"
                    rel='noreferrer'
                  >
                    Oke, Tambah Responden
                  </a>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={() => setOpenModal(false)}
                    ref={cancelButtonRef}
                  >
                    Batal
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>



    </LayoutMain>
    </>
  )
}

export default RespondenSurvei