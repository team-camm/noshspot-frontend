import React from 'react';
import NavBar from '../NavBar/NavBar';
import {
    updateAccountInfo,
    updateEmail,
    updatePassword,
    updatePhone,
    updateAddress
} from './accountInfoActions';

export default class Confirmation extends React.Component {
    constructor(props) {
        super(props);

        this.updateAccount = this.updateAccount.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
    }

    changeEmail(event) {
        const {dispatch} = this.props;
        const value = event.target.value;
        dispatch(updateEmail(value));
    }

    changePassword(event) {
        const {dispatch} = this.props;
        const value = event.target.value;
        dispatch(updatePassword(value));
    }

    changePhone(event) {
        const {dispatch} = this.props;
        const value = event.target.value;
        dispatch(updatePhone(value));
    }

    changeAddress(event) {
        const {dispatch} = this.props;
        const value = event.target.value;
        dispatch(updateAddress(value));
    }

    updateAccount(){
        const {dispatch, email, password, phone, address, id } = this.props;
        const info = {
            email,
            password,
            phone,
            address
        }
        dispatch(updateAccountInfo(info, id))
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
                                        <input className="form-control" onChange={ this.changeEmail } type="text" id="" />
                                    </div>
                                </div>
                                <div style={{ marginBottom: '3%' }} className="form-group row">
                                    <label htmlFor="example-text-input" className="col-2 col-form-label">Password:</label>
                                    <div className="col-10">
                                        <input className="form-control" onChange={ this.changePassword } type="text" id="" />
                                    </div>
                                </div>
                                <div style={{ marginBottom: '3%' }} className="form-group row">
                                    <label htmlFor="example-text-input" className="col-2 col-form-label">Phone Number:</label>
                                    <div className="col-10">
                                        <input className="form-control" onChange={ this.changePhone } type="text" id="" />
                                    </div>
                                </div>
                                <div style={{ marginBottom: '3%' }} className="form-group row">
                                    <label htmlFor="example-text-input" className="col-2 col-form-label">Address:</label>
                                    <div className="col-10">
                                        <input className="form-control" onChange={ this.changeAddress } type="text" id="" />
                                    </div>
                                </div>
                                <button className='btn' style={{ 'backgroundColor': 'rgb(128, 10, 10)', 'color': 'white' }} onClick={ this.updateAccount }>Submit Changes</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                </div>
            </div>
        )
    }
}
