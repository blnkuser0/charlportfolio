import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import BootstrapClient from '../components/BootstrapClient';
import LoadingScreen from '../components/LoadingScreen';

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
      <body>
        <LoadingScreen />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
