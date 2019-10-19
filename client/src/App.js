import React from 'react';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import {Provider} from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser,logoutUser} from './actions/authActions';


//Check for token
if(localStorage.jwtToken){
//set auth token header
setAuthToken(localStorage.jwtToken);
//Decode token and get the userInfo
const decoded = jwt_decode(localStorage.jwtToken);
//Set user into redux
store.dispatch(setCurrentUser(decoded));

const currentTime = Date.now()/1000; //divinding by 1000 for seconds
//check for expired token
if(decoded.exp < currentTime){
  //logout the user
store.dispatch(logoutUser());
  //Redirect to login
  window.location.href = '/login';
}
}

class App extends Component{

  render(){
  return (
    <Provider store = { store } >
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/Login" component={Login} />
        </div>
        <Footer />
      </div>
    </Router>
    </Provider>
  );
  }
}

export default App;