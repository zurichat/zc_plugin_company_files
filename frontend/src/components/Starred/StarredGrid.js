import useFetch from "./useFetch";
import Loader from "./LoadAnimation";
import emptystarred from "./emptystarred.png";
// import { useState } from 'react'
// import StarredModal from './StarredModal'


const isEmpty = (obj) => Object.keys(obj).length === 0;


function StarredGrid({}) {

  // const [display, setDisplay] = useState(false);
  


  const { data, isLoading, error } = useFetch(
    "https://companyfiles.zuri.chat/api/v1/files/searchStarredFiles"
  );
 console.log(data)
  return (
     
    <div>
      <div className="tw-mt-6 tw-grid tw-grid-cols-1 tw-items-center tw-gap-8 xl:tw-grid-cols-4 lg:tw-grid-cols-3 sm:tw-grid-cols-2 tw-auto-cols-max md:tw-grid-cols-3 xs:tw-grid-cols-1 " >
        {data?.data?.map((details) => (
          <div className="tw-flex tw-p-2 tw-border tw-cursor-pointer" key={details._id} >
         
            <div className="tw-bg-green-100 tw-flex tw-items-center">
              <img src={details.url} alt="" className="tw-w-8 tw-h-5" />
            </div>
            <div className="tw-flex tw-flex-col tw-ml-3 tw-text-left">
              <p className="tw-mb-2 tw-text-sm">{details.type}</p>
              <p className="tw-text-xs">{details.dateAdded}</p>
            </div>
            
          </div>
        ))}
      </div>
      {isEmpty(data) && !isLoading && !error ? (
        <div className="tw-text-center tw-flex tw-flex-col tw-justify-center tw-items-center tw-h-96">
          <img
            src={emptystarred}
            alt="Starred Icon"
            className="tw-w-8 tw-h-12"
          />
          <p className="tw-text-text-grey tw-2xl tw-font-semibold tw-pt-2">
            You currently have no starred
          </p>
          <p className="tw-text-text-grey tw-pt-2">
            Starred items will appear here
          </p>
        </div>
      ) : null}
      {(error) && (
        <div className="tw-flex tw-justify-center tw-text-center tw-mt-60  tw-text-text-grey">
          {error}
        </div>
      )}
      {isLoading && (
        <div>
          {" "}
          <Loader />{" "}
        </div>
      )}
     
    </div>
  );
}

export default StarredGrid;
