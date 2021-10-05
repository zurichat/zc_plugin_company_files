import React from 'react'

function ModalComponent({message, setShow}) {
  const [show, setShow] = React.useState(true);

  function closeModal() {
    setShow(false);
  }

  return (
    <div className={`${show ? "tw-fixed" : "tw-none"} tw-flex tw-items-center tw-justify-center tw-bg-gray-300 tw-inset-0 tw-bg-opacity-50 tw-h-screen tw-w-full`} onClick={() => setShow(false)}>
      <div className="tw-bg-white tw-shadow-md tw-rounded-md tw-h-3/5 tw-w-1/2 ">
        {message}
      </div>
    </div>
  )
}

export default ModalComponent
