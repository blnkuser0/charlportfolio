import './globals.css';

export const metadata = {
  title: 'Charl Eduard Narvaez — Portfolio',
  description: 'Web Developer Portfolio — Charl Eduard Narvaez',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/code.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
