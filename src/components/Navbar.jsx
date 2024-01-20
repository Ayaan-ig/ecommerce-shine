import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router";
import LogPage from "./auth/LogPage";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import HoverDown from "./Hoverdown";
import SearchComp from "./SearchComp";

export default function Navbar({ isPortrait, setIsLoggedIn, isLoggedIn }) {
  const [authUser, setAuthUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const [dropLog, setDropLog] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const menCategories = ['skincare','mens-shirts','mens-shoes','mens-watches','sunglasses','fragrances']
  const womenCategories = ['skincare','womens-watches','womens-bags','womens-jewellery','sunglasses','tops','fragrances']
  const electronicsCategories = ['smartphones','laptops']
  const HomeAndLivingCategories = ['womens-watches','womens-bags','womens-jewellery','tops','groceries','home-decoration','furniture','motorcycle','lighting']
  const auth = getAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setIsAuth(false);
        setIsLoggedIn(true);
      } else {
        setAuthUser(null);
      }
    });
  }, [authUser]);

  return (
    <>
      {isAuth ? (
        <>
          <LogPage ifUser={isAuth == "login"} />
          <BlurContent
            onClick={() => {
              setIsAuth("");
            }}
          />
        </>
      ) : null}

      <NavCont>
        <LogoCont
          onClick={() => {
            navigate("/");
          }}
        >
          <LogoText>shine</LogoText>
        </LogoCont>
        {isPortrait ? (
          <Dropdown isPortrait = {isPortrait}
            elements={[
              
              <HoverDown name={'men'} elements={menCategories.map((elem)=>(
                <NavItem onClick={()=>{navigate(`/category/${elem}`)}} key={menCategories.indexOf(elem)}>{elem}</NavItem>  ))}/>,
                
              
              
  
                <HoverDown name={'women'} elements={womenCategories.map((elem)=>(
                  <NavItem onClick={()=>{navigate(`/category/${elem}`)}} key={womenCategories.indexOf(elem)}>{elem}</NavItem>  ))}/>,
              
              
              <HoverDown name={'accessories'} elements={HomeAndLivingCategories.map((elem)=>(
                <NavItem onClick={()=>{navigate(`/category/${elem}`)}} key={HomeAndLivingCategories.indexOf(elem)}>{elem}</NavItem>  ))}/>,
  
              
              
              <HoverDown name={'electronics'} elements={electronicsCategories.map((elem)=>(
                <NavItem onClick={()=>{navigate(`/category/${elem}`)}} key={electronicsCategories.indexOf(elem)}>{elem}</NavItem>  ))}/>
            ]}
            />
            ) : (
              <NavItems>
            
            <HoverDown name={'men'} elements={menCategories.map((elem)=>(
              <NavItem onClick={()=>{navigate(`/category/${elem}`)}} key={menCategories.indexOf(elem)}>{elem}</NavItem>  ))}/>
              
            
            

              <HoverDown name={'women'} elements={womenCategories.map((elem)=>(
                <NavItem onClick={()=>{navigate(`/category/${elem}`)}} key={womenCategories.indexOf(elem)}>{elem}</NavItem>  ))}/>
            
            
            <HoverDown name={'accessories'} elements={HomeAndLivingCategories.map((elem)=>(
              <NavItem onClick={()=>{navigate(`/category/${elem}`)}} key={HomeAndLivingCategories.indexOf(elem)}>{elem}</NavItem>  ))}/>

            
            
            <HoverDown name={'electronics'} elements={electronicsCategories.map((elem)=>(
              <NavItem onClick={()=>{navigate(`/category/${elem}`)}} key={electronicsCategories.indexOf(elem)}>{elem}</NavItem>  ))}/>

            
      
           
          </NavItems>
        )}
        {isPortrait?null:
            
              <SearchComp isP={false}/>
             
              }
        {authUser ? (
          <>
          
            <Accounting>
              {!showUser ? <></> : <UserInfo>{authUser.email}</UserInfo>}
              <CiUser
                onClick={() => {
                  setDropLog(!dropLog);
                }}
                onMouseEnter={() => {
                  setShowUser(true);
                }}
                onMouseLeave={() => {
                  setShowUser(false);
                }}
                cursor={"pointer"}
                color="#242284"
                fontSize={35}
              />
              {!dropLog ? (
                <></>
              ) : (
                <>
                  <CartCont
                    onClick={() => {
                      navigate("/cart");
                    }}
                  >
                    <CiShoppingCart color="white" fontSize={38} />
                    <ItemCount>11</ItemCount>
                  </CartCont>
                  <SignOutButton
                    onClick={() => {
                      const auth = getAuth();
                      signOut(auth)
                        .then(() => {
                          setIsLoggedIn(false);
                          setAuthUser(null);
                          navigate("/");
                        })
                        .catch((error) => {
                          // An error happened.
                          console.error(error);
                        });
                    }}
                  >
                    Sign Out
                  </SignOutButton>
                </>
              )}{" "}
            </Accounting>
          </>
        ) : (
          <Accounting>
            <CiUser
              onClick={() => {
                setDropLog(!dropLog);
              }}
              cursor={"pointer"}
              color="white"
              fontSize={35}
              
            />
            {!dropLog ? (
              <></>
            ) : (
              <>
                <SignUpButton
                  isPortrait={isPortrait}
                  onClick={() => {
                    setIsAuth("singup");
                  }}
                >
                  Sign Up
                </SignUpButton>
                <LoginButton
                  isPortrait={isPortrait}
                  onClick={() => {
                    setIsAuth("login");
                  }}
                >
                  Login
                </LoginButton>
              </>
            )}{" "}
          </Accounting>
        )}
      </NavCont>
    </>
  );
}

