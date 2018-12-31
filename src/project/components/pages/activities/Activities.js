import React from 'react';
import { boxes, workWithUs } from './activitiesData';
import './activities.css';
import teamwork from '../../../../img/activities/tab.jpg';

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
            <figure>
                <img src={teamwork} className='w-100' alt='teamwork' />
            </figure>
        )
    }
    renderWorkWithUs = () => {
        return (
            <div className=''>
                <h3>Why work with us </h3>
                {this.renderWorkWithUsContent()}
            </div>
        )
    }
    renderWorkWithUsContent = () => {
        return (
            <ul>
                {workWithUs.map((item, index) => {
                    return (
                        <li>{item.text}</li>
                    )
                })}
            </ul>
        )
    }
    renderBoxes = () => {
        return (
            boxes.map((item, index) => {
                let specificColor = colors[index]
                let borderStyle = {
                    'borderColor': specificColor,
                    'border-style': 'solid',
                    'border-width': '0.3px'
                }
                return (
                    <div className='mx-3'>
                        <div className='p-3' style={borderStyle}>
                            <div className='text-center'>
                                <i className={item.icon}></i>
                            </div>
                            <h3 style={{ 'color': specificColor }}>{item.heading}</h3>
                            <div>{item.content}</div>
                        </div>
                    </div>
                )
            })
        )
    }
    renderActivityBoxes = () => {
        return (
            <div className='d-flex'>
                {this.renderBoxes()}
            </div>
        )
    }
    render() {
        return (
            <main className='d-flex flex-column w-100 h-100 activities-main-con'>
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
                <div className='d-flex'>
                    {this.renderCollaboratePic()}
                    {this.renderWorkWithUs()}
                </div>
                {this.renderActivityBoxes()}
            </main>
        )
    }
}