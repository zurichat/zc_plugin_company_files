import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ReactPaginate from "react-paginate";
import FileListView from "./FileListView";
import FileGridView from "./FileGridView";
import FileHeader from "./FileHeader";

dayjs.extend(relativeTime);

const AllFiles = () => {
  const [view, setView] = useState("grid");
  const [sortingMethod, setSortingMethod] = useState("name");

  console.log("PAGE DATA::PAGEDATA: ", history.state.pageData);

  function sortByDate() {
    setSortingMethod("date");
  }
  function sortByName() {
    setSortingMethod("name");
  }
  function sortBySize() {
    setSortingMethod("size");
  }
  function sortByType() {
    setSortingMethod("type");
  }

  return (
    <div className="tw-w-full tw-py-2 tw-px-2 md:tw-px-5 tw-items-center">
      <FileHeader
        view={view}
        setView={setView}
        sortByDate={sortByDate}
        sortByName={sortByName}
        sortBySize={sortBySize}
        sortByType={sortByType}
        folderTitle={history.state.pageData.folder.folderName}
      />
      {view == "grid" ? (
        <FileGridView
          sortingMethod={sortingMethod}
          folder={history.state.pageData.folder}
        />
      ) : (
        <FileListView sortingMethod={sortingMethod} />
      )}
      {/* <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        /> */}
    </div>
  );
};

export default AllFiles;
