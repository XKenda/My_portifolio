import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import Reveal from "./Reveal";

function Connect() {
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  const sendEmail = async (event) => {
    event.preventDefault();
    if (sending) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const params = {
      name: formData.get("name"),
      title: formData.get("title"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      time: new Date().toISOString().replace("T", " "),
    };

    setSending(true);
    setFeedback("");

    try {
      await emailjs.send(
        "service_e0rkudc",
        "template_073jtkg",
        params,
        "Z5rdwFlTHAK2oZNQm"
      );
      setFeedback("Thanks for reaching out. Your message has been sent.");
      form.reset();
    } catch (error) {
      console.error("EmailJS could not send the contact message.", error);
      setFeedback("Your message could not be sent. Please email me directly instead.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Reveal as="section" id="contact" className="section contact-section">
      <div className="page-shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">07 / Start a conversation</p>
          <h2>Have an idea?<br /><span>Let&apos;s build</span><br />something meaningful.</h2>
          <p>
            I&apos;m always interested in connecting with developers,
            recruiters, and people working on interesting software projects.
          </p>
          <a className="email-address" href="mailto:maibrahim131@gmail.com">
            maibrahim131@gmail.com <FiArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-socials">
            <a href="https://github.com/XKenda" target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mahmoud-ibrahim-ab4b76290/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-heading">
            <span className="form-number">01 — 04</span>
            <h3>Send a message</h3>
          </div>
          <label>
            Your name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Subject <span className="optional-label">Optional</span>
            <input name="title" type="text" />
          </label>
          <label>
            Email address
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Phone <span className="optional-label">Optional</span>
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label className="message-field">
            What&apos;s on your mind?
            <textarea name="message" rows="4" required />
          </label>
          <div className="form-actions">
            <button type="submit" className="button button-primary" disabled={sending}>
              {sending ? "Sending…" : "Send message"} <FiArrowUpRight aria-hidden="true" />
            </button>
            <p className="form-feedback" aria-live="polite" role="status">{feedback}</p>
          </div>
        </form>
      </div>
    </Reveal>
  );
}

export default Connect;
