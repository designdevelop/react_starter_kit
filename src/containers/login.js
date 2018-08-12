import React, { Component } from 'react';
import { fetchLogin } from '../actions/index';
import { connect } from 'react-redux';

class Login extends Component {
   	
   	constructor(props){
   		super(props);

   		this.state = {
			userId : "",
			passwd : ""
   		}
   	}

	onLogin = (evt) => {

		this.props.fetchLogin(this.state).then((result) => {

			if(result.payload.data.result != null){
				sessionStorage.setItem("signature", result.payload.data.result.signature);
				sessionStorage.setItem("userId", result.payload.data.result.userId);

				this.props.history.push('/main');
			}else{
				alert("아이디 혹은 비밀번호가 틀렸습니다.");
			}
		});
		
	}

	inputChange = (evt, target) => {

		switch(target){
			case "USERID" :
				this.setState({ userId : evt.target.value });
			break;
			case "PASSWD" :
				this.setState({ passwd : evt.target.value });
			break;

			default : 

		}

	}

    render() {

        return (
        	<div>
        		<div>
        			<div>
        				<label>아이디</label>
        				<input type="text" 
        					placeholder="아이디를 입력하세요"
        					onChange={(evt) => {this.inputChange(evt, "USERID")}}/>
        			</div>
        			<div>
        				<label>비밀번호</label>
        				<input type="password" 
        					placeholder="비밀번호를 입력하세요"
        					onChange={(evt) => {this.inputChange(evt, "PASSWD")}}/>
        			</div>
        		</div>
        		<button onClick={(evt)=>this.onLogin(evt)}>로그인</button>
        	</div>   
        );
    }
}

function mapStateToProps(state){
	return {
		store : state
	}
}


export default connect(mapStateToProps, {fetchLogin})(Login);






