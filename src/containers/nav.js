import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchNavList } from '../actions/index';

const Component1 = () =>(
    <div>Component1</div>
)

const Component2 = () =>(
    <div>Component2</div>
)

const Component3 = () =>(
    <div>Component3</div>
)

class Nav extends Component {


    componentWillMount(){
    	this.props.fetchNavList();
    }

    navRender(){
    	return this.props.navList.map((item, idx) => {
    		return (
    			<li key={idx}>
    				<Link to={`${this.props.match.path}/${item.path}`}>{item.title}</Link>
				</li>
			);
    	})
    }

    render() {


    	if(this.props.navList.length === 0){
    		return (<div>loading</div>)
    	}

        return (
        	<Router>
                <div>
    		        <ul>
    		        	{this.navRender()}
    		        </ul>
                    <Route path={`${this.props.match.path}/nav1`} component={Component1}/>
                    <Route path={`${this.props.match.path}/nav2`} component={Component2}/>
                    <Route path={`${this.props.match.path}/nav3`} component={Component3}/>
                </div>
            </Router>
        );
    }
}



function matStateToProps(state){
	return {
		navList : state.navStore.navList
	};
}

export default connect(matStateToProps, { fetchNavList })(Nav);
