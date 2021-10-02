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
dayjs.extend(relativeTime);

const index = () => {
  const dispatch = useDispatch();
  const { loading, error, files } = useSelector(
    (state) => state.rootReducer.fileReducer
  );

  const [newFiles, setNewFiles] = useState();
  const [fileSubscription, setFileSubscription] = useState();

  useEffect(() => {
    (async () => {
      dispatch(fetchFiles());
    })();
  }, []);

  useEffect(() => {
    RTCSubscription("allFiles", (stuff) => {
      const websocketResponse = stuff;
      console.log({ stuff });
      setFileSubscription(websocketResponse.data);
      console.log({ fileSubscription });
    });
  }, []);

  useEffect(() => {
    SubscribeToChannel("/companyfiles", (stuff, me, you) => {
      console.log(stuff.data.event, me, you);
      setFileSubscription(stuff.data.event);
    });
    console.log(fileSubscription);
    (async function () {
      try {
        const info = await GetUserInfo();
        console.log(info);
      } catch (err) {
        console.log(err);
      }
    })();
    (async function () {
      try {
        const users = await GetWorkspaceUsers();
        console.log(users);
      } catch (err) {
        console.log(err);
      }
    })();
    const fetchNewData = () => {
      RealTime.subscribe("allFiles", "files/all", (data) => setNewFiles(data));
    };
    fetchNewData();
    console.log(newFiles);
  }, []);

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
            className="tw-text-green-500 hover:tw-border-green-500 tw-text-lg tw-font-semibold"
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
          className="tw-text-green-500 hover:tw-border-green-500 tw-text-lg tw-font-semibold"
        >
          View All
        </Link>
      </div>

      <div className="project-box-wrapper">
        <div className="project-box tw-w-full tw-py-5 tw-grid tw-grid-cols-auto-2 tw-mx-2">
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
    </div>
  );
};

export default index;
