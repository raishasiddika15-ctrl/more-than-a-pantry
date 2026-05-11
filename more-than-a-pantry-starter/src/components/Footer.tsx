import { siteContent } from "../data/siteContent";

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div>
        <h2>Contact</h2>
        <p>{siteContent.address}</p>
        <p>
          <a href={`tel:${siteContent.phone}`}>{siteContent.phone}</a> ·{" "}
          <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a>
        </p>
      </div>
      <p className="footer-note">
        Starter website concept created for MORE THAN A PANTRY. Replace placeholder content after client approval.
      </p>
    </footer>
  );
}
