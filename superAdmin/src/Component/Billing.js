import React, { Component } from 'react'

export default class billing extends Component {
    render() {
        return (
            <div className='container-fluid billing-container'>
                <div className="data-head row">
                    <div className="col-md-6 agent-text">
                        BILLING
                    </div>

                </div>

                <div className="masterdata-table billing-table row">
                    <div className="col-md-4">
                        <div className="box">
                            <label className="lbl" htmlFor="company">Company Name</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="box">
                            <label className="lbl" htmlFor="state">State</label>
                            <div className="billing-dropdown">
                                <button className="btn billing-btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select State
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Uttar Pardesh</a></li>
                                    <li><a className="dropdown-item" href="#">Haryana</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box">
                            <label className="lbl" htmlFor="address">Address</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="box">
                            <label className="lbl" htmlFor="Pincode">Pincode</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box">
                            <label className="lbl" htmlFor="city">City</label>
                            <div className="billing-dropdown">
                            <button className="btn billing-btn   dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Select  City
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Ghaziabad</a></li>
                                <li><a className="dropdown-item" href="#">Noida</a></li>
                                <li><a className="dropdown-item" href="#">Delhi</a></li>
                            </ul>
                            </div>
                        </div>
                        <div className="box">
                            <label className="lbl" htmlFor="gst">GST %</label>
                            <input type="number" name="" id="" />
                        </div>

                    </div>
                    <div className="save text-end">
                    <div className="save-btn text-right btn">
                        <button>SAVE <img src="/addmore.png" alt="add new agent" srcSet="" /></button>
                    </div>
                    </div>
                </div>

            </div>
        )
    }
}