const NavCont = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  align-items: center;
  background-color: #07063d;
  position: relative;
`;

const LogoCont = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 2rem;
  margin-top:8px;
  @media (max-width: 840px) {
    margin: 4px auto;
  
  }
`;
const LogoImg = styled.div`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid #f00; /* Adjust the color as needed */
  transform: rotate(35deg);
  display: inline-block;
  margin: 20px;
  border-radius: 20px; /* Adjust the radius for rounded corners */

  @media (max-width: 1100px) {
    padding: 0;
    height: 3rem;
  }
`;

const LogoText = styled.h2`
  color: #ffffff;
  font-size: 3rem;
  font-family: "Dancing Script", cursive;
  text-transform: lowercase;
  font-weight: 400;
  user-select: none;
  transition: 0.3s;
  

  @media (max-width: 1190px) {
    font-size: 2.5rem;
  }
`;

const NavItems = styled.ul`
  /* margin-left: 3rem; */
  list-style-type: none;
  display: flex;
  transition: gap 0.3s;
  position: absolute;
  top: 1.3rem;
  left: 7.4rem;
  gap: 1rem;
  margin-top: 0;
  transition: all 0.3s;
  
  @media (max-width: 1236px) {
    gap: 0rem;
  }
  @media (max-width: 1190px) {
    top: 1rem;
  left: 3.4rem;
  }
  @media (max-width: 998px) {
  }
  `;

const NavItem = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Barlow&family=Titillium+Web&display=swap");
  color: #d6d5ea;
  cursor: pointer;
  user-select: none;
  padding: 0;
  font-size: 20px;
  width: 10rem;
 
  transition: transform 0.3s;
  font-family: "Titillium Web", sans-serif;
  margin: 0;
  &:hover {
    transform: scaleX(1.1);
    color: white;
    
  }
  &:active {
    color:#4c4992;
;
    
  }
  @media (max-width: 1190px) {
    font-size: 17px;
  }
`;
const Accounting = styled.div`
  display: flex;
  width: 127px;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 0.2rem;
  top: 1.3rem;
  overflow: visible;
`;
const LoginButton = styled.button`
  border-radius: 24px;
  border: 1px solid black;
  text-align: center;
  padding: ${(props) => (props.isvertical ? "6px 11px" : "5px 24px")};
  background-color: transparent;
  cursor: pointer;
  padding: none;
  font-size: 1rem;
  color: steelblue;
  border: 1px solid steelblue;
  &:hover {
    transform: scale(1.05);
  }
`;
const SignUpButton = styled.button`
  border: 1px solid black;
  text-align: center;
  color: steelblue;
  border: none;
  font-weight: 600;
  padding: ${(props) => (props.isvertical ? "6px 11px" : "12px 24px")};
  background-color: transparent;
  cursor: pointer;
  font-size: 1.1rem;
  white-space: nowrap;
`;
const SignOutButton = styled.button`
  border: 1px solid black;
  text-align: center;
  margin: auto;
  color: steelblue;
  border: none;
  font-weight: 600;
  padding: ${(props) => (props.isvertical ? "6px 11px" : "12px 36px")};
  background-color: transparent;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 1rem;
`;

const CartCont = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 1rem 0rem 0rem 0rem;
`;

const ItemCount = styled.div`
  width: 16px;
  height: 16px;
  background-color: red;
  border-radius: 50%;
  color: white;
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  right: -9px;
  font-size: 8px;
`;

const BlurContent = styled.div`
  background-color: #000000;
  height: 100vh;
  z-index: 3;
  position: absolute;
  width: 100vw;
  opacity: 0.84;
`;


const UserInfo = styled.div`
  color: white;
  width: 4rem;
  letter-spacing: nowrap;
  position: absolute;
  letter-spacing: nowrap;
  width: 9rem;
  top: -1rem;
  right: 0.4rem;
  text-align: center;
  font-size: 12px;
  color: #3a3986;
`;

