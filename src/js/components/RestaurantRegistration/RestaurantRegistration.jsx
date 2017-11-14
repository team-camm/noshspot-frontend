import React from 'react';
import NavBar from '../NavBar/NavBar';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import axios from 'axios';
import { 
  Redirect
} from 'react-router-dom';
import {
  addRestaurant,
  restaurantEmail,
  restaurantPassword,
  restaurantPhone,
  restaurantAddress,
  restaurantName,
  restaurantHours,
  restaurantDescription,
  restaurantWebsite,
  restaurantYelp,
  restaurantFacebook,
  restaurantBillingAddress,
  restaurantAnnualRevenue,
  restaurantTags,
  restaurantImg,
} from './RestaurantRegistrationActions';

export default class RestaurantRegistration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
            redirectToMenu: false,
            
    }       

    this.addRestaurant = this.addRestaurant.bind(this);
    this.restaurantEmail = this.restaurantEmail.bind(this);
    this.restaurantPassword = this.restaurantPassword.bind(this);
    this.restaurantPhone = this.restaurantPhone.bind(this);
    this.restaurantAddress = this.restaurantAddress.bind(this);
    this.restaurantName = this.restaurantName.bind(this);
    this.restaurantHours = this.restaurantHours.bind(this);
    this.restaurantDescription = this.restaurantDescription.bind(this);
    this.restaurantWebsite = this.restaurantWebsite.bind(this);
    this.restaurantYelp = this.restaurantYelp.bind(this);
    this.restaurantFacebook = this.restaurantFacebook.bind(this);
    this.restaurantBillingAddress = this.restaurantBillingAddress.bind(this);
    this.restaurantAnnualRevenue = this.restaurantAnnualRevenue.bind(this);
    this.restaurantTags = this.restaurantTags.bind(this);
    this.restaurantImg = this.restaurantImg.bind(this);
  }
  addRestaurant(){
    const self = this;
    const {
      dispatch, 
      email,
      password,
      phone,
      address,
      restaurantName,
      hours,
      description,
      website,
      yelp,
      facebook,
      billingAddress,
      annualRevenue,
      tags,
      img, 
     } = this.props;
    var resLat = '';
    var resLng = '';
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
            'address': this.props.address
            }, function(results, status) {
              if(status == google.maps.GeocoderStatus.OK) {  
               var lat = results[0].geometry.location.lat();
               var lng = results[0].geometry.location.lng();
               resLat = lat;
               resLng = lng;
    const restaurantInfo = {
      email,
      password,
      phone,
      address,
      restaurantName,
      hours,
      restaurantDesc: description,
      website,
      yelpUrl: yelp,
      facebook,
      paymentAddress: billingAddress,
      annualRevenue,
      lat : resLat,
      lng : resLng
    }
    
    dispatch(addRestaurant(restaurantInfo))
    self.setState({
            redirectToMenu: true,
        })
        } else {
                self.setState({
                   redirectToMenu: false,
                 })
                 alert('Please type a valid address')
                 
            }
        }      
  );   
  }

  restaurantEmail(event) {
    const { dispatch } = this.props;
    const value = event.target.value;
    dispatch(restaurantEmail(value));
  }

  restaurantPassword(event) {
    const { dispatch } = this.props;
    const value = event.target.value;
    dispatch(restaurantPassword(value));
  }

  restaurantPhone(event) {
    const { dispatch } = this.props;
    const value = event.target.value;
    dispatch(restaurantPhone(value));
  }

  restaurantAddress(event) {
    const { dispatch } = this.props;
    const value = event.target.value;
    dispatch(restaurantAddress(value));
  }

  restaurantName(event) {
    const { dispatch } = this.props;
    const value = event.target.value;
    dispatch(restaurantName(value));
  }

  restaurantHours(event) {
    const { dispatch } = this.props;
    const value = event.target.value;
    dispatch(restaurantHours(value));
  }

  restaurantDescription(event) {
    const { dispatch } = this.props;
    const value = event.target.value;
    dispatch(restaurantDescription(value));
  }

  restaurantWebsite(event) {
    const { dispatch } = this.props;
    const value = event.target.value;
    dispatch(restaurantWebsite(value));
  }

  restaurantYelp(event) {
    const { dispatch } = this.props;
    const value = event.target.value;
    dispatch(restaurantYelp(value));
  }

  restaurantFacebook(event) {
    const { dispatch } = this.props;
    const value = event.target.value;
    dispatch(restaurantFacebook(value));
  }

  restaurantBillingAddress(event) {
    const { dispatch } = this.props;
    const value = event.target.value;
    dispatch(restaurantBillingAddress(value));
  }

  restaurantAnnualRevenue(event) {
    const { dispatch } = this.props;
    const value = event.target.value;
    dispatch(restaurantAnnualRevenue(value));
  }

  restaurantTags(event) {
    const { dispatch } = this.props;
    const value = event.target.value;
    dispatch(restaurantTags(value));
  }

  restaurantImg(event) {
    const { dispatch } = this.props;
    const value = event.target.value;
    dispatch(restaurantImg(value));
  }



  render() {

        if (this.state.redirectToMenu) {
           return <Redirect push to={'/restaurantMenuEdit'} />
         }

    return (
      <div>
        <NavBar />
        <div style={{ 'height': '68px' }}></div>
        <div className='container'>
          <p />
          <h2> Restaurant Information </h2>
          <p />
          <div className='container' style={{ 'padding': '1em' }}>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-2 col-form-label">Email</label>
              <div className="col-10">
                <input onChange={this.restaurantEmail}className="form-control" type="text" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-2 col-form-label">Password</label>
              <div className="col-10">
                <input onChange={this.restaurantPassword}className="form-control" type="password" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-2 col-form-label">Restaurant Name</label>
              <div className="col-10">
                <input onChange={this.restaurantName}className="form-control" type="text" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-2 col-form-label">Address</label>
              <div className="col-10">
                <input onChange={this.restaurantAddress} className="form-control" type="text" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-2 col-form-label">Phone</label>
              <div className="col-10">
                <input onChange={this.restaurantPhone}className="form-control" type="text" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-2 col-form-label">Hours</label>
              <div className="col-10">
                <input onChange={this.restaurantHours}className="form-control" type="text" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-2 col-form-label">Description</label>
              <div className="col-10">
                <textarea onChange={this.restaurantDescription}className="form-control" type="textarea" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-2 col-form-label">Website</label>
              <div className="col-10">
                <input onChange={this.restaurantWebsite}className="form-control" type="text" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-2 col-form-label">Yelp URL</label>
              <div className="col-10">
                <input onChange={this.restaurantYelp}className="form-control" type="text" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-2 col-form-label">Facebook URL</label>
              <div className="col-10">
                <input onChange={this.restaurantFacebook}className="form-control" type="text" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-2 col-form-label">Billing Address</label>
              <div className="col-10">
                <input onChange={this.restaurantBillingAddress}className="form-control" type="text" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-2 col-form-label">Annual Revenue</label>
              <div className="col-10">
                <input onChange={this.restaurantAnnualRevenue}className="form-control" type="text" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-2 col-form-label">Tags</label>
              <div className="col-10">
                <input onChange={this.restaurantTags}className="form-control" type="text" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-2 col-form-label">Image Upload</label>
              <div className="col-10">
                <input onChange={this.restaurantImg}type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                <small id="fileHelp" className="form-text text-muted">Upload an image that you would like to associate with your establishment. JPG only.</small>
              </div>
            </div>
            <div className="form-group row" >
              <label htmlFor="termsAndConditions" className="col-2 col-form-label">Terms & Conditions</label>
              <div className="col-10">
                <div style={{ "height": "15em", "border": "1px solid #ccc", "overflow": "auto" }}>
                  <p>The standard Lorem Ipsum passage, used since the 1500s</p>

                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                  <p>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</p>

                  <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>

                  <p>1914 translation by H. Rackham</p>

                  <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>

                  <p>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</p>

                  <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>

                  <p>1914 translation by H. Rackham</p>

                  <p>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button onClick={this.addRestaurant}type="button" className="btn text-white" style={{ "backgroundColor": "rgb(128, 10, 10)" }}><strong>Accept & Continue</strong></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}