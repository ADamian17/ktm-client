import '@mantine/core/styles.css';

import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';

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
        <MantineProvider defaultColorScheme='auto' theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}