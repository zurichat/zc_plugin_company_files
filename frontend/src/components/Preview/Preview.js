import React from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import Nav from "../Subcomponents/nav";

function Preview({ file, setOpenStatus }) {
  const docs = [{ uri: file.url }];

  return (
    <div className="tw-bg-gray-800 tw-bg-opacity-70 tw-overflow-auto tw-h-full tw-w-full tw-flex-auto tw-flex tw-flex-col tw-justify-between tw-pb-6 tw-fixed tw-z-30 tw-top-0 tw-left-0 tw-bottom-0 tw-right-0">
      <Nav file={file} setOpenStatus={setOpenStatus} />
      <DocViewer
        pluginRenderers={DocViewerRenderers}
        documents={docs}
        className="tw-h-full tw-m-5"
      />
    </div>
  );
}

export default Preview;
