import React, { FunctionComponent } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
// Material UI Components
import Grid from '@mui/material/Grid';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
// App Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/Landing';
import PaymentPage from './pages/Payment';
import SchedulePage from './pages/Schedule';
import FAQPage from './pages/FAQs';
import ContactUsPage from './pages/ContactUs';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#38761d'
    },
    secondary: {
      main: '#f1c232'
    },
    info: {
      main: '#cccccc'
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "'Ubuntu', sans-serif",
        color: '#272727'
      }
    }
  }
});

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Grid container sx={{ minHeight: '85vh', paddingBottom: '3rem' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/sign-up" element={<SchedulePage />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </Grid>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
