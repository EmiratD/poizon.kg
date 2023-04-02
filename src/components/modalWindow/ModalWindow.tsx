import React, { FC } from "react";

import "./modalWindow.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

const ModalWindow: React.FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
      <button
        className="btn-close magic"
        onClick={(e) => {
          e.preventDefault();
          onClose();
        }}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3237 22.0801C17.8466 22.0801 22.3237 17.6029 22.3237 12.0801C22.3237 6.55723 17.8466 2.08008 12.3237 2.08008C6.80088 2.08008 2.32373 6.55723 2.32373 12.0801C2.32373 17.6029 6.80088 22.0801 12.3237 22.0801Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.3237 9.08008L9.32373 15.0801"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.32373 9.08008L15.3237 15.0801"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
