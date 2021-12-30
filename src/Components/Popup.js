import React, { Component } from 'react'
import Footer from "./Footer";
import Header from "./Header";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';


export default class Popup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            otp: ''
        };
    }
    handleChange = (otp) => this.setState({ otp });
    openModal = () => { this.setState({ isOpen: true }); }
    closeModal = () => { this.setState({ isOpen: false }); }
    render() {

        return (

            <>
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
                                    <div className=""><Link to="/agent"><Button className="btno blue">BACK<img src="./share.png" /></Button> </Link><Button className="btno green" onClick={this.openModal}>
                                        Open Case
                                        <img src="./file.png" />
                                    </Button>

                                        <Modal
                                            onHide={this.handleClose}
                                            backdrop="static"
                                            keyboard={false}
                                            show={this.state.isOpen}
                                            onHide={this.closeModal}
                                        >

                                            <Modal.Body>
                                                <div className="text-center">
                                                    <Button variant=" close" onClick={this.closeModal}>
                                                        <img src="./Images/cross.png" alt="" />
                                                    </Button>
                                                    <div className="modal-body">
                                                        <p className='popup-p'>Enter the verification code we just sent on client’s mobile.</p>
                                                        <div className='otpno'><OtpInput
                                                            value={this.state.otp}
                                                            onChange={this.handleChange}
                                                            numInputs={4}
                                                            separator={<span>-</span>}
                                                        /></div>
                                                        <p className='popup-p2'>Please wait for one minute to receive OTP
                                                            Didn't receive a code!<span className='resend'><a href='#'>Resend</a></span></p>
                                                        <Link to="/agentcase"><button className='popup-btn' type='submit'>VERIFY</button></Link>
                                                    </div>
                                                </div>
                                            </Modal.Body>

                                        </Modal></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <Footer />
            </>
        )
    }
}