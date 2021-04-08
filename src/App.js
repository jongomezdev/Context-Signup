import React from 'react';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import PageContent from './Components/PageContent';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <Navbar />
        <Form />
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
