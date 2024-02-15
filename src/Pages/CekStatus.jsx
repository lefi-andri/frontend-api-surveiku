import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios';
import LayoutMain from '../Layouts/LayoutMain'

import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon,XMarkIcon } from '@heroicons/react/24/outline'

import {useDataUser} from '../Store/State'
import ReactLoading from 'react-loading'

const CekStatus = () => {

    const {userData, loadingData} = useDataUser(state => state)

    const [open, setOpen] = useState(false)

    const api = import.meta.env.VITE_API_URL

    const [slug, setSlug] = useState('');
    const [uuid, setUuid] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [dataHasil, setHasil] = useState([]);

    const [errors, setErrors] = useState([]);

    const token = localStorage.getItem("token")

    const storePost = async () => {

        
        await axios.get(`${api}api/v1/manage-survey/get-status-responden/${slug}/${uuid}`, {
            headers: {
              'x-api-key': userData.api_key
            }
          })
            .then(response => {
                
                setHasil(response.data);
                setOpen(true);

                // console.log(response.data);
            })
            .catch(error => {
                
                setErrors(error.response.data);
            })
    }

    useEffect(() => {
        
        // setApiKey(userData.api_key)
        
      }, []);

    

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Cek Status</title>
        <link rel="canonical" href="https://lefi.com/" />
    </Helmet>
    <LayoutMain>
    
    <div>
      <div className="space-y-12">
        

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Cek Status</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Anda dapat melakukan pengecekan status responden dengan parameter yang diperlukan.</p>


          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Slug Survey (Param)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setSlug(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                UUID Responden (Param)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setUuid(e.target.value)}
                />
              </div>
            </div>
            
            {loadingData ?<ReactLoading type="spin" color="#4F46E5" width={50} /> :
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                API Key (Header)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-300"
                //   onChange={(e) => setApiKey(e.target.value)}
                  value={userData.api_key}
                  disabled
                />
              </div>
            </div>
            }

            

          </div>
        </div>

        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        
        <button
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={()=> { storePost();}}
        >
          Check
        </button>
      </div>
    </div>
                            
    </LayoutMain>

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                {
                        (dataHasil.status == true) ? 
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                        </div>
                        : 
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                            <XMarkIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                        </div>
                }
                  
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    {
                        (dataHasil.status == true) ? "Completed" : "Uncompleted"
                    }
                      
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {dataHasil.message}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setOpen(false)}
                  >
                    Go back
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

    </>
  )
}

export default CekStatus