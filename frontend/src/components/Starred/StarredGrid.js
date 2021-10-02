import react from 'react'
import useFetch from './useFetch'
import Loader from './LoadAnimation'
function StarredGrid() {
  const { data, isLoading, error } = useFetch('https://companyfiles.zuri.chat/api/v1/files/searchStarredFiles');
   return (
<div>
      <div className='tw-mt-6 tw-grid tw-grid-cols-1 tw-items-center tw-gap-8 xl:tw-grid-cols-4 lg:tw-grid-cols-3 sm:tw-grid-cols-2 tw-auto-cols-max md:tw-grid-cols-3 xs:tw-grid-cols-1'>
        
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
       </div>
       { error && <div>{error}</div> }
        { isLoading && <div> < Loader /> </div> }
        {data && <div> {data}</div>}
       
        
        </div>
       
  );
}

export default StarredGrid;
