import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { Box, Container, Typography } from '@mui/material';
import { useCart } from '@/context/CartContext';

// * Components
import CartList from '@/components/common/CartList';

// * Icons
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  console.log('cart', cart);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          pl: 4,
          height: '10vh',
          bgcolor: 'background.paper',
          boxShadow: 1,
        }}
      >
        <ShoppingCartOutlinedIcon />
        <Typography
          variant='h6'
          sx={{ pl: 2 }}
        >
          รถเข็นของคุณ
        </Typography>
      </Box>
      <Container
        sx={{ my: 3 }}
        maxWidth='md'
      >
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartList
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))
        ) : (
          <Typography
            variant='h6'
            align='center'
          >
            ไม่มีสินค้าในรถเข็นของคุณ
          </Typography>
        )}
      </Container>
    </Layout>
  );
};

export default CartPage;
