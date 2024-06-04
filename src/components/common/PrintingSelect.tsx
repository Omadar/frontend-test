import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const PrintingSelect = () => {
  const imagePath = '/images/box.png';

  return (
    <Grid
      container
      spacing={3}
    >
      <Grid
        item
        xs={12}
      >
        <Box
          sx={{
            bgcolor: 'background.paper',
            p: 2,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Typography
            variant='h6'
            sx={{ fontWeight: 'bold' }}
            gutterBottom
          >
            การพิมพ์
          </Typography>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
              md={6}
            >
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  boxShadow: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  border: '2px solid transparent',
                  borderColor: '#9fa8da',
                  bgcolor: '#e8eaf6',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src={imagePath}
                    alt='test'
                    width={50}
                    height={50}
                    style={{
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }}
                  />
                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: 'bold',
                      color: '#3949ab',
                      ml: 2,
                    }}
                  >
                    ด้านหน้า
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PrintingSelect;
