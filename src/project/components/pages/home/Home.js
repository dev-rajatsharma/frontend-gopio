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
// import nancyPelosi1 from '../../../../img/home/nancyPelosi1.jpeg';
import ControlledCarousel from '../../common/corousel/ControlledCarousel';
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
import { Container, Row, Col, Image, Figure  } from 'react-bootstrap';
import VerticallyCenteredModal from '../../common/modal/VerticallyCenteredModal';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            eventsHeading: 'red',
            modalShow: false,
            modalPic: {}
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
    
    modalOpen = (e, pic, caption) =>{
        this.setState({
            modalPic:{'src':pic, 'caption':caption},
            modalShow: true})
    }
    modalClose = () =>{
        this.setState({ modalShow: false})
    }
    
//     renderGopioVirginiaIntro = () => {
//         return (
//             <section className='w-100'>
//                 {/* <p> */}
//                 GOPIO, as a non-partisan organization, brings together the Indian DIASPORA spread
// around the world for the betterment of the community to remind that the world is one
// family as we say “VASUDEVA KUTUMBAKAM”. GOPIO was founded in New York in
// 1989. In June 2010, GOPIO commenced a chapter in Virginia under the leadership of
// Mr. Jay Singh Bhandari. GOPIO Virginia was inaugurated in style on a cruise in the
// waters of the Potomac River. It was a full moon night and members enjoyed a non-stop
// 3-hour musical night by famous gazal singer Munni Begam on a motor boat. GOPIO
// aims to bring People of Indian Origin in the World together to promote their professional,
// cultural and social interests with a perspective of realizing their maximum potential in
// the service of global peace, prosperity, happiness and compassion.
//                 {/* </p> */}

//             </section>
//         )

//     }
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
                        placeholder='Email'
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
    renderSocialIcons=()=>{
        let localURL = 'www.gopiovirginia.com';
        return (
            <div className='my-3'>
                <h4>Get Social</h4>
                <div className='d-flex'>
                    <FacebookShareButton url={localURL} className='btn-social'>
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton url={localURL} className='btn-social'>
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <GooglePlusShareButton url={localURL} className='btn-social'>
                        <GooglePlusIcon size={32} round={true} />
                    </GooglePlusShareButton>
                    <LinkedinShareButton url={localURL} className='btn-social'>
                        <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>
                    <WhatsappShareButton url={localURL} className='btn-social'>
                        <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                </div>
            </div>

        )
    }
    // renderDonationBox=()=>{
    //     return(
    //         <div>
    //             Donate Now
    //         </div>
    //     )
    // }
    renderLeftColumn = () => {
        return (
            // <div className='left-con'>
            <Col sm={2} md={2}>
                    {/* {this.renderChairmanPic()} */}
                    <Image src={chairman1} thumbnail onClick={(e)=>this.modalOpen(e,chairman1)}/>
                    <p>Founder & President, Gopio Virginia</p>
            </Col>
        )
    }
    renderMiddleColumn = () => {
        return (
            // <div className='m-3 middle-con'>
            <Col sm={8} md={8}>
                <div className='carousel-con'>
                    <ControlledCarousel />
                </div>
                    {/* {this.renderGopioVirginiaIntro()} */}
                <p className='justify-content-center'>
                GOPIO, as a non-partisan organization, brings together the Indian DIASPORA spread
around the world for the betterment of the community to remind that the world is one
family as we say “VASUDEVA KUTUMBAKAM”. GOPIO was founded in New York in
1989. In June 2010, GOPIO commenced a chapter in Virginia under the leadership of
Mr. Jay Singh Bhandari. GOPIO Virginia was inaugurated in style on a cruise in the
waters of the Potomac River. It was a full moon night and members enjoyed a non-stop
3-hour musical night by famous gazal singer Munni Begam on a motor boat. GOPIO
aims to bring People of Indian Origin in the World together to promote their professional,
cultural and social interests with a perspective of realizing their maximum potential in
the service of global peace, prosperity, happiness and compassion.
                The initial thrust of GOPIO was to fight against human rights violation on behalf of
                people of Indian origin. Although this has been improved in the last one-decade, human
                rights violations continue to be a major issue for PIOs living outside India. GOPIO has
                also included in its priorities to pool resources, both financial and professional, for the
                benefit of PIOs, their respective countries and India.
                </p>
                <div className='d-flex'>
                    {this.renderMembershipBox()}
                    {this.renderSubscriptionForm()}
                </div>
                <div className='d-flex'>
                {this.renderSocialIcons()}
                {/* {this.renderDonationBox()} */}
                </div>
            </Col>
        )
    }
    renderRightColumn = () => {
        return (
            <Col >
                <h5 className='text-center' style={{ 'color': this.state.eventsHeading }}> Upcoming Events! </h5>
                {/* <div className='my-3'>
                    <figure className='m-0'>
                        <a href='https://pbdindia.gov.in/en' target='_blank' rel='noopener noreferrer'>
                            <img src={banarasEventPic} className='img-responsive img-thumbnail' alt='Banaras Event 2019' />
                        </a>
                    </figure>
                </div> */}
                {/* <div className='my-3'>
                    <figure className='m-0'>
                        <img src={march2019} className='img-responsive img-thumbnail' alt='march 2019' onClick={this.openPoster}/>
                    </figure>
                    <small>College scholarship for brilliant students</small>
                </div> */}
                <Image src={march2019} thumbnail onClick={(e)=>this.modalOpen(e,march2019)}/>
                <div className='border my-3 p-1'>
                <h6>10th Annual Award Gala Function</h6>
                <p>
                    For more details, click 
                    <button type='button' className='btn btn-info' onClick={()=>this.props.history.push('/activities')}>
                         here
                    </button>
                </p> 
                </div>
                </Col>
        )
    }
    
    render() {
        let {modalShow, modalPic} = this.state
        return (
            // <main className=' w-100 h-100 homepage-main-con'>
            <Container>
                <Row>
                    {this.renderLeftColumn()}
                    {this.renderMiddleColumn()}
                    {this.renderRightColumn()}
                </Row>
                <VerticallyCenteredModal show={modalShow} onHide={this.modalClose} pic={modalPic}/>
            </Container>
            // </main>
        )
    }
}