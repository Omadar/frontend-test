// MeasureSelect.tsx
import React from 'react';
import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

interface ProductSelectMeasures {
  width: number;
  length: number;
  height: number;
}

interface ProductSelectProps {
  productSelected: ProductSelectMeasures;
  setProductSelected: (measures: ProductSelectMeasures) => void; // เปลี่ยนชื่อพารามิเตอร์เป็น newMeasures
}

const styles = {
  grid: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const MeasureSelect: React.FC<ProductSelectProps> = ({
  productSelected,
  setProductSelected,
}) => {
  const handleChange = (newMeasures: Partial<ProductSelectMeasures>) => {
    setProductSelected({
      ...productSelected,
      ...newMeasures,
    });
  };

  return (
    <Box
      sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 2, boxShadow: 2 }}
    >
      <Typography
        variant='h6'
        sx={{
          fontWeight: 'bold',
        }}
        gutterBottom
      >
        ขนาด
      </Typography>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          md={4}
          xs={12}
          sx={styles.grid}
        >
          <TextField
            id='width'
            type='number'
            sx={{ width: 'full' }}
            error={productSelected.width !== null && productSelected.width < 20}
            value={
              productSelected.width != null
                ? productSelected.width.toString()
                : '0'
            }
            onChange={(e) =>
              handleChange({
                width:
                  e.target.value !== ''
                    ? parseFloat(e.target.value)
                    : undefined,
              })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Typography sx={{ color: '#ff5722' }}>W</Typography>
                </InputAdornment>
              ),
            }}
          />
          <Typography
            variant='caption'
            gutterBottom
            sx={{ mt: 1, color: 'gray' }}
          >
            Width: Min 20 mm
          </Typography>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          sx={styles.grid}
        >
          <TextField
            id='length'
            type='number'
            sx={{ width: 'auto' }}
            error={
              productSelected.length !== null && productSelected.length < 20
            }
            value={
              productSelected.length !== null
                ? productSelected.length.toString()
                : '0'
            }
            onChange={(e) =>
              handleChange({
                length:
                  e.target.value !== ''
                    ? parseFloat(e.target.value)
                    : undefined,
              })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Typography>L</Typography>
                </InputAdornment>
              ),
            }}
          />
          <Typography
            variant='caption'
            gutterBottom
            sx={{ mt: 1, color: 'gray' }}
          >
            Length: Min 20 mm
          </Typography>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          sx={styles.grid}
        >
          <TextField
            id='height'
            type='number'
            sx={{ width: 'auto' }}
            error={
              productSelected.height !== null && productSelected.height < 20
            }
            value={
              productSelected.height !== null
                ? productSelected.height.toString()
                : '0'
            }
            onChange={(e) =>
              handleChange({
                height:
                  e.target.value !== ''
                    ? parseFloat(e.target.value)
                    : undefined,
              })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Typography sx={{ color: '#8bc34a' }}>H</Typography>
                </InputAdornment>
              ),
            }}
          />
          <Typography
            variant='caption'
            gutterBottom
            sx={{ mt: 1, color: 'gray' }}
          >
            Height: Min 20 mm
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MeasureSelect;
