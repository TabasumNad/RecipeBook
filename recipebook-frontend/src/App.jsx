import { useState } from 'react'
import './App.css'
import Registration from './Components/Registration'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUP'
import Log from './Components/Log'
import Home from './Components/Home'
import Nav from './Components/Nav'
import SaveRecipe from './Components/SaveRecipe'
import CreateRecipe from './Components/CreateRecipe'

function App() {
  

  return (
   <BrowserRouter>
   {/* <Nav/> */}
   <Routes>
    <Route path ='/register' element = {<SignUp/>}></Route>
    <Route path ='/login' element = {<Log/>}></Route>
    
    <Route path ='/' element = { <Home/>}></Route> 
    <Route path ='/save-recipe' element = { <SaveRecipe/>}></Route> 
    <Route path ='/create-recipe' element = { <CreateRecipe/>}></Route> 
   </Routes>
    
   </BrowserRouter>
  )
}

export default App
