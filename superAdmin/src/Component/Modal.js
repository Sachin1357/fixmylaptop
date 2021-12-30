import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


// const [fullscreen] = useState(true);
// const [show, setShow] = useState(false);

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);


export default class Modaldata extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            name: '',
            flat:'',
            isOpen: false,
            fullscreen: true
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
        this.setState({
            startDate: date
        })
    }
    handleValueChange =(event) =>{
        this.setState({
            name:event.target.value,
            flat:event.target.value
        })
    }
    openModal = () => {this.setState({ isOpen: true });}
    closeModal = () => {this.setState({ isOpen: false });}
    render() {
        const { startDate, value, show, fullscreen } = this.state
        return (

            <>
                <Button variant="primary" onClick={this.openModal}>
                    Click Me For Open Modal
                </Button>

                <Modal
                    fullscreen={fullscreen}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                    show={this.state.isOpen}
                    onHide={this.closeModal}
                >

                    <Modal.Body>
                        <div class="modal-content text-center">
                            <Button variant=" close" onClick={this.closeModal}>
                                <img src="/cross.png" alt="" />
                            </Button>
                            <div class="modal-body">
                                <div id="exTab1" class="">
                                    <ul class="nav nav-pills">
                                        <li class="active">
                                            <a href="#1a" data-toggle="tab"><img src="/circle1.png" /><span>Basic Info</span></a>
                                        </li>
                                        <li><a href="#2a" data-toggle="tab"><img src="/tab-img.png" /><span>PIck Up Details</span></a>
                                        </li>
                                        <li><a href="#3a" data-toggle="tab"><img src="/tab-img.png" /><span>Closed</span></a>
                                        </li>
                                    </ul>

                                    <div class="tab-content clearfix">
                                        <h3><span class="six">Case ID:</span> #12001 </h3>
                                        <div class="tab-pane active" id="1a">
                                            <form class="tabshow">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="rowcnt"><label class="lbl">Name</label>
                                                            <input type="text" value="Aditya" class="inpt" value={this.state.name} onChange={this.handleValueChange}/></div>
                                                        <div class="rowcnt"><label class="lbl">Flat No/House No</label>
                                                            <input type="text" value="G-30" class="inpt"  value={this.state.flat} onChange={this.handleValueChange}/></div>
                                                        <div class="rowcnt"><label class="lbl">Pin code</label>
                                                            <input type="number" value="201306" class="inpt number" /></div>
                                                        <div class="rowcnt"><label class="lbl">Appointment Date</label>
                                                            <input type="text" value="01-07-2021" class="inpt number" /></div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="rowcnt"><label class="lbl">Email</label>
                                                            <input type="email" value="aditya@gmail.com" class="inpt" /></div>
                                                        <div class="rowcnt"><label class="lbl">Area</label>
                                                            <input type="text" value="Sec 120" class="inpt" /></div>
                                                        <div class="rowcnt"><label class="lbl">Brand</label>
                                                            <input type="text" value="Dell" class="inpt " /></div>
                                                        <div class="rowcnt"><label class="lbl">Problem</label>
                                                            <textarea class="inpt">Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,</textarea></div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="rowcnt"><label class="lbl">Phone</label>
                                                            <input type="number" value="987653210" class="inpt number" readonly /></div>
                                                        <div class="rowcnt"><label class="lbl">City</label>
                                                            <input type="text" value="Noida" class="inpt" /></div>
                                                        <div class="rowcnt"><label class="lbl">Model No</label>
                                                            <input type="number" value="2123" class="inpt number" /></div>
                                                        <div class="rowcnt"><label class="lbl">Assigned to</label>
                                                            <select class="inpt">
                                                                <option> Select Name </option>
                                                                <option> Pihu </option>
                                                                <option> Pooja</option>
                                                            </select></div>
                                                    </div>
                                                </div>
                                                <div class="footbtn text-end"><a class="btn green" >SAVE  <img src="/save.png" width="25px" /></a></div>
                                            </form>
                                        </div>
                                        <div class="tab-pane" id="2a">
                                            <div class="tabshow">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="rowcnt"><span class="lbl">Battery</span>
                                                            <span class="inpt">Yes</span></div>
                                                        <div class="rowcnt"><span class="lbl">HDD</span>
                                                            <span class="inpt">500GB</span></div>
                                                        <div class="rowcnt"><span class="lbl">Keyboard</span>
                                                            <span class="inpt">Yes</span></div>
                                                        <div class="rowcnt"><span class="lbl">Other</span>
                                                            <span class="inpt">DC cable</span></div>
                                                        <div class="rowcnt"><span class="lbl long">Technical comments</span>
                                                            <span class="inpt">loose hinge/scratches</span></div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="rowcnt"><span class="lbl">Charger</span>
                                                            <span class="inpt">No</span></div>
                                                        <div class="rowcnt"><span class="lbl">Ram 1</span>
                                                            <span class="inpt">2GB</span></div>
                                                        <div class="rowcnt"><span class="lbl">Optical Drive</span>
                                                            <span class="inpt">No</span></div>
                                                        <div class="rowcnt"><span class="lbl">Trackpad</span>
                                                            <span class="inpt">Yes</span></div>
                                                        <div class="rowcnt"><span class="lbl long">Damages</span>
                                                            <span class="inpt">loose hinge/scratches</span></div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="rowcnt"><span class="lbl">Mother Board</span>
                                                            <span class="inpt">NA</span></div>
                                                        <div class="rowcnt"><span class="lbl">Ram 2</span>
                                                            <span class="inpt">NA</span></div>
                                                        <div class="rowcnt"><span class="lbl">Display</span>
                                                            <span class="inpt">Yes</span></div>
                                                        <div class="rowcnt"><span class="lbl">Network Card</span>
                                                            <span class="inpt">Yes</span></div>
                                                    </div>
                                                </div>
                                                <div class="footatb text-right"><p class="" ><span class="img"><img src="img/mobile.png" width="19px" /></span>
                                                    Estimated Price:<span class="color-green">2400-3000</span></p></div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="3a">
                                            <div class="tabshow">
                                                <div class="row">
                                                    <div class="col-md-8 billtab">
                                                        <table class="responsive-table">
                                                            <thead><tr><th>#</th><th>Product Discription</th><th>Warranty</th><th>Price</th></tr></thead>
                                                            <tbody>
                                                                <tr><td>1</td><td>Hdd</td><td>6 Month</td><td>3000</td></tr>
                                                                <tr><td>2</td><td>Hdd</td><td>6 Month</td><td>3000</td></tr>
                                                                <tr><td>3</td><td>Hdd</td><td>6 Month</td><td>3000</td></tr>
                                                            </tbody>
                                                            <tfoot>
                                                                <tr><td colspan="4"> </td></tr>
                                                                <tr><td colspan="2"></td><td><span class="bold text-uppercase">Sub Total</span></td><td>3000</td></tr>
                                                                <tr><td colspan="2"></td><td><span class="bold text-uppercase">IGST (18%)</span></td><td>1224</td></tr>
                                                                <tr><td colspan="4"> </td></tr>
                                                                <tr><td colspan="4"><div class="row tabrow">
                                                                    <div class="col-md-6"><span class="bold">Payment</span><span class="upi text-right">UPI</span></div>
                                                                    <div class="col-md-6"><span class="bold">Total Amount</span><span class="upi text-right">8,024</span></div>
                                                                </div></td></tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                    <div class="col-md-4 billcnt">
                                                        <div class="rowcnt"><span class="lbl bold ">Bill To:</span>
                                                            <span class="inpt"><p><span class="strng">Name:</span> Justgoweb</p><p><span class="strng">Address:</span>  Sec-120, Noida , Uttrapradesh- 120065</p><p><span class="strng">GST Number:</span>  123456</p></span>
                                                        </div>
                                                        <div class="rowcnt"><span class="lbl bold ">Technical Advice</span>
                                                            <span class="inpt">Lorem Ipsum is simply dummy text  of the printing and typesetting  industry. Lorem Ipsum has been industry's standard dummy text  the  ever since the 1500s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>


                    </Modal.Footer>
                </Modal>


            </>
        )
    }
}



