import React, { FunctionComponent } from 'react';
// Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
// App components
import Divider from '../components/Divider';

const ContactUsPage: FunctionComponent = () => {
    return (
        <Grid container sx={{ alignItems: 'center', flexFlow: 'column' }}>
            <Typography color='primary' sx={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '1rem' }} >Contact Us</Typography>
            <Divider />
            <Link href='mailto:thekingsmowingservice@gmail.com' id='footerLink'><EmailIcon sx={{ marginRight: '.5rem' }} />thekingsmowingservice@gmail.com</Link>
            <Link href='tel:4803319588' id='footerLink' sx={{ marginTop: '1rem' }}><PhoneIcon sx={{ marginRight: '.5rem' }} />(480) 331-9588</Link>
        </Grid>
    )
};

export default ContactUsPage;