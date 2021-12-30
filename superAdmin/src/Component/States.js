import React, { Component } from 'react'

export default class States extends Component {
    render() {
        return (
            <div className='container-fluid product-container'>
            <div className="data-head row">
                <div className="col-md-6 agent-text">
                   STATES
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
                            <th scope="col">States Name</th>
                            <th scope="col">Status</th>
                          </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>Uttar Pardesh</td>
                            <td><span className="active-status">ACTIVE</span></td>  
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>Haryana</td>
                            <td><span className="inactive-status">INACTIVE</span></td>  
                        </tr>
                        <tr>
                            <td scope="row">3</td>
                            <td>Uttar Pardesh</td>
                            <td><span className="active-status">ACTIVE</span></td>  
                        </tr>
                        <tr>
                            <td scope="row">4</td>
                            <td>Haryana</td>
                            <td><span className="active-status">ACTIVE</span></td>  
                        </tr>
                        <tr>
                            <td scope="row">5</td>
                            <td>Uttar Pardesh</td>
                            <td><span className="active-status">ACTIVE</span></td>  
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
