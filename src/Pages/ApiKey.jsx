import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios';
import LayoutMain from '../Layouts/LayoutMain'
import ReactLoading from 'react-loading'

import {useDataUser} from '../Store/State'

const ApiKey = () => {

    const {userData, loadingData} = useDataUser(state => state)

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Api Key</title>
        <link rel="canonical" href="https://lefi.com/" />
    </Helmet>
    <LayoutMain>

    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Your Api Key</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be required in header when you access api url.
          </p>

         

            <div className="col-span-full mt-10">
              <label htmlFor="apikey" className="block text-sm font-medium leading-6 text-gray-900">
                API KEY
              </label>
                {loadingData ?<ReactLoading type="spin" color="#4F46E5" width={50} /> :
                <>
              <div className="mt-2">
                <textarea
                  id="apikey"
                  name="apikey"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={userData.api_key}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Api Key bersifat rahasia, tidak untuk disebarluaskan. Segala data yang dikelola menjadi tanggung jawab pemegang Api Key.</p>
                </>
                }
            </div>

           

            
          </div>
        </div>

        

        

      
        </form>

    
                            
    </LayoutMain>
    </>
  )
}

export default ApiKey