import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router';
import { addDoc,collection } from 'firebase/firestore';
import {db} from "../firebase";
// import { useDispatch } from 'react-redux';
import { MoonLoader } from 'react-spinners';
import toast, { Toaster } from 'react-hot-toast';



export default function BuyProduct() {
    const [productData , setProductData] = useState(null);
    const {id} = useParams();
    const notify = 

    // const dispatch = useDispatch();
    
    useEffect(() => {
        const getThisData = async ()=>{
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`)
                const productData = await response.json();
                setProductData(productData);
                console.log(productData);
                
            } catch (error) {
                console.error(error)
            }
        }   
        getThisData();
    }, [])

    
    const addProduct = async (product)=>{
            
        try {
            toast.loading('adding',{duration: '90'})
            const productRef = collection(db,"products");
            await addDoc(productRef,{...productData, count: 1})
            toast.success('Added to cart')
        } catch (error) {
            console.error(error)
        }

        }
    
    
  return (
    <>{productData?
    <PContainer>
        <PImage src={productData.thumbnail}>
        </PImage>
        <PInfo>
            <Toaster />
            <PTitle>{productData.title}</PTitle>
            <PRating>Rated {productData.rating.rate}</PRating>
            <PPRice>${productData.price}</PPRice>
            <PDesc>{productData.description}</PDesc>
            <div><PButton onClick={addProduct}>Add to cart</PButton></div>   
        </PInfo>
    </PContainer>:<Loading><MoonLoader color="#120fed" /></Loading>}
    </>
  )
}


const PContainer = styled.div`
    display: flex;
    width: 80%;
    margin: 3rem auto;
    gap: 4rem;
`

const PImage = styled.img`
    width: 34%;
`
const PInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
const PTitle = styled.h1`
    font-size: 3rem;
    color: #9a99c9;
`
const PRating = styled.p`
    font-size: 18px;
    color: #9997c4;
    `
const PPRice = styled.p`
    font-weight: 600;
    color: #b5b5b5;
    
`
const PDesc = styled.p`
    color: #b6b5d0;

`
const Loading = styled.div`
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center;
`
const PButton = styled.button`
  padding: 1rem 3rem;
  background-color: #5f5fc2;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
    font-size: 1rem;
    border-radius: 32px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s;
  &:hover{
    background-color: #4f4fad;
}
&:active{
    background-color: #1e1e67;
}
`;

