import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/context/AuthContext';
import { useEffect } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { CartProvider } from '@/context/CartContext';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // ใส่รหัสสำหรับการกำหนดสีพื้นหลังของ body เป็นสีฟ้า
    document.body.style.backgroundColor = '#F7F8F4';
  }, []);

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </CartProvider>
      </AuthProvider>
    </>
  );
}
