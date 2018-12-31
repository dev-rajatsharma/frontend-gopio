import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import Home from '../pages/home/Home';
import AboutUs from '../pages/aboutUs/AboutUs';
import Activities from '../pages/activities/Activities';
import Sponsers from '../pages/sponsers/Sponsers';
import Gallery from '../pages/gallery/Gallery';
import ContactUs from '../pages/contactUs/ContactUs';
import './main.css';

const HomeWithRouter = withRouter(Home);
const AboutUsWithRouter = withRouter(AboutUs);
const SponsersWithRouter = withRouter(Sponsers);
const ActivitiesWithRouter = withRouter(Activities);
const GalleryWithRouter = withRouter(Gallery);
const ContactUsWithrouter = withRouter(ContactUs);


export default class MainComponent extends React.Component {
    render() {
        return (
            <div className='container-fluid d-flex flex-column'>
                <Header />
                <div className='container-fluid'>
                    <div className='header-backdrop'>header backdrop</div>
                    <main className='shadow-sm main-con'>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to='/home' />} />
                            <Route exact path='/home' render={() => <HomeWithRouter />} />
                            <Route exact path='/about' render={() => <AboutUsWithRouter />} />
                            <Route exact path='/sponsers' render={() => <SponsersWithRouter />} />
                            <Route exact path='/activities' render={() => <ActivitiesWithRouter />} />
                            <Route exact path='/gallery' render={() => <GalleryWithRouter />} />
                            <Route exact path='/contact' render={() => <ContactUsWithrouter />} />
                        </Switch>
                    </main>
                    <div className='footer-backdrop'>footer backdrop</div>
                </div>
                <Footer />
            </div>
        )
    }
}