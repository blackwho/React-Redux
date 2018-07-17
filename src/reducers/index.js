import {combineReducers} from 'Redux';
import C from '../constants'

export const items = (state=[], action) => {
	switch(action.type){
			case C.ITEMS:
				return action.payload;
				break;

			case C.DELETE_ITEM:
				return state.filter(item => item.restaurant.id !== action.payload)
				break;

			case C.DELETE_BULK:
				return state.filter(item => {
    				return !action.payload.find( selectedItem => item.restaurant.id === selectedItem.restaurant.id );
				});
				break;

			case C.MOVE_BULK:
		 		return [...action.payload,
		 				...state.filter(item => {
    						return !action.payload.find( selectedItem => item.restaurant.id === selectedItem.restaurant.id );
						})
		 			]
		 				
		 		break;		

			case C.MOVE_ITEM_TO_TOP:
				console.log('I am in items reducer', state)
				return [action.payload,
						...state.filter(item => item.restaurant.id !== action.payload.restaurant.id)]
				break;
				
			default:
				return state;	
		}
}

export const selectedItems = (state=[], action) => {

	switch(action.type){
		case C.SELECTED_ITEM:
			// return[...state.filter(item => item.restaurant.id !== action.payload.restaurant.id),
	 		// 		action.payload]
	 		// 	break;
	 		if (state.includes(action.payload)) {
	 			return[...state.filter(item => item.restaurant.id !== action.payload.restaurant.id)]
	 		}else{
	 			return[...state,
	 			action.payload]
	 		}
	 		break;

	 	case C.CLEAR_SELECTED_ITEMS:
	 		return []	
	 		break;

	 	default:
	 		return state;		
	}
}

export const totalSelectedItems = (state=0, action) => {
		switch(action.type){
		 	case C.TOTAL_SELECTED_ITEMS:
		 		return action.payload;
		 		break;

		 	default:
		 		return state	
		}
}

const allReducers = combineReducers({
	items: items,
	selectedItems: selectedItems,
	totalSelectedItems: totalSelectedItems	
})

export default allReducers;