import React from 'react';
import { emailValidation, nameValidation } from '../../../utils';
import './contactUs.css';
import { contactDetails } from './contactUsData';
import {Container,Row,Col} from 'react-bootstrap';

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
            <Col style={{margin:'1rem'}}>
                            <h4> Contact Details</h4>
            <table className='shadow-sm'>
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
                                <th className='p-2 txt-info'><i className={item.class} title={item.title}></i></th>
                                <td className='p-2'>{item.value}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </Col>
        )
    }
    renderMap = () => {
        return (
            // <div className='m-4 map-con'>
            <Col style={{margin:'1rem'}}>
                <h4>Locate Us on Map</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.8891627210132!2d-77.22056428519547!3d38.90364985418164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64b1f9d08b623%3A0x2871f00e51e7889!2s2118+Tysons+Executive+Ct%2C+Dunn+Loring%2C+VA+22027%2C+USA!5e0!3m2!1sen!2sin!4v1545671338286"
                    frameborder={0}
                    className='shadow-sm w-100 w-100 h-100'
                    allowfullScreen
                    title='gmap'>
                </iframe>
            </Col>
            // </div>
        )
    }
    renderfeedBackForm = () => {
        return (
            // <section className='rounded p-4 contact-form'>
            <Col style={{margin:'2rem'}}>
                <h4>Connect With Us</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input type='text' className='form-control' value={this.state.name} name='name' placeholder='Enter Firstname lastname' onChange={this.handleChange} required/>
                    </div>
                    <div className='form-group'>
                        <input type='email' className='form-control' value={this.state.email} name='email' placeholder='Enter Email' onChange={this.handleChange} required/>
                    </div>
                    <div className='form-group'>
                        <textarea type='text' className='form-control' value={this.state.message} name='message' placeholder='Enter Message' onChange={this.handleChange} required/>
                    </div>
                    <input type='submit' className='btn btn-info' value='Send Message' />
                </form>
            </Col>
        )
    }
    handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.contactFormValidation()) {
            alert('please verify the details and try again')
        } else {
            alert('message submitted')
            this.setState({
                name:'',
                email:'',
                message:''
            })
    }
}
    contactFormValidation=()=>{
        let {name, email, message} = this.state
        if(!(name && nameValidation(name.trim()))){
            return false
        }else if(!(email && emailValidation(email))){
            return false
        }else if(!message) {
            return false
        } else return true
    }
    render() {
        return (
            <Container>
                <Row>
                    {this.renderContactDetails()}
                    {this.renderMap()}
                </Row>
                <Row>
                    {this.renderfeedBackForm()}
                </Row>
            </Container>
        )
    }
}