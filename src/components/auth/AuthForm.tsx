import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';

const AuthForm: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [user, setUser] = useState({ email: 'admin', password: 'pass' });
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email, password: user.password }),
      });

      const data = await response.json();

      if (data.success) {
        login({ email: user.email });
        router.push('/products');
      } else {
        setError(
          data.message || 'Invalid email or password. Please try again.'
        );
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        p: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'background.paper',
        borderRadius: 4,
      }}
    >
      <Typography
        component='h1'
        variant='h5'
      >
        Sign in
      </Typography>
      <Box
        component='form'
        onSubmit={handleLogin}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          value={user.email}
          onChange={handleChange}
          autoFocus
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
          value={user.password}
          onChange={handleChange}
          autoFocus
        />
        <FormControlLabel
          control={
            <Checkbox
              value='remember'
              color='primary'
            />
          }
          label='Remember me'
        />
        {error && <Typography color='error'>{error}</Typography>}
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default AuthForm;
