import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Agentcase = () => {
    return (
        <div>
            <Header />
            <div class="container">
                <div class="detailscnt opencase">
                    <p><span class="strng">Case ID:</span> #12001 </p>
                    <h4 class="text-uppercase">Personal Details</h4>
                    <form method="post" >
                        <div class="detform">
                            <span class="lineform"><label class="strng">Your Name</label><input type="text" class="cntname" value="Aditya Khanna" required /></span>
                            <span class="lineform"><label class="strng">Email</label><input class="cntname" type="email" value="adityakhanna@gmail.com" required /></span>
                            <span class="lineform"><label class="strng">Phone</label><input type="text" class="cntname" value="987654321" readonly /></span>
                        </div>
                        <h4 class="text-uppercase">Address</h4>
                        <div class="detform">
                            <span class="lineform"><label class="strng">Flat No/House No</label><input type="text" class="cntname" value="G-30" required /></span>
                            <span class="lineform"><label class="strng">Area</label><input type="text" class="cntname" value="Sec- 120" required /></span>
                            <span class="lineform"><label class="strng">City</label>
                                <select class="cntname" style={{ backgroundImage: "url(./down-arrow.png)" }} >
                                    <option value="" disabled >Select City</option>
                                    <option value="noida" selected >Noida</option>
                                    <option value="Delhi" >Delhi</option>
                                </select></span>
                            <span class="lineform"><label class="strng">Pin code</label><input type="text" class="cntname" value="2001236" required /></span>
                        </div>
                        <h4 class="text-uppercase">Laptop Details</h4>
                        <div class="detform">
                            <span class="lineform"><label class="strng">Brand</label><input type="text" class="cntname" value="Dell" required /></span>
                            <span class="lineform"><label class="strng">Model No</label><input type="text" class="cntname" value="2123" required /></span>
                            <span class="lineform"><label class="strng">Serial No</label><input type="text" class="cntname" required /></span>
                            <span class="lineform"><label class="strng">Problem</label><textarea class="cntname" required  >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</textarea></span>
                        </div>
                        <div class="footdetail">
                            <div class="container footcnt text-center">
                                <div class="row">
                                    <div class=""><Link to="/pickup" class="btn blue btnn">PICK UP<img src="./up.png" /> </Link><Link to="/onsite" class="btn green btnn">ON SITE<img src="./globe.png" /></Link><Link to="/cancel" class="btn blue btnn">CANCEL<img src="./cancel.png" /> </Link></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );

}
export default Agentcase;