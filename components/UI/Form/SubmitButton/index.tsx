import { Button } from "@mantine/core";
import React from "react";

type SubmitButtonType = {
  submitting?: boolean;
  text: string;
};

const SubmitButton: React.FC<SubmitButtonType> = ({ submitting, text }) => (
  <Button
    color="violet"
    disabled={submitting}
    fullWidth
    radius="lg"
    size="md"
    type="submit"
  >
    {text}
  </Button>
)

export default SubmitButton;
