import { siteContent } from "../data/siteContent";

export function DonationItems() {
  return (
    <ul className="pill-list" aria-label="Most needed donation items">
      {siteContent.donationItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
