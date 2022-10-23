import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import CloseIcon from 'assets/icon/CloseIcon';
import LogoIcon from 'assets/image/logo-icon.png';

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <img src={LogoIcon} alt="" width={60} style={{ marginBottom: 10 }} />
          <h1 className="whiteColor font20" style={{ marginLeft: '15px', lineHeight: 1.1 }}>
            Pondok Pesantren
            <br />
            Al-Qur'an Ibrohimiyyah
          </h1>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Home
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
            to="profile"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Profile
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
            to="dokumentasi"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Dokumentasi
          </Link>
        </li>
      </UlStyle>
      <UlStyle className="flexSpaceCenter">
        <li className="semiBold font15 pointer">
          <a href="/masuk" style={{ padding: '10px 30px 10px 0' }} className="whiteColor">
            Log in
          </a>
        </li>
        <li className="semiBold font15 pointer flexCenter">
          <a href="/pendaftaran" className="radius8 lightBg" style={{ padding: '10px 15px' }}>
            Pendaftaran
          </a>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? '0px' : '-400px')};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
