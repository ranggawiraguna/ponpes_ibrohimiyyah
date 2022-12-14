import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import Backdrop from '../Backdrop';
import BurgerIcon from 'assets/icon/BurgerIcon';
import LogoIcon from 'assets/image//logo-icon.png';

export default function TopNavbar({ hideMenu = false }) {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setY(window.scrollY));
    return () => {
      window.removeEventListener('scroll', () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} hideMenu={hideMenu} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate blueLightBg" style={y > 100 ? { height: '70px' } : { height: '85px' }}>
        <NavInner className="container flexSpaceCenter">
          <LinkRouter className="pointer flexNullCenter" to="/">
            <img src={LogoIcon} alt="" width={60} style={{ marginBottom: 5 }} />
            <h1 style={{ marginLeft: '15px', lineHeight: 1.1 }} className="font20 bold">
              Pondok Pesantren
              <br />
              Al-Qur'an Ibrohimiyyah
            </h1>
          </LinkRouter>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          {!hideMenu ? (
            <UlWrapper className="flexNullCenter">
              <li className="semiBold font15 pointer">
                <Link activeClass="active" style={{ padding: '10px 15px' }} to="home" spy={true} smooth={true} offset={-80}>
                  Home
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link activeClass="active" style={{ padding: '10px 15px' }} to="profile" spy={true} smooth={true} offset={-80}>
                  Profile
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link activeClass="active" style={{ padding: '10px 15px' }} to="dokumentasi" spy={true} smooth={true} offset={-80}>
                  Dokumentasi
                </Link>
              </li>
            </UlWrapper>
          ) : (
            <></>
          )}
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a href="/masuk" style={{ padding: '10px 30px 10px 0' }}>
                Masuk
              </a>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <a href="/pendaftaran" className="radius6 lightBg" style={{ padding: '10px 15px' }}>
                Pendaftaran
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
