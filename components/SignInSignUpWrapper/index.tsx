import React from "react";

import styles from "./SignInSignUpWrapper.module.scss";
import { Anchor, Paper, Text, Title } from "@mantine/core";
import Link from "next/link";

type SignInSignUpWrapperType = {
  children: React.ReactNode;
  title: string;
  linkInfo: Record<"copy" | "path" | "text", string>;
};

const SignInSignUpWrapper: React.FC<SignInSignUpWrapperType> = ({ children, linkInfo, title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} />

      <Paper className={styles.formWrapper} radius={0} p={30}>
        <Title order={2} className={styles.title} ta="center" mt="md" mb={50}>
          {title}
        </Title>

        {children}

        <Text ta="center" mt="md">
          {linkInfo?.copy}{' '}

          <Anchor component={Link} href={linkInfo?.path ?? ""}>
            {linkInfo?.text}
          </Anchor>
        </Text>
      </Paper>
    </div>
  )
};

export default SignInSignUpWrapper;
