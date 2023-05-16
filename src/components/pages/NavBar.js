import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {useState} from 'react' 

const pages = ['Projects', 'Community', 'Team'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar =() => {
  const [anchorElNav, setAnchorElNav] =useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" disableGutters>
        <Toolbar sx={{ px: 0 }} >
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CrowdLit
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CrowdLit
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
// import {
//     AppBar,
//     Toolbar,
//     IconButton,
//     Typography,
//     Button,
//     Stack,
//     Menu,
//     MenuItem
//   } from '@mui/material'
//  import AdbIcon from '@mui/icons-material/Adb';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
// import { useState } from 'react'

// export const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null)
//   const open = Boolean(anchorEl)
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget)
//   }
//   const handleClose = () => {
//     setAnchorEl(null)
//   }
//   return (
//     <AppBar position='static' color='transparent'>
//       <Toolbar>
//         <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
//           <AdbIcon />
//         </IconButton>
//         <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
//           CrowdLit
//         </Typography>
//         <Stack direction='row' spacing={2}>
//           <Button color='inherit'>Features</Button>
//           <Button color='inherit'>Pricing</Button>
//           <Button color='inherit'>About</Button>
//           <Button
//             color='inherit'
//             id='resources-button'
//             aria-controls={open ? 'resources-menu' : undefined}
//             aria-haspopup='true'
//             aria-expanded={open ? 'true' : undefined}
//             endIcon={<KeyboardArrowDownIcon />}
//             onClick={handleClick}>
//             Resources
//           </Button>
//           <Button color='inherit'>Login</Button>
//         </Stack>
//         <Menu
//           id='resources-menu'
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleClose}
//           anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'right'
//           }}
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'right'
//           }}
//           MenuListProps={{
//             'aria-labelledby': 'resources-button'
//           }}>
//           <MenuItem onClick={handleClose}>Blog</MenuItem>
//           <MenuItem onClick={handleClose}>Podcast</MenuItem>
//         </Menu>
//       </Toolbar>
//     </AppBar>
//   )
// }

// export default Navbar;