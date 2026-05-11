import { siteContent } from "../data/siteContent";

const navItems = [
  { label: "Find Help", href: "#find-help" },
  { label: "Donate", href: "#donate" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Go to homepage">
        <span className="brand-mark">SR</span>
        <span>
          <strong>{siteContent.orgName}</strong>
          <small>{siteContent.programName}</small>
        </span>
      </a>

      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
