import React from 'react';

class SearchBar extends React.Component {

  state = { term: "" };

  onInputChange = (event) => {
    this.setState( {term: event.target.value});
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    // onTermSubmit is the callback passed from App
    this.props.onTermSubmit(this.state.term);
  };

  render () {
    return(
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field"></div>
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          <div></div>
        </form>
      </div>
    );
  }
}

export default SearchBar;