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
        const { allRestaurants, match } = this.props;
        for (let i = 0; i < allRestaurants.length; i++) {
            if (allRestaurants[i]._id === match.params.id) {
                this.setState({
                    restaurant: allRestaurants[i]
                })
                break;
            }
        }
    }

    render() {
        const restaurant = this.state.restaurant;
        console.log(restaurant);
        var arr = [
            {name: 'Burrito', price: '7.50'},
            {name: 'Taco', price: '7.50'},
            {name: 'Bowl', price: '7.50'},
            {name: 'Salad', price: '7.50'},
            {name: 'Chips', price: '7.50'}
        ]
    return (
        <div>
            <NavBar />
                <div style={{ 'height': '68px' }}></div>
                <div className='container'>
                    <div className='row'>
                          <div className='col-sm-6'>
                            <h1 style={{ textAlign: 'center', marginTop: '40px' }}>{restaurant.restaurantName}</h1>
                            <p style={{ textAlign: 'left', marginTop: '40px' }}>{restaurant.restaurantDesc}</p>
                            <h4 style={{ marginTop: '40px' }}> We deliver from {restaurant.hours} </h4>
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
                                {arr.map( menuItem => {
                                    return <MenuItem key={menuItem.name} menuItem={menuItem} />
                                })}
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
        </div>
    )
    }
}   

class MenuItem extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const item = this.props.menuItem;
        return (
            <div className='col-sm-6'>
                <div style={{ paddingTop: '20px' }} className='row'>
                    <p className='col-sm-8'>{item.name}</p> <p className=' col-sm-4'> {item.price}<i style={{ paddingLeft: '20%', color: 'rgb(128, 10, 10)' }} className="fa fa-plus "></i></p>
                </div>
            </div>
        )
    }
}

