"use client";

import { Check, ChevronDown, Globe } from "lucide-react";

import { LANGUAGES } from "@/config/languages";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher({
  value = "hi",
  onChange,
  className = "",
}) {
  const currentLanguage =
    LANGUAGES.find((item) => item.code === value) ||
    LANGUAGES[0];

  return (
    <DropdownMenu>
<DropdownMenuTrigger
  className="inline-flex h-10 items-center gap-2 rounded-full border border-brand-border bg-white px-4 font-medium hover:bg-brand-ivory"
>
  <Globe className="size-4" />
  <span>{currentLanguage.name}</span>
  <ChevronDown className="size-4" />
</DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="min-w-48"
      >
        {LANGUAGES.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => onChange?.(language.code)}
            className="flex cursor-pointer items-center justify-between"
          >
            <span>{language.name}</span>

            {value === language.code && (
              <Check className="h-4 w-4 text-brand-saffron" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}