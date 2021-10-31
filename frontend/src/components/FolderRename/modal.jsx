import React from "react";

const Modal = (props) => {
  return (
    <div className="modal">
      <label htmlFor="rename">Rename</label>
      <input className="rename_input" type="rename" name="rename" />
      <div className="modal-buttons">
        <button className="btn btn-cancel" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="btn btn-confirm" onClick={props.onConfirm}>
          Proceed
        </button>
      </div>

      <style jsx>
        {`
          .modal {
            background-color: #fff;
            width: 400px;
            height: -webkit-fit-content;
            height: -moz-fit-content;
            height: fit-content;
            padding: 10px 15px;
            border-radius: 10px;
            margin: auto;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            position: absolute;
            z-index: 200;
          }

          @media (min-width: 300px) and (max-width: 399px) {
            .modal {
              width: 80%;
            }
          }

          label {
            font-size: 28px;
            line-height: 33px;
            color: #4a4a4a;
            font-weight: 700;
            text-align: left;
          }

          .modal-buttons {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-pack: distribute;
            justify-content: space-around;
          }

          .modal-buttons button {
            border-radius: 5px;
            padding: 5px 10px;
            font-size: 15px;
            line-height: 20px;
            cursor: pointer;
          }

          .modal-buttons .btn-confirm {
            border: none;
            background-color: #00b87c;
            color: #fff;
          }

          .modal-buttons .btn-confirm:hover {
            background-color: #a14f4f;
          }

          .modal-buttons .btn-cancel {
            border: 1px solid #00b87c;
            background-color: #fff;
            color: #00b87c;
          }

          .modal-buttons .btn-cancel:hover {
            background-color: beige;
          }
        `}
      </style>
    </div>
  );
};

export default Modal;
