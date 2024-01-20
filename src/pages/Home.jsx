import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "../components/Product";

export default function Home({ isPortrait, data }) {
  const [currentData, setCurrentData] = useState(null);
  useEffect(() => {
    setCurrentData(data);
  }, [data]);

  return (
    <>
      <HeroSection isPortrait={isPortrait}>
        <HeroText isPortrait={isPortrait}>
          <HText1>new arrivals only</HText1>
          <HText2>new collections for everyone</HText2>
          <div>
            <HButton>Latest Collection</HButton>
          </div>
        </HeroText>
        {!isPortrait ? <HeroImage src="Assets/hero_image.png" /> : null}
      </HeroSection>
      {/* Arrival Section 1 */}
      <BigContainer>
        <div>
          <NewArrival>new arrival</NewArrival>
        </div>
        <NewCollectionsContainer>
          {currentData?.map((elem) => {
            if (elem.id < 9) {
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
        </NewCollectionsContainer>

        <SecondBannerCont>
          <SBText>
            <SBH>exclusive offers for you</SBH>
            <SBT1>only on best seller products</SBT1>
            <div>
              <SBButton>Check Now</SBButton>
            </div>
          </SBText>
          {!isPortrait ? (
            <SBImage
              src={`${import.meta.env.VITE_PUBLIC_PATH}/Assets/hero_image.png`}
            />
          ) : null}
        </SecondBannerCont>
      </BigContainer>
    </>
  );
}

const HeroSection = styled.div`
  width: 100%;
  height: calc(100vh - 81px);
  background: linear-gradient(0deg, #000000, #07063d);
  display: flex;
  justify-content: ${(props) => (props.isPortrait ? "" : "space-around")};
  align-items: center;
`;
const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 27%;
  margin: ${(props) => (props.isPortrait ? "6rem" : "")};
`;
const HeroImage = styled.img`
  height: 36rem;
`;
const HText1 = styled.p`
  text-transform: uppercase;
  color: black;
  font-weight: 600;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1.5rem;
  color: white;
  white-space: nowrap;
`;
const HText2 = styled.h1`
  text-transform: lowercase;
  font-size: 4rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: white;
`;
const HButton = styled.button`
  background-color: #2b299d;
  padding: 1rem 2.8rem;
  border-radius: 32px;
  cursor: pointer;
  white-space: nowrap;
  color: white;
  font-size: 16px;
  transition: all 0.3s;
  &:hover {
    background-color: #1c1b72;
  }
  &:active {
    background-color: #111057;
  }
`;

const NewArrival = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  width: 100%;
  padding: 2rem 0rem;
  color: #555576;
  @media (max-width: 1128px) {
    font-size: 3rem;
  }
  @media (max-width: 730px) {
    font-size: 2.6rem;
  }
`;
const NewCollectionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  gap: 38px;
  justify-content: center;
  width: 80%;
`;
const SecondBannerCont = styled.div`
  width: 70%;
  height: 37rem;
  background: linear-gradient(
    180deg,
    #2f2b7b 0%,
    #13113d 58%,
    #000000 100%
  );
  margin: 6rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const SBText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 22rem;
  color: #bebcda;
`;
const SBT1 = styled.p`
  text-transform: uppercase;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;
const SBH = styled.h1`
  text-transform: capitalize;
  font-size: 3rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;
const SBButton = styled.button`
  padding: 1rem 3rem;
  background-color: #b8ac25;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1rem;
  border-radius: 32px;
  cursor: pointer;
  white-space: nowrap;
`;
const SBImage = styled.img`
  width: 18rem;
`;

const BigContainer = styled.div`
  width: 100%;
  background-color: black;
`;
