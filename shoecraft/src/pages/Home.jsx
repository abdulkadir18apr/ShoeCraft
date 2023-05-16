import React from 'react'

import {Header} from "../components/Header"
import { Catalogue } from '../components/Catalogue '

import "./css/home.css"
import { Heading } from '../components/Heading'
import { Trending } from '../components/Trending'
import { Footer } from '../components/Footer'

export  function Home() {
  return (
    <div className='home'>
             <Header/>

             <Heading heading={"Browse Our Collections"}/>
    
        <Catalogue/>
        <Heading heading={"Hot Picks: Trending and Featured Shoes for Style Enthusiasts!"}/>
        <Trending/>
   <Footer/>
    </div>
  )
}
