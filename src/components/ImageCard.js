import React from 'react'

class ImageCard extends React.Component{
    //We need to access the height of the element in the dom so that we can adjust the height in grid css.
    //Declare constructor and super
    state = {spans: 0};
    constructor(props){
        super(props);
        //Call React create ref instance.
        this.imageRef = React.createRef();
    }

    /**Initialize a lifecycle method component this mount to specifically capture the component ref.*/
    componentDidMount(){
        //console.log(this.imageRef.current.clientHeight); This would return 0 because the image is dynamically render and chrome can't detect it. instead use below:
        //Establish the callback instead. within the callback retrieve the accesible height.
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    
    //This function will declare setSpans
    setSpans = () =>{
        console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;
        const requiredSpans = Math.ceil(height / 10);//calculated the required numebr of spans 
        //150 refers to the grid auto rows number. we use math ceiling, which rounds up to the nearest integer
        this.setState({ spans : requiredSpans});
    }

    render(){
        //Establish destructured call so variables are easily referenceable within the image tag.
        const {description, urls, id} = this.props.image;

        return (//Only assign the key to the root element
            <div id={id} className="image_card" style={{gridRowEnd: `span ${this.state.spans}`}}>
                {/** establish the dom ref tag*/}
                <img ref={this.imageRef} alt={description} style={{width: '100%'}} src={urls.regular}/>
            </div>); //The image id is a unique identifier in the property.
    }
}

export default ImageCard
