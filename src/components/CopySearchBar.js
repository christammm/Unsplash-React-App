import React from 'react';

class CopySearchBar extends React.Component{


    //Controlled component
      //Establish state.
      state = {term: ''};

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.callWhenSentUp(this.state.term);
    };


    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                {/**When the input box is manipulated, change the state value. */}
                <input 
                    type="text"
                    name="search"
                    value={this.state.term}
                    onChange={e=>{this.setState({term: e.target.value})}}
                    />
                </form>
            </div>
        )
    }
}
 
export default CopySearchBar;
