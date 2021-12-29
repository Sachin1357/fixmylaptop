import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Cancel = () =>{
    return(
    <div>
        <Header />
        <div class="container">	
	<div class="detailscnt">
	<p><span class="strng">Case ID:</span> #12001 </p>
	<h4 class="text-uppercase">Cancel</h4>
	<form method="post" >
	<div class="detform cancel-form">
	<span class="lineform"><label class="strng">Reason</label><textarea class="cntname" required ></textarea></span>
	</div>
	<div class="footdetail">
		<div class="container footcnt text-right">
			<div class="row">
			<div class=""><Link to="/agentcase" class="btn blue btnn">BACK<img src="./share.png"/></Link><button class="btn green btnn" name="submit" type="submit" >SUBMIT<img src="./cancel.png"/></button></div>
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
export default Cancel;