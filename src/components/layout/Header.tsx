import React from 'react';
import { useRouter } from 'next/router';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { useAuth } from '../../context/AuthContext';

// * Icons
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const Router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              cursor: 'pointer',
            }}
            onClick={() => Router.push('/products')}
          >
            สั่งสินค้า
          </Typography>
          {isAuthenticated && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                size='large'
                aria-label='show cart'
                color='inherit'
                sx={{ mr: 2 }}
              >
                <ShoppingCartIcon />
              </IconButton>
              <Typography
                variant='h6'
                component='div'
              >
                {user?.email}
              </Typography>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          )}
          {!isAuthenticated && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                color='inherit'
                href='/login'
              >
                Login
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
