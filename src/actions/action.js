import C from '../constants'
import axios from 'axios'



export const addItems = (message) => 
   ({
      type: C.ITEMS,
      payload: message
   })

export const selectItem = (item) => 
	({	
		type: C.SELECTED_ITEM,
		payload: item
	})   

export const deleteItem = (itemId) => 
   ({
      type: C.DELETE_ITEM,
      payload: itemId
   })

export const deleteBulk = (items) =>
	({
		type: C.DELETE_BULK,
      	payload: items
	})

export const moveItemToTop = (item) =>
	({
		type: C.MOVE_ITEM_TO_TOP,
		payload: item
	})   

export const moveBulk = (items) =>
	({
		type: C.MOVE_BULK,
		payload: items
	})

export const clearSelectedItems = () =>
	({
		type: C.CLEAR_SELECTED_ITEMS
	})	

export const selectedItemsTotal = (value) =>
	({
		type: C.TOTAL_SELECTED_ITEMS,
		payload: value
	})
  
export function searchItems(value)
{
	return (dispatch) => {
		console.log("This is value" + value)
		axios.get(`https://developers.zomato.com/api/v2.1/search?q=${value}&count=15`, {
			headers: {
				'user-key': 'fa151c6d43f10c5eaa43e09cfa03673c'
			}
		})
	        // .then(response => response.json())
	        .then(json => {
	        	console.log(json.data.restaurants)
	            dispatch(
	            	addItems(json.data.restaurants)
	            	)

	        })
		}
}

export function onDeleteBulk(){
	return (dispatch, getState) => {
		const selectedItems = getState().selectedItems;
		console.log("This is the state", selectedItems)
		dispatch(deleteBulk(selectedItems))
	}
}

export function onMoveBulk(){
	return (dispatch, getState) => {
		const selectedItems = getState().selectedItems;
		console.log("This is the state", selectedItems)
		dispatch(moveBulk(selectedItems))
	}
}

export function clearSelectedItemsArray(){

	return (dispatch, getState) => {
		dispatch(clearSelectedItems())
	}
}

export function getTotalSelectedItems(){
	return (dispatch, getState) => {
		const num = getState().selectedItems.length;
		dispatch(selectedItemsTotal(num))
	}
}
