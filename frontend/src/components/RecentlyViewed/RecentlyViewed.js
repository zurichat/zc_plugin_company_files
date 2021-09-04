import "./RecentlyViewed.css";
function RecentlyViewed() {
  return (
    <div>
      <h3 id="recently-viewed-header">Recently Viewed</h3>
      <div>
        <div>
          <div className="icon-one">
            <img className="icon-pic" src="/Icons/active1.svg" alt="Icon" />
          </div>
          <p id="image-name">Images </p>
          <p id="image-date">Viewed 20 Jul 2020</p>
        </div>
        <div>
          <div className="icon-two">
            <img
              className="icon-video"
              src="/Icons/Group 11852.svg"
              alt="Icon"
            />
          </div>
          <p id="video-name">Videos</p>
          <p id="video-date">Viewed 20 Jul 2020</p>
        </div>
        <div>
          <div className="icon-three">
            <img className="icon-doc" src="/Icons/active.svg" alt="Icon" />
          </div>
          <p id="document-name">Documents</p>
          <p id="document-date">Viewed 20 Jul 2020</p>
        </div>
        <div>
          <div className="icon-four">
            <img className="icon-zip" src="/Icons/zip 1.svg" alt="Icon" />
          </div>
          <p id="compressed-name">Compressed</p>
          <p id="compressed-date">Viewed 20 Jul 2020</p>
        </div>
      </div>
    </div>
  );
}

export default RecentlyViewed;
