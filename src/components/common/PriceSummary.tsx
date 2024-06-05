import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { MaterialPrice } from '@/types/material';
import { useRouter } from 'next/router';

interface PriceSummaryProps {
  price: number;
  materialPrice: MaterialPrice;
  addToCart: () => void;
}

const PriceSummary: React.FC<PriceSummaryProps> = ({
  price,
  materialPrice,
  addToCart,
}) => {
  const Router = useRouter();

  const handleAddToCart = () => {
    addToCart();
    Router.push('/cart');
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
            bgcolor: '#212121',
            p: 2,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Box>
              <Typography
                variant='h6'
                fontWeight='bold'
                color='white'
              >
                {price}
              </Typography>
              <Typography
                variant='body1'
                color='white'
              >
                {materialPrice.price} บาท x {materialPrice.amount} ชิ้น
              </Typography>
            </Box>
            <Button
              sx={{ ml: 'auto', bgcolor: '#ff5722' }}
              variant='contained'
              onClick={handleAddToCart}
            >
              <ShoppingCartOutlinedIcon />
              เพิ่มไปยังตะกร้า
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PriceSummary;
