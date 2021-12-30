import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Modaldata from './Modal';

export default class Masterdata extends Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            totalReactPackages:null
        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(date) {
        this.setState({
            startDate: date
        })
    }
    async componentDidMount() {
        // GET request using axios with async/await
        const response = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({ totalReactPackages: response.data.data[4].email })
        console.log(response)
    }
    render() {
        const { totalReactPackages } = this.state;
        return (
            <div className='container-fluid master-data-container'>

                <div className="data-head">
                    MASTER DATA
                </div>
                <div className="show-option row">
                    <div className="col-md-4">
                        <label htmlFor="show-entry">Show</label>

                        <button className="btn dropdown-toggle option" type="button" id="city" data-bs-toggle="dropdown" aria-expanded="false">
                            10
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href=" /">25</a></li>
                            <li><a className="dropdown-item" href=" /">50</a></li>
                            <li><a className="dropdown-item" href=" /">100</a></li>
                        </ul>

                        <label htmlFor="entries">entries</label>
                    </div>
                    <div className="col-md-8 date-section">
                        <label htmlFor="date">Date: </label>

                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            placeholder="Choose a date"
                            dateFormat="dd/MM/yyyy"
                            label="From"
                            minDate={new Date()}
                        />

                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            placeholder="Choose a date"
                            dateFormat="dd/MM/yyyy"
                        />

                        <button className="btn dropdown-toggle option" type="button" id="city" data-bs-toggle="dropdown" aria-expanded="false">
                            Status
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href=" /">status 1</a></li>
                            <li><a className="dropdown-item" href=" /">status 2 </a></li>
                            <li><a className="dropdown-item" href=" /">status 3 </a></li>
                        </ul>

                        <button className="btn dropdown-toggle option" type="button" id="city" data-bs-toggle="dropdown" aria-expanded="false">
                            City
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href=" /">Noida</a></li>
                            <li><a className="dropdown-item" href=" /">Delhi </a></li>
                            <li><a className="dropdown-item" href=" /">Ghaziabad </a></li>
                        </ul>


                        <button className="btn dropdown-toggle option" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Action
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href=" /">Update</a></li>
                            <li><a className="dropdown-item" href=" /">Action 1</a></li>
                        </ul>

                        <button className="btn option dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Agent
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href=" /">Agent 1</a></li>
                            <li><a className="dropdown-item" href=" /">Agent 2</a></li>
                        </ul>

                    </div>
                </div>

                <div className="masterdata-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Date</th>
                                <th scope="col">Case ID</th>
                                <th scope="col">Name </th>
                                <th scope="col">Area</th>
                                <th scope="col">City</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Issue</th>
                                <th scope="col">Status</th>
                                <th scope="col">Appointment Date</th>
                                <th scope="col">Assigned TO</th>
                                <th scope="col">Amount Received</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">1</td>
                                <td>25-05-21</td>
                                <td>1234</td>
                                <td>Nishank</td>
                                <td>Total React Package:{totalReactPackages}</td>
                                <td>Modinagar</td>
                                <td>8273116448</td>
                                <td>display</td>
                                <td>pick up</td>
                                <td>27-05-21</td>
                                <td>Nakul</td>
                                <td>3000</td>
                                <td>open</td>
                            </tr>
                            <tr>
                                <td scope="row">2</td>
                                <td>25-05-21</td>
                                <td>2323</td>
                                <td>Nishank</td>
                                <td>Govindpuri</td>
                                <td>Modinagar</td>
                                <td>8273116448</td>
                                <td>display</td>
                                <td>pick up</td>
                                <td>27-05-21</td>
                                <td>Nakul</td>
                                <td>3000</td>
                                <td>open</td>
                            </tr>
                            <tr>
                                <td scope="row">3</td>
                                <td>15-05-21</td>
                                <td>2114</td>
                                <td>Nishank</td>
                                <td>Govindpuri</td>
                                <td>Modinagar</td>
                                <td>8273116448</td>
                                <td>display</td>
                                <td>pick up</td>
                                <td>27-05-21</td>
                                <td>Nakul</td>
                                <td>3000</td>
                                <td>open</td>
                            </tr>
                            <tr>
                                <td scope="row">4</td>
                                <td> 5-05-21</td>
                                <td>1234</td>
                                <td>Nishank</td>
                                <td>Govindpuri</td>
                                <td>Modinagar</td>
                                <td>8273116448</td>
                                <td>display</td>
                                <td>pick up</td>
                                <td>27-05-21</td>
                                <td>Nakul</td>
                                <td>3000</td>
                                <td>open</td>
                            </tr>
                            <tr>
                                <td scope="row">5</td>
                                <td>21-05-21</td>
                                <td>3453</td>
                                <td>Nishank</td>
                                <td>Govindpuri</td>
                                <td>Modinagar</td>
                                <td>8273116448</td>
                                <td>display</td>
                                <td>pick up</td>
                                <td>27-05-21</td>
                                <td>Nakul</td>
                                <td>3000</td>
                                <td>open</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <nav aria-label="Page text-center navigation example">
                    <ul className="pagination  justify-content-center">
                        <li className="page-item"><a className="page-link" href="/">Previous</a></li>
                        <li className="page-item active"><a className="page-link" href="/">1</a></li>
                        <li className="page-item"><a className="page-link" href="/">2</a></li>
                        <li className="page-item"><a className="page-link" href="/">3</a></li>
                        <li className="page-item"><a className="page-link" href="/">...</a></li>
                        <li className="page-item"><a className="page-link" href="/">10</a></li>
                        <li className="page-item"><a className="page-link" href="/">Next</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}



