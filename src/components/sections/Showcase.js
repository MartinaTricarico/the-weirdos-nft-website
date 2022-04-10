import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import img1 from "../../assets/Nfts/bighead.svg";
import img2 from "../../assets/Nfts/bighead-1.svg";
import img3 from "../../assets/Nfts/bighead-2.svg";
import img4 from "../../assets/Nfts/bighead-3.svg";
import img5 from "../../assets/Nfts/bighead-4.svg";
import img6 from "../../assets/Nfts/bighead-5.svg";
import img7 from "../../assets/Nfts/bighead-6.svg";
import img8 from "../../assets/Nfts/bighead-7.svg";
import img9 from "../../assets/Nfts/bighead-8.svg";
import img10 from "../../assets/Nfts/bighead-9.svg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const move = keyframes`
0% {transform: translateX(100%)};
100% {transform: translateX(-100%)};
`;

const Row = styled.div`
  /* background-color: lightblue; */
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} 20s linear infinite ${(props) => props.direction};
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border-radius: 2px solid ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }

  h1 {
    font-size: ${(props) => props.theme.fonmd};
    color: ${(props) => props.theme.body};
  }
`;

const NftItem = ({ img, number = 0, price = 0 }) => {
  return (
    <ImgContainer>
      <img src={img} alt="The Weirdos" />
      <Details>
        <div>
          <span>Weirdos</span>
          <br />
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span>
          <h1>{Number(price).toFixed(1)}</h1>
        </div>
      </Details>
    </ImgContainer>
  );
};

const Showcase = () => {
  return (
    <Section>
      <Row direction="none">
        <NftItem img={img1} />
        <NftItem img={img1} />
        <NftItem img={img1} />
        <NftItem img={img1} />
        <NftItem img={img1} />
      </Row>

      <Row direction="reverse">
        <NftItem img={img1} />
        <NftItem img={img1} />
        <NftItem img={img1} />
        <NftItem img={img1} />
        <NftItem img={img1} />
      </Row>
    </Section>
  );
};

export default Showcase;
