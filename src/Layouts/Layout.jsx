import React from 'react'
import { motion, useScroll } from "framer-motion"
import ScrollToTop from "react-scroll-to-top"

const Layout = ({children}) => {

    const { scrollYProgress } = useScroll()

  return (
    <>
        <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
        />
        <div className='text-center'>
            <ScrollToTop smooth color="#6f00ff" />
        </div>
        
        
        <main>{children}</main>
    </>
  )
}

export default Layout