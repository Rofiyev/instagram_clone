import { Modal, ScrollArea } from "@mantine/core";
import React, { ReactNode } from "react";

const ModalPost = ({
  children,
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
  children: ReactNode;
}) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      scrollAreaComponent={ScrollArea.Autosize}
      centered
    >
      {children}
    </Modal>
  );
};

export default ModalPost;
