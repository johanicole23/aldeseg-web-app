import * as React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    ThemeProvider,
    Button,
    MenuItem,
    IconButton,
    Menu,
    Container,
    useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import myTheme from '../Styles/myTheme';
import text from '../Styles/text';
import logo from '../assets/images/logo.png';



const pages = [
    {

        title: 'Inicio',
        href: '/seguros',
    },
    {

        title: 'Conócenos',
        href: '/nosotros',
    },
    {

        title: 'Cotizador',
        href: '/seguros',
    },
    {

        title: 'Contáctanos',
        href: '/nosotros',
    }
];


function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

   

    const isXs = useMediaQuery('(max-width:840px)');
    return (
        <ThemeProvider theme={myTheme}>
            <AppBar color="primary" position={isXs ? "fixed" : "static"}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, margin:'0 30px' }} >
                            <img src={logo} className="App-logo" alt="logo" />
                        </Box>
                        <Typography component={Link} to="/" sx={text.titleNavBar} >
                            ALDESEG
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
                                    <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                        <Typography
                                            component={Link}
                                            to={page.href}
                                            sx={text.textH5}
                                            textAlign="center"
                                        >
                                            {page.title}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{
                            display: { xs: 'flex', md: 'none' }, mr: '10px',
                           
                        }} >
                            <img src={logo} className="App-logo" alt="logo" />
                        </Box>
                        <Typography

                            noWrap
                            sx={{
                                ...text.titleNavBar,
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1.5,
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                            }}
                            component={Link} to="/"
                        >
                            ALDESEG
                        </Typography>
                        <Box sx={{ marginLeft: '15%', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.title}
                                    onClick={handleCloseNavMenu}
                                    sx={{ ml: '5%', my: 2, color: 'white', display: 'block' }}
                                >
                                    <Typography
                                        component={Link}
                                        to={page.href}
                                        sx={text.subTitleNavBar}
                                    >
                                        {page.title}
                                    </Typography>

                                </Button>
                            ))}
                        </Box>


                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default ResponsiveAppBar;
