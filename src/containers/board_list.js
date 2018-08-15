import React, { Component } from 'react';
import { fetchBoardList } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class BoardList extends Component {
   
    constructor(props) {
        super(props);
    }

    componentWillMount(){
    	let userId = sessionStorage.getItem("userId");
    	this.props.fetchBoardList(userId);
    }

    renderBoard(){
    	return this.props.list.map((item) => {
    		return(
    			<li key={item.board_seq}>
    				<Link to={`${this.props.match.path}/board/detail/${item.board_seq}`}>{item.title}</Link>
				</li>
			)
    	})
    }


    render() {	
    	
        return (
        	<div>
	        	<ul>
	        		{this.renderBoard()}
	        	</ul>  
	        	<Link to='/main/board/create'>생성</Link>
        	</div>
        );
    }
}

function mapStateToProps(state){
	return {
		list : state.board.list
	}
}

export default connect(mapStateToProps, { fetchBoardList })(BoardList);
