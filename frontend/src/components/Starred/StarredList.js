import React from 'react'
import LoadAnimation from './LoadAnimation'
import StarredIcon from './emptystarred.png'

const isEmpty = (obj) => Object.keys(obj).length === 0;

const StarredList = ({error,
    isLoading,
    data,
   
  }) => {
    return (
        <div>
             {error && (
          <div className="flex justify-center text-center mt-60 tracking-wider font-semibold itemsTrash">
            {error}
          </div>
        )}
        {isLoading && <LoadAnimation />}
        {isEmpty(data) && !isLoading && !error ? (
          <div className="text-center flex flex-col justify-center items-center h-96">
            <img src={StarredIcon} alt="Empty Starred icon" />
            <h3 className="itemsTrash font-semibold pt-2">No items</h3>
            <p className="itemsTrash pt-2">
              items moved to the trash will appear here
            </p>
          </div>
        ) : null}
            {!isEmpty(data) && data && !isLoading ? (
               <div> "Empty Starred Files" </div>
            ) :  ""}
        </div>
    )
}

export default StarredList;
