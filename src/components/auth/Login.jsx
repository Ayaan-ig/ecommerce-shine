import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import {auth} from "../../firebase"
import styled from 'styled-components'
import toast, { Toaster } from 'react-hot-toast';


export default function Login() {
    const [pass,setPass] = useState('');
    const [email,setEmail] = useState('');

    const logIn = (e) =>{
        e.preventDefault();

        signInWithEmailAndPassword(auth,email,pass)
        .then((userCredential) =>{
            toast.success('Login successfully')

        }).catch((error)=>{
            toast.error("Please add valid credentials")

        } )
    }
    return (
        <Cont onSubmit={logIn}>
        <Toaster />
       
        <InputCont>
        <Label>E-mail</Label>
        <Input onChange={(e)=>{setEmail(e.target.value)}} type='email' />
        </InputCont>
        
        <InputCont>
        <Label>Password </Label>
        <Input onChange={(e)=>{setPass(e.target.value)}} type='password'/>
        </InputCont>

        <div>
        <LoginButton>
        Login
        </LoginButton>
        </div>
        
    </Cont>
  )
}


const Cont = styled.form`
    display: flex;  
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin: 2.4rem auto;
    width: 100%;    
`

const InputCont = styled.div`
    position: relative;

`
const Label = styled.label`
    position: absolute;
    color: #c4d0dd;
    top: -12px;
    left: 13px;
    font-weight: 600;
    padding: 0px 3px;
    background-color: #053b67;
    `
const Input = styled.input`
    background-color: transparent;
    height: 2.3rem;
    width: 16rem;
    color: #ffffff;
    outline: none;
    border: 3px solid #2b6392;
    border-radius: 24px;
    padding-left: 14px;
    &:hover{
        border: 3px solid #427cac;
    }
    &:focus{
        border: 3px solid #5b91be;
    }

`
const LoginButton = styled.button`
    background-color: transparent;
    border: 3px solid #b9d5b9;
    color: #abceab;
    border-radius: 12px;
    padding: 6px 16px;
    
`