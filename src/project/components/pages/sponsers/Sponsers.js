import React from 'react';
import { sponserData } from './sponserData';
import './sponsers.css';
import {Container, Row, Col} from 'react-bootstrap';

const colors = ['#e74c3c', '#7dbb18', '#00cccc', '#ffcc00'];

export default class Sponsers extends React.Component {

    renderSponserBenefits = () => {
        return (
            <React.Fragment>
            {/* <div className='d-flex'> */}
                {sponserData.map((item, index) => {
                    let specificColor = colors[index]
                    let borderStyle = {
                        'borderColor': specificColor,
                        'border-style': 'solid',
                        'border-width': '0.3px'
                    }
                    let benefits = item.benefits || [];
                    return (
                        // <div className='m-1 p-3 w-50' style={borderStyle}>
                        <Col style={borderStyle} className='m-1'>
                            <h4 style={{ 'color': specificColor }}>
                                {item.sponserType}
                            </h4>
                            <ul>
                                {benefits.map((benefit,index)=>{
                                    return(
                                        <li>{benefit}</li>
                                    )
                                })}
                            </ul>
                        </Col>
                        // </div>
                    )
                })}
            {/* </div> */}
            </React.Fragment>
        )
    }
    
    render() {
        return (
            <Container>
                <Row className="show-grid">
                {/* <main className='d-flex  flex-column w-100 h-100 servicies-main-con'> */}
                    <i className="fa fa-dollar-sign fa-5x"></i>
                    {this.renderSponserBenefits()}
                {/* </main> */}
                </Row>
            </Container>
        )
    }
}