import React, { Component } from "react";
import axios from "axios";
import moment from "moment"


class ContactThree extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            detailedMessage: '',
            contactDate: moment(new Date().toISOString()).format("YYYY-MM-DD HH:mm:ss")
        };
        this.handelSubmit = this.handelSubmit.bind(this);
    }
    

     handelSubmit = (e) => {
        
        
        const {firstName, lastName, email, company, detailedMessage, contactDate} = this.state

        axios.post('http://localhost:5000/api/insert-form',
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            company: company,
            detailedMessage: detailedMessage,
            contactDate: contactDate
        }).then((response) => {
            alert("Contact Sent")
            console.log(response)
        }).catch(function (error) {
                    console.log(error);
        });
        e.preventDefault()

    }
    
    render(){
        const date = moment(new Date().toISOString()).format("YYYY-MM-DD HH:mm:ss")
        console.log( date)
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">{this.props.contactTitle}</h2>
                                <p className="description">I am available for freelance work. Connect with me via phone: <a href="tel:+8801923088574">01923 088574</a> or email:
                                    <a href="mailto:admin@example.com"> admin@example.com</a> </p>
                            </div>
                            <div className="form-wrapper">
                                <form onSubmit={e => {this.handelSubmit(e)}}>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="item01"
                                            value={this.state.firstName}
                                            onChange={(e)=>{this.setState({firstName: e.target.value});}}
                                            placeholder="Your First Name "
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="item02"
                                            value={this.state.lastName}
                                            onChange={(e)=>{this.setState({lastName: e.target.value});}}
                                            placeholder="Last Name(dont worry i dont sell your information...is what they all say)"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item03"
                                            value={this.state.email}
                                            onChange={(e)=>{this.setState({email: e.target.value});}}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="company"
                                            id="item04"
                                            value={this.state.company}
                                            onChange={(e)=>{this.setState({company: e.target.value});}}
                                            placeholder="Company"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item05"
                                            name="detailedMessage"
                                            value={this.state.detailedMessage}
                                            onChange={(e)=>{this.setState({detailedMessage: e.target.value});}}
                                            placeholder="Your Detailed Message for me goes here.."
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src={`${this.props.contactImages}`} alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactThree;