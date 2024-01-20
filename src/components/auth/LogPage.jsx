import React, { useState } from 'react'
import styled from 'styled-components'
import SignUp from './Signup'
import Login from './LogIn'



export default function LogPage({ifUser}) {
    const [isUser,setIsUser] = useState(ifUser)
  return (
    <AuthCont>
        {isUser?<Login />:<SignUp />}

        
        <Change>{isUser?<P>New user? <Link  onClick={()=>{setIsUser(!isUser)}}>Sign Up</Link></P>:<P>Already signed up? <Link onClick={()=>{setIsUser(!isUser)}}>Login</Link></P>}</Change>
    </AuthCont>
    
  )
}


const AuthCont = styled.div`
    height: 25rem;
    width: 22rem;
    background-color: #053b67;
    position: fixed;
    margin-left: 40vw;
    margin-top: 20vh;
    z-index: 10;
    backdrop-filter: blur(10px);
    border-radius: 18px;

`

const Change = styled.div`
text-align: center;
    
`

const P = styled.p`
    color: white;

    
`
const Link = styled.a`
    color: steelblue;
    text-decoration: none;
    cursor: pointer;

    &:hover{
        text-decoration: underline;

    }
`