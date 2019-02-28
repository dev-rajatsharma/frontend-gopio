import React from 'react';
import { memberStats, governingMembers } from './aboutUsData';
import './aboutUs.css';
import {Container, Row, Col} from 'react-bootstrap';

const colors = ['#e74c3c', '#7dbb18', '#00cccc', '#ffcc00']

export default class AboutUs extends React.Component {
    
    renderVisionMission=()=>{
        return(
            // <section className='w-50 m-3'>
            <Row>
            <Col sm={8} md={6}>
                            <h4 className='text-center'>Our Vision</h4>
                            <p>
                            GOPIO aims to bring People of Indian Origin together to promote their professional,
cultural and social interests with a view of realizing their maximum potential in the
service of Global peace, prosperity, happiness and compassion.
                    </p>
                        </Col>
                        <Col>
                            <h4 className='text-center'>Our Mission</h4>
                            <p>
                                - To empower, educate and enhance community awareness.
				</p>
                            <p>
                                - To involve in the civic responsibility to resolve issues of concern to the Indian American community.
				</p>
                            <p >
                                - To support and empower the members and community towards the economic, social, financial and political progress utilizing combined resources of People of Indian Origin.
				</p>
                            <p >
                                - To significantly contribute towards building strong relations between India and USA towards economical, educational and social progress.
				</p>
                    </Col>
                    </Row>
        )
    }
    renderMemberSection=()=>{
        return(
            <section className=''>
            {this.renderMembersTable()}
            {this.renderBoxes()}
        </section>

        )
    }
    renderBoxes = () => {
        return (
            <div className='my-3 w-100'>
                <h4 className='text-center my-0'>Member Types</h4>
                <div className='membership-types'>
                
            {memberStats.map((item, index) => {
                let specificColor = colors[index]
                let borderStyle = {
                    'borderColor': specificColor,
                    'border-style': 'solid',
                    'border-width': '0.3px'
                }
                return (
                    <div className='text-center m-3 px-3 shadow-sm memberStat-box' style={borderStyle}>
                        <div className=''>
                            <i className={item.icon}></i>
                        </div>
                        <h3 style={{'color': specificColor}}>{item.count}</h3>
                        <div>{item.memberType}</div>
                    </div>
                )
            })}
            </div>
            </div>
        )
    }
    renderMembersTable = () => {
        return (
            // <div className='py-3'>
            <Row>
                <Col>
                <h4 className='text-center'>GOPIO Governing Body</h4>
                <table className='table table-hover shadow-sm w-100'>
                    <tbody>
                        {governingMembers.map((item, index) => {
                            let designation = item.designation;
                            let name = (typeof item.name === 'string')? item.name: item.name.join();
                            return (
                                <tr>
                                    <th className='p-2'>{designation}</th>
                                    <td className='p-2'>{name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </Col>
            </Row>
        )
    }
    render() {
        return (
            // <main className='w-100 h-100 about-main-con'>
            <Container>
                {/* <section className=''> */}
                    {this.renderMembersTable()}
                    {/* DO NOT DELETE THE LINE BELOW, IT WILL BE ACTIVATED LATER */}
                    {/* {this.renderBoxes()} */} 
                {/* </section> */}
                    {this.renderVisionMission()}
            </Container>
            // </main>
        )
    }
}