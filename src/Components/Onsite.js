import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Onsite = () => {
    return (
        <div>
            <Header />
            <div class="container">
                <div class="detailscnt">
                    <p><span class="strng">Case ID:</span> #12001 </p>
                    <h4 class="text-uppercase">Job Card Close</h4>
                    <form method="post" class="pickform" >
                        <div class="detform addsiterow cancel-form">
                            <div class="row">
                                <span class="lineform col-md-5 col-xs-5"><label class="strng">Products</label>
                                    <select class="cntname required" required style={{ backgroundImage: "url(./down-arrow.png)" }}>
                                        <option value="" selected disabled>Select Option</option>
                                        <option value="Motherboard ">Motherboard </option>
                                        <option value="Motherboard2">Motherboard2</option>
                                    </select>
                                </span>
                                <span class="lineform  col-md-4 col-xs-4"><label class="strng">Warranty</label>
                                    <input class="cntname required" type="text" required />
                                </span>
                                <span class="lineform  col-md-3 col-xs-3"><label class="strng">Price</label>
                                    <input class="cntname required number" type="number" required />
                                </span>
                            </div>

                        </div>
                        <div class="add-btn text-right">
                            <button id='add-row' class='btno blue toggle-disabled' value='Add' disabled >ADD MORE<img src="./addmore.png"/></button>
                        </div>
                        
                        <div class="total"><span class="name">Total Amount</span><span class="priceans">2360</span></div>
                        
                        <div class="detform cancel-form">
                            <span class="lineform"><label class="strng">Bill</label>
                                <select class="cntname" id="bill" style={{ backgroundImage: "url(./down-arrow.png)" }}>
                                    <option value="" selected disabled>Select Option</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </span>
                        </div>
                       
                        
                        <div class="valueyess"></div>
                        
                        <div class="detform cancel-form">
                            <span class="lineform"><label class="strng">Payment Mode</label>	<select class="cntname" required style={{ backgroundImage: "url(./down-arrow.png)" }}>
                                <option value="" selected disabled>Select Payment mode</option>
                                <option value="Motherboard ">Net Banking</option>
                                <option value="Motherboard2">Others</option>
                            </select>
                            </span>
                        </div>
                        <div class="detform cancel-form">
                            <span class="lineform"><label class="strng">Technical Advice</label><textarea class="cntname" required ></textarea></span>
                        </div>
                        <div class="footdetail">
                            <div class="container footcnt text-right">
                                <div class="row">
                                    <div class=""><Link to="/agentcase" class="btno blue">BACK<img src="./share.png"/> </Link><button class="btno green" data-toggle="modal" data-target="#myModal">JOB CARD CLOSE<img src="./card.png"/></button></div>
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
export default Onsite;