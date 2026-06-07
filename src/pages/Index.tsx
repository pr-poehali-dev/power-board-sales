import { useState } from "react";
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

const CATALOG_CATEGORIES = [
  {
    title: "Вводно-распределительные устройства",
    short: "ВРУ",
    desc: "Для приёма и распределения электроэнергии на объектах промышленного и гражданского строительства",
    items: ["ВРУ 1-48-00", "ВРУ 1-14-00", "ВРУ с автоматическим вводом резерва"],
    icon: "Server",
  },
  {
    title: "Щиты автоматического ввода резерва",
    short: "АВР",
    desc: "Автоматическое переключение питания при аварии на основном вводе. Время переключения от 0,1 с",
    items: ["АВР до 400А", "АВР до 1600А", "АВР с контроллером"],
    icon: "Zap",
  },
  {
    title: "Щиты управления и автоматики",
    short: "ЩУА",
    desc: "Управление насосными станциями, вентиляцией, технологическим оборудованием",
    items: ["Щит управления насосами", "Щит управления вентиляцией", "Щит пожаротушения"],
    icon: "Settings",
  },
  {
    title: "Панели распределения питания",
    short: "ПРП",
    desc: "Распределение нагрузок по объектам с защитой каждой линии. Исполнения IP31–IP65",
    items: ["ПРП на DIN-рейке", "ПРП напольные", "ПРП встраиваемые"],
    icon: "Grid3X3",
  },
  {
    title: "Комплектные трансформаторные подстанции",
    short: "КТП",
    desc: "КТП мощностью от 25 до 2500 кВА для промышленных и гражданских объектов",
    items: ["КТП-160", "КТП-630", "КТП-1000"],
    icon: "Activity",
  },
  {
    title: "Шкафы управления электродвигателями",
    short: "ШУЭ",
    desc: "Плавный пуск, частотное регулирование, реверс. Индивидуальная проработка",
    items: ["ШУЭ с ПЧ", "ШУЭ с УПП", "ШУЭ с реверсом"],
    icon: "RotateCcw",
  },
];

const SERVICES = [
  {
    num: "01",
    title: "Проектирование",
    desc: "Разработка технической документации, принципиальных схем, чертежей и спецификаций. Согласование с заказчиком на каждом этапе.",
    icon: "PenTool",
  },
  {
    num: "02",
    title: "Производство и сборка",
    desc: "Собственное производство в Москве. Полный цикл: от заготовки металла до финальных испытаний и оформления паспорта изделия.",
    icon: "Wrench",
  },
  {
    num: "03",
    title: "Монтаж и пусконаладка",
    desc: "Монтаж оборудования на объекте, подключение, настройка, обучение персонала и техническое сопровождение.",
    icon: "HardHat",
  },
];

const ADVANTAGES = [
  { value: "15+", label: "лет на рынке" },
  { value: "2 400+", label: "реализованных проектов" },
  { value: "98%", label: "объектов сданы в срок" },
  { value: "5 лет", label: "гарантия на продукцию" },
];

const PRODUCTION_STEPS = [
  { step: "01", title: "Получение задания", desc: "Опросный лист, ТЗ или техническая беседа с инженером" },
  { step: "02", title: "Проектирование", desc: "Принципиальные схемы, компоновка, 3D-модель щита" },
  { step: "03", title: "Заготовительный участок", desc: "Рубка, гибка, сварка металлоконструкций по чертежам" },
  { step: "04", title: "Сборочный участок", desc: "Монтаж компонентов, маркировка, прокладка кабеля" },
  { step: "05", title: "Испытательная лаборатория", desc: "Проверка изоляции, функциональные испытания, оформление протокола" },
  { step: "06", title: "Отгрузка", desc: "Упаковка, комплект документации, доставка или самовывоз" },
];

const PROJECTS = [
  { sector: "Промышленность", title: "Завод металлоконструкций", desc: "ВРУ 1600А + 12 ЩУА для 3 производственных линий", year: "2024" },
  { sector: "Нефтегаз", title: "Компрессорная станция", desc: "АВР 1000А, ПЧ-приводы 4×250кВт, взрывозащищённое исполнение", year: "2023" },
  { sector: "ЖКХ", title: "Жилой комплекс 480 квартир", desc: "КТП-630, ВРУ, 28 этажных щитов, диспетчеризация", year: "2024" },
  { sector: "АПК", title: "Птицефабрика", desc: "Автоматизация климата 60 корпусов, ЩУА + SCADA", year: "2023" },
  { sector: "Энергетика", title: "Подстанция 110/10 кВ", desc: "Щиты управления и сигнализации, АВР для СН", year: "2022" },
  { sector: "Коммерция", title: "Торговый центр 45 000 м²", desc: "Главный распределительный щит 3200А + система учёта", year: "2024" },
];

