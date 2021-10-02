import useFetch from "./useFetch";
import Loader from "./LoadAnimation";
import emptystarred from "./emptystarred.png";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from 'react'
// import StarredModal from './StarredModal'


const isEmpty = (obj) => Object.keys(obj).length === 0;


function StarGridFolder({}) {

  // const [display, setDisplay] = useState(false);
  


  const { data, isLoading, error } = useFetch(
    "https://companyfiles.zuri.chat/api/v1/folders/searchStarredFolders"
  );
 console.log(data)
  return (
     
    <div>
      <div className="tw-mt-6 tw-grid tw-grid-cols-1 tw-items-center tw-gap-8 xl:tw-grid-cols-4 lg:tw-grid-cols-3 sm:tw-grid-cols-2 tw-auto-cols-max md:tw-grid-cols-3 xs:tw-grid-cols-1 " >
        {data?.data?.map((details) => (
          <div className="tw-flex tw-p-2 tw-border tw-cursor-pointer" key={details._id} >
         
            <div className="tw-flex tw-items-center">
            <FontAwesomeIcon
                    icon={faFolder}
                    className="tw-text-yellow-500 tw-w-8 tw-h-5"
                  />
            </div>
            <div className="tw-flex tw-flex-col tw-ml-3 tw-text-left">
              <p className="tw-mb-2 tw-text-sm">{details.folderName}</p>
              <p className="tw-text-xs">{details.dateAdded}</p>
            </div>
            
          </div>
        ))}
      </div>
   
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

export default StarGridFolder;
