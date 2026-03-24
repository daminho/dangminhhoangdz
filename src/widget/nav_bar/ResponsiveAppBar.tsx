import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import smile from './smile.png';

const pages = ['About me', 'Experiences', 'Hobbies'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        const id = (event.target as HTMLElement).firstChild?.textContent ?? '';
        setAnchorElNav(null);
        document.querySelector(`#${id.toLowerCase().split(' ').join('')}`)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                top: 0,
                backgroundColor: 'rgba(13, 17, 23, 0.85)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 1px 0 #30363d',
                zIndex: 100,
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: 'flex', height: '44px', width: '44px', mr: 1.5, alignItems: 'center' }}>
                        <img src={smile} alt="logo" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="span"
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: '#79b8ff',
                            textShadow: '0 0 8px rgba(121,184,255,0.4)',
                        }}
                    >
                        Dang Minh Hoang
                    </Typography>

                    {/* Desktop nav */}
                    <Box sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    color: '#8b949e',
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    fontSize: '13px',
                                    letterSpacing: '0.05em',
                                    textTransform: 'none',
                                    px: 2,
                                    '&:hover': {
                                        color: '#79b8ff',
                                        backgroundColor: 'rgba(121,184,255,0.06)',
                                    },
                                    transition: 'color 0.2s, background-color 0.2s',
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* Mobile hamburger */}
                    <Box sx={{ ml: 'auto', display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" onClick={handleOpenNavMenu}>
                            <MenuIcon sx={{ color: '#79b8ff' }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            PaperProps={{
                                sx: {
                                    background: '#161b22',
                                    border: '1px solid #30363d',
                                },
                            }}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ fontFamily: 'monospace', color: '#e6edf3', fontSize: '14px' }}>
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
