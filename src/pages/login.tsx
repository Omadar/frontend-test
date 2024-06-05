import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import Layout from '../components/layout/Layout';
import { Container } from '@mui/material';

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <Container maxWidth='lg'>
        <AuthForm />
      </Container>
    </Layout>
  );
};

export default LoginPage;
