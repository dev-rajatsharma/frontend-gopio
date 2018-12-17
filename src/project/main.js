import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomePage from './pages/homePage/HomePage';
import AboutUs from './pages/aboutUs/AboutUs';
import Activities from './pages/activities/Activities';
import Services from './pages/services/Services';
import PhotoGallery from './pages/photoGallery/PhotoGallery';
import ContactUs from './pages/contactUs/ContactUs';

export default class MainComponent extends React.Component {
    render() {
        return (
            <main>
                <header>
                    <Navbar />
                </header>
                <Switch>
                    <Route exact path='/' render={() => <Redirect to='/home' />} />
                    <Route exact path='/home' render={() => <HomePage />} />
                    <Route exact path='/about' render={() => <AboutUs />} />
                    <Route exact path='/services' render={() => <Services />} />
                    <Route exact path='/activities' render={() => <Activities />} />
                    <Route exact path='/gallery' render={() => <PhotoGallery />} />
                    <Route exact path='/contact' render={() => <ContactUs />} />
                </Switch>
                <Footer />
            </main>
        )
    }
}