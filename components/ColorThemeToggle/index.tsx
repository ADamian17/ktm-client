import React from "react";

import { Card, Group, rem, Switch, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

const ColorThemeToggle: React.FC = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  const themeOpts = {
    light: {
      cardColor: '#F4F7FD',
      checked: false,
    },
    dark: {
      cardColor: undefined,
      checked: true,
    }
  }

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Card styles={{ root: { backgroundColor: themeOpts[computedColorScheme].cardColor } }}>
      <Group justify="center">
        <IconSun
          style={{ width: rem(16), height: rem(16) }}
          stroke={2.5}
          fill="#828FA3"
          color="#828FA3"
        />

        <Switch
          color="violet"
          onClick={toggleColorScheme}
          checked={themeOpts[computedColorScheme].checked}
        />

        <IconMoonStars
          style={{ width: rem(16), height: rem(16) }}
          stroke={2.5}
          fill="#828FA3"
          color="#828FA3"
        />
      </Group>
    </Card>
  )
};

export default ColorThemeToggle;
