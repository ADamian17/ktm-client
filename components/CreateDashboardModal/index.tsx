"use client";
import React from "react";
import { Modal, ModalBody, ModalHeader, Title } from "@mantine/core";
import { useSnapshot } from "valtio";

import { closeCreateDashboardModal, createDashboardModalProxy } from "@/stores/create-dashboard-modal-proxy";
import CreateBoardForm from "../BoardForms/CreateBoardForm";

const CreateDashboardModal: React.FC = () => {
  const { isOpen } = useSnapshot(createDashboardModalProxy);

  return (
    <Modal
      centered
      onClose={closeCreateDashboardModal}
      opened={isOpen}
      withCloseButton={false}
      size={480}
    >
      <ModalHeader>
        <Title order={3}>Add New Board</Title>
      </ModalHeader>

      <ModalBody p='xs'>
        <CreateBoardForm />
      </ModalBody>
    </Modal >
  )
};

export default CreateDashboardModal;
