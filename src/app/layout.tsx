import type { Metadata } from 'next';
import 'assets/styles/styles.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
