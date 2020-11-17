import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Falmata Dawano Portfolio</title>
                    <meta name="description" content="My name is Falmata Dawano, a FullStack web developer that's looking to create an impact in an awesome company/organization!" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
