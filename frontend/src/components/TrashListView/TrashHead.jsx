import List from "./TrashList";

const TrashHead = ({
  error,
  isLoading,
  data,
  setData,
  setFileDel,
  setRestore,
  setEmptyTrash,
  apiBase
}) => {
  const fileIds = data.map((data) => data._id);

  const handleEmptyTrash = () => {
    fetch(`${apiBase}/files/deleteMultipleFiles`, {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: fileIds })
    }).then((res) => (res.status === 200 ? setEmptyTrash("") : null));
    setData([]);
  };

  return (
    <div className="md:tw-mx-10 tw-mx-4 tw-pt-5">
      <div className="tw-flex tw-justify-start tw-pt-4 tw-pb-5">
        <h3 className="tw-font-semibold tw-text-lg tw-text-text-grey">
          Items in my trash
        </h3>
      </div>
      <div className="tw-flex tw-flex-col sm:tw-flex-row tw-justify-between tw-bg-bg-lightGreen">
        <p className="tw-px-2 sm:tw-px-5 tw-py-4 tw-text-text-trashDur tw-text-sm">
          Items in trash are deleted forever after 30 days
        </p>
        <p
          className="tw-px-2 sm:tw-px-5 tw-py-4 tw-cursor-pointer tw-text-primary has__toolTip emptyTrash tw-relative"
          onClick={handleEmptyTrash}
        >
          <span className="toolTip tw-rounded tw-shadow-lg tw-p-1 tw-bg-gray-100 tw-text-primary tw-invisible tw-absolute tw--mt-14 md:tw--mt-16">
            Delete files permanently?
          </span>
          Empty Trash
        </p>
      </div>
      <List
        setFileDel={setFileDel}
        setRestore={setRestore}
        data={data}
        setData={setData}
        isLoading={isLoading}
        error={error}
        apiBase={apiBase}
      />
    </div>
  );
};

export default TrashHead;
