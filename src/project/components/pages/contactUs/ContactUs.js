import React from 'react';
import { emailValidation } from '../../../utils';
import './contactUs.css';
import { contactDetails } from './contactUsData';

export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    renderContactDetails = () => {
        return (
            <table >
                {/* <thead>
                    <tr>
                        <th colSpan={2} className='text-center p-2'>
                            GOPIO-Virginia
                    </th>
                    </tr>
                </thead> */}
                <tbody>
                    {contactDetails.map((item, index) => {
                        return (
                            <tr>
                                <th className='p-2'>{item.field}</th>
                                <td className='p-2'>{item.value}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
    renderMap = () => {
        return (
            <div className='m-4 map-con'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.8891627210132!2d-77.22056428519547!3d38.90364985418164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64b1f9d08b623%3A0x2871f00e51e7889!2s2118+Tysons+Executive+Ct%2C+Dunn+Loring%2C+VA+22027%2C+USA!5e0!3m2!1sen!2sin!4v1545671338286"
                    frameborder={0}
                    className='shadow-sm w-100 w-100 h-100'
                    allowfullscreen
                    title='gmap'></iframe>
            </div>
        )
    }
    renderfeedBackForm = () => {
        return (
            <section className='rounded p-4 contact-form'>
                <h4>Connect With Us</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input type='text' className='form-control' value={this.state.name} name='name' placeholder='Enter name' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <input type='email' className='form-control' value={this.state.email} name='email' placeholder='Enter Email' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <textarea type='text' className='form-control' value={this.state.message} name='message' placeholder='Enter Message' onChange={this.handleChange}/>
                    </div>
                    <input type='submit' className='btn btn-info' value='Send Message' />
                </form>
            </section>
        )
    }
    handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (emailValidation(this.state.email)) {
            alert('message submitted')
            this.setState({
                name:'',
                email:'',
                message:''
            })
        } else alert('please verify the email and try again')
    }
    render() {
        return (
            <main className='d-flex  flex-column w-100 h-100 contact-main-con'>
                <div className='d-flex'>
                    <div className='p-4 contact-table'>
                        <h4> Contact Details</h4>
                        {this.renderContactDetails()}
                    </div>
                    {this.renderMap()}
                </div>
                {this.renderfeedBackForm()}
            </main>
        )
    }
}