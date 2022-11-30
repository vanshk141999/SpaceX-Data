import React from "react";

function Modal(props) {
  return (
    <>
      {/* {props.currentStatus === "retired"
        ? document.querySelector("#status").addClass("bg-red-600")
        : document.querySelector("#status").addClass("bg-green-600")} */}
      <button
        type="button"
        className=" inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:text-black hover:border-2 hover:border-black hover:shadow-lg focus:bg-white  focus:text-black focus:border-2 focus:border-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out"
        data-bs-toggle="modal"
        data-bs-target={`#popup${props.target}`}
      >
        Read More
      </button>
      {/* Popup */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id={`popup${props.target}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLgLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-lg relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h4
                className="text-2xl font-bold leading-normal text-gray-800"
                id="exampleModalLgLabel"
              >
                {props.currentTitle}
              </h4>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              <h5
                className="text-xl leading-normal text-gray-800 mb-4"
                id="details"
              >
                <span className="font-semibold uppercase">Details - </span>
                {props.currentDetails}
              </h5>
              <h5
                className="text-xl leading-normal text-gray-800 mb-4 capitalize"
                id="status"
              >
                <span className="font-semibold uppercase">Status - </span>
                {props.currentStatus}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
