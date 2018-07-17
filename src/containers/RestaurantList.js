import React, {Component} from 'react'
import {connect} from 'react-redux';
import {deleteItem} from '../actions/action'
import {moveItemToTop} from '../actions/action'
import {onSelectItem} from '../actions/action'
import {onDeleteBulk} from '../actions/action'
import {onMoveBulk} from '../actions/action'


export class RestaurantList extends Component {

	constructor(props) {
        super(props);
        this.state = {items: [], totalSelectedItems: 0};
    }

    componentDidMount() {
    	// console.log('I am in 1');
    	// if (this.props.items) {
	    // 	const { items } = this.props;
	    // 	this.setState({ items })
    	// }
  	}

  	componentWillUnmount() {

  	}

  	//This lifecycle method is invoked everytime the parent changes the props
  	componentWillReceiveProps(nextProps){
  		console.log('I am in 2')
    	this.setState({items: nextProps.items, totalSelectedItems: nextProps.totalSelectedItems})
    	// this.props.clearSelectedItems()
  	}

    render(){
    	return(
			<div className="restaurant-list">
                <h2>Total Selected Items: {this.state.totalSelectedItems}</h2>
				<button onClick={() => this.props.onDeleteBulk()}>Delete Bulk</button>
				<button onClick={() => this.props.onMoveBulk()}>Move Bulk</button>
				<ul>{
						console.log("Items",this.state.items)
					}
					{
						this.state.items.map((item, index) => {
							return(<li key={item.restaurant.id}>
										<h1 onClick={() => this.props.onSelectItem(item)}>{item.restaurant.name}</h1>
										<button onClick={() => this.props.onDelete(item.restaurant.id)}>Delete</button>
										<button onClick={() => this.props.onMoveItemToTop(item)}>Move To Top</button>
									</li>)
							// console.log("ID:" + item.restaurant.id)
							// console.log("NAME:" + item.restaurant.name)
						})

					}
                </ul>
			</div>
		)
    }


}

function mapStateToProps(state){
	return{
		items: state.items,
		totalSelectedItems: state.totalSelectedItems
	}
}

function mapDispatchToProps(dispatch){
	return {
		onDelete(itemId) {
            dispatch(deleteItem(itemId));
        },
        onMoveItemToTop(item) {
        	dispatch(moveItemToTop(item));
        },
        onSelectItem(item) {
        	dispatch(onSelectItem(item));
        },
        onDeleteBulk(){
        	dispatch(onDeleteBulk());
        },
        onMoveBulk(){
        	dispatch(onMoveBulk());
        }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
