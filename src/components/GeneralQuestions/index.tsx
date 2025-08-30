import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface IProps {
    id: string,
    text: string,
    from: string
}

export default function ApprovedSSE({ apiBase = 'https://api-node-i03v.onrender.com' }) {
  const [items, setItems] = useState<IProps[]>([]); // [{id, ts, text, from, ...}]

  useEffect(() => {
    const es = new EventSource(`${apiBase}/v1/questions/approved/stream`);

    es.addEventListener('approved', (ev) => {
      try {
        const q = JSON.parse(ev.data);
        setItems((prev) => [q, ...prev]);
      } catch {}
    });

    // EventSource se reconecta solo; no hay lógica extra
    return () => es.close();
  }, [apiBase]);

  return (
    <div style={{ padding: 16, fontFamily: 'system-ui, sans-serif' }}>
      <h2>Preguntas</h2>
        {/* {items.map((q) => (
          <div key={q.id}>
            <Box display={'flex'} flexDirection={'column'} alignContent={'center'} border={'black'}>
                {q.text} {q.from ? <em style={{ opacity: 0.7 }}> </em> : null}
            </Box>
          </div>
        ))} */}

        <Box
            sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
                gap: 2,
            }}
        >
        {items.map((card, index) => (
            <Card>
            <CardActionArea
                sx={{
                height: '100%',
                '&[data-active]': {
                    backgroundColor: 'action.selected',
                    '&:hover': {
                    backgroundColor: 'action.selectedHover',
                    },
                },
                }}
            >
                <CardContent sx={{ height: '100%' }}>
                {/* <Typography variant="h" component="div">
                    {card.text}
                </Typography> */}
                <Typography variant="body2" color="text.primary">
                    {card.text}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        ))}
    </Box>

    </div>
  );
}
