import React, { useState } from 'react'
import styled from 'styled-components'
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";



export default function CartItem({image,title,price,quantity,onDelete}) {
    const [qty, setQty] = useState(quantity);

  
  return (
    <ItemCont>
        <ItemImage src={image}/>
        <ItemTitle>{title}</ItemTitle>
        <ItemPrice>${price}</ItemPrice>
        <Quantity><FaPlus /> <p style={{display:'flex',alignItems:'center',color:'steelblue'}}>Quantity: {qty}</p><FaMinus /></Quantity>
        <MdDelete onClick={onDelete} cursor={'pointer'} fontSize={25}/>

    </ItemCont>
  )
}


const ItemCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem auto;
    

`

const ItemImage = styled.img`
    height: 7rem;
    
`
const ItemTitle = styled.h3`
    
`
const ItemPrice = styled.p`
        font-size: 23px;
        color: #4f5108;
    
`
const Quantity = styled.div`
    display: flex;
    gap: 6px;
`
const DeleteBtn = styled.button`
    
`