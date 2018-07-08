
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