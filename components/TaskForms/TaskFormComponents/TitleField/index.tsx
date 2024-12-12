import React from "react";

import { Field } from "react-final-form";
import { TextInput } from "@mantine/core";

const TitleField: React.FC = () => (
  <Field
    name="title"
    validate={(value) => value ? undefined : 'Can\'t be empty'}
  >
    {({ input, meta }) => (
      <TextInput
        {...input}
        error={(meta?.error && meta?.touched || meta.submitError) && meta.error || meta?.submitError}
        label="Title"
      />
    )}
  </Field>
)

export default TitleField;
