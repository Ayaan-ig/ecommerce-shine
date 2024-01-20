import React, { useState } from 'react'
import styled from 'styled-components'
import CartItem from '../components/CartItem'
import { useEffect } from 'react'
import { collection,getDocs,doc,deleteDoc  } from 'firebase/firestore'
import { MoonLoader } from 'react-spinners'

import { db } from '../firebase'

export default function Cart({isLoggedIn}) {
  const [cardData,setCardData] = useState(null)
  const [cartLoading,setCartLoading] = useState(false);
  const [render, setRender] = useState(false)

  useEffect(()=>{
    const getProduct = async ()=>{
      try {
        setCartLoading(true)
        const pRef =collection(db,"products");
        const pArray = await getDocs(pRef);
        setCardData(pArray)
        setCartLoading(false)
        
      } catch (error) {
        console.error(error);
      }
    }
    getProduct();
  },[render])

  const deleteProduct = async(id) =>{ 
    try {
      const thisPref = doc(db,"products",id)   
      await deleteDoc(thisPref);
      setRender(!render)
    } catch (error) {
      console.error(error); 
    }
  }


  
  return (
     <CartCont>
      <CartItems>
        
        

          {cardData?cardData.docs.map((elem)=>(
          <CartItem style = {{display: 'none'}} onDelete={()=>{deleteProduct(elem.id)}} image={elem.data().thumbnail} price={elem.data().price} title={elem.data().title} quantity={elem.data().count} key={elem.data().id}/>
          )):<Loading><MoonLoader color="#120fed" /></Loading>
        }
        {cardData?.docs.length == 0? <EmptyCart>Add some items</EmptyCart>:null}

        
        
      </CartItems>
      <FinalAmount>

      </FinalAmount>


     </CartCont>
  )
}


const CartCont = styled.div`
    width: 100%;
    display: flex;
    
    
    `
const CartItems = styled.div`
   width: 64%;
   display: flex;
   flex-direction: column;
   background-color: #030330;;
   border-radius: 1%;
   overflow: scroll;
   height: calc(100vh - 81px);
   &::-webkit-scrollbar{
    display: none;
   }

`

const FinalAmount = styled.div`
    height: calc(100vh - 81px);
    width: 36%;
    background-color: #16164d;

`
const EmptyCart = styled.p`
  margin: 4rem auto;
  font-size: 2.5rem;
  color: white;
`

const Loading = styled.div`
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center;
`