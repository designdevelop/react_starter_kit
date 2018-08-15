import axios from 'axios';

export const ROOT_URL = `http://localhost:3000`;


export const FETCH_LOGIN = "FETCH_LOGIN";
/**
 * [로그인 action creator]
 * @param  {object} param 
 *         [아이디와 비밀번호 정보를 가진 파라미터]
 *         ex) {userId: "test", passwd : "1234"}
 * @return {object}
 */
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


/*****************************************************************************
 * Board action creator START
 *****************************************************************************/


	export const FETCH_BOARD_LIST = 'FETCH_BOARD_LIST';
	/**	
	 * [게시물 목록 조회]
	 * @param  {[type]} userId [유저 아이디]
	 * @return {object}
	 */
	export function fetchBoardList (userId){
		const url = `${ROOT_URL}/board/list?userId=${userId}`;
		
		let signature = sessionStorage.getItem("signature");
		
		const request = axios.get(url, {"headers": { "x-access-token": signature }});

		return {
			type : FETCH_BOARD_LIST,
			payload : request
		}

	}

	export const FETCH_BOARD_CREATE = 'FETCH_BOARD_CREATE';
	/**
	 * [게시물 등록 action creator]
	 * @param  {object} param 
	 *         [유저아이디, 제목, 본문 정보를 가진 파라미터]
	 *         ex) {userId : 'test', title : 'title', content : 'content'}
	 * @return {object}
	 */
	export function fetchBoardCreate (param){
		const url = `${ROOT_URL}/board/add`;
		
		let signature = sessionStorage.getItem("signature");
		const request = axios.post(url, param, {"headers": { "x-access-token": signature }});

		return {
			type : FETCH_BOARD_CREATE,
			payload : request
		}
	}


	export const FETCH_BOARD_DETAIL = 'FETCH_BOARD_DETAIL';
	export function fetchBoardDetail (id){
		return {
			type : FETCH_BOARD_DETAIL,
			payload : id
		}
	}



/*****************************************************************************
 * Board action creator END
 *****************************************************************************/




