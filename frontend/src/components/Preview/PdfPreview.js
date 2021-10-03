import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import Nav from "../Subcomponents/nav";

function PdfPreview({ file, setOpenStatus }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="tw-bg-gray-800 tw-bg-opacity-70 tw-overflow-auto tw-h-full tw-w-full tw-flex-auto tw-flex tw-flex-col tw-justify-between tw-pb-6 tw-fixed tw-z-30 tw-top-0 tw-left-0 tw-bottom-0 tw-right-0">
      <Nav file={file} setOpenStatus={setOpenStatus} />
      <Document file={file.url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default PdfPreview;
