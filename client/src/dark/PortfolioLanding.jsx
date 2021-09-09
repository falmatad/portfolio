import React, {Component} from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {FaLinkedinIn } from "react-icons/fa";
import GitHubCalendar from 'react-github-calendar'
const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/'}
]

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my World',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]

const TabOne = [
    
    {
        image: '04',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-04.jpg',
        category: 'FrontEnd Developer',
        title: 'Daryeel Health',
        link:'',
        detail: 'React, Redux, SCSS, Express, NodeJs, JavaScript, HTML, CSS',
        code:'https://github.com/falmatad/dh'
    },
    {
        image: '05',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-05.jpg',
        category: 'Mobile Developer',
        title: 'Al-Amaan Community Center Mobile App',
        link:'https://appdistribution.firebase.google.com/pub/i/cf7f021388234ca1',
        detail: 'JavaScript, React Native, CSS, AWS Lambda, AWS API Gateway, AWS DynamoDB',
        code:''
    },
    {
        image: '03',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-03.jpg',
        category: 'Frontend Developer ',
        title: 'A Better Proffesor App',
        link:'https://buildweek-better-professor.netlify.app/',
        detail: 'React, Redux, Styled Components, JavaScript, CSS, Json Web Token, HTML, RESTful API',
        code:'https://github.com/Build-Week-Better-Professor/Front-end'
    },
    {
        image: '01',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-01.jpg',
        category: 'Web Designer',
        title: 'Essentialisim - Landing Page',
        link:'https://essentialismlanding.netlify.app/',
        detail: 'HTML5, CSS3, LESS Preprocessor, JavaScript, Responsive Design',
        code:'https://github.com/Build-Week-Essentialism-2/Essentialism-UI'
    },
    {
        image: '02',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-02.jpg',
        category: 'Front End Developer',
        title: 'Github User search',
        link:'https://github-user-info-search.netlify.app/',
        detail: 'React, RESTFul API, React Styled Components, JavaScript, CSS, HTML',
        code:'https://github.com/falmatad/React-Github-User-Card/tree/falmata-dawano'
    }
]

class PortfolioLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            isOpen: false,
        };
    }
    
    render () {
        let title = 'A bit about me',
        description = "Software Engineer, Web Developer, and Web Designer with a solid grasp of web development technologies and agile based development methodologies. As a Software Engineer at Zeefasys, I’ve had direct experience using various agile methodology tools, owning a product from start to finish, and being a liaison between clients and the engineering team. I am currently looking to join engineering teams that are solving unique problems, value learning and sharing knowledge. Learn more about me by downloading my CV, checking out my projects, and shooting me a message in the form below. It will go to a MySQL Database hosted in the cloud :) ";

        const { tab1, isOpen } = this.state;

        return (
        <div className={"active-light"}>
            <Helmet pageTitle="Portfolio Landing" />
            <div id="home" className="fix">
                        
                <div className="slider-wrapper">
                    
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            
                                            <h1 className="title">I’m Falmata Dawano, <br/>
                                            <TextLoop interval={1800}>
                                                <span> Software Engineer</span>
                                                <span> Web Developer</span>
                                                <span> Web Designer</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix active-dark">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-8.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                        
                                    </div>
                                    <div 
                                        style={{color: '#c6c9d8bf', marginTop:'20px'}}
                                    >
                                        <a style={{color: '#c6c9d8bf'}} href="https://github.com/falmatad">
                                            My GitHub Contribution Chart. Click to learn more.
                                            <GitHubCalendar username="falmatad" />
                                        </a>
                                    </div>
                                    <div style={{marginTop:'20px'}}>
                                        <a className="rn-btn" href="/assets/pdf/MyResumeFalmata.pdf" download='falmata-dawano-resume'>
                                            <span>Download My CV</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}

            {/* Start Service Area  */}

            <div id="portfolio" className="fix">
            <div className="rn-portfolio-area ptb--120 bg_color--1 line-separator">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-center">
                                    <h2>Portfolio</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {TabOne.map((value , index) => (
                                <div className="col-lg-6" key={index}>
                                    {isOpen && (

                                        <Lightbox
                                            mainSrc={TabOne[tab1].bigImage}
                                            nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                                            prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                                            onCloseRequest={() => this.setState({ isOpen: false })}
                                            imageCaption={[<h3 style={{color: 'white'}}>{TabOne[tab1].detail}</h3>]}
                                            onMovePrevRequest={() =>
                                            this.setState({
                                                tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                            })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    tab1: (tab1 + 1) % TabOne.length,
                                                })
                                            }
                                            toolbarButtons={[<a href={TabOne[tab1].link ? `${TabOne[tab1].link}`:`#`} style={{marginTop:'7px', marginRight:'5px', textAlign: 'center', padding: '5px', display: 'revert' }} className="rn-button-style--2 btn-solid" id="mc-embedded-subscribe">Visit</a>, <a href={TabOne[tab1].code ? `${TabOne[tab1].code}`: `#`} style={{marginTop:'7px', marginRight:'5px', textAlign: 'center', padding: '5px', display: 'revert' }} className="rn-button-style--2 btn-solid" id="mc-embedded-subscribe">{TabOne[tab1].code ? null:`Private`} CodeBase</a>]}
                                        />
                                    )}
                                    <div className="item-portfolio-static">
                                        <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                            <div className="portfolio-static">
                                                <div className="thumbnail-inner">
                                                    <div className="thumbnail">
                                                        <a href="#portfolio-details">
                                                            <img src={`/assets/images/portfolio/big/dp-big--portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="inner">
                                                        <p>{value.category}</p>
                                                        <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
                {/* End Portfolio Area  */}  
            
            {/* End Service Area  */} 

            {/* Start COntact Area */}
            <div id="contact" className="fix active-dark">
                <div className="rn-contact-area ptb--120 bg_color--1">
                    <ContactThree contactImages="/assets/images/about/about-9.jpg" contactTitle="Hire Me." />
                </div>
            </div>
            {/* End COntact Area */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
        </div>
        )
    }
}

export default PortfolioLanding;
