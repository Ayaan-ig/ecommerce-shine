import React, { useState } from 'react'
import styled from 'styled-components';
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";



export default function SearchComp({isP}) {
    const [search, setSearch] = useState("");
    const [searchActive, setSearchActive] = useState(false);
    const navigate = useNavigate();


  return (
    <SearchCont isP={isP}>
          <SearchInput
            placeholder="search.."
            isactive={searchActive}
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              navigate(`/search/${e.target.value}`);
            }}
          />
          <CiSearch
            onClick={() => {
              document.querySelector("input").focus();
              setSearchActive(!searchActive);
            }}
            style={{
              color: "white",
              cursor: "pointer",
              margin:'0px',
              padding:'0px',
            //   position: "absolute",
              right: "8px",
              top: "4px",
            }}
            fontSize={32}
          />
        </SearchCont>
  )
}


const SearchCont = styled.div`
  display: flex;
  /* margin-right: 2px; */
  position: ${props => props.isP ? "static" : "absolute"};
  /* background-color: ${props => props.isP ? "red" : "blue"}; */
  /* position: absolute; */
  top: -9px;
  right: 8rem;
  margin: 2rem auto;

 

`;
const SearchInput = styled.input`
  height: 2.5rem;
  border-radius: 21px;
  outline: none;
  font-size: 1.3rem;
  background-color: #0c0b36;
  color: #cbcbef;
  /* margin-right: 2.5rem; */

  padding-left: ${(props) => (props.isactive ? "10px" : "0rem")};
  padding-right: ${(props) => (props.isactive ? "2rem" : "0rem")};
  width: ${(props) => (props.isactive ? "16rem" : "0rem")};
  border: ${(props) => (props.isactive ? "3px solid #31316b" : "none")};
  transition: width 0.3s;
  &::placeholder {
    color: #7878a9;
    font-size: 1.2rem;
    padding-left: 0.4rem;
  }
  &:hover {
    border: 3px solid #414191;
  }
  &:focus {
    border: ${(props) => (props.isactive ? "3px solid #5d5dc6" : "none")};
  }
`;