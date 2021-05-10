import React from 'react';
//import axios from 'axios';//By convention I would want to put third party plugins above components
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
class App extends React.Component {

    state = { images: [] };

    /**This function will run when the search bar submits */
    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos',{ // This is a easier way to collect the response.
            params: {query: term}//Specifies the different query params we want to specify in the request       
        });

        this.setState({ images: response.data.results });
    }


    render(){
        return (<div className="ui container" style={{marginTop:'10px'}}>
            {/** We have to call onSubmit on call the functiion when the searchbar is submitted*/}
            {/** Technically, because this is a component, onSubmit can we whatever we want, but for regular JSX elements, thats a no no.*/}
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <div>Number of Images found: {this.state.images.length}</div>
        <ImageList images={this.state.images}/>
        </div>);
    }
    
};

export default App;