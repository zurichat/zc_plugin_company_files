import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import {  faArrowLeft, faFolderOpen, faDownload, faEllipsisV,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DocPreview from "./App.module.css"


const url = "/sample.pdf"


function Index () {
  pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [myScale, setScale] = useState(1);
  const filePlugIn = () => {
    Router.push('/home');
  }

  const onSetScale = (type) => {
    var newScale = type ? scale + 0.1 : scale - 0.1;

    if (newScale > 2){
      newScale = 2
    }else if (newScale < 0.1){
      newScale = 0.1
    }
    setScale(newScale)
  }
 

  function onDocumentLoadSuccess ({ numPages }) {
    setNumPages(numPages);
    console.log(numPages);
    setPageNumber(1);
  }

  return (
    <div className={DocPreview.background}>
      <div className={DocPreview.header}>
        <div className={DocPreview.doctitle}>
          <FontAwesomeIcon  onClick={filePlugIn} className={DocPreview.arrow} icon={faArrowLeft} />
          <FontAwesomeIcon className={DocPreview.DocIcon} icon={faFolderOpen} />
          <h1 className={DocPreview.docName}>
            {/* The title of the video would be passed as props here {title} */}
            Abstract.doc
          </h1>
        </div>
                    
        <div>
          <FontAwesomeIcon className={DocPreview.DocIcon} icon={faDownload} />
          <FontAwesomeIcon className={DocPreview.DocIcon} icon={faEllipsisV} />
        </div>
      </div>



      <div className={DocPreview.Docfile}>
        <Document 
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page 
            key={`page_${index + 1}`}
            pageNumber={`page_${index + 1}`}
            scale = {myScale}
            />
          )
          )}

        <div className={DocPreview.DocPagination}>
          <div>
            <p>
              Page {pageNumber || (numPages ? 1 : '--')} / {numPages || '--'}
            </p>  
          </div>
          <div>
            <button onClick= {()=>onSetScale(0)}>Zoom out</button> 
            <button onClick= {()=>onSetScale(1)}>Zoom in</button> 
          </div>
          
        </div>
        </Document>
      </div>
    </div>
  )
}

export default Index;
