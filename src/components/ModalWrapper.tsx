import React from "react";
import { Modal } from "./modal/Modal";

export const ModalWrapper = () => {
  return (
    <Modal>
      <div>This is modal's child inside portal. Yay!</div>
    </Modal>
  );
};
