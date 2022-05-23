import React, { FunctionComponent } from 'react';
// Material UI
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const ContactUsPage: FunctionComponent = () => {
    return (
        <Grid container sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Button
                color='primary'
                variant='contained'
                href={process.env.NODE_ENV === 'production' ? 'https://buy.stripe.com/9AQeY6gS1aMlaI09AA' : 'https://buy.stripe.com/test_28o5mT0xhbCn6Uo144'}
                target='_blank'
            >
                Email Us!
            </Button>
        </Grid>
    )
};

export default ContactUsPage;