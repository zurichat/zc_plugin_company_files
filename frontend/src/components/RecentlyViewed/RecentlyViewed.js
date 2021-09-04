import './RecentlyViewed.css'
function RecentlyViewed() {
  return (
    <div className="flex flex-col space-y-10">
      <h3 id="recently-viewed-header">Recently Viewed</h3>
      <div className="flex flex-row space-x-6">
        <div>
          <div className="icon-one"></div>
          <p id="image-name">Images </p>
          <p id="image-date">Viewed 20 Jul 2020</p>
        </div>
        <div>
          <div className="icon-two"></div>
          <p id="video-name">Videos</p>
          <p id="video-date">Viewed 20 Jul 2020</p>
        </div>
        <div>
          <div className="icon-three"></div>
          <p id="document-name">Documents</p>
          <p id="document-date">Viewed 20 Jul 2020</p>
        </div>
        <div>
          <div className="icon-four"></div>
          <p id="compressed-name">Compressed</p>
          <p id="compressed-date">Viewed 20 Jul 2020</p>
        </div>
      </div>
    </div>
  )
}

export default RecentlyViewed
