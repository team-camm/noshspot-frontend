import React from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import { 
  Link
} from 'react-router-dom';
export default class Search extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        restaurant: [],
    }
    this.search = this.search.bind(this);
    }

    componentWillMount() {
        axios.get('http://localhost:3000/api/restaurant')
          .then(response =>{
             this.setState({restaurant:response.data});
        })
         .catch(error => {
           console.log('Error fetching and parsing data',error);
        });
    }

    search(){
       
        console.log('result')
    }
   
  render() {
       var reslist = window.location.hash.split("searchresults=,");
       var itemids = reslist[1].split(",")
       //console.log(itemids);
       
    return (
        <div>
          <NavBar />
          <div style={{ height: '25px' }}></div>
          <div className="jumbotron jumbotron-fluid" style={{ height: '60px' }} >
            <div  className="input-group" style={{width:'50%',marginLeft:'28%'}}>
              <span className="input-group-addon" onClick={this.search} style={{background:'white'}}><img src="/search-icon-2-614x460.png" style={{width:'30px',height:'30px'}}/></span> 
              <input className="form-control" placeholder="Search for anything ..." type="text" style={{width:'60%'}} />
            </div>
          </div>
          <div className="Grid">
              {
               this.state.restaurant.map((item,i) =>{
                 //console.log(item._id, itemids[i]);
                 for (var j=0; j<itemids.length; j++) {
                 if (item._id == itemids[j]){
                   return <div key={item._id} className="Grid-cell">
                            <Link to={"/restaurantmenu/"+item._id} style={{color:"#ffffff",textDecoration: 'none'}}>
                             <h5>{item.restaurantName}</h5>
                             {item.hours}
                            </Link>
                          </div>
                  }
                 }
               })
               }
          </div> 
          
        </div>
    )
  }
}    