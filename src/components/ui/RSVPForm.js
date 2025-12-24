"use client";

import { useState } from "react";
import styles from "@/styles/RSVPForm.module.css";
import Button from "@/components/ui/Button";

export default function RSVPForm() {
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "1",
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
      const response = await fetch("/", {
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

  if (status === "success") {
    return (
      <div className={styles.successMessage}>
        <p className={styles.successTitle}>Thank you!</p>
        <p>We can&apos;t wait to celebrate with you.</p>
      </div>
    );
  }

  return (
    <form
      name="rsvp"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={styles.form}
    >
      {/* Hidden fields for Netlify */}
      <input type="hidden" name="form-name" value="rsvp" />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className={styles.field}>
        <label htmlFor="name" className={`${styles.label} visually-hidden`}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="Your name"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={`${styles.label} visually-hidden`}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="your-email@example.com"
        />
      </div>

      <div className={styles.field} data-column-span="2">
        <label className={styles.label}>Will you be attending?</label>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="attending"
              value="yes"
              checked={formData.attending === "yes"}
              onChange={handleChange}
              required
              className={styles.radio}
            />
            <span className={styles.radioText}>Joyfully accepts</span>
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="attending"
              value="no"
              checked={formData.attending === "no"}
              onChange={handleChange}
              className={styles.radio}
            />
            <span className={styles.radioText}>Regretfully declines</span>
          </label>
        </div>
      </div>

      {formData.attending === "yes" && (
        <>
          <div className={styles.field} data-column-span="2">
            <label htmlFor="guests" className={styles.label}>
              Number of guests
            </label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className={styles.field} data-column-span="2">
            <label htmlFor="dietary" className={styles.label}>
              Dietary restrictions
            </label>
            <textarea
              id="dietary"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Please let us know of any allergies or dietary needs"
              rows={3}
            />
          </div>
        </>
      )}

      {status === "error" && (
        <p className={styles.errorMessage}>
          Something went wrong. Please try again.
        </p>
      )}

      <Button
        onClick={handleSubmit}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "RSVP"}
      </Button>
    </form>
  );
}
