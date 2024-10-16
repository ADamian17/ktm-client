import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

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
          <Notifications />
          <ModalsProvider>
            {children}
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}