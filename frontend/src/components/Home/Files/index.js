import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "../../Subcomponents/Image";
import Pdf from "../../Subcomponents/Pdf";
import Zip from "../../Subcomponents/Zip";
import Excel from "../../Subcomponents/Excel";
import Video from "../../Subcomponents/Video";
import Powerpoint from "../../Subcomponents/Powerpoint";
import Document from "../../Subcomponents/Document";
import Audio from "../../Subcomponents//audio";
import RealTime from "../../../helpers/realtime.helper";
import {
  SubscribeToChannel,
  GetWorkspaceUsers,
  GetUserInfo,
} from "@zuri/control";
import { RTCSubscription } from "../../../helpers/RTCSubscription";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../../../actions/fileAction";
import { useSnackbar } from "react-simple-snackbar";
dayjs.extend(relativeTime);

const index = () => {
  const dispatch = useDispatch();
  const { loading, error, files } = useSelector(
    (state) => state.rootReducer.fileReducer
  );
  const [newFile, setNewFile] = useState();
  const [SnackBar] = useSnackbar({
    position: "bottom-center",
    style: { backgroundColor: "#00B87C", color: "#fff" },
  });

  console.log(files);

  useEffect(() => {
    (async () => {
      try {
        dispatch(fetchFiles());
      } catch (err) {
        console.log(err);
      }
    })();
    RTCSubscription("allFiles", (allFiles) => {
      console.log({ allFiles });
      try {
        dispatch({
          type: "FETCH_FILES_FULFILLED",
          payload: { status: "success", data: [...allFiles.data] },
        });
      } catch (err) {
        throw new Error(err);
      }
    });
  }, []);

  useEffect(() => {
    RTCSubscription("newFile", (newFile) => {
      console.log({ newFile });
      setNewFile(newFile.data);
      console.log({ newFile });
    });
  }, [newFile]);

  if (error)
    return (
      <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center tw-text-red-600 tw-py-4">
        Error failed
      </div>
    );

  if (loading)
    return (
      <div className="tw-w-full tw-py-10">
        <div className="tw-w-full tw-flex tw-justify-between tw-items-center">
          <h2 className="tw-text-lg tw-font-semibold tw-text-gray-900">
            Files
          </h2>
          <Link
            to="/all-files"
            className="tw-text-green-500 hover:tw-text-green-700 tw-text-sm sm:tw-text-lg tw-font-semibold"
          >
            View All
          </Link>
        </div>
        <div className="tw-h-48 tw-flex tw-items-center tw-justify-center">
          <Loader
            type="ThreeDots"
            color="#00B87C"
            height={100}
            width={100}
            visible="true"
          />
        </div>
      </div>
    );

  return (
    <div className="tw-w-full tw-py-10">
      <div className="tw-w-full tw-flex tw-justify-between tw-items-center">
        <h2 className="tw-text-lg tw-font-semibold tw-text-gray-900">Files</h2>
        <Link
          to="/all-files"
          className="tw-text-green-500 hover:tw-text-green-700 tw-text-sm sm:tw-text-lg tw-font-semibold"
        >
          View All
        </Link>
      </div>

      <div className="project-box-wrapper">
        <div className="project-box tw-w-full tw-py-5 tw-flex tw-flex-wrap tw-justify-between sm:tw-mx-2">
          {Object.keys(files).length && files.data.length > 0 ? (
            files.data.slice(0, 15).map((file) => {
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
              ) : new RegExp("\\b" + "word" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Document file={file} />
                </div>
              ) : new RegExp("\\b" + "powerpoint" + "\\b").test(file.type) ? (
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

      {newFile != undefined ||
        (null > 0 &&
          SnackBar(
            `"${newFile.data.fileName}"` + " uploaded successfully 🎉!",
            10e3
          ))}
    </div>
  );
};

export default index;
