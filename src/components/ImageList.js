import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard';

const ImageList = props => {

    //Create an image list formatting the images to be rendered.
    const imageList = props.images.map((image)=>{ 
        return (<ImageCard image={image}/>);
    });

    return (
        <div className="image_grid">
            {imageList}
        </div>
    );
};

export default ImageList