const DOCS = [
  { title: "Опросный лист на ВРУ", format: "XLSX", size: "84 КБ" },
  { title: "Опросный лист на АВР", format: "XLSX", size: "76 КБ" },
  { title: "Опросный лист на ЩУА", format: "XLSX", size: "92 КБ" },
  { title: "Каталог продукции 2024", format: "PDF", size: "18 МБ" },
  { title: "Сертификат соответствия ГОСТ", format: "PDF", size: "1.2 МБ" },
  { title: "Свидетельство СРО", format: "PDF", size: "0.8 МБ" },
];

const HERO_IMG = "https://cdn.poehali.dev/projects/922fd10c-e674-4f64-9393-50f46933157e/files/f57dec48-00f7-485c-b2b3-240073b1f878.jpg";
const PRODUCT_IMG = "https://cdn.poehali.dev/projects/922fd10c-e674-4f64-9393-50f46933157e/files/d276bc88-e9b2-4129-8f90-88875fdda36e.jpg";
const FACTORY_IMG = "https://cdn.poehali.dev/projects/922fd10c-e674-4f64-9393-50f46933157e/files/0cd09980-7865-4f4c-95bf-8f309585ae26.jpg";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", type: "", comment: "" });
  const [formSent, setFormSent] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#0F0F0F] font-golos">

      {/* ── HEADER ── */}
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

      {/* ── HERO ── */}
      <section id="hero" className="pt-16 min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-20 lg:py-32">
          <h1 className="font-oswald font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-6">
            Электро<br/>щитовое<br/>
            <span className="text-[#C8102E]">оборудование</span><br/>
            собственного<br/>производства
          </h1>
          <p className="text-[#8A8A8A] text-lg leading-relaxed mb-10 max-w-md">
            ВРУ, АВР, щиты управления и автоматики для промышленных и гражданских объектов. Полный цикл — от проекта до монтажа.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("#catalog")}
              className="bg-[#0F0F0F] text-white font-medium px-7 py-3.5 hover:bg-[#C8102E] transition-colors duration-300"
            >
              Смотреть каталог
            </button>
            <button
              onClick={() => scrollTo("#calc")}
              className="border border-[#0F0F0F] text-[#0F0F0F] font-medium px-7 py-3.5 hover:bg-[#0F0F0F] hover:text-white transition-colors duration-300"
            >
              Быстрый расчёт
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-black/10 pt-10">
            {ADVANTAGES.map((a) => (
              <div key={a.value}>
                <div className="font-oswald text-3xl font-semibold text-[#C8102E]">{a.value}</div>
                <div className="text-xs text-[#8A8A8A] mt-1 leading-tight">{a.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <img src={HERO_IMG} alt="Производство электрощитов" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
          <div className="absolute bottom-10 left-10 bg-white px-6 py-5 shadow-xl max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-[#8A8A8A] uppercase tracking-widest">Производство</span>
            </div>
            <div className="font-oswald text-xl font-medium">Цех работает 5 дней в неделю</div>
            <div className="text-sm text-[#8A8A8A] mt-1">Срок изготовления от 10 рабочих дней</div>
          </div>
        </div>
      </section>

      {/* ── CATALOG ── */}
      <section id="catalog" className="py-24 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <div className="tag">Продукция</div>
              <h2 className="font-oswald text-4xl sm:text-5xl font-semibold tracking-tight">Каталог оборудования</h2>
            </div>
            <p className="text-[#8A8A8A] max-w-xs text-sm leading-relaxed">
              Изготавливаем под ваш проект. Нет нужного — свяжитесь, обсудим.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-black/10">
            <div className="lg:col-span-1 border-r border-black/10">
              {CATALOG_CATEGORIES.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(i)}
                  className={`w-full text-left px-6 py-5 border-b border-black/10 transition-colors duration-200 flex items-center justify-between group
                    ${activeCategory === i ? "bg-[#0F0F0F] text-white" : "bg-white hover:bg-black/5"}`}
                >
                  <div>
                    <div className="text-xs font-medium tracking-widest uppercase mb-0.5 text-[#C8102E]">
                      {cat.short}
                    </div>
                    <div className={`font-medium text-sm leading-tight ${activeCategory === i ? "text-white" : "text-[#0F0F0F]"}`}>
                      {cat.title}
                    </div>
                  </div>
                  <Icon name="ChevronRight" size={16} className={`flex-shrink-0 ml-2 transition-transform ${activeCategory === i ? "translate-x-1 text-white" : "text-[#8A8A8A]"}`} />
                </button>
              ))}
            </div>

            <div className="lg:col-span-2 bg-white p-8 lg:p-12 flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="tag">{CATALOG_CATEGORIES[activeCategory].short}</div>
                <h3 className="font-oswald text-3xl font-semibold mb-4">{CATALOG_CATEGORIES[activeCategory].title}</h3>
                <p className="text-[#8A8A8A] leading-relaxed mb-8">{CATALOG_CATEGORIES[activeCategory].desc}</p>
                <div className="space-y-2">
                  {CATALOG_CATEGORIES[activeCategory].items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-2.5 border-b border-black/6">
                      <div className="w-1.5 h-1.5 bg-[#C8102E] flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-10">
                <button
                  onClick={() => scrollTo("#calc")}
                  className="bg-[#C8102E] text-white text-sm font-medium px-6 py-3 hover:bg-[#A50D25] transition-colors"
                >
                  Запросить КП
                </button>
                <button className="border border-black/20 text-sm font-medium px-6 py-3 hover:border-black transition-colors">
                  Скачать опросный лист
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="tag">Что мы делаем</div>
            <h2 className="font-oswald text-4xl sm:text-5xl font-semibold tracking-tight">Услуги</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10">
            {SERVICES.map((s) => (
              <div key={s.num} className="bg-white p-8 lg:p-12 hover:bg-[#F5F5F3] transition-colors group">
                <div className="font-oswald text-5xl font-light text-black/10 mb-6 group-hover:text-[#C8102E]/20 transition-colors">{s.num}</div>
                <div className="w-10 h-10 border border-black/15 flex items-center justify-center mb-6">
                  <Icon name={s.icon} size={18} className="text-[#C8102E]" />
                </div>
                <h3 className="font-oswald text-2xl font-medium mb-3">{s.title}</h3>
                <p className="text-[#8A8A8A] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTION ── */}
      <section id="production" className="py-24 bg-[#0F0F0F] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="tag">Наш цех</div>
              <h2 className="font-oswald text-4xl sm:text-5xl font-semibold tracking-tight mb-6">Собственное производство</h2>
              <p className="text-white/60 leading-relaxed mb-10">
                Площадь цеха — 2 400 м². Полный производственный цикл: заготовительный участок, порошковая покраска, монтажный и испытательный участки. Оборудование RITTAL, Schneider Electric, ABB.
              </p>
              <div className="relative">
                <img src={FACTORY_IMG} alt="Производственный цех" className="w-full aspect-video object-cover" />
                <div className="absolute inset-0 bg-[#C8102E]/10" />
              </div>
            </div>
            <div>
              <img src={PRODUCT_IMG} alt="Электрощит" className="w-full aspect-square object-cover mb-8" />
              <div className="space-y-0">
                {PRODUCTION_STEPS.map((s, i) => (
                  <div key={i} className="flex gap-5 py-4 border-b border-white/10">
                    <span className="font-oswald text-[#C8102E] text-sm font-medium w-8 flex-shrink-0 mt-0.5">{s.step}</span>
                    <div>
                      <div className="font-medium text-sm mb-0.5">{s.title}</div>
                      <div className="text-white/50 text-xs leading-relaxed">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <div className="tag">Портфолио</div>
              <h2 className="font-oswald text-4xl sm:text-5xl font-semibold tracking-tight">Реализованные проекты</h2>
            </div>
            <span className="text-[#8A8A8A] text-sm">Показаны последние 6 объектов</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
            {PROJECTS.map((p, i) => (
              <div key={i} className="bg-white p-7 hover:bg-[#F5F5F3] transition-colors group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs text-[#C8102E] font-medium tracking-widest uppercase">{p.sector}</span>
                  <span className="text-xs text-[#8A8A8A]">{p.year}</span>
                </div>
                <h3 className="font-oswald text-xl font-medium mb-2">{p.title}</h3>
                <p className="text-[#8A8A8A] text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-sm font-medium text-[#0F0F0F] group-hover:text-[#C8102E] transition-colors">
                  Подробнее <Icon name="ArrowRight" size={14} className="mt-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCS ── */}
      <section id="docs" className="py-24 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <div className="tag">Материалы</div>
              <h2 className="font-oswald text-4xl font-semibold tracking-tight mb-4">Документация и поддержка</h2>
              <p className="text-[#8A8A8A] leading-relaxed mb-6">
                Скачайте опросные листы для подготовки технического задания. Наш инженер свяжется с вами в течение рабочего дня.
              </p>
              <div className="flex items-center gap-3 p-4 bg-white border-l-2 border-[#C8102E]">
                <Icon name="Headphones" size={20} className="text-[#C8102E] flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">Техническая консультация</div>
                  <div className="text-xs text-[#8A8A8A]">Бесплатно для проектировщиков</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 space-y-2">
              {DOCS.map((doc, i) => (
                <div key={i} className="flex items-center justify-between bg-white px-5 py-4 hover:shadow-sm transition-shadow group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#F5F5F3] flex items-center justify-center flex-shrink-0">
                      <Icon name="FileText" size={15} className="text-[#C8102E]" />
                    </div>
                    <span className="text-sm font-medium">{doc.title}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[#8A8A8A]">
                    <span className="font-medium text-[#0F0F0F]">{doc.format}</span>
                    <span>{doc.size}</span>
                    <Icon name="Download" size={15} className="text-[#8A8A8A] group-hover:text-[#C8102E] transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAST CALC ── */}
      <section id="calc" className="py-24 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="tag">Бесплатно</div>
              <h2 className="font-oswald text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Быстрый расчёт стоимости</h2>
              <p className="text-[#8A8A8A] leading-relaxed mb-8">
                Заполните форму — инженер подготовит коммерческое предложение в течение одного рабочего дня. Также можете прислать опросный лист или ТЗ.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "Clock", text: "Ответ в течение 1 рабочего дня" },
                  { icon: "FileCheck", text: "Готовое КП с ценами и сроками" },
                  { icon: "Phone", text: "Проконсультируем по техническим вопросам" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <Icon name={item.icon} size={16} className="text-[#C8102E] flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F5F5F3] p-8 lg:p-10">
              {formSent ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-[#C8102E] flex items-center justify-center mx-auto mb-4">
                    <Icon name="Check" size={24} className="text-white" />
                  </div>
                  <h3 className="font-oswald text-2xl font-semibold mb-2">Заявка принята!</h3>
                  <p className="text-[#8A8A8A] text-sm">Наш инженер свяжется с вами в течение рабочего дня</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest mb-1.5 text-[#8A8A8A]">Ваше имя *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-[#C8102E] transition-colors"
                      placeholder="Иван Петров"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest mb-1.5 text-[#8A8A8A]">Телефон *</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-[#C8102E] transition-colors"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest mb-1.5 text-[#8A8A8A]">Тип оборудования</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-[#C8102E] transition-colors"
                    >
                      <option value="">Выберите тип...</option>
                      <option>ВРУ</option>
                      <option>АВР</option>
                      <option>Щит управления (ЩУА)</option>
                      <option>КТП</option>
                      <option>Другое / не определился</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest mb-1.5 text-[#8A8A8A]">Краткое описание объекта</label>
                    <textarea
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      rows={3}
                      className="w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-[#C8102E] transition-colors resize-none"
                      placeholder="Промышленный объект, мощность, ток, особые требования..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#C8102E] text-white font-medium py-4 hover:bg-[#A50D25] transition-colors text-sm tracking-wide"
                  >
                    Отправить заявку на расчёт
                  </button>
                  <p className="text-[10px] text-[#8A8A8A] text-center leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/10">
            <div className="bg-[#F5F5F3] p-8">
              <div className="font-oswald text-lg font-medium mb-2">Офис и шоу-рум</div>
              <p className="text-sm text-[#8A8A8A] mb-4">г. Москва, ул. Производственная, д. 12, стр. 1<br/>БЦ «Технопарк», 3-й этаж, офис 301</p>
              <div className="text-sm text-[#8A8A8A]">
                <div className="mb-1"><span className="font-medium text-[#0F0F0F]">Метро:</span> Автозаводская (10 мин. пешком)</div>
                <div><span className="font-medium text-[#0F0F0F]">Парковка:</span> бесплатная, 50 мест</div>
              </div>
            </div>
            <div className="bg-[#F5F5F3] p-8">
              <div className="font-oswald text-lg font-medium mb-2">Производственный цех</div>
              <p className="text-sm text-[#8A8A8A] mb-4">г. Екатеринбург</p>
              <div className="text-sm text-[#8A8A8A]">
                <div className="mb-1"><span className="font-medium text-[#0F0F0F]">Посещение:</span> по предварительной договорённости</div>
                <div><span className="font-medium text-[#0F0F0F]">Режим работы:</span> Пн–Пт, 8:00–17:00</div>
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
    </div>
  );
}