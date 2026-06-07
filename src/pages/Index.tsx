import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import TopSections from "@/components/TopSections";
import MiddleSections from "@/components/MiddleSections";
import BottomSections from "@/components/BottomSections";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#0F0F0F] font-golos">
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
      <TopSections scrollTo={scrollTo} />
      <MiddleSections scrollTo={scrollTo} />
      <BottomSections scrollTo={scrollTo} />
    </div>
  );
}
