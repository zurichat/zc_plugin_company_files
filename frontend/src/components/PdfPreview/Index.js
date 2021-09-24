import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import ZoomIn from "../../../public/Icons/zoom-in/active.svg"
import ZoomOut from "../../../public/Icons/zoom-out/active.svg"
import active from "../../../public/Icons/arrow-left/active.svg";
import pdffile from "../../public/Icons/pdffile.svg";
import downloadIcon from "../../../public/Icons/download/active.svg";
import Vertical from "../../../public/Icons/more-vertical/active.svg";
import { useHistory } from "react-router";



function Index({ file, setOpenStatus }) {
  const history = useHistory();

  pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [myScale, setScale] = useState(1);
 
  const onSetScale = (type) => {
    var newScale = type ? scale + 0.1 : scale - 0.1;

    if (newScale > 2){
      newScale = 2
    }else if (newScale < 0.1){
      newScale = 0.1
    }
    setScale(newScale)
  };
 
  function onDocumentLoadSuccess ({ numPages }) {
    setNumPages(numPages);
    console.log(numPages);
    setPageNumber(1);
  };

  return (
    <div className="bg-gray-800 bg-opacity-70 overflow-auto h-full w-full flex-auto flex flex-col justify-between absolute z-10 top-0 left-0 bottom-0 right-0">
      <nav className="h-10 w-full flex flex-row justify-between py-3 px-3 lg:px-7">
        <div className="flex">
          <div>
            <img
              src={active}
              alt="arrow-left"
              className="mr-5"
              onClick={() => setOpenStatus(false)}
            />
          </div>
          <div>
            <div className="flex flex-row">
              <img src={pdffile} alt="image-icon" className="mr-2" />
              <p className="text-white">{file.fileName}</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={downloadIcon} alt="download-icon" />
          </div>
          <div>
            <img src={Vertical} alt="more-icon" className="ml-2" />
          </div>
        </div>
      </nav>


      <div className="flex flex-col justify-between items-center w-full">
        <div className="flex items-center justify-center w-full md:w-3/4">
          <Document 
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
          >
          </Document>
        </div>

        <div className="bg-black py-3 px-5 flex justify-center">
          <div>
            <p>
              Page {pageNumber || (numPages ? 1 : '--')} / {numPages || '--'}
            </p>  
          </div>
          <div>
            <img src={ZoomIn} alt="zoom-in" onClick= {()=>onSetScale(0)} className="md:w-10 w-7" />
            <img src={ZoomOut} alt="zoom-out" onClick= {()=>onSetScale(1)} className="md:w-10 w-7" />
          </div> 
        </div>    
      </div>
    </div>
  );
}

export default Index;