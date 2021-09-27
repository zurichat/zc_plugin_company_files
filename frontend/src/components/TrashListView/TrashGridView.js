import React, { useEffect, useState } from "react";

const TrashGridView = ({
  data,
  fileIcon,
  newDate,
  truncateName,
  menuRef,
  handleClick,
  Buttons,
  setDeleteModal,
  setShowModal,
}) => {
  // console.log(data);
  const [dataArr, setDataArr] = useState(data);
  const [image, setImage] = useState(fileIcon);

  useEffect(() => {
    setDataArr(data);
  }, [data]);

  // Check if item was deleted on day
  const checkDateDeleted = (date) => {
    const today = new Date();
    const todayDate = `${today.getFullYear()}/${today.getMonth()}/${today.getDay()}`;
    if (date !== todayDate) {
      return `Added Today`;
    } else {
      return false;
    }
  };

  return (
    <section className={`trashList-gridView`}>
      {dataArr &&
        dataArr.map((item, index) => {
          return (
            <div
              key={item._id}
              className={`trashList-gridView_trashItem`}
              onClick={() => handleClick(index, item._id)}
            >
              <div class={`trashList-gridView_trashItem_img`}>
                <img src={image} alt={item.fileName} />
              </div>
              <div class={`trashList-gridView_trashItem_desc`}>
                <p class={`trashList-gridView_trashItem_desc_name`}>
                  {truncateName()[index]}
                </p>
                <p class={`trashList-gridView_trashItem_desc_date`}>
                  {checkDateDeleted(newDate()[index]) || newDate()[index]}
                </p>
              </div>
              {/* {
                <div
                  //assign the created reference to each array item
                  ref={(el) =>
                    (menuRef.current = menuRef.current
                      ? [...menuRef.current, el]
                      : [el])
                  }
                  className='absolute top-0 z-20 bg-white rounded shadow-md opacity-0 text-sm md:block pointer-events-none'
                >
                  <Buttons
                    setShowModal={setShowModal}
                    setDeleteModal={setDeleteModal}
                  />
                </div>
              } */}
            </div>
          );
        })}
    </section>
  );
};

export default TrashGridView;
