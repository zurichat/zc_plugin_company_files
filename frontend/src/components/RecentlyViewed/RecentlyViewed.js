import "./RecentlyViewed.css"
function RecentlyViewed() {
    return (
        <div>
        <h3 id="recently-viewed-header">Recently Viewed</h3>
        <div>
        <div>
        <div className="icon-one"></div>
        <p id="image-name">Images </p>
        <p id="image-date">Viewed 20 Jul 2020</p>
        </div>
        <div >
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
