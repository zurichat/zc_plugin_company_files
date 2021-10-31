import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "react-loader-spinner";
import dayjs from "dayjs";
import ZipImg from "../../../../public/Icons/zip.svg";
import Vid from "../../../../public/Icons/video.svg";
import PdfImg from "../../../../public/Icons/pdffile.svg";
import PptImg from "../../../../public/Icons/pp-cat.svg";
import Xls from "../../../../public/Icons/excel-cat.svg";
import DocImg from "../../../../public/Icons/doc-cat.svg";
import ImgFile from "../../../../public/Icons/imgfile.svg";
import Aud from "../../../../public/Icons/music/active.svg";

import { fetchFiles } from "../../../actions/fileAction";
import FileType from "./FileType";

function FileListView({ sortingMethod }) {
  const dispatch = useDispatch();
  const { loading, error, files } = useSelector(
    (state) => state.rootReducer.fileReducer
  );

  useEffect(() => {
    (async () => {
      try {
        dispatch(fetchFiles());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // function to convert size to gigabytes
  function convertSize(size) {
    return (size / (1024 * 1024)).toFixed(2);
  }

  return (
    <>
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
        <table className="tw-border-0 tw-border-collapse tw-table-fixed tw-w-full tw-mx-3">
          <thead className="tw-text-base tw-text-text-grey tw-text-left">
            <tr>
              <th className="tw-w-1/4 tw-py-[25px]">Name</th>
              <th className="tw-w-1/4 tw-py-[25px]">Owner</th>
              <th className="tw-w-1/4 tw-py-[25px] tw-truncate">
                Date Modified
              </th>
              <th className="tw-w-1/4 tw-py-[25px]">File Size</th>
            </tr>
          </thead>
          <tbody className="tw-text-sm">
            {files.data
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
              .map((file) => (
                <tr key={file._id}>
                  <td className="tw-w-4/5 tw-py-[25px] tw-truncate tw-flex tw-items-center">
                    {new RegExp("\\b" + "image" + "\\b").test(file.type) ? (
                      <FileType
                        IconName={ImgFile}
                        bgColor="tw-bg-blue-300"
                        textColor="tw-text-blue-600"
                      />
                    ) : new RegExp("\\b" + "pdf" + "\\b").test(file.type) ? (
                      <FileType
                        IconName={PdfImg}
                        bgColor="tw-bg-blue-300"
                        textColor="tw-text-blue-600"
                      />
                    ) : new RegExp("\\b" + "ms-excel" + "\\b").test(
                        file.type
                      ) ||
                      new RegExp("\\b" + "spreadsheetml" + "\\b").test(
                        file.type
                      ) ||
                      new RegExp("\\b" + "csv" + "\\b").test(file.type) ? (
                      <FileType
                        IconName={Xls}
                        bgColor="tw-bg-blue-300"
                        textColor="tw-text-blue-600"
                      />
                    ) : new RegExp("\\b" + "msword" + "\\b").test(file.type) ||
                      new RegExp("\\b" + "wordprocessingml" + "\\b").test(
                        file.type
                      ) ||
                      new RegExp("\\b" + "plain" + "\\b").test(file.type) ? (
                      <FileType
                        IconName={DocImg}
                        bgColor="tw-bg-blue-300"
                        textColor="tw-text-blue-600"
                      />
                    ) : new RegExp("\\b" + "ms-powerpoint" + "\\b").test(
                        file.type
                      ) ||
                      new RegExp("\\b" + "presentationml" + "\\b").test(
                        file.type
                      ) ? (
                      <FileType
                        IconName={PptImg}
                        bgColor="tw-bg-blue-300"
                        textColor="tw-text-blue-600"
                      />
                    ) : new RegExp("\\b" + "audio" + "\\b").test(file.type) ? (
                      <FileType
                        IconName={Aud}
                        bgColor="tw-bg-blue-300"
                        textColor="tw-text-blue-600"
                      />
                    ) : new RegExp("\\b" + "video" + "\\b").test(file.type) ? (
                      <FileType
                        IconName={Vid}
                        bgColor="tw-bg-blue-300"
                        textColor="tw-text-blue-600"
                      />
                    ) : (
                      <FileType
                        IconName={ZipImg}
                        bgColor="tw-bg-blue-300"
                        textColor="tw-text-blue-600"
                      />
                    )}
                    <span className="tw-truncate tw-w-3/5">
                      {file.fileName.slice(0, file.fileName.lastIndexOf("."))}
                    </span>
                  </td>
                  <td className="tw-w-1/4">Me</td>
                  <td className="tw-w-1/4">
                    {dayjs(file.dateModified).format("DD MMM YYYY")}
                  </td>
                  <td className="tw-w-1/4">{convertSize(file.size)} MB</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center tw-text-red-600 tw-h-2/4 tw-w-full">
          No files found
        </div>
      )}
    </>
  );
}

export default FileListView;
