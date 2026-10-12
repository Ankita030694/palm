import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The First Floor | Rooftop Dining & Restaurant in New Delhi',
  description: 'Discover The First Floor, a rooftop dining destination in New Delhi for thoughtfully crafted dishes, refreshing drinks, warm hospitality, and memorable dining experiences.',
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full max-w-full overflow-x-hidden">
      <body className="w-full max-w-full overflow-x-hidden">{children}</body>
    </html>
  );
}
