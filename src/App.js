import React from 'react'

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import Card from './components/Card/Card';
import Simplify from './components/Simplify/Simplify';
import Footer from './components/Footer/Footer';

const App = () => {

    return (
        <>
            <Navbar />
            <Header />
            <MainSection />
            <Card />
            <Simplify />
            <Footer />
        </>
    )
}

export default App
