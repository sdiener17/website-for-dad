import React, {useState} from "react";
import styled from "styled-components";
import Modal, { closeStyle } from "simple-react-modal";

export default function CommonModal({ showModal, setShowModal, text }) {
  return (
    <PageWrapper>
      <Modal
        show={showModal}
        closeOnOuterClick={true}
        onClose={() => setShowModal(false)}
      >
        <a style={closeStyle} onClick={() => setShowModal(false)}>
          X
        </a>
        <div>{text}</div>
      </Modal>
    </PageWrapper>
  );
}

const PageWrapper = styled.nav`
  .modalClass {
    //background: lightcyan;
  }
`;
