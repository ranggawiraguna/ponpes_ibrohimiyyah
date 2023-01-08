import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardArticle from 'components/elements/CardArticle';
import { Box, styled as muiStyled } from '@mui/material';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from 'config/firebase';

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
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const listenerArticles = onSnapshot(collection(db, 'artikel'), async (snapshot) =>
      setArticles(
        await Promise.all(
          snapshot.docs.map((document) => ({
            id: document.id,
            judul: document.data().judul,
            deskripsi: document.data().deskripsi,
            tanggal_dibuat: document.data().tanggal_dibuat,
            url_photo: document.data().url_photo,
            html_content: document.data().html_content
          }))
        )
      )
    );

    return () => {
      listenerArticles();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <Component>
        {articles.map((article) => (
          <CardArticle key={article.id} articleId={article.id} title={article.judul} description={article.deskripsi} image={article.url_photo} />
        ))}
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
