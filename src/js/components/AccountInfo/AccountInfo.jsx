import React from 'react';
import NavBar from '../NavBar/NavBar';
import {
    updateAccountInfo,
    updateEmail,
    updatePassword,
    updatePhone,
    updateAddress
} from './accountInfoActions';

export default class AccountInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            settings: true,
            history: false
        }

        this.updateAccount = this.updateAccount.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.toggleDisplay = this.toggleDisplay.bind(this);
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

    toggleDisplay() {
        const newSettings = !this.state.settings;
        const newHistory = !this.state.history;
        this.setState({
            settings: newSettings,
            history: newHistory
        })
    }
    
    render() {
        let settingsStyle;
        let historyStyle;
        let snippet;
        if (this.state.settings) {
            settingsStyle = {'cursor': 'pointer','textDecoration': 'underline'};
            historyStyle = {'cursor': 'pointer'};
            snippet = 
                <div className="card-block">
                    <p />
                    <h4> Update Personal Information </h4>
                    <p />
                    <div className='container' style={{ 'padding': '1em' }}>
                        <div style={{ marginBottom: '3%' }} className="form-group row">
                            <label htmlFor="email-text-input" className="col-2 col-form-label">Email:</label>
                            <div className="col-10">
                                <input className="form-control" onChange={ this.changeEmail } type="text" id="" />
                            </div>
                        </div>
                        <div style={{ marginBottom: '3%' }} className="form-group row">
                            <label htmlFor="password-text-input" className="col-2 col-form-label">Password:</label>
                            <div className="col-10">
                                <input className="form-control" onChange={ this.changePassword } type="text" id="" />
                            </div>
                        </div>
                        <div style={{ marginBottom: '3%' }} className="form-group row">
                            <label htmlFor="phone-text-input" className="col-2 col-form-label">Phone Number:</label>
                            <div className="col-10">
                                <input className="form-control" onChange={ this.changePhone } type="text" id="" />
                            </div>
                        </div>
                        <div style={{ marginBottom: '3%' }} className="form-group row">
                            <label htmlFor="address-text-input" className="col-2 col-form-label">Address:</label>
                            <div className="col-10">
                                <input className="form-control" onChange={ this.changeAddress } type="text" id="" />
                            </div>
                        </div>
                        <button className='btn' style={{ 'backgroundColor': 'rgb(128, 10, 10)', 'color': 'white' }} onClick={ this.updateAccount }>Submit Changes</button>
                    </div>
                </div>
        } else {
            settingsStyle = {'cursor': 'pointer'};
            historyStyle = {'cursor': 'pointer','textDecoration': 'underline'};
            snippet = <DeliveryHistory />
        }
        return (
            <div>
                <NavBar />
                <div style={{ 'height': '68px' }}></div>
                <div className='pl-4 row mt-2'>
                    {/* <div className='col-lg-1'></div> */}
                    <div className='verticalMenu col-lg-2'>
                        <span onClick={this.toggleDisplay} style={settingsStyle}><p className='h4 pb-2 pt-4 mt-4' id='accSettings'>Account Settings</p></span>
                        <hr />
                        <span onClick={this.toggleDisplay} style={historyStyle}><p className='h4' id='deliveryHistory'>Delivery History</p></span>
                    </div>
                    <div className='col-lg-1'></div>
                    <div style={{'borderColor': 'transparent'}} className="card col-lg-8">
                        {snippet}
                    </div>
                    <div className='col-lg-1'></div>
                </div>
            </div>
        )
    }
}

class DeliveryHistory extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        var arr = ['5/16/2017','6/30/2017','7/15/2017']
        return(
            <div>
                <div className='card-block'>
                <h4>Delivery History</h4>
                    <ul>
                        {arr.map(item => {
                            return (
                                <DeliveryItem date={item}/>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

class DeliveryItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        var arr = ['A','B','C'];
        return(
            <li>
                <ul>
                    Date of Order {this.props.date}
                    {arr.map(item => {
                        return (
                            <div>
                                <DeliveryMenuItem /> 
                            </div>
                        )
                    })}
                    <p>Total: $15</p>
                </ul>
            </li>
        )
    }
}

class DeliveryMenuItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <p>Item information</p>
            </div>
        )
    }
}
