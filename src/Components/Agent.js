import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';


const Agent = () => {

	return (
		<div>
         <Header />
			<div id="exTab1" className="container">
				<ul className="nav nav-pills">
					<li className="active">
						<Link to="/agent" data-toggle="tab">New Cases</Link>
					</li>
					<li><Link to="/activecase" data-toggle="tab">Active Cases</Link>
					</li>
				</ul>

				<div className="tab-content clearfix">
					<div className="tab-pane active" id="1a">
					<Link to="/agentdetails">
							<div className="tab-cnt">
								<div className="row">
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./newcal.png" width="18px" height="20px" /> 25-05-2021</span></div>
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./admin1.png" width="17px" height="18px" /> Ankur</span></div>
								</div>

								<div className="row">
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./map1.png" width="14px" height="18px" /> sec 120</span></div>
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./call1.png" width="16px" height="16px" /> 9898232310</span></div>
								</div>
							</div>
							<div className="tab-cnt">
								<div className="row">
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./newcal.png" width="18px" height="20px" />25-05-2021</span></div>
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./admin1.png" width="17px" height="18px" />Ankur</span></div>
								</div>

								<div className="row">
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./map1.png" width="14px" height="18px" /> sec 120</span></div>
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./call1.png" width="16px" height="16px" /> 9898232310</span></div>
								</div>
							</div>
							<div className="tab-cnt">
								<div className="row">
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./newcal.png" width="18px" height="20px" />25-05-2021</span></div>
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./admin1.png" width="17px" height="18px" /> Ankur</span></div>
								</div>

								<div className="row">
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./map1.png" width="14px" height="18px" /> sec 120</span></div>
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./call1.png" width="16px" height="16px" /> 9898232310</span></div>
								</div>
							</div>
							<div className="tab-cnt">
								<div className="row">
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./newcal.png" width="18px" height="20px" />25-05-2021</span></div>
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./admin1.png" width="17px" height="18px" />Ankur</span></div>
								</div>

								<div className="row">
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./map1.png" width="14px" height="18px" /> sec 120</span></div>
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./call1.png" width="16px" height="16px" />9898232310</span></div>
								</div>
							</div>
							<div className="tab-cnt foot">
								<div className="row">
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./newcal.png" width="18px" height="20px" />25-05-2021</span></div>
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./admin1.png" width="17px" height="18px" />Ankur</span></div>
								</div>

								<div className="row">
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./map1.png" width="14px" height="18px" />sec 120</span></div>
									<div className="col-md-6 col-xs-6"><span className="txttd"><img src="./call1.png" width="16px" height="16px" />9898232310</span></div>
								</div>
							</div>
							</Link>
					</div>
					
				</div>
			</div>
          <Footer />
		</div>
	);
}
export default Agent;