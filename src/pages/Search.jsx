import React from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useState,useEffect } from 'react';
import Product from '../components/Product';

export default function Search({isPortrait}) {
    const [data,setData] = useState(null);
    const params = useParams();
    console.log(isPortrait);


  useEffect(()=>{ 
    const getData = async ()=>{
      try {
        const response = await fetch('https://dummyjson.com/products');
        const thisData = await response.json();
        console.log(thisData.products[0]);  
        setData(thisData.products)
      } catch (error) {
        console.error(error)
      }

    }
    getData();
  },[])
  return (
    <SearchContainer isPortrait={isPortrait}>
        {data?.map((elem) => {
          if (elem.title.toLowerCase().includes(params.query))   {
            return (
              <Product
                key={elem.id}
                image={elem.thumbnail}
                title={elem.title}
                price={elem.price}
                id={elem.id}
              />
            );
          }
        })}
        
        
        
      </SearchContainer>
  )
}





const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  gap: 38px;
  justify-content: center;
  width: 80%;
  background-color: black;
  width: 100%;
  padding-top: 12rem;
  /* padding-top: ${props=>{props.isPortrait?'12rem':''}}; */

`;