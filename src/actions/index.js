import axios from 'axios';

export const FETCH_LOGIN = "FETCH_LOGIN";
export const ROOT_URL = `http://localhost:3000`;

export function fetchLogin(param){
	const url = `${ROOT_URL}/user/login`;
	const request = axios.post(url, param);

	return {
		type : FETCH_LOGIN,
		payload : request
	}
}



/**
 * [메인 네비게이션 바 목록 ]
 * @return {object}
 */
export const NAV_LIST = 'NAV_LIST';
export function fetchNavList (){
	return {
		type : NAV_LIST,
		payload : [
			{
				title : 'nav1',
				path : 'nav1'
			},
			{
				title : 'nav2',
				path : 'nav2'
			},
			{
				title : 'nav3',
				path : 'nav3'
			}
		]
	}	
}