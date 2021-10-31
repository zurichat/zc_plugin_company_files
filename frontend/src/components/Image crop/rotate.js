/* import React from 'react';

class RotateIMG extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            rotation:0

        }
        this.rotate = this.rotate.bind(this);
        this.rotateleft = this.rotateleft.bind(this);
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
    render(){
        const { rotation} = this.state;
        return()
        {['flow'].map((path) => {
        return (
        <div key={path}>
            <img style={{transform: `rotate(${rotation}deg)`}} src={`/${path}.jpg`}  alt='crop' width='100%' height='100%' onClick={this.rotate} />
        </div>
        )
    })}
    }
}
export default RotateIMG;
*/
