import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import LogoIcon from 'assets/image//logo-icon.png';
import LocationMapIcon from 'assets/image/location-map.png';
import { Box, CardMedia } from '@mui/material';

export default function Contact() {
  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: '30px 0' }}>
            <Link className="flexCenter animate pointer" smooth={true} offset={-80}>
              <img src={LogoIcon} alt="" width={60} style={{ marginBottom: 10 }} />
              <h1 className="whiteColor font20" style={{ marginLeft: '15px', lineHeight: 1.1 }}>
                Pondok Pesantren
                <br />
                Al-Qur'an Ibrohimiyyah
              </h1>
            </Link>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CardMedia component="img" src={LocationMapIcon} width={50} sx={{ width: 50 }} />
              <p className="whiteColor font16" style={{ marginLeft: 20 }}>
                Jl. Kmp Bahari Gg. IV No.121 Rt 008 Rw 002 <br />
                Kelurahan Tanjung Priok, Kecamatan Tanjung Priok, Jakarta Utara (14310)
              </p>
            </Box>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  gap: 100px;
  @media (max-width: 550px) {
    flex-direction: column;
    gap: 50px;
  }
`;
