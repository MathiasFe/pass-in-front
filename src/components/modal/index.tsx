import { Box, Modal } from "@mui/material";
import { ReactNode, useState } from "react";

type IModal = {
  show: boolean;
  handlerClose: () => void;
  children: ReactNode;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: ".5px solid rgba(255,255,255,.4)",
  boxShadow: "4px 4px 8px 1px  #000",
  borderRadius: "10px",
  p: 4,
};

export function ModalCustom({ show = false, handlerClose, children }: IModal) {
  return (
    <Modal
      open={show}
      onClose={handlerClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}
