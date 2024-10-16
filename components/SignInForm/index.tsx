"use client";
import React from "react";
import { Button, PasswordInput, TextInput } from '@mantine/core';
import { Field, Form, FormProps } from "react-final-form";
import { signInAction } from './action';
import { notifications } from "@mantine/notifications";
import styles from './SignInForm.module.scss'
import { validateEmail } from "@/utils/validate-email";

const SignInForm = () => {
  const onSubmit: FormProps["onSubmit"] = async (values) => {
    try {
      const signIn = signInAction.bind(values)
      const res = await signIn(values)

      if (typeof res === "object" && res?.error) {
        throw new Error(res?.error, { cause: "SignInError" });
      }

    } catch (error) {
      if (error instanceof Error && error.cause === "SignInError") {
        notifications.show({
          autoClose: false,
          color: "red",
          message: error.message,
          position: "top-right",
          title: 'Sign in failed',
          classNames: styles
        })
      }
    }
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form
          onSubmit={handleSubmit}
        >
          <Field
            name="email"
            validate={(value) => validateEmail(value)}
          >
            {({ input, meta }) => (
              <TextInput
                {...input}
                label="Email address"
                placeholder="hello@gmail.com"
                size="md"
                error={(meta?.error && meta?.touched) && meta.error}
              />
            )}
          </Field>

          <Field
            name="password"
            validate={(value) => value ? undefined : 'Can’t be empty'}
          >
            {({ input, meta }) => (
              <PasswordInput
                {...input}
                error={(meta?.error && meta?.touched) && meta.error}
                label="Password"
                placeholder="Your password"
                mt="md"
                size="md"
              />
            )}
          </Field>

          <Button type="submit" fullWidth mt="xl" size="md" disabled={submitting}>
            Sign in
          </Button>
        </form>
      )}
    />
  )
};

export default SignInForm;
