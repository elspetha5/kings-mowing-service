import React, { FunctionComponent, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
// Material UI
import AppBar from '@mui/material/AppBar'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
// Images
import wordmark from '../images/kings-mowing-wordmark.svg';
import icon from '../images/kings-mowing-icon.svg';
// CSS
import '../assets/global.css';

const navLinks = [
    {
        pathname: '/',
        name: 'Home'
    },
    {
        pathname: '/payment',
        name: 'Pay'
    },
    {
        pathname: '/schedule',
        name: 'Schedule'
    }
]

const Navbar: FunctionComponent = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <AppBar
            position='sticky'
            elevation={2}
            style={{
                backgroundColor: '#ffffffd8',
                top: 0,
                color: 'black',
                flexFlow: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '.75rem 10vw',
            }}
        >
            <Grid item xs={12}>
                <Link to='/'>
                    <img src={wordmark} alt='KMS Wordmark' id='navWordmark' style={{ width: '15vw', minWidth: '10rem' }} />
                    <img src={icon} alt='KMS Logo' id='navLogo' style={{ width: '3rem' }} />
                </Link>
            </Grid>
            <Grid item xs={12} container style={{ display: 'flex', flexFlow: 'row', alignItems: 'center', justifyContent: 'flex-end' }} >
                <Grid item xs={12} id='navLgLinks' style={{ justifyContent: 'flex-end' }}>
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.pathname}
                            style={{
                                textDecoration: 'none',
                                color: location.pathname === link.pathname ? '#38761d' : '#181818',
                                margin: '0 .5rem',
                                borderBottom: location.pathname === link.pathname ? '2px solid #38761d' : '2px solid #38761d00'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </Grid>

                <div id='navSmLinks'>
                    <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ marginRight: '-12px' }}>
                        {isMenuOpen ? <Close /> : <Menu />}
                    </IconButton>
                    {isMenuOpen &&
                        <Paper
                            style={{
                                position: 'absolute',
                                top: '100%',
                                right: '0',
                                borderRadius: '0',
                                display: 'flex',
                                flexFlow: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '1rem 15vw'
                            }}
                        >
                            {navLinks.map(link => (
                                <Link
                                    key={link.name}
                                    to={link.pathname}
                                    style={{
                                        textDecoration: 'none',
                                        color: location.pathname === link.pathname ? '#38761d' : '#181818',
                                        margin: '1rem',
                                        borderBottom: location.pathname === link.pathname ? '2px solid #38761d' : '2px solid #38761d00'
                                    }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </Paper>
                    }
                </div>
            </Grid>
        </AppBar>
    )
};

export default Navbar;