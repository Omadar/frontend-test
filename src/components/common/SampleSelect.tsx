import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Image from 'next/image';
import { simple } from '@/types/simple';

interface SampleSelectProps {
  productSelected: simple;
  setProductSelected: (sample: simple) => void;
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

const SampleSelect: React.FC<SampleSelectProps> = ({
  productSelected,
  setProductSelected,
}) => {
  const handleSelect = (sample: simple) => {
    setProductSelected(sample);
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
            ตัวอย่างสินค้า
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Grid
              item
              xs={12}
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
                    name: 'Soft and Online Proof',
                    price: 0,
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
                    src='/images/pdf-icon.png'
                    alt='mockup'
                    width={62}
                    height={62}
                    style={{ objectFit: 'cover' }}
                  />

                  <Box sx={{ pl: 2 }}>
                    <Typography
                      variant='h6'
                      fontWeight='bold'
                    >
                      Soft and Online Proof
                    </Typography>
                    <Typography variant='body1'>
                      ส่งลิงค์ไฟล์ PDF และ คลิป VDO
                      ตัวอย่างสินค้าให้ตรวจสอบก่อนพิมพ์
                    </Typography>
                  </Box>
                </Box>

                <Typography variant='body1'>ฟรี</Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
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
                    name: 'Mockup Proof',
                    price: 300,
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
                    src='/images/mockup.jpg'
                    alt='mockup'
                    width={62}
                    height={62}
                    style={{ objectFit: 'cover' }}
                  />

                  <Box sx={{ pl: 2 }}>
                    <Typography
                      variant='h6'
                      fontWeight='bold'
                    >
                      Mockup Proof
                    </Typography>
                    <Typography variant='body1'>
                      ขึ้นรูปตัวอย่างสินค้า โดยไม่มีเทคนิคพิเศษ และ การเคลือบ
                      ให้ตรวจสอบก
                    </Typography>
                  </Box>
                </Box>

                <Typography variant='body1'>300.00</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SampleSelect;
