import React from 'react';
import styled from 'styled-components';
import CardArticle from 'components/elements/CardArticle';
import { Box, styled as muiStyled } from '@mui/material';
import ArticleTabunganQurban from 'assets/content/article/TabunganQurban.jpeg';
import ArticleBukaPuasa from 'assets/content/article/BukaPuasa.jpeg';
import ArticleTahunBaruIslam from 'assets/content/article/TahunBaruIslam.jpg';
import ArticleTeamHadroh from 'assets/content/article/TeamHadroh.jpg';
import Article17Agustus from 'assets/content/article/17Agustus.jpg';
import ArticleShalawatNariyah from 'assets/content/article/ShalawatNariyah.jpg';

const Component = muiStyled(Box)(({ theme }) => ({
  width: '100%',
  paddingTop: 120,
  paddingBottom: 30,
  gap: 30,

  [theme.breakpoints.down('md')]: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },

  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    justifyContent: 'center'
  }
}));

export default function Home() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <Component>
        <CardArticle
          title="Tabungan Qurban"
          description="Kami selaku pengurus dan panitia qurban dari Pondok Pesantren Al'Quran Ibrohimiyyah menerima dan menyalurkan hewan qurban sapi dan kambing."
          image={ArticleTabunganQurban}
        />
        <CardArticle
          title="Tahun Baru Islam"
          description="Setiap tahun kami selaku pengurus Pondok Pesantren Al'Quran Ibrohimiyyah mengadakan pawai obor tahun baru islam dan doa bersama."
          image={ArticleTahunBaruIslam}
        />
        <CardArticle
          title="Buka Puasa Bersama"
          description="Kami selaku pengurus Pondok Pesantren Al'Quran Ibrohimiyyah mengadakan buka puasa bersama pada bulan ramadhan dengan para santri."
          image={ArticleBukaPuasa}
        />
        <CardArticle
          title="17 Agustus"
          description="Kami selaku pengerus ponpes ibrohimiyyah mengadakan rutinitas 17 Agustus untuk memperingati hari kemerdekaan Indonesia bersama semua santri"
          image={Article17Agustus}
        />
        <CardArticle
          title="Team Hadroh"
          description="Kami sebagai Team Hadroh Ibrohimiyyah selalu menyiarkan syair syair tentang kecintaan kita kepada Nabi Muhammad SAW"
          image={ArticleTeamHadroh}
        />
        <CardArticle
          title="Shalawat Nariyah"
          description="Kami seluruh santri ibrohimiyyah mengadakan rutinitas shalawat Nariyah untuk terus sambungan dan menambahkan rasa cinta kepada Nabi Muhammad SAW"
          image={ArticleShalawatNariyah}
        />
      </Component>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
