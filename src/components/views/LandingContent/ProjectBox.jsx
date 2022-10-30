import React from 'react';
import styled from 'styled-components';

export default function ProjectBox({ img, title, action }) {
  return (
    <Wrapper>
      <ImgBtn
        className="animate pointer radius8"
        onClick={action ? () => action() : null}
        style={{
          overflow: 'hidden',
          marginBottom: 20
        }}
      >
        <div
          style={{
            width: '100%',
            height: '200px',
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </ImgBtn>
      <h3 className="font20 extraBold">{title}</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  h3 {
    padding-bottom: 10px;
  }
`;
const ImgBtn = styled.div`
  width: '100%',
  background-color: red;
  height: 200px;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > div {
    opacity: 0.5;
  }
`;
