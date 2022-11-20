import React from 'react';
import styled from 'styled-components';
import HeaderImage from 'assets/image//header-img.png';
import Dots from 'assets/icon/Dots';
import ClientSlider from 'components/views/LandingContent/ClientSlider';
import { styled as muiStyled } from '@mui/material';
import { Box } from '@mui/system';

const WrapperChild = muiStyled(Box)(({ theme }) => ({
  paddingTop: '80px',
  width: '100%',
  minHeight: '780px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    '& > div': {
      '& > div': {
        padding: 10,
        '& > h1': {
          fontSize: 24,
          lineHeight: 1.5,
          padding: '0 20px'
        },
        '& > div': {
          fontSize: 14,
          marginTop: 10,
          lineHeight: 1.5,
          padding: '0 20px'
        }
      }
    }
  }
}));

export default function Profile(props) {
  return (
    <Wrapper id="profile">
      <div className="lightBg" style={{ padding: '50px 0', display: props.withHeader ? 'block' : 'none' }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <WrapperChild className="container flexSpaceCenter">
        <LeftSide className="flexCenter">
          <div>
            <h1 className="extraBold" style={{ fontSize: 32 }}>
              KH. Romo Surnadi Abdul Majid
            </h1>
            <HeaderP className="font14">
              Beliau adalah pendiri dari Pondok Pesantren Al'Quran Ibrohimiyyah yang didirikan pada tahun 18 Mei 1993 di Jakarta. Awal mula
              didirikannya pondok ini karena melaksanakan amanah dari guru atau kyai yang bernama KH. As'ad Syamsul Arifin dengan tujuan
              supaya mempunyai ilmu yang bermanfaat untuk umat Islam.
            </HeaderP>
          </div>
        </LeftSide>
        <RightSide>
          <ImageWrapper>
            <Img className="radius8" src={HeaderImage} alt="office" style={{ zIndex: 9 }} />
            <DotsWrapper>
              <Dots />
            </DotsWrapper>
          </ImageWrapper>
        </RightSide>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
