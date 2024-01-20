import React, { useState } from 'react'
import styled from 'styled-components'
import { FaBars} from "react-icons/fa";
import SearchComp from './SearchComp';


export default function Dropdown({elements,isPortrait}) {
    const [expand,setExpand] = useState(false)
    return (
    <DropDownCont isExpand = {expand}>
        <FaBars style={{margin: '18px'}} fontSize=  {36} color= 'white' cursor={'pointer'} onClick={()=>{setExpand(!expand)}}/>
        {expand?
        <>
            
        <ElemList>
         <SearchComp isP={true}/>

        
        <div style={{display : 'flex'}}>
        {elements}


        </div>
        </ElemList>
        
        </>
        :null}
    </DropDownCont>
  )
}

const DropDownCont = styled.div`
    display: flex;
    /* flex-direction: column; */
    gap: 8px;
    order: -1;
    
    
    `
const ElemList = styled.div`
    display: flex;
    transition: all 0.3s;
    background-color: #191856;
    margin: 0 auto;
    margin-top: 0;
    padding-top: 0;
    gap:8px    ;
    top: 5rem;
    width: 100%;
    position: absolute;
    left: 0;
    text-align: center;
    flex-direction: column;
    >*{
        font-size: 1.5rem;
    }
`
