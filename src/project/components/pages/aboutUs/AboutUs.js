import React from 'react';
import { memberStats, governingMembers } from './aboutUsData';
import './aboutUs.css';

const colors = ['#e74c3c', '#7dbb18', '#00cccc', '#ffcc00']

export default class AboutUs extends React.Component {
    
    renderVisionMission=()=>{
        return(
            <section className='w-50 m-3'>
                        <div>
                            <h4 className='text-center'>Our Vision</h4>
                            <p>
                                GOPIO, aims to bring people of Indian Origin in the World together to promote their professional, cultural and social interests with a view to realizing their maximum potential in the service of Global peace, prosperity, happiness and compassion
                    </p>
                        </div>
                        <div>
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
                        </div>
                    </section>
        )
    }
    renderMemberSection=()=>{
        return(
            <section className=''>
            <div className='py-3'>
            <h4 className='text-center'>GOPIO Governing Body</h4>
            {this.renderMembersTable()}
            </div>
            <div className='my-3 w-100'>
                <h4 className='text-center my-0'>Member Types</h4>
                <div className='membership-types'>
                    {this.renderBoxes()}
                </div>
            </div>
        </section>

        )
    }
    renderBoxes = () => {
        return (
            memberStats.map((item, index) => {
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
            })
        )
    }
    renderMembersTable = () => {
        return (
            <table className='shadow-sm w-100'>
                {/* <thead>
                    <tr>
                        <th className='text-center p-1 ' colSpan={2}>GOPIO Governing Body</th>
                    </tr>
                </thead> */}
                <tbody>
                    {governingMembers.map((item, index) => {
                        return (
                            <tr>
                                <th className='p-2'>{item.designation}</th>
                                <td className='p-2'>{item.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
    render() {
        return (
            <main className='container shadow about-main-con'>
                <div className='d-flex'>
                {this.renderVisionMission()}
                {this.renderMemberSection()}    
                </div>
            </main>
        )
    }
}