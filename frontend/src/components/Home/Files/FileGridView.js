import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "../../Subcomponents/Image";
import Pdf from "../../Subcomponents/Pdf";
import Zip from "../../Subcomponents/Zip";
import Excel from "../../Subcomponents/Excel";
import Video from "../../Subcomponents/Video";
import Powerpoint from "../../Subcomponents/Powerpoint";
import Document from "../../Subcomponents/Document";
import Audio from "../../Subcomponents/audio";
import Loader from "react-loader-spinner";
import { fetchFiles } from "../../../actions/fileAction";

function FileGridView({ sortingMethod }) {
  const dispatch = useDispatch();
  const { loading, error, files } = useSelector(
    (state) => state.rootReducer.fileReducer
  );

  useEffect(() => {
    (async () => {
      try {
        dispatch(fetchFiles());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="project-box-wrapper">
      <div className="project-box tw-w-full tw-py-5 tw-grid tw-grid-cols-auto-2 tw-mx-2">
        {error ? (
          <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center tw-text-red-600 tw-h-2/4 tw-w-full">
            Error failed
          </div>
        ) : loading ? (
          <div className="tw-flex tw-items-center tw-justify-center tw-h-2/4 tw-w-full">
            <Loader
              type="ThreeDots"
              color="#00B87C"
              height={100}
              width={100}
              visible="true"
            />
          </div>
        ) : Object.keys(files).length && files.data.length > 0 ? (
          files.data
            .sort(
              sortingMethod == "name"
                ? function (a, b) {
                    if (a.fileName.toLowerCase() < b.fileName.toLowerCase())
                      return -1;
                    if (a.fileName.toLowerCase() > b.fileName.toLowerCase())
                      return 1;
                    return 0;
                  }
                : sortingMethod == "type"
                ? function (a, b) {
                    if (a.type < b.type) return -1;
                    if (a.type > b.type) return 1;
                    return 0;
                  }
                : sortingMethod == "date"
                ? (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
                : function (a, b) {
                    return b.size - a.size;
                  }
            )
            .map((file) => {
              return new RegExp("\\b" + "image" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Image file={file} />
                </div>
              ) : new RegExp("\\b" + "pdf" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Pdf file={file} />
                </div>
              ) : new RegExp("\\b" + "zip" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Zip file={file} />
                </div>
              ) : new RegExp("\\b" + "ms-excel" + "\\b").test(file.type) ||
                new RegExp("\\b" + "spreadsheetml" + "\\b").test(file.type) ||
                new RegExp("\\b" + "csv" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Excel file={file} />
                </div>
              ) : new RegExp("\\b" + "msword" + "\\b").test(file.type) ||
                new RegExp("\\b" + "wordprocessingml" + "\\b").test(
                  file.type
                ) ||
                new RegExp("\\b" + "plain" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Document file={file} />
                </div>
              ) : new RegExp("\\b" + "ms-powerpoint" + "\\b").test(file.type) ||
                new RegExp("\\b" + "presentationml" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Powerpoint file={file} />
                </div>
              ) : new RegExp("\\b" + "audio" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Audio file={file} />
                </div>
              ) : (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Video file={file} />
                </div>
              );
            })
        ) : (
          <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center">
            No Files
          </div>
        )}
      </div>
    </div>
  );
}

export default FileGridView;
