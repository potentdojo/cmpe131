import React from 'react';
import TopBar from './components/TopBar';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // Global styles can be imported here

const App = () => {
  return (
    <>
      <TopBar />
      <Navigation />
      <Header />
      <Footer />
    </>
  );
};

export default App;
