import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchBoardCreate } from '../actions/index';


class BoardCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	title : "",
        	content : "",
        	userId : sessionStorage.getItem('userId')
        }
    }

   	inputChange = (evt, target) =>{
   		switch(target){
   			case "title" :   				
   				this.setState({ title : evt.target.value });
   				break;
   			case "content" : 
   				this.setState({ content : evt.target.value });
   				break;
   		}
   	}

   	onCreate = (evt) => {
   		this.props.fetchBoardCreate(this.state).then((result) => {

  			if(result.payload.data.result != null){
  				this.props.history.push('/main');
  			}else{
  				alert("아이디 혹은 비밀번호가 틀렸습니다.");
  			}
        
  		});
   	}



    render() {
    	console.log("state : ", this.state);
        return (
            <div>
            	<label>제목</label>
       			<input type="text" onChange={(evt) => {this.inputChange(evt, "title")}}/>
       			<textarea onChange={(evt) => {this.inputChange(evt, "content")}}></textarea>
       			<button onClick={(evt)=>this.onCreate(evt)}>저장</button>
            </div>
        );
    }
}

export default connect(null, { fetchBoardCreate })(BoardCreate);
