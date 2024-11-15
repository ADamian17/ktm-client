"use client";
import React from "react";
import { Modal } from "@mantine/core";
import { useSnapshot } from "valtio";

import { closeCreateDashboardModal, createDashboardModalProxy } from "@/stores/create-dashboard-modal-proxy";

const CreateDashboardModal: React.FC = () => {
  const { isOpen } = useSnapshot(createDashboardModalProxy);

  return (
    <Modal opened={isOpen} onClose={closeCreateDashboardModal} title="Add New Board" centered>
      Modal content
    </Modal>
  )
};

export default CreateDashboardModal;