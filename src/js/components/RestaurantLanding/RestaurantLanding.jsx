import React from 'react';
import NavBar from '../NavBar/NavBar';
import {
  Link
} from 'react-router-dom';


export default class RestaurantLanding extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar />

        <div className='text-center col-sm-6 offset-sm-3 rounded' style={{ backgroundColor: 'rgba(0, 0, 0, .5', padding: '2%' }} id='restaurantHolder'>
          <h1 id='restaurantText'> Apply for NoshSpot! </h1>
          <h3 style={{ marginTop: '1%' }} id='restaurantText'> Why Sign Up With Us?</h3>
          <p className='text-left' id='restaurantText' style={{ marginTop: '5%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ornare libero. Vestibulum hendrerit sit amet nulla vitae ultrices. Donec rhoncus est enim, eu mattis urna porta non. Nulla sed nunc a mi efficitur maximus. Aliquam erat volutpat. Vestibulum et mauris vitae lectus ullamcorper auctor eu ut risus. Nullam vitae tellus ipsum. Vivamus vel odio faucibus, vestibulum nulla et, lacinia lorem. Sed ante sapien, fermentum ac fringilla a, pulvinar vel lacus. Duis vulputate venenatis elit. Cras in enim pulvinar, imperdiet nisl vel, consequat dui. Aenean imperdiet imperdiet porta. Nullam suscipit faucibus nunc non tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus eu finibus mi.
Nullam eu turpis sed lectus viverra gravida. Vestibulum consectetur tempor malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas dui ac urna pulvinar, ut egestas risus interdum. Aenean mauris nulla, aliquet sit amet porttitor eu, viverra in orci. Nulla pharetra nibh in enim vehicula interdum. Suspendisse feugiat accumsan orci a lobortis. Nullam erat odio, molestie nec mollis ut, pellentesque eget nisl.
          </p>
          <Link to='/restaurantRegistration'><button style={{ cursor: 'pointer',marginTop: '10%', backgroundColor: 'rgb(128, 10, 10)', borderColor: 'rgb(128, 10, 10)' }} className='btn btn-primary'> Sign Up!</button></Link>
        </div>
        <main id='restaurant'>

        </main>

      </div>
    )
  }
}