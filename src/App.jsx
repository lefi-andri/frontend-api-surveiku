import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
// import { BrowserRouter } from 'react-router-dom'

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'

import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import NotFound from "./Pages/NotFound"
import Users from "./Pages/Users"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import SurveiAnda from "./Pages/SurveiAnda"
import RespondenSurvei from "./Pages/RespondenSurvei"
import Contact from "./Pages/Contact"
import Settings from "./Pages/Settings"
import ApiKey from "./Pages/ApiKey"
import CekStatus from "./Pages/CekStatus"
import CreateResponden from "./Pages/CreateResponden"
import DokumentasiApi from "./Pages/DokumentasiApi"
import SurveikuDocumentation from "./Pages/SurveikuDocumentation"
import ApiDocumentation from "./Pages/ApiDocumentation"
import DocProduct from "./Pages/DocProduct"
import DocTopic from "./Pages/DocTopic"

function App() {
  // const [count, setCount] = useState(0)

  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
      {/* <BrowserRouter> */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/api-key" element={<ApiKey />} />
          <Route path="/dokumentasi-api" element={<DokumentasiApi />} />
          <Route path="/cek-status" element={<CekStatus />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/create-responden/:id" element={<CreateResponden />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/survei-anda" element={<SurveiAnda />} />
          <Route path="/responden-survei/:id" element={<RespondenSurvei />} />
          <Route path="/surveiku-documentation" element={<SurveikuDocumentation />} />
          <Route path="/surveiku-documentation/product" element={<DocProduct />} />
          <Route path="/surveiku-documentation/topic" element={<DocTopic />} />
          <Route path="/api-documentation" element={<ApiDocumentation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* </BrowserRouter> */}
      </AnimatePresence>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
