import React, { Component } from 'react';
import Nav from './nav';
import BoardList from './board_list';
import BoardDetail from './board_detail';
import BoardCreate from './board_create';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Router>
             	<div>
             		
                <Route path='/main' component={Nav}/>
             		<Route exact path='/main' component={BoardList}/>
                <Route path='/main/board/detail/:id' component={BoardDetail}/>
                <Route path='/main/board/create' component={BoardCreate}/>
                
              </div>
            </Router>
        );
    }
}

function mapStateToProps(state){
  return {
    store : state
  }
}

export default connect(mapStateToProps, null)(Main);
