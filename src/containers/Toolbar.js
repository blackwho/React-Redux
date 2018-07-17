import React, {Component} from 'react'
import {connect} from 'react-redux';
import {searchItems} from '../actions/action'

export class Toolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {searchQuery: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({searchQuery: event.target.value});
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.searchQuery);
        event.preventDefault();
        if(this.state.searchQuery)
            this.props.onSearch(this.state.searchQuery);
    }

    render() {
        return(

            <div className="toolbar">
                <form id="search-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Search Restaurant" value={this.state.searchQuery} onChange={this.handleChange}/>
                    <button type="submit">SEARCH</button>
                </form>
            </div>

            )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch(searchQuery) {
            dispatch(searchItems(searchQuery));
        }
    }
}

export default connect(null,mapDispatchToProps)(Toolbar);