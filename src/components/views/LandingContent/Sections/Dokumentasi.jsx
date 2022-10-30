import React from 'react';
import styled from 'styled-components';
import ProjectBox from 'components/views/LandingContent/ProjectBox';
import ClientSlider from '../ClientSlider';
import Documentation1 from 'assets/content/documentation/1.jpg';
import Documentation2 from 'assets/content/documentation/2.jpg';
import Documentation3 from 'assets/content/documentation/3.jpg';
import Documentation4 from 'assets/content/documentation/4.jpg';
import Documentation5 from 'assets/content/documentation/5.png';
import Documentation6 from 'assets/content/documentation/6.jpg';

export default function Dokumentasi() {
  return (
    <Wrapper id="dokumentasi">
      <div className="lightBg" style={{ padding: '50px 0' }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Dokumentasi</h1>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={Documentation1} title="Pengajian Bersama" action={() => console.log('clicked')} />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={Documentation2} title="Santri Putri" action={() => console.log('clicked')} />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={Documentation3} title="Santri Pria" action={() => console.log('clicked')} />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={Documentation4} title="Acara Maulid" action={() => console.log('clicked')} />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={Documentation5} title="Ujian Santri" action={() => console.log('clicked')} />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={Documentation6} title="Ziarah Kubur" action={() => console.log('clicked')} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin-bottom: 100px;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
