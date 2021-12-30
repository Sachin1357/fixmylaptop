import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

class Pickup extends React.Component{
	state = {
		disabled:true,
		addTextBox: [{}]
	}
	handleChange = (e) =>{
		if(e.target.value !=null && e.target.value.length >=3){
			this.setState({
				disabled:false
			});
		}
		else{
			this.setState({
				disabled:true
			})
		}
	}

	addControls(){
		this.setState((
			{
			addTextBox:[...this.state.addTextBox,{}]
		}
		))
	}

	deleteControl(i){
		this.state.addTextBox.splice(i,1);
		this.setState([{}])
	}

	
	render(){	
return(

<div>
	
    <Header />
<div class="container">	
	<div class="detailscnt">
	<p><span class="strng">Case ID:</span> #12001 </p>
	<h4 class="text-uppercase">Pick Up Details</h4>
	<form method="post" class="pickform" >
	<div class="detform addrow cancel-form">
		{this.state.addTextBox.map((index)=>(
	<div class="row">
		
	<span class="lineform col-md-6 col-xs-6"><label class="strng">Products</label>
	
	<select class="cntname required" style={{ backgroundImage: "url(./down-arrow.png)" }}  onChange={this.handleChange}>
	<option value="" selected disabled>Select Option</option>
	<option value="Battery">Battery</option>
	<option value="Charger">Charger</option>
	</select>
	</span>
	<span class="lineform  col-md-6 col-xs-6"><label class="strng">Remark</label>
	  <input class="cntname required" type="text" required onChange={this.handleChange} />
	</span>
	{
		index ?
	<button onClick={()=>this.deleteControl(index)}><img src="./Images/trash-bin2.png"/></button>
	: null
	}
	</div> 
))}

	</div>
	<div class="add-btn text-right">
		<button id='add-row' class='btno blue toggle-disabled'  value='Add' disabled={this.state.disabled} onClick={()=>this.addControls()}>ADD MORE<img src="./addmore.png"/></button>
	</div>
  <div class="detform cancel-form">
	<span class="lineform"><label class="strng">Technical Comments</label><textarea class="cntname" required></textarea></span>
  </div>
  <div class="detform cancel-form">
	<span class="lineform"><label class="strng">Damages</label><textarea class="cntname" required></textarea></span>
  </div>
  <div class="detform cancel-form">
	<span class="lineform"><label class="strng">Price Estimate</label><input type="number" class="cntname number" required /></span>
  </div>
	<div class="footdetail">
		<div class="container footcnt text-right">
			<div class="row">
			<div class=""><Link to="/agentcase" class="btno blue">BACK<img src="./share.png"/></Link><button class="btno green" name="submit" type="submit" >OPEN JOB CARD<img src="./card.png"/></button></div>
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
}
export default Pickup;