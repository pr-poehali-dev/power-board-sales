import { useState } from "react";
import Icon from "@/components/ui/icon";

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

const PRODUCT_IMG = "https://cdn.poehali.dev/projects/922fd10c-e674-4f64-9393-50f46933157e/files/d276bc88-e9b2-4129-8f90-88875fdda36e.jpg";
const FACTORY_IMG = "https://cdn.poehali.dev/projects/922fd10c-e674-4f64-9393-50f46933157e/files/0cd09980-7865-4f4c-95bf-8f309585ae26.jpg";

interface Props {
  scrollTo: (href: string) => void;
}

export default function MiddleSections({ scrollTo }: Props) {
  const [formData, setFormData] = useState({ name: "", phone: "", type: "", comment: "" });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <>
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
    </>
  );
}
