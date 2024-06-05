import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { ProductSelectArtwork } from '@/types/productSelect';
import Image from 'next/image';

interface ArtworkSelectProps {
  productSelected: ProductSelectArtwork;
  setProductSelected: (artwork: ProductSelectArtwork) => void;
}

const styles = {
  box: {
    cursor: 'pointer',
    borderRadius: 2,
    boxShadow: 2,
    p: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

const ArtworkSelect: React.FC<ArtworkSelectProps> = ({
  productSelected,
  setProductSelected,
}) => {
  const handleSelect = (artwork: ProductSelectArtwork) => {
    setProductSelected(artwork);
  };

  return (
    <Grid
      container
      spacing={2}
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
            fontWeight='bold'
            gutterBottom
          >
            อาร์ตเวิร์ค
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
                  ...styles.box,
                  bgcolor:
                    productSelected.id === '1' ? '#e8eaf6' : 'background.paper',
                  border:
                    productSelected.id === '1' ? '1px solid #3f51b5' : 'none',
                }}
                onClick={() =>
                  handleSelect({
                    id: '1',
                    name: 'ไม่ใช้อาร์ตเวิร์ค',
                  })
                }
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src='/images/no-pen.png'
                    alt='mockup'
                    width={62}
                    height={62}
                    style={{
                      objectFit: 'cover',
                      borderRadius: '80%',
                    }}
                  />

                  <Box sx={{ pl: 2 }}>
                    <Typography
                      variant='h6'
                      fontWeight='bold'
                    >
                      ไม่ใช้อาร์ตเวิร์ค
                    </Typography>
                    <Typography variant='body2'>
                      เลือกตัวเลือกนี้เมื่อคุณมีไฟล์งาน หรือ
                      สินค้าเป็นกล่องเปล่าไม่พิมพ์ลาย
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <Box
                sx={{
                  ...styles.box,
                  bgcolor:
                    productSelected.id === '2' ? '#e8eaf6' : 'background.paper',
                  border:
                    productSelected.id === '2' ? '1px solid #3f51b5' : 'none',
                }}
                onClick={() =>
                  handleSelect({
                    id: '2',
                    name: 'อาร์ตการ์ด 1 หน้า',
                  })
                }
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src='/images/pencil.svg'
                    alt='mockup'
                    width={62}
                    height={62}
                    style={{
                      objectFit: 'cover',
                      borderRadius: '80%',
                    }}
                  />

                  <Box sx={{ pl: 2 }}>
                    <Typography
                      variant='h6'
                      fontWeight='bold'
                    >
                      อาร์ตการ์ด 1 หน้า
                    </Typography>
                    <Typography variant='body2'>
                      ต้องการให้เราออกแบบอาร์ตเวิร์คสินค้า และ ผลิตสินค้า
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ArtworkSelect;
