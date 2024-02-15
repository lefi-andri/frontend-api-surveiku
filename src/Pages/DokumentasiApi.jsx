import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios';
import LayoutMain from '../Layouts/LayoutMain'

import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

import responseLogin from '../assets/response-login.jpg'
import paramsLogin from '../assets/params-login.jpg'
import paramsDetailUser from '../assets/param-detail-user.jpg'
import responseDetailUser from '../assets/response-detail-user.jpg'

const DokumentasiApi = () => {

    const api = import.meta.env.VITE_API_URL

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Dokumentasi Api</title>
        <link rel="canonical" href="https://lefi.com/" />
    </Helmet>
    <LayoutMain>
    
    <div className="bg-white px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">Dokumentasi Api &#9757;</p>

        <div className="mt-5 max-w-2xl">

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Login</h2>
          <p className="mt-6">

            Login ini digunakan untuk melakukan autentikasi
            
            <div className='mb-3'>
                <div className='text-white bg-gray-800 p-2 w-11 text-xs text-center rounded-t-md'>HTTP</div>
                <div className='p-2 bg-gray-900 text-white text-sm shadow rounded-r-md rounded-b-md'>[GET] {api}login</div>
            </div>

            <div className='mb-3'>
                Body :
                <img src={paramsLogin} alt='' />
            </div>

            <div>
                Sample Response :
                <img src={responseLogin} alt='' />
            </div>

            

            
          </p>
        </div>
        
        <div className="mt-5 max-w-2xl">

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Detail user</h2>
          <p className="mt-6">

          Digunakan untuk melihat detail user
            
            <div className='mb-3'>
                <div className='text-white bg-gray-800 p-2 w-11 text-xs text-center rounded-t-md'>HTTP</div>
                <div className='p-2 bg-gray-900 text-white text-sm shadow rounded-r-md rounded-b-md'>[GET] {api}user</div>
            </div>
            
            <div className='mb-3'>
                Body :
                <img src={paramsDetailUser} alt='' />
            </div>

            <div>
                Sample Response :
                <img src={responseDetailUser} alt='' />
            </div>
          </p>
        </div>
        
        <div className="mt-5 max-w-2xl">

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Logout</h2>
          <p className="mt-6">
            {api}logout <br/>
            Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In
            amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie.
            Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat
            ac. Cras fermentum convallis quam.
          </p>
        </div>
        
        <div className="mt-5 max-w-2xl">

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Menampilkan data semua survei</h2>
          <p className="mt-6">
            {api}manage-survey <br/>
            Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In
            amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie.
            Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat
            ac. Cras fermentum convallis quam.
          </p>
        </div>
        
        <div className="mt-5 max-w-2xl">

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Menampilkan data responden per survei</h2>
          <p className="mt-6">
            {api}manage-survey/semua-responden/&#10100;slug&#10101;<br/>
            Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In
            amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie.
            Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat
            ac. Cras fermentum convallis quam.
          </p>
        </div>
        
        <div className="mt-5 max-w-2xl">

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Menampilkan data detail responden</h2>
          <p className="mt-6">
            Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In
            amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie.
            Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat
            ac. Cras fermentum convallis quam.
          </p>
        </div>
        
        
        <div className="mt-5 max-w-2xl">

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Cek status survei responden</h2>
          <p className="mt-6">
            Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In
            amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie.
            Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat
            ac. Cras fermentum convallis quam.
          </p>
        </div>



        
        <div className="mt-10 max-w-2xl">
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Data types.</strong> Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                blanditiis ratione.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Loops.</strong> Anim aute id magna aliqua ad ad non
                deserunt sunt. Qui irure qui lorem cupidatat commodo.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Events.</strong> Ac tincidunt sapien vehicula erat
                auctor pellentesque rhoncus. Et magna sit morbi lobortis.
              </span>
            </li>
          </ul>
          
        </div>
       
        
      </div>
    </div>

                            
    </LayoutMain>
    </>
  )
}

export default DokumentasiApi