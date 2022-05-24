import React, { FunctionComponent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// Material UI
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
// App components
import Divider from '../components/Divider';

const FAQs: Array<OneFAQProps> = [
    {
        summary: 'What do you mean by unlimited?',
        details: 'Unlimited means unlimited. We mow your lawn as many times as you ask for in the month you paid for.'
    },
    {
        summary: 'How does the flat monthly rate work?',
        details: "You schedule your first mowing online and make your first monthly payment and then you're all set for unlimited mowing for the next 30 days!"
    },
    {
        summary: 'How do I schedule my mowing service?',
        details: 'SEE ONEFAQ COMPONENT BELOW'
    },
    {
        summary: 'What is included with my subscription?',
        details: 'The work included in every service is: mowing, trimming (of grass area), and blowing off the area around where we mow to keep your walkways clear.'
    }
]

interface OneFAQProps {
    summary: string;
    details: string;
};

const OneFAQ: FunctionComponent<OneFAQProps> = ({ summary, details }) => {
    return (
        <Accordion
            style={{
                width: '70vw',
                maxWidth: '40rem'
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>{summary}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {summary.includes('schedule')
                    ? <Typography sx={{ color: '#949494' }}>Click on our <Link to='/schedule' component={RouterLink}>schedule</Link> link and input your date preferences. We'll reach out to you by email a few days in advance to let you know when we plan to mow your lawn.</Typography>
                    : <Typography sx={{ color: '#949494' }}>{details}</Typography>
                }
            </AccordionDetails>
        </Accordion>
    )
}

const FAQPage: FunctionComponent = () => {
    return (
        <Grid container sx={{ flexFlow: 'column', alignItems: 'center' }}>
            <Typography color='primary' sx={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '1rem' }} >FAQs</Typography>
            <Divider />
            {FAQs.map((faq: OneFAQProps) => (
                <OneFAQ key={faq.summary} summary={faq.summary} details={faq.details} />
            ))}
        </Grid>
    )
};

export default FAQPage;