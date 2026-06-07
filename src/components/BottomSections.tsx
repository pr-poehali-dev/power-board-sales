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
  scrollTo: (href: string) => void;
}

export default function BottomSections({ scrollTo }: Props) {
  return (
    <>
      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="tag">О компании</div>
              <h2 className="font-oswald text-4xl sm:text-5xl font-semibold tracking-tight mb-6">ООО «ЭлтехПро»</h2>
              <p className="text-[#8A8A8A] leading-relaxed mb-4">
                Основана в 2009 году как инжиниринговая компания в сфере электротехники. С 2012 года — собственное производство в Москве. Сегодня мы — один из ведущих производителей электрощитового оборудования в Центральном федеральном округе.
              </p>
              <p className="text-[#8A8A8A] leading-relaxed mb-10">
                Работаем с генеральными подрядчиками, проектными организациями, промышленными предприятиями, предприятиями ЖКХ и АПК. В штате — 120 человек, из них 35 инженеров-электриков.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: "Award", label: "Сертификат ГОСТ Р 51321.1" },
                  { icon: "Shield", label: "Членство в СРО" },
                  { icon: "FileText", label: "Лицензия Ростехнадзора" },
                ].map((item, i) => (
                  <div key={i} className="bg-white px-5 py-4 flex items-center gap-3">
                    <Icon name={item.icon} size={16} className="text-[#C8102E] flex-shrink-0" />
                    <span className="text-xs font-medium leading-snug">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="tag">Реквизиты</div>
              {[
                { label: "Полное наименование", val: "ООО «ЭлтехПро»" },
                { label: "ИНН", val: "7701234567" },
                { label: "КПП", val: "770101001" },
                { label: "ОГРН", val: "1097701234567" },
                { label: "Юридический адрес", val: "г. Москва, ул. Производственная, д. 12" },
                { label: "Банк", val: "ПАО Сбербанк" },
              ].map((r, i) => (
                <div key={i} className="flex justify-between py-3 border-b border-black/10 text-sm gap-4">
                  <span className="text-[#8A8A8A] flex-shrink-0">{r.label}</span>
                  <span className="font-medium text-right">{r.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTS ── */}
      <section id="contacts" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="tag">Связаться</div>
            <h2 className="font-oswald text-4xl sm:text-5xl font-semibold tracking-tight">Контакты</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/10">
            <div className="bg-[#F5F5F3] p-8 flex items-center gap-4">
              <div className="w-10 h-10 bg-white border border-black/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={16} className="text-[#C8102E]" />
              </div>
              <div>
                <div className="text-xs text-[#8A8A8A] mb-1">Телефон</div>
                <a href="tel:+79955662722" className="font-medium hover:text-[#C8102E] transition-colors">+7 (995) 566-27-22</a>
              </div>
            </div>
            <div className="bg-[#F5F5F3] p-8 flex items-center gap-4">
              <div className="w-10 h-10 bg-white border border-black/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" size={16} className="text-[#C8102E]" />
              </div>
              <div>
                <div className="text-xs text-[#8A8A8A] mb-1">Email</div>
                <a href="mailto:vi.elteh.pro@mail.ru" className="font-medium hover:text-[#C8102E] transition-colors">vi.elteh.pro@mail.ru</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0F0F0F] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10 pb-10 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#C8102E] flex items-center justify-center">
                <Icon name="Zap" size={16} className="text-white" />
              </div>
              <div>
                <span className="font-oswald font-semibold text-lg tracking-wider uppercase">ЭлтехПро</span>
                <div className="text-[10px] text-white/40 tracking-widest uppercase">Электрощитовое оборудование</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              {NAV_ITEMS.map((item) => (
                <button key={item.href} onClick={() => scrollTo(item.href)} className="text-xs text-white/50 hover:text-white transition-colors">
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40">
            <span>© 2009–2024 ООО «ЭлтехПро». Все права защищены.</span>
            <span>Политика конфиденциальности</span>
          </div>
        </div>
      </footer>
    </>
  );
}
