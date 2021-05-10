import React from 'react';

class SearchBar extends React.Component{
    //Controlled implementation
    state = { term: '' };


    //Solution 2 Use an arrow function to handle form submissions and issues with logging this.state.term
    formSubmitHandle = e => {
        e.preventDefault();
        //This will reference the onSubmit call from the App.js File
        this.props.onSubmit(this.state.term);
    }

    //Solution 3 wrap the onsubmit with an arrow function;
    //onSubmit={(event)=> this.onFormSubmit()} the form will invoke the arrow function ones

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.formSubmitHandle} className="ui form">     
                    <div className="field">
                        <label for="search">Search bar: </label>
                        <input 
                            name="search" 
                            type="text" 
                            placeholder="Search here" 
                            value={this.state.term} 
                            onChange={(e) => {this.setState({ term : e.target.value })}}
                        />    
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;