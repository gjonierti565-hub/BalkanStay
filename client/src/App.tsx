import { FormEvent, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BedDouble,
  Building2,
  Check,
  CheckCircle2,
  Clock3,
  Home,
  Menu,
  MessageCircle,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import "./index.css";

// Add the business WhatsApp number here before launch, using country code and digits only.
// Example format: 35544123456. Leave blank until the real number is available.
const BUSINESS_WHATSAPP = "";

const listings = [
  {
    location: "Durrës · Port District",
    title: "Furnished apartment cluster",
    beds: "8 beds",
    stay: "3 month minimum",
    image: "/manus-storage/durres-living_e1637d50.jpg",
    alt: "Bright furnished apartment living room in Durrës",
    note: "Example option · availability confirmed on request",
  },
  {
    location: "Elbasan · City Access",
    title: "Shared worker accommodation",
    beds: "10 beds",
    stay: "3–6 months",
    image: "/manus-storage/vlore-bedrooms_75eb59a9.jpg",
    alt: "Simple furnished bedroom with two beds",
    note: "Example option · availability confirmed on request",
  },
  {
    location: "Tirana · Business District",
    title: "Multi-unit housing option",
    beds: "12 beds",
    stay: "4 month minimum",
    image: "/manus-storage/coastal-building_07d821a8.jpg",
    alt: "Modern apartment buildings in the Balkans",
    note: "Example option · availability confirmed on request",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us what your team needs",
    copy: "Share the location, headcount, move-in date and length of stay. One short request is all we need to begin.",
  },
  {
    number: "02",
    title: "Review a curated shortlist",
    copy: "We source furnished options from local hosts and bring the choices and key details into one clear shortlist.",
  },
  {
    number: "03",
    title: "Choose and coordinate",
    copy: "Pick the right fit. We coordinate the conversation and practical details between your team and the host.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    headcount: "",
    moveIn: "",
  });

  const whatsappDigits = BUSINESS_WHATSAPP.replace(/\D/g, "");

  function contactOnWhatsApp(message: string) {
    if (!whatsappDigits) {
      setFormMessage("WhatsApp is not connected yet. Please use the request form below; the business WhatsApp number can be added in the site settings before launch.");
      document.getElementById("request")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.open(
      `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Worker accommodation request",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Team size: ${form.headcount}`,
      `Move-in date: ${form.moveIn}`,
    ].join("\n");

    if (!whatsappDigits) {
      setFormSent(false);
      setFormMessage("Your details are ready. Add the business WhatsApp number to the site settings to route this request directly. For now, please contact the service owner to submit it.");
      return;
    }

    contactOnWhatsApp(message);
    setFormSent(true);
    setFormMessage("Your request is ready in WhatsApp. Send the message there to complete your inquiry.");
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="announcement-dot" />
        Furnished team accommodation, made simpler across Albania
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="BalkanStay home" onClick={closeMenu}>
          <span className="brand-mark"><Building2 size={20} strokeWidth={1.8} /></span>
          <span className="brand-name">balkan<span>stay</span><small>WORKFORCE HOUSING</small></span>
        </a>

        <button className="menu-toggle" type="button" aria-label="Toggle navigation" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#properties" onClick={closeMenu}>Properties</a>
          <a href="#how-it-works" onClick={closeMenu}>How it works</a>
          <a href="#landlords" onClick={closeMenu}>For landlords</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#request" onClick={closeMenu}>Find accommodation <ArrowRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="hero-content">
            <div className="eyebrow"><span className="eyebrow-line" /> A simpler way to house your workforce</div>
            <h1>One team.<br /><em>One contact.</em><br />A place to stay.</h1>
            <p className="hero-copy">We help companies find furnished accommodation for incoming workers—without the hours of searching, calling and coordinating scattered listings.</p>
            <div className="hero-actions" id="request-cta">
              <a className="button button-primary" href="#request">Find accommodation <ArrowRight size={18} /></a>
              <button className="button button-whatsapp" type="button" onClick={() => contactOnWhatsApp("Hello, I need furnished accommodation for my workforce.")}>
                <MessageCircle size={18} fill="currentColor" /> Chat on WhatsApp
              </button>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars" aria-hidden="true"><span>HR</span><span>OP</span><span>+</span></div>
              <p><strong>For the people who keep projects moving</strong><br />Construction · Recruitment · Operations</p>
            </div>
          </div>

          <div className="hero-visual" aria-label="Furnished accommodation example">
            <img src="/manus-storage/durres-living_e1637d50.jpg" alt="A furnished apartment living room ready for a team stay" fetchPriority="high" />
            <div className="photo-wash" />
            <div className="visual-note"><span className="visual-note-icon"><Home size={17} /></span><span><strong>Move-in ready</strong><small>Furnished stays for work teams</small></span></div>
            <div className="visual-stamp"><span>01</span><small>ONE<br />CONTACT</small></div>
            <div className="visual-caption">GOOD HOUSING MAKES<br />GOOD WORK POSSIBLE.</div>
          </div>
          <a className="scroll-cue" href="#how-it-works"><span>Explore the service</span><ArrowDownRight size={17} /></a>
        </section>

        <section className="trust-strip" aria-label="Service highlights">
          <div><span className="trust-number">0%</span><span>company sourcing fee</span></div>
          <div><span className="trust-number">1</span><span>professional point of contact</span></div>
          <div><span className="trust-number">24–48h</span><span>target shortlist turnaround</span></div>
          <p>Less coordination. More time for the work that matters.</p>
        </section>

        <section className="section properties-section" id="properties">
          <div className="section-heading">
            <div><span className="section-kicker">A clearer view of local options</span><h2>Housing, without the hunt.</h2></div>
            <p>We bring fragmented local supply into one shortlist. These sample cards show the kind of details your team can review at a glance.</p>
          </div>
          <div className="property-grid">
            {listings.map((listing, index) => (
              <article className="property-card" key={listing.location}>
                <div className="property-photo">
                  <img src={listing.image} alt={listing.alt} loading="lazy" />
                  <span className="property-index">0{index + 1}</span>
                </div>
                <div className="property-body">
                  <span className="property-location"><span />{listing.location}</span>
                  <h3>{listing.title}</h3>
                  <div className="property-facts"><span><BedDouble size={16} />{listing.beds}</span><span><Clock3 size={16} />{listing.stay}</span></div>
                  <p className="sample-note">{listing.note}</p>
                  <button className="text-link" type="button" onClick={() => { setFormMessage(""); document.getElementById("request")?.scrollIntoView({ behavior: "smooth" }); }}>
                    Ask about options <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <p className="inventory-disclaimer">Illustrative examples only. We confirm real availability, pricing and fit with you before any commitment.</p>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="section how-inner">
            <div className="section-heading how-heading">
              <div><span className="section-kicker">A straightforward process</span><h2>From headcount to housing.</h2></div>
              <p>Instead of coordinating with a dozen hosts, your team works with one person who understands the brief.</p>
            </div>
            <div className="steps-grid">
              {steps.map((step) => (
                <article className="step-card" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
            <div className="how-footnote"><CheckCircle2 size={18} /> Clear options, central coordination, no sourcing fee for the company.</div>
          </div>
        </section>

        <section className="section value-section">
          <div className="value-copy">
            <span className="section-kicker">Built around your real work</span>
            <h2>Your team builds infrastructure.<br /><em>Let us untangle the housing.</em></h2>
            <p>Searching social groups, calling one host at a time and aligning several leases can pull HR and operations away from their core work. BalkanStay turns that fragmented task into one clear conversation.</p>
            <a className="text-link" href="#request">Share your accommodation brief <ArrowRight size={16} /></a>
          </div>
          <div className="value-list">
            <div className="value-row"><span className="value-icon"><Users size={19} /></span><span><strong>For companies</strong><small>A curated shortlist at no additional sourcing cost.</small></span><span className="value-tag">0% fee</span></div>
            <div className="value-row"><span className="value-icon"><Home size={19} /></span><span><strong>For property hosts</strong><small>Connect with longer-stay corporate guests.</small></span><span className="value-tag">Direct fit</span></div>
            <div className="value-row"><span className="value-icon"><ShieldCheck size={19} /></span><span><strong>For project teams</strong><small>Furnished options selected around location and length of stay.</small></span><span className="value-tag">One contact</span></div>
          </div>
        </section>

        <section className="landlord-band" id="landlords">
          <div className="landlord-image"><img src="/manus-storage/vlore-bedrooms_75eb59a9.jpg" alt="Furnished bedroom in a rental apartment" loading="lazy" /></div>
          <div className="landlord-copy"><span className="section-kicker">For property owners</span><h2>Have a furnished place between tenants?</h2><p>We help match suitable properties with companies looking for medium-term worker accommodation. Start with a simple conversation about your location, capacity and availability.</p><a href="#contact" className="button button-light">List a property <ArrowRight size={17} /></a><small>No upfront listing fee. Terms are discussed directly before any placement.</small></div>
        </section>

        <section className="section request-section" id="contact">
          <div className="request-intro">
            <span className="section-kicker">Start with a short brief</span>
            <h2>Tell us what your team needs.</h2>
            <p>Share four essentials and we can follow up with the right questions. No long procurement form.</p>
            <div className="request-assurance"><ShieldCheck size={18} /><span><strong>No sourcing fee for companies</strong><small>Availability and terms are confirmed before commitment.</small></span></div>
          </div>
          <form className="request-form" id="request" onSubmit={submitRequest}>
            <div className="form-heading"><span>ACCOMMODATION REQUEST</span><span>~ 1 minute</span></div>
            <label>Your name<input required autoComplete="name" placeholder="e.g. Alex Morgan" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
            <label>Phone number<input required type="tel" autoComplete="tel" placeholder="Include country code" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></label>
            <div className="form-row">
              <label>Number of workers<input required type="number" min="1" inputMode="numeric" placeholder="e.g. 12" value={form.headcount} onChange={(e) => setForm({ ...form, headcount: e.target.value })} /></label>
              <label>Move-in date<input required type="date" value={form.moveIn} onChange={(e) => setForm({ ...form, moveIn: e.target.value })} /></label>
            </div>
            <button className="button button-primary form-submit" type="submit">Send accommodation request <ArrowRight size={18} /></button>
            {formMessage && <p className={`form-message ${formSent ? "is-success" : ""}`} role="status">{formMessage}</p>}
            <p className="privacy-note">Your details are used only to respond to this accommodation inquiry.</p>
          </form>
        </section>

        <section className="closing-cta">
          <div className="closing-mark"><Building2 size={24} /></div>
          <span className="section-kicker">One contact can change the whole process</span>
          <h2>Bring your people.<br /><em>We’ll help with the place.</em></h2>
          <a className="button button-primary" href="#request">Start a housing request <ArrowRight size={18} /></a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top"><span className="brand-mark"><Building2 size={18} /></span><span className="brand-name">balkan<span>stay</span><small>WORKFORCE HOUSING</small></span></a>
        <p>Workforce accommodation, coordinated with care.</p>
        <div className="footer-links"><a href="#properties">Properties</a><a href="#how-it-works">How it works</a><a href="#landlords">For landlords</a><a href="#contact">Contact</a></div>
        <small className="copyright">© {new Date().getFullYear()} BalkanStay. Sample listings are illustrative; availability is subject to confirmation.</small>
      </footer>

      <button className="floating-whatsapp" type="button" aria-label="Contact BalkanStay on WhatsApp" onClick={() => contactOnWhatsApp("Hello, I need furnished accommodation for my workforce.")}>
        <MessageCircle size={21} fill="currentColor" /><span>WhatsApp</span>
      </button>
    </div>
  );
}

export default App;
