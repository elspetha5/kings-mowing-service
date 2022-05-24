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
import tips from '../images/tip-jar.jpg';
import icon from '../images/kings-mowing-icon-white-outline.svg';
import Divider from '../components/Divider';

const mowingProducts: Array<ProductCardProps> = [
    {
        image: mowing,
        alt: 'mowing subscription',
        productTitle: 'Mowing Subscription',
        productDescription: 'Monthly subscription service for unlimited mowing for 30 days',
        productPrice: '$100',
        prodLink: 'https://buy.stripe.com/9AQeY6gS1aMlaI09AA',
        devLink: 'https://buy.stripe.com/test_28o5mT0xhbCn6Uo144',
        buttonTitle: 'Subscribe',
    },
];

const tipProducts: Array<ProductCardProps> = [
    {
        image: tips,
        alt: 'mowing tip',
        productTitle: '$3 Tip',
        productDescription: 'Add your tip for a job well done :)',
        productPrice: '$3',
        prodLink: 'https://buy.stripe.com/7sIcPYbxH4nXdUc146',
        devLink: 'https://buy.stripe.com/test_8wM02z5RBeOzguY146',
        buttonTitle: 'Add $3 Tip',
    },
    {
        image: tips,
        alt: 'mowing tip',
        productTitle: '$5 Tip',
        productDescription: 'Add your tip for a job well done :)',
        productPrice: '$5',
        prodLink: 'https://buy.stripe.com/4gwbLUdFPg6F5nG003',
        devLink: 'https://buy.stripe.com/test_6oE6qX5RB0XJ3Ic4gj',
        buttonTitle: 'Add $5 Tip',
    },
    {
        image: tips,
        alt: 'mowing tip',
        productTitle: '$10 Tip',
        productDescription: 'Add your tip for a job well done :)',
        productPrice: '$10',
        prodLink: 'https://buy.stripe.com/aEU6rAatD6w503mdQU',
        devLink: 'https://buy.stripe.com/test_28o9D9eo7fSDemQ3cg',
        buttonTitle: 'Add $10 Tip',
    }
];

interface ProductCardProps {
    image: any;
    alt: string;
    productTitle: string;
    productDescription: string;
    productPrice: string;
    prodLink: string;
    devLink: string;
    buttonTitle: string;
};

const ProductCard: FunctionComponent<ProductCardProps> = ({
    image,
    alt,
    productTitle,
    productDescription,
    productPrice,
    prodLink,
    devLink,
    buttonTitle
}) => {
    return (
        <Card sx={{ width: '20rem', margin: '1rem' }}>
            <CardMedia
                component='img'
                height='140'
                image={image}
                alt={alt}
            />
            <CardContent>
                
                <Typography gutterBottom color='primary'>{productTitle}</Typography>
                <Typography gutterBottom sx={{ color: '#949494' }}>{productDescription}</Typography>
                <Typography sx={{ color: '#949494' }}>{productPrice}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button
                    size='small'
                    color='primary'
                    variant='contained'
                    href={process.env.NODE_ENV === 'production' ? prodLink : devLink}
                    target='_blank'>{buttonTitle}</Button>
            </CardActions>
        </Card>
    )
};

const PaymentPage: FunctionComponent = () => {
    return (
        <Grid container sx={{ alignItems: 'center', flexFlow: 'column' }}>
            <Typography color='primary' sx={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '1rem' }} >Products</Typography>
            <Typography color='primary' sx={{ fontSize: '1.2rem', marginTop: '3rem' }} >Mowing</Typography>
            <Divider />
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                {mowingProducts.map((product: ProductCardProps) => (
                    <ProductCard
                        image={product.image}
                        alt={product.alt}
                        productTitle={product.productTitle}
                        productDescription={product.productDescription}
                        productPrice={product.productPrice}
                        prodLink={product.prodLink}
                        devLink={product.devLink}
                        buttonTitle={product.buttonTitle}
                    />
                ))}
            </Grid>
            <Typography color='primary' sx={{ fontSize: '1.2rem', marginTop: '3rem' }} >Tip Us!</Typography>
            <Divider />
            <Grid item xs={12} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
                {tipProducts.map((product: ProductCardProps) => (
                    <ProductCard
                        image={product.image}
                        alt={product.alt}
                        productTitle={product.productTitle}
                        productDescription={product.productDescription}
                        productPrice={product.productPrice}
                        prodLink={product.prodLink}
                        devLink={product.devLink}
                        buttonTitle={product.buttonTitle}
                    />
                ))}
            </Grid>
        </Grid>
    )
};

export default PaymentPage;