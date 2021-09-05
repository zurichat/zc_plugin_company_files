import React, { useState } from "react";

import ConfirmDeleteFile from "./ConfirmDelete";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#616161",
    fontFamily: "Lato",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  myStyle: {
    padding: theme.spacing(2),
    borderRadius: "10px",
  },
}));

const FILE_ICON = "/Icons/file-icon.svg";
const TABLE_COLUMNS = ["Name", "Owner", "Deletion date", "File size"];
const TABLE_ITEMS = [
  {
    name: "Design 101",
    owner: "me",
    deletionDate: "12/04/20",
    fileSize: "180 KB",
  },
  {
    name: "Design 101",
    owner: "me",
    deletionDate: "12/04/20",
    fileSize: "180 KB",
  },
  {
    name: "Design 101",
    owner: "me",
    deletionDate: "12/04/20",
    fileSize: "180 KB",
  },
  {
    name: "Design 101",
    owner: "me",
    deletionDate: "12/04/20",
    fileSize: "180 KB",
  },
  {
    name: "Design 101",
    owner: "me",
    deletionDate: "12/04/20",
    fileSize: "180 KB",
  },
  {
    name: "Design 101",
    owner: "me",
    deletionDate: "12/04/20",
    fileSize: "180 KB",
  },
  {
    name: "Design 101",
    owner: "me",
    deletionDate: "12/04/20",
    fileSize: "180 KB",
  },
  {
    name: "Design 101",
    owner: "me",
    deletionDate: "12/04/20",
    fileSize: "180 KB",
  },
  {
    name: "Design 101",
    owner: "me",
    deletionDate: "12/04/20",
    fileSize: "180 KB",
  },
  {
    name: "Design 101",
    owner: "me",
    deletionDate: "12/04/20",
    fileSize: "180 KB",
  },
  {
    name: "Design 101",
    owner: "me",
    deletionDate: "12/04/20",
    fileSize: "180 KB",
  },
  {
    name: "Design 101",
    owner: "me",
    deletionDate: "12/04/20",
    fileSize: "180 KB",
  },
];

const TheadItem = ({ value = "", last = false }) => {
  return (
    <th
      scope="col"
      className={`originScreen:px-6 originScreen:py-3 originScreen:text-left originScreen:text-xs originScreen:font-medium originScreen:uppercase originScreen:tracking-wider ${
        !last ? "" : "originScreen:text-right"
      }`}
    >
      {value}
    </th>
  );
};
const TbodyItem = ({ value = "", last = false }) => {
  return (
    <td
      className={`originScreen:px-6 originScreen:py-4 originScreen:whitespace-nowrap originScreen:text-sm originScreen:text-gray-500 ${
        !last ? "" : "originScreen:text-right"
      }`}
    >
      {value}
    </td>
  );
};
const TbodyItemWithIcon = ({
  value = "",
  last = false,
  iconPath = FILE_ICON,
}) => {
  return (
    <td
      className={`originScreen:px-6 originScreen:py-4 originScreen:whitespace-nowrap originScreen:text-sm originScreen:flex originScreen:items-center originScreen:text-gray-500 ${
        !last ? "" : "originScreen:text-right"
      }`}
    >
      <img
        {...{ src: iconPath, alt: "file icon" }}
        className="originScreen:w-6 originScreen:h-6 originScreen:mr-2"
      />
      {value}
    </td>
  );
};
const TbodyRow = ({
  name = "",
  owner = "",
  deletionDate = "",
  fileSize = "",
  openModal,
}) => {
  return (
    <tr
      onClick={() => openModal()}
      className="originScreen:border-none hover:bg-gray-50"
    >
      <TbodyItemWithIcon
        {...{
          value: name,
        }}
      />
      <TbodyItem
        {...{
          value: owner,
        }}
      />
      <TbodyItem
        {...{
          value: deletionDate,
        }}
      />
      <TbodyItem
        {...{
          value: fileSize,
          last: true,
        }}
      />
    </tr>
  );
};

