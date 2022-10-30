import React from 'react';
import styled from 'styled-components';
import LogoIcon from 'assets/image//logo-icon.png';
import LocationMapIcon from 'assets/image/location-map.png';
import { Box, CardMedia, styled as muiStyled } from '@mui/material';

const Component = muiStyled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    '& > div': {
      '& > div': {
        '& > div': {
          '& > img': {
            width: 45
          },
          '& > h1': {
            fontSize: 16
          }
        },
        '& > a': {
          '& > div': {
            '& > p': {
              fontSize: 14
            }
          }
        }
      }
    }
  }
}));

export default function Contact() {
  /* eslint-disable */
  return (
    <Wrapper>
      <Component className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: '30px 0' }}>
            <Box className="flexCenter animate">
              <img src={LogoIcon} alt="" width={60} style={{ marginBottom: 10 }} />
              <h1 className="whiteColor font20" style={{ marginLeft: '15px', lineHeight: 1.1 }}>
                Pondok Pesantren
                <br />
                Al-Qur'an Ibrohimiyyah
              </h1>
            </Box>
            <a href="https://goo.gl/maps/m4J7VeqYNqhQJQxM7" target="_blank">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CardMedia component="img" src={LocationMapIcon} width={50} sx={{ width: 50 }} />
                <p className="whiteColor font16" style={{ marginLeft: 20 }}>
                  Jl. Kmp Bahari Gg. IV No.121 Rt 008 Rw 002 <br />
                  Kelurahan Tanjung Priok, Kecamatan Tanjung Priok, Jakarta Utara (14310)
                </p>
              </Box>
            </a>
          </InnerWrapper>
        </div>
      </Component>
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
    gap: 30px;
  }
`;
