
import { Logo } from "./Logo";
import { HeaderActions } from "./HeaderActions";

import Container from "../shared/container";
import {DesktopNav, MobileNav } from "../navigation";
import { LanguageSwitcher } from "../shared/LanguageSwitcher";

export function Header() {
  return (
<header className="sticky top-0 z-50 border-b border-brand-border bg-brand-ivory/95 backdrop-blur-md">
  <Container>
    <div className="flex h-20 items-center">

      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden xl:flex flex-1 justify-center">
        <DesktopNav />
      </div>

      {/* Desktop Actions */}
      <div className="ml-auto hidden xl:flex">
        <HeaderActions />
      </div>

      {/* Mobile Actions */}
      <div className="ml-auto flex items-center gap-2 xl:hidden">
        <LanguageSwitcher />
        <MobileNav />
      </div>

    </div>
  </Container>
</header>
  );
}