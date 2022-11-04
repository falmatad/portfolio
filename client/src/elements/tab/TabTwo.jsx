import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Experience",
        tab3 = "Education";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service"> Frontend Development</a>
                                                    Reusable User Interfaces that scale with the overall application using tech-stack such as Vanilla JavaScript, React, Styled Components, ect..
                                                </li>

                                                <li>
                                                    <a href="/service"> Backend Development</a>
                                                    Fullstack applications using NodeJs, Sequalize, and SQL and NoSQL Databases
                                                </li>

                                                <li>
                                                    <a href="/service"> Cloud</a>
                                                    Build, Deploy, and manage Websites and Serverless Backends on AWS 
                                                </li>

                                                <li>
                                                    <a href="/service"> Mobile App</a>
                                                    Build Fullstack cross platform mobile applications using React Native.
                                                </li>

                                                <li>
                                                    <a href="/service"> Responsive Web Design</a>
                                                    Build responsive sites that delight each mouse click and hover using vanilla CSS, CSS within JavaScript, and CSS Preprocessors like Less
                                                </li>

                                                
                                            </ul>
                                        </div>
                                        
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service"> Fullstack Developer <span> - INTENT (intent.ag)</span></a> Oct 2021 – Present 
                                               </li>
                                               <li>
                                                   <a href="/service"> Software Engineer <span> - Zefa Consulting (zeefasys.com)</span></a> Apr 2020 – Nov 2021
                                               </li>
                                               <li>
                                                   <a href="/service"> Coding Teacher <span> - Youth Enrichment League</span></a> Oct 2018 – May 2019
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Web Development<span> - Bloomtech Institute </span></a> Sep 2019 - Jan 2020
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;