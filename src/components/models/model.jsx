import React from "react";
import Modal from "./layout";
import SampleModal from './sample-modal/SampleModal'

const BasicModal = (
  {
    popup,
    setPopup,
    state,
    setState
  }) => {
    return (
      <Modal show={popup} hide={setPopup}>
        {(() => {
          switch (state) {
            case 1: {
              return <SampleModal setstate={setState} popup={popup} setPopup={setPopup}/>;
            }

            default:
              break;
          }
        })()}
      </Modal>
  );
};

export default BasicModal;