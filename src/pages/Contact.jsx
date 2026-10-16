import { useState } from 'react';
import { site } from '../content.js';

// Set VITE_FORMSPREE_ID (e.g. "xyzabcd") to have messages emailed to you via Formspree's
// free tier. Without it, the form opens the visitor's email app with the message filled in.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!FORMSPREE_ID) {
      const name = `${data.get('firstName')} ${data.get('lastName')}`.trim();
      const body = `${data.get('message')}\n\n— ${name} (${data.get('email')})`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Website enquiry from ' + name)}&body=${encodeURIComponent(body)}`;
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
      e.target.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="section dark contact">
      <div className="container contact-grid">
        <div>
          <h2 className="heading">Contact us.</h2>
          <p className="body contact-lines">
            <a href={`mailto:${site.email}`}>{site.email}</a><br />
            <a href={`tel:${site.phoneCanada.replace(/[^+\d]/g, '')}`}>{site.phoneCanada}</a><br />
            <a href={`tel:${site.phoneIndia.replace(/[^+\d]/g, '')}`}>{site.phoneIndia}</a> (India)
          </p>
        </div>

        {status === 'sent' ? (
          <p className="body thanks">Thank you! We’ll be in touch soon.</p>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            <fieldset>
              <legend>Name</legend>
              <div className="row">
                <label>First Name <span>(required)</span><input name="firstName" required autoComplete="given-name" /></label>
                <label>Last Name <span>(required)</span><input name="lastName" required autoComplete="family-name" /></label>
              </div>
            </fieldset>
            <label>Email <span>(required)</span><input name="email" type="email" required autoComplete="email" /></label>
            <label>Message <span>(required)</span><textarea name="message" rows="4" required /></label>
            <button className="btn btn-yellow" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send'}
            </button>
            {status === 'error' && <p className="error">Something went wrong. Please email us at {site.email}.</p>}
          </form>
        )}
      </div>
    </section>
  );
}
