import { Button } from '@mantine/core'
import React from 'react'

type ActionButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  submitting: boolean
  text: string
}

const ActionButton: React.FC<ActionButtonProps> = ({ submitting, onClick, text }) => {
  return (
    <>
      <Button
        color="violet"
        disabled={submitting}
        fullWidth
        onClick={onClick}
        radius="lg"
        size="md"
        mt="xs"
        type="button"
        variant="white"
        lightHidden
      >
        {text}
      </Button>

      <Button
        color="violet"
        disabled={submitting}
        fullWidth
        onClick={onClick}
        radius="lg"
        size="md"
        mt="xs"
        type="button"
        variant="outline"
        darkHidden
      >
        {text}
      </Button>
    </>
  )
}

export default ActionButton;
