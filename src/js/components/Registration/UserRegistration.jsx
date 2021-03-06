import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Redirect } from 'react-router';
import {
    updateEmail,
    updatePassword,
    updateFullName,
    updatePhone,
    updateAddress,
    saveRegInfo,
    logInUser
} from './userRegistrationActions';
import {
  Link
} from 'react-router-dom';
import axios from 'axios';

export default class UserRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      redirect: false
    }

    // this.updateAccount = this.updateAccount.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeFullName = this.changeFullName.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.saveCustomerInfo = this.saveCustomerInfo.bind(this);
    this.logIn = this.logIn.bind(this);
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

  changeFullName(event) {
    const {dispatch} = this.props;
    const value = event.target.value;
    dispatch(updateFullName(value));
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

  saveCustomerInfo() {
    const { dispatch } = this.props;
    const { email, password, fullName, phone, address } = this.props.temp;
    var regInfo = {
      email, 
      password, 
      fullName, 
      phone, 
      address
    }
    dispatch(saveRegInfo(regInfo));
  }

  logIn() {
    const { dispatch } = this.props;
    const { email, password } = this.props.temp;
    var logInInfo = {
      email, 
      password
    }
    axios.post('http://noshspot-backend.herokuapp.com/login', logInInfo)
      .then(user => {
        console.log(user);
        this.setState({
          redirect: true
        });
      })
    }

  render() {
    if (this.state.redirect) {
      return <Redirect push to='/'/>;
    }
    return (
      <div>
        <NavBar />
        <div style={{ 'height': '68px'}}></div>
        <div className='container'>
          <p />
          <div className='row'>
            <p />
            <div className='col-6'>
              <h2>Log In</h2>
              <p />
              <div className='container' style={{ 'padding': 1 + 'em'}}>
                <div className="form-group row">
                  <label htmlFor="example-text-input" className="col-2 col-form-label">Email</label>
                  <div className="col-10">
                    <input className="form-control" type="text" onChange={ this.changeEmail } id="" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="example-text-input" className="col-2 col-form-label">Password</label>
                  <div className="col-10">
                    <input className="form-control" type="text" onChange={ this.changePassword } id="" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="example-text-input" className="col-2 col-form-label"></label>
                  <div className="col-10">
                    <button type="button" className="btn text-white" onClick={ this.logIn } style={{ "backgroundColor": "rgb(128, 10, 10)", cursor: 'pointer'}}><strong>Log In</strong></button>
                  </div>
                </div> 
              </div>
            </div>
            <div className='col-6'>
              <h2> Sign Up </h2>
              <p />
              <div className='container' style={{ 'padding': 1 + 'em'}}>
                <div className="form-group row">
                  <label htmlFor="example-text-input" className="col-2 col-form-label">Email</label>
                  <div className="col-10">
                    <input className="form-control" type="text" onChange={ this.changeEmail } id="" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="example-text-input" className="col-2 col-form-label">Password</label>
                  <div className="col-10">
                    <input className="form-control" type="text" onChange={ this.changePassword } id="" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="example-text-input" className="col-2 col-form-label">Full Name</label>
                  <div className="col-10">
                    <input className="form-control" type="text" onChange={ this.changeFullName } id="" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="example-text-input" className="col-2 col-form-label">Phone Number</label>
                  <div className="col-10">
                    <input className="form-control" type="text" onChange={ this.changePhone } id="" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="example-text-input" className="col-2 col-form-label">Default Address</label>
                  <div className="col-10">
                    <input className="form-control" type="text" onChange={ this.changeAddress } id="" />
                  </div>
                </div>
                <div className="form-group row" >
                  <label htmlFor="termsAndConditions" className="col-2 col-form-label">Terms & Conditions</label>
                  <div className="col-10">
                    <div style={{ "height":15 + "em", "border":"1px solid #ccc", "overflow":"auto" }}>
                      <div style={{ "paddingLeft": 1 + "em"}}>
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
                </div>
                <div className="form-group row">
                  <label htmlFor="example-text-input" className="col-2 col-form-label"></label>
                  <div className="col-10">
                    <Link to='/'><button type="button" className="btn text-white" onClick={ this.saveCustomerInfo } style={{ "backgroundColor": "rgb(128, 10, 10)", cursor: 'pointer'}}><strong>Accept & Continue</strong></button></Link>
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
