<<<<<<< HEAD
import React, {useState} from 'react';
import cropIcon from "../../../public/Icons/crop-icon/active.svg";
import  Preview from "./reveal";
import CroppingCSS from "./Cropping.module.css";
import Crop from "./index"

function ImageCropper({file}) {
    const [showPreview, setShowPreview] = useState(false);

    return(
    <div>
    <button className={CroppingCSS.crop} onClick={() => setShowPreview(true) }>
      <img src={cropIcon} alt="crop -icon" />
    </button>
    <Preview trigger={showPreview} setTrigger={setShowPreview}>
      {['flow'].map((path) => {
        return(
        <div key={path}>
          <Crop src={file} alt='crop' width='100%' height='100%' />
        </div>
        )
      })}
      </Preview>
    </div>
    )
}
=======
// import React, {useState} from 'react';

// import  Preview from "./reveal";
// import CroppingCSS from "./Cropping.module.css";
// import Crop from "./index"

// function ImageCropper(file) {
//     const [showPreview, setShowPreview] = useState(false);

//     return(
//     <div>
//     <button className={CroppingCSS.crop} onClick={() => setShowPreview(true) }>CROP</button>
//     <Preview trigger={showPreview} setTrigger={setShowPreview}>
      
//        {['flow'].map((path) => {
//         return(
//         <div key={path}>
//           <Crop src={`/${path}.jpg`} alt='crop' width='100%' height='100%' />
//         </div>
//         )
//       })}
//       </Preview>
//     </div>
//     )
// }
>>>>>>> 923e08498575687293778186b0096aaa88fd2d11

// export default ImageCropper;