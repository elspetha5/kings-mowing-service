import React, { FunctionComponent } from 'react';
// Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// App Components
import icon from '../images/kings-mowing-icon-white-outline.svg';
import Divider from '../components/Divider';

const LandingPage: FunctionComponent = () => {
    return (
        <Grid container sx={{ flexFlow: 'column', paddingBottom: '5rem' }}>
            <Grid item xs={12} sx={{ position: 'relative' }}>
                <div className='landingHeroImg' style={{ height: '30rem' }}></div>
                <img src={icon} alt='KMS Icon' className='landingHeroIcon' />
            </Grid>

            <Grid item xs={12} sx={{ marginTop: '7rem', display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography color='primary' sx={{ fontWeight: 'bold', fontSize: '1.5rem' }} >KING'S MOWING SERVICE</Typography>
                <Divider />
                <Typography sx={{ width: '70vw', maxWidth: '30rem', textAlign: 'center' }}>King's Mowing Service is a father and son team of Jeremy and Graham King. We live in Mesa with our family. We love to work hard and serve others and are excited to help you take care of your lawn as often as you need us!</Typography>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: '5rem', display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography color='primary' sx={{ fontSize: '1.2rem' }} >WHAT MAKES US DIFFERENT</Typography>
                <Divider />
                <Grid item xs={12}>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ Unlimited mowing services</Typography>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ Flat monthly rate</Typography>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ Simple online payment</Typography>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ Local Family business</Typography>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ Schedule from your phone</Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: '5rem', display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography color='primary' sx={{ fontSize: '1.2rem' }} >WHEN DO WE WORK</Typography>
                <Divider />
                <Grid item xs={12}>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ 5am - 1pm Mon-Sat</Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: '5rem', display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography color='primary' sx={{ fontSize: '1.2rem' }} >HOW TO SCHEDULE US</Typography>
                <Divider />
                <Grid item xs={12}>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ Click the schedule button in the menu</Typography>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ Fill in your date preferences</Typography>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ We'll reach out to let you know what day we're planning to mow your lawn</Typography>
                    <Typography sx={{ width: '60vw', maxWidth: '20rem', marginBottom: '1rem' }}>○ Pay for your month ahead of time</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default LandingPage;