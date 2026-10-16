import { site } from '../content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <a href={`mailto:${site.email}`}>{site.email}</a>
      <span className="sep">|</span>
      <a href={`tel:${site.phoneCanada.replace(/[^+\d]/g, '')}`}>{site.phoneCanada} (Canada)</a>
    </footer>
  );
}
