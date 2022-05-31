import React, { FunctionComponent } from 'react';
// Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// App components
import Divider from '../components/Divider';

const SchedulePage: FunctionComponent = () => {
    return (
        <Grid container sx={{ justifyContent: 'center' }}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSff5oWcGzdKHkrj7IllEB--MbAf6GfnNa5e_4NGIr4QfMmjwQ/viewform?embedded=true" width="640" height="100%" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
        </Grid>
    )
};

export default SchedulePage;