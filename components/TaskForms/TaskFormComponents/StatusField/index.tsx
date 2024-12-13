import React from "react";

import { Select } from "@mantine/core";
import { getStatusSelectOptions } from "@/stores/current-board-proxy";
import { Field } from "react-final-form";
import { IconChevronDown } from '@tabler/icons-react';

const StatusField: React.FC = () => (
  <Field name="columnId" validate={(value) => value ? undefined : 'Can\'t be empty'}>
    {({ input, meta }) => (
      <Select
        {...input}
        clearable
        data={getStatusSelectOptions()}
        error={(meta?.error && meta?.touched || meta.submitError) && meta.error || meta?.submitError}
        label="Status"
        onChange={(value) => input.onChange(value)}
        placeholder="Select status"
        rightSection={<IconChevronDown />}
      />
    )}
  </Field>
)

export default StatusField;
