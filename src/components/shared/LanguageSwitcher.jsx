"use client";

import { Globe } from "lucide-react";

import { LANGUAGES } from "@/config/languages";

export function LanguageSwitcher({
  value = "hi",
  onChange,
  className = "",
}) {
  return (
    <label
      className={`inline-flex h-10 items-center gap-2 rounded-full border border-brand-border bg-white px-4 font-medium ${className}`}
    >
      <Globe className="size-4 shrink-0 text-brand-primary" />
      <select
        aria-label="Select language"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        className="bg-transparent text-sm text-brand-brown outline-none"
      >
        {LANGUAGES.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </label>
  );
}
