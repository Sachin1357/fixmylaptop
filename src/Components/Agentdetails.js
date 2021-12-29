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

                 {/* Modal 
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">

                        Modal content
                        <div className="modal-content text-center">

                            <button type="button" className="close" data-dismiss="modal"><img src="img/cross.png" /></button>
                            <div className="modal-body">
                                <div className="modalhead">
                                    <p>Enter the verification code we just sent on client’s  mobile.</p>
                                </div>
                                <form id="verifier" method="post">
                                    <div className="">
                                        <div id="otp_message"></div>

                                        <div className="divouter">
                                            <div id="divInner">
                                                <input id="partitioned" name="otp" type="text" className="number" maxlength="4" />
                                            </div>
                                        </div>
                                        <div className="modalfoot">
                                            <p className="text-center">Please wait for one minute to receive OTP<br />
                                                Didn't receive a code! <span className="yellow"><a id="resend_btn" href="#">Resend</a></span></p>
                                        </div>
                                        <div className="button-row">
                                            <button name="submit" type="submit" className="btn green"  ><a href="agent-case-open.html">VERIFY <img src="img/right-arrow.png" /></a></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div> */}

           

            <Footer />
        </div>
    )
}
export default AgentDetails;