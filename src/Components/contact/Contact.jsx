import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { FiSend, FiCheckCircle } from "react-icons/fi";
import emailjs from "emailjs-com";
import "./contact.css";

const channels = [
  {
    icon: <MdOutlineEmail />,
    label: "Email",
    value: "ohoisrael@gmail.com",
    href: "mailto:ohoisrael@gmail.com",
    cta: "Send an email",
  },
  {
    icon: <RiMessengerLine />,
    label: "Messenger",
    value: "Israel Michael Oho",
    href: "https://m.me/wunom.izmaname",
    cta: "Start a chat",
  },
  {
    icon: <BsWhatsapp />,
    label: "WhatsApp",
    value: "+233 55 024 0615",
    href: "https://wa.me/+233550240615",
    cta: "Message us",
  },
];

const FloatingInput = ({ label, name, type = "text", as = "input", ...rest }) => {
  const [value, setValue] = useState("");
  const filled = value.length > 0;
  const Tag = as;
  return (
    <label className={`field ${filled ? "is-filled" : ""}`}>
      <Tag
        name={name}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      />
      <span className="field__label">{label}</span>
      <span className="field__line" />
    </label>
  );
};

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm("service_7h46ehl", "template_plpbj1h", form.current, {
        publicKey: "vw1q-3zGwxFNMM-lk",
      })
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus("idle"), 5000);
        },
        () => setStatus("error")
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Get in touch</span>
          <h2 className="section-title">
            Let's build <span className="text-gradient">something great.</span>
          </h2>
          <p className="section-subtitle">
            Got a project in mind? Drop us a line — we usually reply within a
            day.
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__channels"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            {channels.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
              >
                <div className="channel-card__icon">{c.icon}</div>
                <div className="channel-card__body">
                  <span className="channel-card__label">{c.label}</span>
                  <span className="channel-card__value">{c.value}</span>
                  <span className="channel-card__cta">{c.cta} →</span>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact__form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FloatingInput label="Your full name" name="name" required />
            <FloatingInput
              label="Your email address"
              name="email"
              type="email"
              required
            />
            <FloatingInput
              label="Tell us about your project"
              name="message"
              as="textarea"
              rows="6"
              required
            />

            <button
              type="submit"
              className="btn btn-primary contact__submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                "Sending..."
              ) : status === "success" ? (
                <>
                  <FiCheckCircle /> Sent
                </>
              ) : (
                <>
                  Send message
                  <FiSend />
                </>
              )}
            </button>

            {status === "success" && (
              <motion.p
                className="contact__status is-success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thanks — we'll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                className="contact__status is-error"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Something went wrong. Try emailing us directly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
