"use client";

import { useState } from "react";
import styles from "@/styles/RSVPForm.module.css";
import Button from "@/components/ui/Button";

export default function RSVPForm() {
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    dietary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success" && formData.attending === "yes") {
    return (
      <div className={styles.successMessage}>
        <p className={styles.successTitle}>Thank you!</p>
        <p>We can&apos;t wait to celebrate with you.</p>
      </div>
    );
  }

  if (status === "success" && formData.attending === "no") {
    return (
      <div className={styles.successMessage}>
        <p className={styles.successTitle}>We&apos;ll miss you!</p>
        <p>We&apos;re sorry to hear that you cannot attend. We hope to see you at our next event!</p>
      </div>
    );
  }

  return (
    <form
      name="rsvp"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <p hidden>
        <label>
          Don&apos;t fill this out if you are human: <input name="bot-field" type="text" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="rsvp" />
      <div className={styles.field} data-column-span="2">
        <label htmlFor="name" className={`${styles.label} visually-hidden`}>
          Guest name(s)
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="Guest name(s)"
          autoComplete="off"
        />
        <p className={styles.note}>Please enter the names of all guests in your party.</p>
      </div>

      <div className={styles.field} data-column-span="2">
        <label htmlFor="email" className={`${styles.label} visually-hidden`}>
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="Your email address"
          autoComplete="email"
        />
        <p className={styles.note}>Just in case we need to get in touch.</p>
      </div>

      <textarea id="attending-display" name="attending-display" value={formData.attending === "yes" ? "will be attending the wedding!" : "cannot attend the wedding."} hidden readOnly />

      <div className={styles.field} data-column-span="2">
        <legend className={`${styles.label} visually-hidden`}>Will you be attending?</legend>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel} htmlFor="attending-yes">
            <input
              type="radio"
              id="attending-yes"
              name="attending"
              value="yes"
              checked={formData.attending === "yes"}
              onChange={handleChange}
              required
              className={styles.radio}
              autoComplete="off"
            />
            <span className={styles.radioText}>Plan on attending</span>
          </label>
          <label className={styles.radioLabel} htmlFor="attending-no">
            <input
              type="radio"
              id="attending-no"
              name="attending"
              value="no"
              checked={formData.attending === "no"}
              onChange={handleChange}
              className={styles.radio}
              autoComplete="off"
            />
            <span className={styles.radioText}>Cannot attend</span>
          </label>
        </div>
      </div>

      {formData.attending === "yes" && (
        <>
          {/* <div className={styles.field} data-column-span="2">
            <label htmlFor="guests" className={`${styles.label} visually-hidden`}>
              Number of guests
            </label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className={styles.select}
              required
            >
              <option value="">Select number of guests</option>
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
              <option value="5">5 guests</option>
              <option value="6">6 guests</option>
              <option value="7">7 guests</option>
              <option value="8">8 guests</option>
              <option value="9">9 guests</option>
              <option value="10">10 guests</option>
            </select>
          </div> */}

          <div className={styles.field} data-column-span="2">
            <label htmlFor="dietary" className={`${styles.label} visually-hidden`}>
              Dietary restrictions
            </label>
            <textarea
              id="dietary"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Any dietary restrictions we should now about? (e.g. gluten-free, vegan, allergies, religious restrictions, etc.)"
              rows={4}
            />
          </div>
        </>
      )}

      <input type="hidden" name="subject" id="subject" value={`${formData.name} ${formData.attending === "yes" ? "will be attending the wedding!" : "cannot attend the wedding."}`} readOnly />

      {status === "error" && (
        <p className={styles.errorMessage}>
          Something went wrong. Please try again.
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send your response"}
      </Button>
    </form>
  );
}
