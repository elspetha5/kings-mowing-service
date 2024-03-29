import React, { FunctionComponent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
// App Components
import icon from '../images/kings-mowing-icon-white-outline.svg';
import Divider from '../components/Divider';

const LandingPage: FunctionComponent = () => {
    return (
        <Grid container sx={{ flexFlow: 'column' }}>
            <Grid item xs={12} sx={{ position: 'relative' }}>
                <div className='landingHeroImg' style={{ height: '30rem' }}></div>
                <img src={icon} alt='KMS Icon' className='landingHeroIcon' />
            </Grid>

            <Grid item xs={12} sx={{ marginTop: '7rem', display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography color='primary' sx={{ fontWeight: 'bold', fontSize: '1.75rem' }} >KING'S MOWING SERVICE</Typography>
                <Typography color='secondary' sx={{ width: '70vw', maxWidth: '30rem', textAlign: 'center', fontStyle: 'italic', fontSize: '1.25rem' }}>We give your lawn the royal treatment!</Typography>
                <Divider />
                <Typography sx={{ width: '70vw', maxWidth: '30rem', textAlign: 'center' }}>We are the Valley's only unlimited monthly flat-rate mowing service. The company was started by the dynamic father-son duo of Jeremy and Graham King. We live in Mesa with our family. We love to work hard and serve others and are excited to help you take care of your lawn as often as you need us!</Typography>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: '5rem', display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography color='primary' sx={{ fontSize: '1.2rem' }} >WHAT MAKES US DIFFERENT</Typography>
                <Divider />
                <Grid item xs={12}>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ Unlimited mowing services</Typography>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ Flat monthly rate</Typography>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ Simple online payment</Typography>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ Local family business</Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: '5rem', display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography color='primary' sx={{ fontSize: '1.2rem' }} >SERVICES WE OFFER</Typography>
                <Divider />
                <Grid item xs={12}>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ Mowing</Typography>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ Bush/Tree Trimming</Typography>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ Tree Removal</Typography>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ Yard Cleanup</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default LandingPage;