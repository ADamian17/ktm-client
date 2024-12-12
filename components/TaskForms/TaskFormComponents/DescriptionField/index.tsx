import React from "react";

import { Textarea } from "@mantine/core";
import { Field } from "react-final-form";

const DescriptionField: React.FC = () => (
  <Field
    name="description"
    validate={(value) => value ? undefined : 'Can\'t be empty'}
  >
    {({ input, meta }) => (
      <Textarea
        {...input}
        error={(meta?.error && meta?.touched || meta.submitError) && meta.error || meta?.submitError}
        label="Description"
        placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
        rows={4}
      />
    )}
  </Field>
)

export default DescriptionField;
