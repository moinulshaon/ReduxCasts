import React, { Component } from "react";
import PropTypes from 'prop-types';

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = { term: "" };
    }

    onInputChange (term) {
        this.setState({ term });
        this.props.onSearchBarChange(term);
    }
    render () {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }
}

SearchBar.propTypes = {
    onSearchBarChange: PropTypes.func
};

export default SearchBar;
