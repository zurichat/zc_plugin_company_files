import React from 'react'
import LoadAnimation from './LoadAnimation'
import useFetch from './useFetch'

const StarredView = () => {

    const {data, error, isLoading} = useFetch("https://companyfiles.zuri.chat/api/v1/file/searchStarredFiles")
    return (
        <div>
            {isLoading && <div> <LoadAnimation /> </div>}
            {/* {error && <div> {error} </div>} */}
            {data && (
                <article>
<LoadAnimation />
                </article>
            )}
        </div>
    )
}

export default StarredView
