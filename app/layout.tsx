import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

import HandleUserInactivity from '@/features/HandleUserInactivity';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@/styles/main.scss';

export const metadata = {
  title: 'Kanban Board',
  description: 'A simple kanban board',
};

const theme = createTheme({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme='auto' theme={theme}>
          <HandleUserInactivity />
          <Notifications />
          <ModalsProvider>
            {children}
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}