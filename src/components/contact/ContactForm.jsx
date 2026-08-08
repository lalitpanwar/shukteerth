"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `संपर्क अनुरोध — ${form.name || "श्रद्धालु"}`
    );
    const body = encodeURIComponent(
      `नाम: ${form.name}\nईमेल: ${form.email}\nफ़ोन: ${form.phone}\n\nसंदेश:\n${form.message}`
    );

    window.location.href = `mailto:info@shukdevashram.org?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-brand-brown"
          >
            नाम
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-brown outline-none transition focus-visible:border-brand-gold focus-visible:ring-2 focus-visible:ring-brand-gold/40"
            placeholder="आपका नाम"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-brand-brown"
          >
            फ़ोन नंबर
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-brown outline-none transition focus-visible:border-brand-gold focus-visible:ring-2 focus-visible:ring-brand-gold/40"
            placeholder="+91"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-brand-brown"
        >
          ईमेल
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-brown outline-none transition focus-visible:border-brand-gold focus-visible:ring-2 focus-visible:ring-brand-gold/40"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-brand-brown"
        >
          संदेश
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full resize-y rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-brown outline-none transition focus-visible:border-brand-gold focus-visible:ring-2 focus-visible:ring-brand-gold/40"
          placeholder="अपना संदेश यहाँ लिखें..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full rounded-xl sm:w-auto">
        <Send className="size-4" />
        संदेश भेजें
      </Button>

      <p className="text-xs text-brand-brown/60">
        यह बटन आपके ईमेल ऐप में यह संदेश तैयार कर देगा — जिसे आप सीधे
        हमें भेज सकते हैं।
      </p>
    </form>
  );
}
