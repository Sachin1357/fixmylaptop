import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Casereporting extends Component {
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
                        CASE REPORTING
                    </div>
                    <div className="col-md-6 text-end">
                        <span  className="assigtxt col-md-6 text-right">Assigned: <span  className="bold">10</span>  <span  className="strng">|</span>  Open: <span  className="bold">5</span>  <span  className="strng">|</span>  Closed: <span  className="bold">4</span>  <span  className="strng">|</span>  Cancelled: <span  className="bold">1</span> </span>
                    </div>
                </div>
                <div className="show-option row">
                    <div className="col-md-2">
                        <label htmlFor="show-entry">Show</label>

                        <button  className="btn dropdown-toggle  option1" type="button" id="city" data-bs-toggle="dropdown" aria-expanded="false">
                            10
                        </button>
                        <ul  className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a  className="dropdown-item" href=" /">25</a></li>
                            <li><a  className="dropdown-item" href=" /">50</a></li>
                            <li><a  className="dropdown-item" href=" /">100</a></li>
                        </ul>

                        <label htmlFor="entries">entries</label>
                    </div>
                    <div className="col-md-10 date-section">
                        <label htmlFor="date">Date: </label>

                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            placeholder="Choose a date"
                            dateFormat="dd/MM/yyyy"
                            id='From'
                        />

                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            placeholder="Choose a date"
                            dateFormat="dd/MM/yyyy"
                            id='To'
                        />
                        <label htmlFor="payment">Brand:</label>
                        <button  className="btn dropdown-toggle  option1" type="button" id="city" data-bs-toggle="dropdown" aria-expanded="false">
                            Please Select
                        </button>
                        <ul  className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a  className="dropdown-item" href=" /">Brand</a></li>
                        </ul>

                        <label htmlFor="payment">Location:</label>
                        <button  className="btn dropdown-toggle  option1" type="button" id="city" data-bs-toggle="dropdown" aria-expanded="false">
                            Please Select
                        </button>
                        <ul  className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a  className="dropdown-item" href=" /">Location</a></li>

                        </ul>

                        <label htmlFor="payment">Agent:</label>
                        <button  className="btn dropdown-toggle  option1" type="button" id="city" data-bs-toggle="dropdown" aria-expanded="false">
                            Please Select
                        </button>
                        <ul  className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a  className="dropdown-item" href=" /">Agent</a></li>

                        </ul>
                        <label htmlFor="payment">Status:</label>
                        <button  className="btn dropdown-toggle  option1" type="button" id="city" data-bs-toggle="dropdown" aria-expanded="false">
                            Please Select
                        </button>
                        <ul  className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a  className="dropdown-item" href=" /">Status</a></li>

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
                                <th scope="col">City</th>
                                <th scope="col">Area</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Agent</th>
                                <th scope="col">Status</th>
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
                                <td>Assigned</td>
                            </tr>
                            <tr>
                                <td scope="row">2</td>
                                <td>25-05-21</td>
                                <td>2323</td>
                                <td>Nishank</td>
                                <td>Govindpuri</td>
                                <td>Modinagar</td>
                                <td>8273116448</td>
                                <td>Successful</td>
                            </tr>
                            <tr>
                                <td scope="row">3</td>
                                <td>15-05-21</td>
                                <td>2114</td>
                                <td>Nishank</td>
                                <td>Govindpuri</td>
                                <td>Modinagar</td>
                                <td>8273116448</td>
                                <td>failed</td>
                            </tr>
                            <tr>
                                <td scope="row">4</td>
                                <td> 5-05-21</td>
                                <td>1234</td>
                                <td>Nishank</td>
                                <td>Govindpuri</td>
                                <td>Modinagar</td>
                                <td>8273116448</td>
                                <td>Successful</td>
                            </tr>
                            <tr>
                                <td scope="row">5</td>
                                <td>21-05-21</td>
                                <td>3453</td>
                                <td>Nishank</td>
                                <td>Govindpuri</td>
                                <td>Modinagar</td>
                                <td>8273116448</td>
                                <td>Successful</td>
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
