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
                <div className='pl-4 row mt-2'>
                    {/* <div className='col-lg-1'></div> */}
                    <div className='verticalMenu col-lg-2'>
                        <p className='h4 pb-2 pt-4 mt-4' id='accSettings'><u>Account Settings</u></p>
                        <hr />
                        <p className='h4' id='deliveryHistory'>Delivery History</p>
                    </div>
                    <div className='col-lg-1'></div>
                    <div style={{'borderColor': 'transparent'}} className="card col-lg-8">
                        <div className="card-block">
                            <p />
                            <h4> Change Personal Information </h4>
                            <p />
                            <div className='container' style={{ 'padding': '1em' }}>
                                <div style={{ marginBottom: '3%' }} className="form-group row">
                                    <label htmlFor="example-text-input" className="col-2 col-form-label">Email:</label>
                                    <div className="col-10">
                                        <input className="form-control" type="text" id="" />
                                    </div>
                                </div>
                                <div style={{ marginBottom: '3%' }} className="form-group row">
                                    <label htmlFor="example-text-input" className="col-2 col-form-label">Password:</label>
                                    <div className="col-10">
                                        <input className="form-control" type="text" id="" />
                                    </div>
                                </div>
                                <div style={{ marginBottom: '3%' }} className="form-group row">
                                    <label htmlFor="example-text-input" className="col-2 col-form-label">Phone Number:</label>
                                    <div className="col-10">
                                        <input className="form-control" type="text" id="" />
                                    </div>
                                </div>
                                <div style={{ marginBottom: '3%' }} className="form-group row">
                                    <label htmlFor="example-text-input" className="col-2 col-form-label">Adress:</label>
                                    <div className="col-10">
                                        <input className="form-control" type="text" id="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                </div>
            </div>
        )
    }
}