const TrashTable = () => {
  const [reveal, setReveal] = useState(false);

  const showModal = () => {
    setReveal(true);
  };

  const closeModal = () => {
    setReveal(false);
  };

  return (
    <div className="originScreen:flex originScreen:flex-col">
      <ConfirmDeleteFile collapse={closeModal} reveal={reveal} />
      <div className="originScreen:-my-2 originScreen:overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="originScreen:py-2 originScreen:align-middle originScreen:inline-block originScreen:min-w-full sm:px-6 lg:px-8">
          <div className="originScreen:shadow originScreen:overflow-hidden sm:rounded-lg">
            <table className="originScreen:min-w-full originScreen:p-0 originScreen:m-0">
              <thead className="originScreen:font-bold originScreen:text-black">
                <tr>
                  {TABLE_COLUMNS?.map((elem, ind, selfArr) => (
                    <TheadItem
                      {...{
                        key: ind,
                        value: elem,
                        last: ind === selfArr?.length - 1,
                      }}
                    />
                  ))}
                </tr>
              </thead>
              <tbody className="originScreen:bg-white originScreen:divide-y originScreen:divide-gray-200">
                {TABLE_ITEMS?.map((elem, ind) => (
                  <TbodyRow openModal={showModal} {...{ key: ind, ...elem }} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

function Trash() {
  const classes = useStyles();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const trashIsEmpty = urlParams?.get("empty");

  return !trashIsEmpty ? (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        style={{ paddingLeft: "2rem", paddingRight: "1rem", marginTop: "4rem" }}
      >
        <Grid item xs={12}>
          <Grid container style={{ display: "flex" }}>
            <Grid xs={6}>
              <Typography variant="h6" style={{ color: "black" }}>
                Items In My Trash
              </Typography>
            </Grid>
            <Grid xs={6} style={{ textAlign: "right" }}>
              <svg
                width="26"
                height="18"
                viewBox="0 0 26 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  cursor: "pointer",
                  marginRight: 0,
                  marginLeft: "auto",
                }}
              >
                <path
                  d="M0.5 2.99512C0.5 2.37352 0.74693 1.77737 1.18647 1.33784C1.62601 0.898297 2.22215 0.651367 2.84375 0.651367H23.1562C23.7779 0.651367 24.374 0.898297 24.8135 1.33784C25.2531 1.77737 25.5 2.37352 25.5 2.99512V15.4951C25.5 16.1167 25.2531 16.7129 24.8135 17.1524C24.374 17.5919 23.7779 17.8389 23.1562 17.8389H2.84375C2.22215 17.8389 1.62601 17.5919 1.18647 17.1524C0.74693 16.7129 0.5 16.1167 0.5 15.4951L0.5 2.99512ZM2.84375 2.21387C2.63655 2.21387 2.43784 2.29618 2.29132 2.44269C2.14481 2.5892 2.0625 2.78792 2.0625 2.99512V8.46387H8.3125V2.21387H2.84375ZM8.3125 10.0264H2.0625V15.4951C2.0625 15.7023 2.14481 15.901 2.29132 16.0475C2.43784 16.1941 2.63655 16.2764 2.84375 16.2764H8.3125V10.0264ZM9.875 10.0264V16.2764H16.125V10.0264H9.875ZM16.125 8.46387V2.21387H9.875V8.46387H16.125ZM17.6875 10.0264V16.2764H23.1562C23.3635 16.2764 23.5622 16.1941 23.7087 16.0475C23.8552 15.901 23.9375 15.7023 23.9375 15.4951V10.0264H17.6875ZM17.6875 8.46387H23.9375V2.99512C23.9375 2.78792 23.8552 2.5892 23.7087 2.44269C23.5622 2.29618 23.3635 2.21387 23.1562 2.21387H17.6875V8.46387Z"
                  fill="#B4B4B4"
                />
              </svg>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            style={{
              backgroundColor: "#F0FBF8",
              fontSize: ".95rem",
              fontWeight: 600,
            }}
          >
            <Grid xs={6}>
              <div className={classes.myStyle}>
                Items in trash are deleted forever after 30 days
              </div>
            </Grid>
            <Grid
              xs={6}
              style={{ textAlign: "right", fontWeight: "bold" }}
              className={classes.myStyle}
            >
              <span style={{ cursor: "pointer" }}>Empty Trash</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ textAlign: "center", marginTop: "4rem", color: "black" }}
        >
          <div>
            <svg
              width="119"
              height="119"
              viewBox="0 0 119 119"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                marginBottom: "2rem",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              <path
                d="M92.6879 40.8506H35.4542L62.6477 13.6571C62.9943 13.3105 63.1879 12.8422 63.1879 12.3536C63.1879 11.865 62.9943 11.3948 62.6477 11.0501L57.4336 5.83593C55.3428 3.74512 51.6995 3.74512 49.6106 5.83593L45.3994 10.0471L48.0065 12.6541L52.2195 8.44299C52.9146 7.74606 54.1296 7.74606 54.8265 8.44299L58.739 12.3536L14.4097 56.681L10.4991 52.7686C10.1506 52.422 9.95887 51.9592 9.95887 51.4651C9.95887 50.9709 10.1506 50.51 10.4991 50.1615L44.319 16.3416L41.7119 13.7346L39.1805 16.266L36.5734 13.659C34.4144 11.4999 30.9057 11.5018 28.7504 13.659L15.7132 26.6961C13.556 28.8533 13.556 32.362 15.7132 34.5192L18.3203 37.1262L7.89019 47.5563C6.84478 48.6017 6.26953 49.9901 6.26953 51.4687C6.26953 52.9474 6.84478 54.3358 7.89019 55.3793L13.1043 60.5953C13.4509 60.9382 13.9211 61.1318 14.4097 61.1318C14.8983 61.1318 15.3684 60.9382 15.7132 60.5916L25.5183 50.7866L33.2823 109.792C33.6437 112.532 36 114.601 38.7656 114.601H80.2352C83.0009 114.601 85.3572 112.532 85.7204 109.79L92.0905 61.3715L88.4344 60.8903L82.0642 109.307C81.9426 110.224 81.1571 110.913 80.2352 110.913H38.7656C37.8437 110.913 37.0583 110.224 36.9385 109.309L28.8057 47.4992L31.7667 44.5381H90.5861L89.4042 53.5172L93.0604 53.9984L94.5169 42.9359C94.587 42.4086 94.4266 41.8794 94.0763 41.4793C93.7241 41.0792 93.2189 40.8506 92.6879 40.8506ZM18.3221 31.9102C17.6031 31.1912 17.6031 30.0222 18.3221 29.3013L31.3593 16.2642C32.0765 15.547 33.2473 15.5451 33.9682 16.2642L36.5752 18.8712L20.931 34.5155L18.3221 31.9102Z"
                fill="#999999"
              />
              <path
                d="M53.9688 57.4443V98.0068C53.9688 101.056 56.4504 103.538 59.5 103.538C62.5496 103.538 65.0312 101.056 65.0312 98.0068V57.4443C65.0312 54.3948 62.5496 51.9131 59.5 51.9131C56.4504 51.9131 53.9688 54.3948 53.9688 57.4443ZM61.3438 57.4443V98.0068C61.3438 99.0227 60.5159 99.8506 59.5 99.8506C58.4841 99.8506 57.6562 99.0227 57.6562 98.0068V57.4443C57.6562 56.4284 58.4841 55.6006 59.5 55.6006C60.5159 55.6006 61.3438 56.4284 61.3438 57.4443Z"
                fill="#999999"
              />
              <path
                d="M39.2188 57.4443V98.0068C39.2188 101.056 41.7004 103.538 44.75 103.538C47.7996 103.538 50.2812 101.056 50.2812 98.0068V57.4443C50.2812 54.3948 47.7996 51.9131 44.75 51.9131C41.7004 51.9131 39.2188 54.3948 39.2188 57.4443ZM46.5938 57.4443V98.0068C46.5938 99.0227 45.7659 99.8506 44.75 99.8506C43.7341 99.8506 42.9062 99.0227 42.9062 98.0068V57.4443C42.9062 56.4284 43.7341 55.6006 44.75 55.6006C45.7659 55.6006 46.5938 56.4284 46.5938 57.4443Z"
                fill="#999999"
              />
              <path
                d="M68.7188 57.4443V98.0068C68.7188 101.056 71.2004 103.538 74.25 103.538C77.2996 103.538 79.7812 101.056 79.7812 98.0068V57.4443C79.7812 54.3948 77.2996 51.9131 74.25 51.9131C71.2004 51.9131 68.7188 54.3948 68.7188 57.4443ZM76.0938 57.4443V98.0068C76.0938 99.0227 75.2659 99.8506 74.25 99.8506C73.2341 99.8506 72.4062 99.0227 72.4062 98.0068V57.4443C72.4062 56.4284 73.2341 55.6006 74.25 55.6006C75.2659 55.6006 76.0938 56.4284 76.0938 57.4443Z"
                fill="#999999"
              />
              <path
                d="M69.1672 24.3122L61.7922 22.4684C61.0713 22.2896 60.3135 22.5587 59.871 23.1506L54.3398 30.5256C54.0116 30.9626 53.8936 31.5231 54.0208 32.0559C54.1462 32.5887 54.5021 33.0368 54.9906 33.282L62.3656 36.9695C62.6182 37.0967 62.9022 37.1631 63.188 37.1631H72.4067C73.0188 37.1631 73.5904 36.8589 73.9333 36.3537C74.2763 35.8485 74.3463 35.2032 74.1195 34.6353L70.432 25.4166C70.2108 24.8671 69.7406 24.456 69.1672 24.3122ZM63.6231 33.4756L58.6136 30.9718L62.0854 26.344L67.3567 27.6622L69.6835 33.4756H63.6231Z"
                fill="#999999"
              />
              <path
                d="M92.4183 21.4396L90.6502 17.9014C90.2777 17.1566 89.4499 16.7546 88.6386 16.9187L79.4199 18.7625C78.557 18.9339 77.9375 19.6899 77.9375 20.5693V24.2568C77.9375 24.408 77.9559 24.5574 77.9928 24.7049L79.8366 32.0799C80.0431 32.9077 80.7879 33.4756 81.6232 33.4756C81.7006 33.4756 81.7762 33.4719 81.8536 33.4608L96.6036 31.6171C97.2563 31.536 97.815 31.1137 98.0712 30.5071C98.3275 29.9006 98.2427 29.2055 97.8482 28.68L92.4183 21.4396ZM83.017 29.6L81.625 24.0301V22.0812L87.9804 20.8109L89.1936 23.2391C89.2434 23.3386 89.3024 23.4327 89.3687 23.5212L92.9936 28.3555L83.017 29.6Z"
                fill="#999999"
              />
              <path
                d="M81.625 3.97559H85.3125V7.66309H81.625V3.97559Z"
                fill="#999999"
              />
              <path
                d="M97.8574 15.4198L100.105 18.344C104.181 15.2133 109.412 13.9964 114.451 15.0013L115.176 11.3857C109.084 10.1688 102.775 11.6401 97.8574 15.4198Z"
                fill="#999999"
              />
              <path
                d="M105.594 22.4131H109.281V26.1006H105.594V22.4131Z"
                fill="#999999"
              />
              <path
                d="M89 13.1943H92.6875C92.6875 10.1448 95.1692 7.66309 98.2188 7.66309V3.97559C93.1355 3.97559 89 8.11112 89 13.1943Z"
                fill="#999999"
              />
              <rect
                x="41.2339"
                y="14.2119"
                width="6.22266"
                height="3.68605"
                transform="rotate(-45.1897 41.2339 14.2119)"
                fill="#999999"
              />
              <rect
                x="88.3838"
                y="61.187"
                width="7.97918"
                height="3.68901"
                transform="rotate(-82.4312 88.3838 61.187)"
                fill="#999999"
              />
            </svg>
          </div>
          <div style={{ fontSize: "1.1rem", fontWeight: 600 }}>No items</div>
          <div style={{ fontSize: ".9rem" }}>
            items moved to the trash will appear here
          </div>
        </Grid>
      </Grid>
    </div>
  ) : (
    <div className="originScreen:container originScreen:p-7 originScreen:bg-white">
      <h2 className="originScreen:text-lg originScreen:my-5">
        Items In My Trash
      </h2>
      <div className="originScreen:bg-green-50 originScreen:p-6 originScreen:flex originScreen:items-center originScreen:justify-between originScreen:mb-3">
        <span>Items in trash are deleted forever after 30 days </span>
        <span>Empty Trash</span>
      </div>

      <TrashTable />
    </div>
  );
}

export default Trash;
