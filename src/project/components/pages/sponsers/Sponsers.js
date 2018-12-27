import React from 'react';
import { sponserData } from './sponserData';
import './sponsers.css';

const colors = ['#e74c3c', '#7dbb18', '#00cccc', '#ffcc00'];

export default class Sponsers extends React.Component {

    renderSponserBenefits = () => {
        return (
            <div className='d-flex'>
                {sponserData.map((item, index) => {
                    let specificColor = colors[index]
                    let borderStyle = {
                        'borderColor': specificColor,
                        'border-style': 'solid',
                        'border-width': '0.3px'
                    }
                    let benefits = item.benefits || [];
                    return (
                        <div className='m-1 p-3 w-50' style={borderStyle}>
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

                        </div>
                    )
                })}
            </div>
        )
    }
    
    render() {
        return (
            <main className='shadow servicies-main-con'>
            <i className="fa fa-dollar-sign fa-5x"></i>
                {this.renderSponserBenefits()}
            </main>
        )
    }
}