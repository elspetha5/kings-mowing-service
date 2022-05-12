import React, { FunctionComponent } from 'react';
// Material UI
import Grid from '@mui/material/Grid';

const SchedulePage: FunctionComponent = () => {
    return (
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center', padding: '2rem 0' }}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSff5oWcGzdKHkrj7IllEB--MbAf6GfnNa5e_4NGIr4QfMmjwQ/viewform?embedded=true" width="640" height="100%" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
        </Grid>
    )
};

export default SchedulePage;