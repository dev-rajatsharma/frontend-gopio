import React from 'react';
import './home.css';
import banarasEventPic from '../../../../img/activities/banarasEventPic.jpg';
import chairman1 from '../../../../img/home/chairman1_cropped.jpeg';
import { emailValidation } from '../../../utils';
import membershipForm from '../../../../img/services/Gopio_Membership_Form.pdf';
import logo from '../../../../img/logo2.jpeg';
import newYear1 from '../../../../img/events/newYear1.jpeg';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            eventsHeading: 'red'
        }
    }
    componentDidMount = () => {
        setInterval(() => {
            if (this.state.eventsHeading === 'red') {
                this.setState({ eventsHeading: 'orange' })
            } else {
                this.setState({ eventsHeading: 'red' })
            }
        }, 500)
    }
    renderUpcomingEvents = () => {
        return (
            <React.Fragment>
                <figure>
                    <figcaption><i>January 2019</i></figcaption>
                    <a href='https://pbdindia.gov.in/en' target='_blank' rel='noopener noreferrer'>
                        <img src={banarasEventPic} className='img-responsive img-thumbnail' alt='Banaras Event 2019' />
                    </a>
                </figure>
                <div className='m-3'>
                    Another exclusive event coming up in March 2019!
                </div>
            </React.Fragment>
        )
    }
    renderGopioVirginiaIntro = () => {
        return (
            <section className='w-100'>
                {/* <p> */}
                GOPIO International, as non partisan and a political entities brings together the Indian DIASPORA spread around the world for the betterment of the community to remind that the world is a big family as we say “VASUDEVA KUTUMBAKAM”.
                GOPIO, International was founded in New York in 1989. In June, 2010 GOPIO has commenced a chapter in Virginia under the leadership of Mr.Jay Singh Bhandari.
                GOPIO Virginia was inagrurated on a cruise in the water's of the Potomac River. It was a full moon night and members enjoyed a 3 hour ride on a boat with a concert from Munni Begam, well-known Gazal singer. The very first year our membership grew to 65 members.
                GOPIO, aims to bring people of Indian Origin in the World together to promote their professional, cultural and social interests with a view to realizing their maximum potential in the service of Global peace, prosperity, happiness and compassion.

                {/* </p> */}

            </section>
        )

    }
    renderChairmanPic = () => {
        return (
            <figure className='m-3 chairman1'>
                <img src={chairman1} className='img-responsive img-rounded w-100' alt="chairman" />
                <figcaption className='text-center'>
                    <small>
                        Mr. Jay Bhandari, Founder & President
                    </small>
                </figcaption>
            </figure>
        )
    }
    renderSubscriptionForm = () => {
        return (
            <form className='mx-5 subscriber-form' onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='subscriberEmail' className='text-danger'> Subscribe to GOPIO newsletter below  </label>
                    <input type='email' id='subscriberEmail' className='form-control'
                        placeholder='Enter email here...'
                        value={this.state.email} required
                        onChange={this.handleChangeEmail} />
                </div>
                <input type='submit' className='form-control btn btn-sm btn-info' value='Subscribe' />
            </form>
        )
    }
    handleChangeEmail = (e) => {
        let value = e.target.value;
        this.setState({
            email: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let email = this.state.email;
        // if(emailValidation(email)){
            window.location.reload();
        // }
    }
    renderMembershipBox = () => {
        return (
            <div className='w-50'>
                <h4>Membership Drive</h4>
                <div>
                    To become Member of GOPIO Virginia - Download, complete the form and send to the address given in the form along with membership dues.
                    </div>
                <button type='button' className='btn btn-sm btn-info' onClick={this.handleClickMemberShip}>Download membership form!</button>
            </div>
        )
    }
    handleClickMemberShip = () => {
        window.open(membershipForm)
    }
    renderLeftColumn = () => {
        return (
            <div className='left-con'>
                <div className='my-1'>
                    <Link to='/home'>
                        <img src={logo} className='img-responsive logo-img' alt='GOPIO Logo' onClick={this.handleClickLogo} />
                    </Link>
                </div>
                <div>
                    <a href='#' target='_blank' rel='noopener noreferrer'>
                        <img src={newYear1} className='img-responsive img-thumbnail' alt='Text' />
                    </a>
                </div>
                <div className='m-3'>
                    GOPIO International Chamber of Commerce (GICC) Is Coming Soon!
                </div>
            </div>
        )
    }
    renderMiddleColumn = () => {
        return (
            <div className='m-3 middle-con'>
                {/* {this.renderGopioIntro()} */}
                <div className='d-flex'>
                    {this.renderGopioVirginiaIntro()}
                    {this.renderChairmanPic()}
                </div>
                <p>
                    The initial thrust of GOPIO was fighting human rights violation of people of Indian origin. Although this has been improved in the last one decade, human rights violations continue to be a major issue for PIOs living outside India. GOPIO has now set its priorities in pooling our resources, both financial and professional, for the benefit of PIOs, the countries they come from and India.
                </p>
                {/* <p>
                    GOPIO, aims to bring people of Indian Origin in the World together to promote their professional, cultural and social interests with a view to realizing their maximum potential in the service of Global peace, prosperity, happiness and compassion
                </p> */}
                <div className='d-flex'>
                    {this.renderMembershipBox()}
                    {this.renderSubscriptionForm()}
                    <i className="fa fa-facebook-square fa-4x"></i>
                </div>
            </div>
        )
    }
    renderRightColumn = () => {
        return (
            <div className='right-con'>
                <h5 className='text-center' style={{ 'color': this.state.eventsHeading }}> Upcoming Events! </h5>
                {this.renderUpcomingEvents()}
            </div>
        )
    }

    render() {
        return (
            <main className='shadow d-flex homepage-main-con'>
                {this.renderLeftColumn()}
                {this.renderMiddleColumn()}
                {this.renderRightColumn()}
            </main>
        )
    }
}