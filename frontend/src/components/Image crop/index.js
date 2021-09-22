import React from 'react';

import CroppingCSS from "./Cropping.module.css";
import Cropper from 'cropperjs';
import "cropperjs/dist/cropper.min.css";



class Crop extends React.Component{
    
    constructor() {
    super();
    this.state={
        show: true
    }
     this.state = {
        imageDestination:""
    }
    this.imageElement = React.createRef();
    
       
}
getCroppedImg(){
    this.setState({
        show: true,
    })
    
}
cancel(){
    this.setState({
        show: false,
    })
}


    componentDidMount() {
        const cropper = new Cropper(this.imageElement.current, {
            zoomable: true,
            background: true,
            scalable: true,
            rotatable: true,
            responsive: true,
            cropBoxResizable: true,
            resture: true,
            rounded: true,
            minCanvasWidth: 5,
            autoCrop: false,
            autoCropArea: 0.01,
            cropmove: true,
            viewMode: 2,
            aspectRatio: 1,
            crop: () => {
                const canvas =cropper.getCroppedCanvas();
                this.setState({ imageDestination: canvas.toDataURL("image/jpeg")});
            }
           
            
            
        });
        
    };
    
    render(){
    return(
        <div className={CroppingCSS.cropbg}>
       <div className={CroppingCSS.container}>
           <div className={CroppingCSS.text}>Your cropped image appears here</div>
           
         <div className={CroppingCSS.first}> 
         <div className={CroppingCSS.previewcontainer}>{
              this.state.show?
          <img className={CroppingCSS.preview} src={this.state.imageDestination}   alt="Destination" />
          :null
    }
    
    </div>
           <button className={CroppingCSS.cropbtn} onClick={()=>this.getCroppedImg()}>Crop</button>
           <button className={CroppingCSS.rotatebtn}>Rotate</button>
           <button  className={CroppingCSS.cancel} onClick={()=>this.cancel()}>Cancel</button>
           </div>
           
         <div className={CroppingCSS.second}>
          <div className={CroppingCSS.imagetobecropped}>
              <img className="rotate-90" src={this.props.src} ref={this.imageElement}  alt="source" />
          </div>
          <button className={CroppingCSS.savebtn}>Save</button>
          </div>
          
       </div>
       </div>
    )
    }
}

export default Crop;