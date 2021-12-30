import React, { Component } from 'react'

export default class Agent extends Component {
    render() {
        return (
            <div className='container-fluid agent-container'>
                <div className="data-head row">
                    <div className="col-md-6 agent-text">
                       AGENTS
                    </div>
                    <div className="col-md-6 btn text-end">
                      <button>ADD NEW <img src="/addmore.png" alt="add new agent" srcSet="" /></button>
                    </div>
                </div>
               
                <div className="masterdata-table">
                    <table  className="table">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Email</th>
                                <th scope="col">Total Cases</th>
                                <th scope="col">Active Cases</th>
                                <th scope="col">New Cases</th>
                                <th scope="col">Status</th>
                              </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">1</td>
                                <td>Nishank</td>
                                <td>8273116448</td>
                                <td>nishank@justgoweb.com</td>
                                <td>1234</td>
                                <td>24</td>
                                <td>45</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td scope="row">2</td>
                                <td>Sachin</td>
                                <td>827454644</td>
                                <td>sachin@justgoweb.com</td>
                                <td>1234</td>
                                <td>24</td>
                                <td>45</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td scope="row">2</td>
                                <td>Sachin</td>
                                <td>827454644</td>
                                <td>sachin@justgoweb.com</td>
                                <td>1234</td>
                                <td>24</td>
                                <td>45</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td scope="row">2</td>
                                <td>Sachin</td>
                                <td>827454644</td>
                                <td>sachin@justgoweb.com</td>
                                <td>1234</td>
                                <td>24</td>
                                <td>45</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td scope="row">2</td>
                                <td>Sachin</td>
                                <td>827454644</td>
                                <td>sachin@justgoweb.com</td>
                                <td>1234</td>
                                <td>24</td>
                                <td>45</td>
                                <td>Active</td>
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
