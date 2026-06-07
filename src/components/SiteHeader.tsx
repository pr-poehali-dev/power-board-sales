import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "Главная", href: "#hero" },
  { label: "Каталог", href: "#catalog" },
  { label: "Услуги", href: "#services" },
  { label: "Производство", href: "#production" },
  { label: "Проекты", href: "#projects" },
  { label: "Документация", href: "#docs" },
  { label: "О компании", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

interface Props {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  scrollTo: (href: string) => void;
}

export default function SiteHeader({ menuOpen, setMenuOpen, scrollTo }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/8">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#C8102E] flex items-center justify-center">
            <Icon name="Zap" size={16} className="text-white" />
          </div>
          <div>
            <span className="font-oswald font-semibold text-lg tracking-wider uppercase">ЭлтехПро</span>
            <div className="hidden sm:block text-[10px] text-[#8A8A8A] tracking-widest uppercase -mt-0.5">Электрощитовое оборудование</div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button key={item.href} onClick={() => scrollTo(item.href)} className="nav-link">
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+79955662722" className="hidden sm:flex items-center gap-2 text-sm font-medium">
            <Icon name="Phone" size={14} className="text-[#C8102E]" />
            +7 (995) 566-27-22
          </a>
          <button
            onClick={() => scrollTo("#calc")}
            className="hidden sm:block bg-[#C8102E] text-white text-sm font-medium px-4 py-2 hover:bg-[#A50D25] transition-colors"
          >
            Получить КП
          </button>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-black/8 px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button key={item.href} onClick={() => scrollTo(item.href)} className="nav-link text-left text-base">
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-black/8">
            <a href="tel:+79955662722" className="flex items-center gap-2 text-sm font-medium mb-3">
              <Icon name="Phone" size={14} className="text-[#C8102E]" />
              +7 (995) 566-27-22
            </a>
            <button onClick={() => scrollTo("#calc")} className="w-full bg-[#C8102E] text-white text-sm font-medium px-4 py-2">
              Получить КП
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
