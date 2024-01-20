import React, { useState } from 'react'
import { MdSyncDisabled } from 'react-icons/md'
import styled from 'styled-components'

export default function HoverDown({elements,name}) {
    const [isDown,setIsDown] = useState(false);
  return (
    <DHoverCont  isVisible={isDown} onMouseLeave={()=>{setIsDown(false)}}>
        
        <DHoverTitle onMouseEnter={()=>{setIsDown(true)}}>{name}</DHoverTitle>
        <DHoverItems isVisible={isDown}>
            {elements}
        </DHoverItems>
    </DHoverCont>
  )
}


const DHoverCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border-radius: 27px; */
    background: ${props=>props.isVisible?'linear-gradient(45deg, #0f0f3b, #020212)':'none'};
    width: 14rem;
    padding-bottom: 1.4rem;
    margin-top: 0;
    transition: width 0.3s;
    @media (max-width: 1190px) {
    width: 12rem;
    }
    @media (max-width: 998px) {
        width: 9rem;
  }
    `
const DHoverTitle = styled.h1`
    color: #aeade7;
    cursor: pointer;
    user-select: none;
    font-size: 27px;
    text-transform: uppercase;
    white-space: nowrap;
    @media (max-width: 1190px) {
    font-size: 20px;
    }
    `
const DHoverItems = styled.ul`
    display: ${props=>props.isVisible?'flex':'none'};
    text-transform: capitalize;
    flex-direction: column;
    gap: 1rem;
    white-space: nowrap;
    padding:0;
    margin: 0;
`
const DHoverItem = styled.li`
    
`