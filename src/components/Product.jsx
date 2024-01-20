import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

export default function Product({image,price,title,id}) {
    const navigate = useNavigate();
  return (
    <ProductCont onClick={()=>{navigate(`/product/${id}`)}}>
        <ProductImage src={image} />
        <Data>

        <ProductTitle>{title}</ProductTitle>
        <Price>${price}</Price>
        </Data>
    </ProductCont>
  )
}

const ProductCont = styled.div`
    width: 16rem;
    min-height: 28rem;
    border: 2px solid grey;
    display: flex;
    background-color: white;
    box-shadow: rgba(231, 214, 214, 0.35) 0px 10px 25px;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
    cursor: pointer;
    width: 18rem;
    height: 24rem;
`
const ProductTitle = styled.p`
    font-size: 1.3rem;
    text-align: center;
    color: #8b87d3;
    `
const ProductImage = styled.img`
    width: 85%;
    margin: auto;
    padding-bottom: 3rem;
    transition: width 0.3s;
    overflow: hidden;
    &:hover{
        width: 95%;
    }

    `
const Price = styled.p`
    font-weight:bold;
    text-align: center;
    color: #9a9494;

`
const Data = styled.div`
    display: flex;
    flex-direction: column;
`