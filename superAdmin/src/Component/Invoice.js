import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Invoice extends Component {
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
            <div className='container-fluid Invoice-container'>
                <div className="data-head row">
                    <div className="col-md-6 agent-text">
                       INVOICE
                    </div>
                    <div className="col-md-6 btn text-end">
                      <button>EXPORT <img src="/addmore.png" alt="add new agent" srcSet="" /></button>
                    </div>
                </div>

                <div className="show-option row">
                    <div className="col-md-9">
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
                    <div className="col-md-3 date-section">
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
                    </div>
                    </div>
               
                <div className="masterdata-table">
                    <table  className="table">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Date</th>
                                <th scope="col">Case Id</th>
                                <th scope="col">Invoice Number</th>
                                <th scope="col">Client's Name</th>
                                <th scope="col">Client's State</th>
                                <th scope="col">Client's GST Number</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Download Invoice</th>
                              </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">1</td>
                                <td>22-12-2021</td>
                                <td>12</td>
                                <td>3454</td>
                                <td>Nishank</td>
                                <td>Uttar Pardesh</td>
                                <td>43535345233135</td>
                                <td>3224</td>
                                <td><img src="/pdf.png" alt="pdf-invoice" srcSet="" /></td>
                            </tr>
                            <tr>
                                <td scope="row">1</td>
                                <td>22-12-2021</td>
                                <td>12</td>
                                <td>3454</td>
                                <td>Nishank</td>
                                <td>Uttar Pardesh</td>
                                <td>43535345233135</td>
                                <td>3224</td>
                                <td><img src="/pdf.png" alt="pdf-invoice" srcSet="" /></td>
                            </tr>
                            <tr>
                                <td scope="row">1</td>
                                <td>22-12-2021</td>
                                <td>12</td>
                                <td>3454</td>
                                <td>Nishank</td>
                                <td>Uttar Pardesh</td>
                                <td>43535345233135</td>
                                <td>3224</td>
                                <td><img src="/pdf.png" alt="pdf-invoice" srcSet="" /></td>
                            </tr>
                            <tr>
                                <td scope="row">1</td>
                                <td>22-12-2021</td>
                                <td>12</td>
                                <td>3454</td>
                                <td>Nishank</td>
                                <td>Uttar Pardesh</td>
                                <td>43535345233135</td>
                                <td>3224</td>
                                <td><img src="/pdf.png" alt="pdf-invoice" srcSet="" /></td>
                            </tr>
                            <tr>
                                <td scope="row">1</td>
                                <td>22-12-2021</td>
                                <td>12</td>
                                <td>3454</td>
                                <td>Nishank</td>
                                <td>Uttar Pardesh</td>
                                <td>43535345233135</td>
                                <td>3224</td>
                                <td><img src="/pdf.png" alt="pdf-invoice" srcSet="" /></td>
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
