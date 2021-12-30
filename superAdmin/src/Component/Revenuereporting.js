import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Revenuereporting extends Component {
        constructor(props) {
            super(props)
            this.state = {
                startDate: new Date()                
            };
            this.handleChange = this.handleChange.bind(this);    
        }
        handleChange(date) {
            this.setState({
                startDate: date
            })
        }
    
    render() {
        return (
            <div className='revenue-reporting'>
                <div className="data-head row">
                    <div className="col-md-6">
                        REVENUE REPORTING
                    </div>
                    <div className="col-md-6 text-end">
                        <span className="text">Total Amount</span>

                        <span className="amount">  30,800  </span>

                    </div>
                </div>
                <div className="show-option row">
                    <div className="col-md-3">
                        <label htmlFor="show-entry">Show</label>

                        <button  className="btn dropdown-toggle option" type="button" id="city" data-bs-toggle="dropdown" aria-expanded="false">
                            10
                        </button>
                        <ul  className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a  className="dropdown-item" href=" /">25</a></li>
                            <li><a  className="dropdown-item" href=" /">50</a></li>
                            <li><a  className="dropdown-item" href=" /">100</a></li>
                        </ul>

                        <label htmlFor="entries">entries</label>
                    </div>
                    <div className="col-md-9 date-section">
                        <label htmlFor="date">Date: </label>

                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            placeholder="Choose a date"
                            dateFormat="dd/MM/yyyy"
                            label="From"
                        />

                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            placeholder="Choose a date"
                            dateFormat="dd/MM/yyyy"
                        />
                        <label htmlFor="payment">Payment Mode:</label>
                        <button  className="btn dropdown-toggle option" type="button" id="city" data-bs-toggle="dropdown" aria-expanded="false">
                            Please Select
                        </button>
                        <ul  className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a  className="dropdown-item" href=" /">Netbanking</a></li>
                     
                        </ul>

                        <label htmlFor="payment">Agent:</label>
                        <button  className="btn dropdown-toggle option" type="button" id="city" data-bs-toggle="dropdown" aria-expanded="false">
                            Please Select
                        </button>
                        <ul  className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a  className="dropdown-item" href=" /">option 1</a></li>
                     
                        </ul>


                       
                        <label htmlFor="payment">GST:</label>
                        <button  className="btn dropdown-toggle option" type="button" id="city" data-bs-toggle="dropdown" aria-expanded="false">
                            Please Select
                        </button>
                        <ul  className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a  className="dropdown-item" href=" /">GST</a></li>
                     
                        </ul>

                    </div>
                </div>

                <div className="masterdata-table">
                    <table  className="table">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Date</th>
                                <th scope="col">Case ID</th>
                                <th scope="col">Agent Name</th>
                                <th scope="col">Amount Recieved</th>
                                <th scope="col">Payment mode</th>
                                <th scope="col">GST Invoice</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">1</td>
                                <td>25-05-21</td>
                                <td>1234</td>
                                <td>Nishank</td>
                                <td>Govindpuri</td>
                                <td>Modinagar</td>
                                <td>8273116448</td>
                                 
                            </tr>
                            <tr>
                                <td scope="row">2</td>
                                <td>25-05-21</td>
                                <td>2323</td>
                                <td>Nishank</td>
                                <td>Govindpuri</td>
                                <td>Modinagar</td>
                                <td>8273116448</td>
                                 
                            </tr>
                            <tr>
                                <td scope="row">3</td>
                                <td>15-05-21</td>
                                <td>2114</td>
                                <td>Nishank</td>
                                <td>Govindpuri</td>
                                <td>Modinagar</td>
                                <td>8273116448</td>
                                 
                            </tr>
                            <tr>
                                <td scope="row">4</td>
                                <td> 5-05-21</td>
                                <td>1234</td>
                                <td>Nishank</td>
                                <td>Govindpuri</td>
                                <td>Modinagar</td>
                                <td>8273116448</td>
                                 
                            </tr>
                            <tr>
                                <td scope="row">5</td>
                                <td>21-05-21</td>
                                <td>3453</td>
                                <td>Nishank</td>
                                <td>Govindpuri</td>
                                <td>Modinagar</td>
                                <td>8273116448</td>
                                 
                            </tr>
                        </tbody>
                    </table>
                </div>
                <nav aria-label="Page text-center navigation example">
                    <ul  className="pagination  justify-content-center">
                        <li  className="page-item"><a  className="page-link" href="/">Previous</a></li>
                        <li  className="page-item active"><a  className="page-link" href="/">1</a></li>
                        <li  className="page-item"><a  className="page-link" href="/">2</a></li>
                        <li  className="page-item"><a  className="page-link" href="/">3</a></li>
                        <li  className="page-item"><a  className="page-link" href="/">...</a></li>
                        <li  className="page-item"><a  className="page-link" href="/">10</a></li>
                        <li  className="page-item"><a  className="page-link" href="/">Next</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
