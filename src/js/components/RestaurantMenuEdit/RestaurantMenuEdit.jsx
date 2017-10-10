import React from 'react';
import NavBar from '../NavBar/NavBar';
import {
    Link
} from 'react-router-dom';

export default class RestaurantMenuEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editingMode: true,
        }
        this.editClick = this.editClick.bind(this);
        this.saveClick = this.saveClick.bind(this);
    }

    editClick(event) {
        console.log('clicked')
        this.setState({
            editingMode: false
        })
    }

    saveClick(event) {
        console.log('clicked')
        this.setState({
            editingMode: true
        })
    }
    render() {

        return (
            <div>
                <NavBar />
                <div style={{ 'height': '68px' }}></div>
                <div className='container'>

                    <div className='container' style={{ 'padding': '1em' }}>
                        {
                            this.state.editingMode

                            ? 
                                <span>
                                    <div className='row'>
                                        <div className='col-sm-2'> </div>
                                        <div className='col-sm-8'>
                                            <span style={{ fontSize: '32px' }}> <strong>Beef Burrito</strong></span>
                                            <span className='pull-right' style={{ fontSize: '32px' }}> <strong>$7.99 </strong>
                                                <button onClick={this.editClick} style={{ marginLeft: '20px', backgroundColor: '#00706a', borderColor: '#00706a' }} className='btn btn-primary'> Edit </button>
                                                <button style={{ marginLeft: '20px', borderColor: 'rgb(128, 10, 10)', backgroundColor: 'rgb(128, 10, 10)' }} className='btn btn-danger'>Delete </button>
                                            </span>
                                        </div>
                                        <div className='col-sm-2'> </div>
                                    </div>
                                    <hr />
                                </span>
                            

                       :
                           <span>

                                <div className="form-group row">
                                    <div className='col-1'> </div>
                                    <div className="col-4">
                                        <input className="form-control" value='Beef Burrito' type="text" id="newitem-input" />
                                    </div>
                                    <div className="col-4">
                                        <input className="form-control" value='7.99' type="text" id="price-input" />
                                    </div>
                                    <div className='col-sm-2 text-center'>
                                        <button onClick={this.saveClick}style={{ borderColor: 'rgb(128, 10, 10)', backgroundColor: 'rgb(128, 10, 10)' }} className='btn btn-primary'> Save Changes </button>
                                    </div>

                                </div>
                                <hr />
                                </span>
                        }
                    </div>

                        <p />
                        <h1 className='text-center pb-4'> Add New Items! </h1>
                        <p />
                        <div className="form-group row">
                            <label htmlFor="newitem-input" className="col-2 col-form-label"><strong> New Item Name: </strong></label>
                            <div className="col-3">
                                <input className="form-control" type="text" id="newitem-input" />
                            </div>
                            <label htmlFor="price-input" className="col-2 col-form-label"> <strong>New Item Name: </strong></label>
                            <div className="col-3">
                                <input className="form-control" type="text" id="price-input" />
                            </div>
                            <div className='col-sm-2 text-center'>
                                <button style={{ borderColor: 'rgb(128, 10, 10)', backgroundColor: 'rgb(128, 10, 10)' }} className='btn btn-success center-block'>Add item! </button>
                            </div>
                        </div>


                    </div>
                </div>
                )
    }
}