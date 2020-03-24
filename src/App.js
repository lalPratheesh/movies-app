import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Landing />
      <Footer />
    </Provider>
  );
}

export default App;
