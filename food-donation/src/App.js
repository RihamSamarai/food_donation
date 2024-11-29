import React from 'react';
import Header from './components/Header';
import DonationList from './components/DonationList';
import DonationForm from './components/DonationForm';
import Footer from './components/Footer';
import { ContextProvider } from './components/ContextProvider';
import GlobalStyle from './styles/globalStyles';



function App() {
  return (
    <ContextProvider>
      <GlobalStyle />
      <Header />
      <DonationForm />
      <DonationList />
      <Footer />
    </ContextProvider>
  );
}

export default App;
