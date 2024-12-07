"use client";
import React from "react";
import { Modal, ModalBody, ModalHeader, Title } from "@mantine/core";
import { useSnapshot } from "valtio";

import { closeEditDashboardModal, editDashboardModalProxy } from "@/stores/edit-dashboard-modal-proxy";
import EditBoardForm from "../BoardForms/EditBoardForm";

const EditDashboardModal: React.FC = () => {
  const { isOpen } = useSnapshot(editDashboardModalProxy);

  return (
    <Modal
      centered
      onClose={closeEditDashboardModal}
      opened={isOpen}
      size={480}
      withCloseButton={false}
    >
      <ModalHeader>
        <Title order={3}>Edit Board</Title>
      </ModalHeader>

      <ModalBody p='xs'>
        <EditBoardForm />
      </ModalBody>
    </Modal >
  )
};

export default EditDashboardModal;
