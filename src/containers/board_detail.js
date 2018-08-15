import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBoardDetail } from '../actions/index';

class BoardDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
    	this.props.fetchBoardDetail(this.props.match.params.id);
    }

    render() {
    	
        return (
      		<div>
      		  	Detail page {this.props.match.params.id}
      		  	<br/>
      		  	title : {this.props.active.title}
      		  	<br/>
      		  	content : {this.props.active.content}
      		</div>      
        );
    }
}

function mapStateToProps(state){
	return {
		active : state.board.active
	}
}

export default connect(mapStateToProps, {fetchBoardDetail})(BoardDetail);
