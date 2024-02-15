import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import LayoutMain from '../Layouts/LayoutMain'
import ReactLoading from 'react-loading'
import { PaperClipIcon } from '@heroicons/react/20/solid'

import {useDataUser} from '../Store/State'

const Profile = () => {

    const {userData, loadingData, userMake} = useDataUser(state => state)


  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Profile</title>
        <link rel="canonical" href="https://lefi.com/" />
    </Helmet>
    <LayoutMain>
    
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-6 sm:px-6">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Your Profile</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
      </div>
      <div className="border-t border-gray-100">
      {loadingData ?<ReactLoading type="spin" color="#4F46E5" width={50} /> :
        <dl className="divide-y divide-gray-100">

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userData.name}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">Application for</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">API Surveiku</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userData.email}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">Assign to user</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userMake.company}</dd>
          </div>
          
        </dl>
      }

      </div>
    </div>


    
    
    
       
    </LayoutMain>
    </>
  )
}

export default Profile