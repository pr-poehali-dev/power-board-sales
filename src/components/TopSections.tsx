import { useState } from "react";
import Icon from "@/components/ui/icon";

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

const HERO_IMG = "https://cdn.poehali.dev/projects/922fd10c-e674-4f64-9393-50f46933157e/bucket/dcf22d4a-4233-4ec2-895a-dbcc750bd69e.png";

interface Props {
  scrollTo: (href: string) => void;
}

export default function TopSections({ scrollTo }: Props) {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
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
    </>
  );
}