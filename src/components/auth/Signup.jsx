import React from 'react';
import styled from 'styled-components';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase"
import { useState } from 'react';



export default function SignUp() {
    const [name,setName] = useState('');
    const [pass,setPass] = useState('');
    const [email,setEmail] = useState('');


    const signUp = (e) =>{
        e.preventDefault();

        createUserWithEmailAndPassword(auth,email,pass,name)
        .then((userCredential) =>{
            console.log(userCredential);

        }).catch((error)=>{
            console.log(error)

        } )
    }
  return (
    <Cont onSubmit={signUp}>

        <InputCont>
        <Label>Name</Label>
        <Input onChange={(e)=>{setName(e.target.value)}} type='text' />
        </InputCont>


        <InputCont>
        <Label>E-mail</Label>
        <Input onChange={(e)=>{setEmail(e.target.value)}} type='email' />
        </InputCont>
        
        <InputCont>
        <Label>Password</Label>
        <Input onChange={(e)=>{setPass(e.target.value)}} type='password'/>
        </InputCont>

        <div>   
        <SignUpButton>
        Sign Up
        </SignUpButton>
        </div>
        
    </Cont>
  )
}


const Cont = styled.form`
    display: flex;  
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin: 2rem auto;
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
const SignUpButton = styled.button`
    background-color: transparent;
    border: 3px solid #b9d5b9;
    color: #abceab;
    border-radius: 12px;
    padding: 6px 16px;
    
`