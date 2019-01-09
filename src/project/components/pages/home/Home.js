import React from 'react';
import './home.css';
import banarasEventPic from '../../../../img/activities/banarasEventPic.jpg';
import chairman1 from '../../../../img/home/chairman1_cropped.jpeg';
import { emailValidation } from '../../../utils';
import membershipForm from '../../../../img/home/Gopio_Membership_Form.pdf';
import logo from '../../../../img/logo2.jpeg';
import newYear1 from '../../../../img/events/newYear1.jpeg';
import newYear2 from '../../../../img/home/newyear2.jpeg';
import march2019 from '../../../../img/home/marchevent2.jpeg';
import { Link } from 'react-router-dom';
import nancyPelosi1 from '../../../../img/home/nancyPelosi1.jpeg';
import Corousel from '../../common/corousel/Corousel';
import {
    FacebookShareButton,
    TwitterShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    WhatsappShareButton} from 'react-share';
import {
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    GooglePlusIcon,
    LinkedinIcon} from 'react-share';

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
            <figure className='w-25 mx-3'>
            <Link to='/gallery'>
                <img src={chairman1} className='img-responsive img-rounded w-100' alt="chairman" />
            </Link>
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
        if(emailValidation(email)){
            this.setState({email: ''})
        }
    }
    renderMembershipBox = () => {
        return (
            <div className='w-50'>
                <h4>Membership Drive</h4>
                <div>
                    To become Member of GOPIO Virginia - Download, complete the form and send to the address given in the form along with membership dues.
                    </div>
                <button type='button' className='btn btn-sm btn-info' onClick={this.handleClickMembership}>Download membership form!</button>
            </div>
        )
    }
    handleClickMembership = () => {
        window.open(membershipForm)
    }
    openPoster=(e)=>{
        console.log(e.target.src)
        window.open(e.target.src)
    }
    getSocialIcons=()=>{
        let localURL = '#';
        return (
            <div className='my-3'>
                <h4>Get Social</h4>
                <div className='d-flex'>
                    <FacebookShareButton url={`http://www.facebook.com/sharer.php?u=${localURL}`} className='btn-social'>
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton url={`http://www.twitter.com/intent/tweet?url=${localURL}`} className='btn-social'>
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <GooglePlusShareButton url={`https://plus.google.com/share?url=${localURL}`} className='btn-social'>
                        <GooglePlusIcon size={32} round={true} />
                    </GooglePlusShareButton>
                    <LinkedinShareButton url={`https://www.linkedin.com/shareArticle?mini=true&url=${localURL}`} className='btn-social'>
                        <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>
                    <WhatsappShareButton url={`whatsapp://send?text=${localURL}`} className='btn-social'>
                        <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                </div>
            </div>

        )
    }
    renderLeftColumn = () => {
        return (
            <div className='left-con'>
                <div className='my-1'>
                    <img src={logo} className='img-responsive logo-img' alt='GOPIO Logo' onClick={this.handleClickLogo} />
                </div>
                <div className='my-2'>
                    <img src={newYear1} className='img-responsive img-thumbnail' alt='newyear' onClick={this.openPoster}/>
                </div>
                {/* <div className='my-2'>
                    <figure className='m-0'>
                        <img src={nancyPelosi1} className='img-responsive img-thumbnail' alt='Text' onClick={this.openPoster}/>
                    </figure>
                    <small>Parliament Speaker Nancy Pelosi</small>
                </div> */}
                
                <div className='border my-3 p-1'>
                    GOPIO International Chamber of Commerce (GICC) Is Coming Soon!
                </div>
            </div>
        )
    }
    renderMiddleColumn = () => {
        return (
            <div className='m-3 middle-con'>
                <Corousel />
                <div className='d-flex'>
                    {this.renderGopioVirginiaIntro()}
                    {this.renderChairmanPic()}
                </div>
                <p>
                    The initial thrust of GOPIO was fighting human rights violation of people of Indian origin. Although this has been improved in the last one decade, human rights violations continue to be a major issue for PIOs living outside India. GOPIO has now set its priorities in pooling our resources, both financial and professional, for the benefit of PIOs, the countries they come from and India.
                </p>
                <div className='d-flex'>
                    {this.renderMembershipBox()}
                    {this.renderSubscriptionForm()}
                </div>
                {this.getSocialIcons()}
            </div>
        )
    }
    renderRightColumn = () => {
        return (
            <div className='right-con'>
                <h5 className='text-center' style={{ 'color': this.state.eventsHeading }}> Upcoming Events! </h5>
                <div className='my-3'>
                <figure className='m-0'>
                    <a href='https://pbdindia.gov.in/en' target='_blank' rel='noopener noreferrer'>
                        <img src={banarasEventPic} className='img-responsive img-thumbnail' alt='Banaras Event 2019' />
                    </a>
                </figure>
                {/* <small>Pravasiya Bhartiya Diwas</small> */}

                </div>
                <div className='my-3'>
                    <figure className='m-0'>
                        <img src={march2019} className='img-responsive img-thumbnail' alt='march 2019' onClick={this.openPoster}/>
                    </figure>
                    <small>College scholarship for brilliant students</small>
                </div>
                <div className='border my-3 p-1'>
                <h6>10th Annual Award Gala Function</h6>
                <p>
                    For more details, click 
                    <button type='button' className='btn btn-info' onClick={()=>this.props.history.push('/activities')}>
                         here
                    </button>
                </p> 
                </div>
            </div>
        )
    }
    
    render() {
        return (
            <main className='d-flex w-100 h-100 homepage-main-con'>
                {this.renderLeftColumn()}
                {this.renderMiddleColumn()}
                {this.renderRightColumn()}
            </main>
        )
    }
}