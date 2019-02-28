import React from 'react';
import { boxes, workWithUs } from './activitiesData';
import './activities.css';
import teamwork from '../../../../img/activities/tab.jpg';
import {Container,Row,Col, Image} from 'react-bootstrap';

const colors = ['#e74c3c', '#7dbb18', '#00cccc', '#ffcc00'];

export default class Activities extends React.Component {
    componentDidMount() {
        this.myfunction(document, 'script', 'facebook-jssdk');
    }
    myfunction(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.2';
        fjs.parentNode.insertBefore(js, fjs);
    }
    renderCollaboratePic = () => {
        return (
            <Col md={5}>
                {/* <figure>
                    <img src={teamwork} className='w-100' alt='teamwork' />
                </figure> */}
                <Image src={teamwork} thumbnail  style={{border:'none'}}/>
            </Col>
        )
    }
    renderWorkWithUs = () => {
        return (
            // <div className=''>
            <Col md={7}>
                <h3>Why work with us </h3>
                {/* {this.renderWorkWithUsContent()} */}
                <ul>
                {workWithUs.map((item, index) => {
                    return (
                        <li>{item.text}</li>
                    )
                })}
            </ul>
            </Col>
            // </div>
        )
    }
    // renderWorkWithUsContent = () => {
    //     return (
    //         <ul>
    //             {workWithUs.map((item, index) => {
    //                 return (
    //                     <li>{item.text}</li>
    //                 )
    //             })}
    //         </ul>
    //     )
    // }
    renderGalaEvent=()=>{
        return(
            <Row>
                <Col>
            <h4 className='text-danger'>10th Annual Award Gala Function</h4>
            <h6>Second largest event</h6>                 
                6 Indians who achieve extraordinary recognition in the fields of :-
                <ol>
                    <li>Science & Technology</li>
                    <li>Entrepreneurship  & Innovation</li>
                    <li>Education & Research</li>
                    <li>Journalism</li>
                    <li>Community Service</li>
                    <li>Arts & Culture</li>
                    <li>Medicine</li>
                </ol>
                will be awarded by top US officials
                <p><b>More details coming soon!</b></p>
            </Col>
            </Row>
        )
    }
    // renderBoxes = () => {
    //     return (
    //         boxes.map((item, index) => {
    //             let specificColor = colors[index]
    //             let borderStyle = {
    //                 'borderColor': specificColor,
    //                 'border-style': 'solid',
    //                 'border-width': '0.3px'                
    //             }
    //             return (
    //                 // <div className='mx-3'>
    //                     // <div className='p-3' style={borderStyle}>
    //                     <Col style={borderStyle}>
    //                         <div className='text-center'>
    //                             <i className={item.icon}></i>
    //                         </div>
    //                         <h3 style={{ 'color': specificColor }}>{item.heading}</h3>
    //                         <div>{item.content}</div>
    //                     </Col>
    //                     // </div>
    //                 // </div>
    //             )
    //         })
    //     )
    // }
    renderActivityBoxes = () => {
        return (
            <Row>
            {boxes.map((item, index) => {
                let specificColor = colors[index]
                let borderStyle = {
                    'borderColor': specificColor,
                    'border-style': 'solid',
                    'border-width': '0.3px',
                    'margin': '0.3rem 0'
                }
                return (
                        <Col style={borderStyle} md={3}>
                            <div className='text-center'>
                                <i className={item.icon}></i>
                            </div>
                            <h3 style={{ 'color': specificColor }}>{item.heading}</h3>
                            <div>{item.content}</div>
                        </Col>
                )
                    
            })}
            </Row>
        )
    }
    render() {
        return (
            // <main className='flex-column w-100 h-100 activities-main-con'>
            <Container>
                <Row>

                {/* <div
                    className="fb-page"
                    data-href="https://www.facebook.com/gopiova/"
                    data-tabs="timeline"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="false">
                    <blockquote cite="https://www.facebook.com/facebook"
                        className="fb-xfbml-parse-ignore">
                        <a href="https://www.facebook.com/facebook">Facebook</a>
                    </blockquote>
                </div> */}
                {/* <a href='https://pbdindia.gov.in/en' target='_blank'>
                    <img src={banarasEventPic} alt='Banaras Event 2019' />
                </a> */}
                {/* <div className='d-flex'> */}
                    {this.renderCollaboratePic()}
                    {this.renderWorkWithUs()}
                {/* </div> */}
                </Row>
                {this.renderActivityBoxes()}
                {this.renderGalaEvent()}
            </Container>
            // </main>
        )
    }
}