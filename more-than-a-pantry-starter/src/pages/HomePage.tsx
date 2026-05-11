import { HeartHandshake, MapPin, Users } from "lucide-react";
import { siteContent } from "../data/siteContent";
import { ActionCard } from "../components/ActionCard";
import { DonationItems } from "../components/DonationItems";
import { SectionHeader } from "../components/SectionHeader";

export function HomePage() {
  return (
    <div id="top">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">{siteContent.programName}</p>
          <h1>Helping families find food, essentials, and support without barriers.</h1>
          <p>
            A clearer, easier website experience for pantry visitors, donors, volunteers,
            and community partners.
          </p>
          <div className="button-group">
            <a className="button primary" href="#find-help">Find Help</a>
            <a className="button secondary" href="#donate">Donate</a>
          </div>
        </div>

        <div className="hero-card">
          <MapPin aria-hidden="true" />
          <h2>Pantry Location</h2>
          <p>{siteContent.address}</p>
          <p className="small-note">Replace with verified hours and map embed after client confirmation.</p>
        </div>
      </section>

      <section className="content-section">
        <SectionHeader
          eyebrow="Start here"
          title="What do you need today?"
          description="The homepage should guide users toward the most important action quickly."
        />
        <div className="card-grid">
          {siteContent.primaryActions.map((action) => (
            <ActionCard key={action.title} {...action} />
          ))}
        </div>
      </section>

      <section className="content-section highlight" id="find-help">
        <SectionHeader
          eyebrow="Highest priority"
          title="Find More Than A Pantry"
          description="This section should answer the urgent questions first: where, when, who to contact, and what visitors should bring or expect."
        />
        <div className="two-column">
          <div className="card">
            <MapPin aria-hidden="true" />
            <h3>Location & Hours</h3>
            <p>{siteContent.address}</p>
            <p><strong>Hours:</strong> Client needs to confirm current distribution days and times.</p>
          </div>
          <div className="map-placeholder" role="img" aria-label="Map placeholder">
            Map embed placeholder
          </div>
        </div>
      </section>

      <section className="content-section" id="donate">
        <SectionHeader
          eyebrow="Support the pantry"
          title="Make it easy to donate"
          description="Donation flow should support monetary gifts and commonly needed items."
        />
        <div className="two-column">
          <div className="card">
            <HeartHandshake aria-hidden="true" />
            <h3>Online Donations</h3>
            <p>Placeholder for secure one-time and recurring donation integration.</p>
            <a className="button primary" href="#">Donation Link Placeholder</a>
          </div>
          <div className="card">
            <h3>Most Needed Items</h3>
            <DonationItems />
          </div>
        </div>
      </section>

      <section className="content-section highlight" id="volunteer">
        <SectionHeader
          eyebrow="Get involved"
          title="Volunteer opportunities"
          description="This page should clearly list current opportunities, time, location, role expectations, and the coordinator contact."
        />
        <div className="card">
          <Users aria-hidden="true" />
          <h3>Example Opportunity</h3>
          <p>Every Tuesday at 10:30 AM — unload and process food delivery.</p>
          <a className="button secondary" href={`mailto:${siteContent.email}`}>Contact Volunteer Coordinator</a>
        </div>
      </section>

      <section className="content-section" id="impact">
        <SectionHeader
          eyebrow="Impact"
          title="Show the community difference"
          description="Use impact numbers and short stories to build trust with donors, volunteers, and partners."
        />
        <div className="stats-grid">
          {siteContent.impactStats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
