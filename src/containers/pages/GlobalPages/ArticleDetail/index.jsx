import { Box, CardMedia, Typography } from '@mui/material';
import { db } from 'config/firebase/index.js';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { dateFormatter } from 'utils/other/Services';

export default function ArticleDetailPage() {
  const params = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    const listenerArticle = onSnapshot(doc(db, 'artikel', params.id), (snapshot) => setArticle({ id: snapshot.id, ...snapshot.data() }));

    return () => listenerArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ paddingRight: 20, paddingLeft: 20, paddingTop: 15, paddingBottom: 10 }}>
      <Typography component="h1" variant="h1" sx={{ marginBottom: 1 }}>
        {article.judul}
      </Typography>
      <Typography component="p" variant="p" sx={{ marginBottom: 2, opacity: 0.6 }}>
        Dibuat pada tanggal : {dateFormatter(article.tanggal_dibuat, 'd MMMM yyyy - HH:mm')}
      </Typography>
      <CardMedia
        component="img"
        src={article.url_photo}
        sx={{ maxHeight: 500, minWidth: 0, maxWidth: '100vw', margin: '0 auto', marginBottom: 5,}}
      />
      <Box
        dangerouslySetInnerHTML={{
          __html: article.html_content
        }}
      />
    </Box>
  );
}
