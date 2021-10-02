import react from 'react'
import useFetch from './useFetch'
import Loader from './LoadAnimation'
function StarredGrid() {
  const { data, isLoading, error } = useFetch('https://companyfiles.zuri.chat/api/v1/files/searchStarredFiles');
   return (

      <div>
        
        {data.map((details) => (
         <div className="tw-flex" key={details._id}>
         <div className="tw-bg-green-400 tw-p-3">
           <img src={details.url} alt="" className="tw-w-3 tw-h-3"/>
         </div>
         <div className="tw-bg-green-400 tw-flex tw-flex-col tw-ml-3 tw-items-center tw-justify-start">
           <p className="tw-mb-2">{details.type}</p>
           <p className="">{details.dateAdded}</p>
              </div>
       </div>
        ))}
       
       { error && <div>{error}</div> }
        { isLoading && <div> < Loader /> </div> }
        {data && <div> {data}</div>}
       
        </div>
       
  );
}

export default StarredGrid;
