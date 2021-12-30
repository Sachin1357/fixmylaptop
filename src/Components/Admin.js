import React from "react";
import './admin.css'
class Admin extends React.Component {
    render() {
        return (
            <div style={{ backgroundImage: "url(./Images/backg.png)" }}>
                <div className="back">
                    <img src="./Images/logo-white 1.png" />
                </div>
                <div className="items">
                <div className="formbox">
                    <h5 className="home">HOME VISIT FORM</h5>
                    <div className="">
                        <form className="row tab">
                            <h5>Personal Details</h5>
                            <hr></hr>
                            <div class="col-md-4">
                            <input class="col-md-12" type='text' placeholder="Your Name" required></input>
                            </div>
                            <div class="col-md-4">
                            <input class="col-md-12" type='email' placeholder="Email" required></input>
                            </div>
                            <div class="col-md-4">
                            <input class="col-md-12" type='phone' placeholder="Phone No." required></input>
                            </div>
                            <h5>Address</h5>
                            <hr></hr>
                            <div class="col-md-6">
                            <input class="col-md-12" type='text' placeholder="Flat No/House No"></input>
                            </div>
                            <div class="col-md-6">
                            <input class="col-md-12" type='text' placeholder="Area"></input>
                            </div>
                            <div class="col-md-6">
                            <select class="cntname required col-md-12"  style={{ backgroundImage: "url(./down-arrow.png)" }}>
                                        <option value="" selected disabled>City</option>
                                        <option value="Motherboard ">Motherboard </option>
                                        <option value="Motherboard2">Motherboard2</option>
                                    </select>
                                    </div>
                            <div class="col-md-6">
                            <input class="col-md-12" type='number' placeholder="Pincode"></input>
                            </div>
                            <h5>Laptop Details</h5>
                            <hr></hr>
                            <div class="col-md-4">
                            <select class="cntname required col-md-12" style={{ backgroundImage: "url(./down-arrow.png)" }} placeholder="Brand">
                                        <option value="" selected disabled>Brand</option>
                                        <option value="Motherboard ">Motherboard </option>
                                        <option value="Motherboard2">Motherboard2</option>
                                    </select>
                                    </div>
                            <div class="col-md-4">
                            <input class="col-md-12" type='text' placeholder="Model No"></input>
                            </div>
                            <div class="col-md-4">
                            <input class="col-md-12" type='date' placeholder="Appointment Date"></input>
                            </div>
                            <div class="col-md-12">
                            <textarea class="col-md-12" placeholder="Problem"></textarea>
                            </div>
                              <div class="col-md-12 text-center">
                            <button class="col-md-12" type="submit">SUBMIT</button>
                            </div>

                        </form>
                    </div>
                </div>
                </div>
                <footer className="admin-foot">Copyright @ 2021 All rights reserved</footer>
            </div>
        )
    }
}
export default Admin;