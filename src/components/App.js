import React from 'react';
import Toolbar from '../containers/Toolbar'
import RestaurantList from '../containers/RestaurantList'


export const App = () => (
	<div>
		<h1>Zomato Restaurants</h1>
		<Toolbar/>
		<RestaurantList/>
	</div>
);