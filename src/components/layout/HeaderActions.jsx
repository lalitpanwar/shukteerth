import { LanguageSwitcher } from "../shared/LanguageSwitcher";
import { MobileNav } from "../navigation";

export function HeaderActions() {
  return (
    <div className="flex items-center justify-end gap-3">
      <LanguageSwitcher />
      <MobileNav />
    </div>
  );
}
