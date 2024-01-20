import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components';
import Product from '../components/Product';
import { MoonLoader } from 'react-spinners';

export default function Categorized() {
  const [catData, setCatData] = useState(null);
  const {thisCategory} = useParams();
  const [isLoading,setIsLoading] = useState(false);
  console.log('rendered');
  console.log(catData);

  useEffect(() => {
    const getCatData = async()=>{     
      setIsLoading(true)
      const response = await fetch(`https://dummyjson.com/products/category/${thisCategory}`);
      const thisData = await response.json();
      console.log(thisData.products);
      setCatData(thisData.products);
      setIsLoading(false)
    }
    getCatData();
  
   
  }, [thisCategory])
  
  return (
    <>{catData?
      <CatCont>
      <CatHeading>Category:{thisCategory}</CatHeading>
      <CatCollectionsContainer>
        {catData?.map((elem) => {
          
            return (
              <Product
              key={elem.id}
              image={elem.thumbnail}
              title={elem.title}
              price={elem.price}
              id={elem.id}
              />
              );
            
          })}
      </CatCollectionsContainer>
     </CatCont>
      :<Loading><MoonLoader color="#120fed" /></Loading>
      }
      
    </>
  )
}

const CatCont = styled.div`
  background-color: #07063d;
`
const CatHeading = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 3rem;
  font-weight: 600;
  color: white;
`

const CatCollectionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  gap: 38px;
  justify-content: center;
  width: 80%;
`;
const Loading = styled.div`
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center;
`