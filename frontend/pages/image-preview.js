import React from "react";
import Layout from "Components/Layout";
import PreviewImage from "Components/ImagePreview/index";

function ImagePreview() {
  return (
    <Layout>
      <div className="h-screen flex-1 flex items-center justify-center">
        <PreviewImage />
      </div>
    </Layout>
  );
}

export default ImagePreview;
