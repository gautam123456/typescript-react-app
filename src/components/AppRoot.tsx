import React from "react";
import { ModalWrapper } from "./ModalWrapper";

export const AppRoot = () => {
  return (
    <div onClick={() => console.log("Handler in hirarchy")}>
      <div>AppRoot</div>
      <ModalWrapper />
    </div>
  );
};
