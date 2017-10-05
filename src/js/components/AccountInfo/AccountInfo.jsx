import React from 'react';
import NavBar from '../NavBar/NavBar';

export default class Confirmation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavBar />
                <div style={{ 'height': '68px' }}></div>
                <div className='row'>
                    <div className='verticalMenu col-lg-4'>
                        <h3 style={{textDecoration: 'underline', 'width': '40%'}}id='accSettings'> Account Settings</h3>
                        <h3  style={{ 'width': '40%' }}id='deliveryHistory'> Delivery History</h3>
                    </div>
                    <div style={{ 'padding': '0', 'float': 'right', 'marginTop': '3%' }} className=" card col-sm-7">
                        <div className="card-header">
                            <strong style={{ textAlign: 'center' }}>Account Settings </strong>
                        </div>
                        <div className="card-block">
                            <p />
                            <h4> Change Personal Information </h4>
                            <p />
                            <div className='container' style={{ 'padding': '1em' }}>
                                <div style={{ marginBottom: '3%' }} className="form-group row">
                                    <label for="example-text-input" className="col-2 col-form-label">Email:</label>
                                    <div className="col-10">
                                        <input className="form-control" type="text" id="" />
                                    </div>
                                </div>
                                <div style={{ marginBottom: '3%' }} className="form-group row">
                                    <label for="example-text-input" className="col-2 col-form-label">Password:</label>
                                    <div className="col-10">
                                        <input className="form-control" type="text" id="" />
                                    </div>
                                </div>
                                <div style={{ marginBottom: '3%' }} className="form-group row">
                                    <label for="example-text-input" className="col-2 col-form-label">Phone Number:</label>
                                    <div className="col-10">
                                        <input className="form-control" type="text" id="" />
                                    </div>
                                </div>
                                <div style={{ marginBottom: '3%' }} className="form-group row">
                                    <label for="example-text-input" className="col-2 col-form-label">Adress:</label>
                                    <div className="col-10">
                                        <input className="form-control" type="text" id="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
