import React, { FunctionComponent } from 'react';
// Material UI
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// App components
import mowing from '../images/mowing-card.jpg';

const PaymentPage: FunctionComponent = () => {
    return (
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component='img'
                    height='140'
                    image={mowing}
                    alt='mowing subscription'
                />
                <CardContent>
                    <Typography gutterBottom color='primary'>Mowing Subscription</Typography>
                    <Typography gutterBottom sx={{ color: '#949494' }}>Monthly subscription service for unlimited mowing for 30 days</Typography>
                    <Typography sx={{ color: '#949494' }}>$100</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button
                        size='small'
                        color='primary'
                        variant='contained'
                        href={process.env.NODE_ENV === 'production' ? 'https://buy.stripe.com/9AQeY6gS1aMlaI09AA' : 'https://buy.stripe.com/test_28o5mT0xhbCn6Uo144'}
                        target='_blank'>Subscribe</Button>
                </CardActions>
            </Card>

            {/* <Button
                color='primary'
                variant='contained'
                href={process.env.NODE_ENV === 'production' ? 'https://buy.stripe.com/9AQeY6gS1aMlaI09AA' : 'https://buy.stripe.com/test_28o5mT0xhbCn6Uo144'}
                target='_blank'
            >
                Subscribe
            </Button> */}
        </Grid>
    )
};

export default PaymentPage;