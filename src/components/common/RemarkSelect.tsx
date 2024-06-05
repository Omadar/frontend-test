import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';

interface RemarkSelectProps {
  productSelected: string;
  setProductSelected: (productSelectRemark: string) => void;
}

const RemarkSelect: React.FC<RemarkSelectProps> = ({
  productSelected,
  setProductSelected,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductSelected(event.target.value);
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
            หมายเหตุ
          </Typography>
          <TextField
            rows={4}
            placeholder='ข้อมูลเพิ่มเติมเกี่ยวกับสิ่งค้านี้'
            fullWidth
            variant='outlined'
            multiline
            value={productSelected || ''}
            onChange={handleChange}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default RemarkSelect;
