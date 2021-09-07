import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-github-calendar'

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
                                                    <a href="/service">User Interface Development</a>
                                                    Build reusable User Interfaces that scale with the overall application using tech-stack such as Vanilla JavaScript, React, Redux, Responsive Styled Components, and more
                                                </li>

                                                <li>
                                                    <a href="/service"> NodeJs Backend With ExpressJs</a>
                                                    Expose Nodejs APIs using ExpressJs with proper async response and error handling 
                                                </li>

                                                <li>
                                                    <a href="/service"> Responsive Web Design</a>
                                                    Build responsive sites that delight each mouse click and hover. I use vanilla CSS, CSS within JavaScript, and CSS Preprocessors like Less
                                                </li>

                                                <li>
                                                    <a href="/service"> MySQL Relational Database</a>
                                                    Build and Host MySQL database on the Cloud
                                                </li>
                                            </ul>
                                        </div>
                                        
                                        <div style={{marginRight: 10}} className="fix active-light">
                                            <GitHubCalendar username="falmatad" />
                                        </div>
                                        
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service"> Software Engineer <span> - Zefa Consulting Inc</span></a> 03/2020 - Current
                                               </li>
                                               <li>
                                                   <a href="/service"> Self Employed Coding Instructor <span> EveryoneShouldCode LLC</span></a> 06/2019 - Current
                                               </li>
                                               <li>
                                                   <a href="/service"> Public School Coding Instructor <span> - Youth Enrichment League</span></a> 10/2018 - Current
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Web Development<span> - Lambda School, Remote Agile Learning</span></a> 09/2019 - 01/2020
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