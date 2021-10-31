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

// export default ImageCropper;
