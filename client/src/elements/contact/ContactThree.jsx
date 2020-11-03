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
            contactDate: moment(new Date().toISOString()).format("YYYY-MM-DD HH:mm:ss"),
            alert: ''
        };
        this.handelSubmit = this.handelSubmit.bind(this);
    }

     handelSubmit(e) {
        
        const {firstName, lastName, email, company, detailedMessage, contactDate} = this.state

        axios.post('https://portfolio-node-backend-app.herokuapp.com/api/insert-form',
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            company: company,
            detailedMessage: detailedMessage,
            contactDate: contactDate
        }).then((response) => {
            if (response) {
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    company: '',
                    detailedMessage: '',
                    contactDate: moment(new Date().toISOString()).format("YYYY-MM-DD HH:mm:ss")
                })
                this.setState({alert: "Thanks, your info was sent to me, on a secure Heroku MySQL database :)"})
            }
        }).catch(function (error) {
                    if (error) {
                        this.setState({
                            alert: "The form wasn't sent, please refresh and try again :)"
                        })
                    }
        });
        
        e.preventDefault()


    }
    
    render(){
        
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">{this.props.contactTitle}</h2>
                                <p className="description">I am available for direct hire, contract, intership, and freelance roles. Reach out to me by phone: <a href="tel:+1(952)855-2202">(952)855-2202</a>, email:
                                    <a href="mailto:falmata.dawano@gmail.com"> falmata.dawano@gmail.com</a>, or the form below.</p>
                            </div>
                            <div className="form-wrapper">
                                <form onSubmit={this.handelSubmit}>
                                { this.state.alert === '' ?
                                    <>
                                    
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="item01"
                                            value={this.state.firstName}
                                            onChange={(e)=>{this.setState({firstName: e.target.value});}}
                                            placeholder="First Name "
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="item02"
                                            value={this.state.lastName}
                                            onChange={(e)=>{this.setState({lastName: e.target.value});}}
                                            placeholder="Last Name"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item03"
                                            value={this.state.email}
                                            onChange={(e)=>{this.setState({email: e.target.value});}}
                                            placeholder="Your email"
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
                                            placeholder="Your Detailed Message for me..."
                                        />
                                    </label>
                                    </>
                                    : null}
                                    <div className="section-title text-left mb--50">{ this.state.alert !== ''? <p style={{color:'green', margin: '5px'}}>{this.state.alert}</p>: null}</div>
                                    { this.state.alert === '' ? <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Send</button>: null}
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