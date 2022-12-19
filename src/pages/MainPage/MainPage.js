import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Baner, Categories, Head, ShopSwipe} from "../../components"


function MainPage() {
  return (
    <div>
      
      <Baner/>
      
      <Categories/>
      
      <ShopSwipe/>

     
      
    </div>
  )
}

export  {MainPage}