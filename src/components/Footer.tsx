import React, { FunctionComponent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// Material UI
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import CopyrightIcon from '@mui/icons-material/Copyright';
// images
import icon from '../images/kings-mowing-icon.svg';
import Typography from '@mui/material/Typography';
// CSS
import '../assets/global.css';

const Footer: FunctionComponent = () => {
    return (
        <Grid container id='landingFooter' sx={{ backgroundColor: '#e7e7e7', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
            <img src={icon} alt='Icon' style={{ width: '4vw', minWidth: '3rem' }} />
            <Grid item xs={12} sx={{ display: 'flex', margin: '1rem 0', justifyContent: 'center', alignItems: 'center' }}>
                <Link href='mailto:thekingsmowingservice@gmail.com' id='footerLink'>Contact Us</Link>
                <Typography sx={{ color: '#272727', margin: '0 .5rem' }}>|</Typography>
                <Link to='/faqs' id='footerLink' component={RouterLink}>FAQs</Link>
            </Grid>
            <Typography style={{ display: 'flex', alignItems: 'center', fontSize: '.75rem', marginTop: '2rem' }}><CopyrightIcon style={{ fontSize: '.75rem' }} /> Copyright {new Date().getFullYear()} Kings MowingService. All rights reserved.</Typography>
        </Grid>
    )
};

export default Footer;