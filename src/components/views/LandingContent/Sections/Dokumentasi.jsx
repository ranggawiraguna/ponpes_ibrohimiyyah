import { useEffect, useState } from 'react';
import styled from 'styled-components';
import DocumentationCard from 'components/views/LandingContent/DocumentationCard';
import ClientSlider from '../ClientSlider';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from 'config/firebase';
import { Grid, Typography } from '@mui/material';

export default function Dokumentasi(props) {
  const [documentations, setDocumentations] = useState([]);

  useEffect(() => {
    const listenerDocumentations = onSnapshot(collection(db, 'dokumentasi'), async (snapshot) =>
      setDocumentations(
        await Promise.all(
          snapshot.docs.map((document) => ({
            id: document.id,
            judul: document.data().judul,
            file_url: document.data().file_url,
            jenis: document.data().jenis
          }))
        )
      )
    );

    return () => {
      listenerDocumentations();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper id="dokumentasi">
      <div className="lightBg" style={{ padding: '50px 0', display: props.withHeader ? 'block' : 'none' }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div>
        <div className="container">
          <HeaderInfo>
            <Typography variant="h1" component="h1" className="extraBold" sx={{ fontSize: 32, marginTop: 8, marginBottom: 4 }}>
              Dokumentasi
            </Typography>
          </HeaderInfo>
          <Grid container spacing={5}>
            {documentations.map((documentation) => (
              <Grid key={documentation.id} item xs={12} sm={6} md={4}>
                <DocumentationCard img={documentation.file_url} title={documentation.judul} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
