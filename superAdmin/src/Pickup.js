import React, { Component } from 'react'

export default class Pickup extends Component {
    render() {
        return (
            <div class="tab-pane" id="2a">
            <div class="tabshow">
                <div class="row">
                    <div class="col-md-4">
                        <div class="rowcnt"><span class="lbl">Battery</span>
                            <span class="inpt">Yes</span></div>
                        <div class="rowcnt"><span class="lbl">HDD</span>
                            <span class="inpt">500GB</span></div>
                        <div class="rowcnt"><span class="lbl">Keyboard</span>
                            <span class="inpt">Yes</span></div>
                        <div class="rowcnt"><span class="lbl">Other</span>
                            <span class="inpt">DC cable</span></div>
                        <div class="rowcnt"><span class="lbl long">Technical comments</span>
                            <span class="inpt">loose hinge/scratches</span></div>
                    </div>
                    <div class="col-md-4">
                        <div class="rowcnt"><span class="lbl">Charger</span>
                            <span class="inpt">No</span></div>
                        <div class="rowcnt"><span class="lbl">Ram 1</span>
                            <span class="inpt">2GB</span></div>
                        <div class="rowcnt"><span class="lbl">Optical Drive</span>
                            <span class="inpt">No</span></div>
                        <div class="rowcnt"><span class="lbl">Trackpad</span>
                            <span class="inpt">Yes</span></div>
                        <div class="rowcnt"><span class="lbl long">Damages</span>
                            <span class="inpt">loose hinge/scratches</span></div>
                    </div>
                    <div class="col-md-4">
                        <div class="rowcnt"><span class="lbl">Mother Board</span>
                            <span class="inpt">NA</span></div>
                        <div class="rowcnt"><span class="lbl">Ram 2</span>
                            <span class="inpt">NA</span></div>
                        <div class="rowcnt"><span class="lbl">Display</span>
                            <span class="inpt">Yes</span></div>
                        <div class="rowcnt"><span class="lbl">Network Card</span>
                            <span class="inpt">Yes</span></div>
                    </div>
                </div>
                <div class="footatb text-right"><p class="" ><span class="img"><img src="img/mobile.png" width="19px" /></span>
                    Estimated Price:<span class="color-green">2400-3000</span></p></div>
            </div>
        </div>
        )
    }
}
