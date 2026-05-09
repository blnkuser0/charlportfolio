export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" role="contentinfo">
      <p className="footer-text">
        &copy; {year} Charl Eduard Narvaez.{' '}
        <span className="footer-accent">Built with Next.js</span>
      </p>
    </footer>
  );
}
