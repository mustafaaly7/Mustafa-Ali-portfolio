"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "sending", message: "Sending message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setForm(initialForm);
      setStatus({ type: "success", message: "Message sent successfully." });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }
  }

  return (
    <section id="contact" className="bg-black py-24 text-[#E2E8F0]">
      <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="eyebrow">06 / contact</span>
          <h2 className="section-heading mt-5">Have a good idea? Let&apos;s make it real.</h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#8F9B8F]">I&apos;m open to thoughtful freelance work, product conversations, and opportunities where craft and engineering matter.</p>
          <a href="mailto:mustafaaaly27@gmail.com?subject=Portfolio%20Inquiry" className="mt-8 inline-flex items-center gap-3 font-mono text-sm text-[#22C55E]">mustafaaaly27@gmail.com <ArrowUpRight size={16} /></a>
        </div>
        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-[#1F2937] bg-[#0B0F0B] p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#8F9B8F]">Name<input required type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="mt-3 w-full border-b border-[#1F2937] bg-transparent py-3 font-sans text-sm text-[#E2E8F0] outline-none transition-colors placeholder:text-[#8F9B8F]/60 focus:border-[#22C55E]" /></label>
            <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#8F9B8F]">Email<input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="mt-3 w-full border-b border-[#1F2937] bg-transparent py-3 font-sans text-sm text-[#E2E8F0] outline-none transition-colors placeholder:text-[#8F9B8F]/60 focus:border-[#22C55E]" /></label>
          </div>
          <label className="mt-7 block font-mono text-[10px] uppercase tracking-[0.1em] text-[#8F9B8F]">Message<textarea required name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Tell me about the project..." className="mt-3 w-full resize-none border-b border-[#1F2937] bg-transparent py-3 font-sans text-sm text-[#E2E8F0] outline-none transition-colors placeholder:text-[#8F9B8F]/60 focus:border-[#22C55E]" /></label>
          <button type="submit" disabled={status.type === "sending"} className="mt-8 inline-flex items-center gap-2 bg-[#22C55E] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-black transition-transform hover:-translate-y-1 disabled:cursor-wait disabled:opacity-60">{status.type === "sending" ? "Sending..." : "Send message"} <Mail size={15} /></button>
          {status.message && <p role="status" className={`mt-4 font-mono text-xs ${status.type === "error" ? "text-red-400" : "text-[#22C55E]"}`}>{status.message}</p>}
        </motion.form>
      </div>
    </section>
  );
}
