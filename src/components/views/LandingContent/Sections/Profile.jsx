import styled from 'styled-components';
import ProfilePendiri from 'assets/image/ProfilePendiri.jpg';
import Dots from 'assets/icon/Dots';
import ClientSlider from 'components/views/LandingContent/ClientSlider';
import { styled as muiStyled, Typography } from '@mui/material';
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
            <Typography
              variant="h1"
              component="h1"
              className="extraBold"
              sx={{ fontSize: 32, marginTop: 4, marginBottom: 2, display: { xs: 'none', md: 'block' } }}
            >
              Profil Pondok Pesantren
            </Typography>
            <HeaderP className="font16">
              Pondok Pesantren Al - Qur'an Ibrohimiyyah didirikan oleh (Alm) KH. Romo Surnadi Abdul Majid pada tahun 18 Mei 1993 dijakarta.
              (Alm) KH. Romo Surnadi Abdul Majid mendirikan pondok pesantren ini karena melaksanakan amanah dari guru atau kyai yang bernama
              (Alm) KH. As'ad Syamsul Arifin dengan maksud supaya mempunyai ilmu yang bermanfaat untuk umat islam. Dengan tujuan untuk bisa
              membaca al qu'ran dan mengamalkannya, serta mempunyai ahklakul karimah dan mempunyai rasa cinta atau mahabbah kepada Nabi
              Muhammad SAW. Pondok Pesantren Al - Qur'an Ibrohimiyyah terletak di Jln. Kampung Bahari Gg IV No. 121 Rt 008 Rw 002 Kelurahan
              Tanjung Priok, Kecamatan Tanjung Priok, Jakarta Utara (14310). (Alm) KH. Romo Surnadi Abdul Majid meninggal pada tahun 2013
              kemudian dilanjutkan oleh putra kandungnya yang bernama H. Syarif Hidayatullah S,Hi sampai saat ini dengan menjalankan amanah
              yang diberikan oleh ayah kandung (Alm) KH. Romo Surnadi Abdul Majid. H. Syarif Hidayatullah S,Hi selalu mengupayakan
              terciptanya pendidikan santri yang memiliki jiwa keikhlasan, kesederhanaan, kemandirian, ukhuwah Islamiyah, kebebasan berfikir
              dan berperilaku atas dasar Al-Quran dan Sunnah Rasulullah SAW untuk meningkatkan taqwa kepada Allah SWT. Seiring berjalannya
              waktu, Pondok Pesantren Al - Qur'an Ibrohimiyyah terus berkembang hingga saat ini.
            </HeaderP>
          </div>
        </LeftSide>
        <RightSide>
          <Typography
            variant="h1"
            component="h1"
            className="extraBold"
            sx={{ fontSize: 32, marginTop: 2, marginBottom: 4, display: { xs: 'block', md: 'none' } }}
          >
            Profil Pondok Pesantren
          </Typography>
          <ImageWrapper>
            <img className="radius8" src={ProfilePendiri} width="80%" alt="office" style={{ zIndex: 9 }} />
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
    margin: 50px 0;
    order: 2;
  }
  @media (max-width: 560px) {
    text-align: center;
    margin: 30px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  text-align: center;
  @media (max-width: 960px) {
    width: 100%;
    margin-top: 30px;
    order: 1;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    max-width: 100%;
  }
  @media (max-width: 560px) {
    text-align: center;
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
