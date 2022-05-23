import React, { FunctionComponent } from 'react';
// Material UI
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// App components
import Divider from '../components/Divider';

const FAQPage: FunctionComponent = () => {
    return (
        <Grid container sx={{ flexFlow: 'column', alignItems: 'center' }}>
            <Typography color='primary' sx={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '3rem' }} >FAQs</Typography>
            <Divider />

            <Accordion
                style={{
                    width: '70vw',
                    maxWidth: '40rem'
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>What do you mean by unlimited?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ color: '#949494' }}>Unlimited means unlimited. We mow your lawn as many times as you ask for in the month you paid for.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                style={{
                    width: '70vw',
                    maxWidth: '40rem'
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>How does the flat monthly rate work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ color: '#949494' }}>You schedule your first mowing online and make your first monthly payment and then you're all set for unlimited mowing for the next 30 days!</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                style={{
                    width: '70vw',
                    maxWidth: '40rem'
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>How do I schedule my mowing service?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ color: '#949494' }}>Click on our schedule link and input your date preferences. We'll reach out to you a few days in advance to let you know when we plan to mow your lawn.</Typography>
                </AccordionDetails>
            </Accordion>
        </Grid>
    )
};

export default FAQPage;