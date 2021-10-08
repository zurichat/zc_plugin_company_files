import React from "react";

function ModalComponent({ message }) {
  const [show, setShow] = React.useState(true);

  function closeModal() {
    setShow(false);
  }

  return (
    <div
      className={`${
        show ? "tw-fixed" : "tw-hidden"
      } tw-z-30 tw-flex tw-items-center tw-justify-center tw-bg-gray-800 tw-inset-0 tw-bg-opacity-20 tw-h-screen tw-w-full`}
      onClick={() => setShow(false)}
    >
      <div className="tw-bg-white tw-shadow-md tw-rounded-md tw-h-3/5 tw-w-1/2 tw-flex tw-items-center tw-justify-center">
        <p className="tw-text-3xl tw-text-center tw-text-red-500">{message}</p>
      </div>
    </div>
  );
}

export default ModalComponent;
