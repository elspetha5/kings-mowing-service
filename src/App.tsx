import React, { FunctionComponent } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
// Material UI Components
import Grid from '@mui/material/Grid';
// App Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/Landing';
import PaymentPage from './pages/Payment';
import SchedulePage from './pages/Schedule';
import ContactUsPage from './pages/ContactUs';

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Grid container sx={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </Grid>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
