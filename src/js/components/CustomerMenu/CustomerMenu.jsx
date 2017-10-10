import React from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
export default class CustomerMenu extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        restaurant: {},
    }
    }

    componentWillMount() {
     
     axios.get('http://localhost:3000/api/restaurant/'+this.props.match.params.id)
          .then(response =>{
             this.setState({restaurant:response.data});
             console.log(this.state.restaurant)
        })
         .catch(error => {
           console.log('Error fetching and parsing data',error);
        });
    }

    render() {
    return (
        <div>
                <NavBar />
                <div style={{ 'height': '68px' }}></div>
                <div className='container'>
                    <div className='row'>
                          <div className='col-sm-6'>
                            <h1 style={{ textAlign: 'center', marginTop: '40px' }}>{this.state.restaurant.restaurantName}</h1>
                            <p style={{ textAlign: 'left', marginTop: '40px' }}>
                                We make the best bowls, burritos, and salads. If you want real mexican food you're in the wrong place.
                         But real or not we are still the best out there!
                         </p>
                            <h4 style={{ marginTop: '40px' }}> We deliver from {this.state.restaurant.hours} </h4>
                        </div>
                        <div className='col-sm-6'>
                            <img style={{ width: '100%', height: '100%', marginTop: '40px' }} src='https://pixel.nymag.com/imgs/daily/grub/2016/11/17/17-chipotle-chorizo-burrito.w600.h315.2x.jpg' />
                        </div>
                        </div>  
                </div>
                <div className='container'>
                    <div className=' row mt-2'>
                        <div className='verticalMenu col-lg-12'>
                            <p className='h4 pb-2 pt-4 mt-4'>Menu</p>
                            <hr />
                        </div>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div style={{ paddingTop: '20px' }} className='row'>
                                        <p className='col-sm-8'>Burrito</p> <p className=' col-sm-4'> 7.50<i style={{ paddingLeft: '20%', color: 'rgb(128, 10, 10)' }} className="fa fa-plus "></i></p>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div style={{ paddingTop: '20px' }} className='row'>
                                        <p className='col-sm-8'>Salad</p> <p className=' col-sm-4'> 7.50<i style={{ paddingLeft: '20%', color: 'rgb(128, 10, 10)' }} className="fa fa-plus "></i></p>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div style={{ paddingTop: '20px' }} className='row'>
                                        <p className='col-sm-8'>Orange peel</p> <p className=' col-sm-4'> 7.50<i style={{ paddingLeft: '20%', color: 'rgb(128, 10, 10)' }} className="fa fa-plus "></i></p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '50px' }} className='col-sm-12 text-center'>
                                <button style={{ backgroundColor: 'rgb(128, 10, 10)', borderColor: 'rgb(128, 10, 10)' }} className='btn btn-primary'>
                                    Proceed to Checkout!
                                    </button>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-1'></div>
                    <div className='col-lg-1'></div>
                </div>
            </div>

    )
    }
}    

