import React, { Component } from 'react';
import Login from './containers/login';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import './App.css';
import Nav from './containers/nav';

const MainComponent = () =>(
    <div>MainComponent</div>
)

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
	return (
		<Route
		    {...rest}
		    render={(props) => {
		    	
		    	if(authed != null){
		    		return(
		    			<Component />
	    			)
		    	}else{
		    		return(
		    			<Redirect to={{ pathname: '/'}} />
	    			)
		    		
		    	}
		    }}
	  	/>
	)
}

class App extends Component {

	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<PrivateRoute exact path="/main" authed={this.props.store.auth.signature} component={Nav}/>
						<Route exact path="/" component={Login}/>
					</div>
		 		</Router>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		store : state
	}
}

export default connect(mapStateToProps, null)(App);
