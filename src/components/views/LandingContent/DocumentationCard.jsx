import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TOGGLE_IMAGE_BACKDROP } from 'utils/redux/action';

export default function DocumentationCard({ img, title }) {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ImgBtn
        className="animate pointer radius8"
        onClick={() => {
          dispatch({ type: TOGGLE_IMAGE_BACKDROP, status: true, image: img });
        }}
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
      <h3 className="font20 extraBold textCenter">{title}</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
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
