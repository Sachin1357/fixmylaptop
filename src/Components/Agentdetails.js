import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const AgentDetails = () => {
    return (
        <div>
            <Header />
            
                <div className="container">
                    <div className="detailscnt">
                        <p><span className="strng">Case ID:</span> #12001 </p>
                        <h4 className="text-uppercase">Personal Details</h4>
                        <ul className="detl">
                            <li><span className="strng">Your Name</span><span className="cntname">Aditya Khanna</span></li>
                            <li><span className="strng">Email</span><span className="cntname">adityakhanna@gmail.com</span></li>
                            <li><span className="strng">Phone</span><span className="cntname">987654321</span></li>
                        </ul>
                        <h4 className="text-uppercase">Address</h4>
                        <ul className="detl">
                            <li><span className="strng">Flat No/House No</span><span className="cntname">G-30</span></li>
                            <li><span className="strng">Area</span><span className="cntname">Sec- 120</span></li>
                            <li><span className="strng">City</span><span className="cntname">Noida</span></li>
                            <li><span className="strng">Pin code</span><span className="cntname">2001236</span></li>
                        </ul>
                        <h4 className="text-uppercase">Laptop Details</h4>
                        <ul className="detl">
                            <li><span className="strng">Brand</span><span className="cntname">Dell</span></li>
                            <li><span className="strng">Model No</span><span className="cntname">2123</span></li>
                            <li><span className="strng">Problem</span><span className="cntname">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span></li>
                        </ul>
                        <div className="footdetail">
                            <div className="container">
                                <div className="row">
                                    <div className=""><Link to="/agent" className="btno blue">BACK<img src="./share.png" /> </Link><Link to="/agentcase" className="btno green" data-toggle="modal" data-target="#myModal">OPEN CASE  <img src="./file.png" /></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <Footer />
        </div>
    )
}
export default AgentDetails;