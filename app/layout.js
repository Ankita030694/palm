import './globals.css';

export const metadata = {
  title: 'Palm — A table worth taking time for',
  description: 'Palm is a contemporary restaurant in New Delhi.',
  robots: {
    index: false,
    follow: false,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
