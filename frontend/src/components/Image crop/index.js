import React from 'react';
import Done from "../../../public/done-tick.svg"
import CroppingCSS from "./Cropping.module.css";
import Cropper from 'cropperjs';
import "cropperjs/dist/cropper.min.css";




class Crop extends React.Component{
    
    constructor(props) {
    super(props);
    this.state={
        show: true
    }
     this.state = {
        imageDestination:""
    }
    
    this.state ={
        rotation:0

    }
    this.imageElement = React.createRef();
    this.rotate = this.rotate.bind(this);
        this.rotateleft = this.rotateleft.bind(this);
    
       
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
rotate(){
    let newRotation = this.state.rotation + 90;
    if(newRotation >= 360){
        newRotation =-360;
    }
    this.setState({
        rotation: newRotation,
    })
}
rotateleft(){
    let newRotation = this.state.rotation - 90;
    if(newRotation >= 360){
        newRotation =- 360;
    }
    this.setState({
        rotation: newRotation,
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
                this.setState({ imageDestination: canvas.toDataURL("image/jpg")});
            }
           
            
            
        });
        
    };
    
    
    render(){
        const { rotation} = this.state;
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
            
           <button className={CroppingCSS.rotatebtn} onClick={this.rotate}>Rotate</button>
           
           </div>
           
         <div className={CroppingCSS.second}><div className={CroppingCSS.Done}><img src={Done} height="5" /></div>
          <div className={CroppingCSS.imagetobecropped}>
              <img style={{transform: `rotate(${rotation}deg)`}} src={this.props.src} ref={this.imageElement}  alt="source" />
          </div>
          <button className={CroppingCSS.savebtn}>Save</button>
          </div>
          
       </div>
       </div>
    )
    }
}

export default Crop;