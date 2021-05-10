import axios from 'axios';
//You can preset headers and params in axios. This is one approach.
// const searchImages = (term) =>{

// };

//export default axios create will export the precongfigured axios call to your app.
//axios will create an axios default client with customizations to make requests to specifically tiffany.
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {//Adds on some headers on the request that we're making to the api
        Authorization: 'Client-ID ySlrbNyTE2ZowNyLqFigJoIBBBd-Kjdo8KqPNghUw04',
    }
});

//This will have big benefits later on.