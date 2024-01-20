import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BuyProduct from './pages/BuyProduct'
import Categorized from './pages/Categorized'
import Cart from './pages/Cart'
import Search from './pages/Search'

function App() {
  const [data,setData] = useState(null);
  const [myWidth,setMyWidth] = useState(window.innerWidth);
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  
  window.addEventListener('resize',()=>{setMyWidth(window.innerWidth);})


  useEffect(()=>{   
    const getData = async ()=>{
      try {
        const response = await fetch('https://dummyjson.com/products');
        const thisData = await response.json();
        setData(thisData.products)
      } catch (error) {
        console.error(error)
      }

    }
    getData();
  },[])
  return (
    <>

      <BrowserRouter>
      <Navbar isPortrait={myWidth < 840} isLoggedIn={isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>
      <Routes>
    
        <Route path='/search/:query' element= {<Search isPortrait={myWidth < 900}/>} />
        <Route path='/search/*' element= {<Home data = {data} isPortrait={myWidth < 900}/>} />
    
        <Route path='/' element= {<Home data = {data} isPortrait={myWidth < 900}/>}/>
        <Route path = '/product/:id' element = {<BuyProduct />} />
        <Route path = '/category/:thisCategory' element = {<Categorized />} />
        <Route path = "cart" element= {<Cart isLoggedIn= {isLoggedIn}/>}/>
      </Routes>
      
    
      </BrowserRouter>
    </>
  ) 
}

export default App


