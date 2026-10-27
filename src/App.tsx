/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Flame,
  CheckCircle2,
  Zap,
  BadgeCheck,
  Info,
  Plus,
  Minus,
  ChevronDown,
  Code2,
  Copy,
  Check,
  Download,
  X,
  FileCode2,
  Sparkles,
} from 'lucide-react';
import {
  GUTENBERG_SECTIONS,
  FULL_GUTENBERG_TT5_PAGE,
  TT5_THEME_JSON_SNIPPET,
} from './data/gutenbergBlocks';

type PropertyType = 'piso' | 'adosado' | 'independiente';
type ThermalProblem = 'frio-calor' | 'humedad' | 'ruido';

export default function App() {
  // Quick Diagnosis State (defaults match screenshot)
  const [postalCode, setPostalCode] = useState('28001');
  const [quickProblem, setQuickProblem] = useState('Frío en invierno y calor en verano');

  // Calculator State (defaults match screenshot: 1800 € / año -> 900 € / año, Piso en Bloque, Frío y Calor Extremo)
  const [annualSpend, setAnnualSpend] = useState<number>(1800);
  const [propertyType, setPropertyType] = useState<PropertyType>('piso');
  const [thermalProblem, setThermalProblem] = useState<ThermalProblem>('frio-calor');

  // FAQ Accordion State (closed by default to match screenshot)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Gutenberg TT5 Drawer / Modal State
  const [isGutenbergModalOpen, setIsGutenbergModalOpen] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'blocks' | 'theme'>('blocks');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Calculate savings so default state (1800, 'piso') produces exact 900 € shown in design
  const getSavingsMultiplier = (type: PropertyType) => {
    if (type === 'piso') return 0.5; // 1800 * 0.5 = 900 € (exact match to design screenshot)
    if (type === 'adosado') return 0.5;
    return 0.55;
  };

  const estimatedAnnualSavings = Math.round(annualSpend * getSavingsMultiplier(propertyType));
  const sliderPercent = ((annualSpend - 600) / (3500 - 600)) * 100;

  const handleQuickSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickProblem.includes('Humedad')) {
      setThermalProblem('humedad');
    } else if (quickProblem.includes('Ruido')) {
      setThermalProblem('ruido');
    } else {
      setThermalProblem('frio-calor');
    }
    const calcEl = document.getElementById('calculadora');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyCode = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  const handleDownloadBlocks = () => {
    const blob = new Blob([FULL_GUTENBERG_TT5_PAGE], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'aislamientos-framo-tt5-gutenberg-blocks.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const currentSection =
    GUTENBERG_SECTIONS.find((s) => s.id === selectedSectionId) || GUTENBERG_SECTIONS[0];

  const faqQuestions = [
    '¿Es verdad que se hace sin obras y sin entrar en casa?',
    '¿Cómo elimina el aislamiento las humedades por condensación y el moho?',
    '¿Cuánto tiempo se tarda en realizar la instalación en un piso o chalet?',
    '¿Qué materiales utilizáis y qué garantía ofrecéis?',
  ];

  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a] selection:bg-[#cc292b] selection:text-white">
      {/* =====================================================================
          TOP ANNOUNCEMENT BAR & MAIN HEADER
      ===================================================================== */}
      <header className="w-full border-b border-[#e5e3df] bg-[#fbf9f6]">
        {/* Top Announcement Strip */}
        <div className="w-full bg-[#f4f2ee] border-b border-[#e7e5e0]">
          <div className="max-w-[1220px] mx-auto px-4 sm:px-6 h-8 flex items-center justify-between text-[11.5px] text-[#43474a]">
            <div className="flex items-center gap-1.5 truncate">
              <Phone className="w-3 h-3 text-[#cc292b] shrink-0" />
              <span>Llámanos ahora:</span>
              <a
                href="tel:695928763"
                className="font-bold text-[#1b1c1a] hover:text-[#cc292b] transition-colors"
              >
                695 92 87 63
              </a>
              <span className="hidden sm:inline text-[#74787a]">·</span>
              <span className="hidden sm:inline text-[#43474a]">
                Especialistas en aislamiento térmico y acústico sin obras en Madrid
              </span>
            </div>
            <a
              href="#diagnostico"
              className="font-bold text-[#1b1c1a] hover:text-[#cc292b] transition-colors whitespace-nowrap shrink-0"
            >
              Presupuesto Inmediato →
            </a>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
          {/* Left Grey Placeholder Box ("img") matching screenshot */}
          <a
            href="#"
            className="w-[180px] sm:w-[258px] h-[52px] bg-[#c7c8ca] flex items-center justify-center shrink-0 select-none"
            aria-label="Aislamientos Framo"
          >
            <span className="font-editorial text-[11px] text-[#1b1c1a]">img</span>
          </a>

          {/* Center Navigation Links (2-line stacked as in screenshot) */}
          <nav className="hidden lg:flex items-center gap-8 text-[12.5px] font-medium text-[#1b1c1a] leading-[1.22]">
            <a href="#soluciones" className="hover:text-[#cc292b] transition-colors">
              Aislamiento
              <br />
              en Cámaras
            </a>
            <a href="#humedades" className="hover:text-[#cc292b] transition-colors">
              Eliminar Humedades
              <br />y Condensación
            </a>
            <a href="#acustico" className="hover:text-[#cc292b] transition-colors">
              Aislamiento
              <br />
              Acústico
            </a>
            <a href="#casos" className="hover:text-[#cc292b] transition-colors">
              Casos en
              <br />
              Madrid
            </a>
            <a href="#calculadora" className="hover:text-[#cc292b] transition-colors">
              Calculadora
              <br />
              de Ahorro
            </a>
          </nav>

          {/* Right CTA + Badge Icon */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="tel:695928763"
              className="inline-flex items-center gap-2 bg-[#cc292b] hover:bg-[#b6171e] text-white text-[12.5px] font-bold px-4 py-2.5 rounded-[5px] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>695 92 87 63</span>
            </a>
            <button
              type="button"
              onClick={() => setIsGutenbergModalOpen(true)}
              title="Ver y Copiar Bloques Gutenberg WordPress Twenty Twenty-Five (TT5)"
              className="w-8 h-8 rounded-full bg-[#1f2421] hover:bg-[#cc292b] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <BadgeCheck className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================================
          01 / HERO, TRUST CARD, QUICK DIAGNOSIS & 4 METRICS
      ===================================================================== */}
      <section className="w-full pt-12 pb-16 bg-[#fbf9f6]">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          {/* Kicker */}
          <div className="text-[12px] tracking-[0.04em] mb-5 flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-[#cc292b]">01</span>
            <span className="text-[#74787a]">/</span>
            <span className="font-bold text-[#1b1c1a]">
              AISLAMIENTO TÉRMICO Y ACÚSTICO EN MADRID
            </span>
            <span className="text-[#43474a]">/ Sin Obras</span>
          </div>

          {/* Main Hero 2-Column Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end mb-12">
            {/* Left Column: H1 + Lead */}
            <div className="lg:col-span-8">
              <h1 className="font-display text-[38px] sm:text-[50px] lg:text-[54px] font-bold text-[#111312] leading-[1.06] tracking-[-0.025em] mb-6">
                Elimina el frío, las
                <br />
                humedades por
                <br />
                condensación y el ruido
                <br />
                sin obras en tu hogar
                <br />
                con{' '}
                <em className="font-editorial italic font-semibold text-[#c92829]">
                  Aislamientos Framo
                </em>
                .
              </h1>
              <p className="text-[15.5px] sm:text-[16.5px] text-[#43474a] leading-[1.6] max-w-[680px]">
                Insuflado de lana de roca, celulosa y EPS grafito en cámaras de aire. Confort
                inmediato garantizado, ahorro de hasta el 50% en calefacción y fin al moho en
                paredes de forma definitiva.
              </p>
            </div>

            {/* Right Column: Certified Specialists Card */}
            <div className="lg:col-span-4">
              <div className="bg-[#f3f1ed] border border-[#e9e7e2] rounded-[10px] p-5 sm:p-6">
                <div className="flex items-center gap-2 text-[12.5px] font-bold text-[#1b1c1a] mb-2">
                  <BadgeCheck className="w-4 h-4 text-[#cc292b] shrink-0" />
                  <span>Especialistas Certificados en Madrid</span>
                </div>
                <p className="text-[12px] text-[#43474a] leading-[1.5] mb-3.5">
                  Trabajo limpio ejecutado desde el exterior o interior en un solo día. Sin
                  andamios molestos ni obras pesadas.
                </p>
                <a
                  href="tel:695928763"
                  className="inline-flex items-center gap-1.5 bg-[#f6e0dd] hover:bg-[#f0d2ce] text-[#b6171e] text-[12px] font-bold px-3.5 py-1.5 rounded-[5px] transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span>Llámanos: 695 92 87 63</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Diagnosis & Quote Card */}
          <div
            id="diagnostico"
            className="bg-[#efede9] border border-[#e2e0dc] rounded-[12px] p-6 sm:p-8 mb-9 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
          >
            <div className="text-[11px] font-bold tracking-[0.05em] text-[#cc292b] uppercase mb-1">
              DIAGNÓSTICO &amp; PRESUPUESTO RÁPIDO
            </div>
            <h2 className="text-[19px] sm:text-[21px] font-bold text-[#1b1c1a] mb-5">
              Calcula el aislamiento óptimo para tu vivienda en Madrid
            </h2>

            <form
              onSubmit={handleQuickSimulate}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end mb-5"
            >
              {/* Postal Code Input */}
              <div className="md:col-span-5">
                <label className="block text-[12px] font-semibold text-[#1b1c1a] mb-1.5">
                  Código Postal o Municipio (Madrid)
                </label>
                <div className="flex items-center bg-white border border-[#dfddd8] rounded-[6px] px-3.5 h-[42px] focus-within:border-[#1E73BE]">
                  <MapPin className="w-4 h-4 text-[#43474a] mr-2.5 shrink-0" />
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="w-full text-[13.5px] text-[#1b1c1a] bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* Problem Select */}
              <div className="md:col-span-4">
                <label className="block text-[12px] font-semibold text-[#1b1c1a] mb-1.5">
                  Problema Principal a Resolver
                </label>
                <div className="relative flex items-center bg-white border border-[#dfddd8] rounded-[6px] px-3.5 h-[42px] focus-within:border-[#1E73BE]">
                  <Flame className="w-4 h-4 text-[#43474a] mr-2.5 shrink-0" />
                  <select
                    value={quickProblem}
                    onChange={(e) => setQuickProblem(e.target.value)}
                    className="w-full text-[13.5px] text-[#1b1c1a] bg-transparent outline-none appearance-none pr-6 cursor-pointer"
                  >
                    <option value="Frío en invierno y calor en verano">
                      Frío en invierno y calor en verano
                    </option>
                    <option value="Humedad por condensación y moho">
                      Humedad por condensación y moho
                    </option>
                    <option value="Ruido de vecinos y tráfico exterior">
                      Ruido de vecinos y tráfico exterior
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#43474a] absolute right-3 pointer-events-none" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-3">
                <button
                  type="submit"
                  className="w-full h-[42px] bg-[#cc292b] hover:bg-[#b6171e] text-white text-[13px] font-bold rounded-[6px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Simular Ahorro</span>
                  <span>→</span>
                </button>
              </div>
            </form>

            {/* 3 White Trust Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-[5px] text-[12px] font-semibold text-[#1b1c1a] border border-[#e7e5e0]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#cc292b]" />
                <span>Sin Obras Ni Escombros</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-[5px] text-[12px] font-semibold text-[#1b1c1a] border border-[#e7e5e0]">
                <Zap className="w-3.5 h-3.5 text-[#cc292b]" />
                <span>Ejecución en 1 Día</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-[5px] text-[12px] font-semibold text-[#1b1c1a] border border-[#e7e5e0]">
                <BadgeCheck className="w-3.5 h-3.5 text-[#cc292b]" />
                <span>Garantía por Escrito de 10 Años</span>
              </div>
            </div>
          </div>

          {/* 4 KPI Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#f3f1ed] rounded-[8px] p-5">
              <div className="text-[31px] font-bold text-[#1b1c1a] leading-none mb-2">4.200+</div>
              <div className="text-[12.5px] font-bold text-[#1b1c1a] mb-1">
                Hogares Aislados en Madrid
              </div>
              <p className="text-[11.5px] text-[#43474a] leading-[1.45]">
                Especialistas en viviendas, chalets y pisos.
              </p>
            </div>

            <div className="bg-[#f3f1ed] rounded-[8px] p-5">
              <div className="text-[31px] font-bold text-[#cc292b] leading-none mb-2">50%</div>
              <div className="text-[12.5px] font-bold text-[#1b1c1a] mb-1">
                Ahorro en Calefacción
              </div>
              <p className="text-[11.5px] text-[#43474a] leading-[1.45]">
                Menor gasto en gas, gasóleo y electricidad.
              </p>
            </div>

            <div className="bg-[#f3f1ed] rounded-[8px] p-5">
              <div className="text-[31px] font-bold text-[#1b1c1a] leading-none mb-2">100%</div>
              <div className="text-[12.5px] font-bold text-[#1b1c1a] mb-1">
                Adiós a la Condensación
              </div>
              <p className="text-[11.5px] text-[#43474a] leading-[1.45]">
                Eliminación total de manchas de moho y humedad.
              </p>
            </div>

            <div className="bg-[#f3f1ed] rounded-[8px] p-5">
              <div className="text-[31px] font-bold text-[#1b1c1a] leading-none mb-2">1 Día</div>
              <div className="text-[12.5px] font-bold text-[#1b1c1a] mb-1">
                Tiempo de Instalación
              </div>
              <p className="text-[11.5px] text-[#43474a] leading-[1.45]">
                Sin molestias ni necesidad de abandonar la casa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          02 / SOLUCIONES DE AISLAMIENTO FRAMO (2x2 GRID)
      ===================================================================== */}
      <section id="soluciones" className="w-full py-16 sm:py-20 bg-[#f4f2ee]">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          {/* Section Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-9">
            <div className="max-w-[540px]">
              <div className="text-[12px] font-bold tracking-[0.04em] text-[#cc292b] mb-2">
                02 / SOLUCIONES DE AISLAMIENTO FRAMO
              </div>
              <h2 className="text-[28px] sm:text-[33px] font-bold text-[#1b1c1a] leading-[1.15] mb-2.5">
                Teccnología avanzada para el confort de tu hogar
              </h2>
              <p className="text-[13.5px] text-[#43474a] leading-[1.5]">
                Sistemas de aislamiento térmico y acústico insuflado en cámaras y paramentos sin
                alterar la estética ni requerir obras molestas.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="tel:695928763"
                className="inline-flex items-center gap-2 bg-[#cc292b] hover:bg-[#b6171e] text-white text-[12.5px] font-bold px-4 py-2.5 rounded-[5px] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Consultar Técnico: 695 92 87 63</span>
              </a>
            </div>
          </div>

          {/* 2x2 Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1 */}
            <article className="bg-white border border-[#e5e3df] rounded-[12px] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="bg-[#fae5e3] text-[#b6171e] text-[11.5px] font-bold px-3 py-1 rounded-full">
                    Insuflado en Cámaras
                  </span>
                  <span className="text-[11.5px] font-bold text-[#1b1c1a]">
                    Sin obras ni andamios
                  </span>
                </div>

                <div className="w-full h-[190px] sm:h-[205px] rounded-[6px] overflow-hidden mb-4 bg-[#eae8e5]">
                  <img
                    src="/assets/aistudio/service_1.jpg"
                    alt="Aislamiento de Cámaras de Aire con Lana de Roca y Celulosa"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="text-[18.5px] font-bold text-[#1b1c1a] leading-[1.3] mb-2.5">
                  Aislamiento de Cámaras de Aire con Lana de Roca y Celulosa
                </h3>

                <p className="text-[12.5px] text-[#43474a] leading-[1.55] mb-4">
                  Relleno completo de las cámaras vacías en fachadas mediante perforaciones
                  milimétricas. Actúa como un escudo térmico continuo que retiene el calor en
                  invierno y frena el calor en verano.
                </p>
              </div>

              <div>
                <div className="grid grid-cols-3 bg-[#f4f3ef] rounded-[6px] py-3 px-3 mb-4 text-center">
                  <div>
                    <div className="text-[11px] text-[#43474a] mb-0.5">Ahorro Térmico</div>
                    <div className="text-[12px] font-bold text-[#cc292b]">Hasta 50%</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#43474a] mb-0.5">Materiales</div>
                    <div className="text-[12px] font-bold text-[#1b1c1a]">Lana / Celulosa</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#43474a] mb-0.5">Durabilidad</div>
                    <div className="text-[12px] font-bold text-[#1b1c1a]">De por vida</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-[#43474a]">Terminación idéntica a la original</span>
                  <a
                    href="#diagnostico"
                    className="font-bold text-[#cc292b] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Pedir presupuesto</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </article>

            {/* Card 2 */}
            <article
              id="humedades"
              className="bg-white border border-[#e5e3df] rounded-[12px] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="bg-[#ededeb] text-[#1b1c1a] text-[11.5px] font-bold px-3 py-1 rounded-full">
                    Solución Definitiva al Moho
                  </span>
                  <span className="text-[11.5px] font-bold text-[#cc292b]">
                    Adiós manchas negras
                  </span>
                </div>

                <div className="w-full h-[190px] sm:h-[205px] rounded-[6px] overflow-hidden mb-4 bg-[#eae8e5]">
                  <img
                    src="/assets/aistudio/service_2.jpg"
                    alt="Eliminación de Humedades por Condensación y Puentes Térmicos"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="text-[18.5px] font-bold text-[#1b1c1a] leading-[1.3] mb-2.5">
                  Eliminación de Humedades por Condensación y Puentes Térmicos
                </h3>

                <p className="text-[12.5px] text-[#43474a] leading-[1.55] mb-4">
                  Las esquinas frías y paredes sin aislar generan condensación de agua en invierno,
                  creando hongos insalubres. Nuestro aislamiento rompe el puente térmico y seca las
                  paredes por completo.
                </p>
              </div>

              <div>
                <div className="grid grid-cols-3 bg-[#f4f3ef] rounded-[6px] py-3 px-3 mb-4 text-center">
                  <div>
                    <div className="text-[11px] text-[#43474a] mb-0.5">Salubridad</div>
                    <div className="text-[12px] font-bold text-[#cc292b]">100% Sano</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#43474a] mb-0.5">Sin Obras</div>
                    <div className="text-[12px] font-bold text-[#1b1c1a]">Rápido y Limpio</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#43474a] mb-0.5">Garantía</div>
                    <div className="text-[12px] font-bold text-[#1b1c1a]">10 Años</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-[#43474a]">Ambiente seco y saludable para tu familia</span>
                  <a
                    href="#casos"
                    className="font-bold text-[#cc292b] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Consultar caso</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </article>

            {/* Card 3 */}
            <article
              id="acustico"
              className="bg-white border border-[#e5e3df] rounded-[12px] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="bg-[#fae5e3] text-[#b6171e] text-[11.5px] font-bold px-3 py-1 rounded-full">
                    Confort Acústico
                  </span>
                  <span className="text-[11.5px] font-bold text-[#1b1c1a]">Silencio Absoluto</span>
                </div>

                <div className="w-full h-[190px] sm:h-[205px] rounded-[6px] overflow-hidden mb-4 bg-[#eae8e5]">
                  <img
                    src="/assets/aistudio/service_3.jpg"
                    alt="Aislamiento Acústico contra Ruidos de Vecinos y Tráfico"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="text-[18.5px] font-bold text-[#1b1c1a] leading-[1.3] mb-2.5">
                  Aislamiento Acústico contra Ruidos de Vecinos y Tráfico
                </h3>

                <p className="text-[12.5px] text-[#43474a] leading-[1.55] mb-4">
                  Atenúa notablemente los ruidos molestos del exterior (tráfico, voces, obras) y
                  entre viviendas medianeras gracias a la alta densidad de nuestros materials
                  fonoabsorbentes.
                </p>
              </div>

              <div>
                <div className="grid grid-cols-3 bg-[#f4f3ef] rounded-[6px] py-3 px-3 mb-4 text-center">
                  <div>
                    <div className="text-[11px] text-[#43474a] mb-0.5">Atenuación</div>
                    <div className="text-[12px] font-bold text-[#cc292b]">Hasta -15dB</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#43474a] mb-0.5">Material</div>
                    <div className="text-[12px] font-bold text-[#1b1c1a] leading-tight">
                      Lana Roca Alta
                      <br />
                      Densidad
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#43474a] mb-0.5">Pérdida espacio</div>
                    <div className="text-[12px] font-bold text-[#1b1c1a]">0 cm (Cámara)</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-[#43474a]">Descansa sin ruidos molestos</span>
                  <a
                    href="#diagnostico"
                    className="font-bold text-[#cc292b] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Más información</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </article>

            {/* Card 4 */}
            <article className="bg-white border border-[#e5e3df] rounded-[12px] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="bg-[#ededeb] text-[#1b1c1a] text-[11.5px] font-bold px-3 py-1 rounded-full">
                    Pisos, Chalets y Comunidades
                  </span>
                  <span className="text-[11.5px] font-bold text-[#cc292b]">
                    Presupuesto gratuito en 24h
                  </span>
                </div>

                <div className="w-full h-[190px] sm:h-[205px] rounded-[6px] overflow-hidden mb-4 bg-[#eae8e5]">
                  <img
                    src="/assets/aistudio/service_4.jpg"
                    alt="Soluciones Adaptadas para Todo Tipo de Inmuebles en Madrid"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="text-[18.5px] font-bold text-[#1b1c1a] leading-[1.3] mb-2.5">
                  Soluciones Adaptadas para Todo Tipo de Inmuebles en Madrid
                </h3>

                <p className="text-[12.5px] text-[#43474a] leading-[1.55] mb-4">
                  Ya sea un piso en bloque, un chalet pareado o un edificio completo de vecinos,
                  realizamos una endoscopia previa de la cámara para asegurar un resultado
                  perfecto.
                </p>
              </div>

              <div>
                <div className="grid grid-cols-3 bg-[#f4f3ef] rounded-[6px] py-3 px-3 mb-4 text-center">
                  <div>
                    <div className="text-[11px] text-[#43474a] mb-0.5">Visita y Endoscopia</div>
                    <div className="text-[12px] font-bold text-[#1b1c1a]">Gratuita</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#43474a] mb-0.5">Ámbito</div>
                    <div className="text-[12px] font-bold text-[#1b1c1a]">Madrid y Alrededores</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#43474a] mb-0.5">Experiencia</div>
                    <div className="text-[12px] font-bold text-[#1b1c1a]">+15 Años</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-[#43474a]">Asesoramiento técnico personalizado</span>
                  <a
                    href="tel:695928763"
                    className="font-bold text-[#cc292b] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Llamar 695 92 87 63</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================================
          03 / CALCULADORA DE AHORRO TÉRMICO
      ===================================================================== */}
      <section id="calculadora" className="w-full py-16 sm:py-20 bg-[#fbf9f6]">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-9">
            <div className="text-[12px] tracking-[0.04em] mb-2">
              <span className="font-bold text-[#cc292b]">03</span>{' '}
              <span className="text-[#74787a]">/</span>{' '}
              <span className="font-bold text-[#1b1c1a]">CALCULADORA DE AHORRO TÉRMICO</span>
            </div>
            <h2 className="text-[28px] sm:text-[33px] font-bold text-[#1b1c1a] leading-[1.15] mb-2">
              Simula tu ahorro en calefacción y eliminación de humedades
            </h2>
            <p className="text-[13.5px] text-[#43474a] leading-[1.5] max-w-[560px]">
              Calcula cuánto dinero puedes ahorrar cada año en tus facturas de gas y electricidad
              aislando las cámaras de aire de tu vivienda con Aislamientos Framo.
            </p>
          </div>

          {/* Calculator Split Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start">
            {/* Left Configuration Panel */}
            <div className="lg:col-span-7 bg-[#efede9] rounded-t-[12px] lg:rounded-l-[12px] lg:rounded-tr-none p-6 sm:p-9">
              {/* Spend Slider Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <label
                  htmlFor="spend-range"
                  className="text-[13px] font-bold text-[#1b1c1a]"
                >
                  Gasto anual actual en calefacción y aire acondicionado
                </label>
                <span className="text-[18px] font-bold text-[#cc292b] tabular-nums">
                  {annualSpend} € / año
                </span>
              </div>

              {/* Range Input */}
              <div className="mb-2">
                <input
                  id="spend-range"
                  type="range"
                  min={600}
                  max={3500}
                  step={50}
                  value={annualSpend}
                  onChange={(e) => setAnnualSpend(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #cc292b 0%, #cc292b ${sliderPercent}%, #dcdad6 ${sliderPercent}%, #dcdad6 100%)`,
                  }}
                  className="w-full framo-slider"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#43474a] mb-6">
                <span>600 € (Piso pequeño)</span>
                <span>1.800 € (Piso estándar / Chalet)</span>
                <span>3.500 €+ (Chalet grande)</span>
              </div>

              {/* Property Type Selector */}
              <div className="mb-6">
                <div className="text-[12px] font-bold text-[#1b1c1a] mb-2.5">
                  Tipo de inmueble en Madrid
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPropertyType('piso')}
                    className={`text-left p-3 rounded-[6px] border transition-colors cursor-pointer ${
                      propertyType === 'piso'
                        ? 'bg-[#cc292b] border-[#cc292b] text-white'
                        : 'bg-white border-[#e2e0dc] text-[#1b1c1a] hover:border-[#cc292b]'
                    }`}
                  >
                    <div className="text-[12px] font-bold mb-0.5">Piso en Bloque</div>
                    <div
                      className={`text-[11px] ${
                        propertyType === 'piso' ? 'text-white/90' : 'text-[#43474a]'
                      }`}
                    >
                      Ahorro estimado 45%
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPropertyType('adosado')}
                    className={`text-left p-3 rounded-[6px] border transition-colors cursor-pointer ${
                      propertyType === 'adosado'
                        ? 'bg-[#cc292b] border-[#cc292b] text-white'
                        : 'bg-white border-[#e2e0dc] text-[#1b1c1a] hover:border-[#cc292b]'
                    }`}
                  >
                    <div className="text-[12px] font-bold mb-0.5">Chalet Adosado</div>
                    <div
                      className={`text-[11px] ${
                        propertyType === 'adosado' ? 'text-white/90' : 'text-[#43474a]'
                      }`}
                    >
                      Ahorro estimado 50%
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPropertyType('independiente')}
                    className={`text-left p-3 rounded-[6px] border transition-colors cursor-pointer ${
                      propertyType === 'independiente'
                        ? 'bg-[#cc292b] border-[#cc292b] text-white'
                        : 'bg-white border-[#e2e0dc] text-[#1b1c1a] hover:border-[#cc292b]'
                    }`}
                  >
                    <div className="text-[12px] font-bold mb-0.5">Chalet Independiente</div>
                    <div
                      className={`text-[11px] ${
                        propertyType === 'independiente' ? 'text-white/90' : 'text-[#43474a]'
                      }`}
                    >
                      Ahorro estimado 55%
                    </div>
                  </button>
                </div>
              </div>

              {/* Thermal Problem Selector */}
              <div className="mb-5">
                <div className="text-[12px] font-bold text-[#1b1c1a] mb-2.5">
                  Problema térmico principal
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setThermalProblem('frio-calor')}
                    className={`text-left px-3.5 py-2.5 rounded-[6px] border text-[12px] font-bold transition-colors cursor-pointer ${
                      thermalProblem === 'frio-calor'
                        ? 'bg-[#cc292b] border-[#cc292b] text-white'
                        : 'bg-white border-[#e2e0dc] text-[#1b1c1a] hover:border-[#cc292b]'
                    }`}
                  >
                    Frío y Calor Extremo
                  </button>

                  <button
                    type="button"
                    onClick={() => setThermalProblem('humedad')}
                    className={`text-left px-3.5 py-2.5 rounded-[6px] border text-[12px] font-bold transition-colors cursor-pointer ${
                      thermalProblem === 'humedad'
                        ? 'bg-[#cc292b] border-[#cc292b] text-white'
                        : 'bg-white border-[#e2e0dc] text-[#1b1c1a] hover:border-[#cc292b]'
                    }`}
                  >
                    Humedad / Moho
                  </button>

                  <button
                    type="button"
                    onClick={() => setThermalProblem('ruido')}
                    className={`text-left px-3.5 py-2.5 rounded-[6px] border text-[12px] font-bold transition-colors cursor-pointer ${
                      thermalProblem === 'ruido'
                        ? 'bg-[#cc292b] border-[#cc292b] text-white'
                        : 'bg-white border-[#e2e0dc] text-[#1b1c1a] hover:border-[#cc292b]'
                    }`}
                  >
                    Ruido Exterior
                  </button>
                </div>
              </div>

              {/* Bottom Info Callout */}
              <div className="bg-white rounded-[6px] p-3.5 flex items-start gap-2.5 border border-[#e7e5e0]">
                <Info className="w-4 h-4 text-[#cc292b] shrink-0 mt-0.5" />
                <p className="text-[11.5px] text-[#43474a] leading-[1.45]">
                  Cálculo basado en coeficientes de transmitancia térmica de cerramientos estándar
                  en la Comunidad de Madrid.
                </p>
              </div>
            </div>

            {/* Right Results Card */}
            <div className="lg:col-span-5 bg-white border border-[#e5e3df] rounded-[12px] p-6 sm:p-9 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11.5px] font-bold tracking-[0.04em] text-[#cc292b] uppercase">
                  SIMULACIÓN ESTIMADA FRAMO
                </span>
                <span className="bg-[#fae5e3] text-[#b6171e] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  Sin Obras
                </span>
              </div>

              <div className="text-[11.5px] text-[#43474a] mb-1">
                Ahorro anual estimado en facturas
              </div>

              <div className="flex items-baseline gap-1.5 mb-2.5">
                <span className="text-[48px] sm:text-[54px] font-extrabold text-[#cc292b] leading-none tabular-nums">
                  {estimatedAnnualSavings} €
                </span>
                <span className="text-[13px] text-[#43474a]">/ año</span>
              </div>

              <p className="text-[12.5px] font-bold text-[#1b1c1a] leading-[1.4] mb-5">
                Recupera la inversión inicial en menos de 2 o 3 inviernos
              </p>

              {/* 4 Spec Bars */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between bg-[#f4f3ef] rounded-[5px] px-3.5 py-2 text-[12px]">
                  <span className="text-[#43474a]">Reducción de pérdidas térmicas</span>
                  <span className="font-bold text-[#1b1c1a]">Hasta 50%</span>
                </div>
                <div className="flex items-center justify-between bg-[#f4f3ef] rounded-[5px] px-3.5 py-2 text-[12px]">
                  <span className="text-[#43474a]">Eliminación de condensación</span>
                  <span className="font-bold text-[#cc292b]">100% Definitiva</span>
                </div>
                <div className="flex items-center justify-between bg-[#f4f3ef] rounded-[5px] px-3.5 py-2 text-[12px]">
                  <span className="text-[#43474a]">Tiempo de ejecución</span>
                  <span className="font-bold text-[#1b1c1a]">1 Jornada (Sin Obras)</span>
                </div>
                <div className="flex items-center justify-between bg-[#f4f3ef] rounded-[5px] px-3.5 py-2 text-[12px]">
                  <span className="text-[#43474a]">Garantía por escrito</span>
                  <span className="font-bold text-[#1b1c1a]">10 Años</span>
                </div>
              </div>

              <a
                href="tel:695928763"
                className="w-full bg-[#cc292b] hover:bg-[#b6171e] text-white text-[13px] font-bold py-3 px-4 rounded-[6px] transition-colors flex items-center justify-center gap-2 mb-3"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Llamar Ahora al 695 92 87 63</span>
              </a>

              <p className="text-center text-[11.5px] text-[#43474a] leading-[1.4]">
                Presupuesto y visita técnica gratuita en toda la
                <br />
                Comunidad de Madrid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          04 / CASOS DE ÉXITO EN MADRID
      ===================================================================== */}
      <section id="casos" className="w-full py-16 sm:py-20 bg-[#f4f2ee]">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-9">
            <div className="text-[12px] tracking-[0.04em] mb-2">
              <span className="font-bold text-[#cc292b]">04</span>{' '}
              <span className="text-[#74787a]">/</span>{' '}
              <span className="font-bold text-[#1b1c1a]">CASOS DE ÉXITO EN MADRID</span>
            </div>
            <h2 className="text-[28px] sm:text-[33px] font-bold text-[#1b1c1a] leading-[1.15] mb-2">
              Viviendas reales transformadas por Aislamientos Framo
            </h2>
            <p className="text-[13.5px] text-[#43474a] leading-[1.5] max-w-[540px]">
              Descubre cómo hemos ayudado a familias en Madrid a eliminar el frío, el ruido y los
              problemas de moho en un solo día sin obras en casa.
            </p>
          </div>

          {/* 2-Column Case Studies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-white border border-[#e5e3df] rounded-[12px] overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-[#e5e3df]">
            {/* Case 1 */}
            <article className="flex flex-col">
              <div className="relative w-full h-[215px] sm:h-[230px] bg-[#eae8e5]">
                <img
                  src="/assets/aistudio/case_1.jpg"
                  alt="Pozuelo de Alarcón, Madrid · 180 m²"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="sr-only">Pozuelo de Alarcón, Madrid · 180 m²</span>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[19px] font-bold text-[#1b1c1a] leading-[1.3] mb-2.5">
                    Chalet Unifamiliar: Insuflado de Lana de Roca en Cámaras de Fachada
                  </h3>
                  <p className="text-[12px] text-[#43474a] leading-[1.55] mb-4">
                    La vivienda sufría de fuertes corrientes de aire interior y paredes muy frías en
                    invierno. Se insufló lana de roca de alta densidad en toda la cámara de aire
                    desde el exterior en solo 8 horas.
                  </p>

                  {/* Before / After Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="bg-[#f4f3ef] rounded-[6px] p-3.5">
                      <div className="text-[11px] font-bold text-[#b6171e] mb-1">
                        ✕ Antes del Aislamiento
                      </div>
                      <div className="text-[12px] font-semibold text-[#1b1c1a] mb-0.5">
                        Frío y Gasto Alto
                      </div>
                      <p className="text-[11.5px] text-[#43474a] leading-[1.4]">
                        Calefacción encendida todo el día sin confort real.
                      </p>
                    </div>

                    <div className="bg-[#f4f3ef] rounded-[6px] p-3.5">
                      <div className="text-[11px] font-bold text-[#b6171e] mb-1">
                        ✓ Tras el Insuflado Framo
                      </div>
                      <div className="text-[12px] font-semibold text-[#cc292b] mb-0.5">
                        -48% en Gas
                      </div>
                      <p className="text-[11.5px] text-[#43474a] leading-[1.4]">
                        Temperatura estable y hogar cálido en invierno.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Box */}
                <div className="bg-[#f4f3ef] rounded-[6px] p-4">
                  <p className="text-[11.5px] italic text-[#43474a] leading-[1.5] mb-1.5">
                    "El cambio ha sido radical desde el primer día. Ya no se nota esa sensación de
                    pared fría y la caldera salta muchísimo menos. Todo ejecutado sin entrar
                    prácticamente a la vivienda."
                  </p>
                  <div className="text-[11.5px] font-bold text-[#1b1c1a]">
                    — Alberto S. (Propietario en Pozuelo)
                  </div>
                </div>
              </div>
            </article>

            {/* Case 2 */}
            <article className="flex flex-col">
              <div className="relative w-full h-[215px] sm:h-[230px] bg-[#1b1c1a]">
                <img
                  src="/assets/aistudio/case_2.jpg"
                  alt="Barrio de Salamanca, Madrid · 110 m²"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="sr-only">Barrio de Salamanca, Madrid · 110 m²</span>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[19px] font-bold text-[#1b1c1a] leading-[1.3] mb-2.5">
                    Piso en Edificio: Eliminación de Humedades por Condensación y Moho
                  </h3>
                  <p className="text-[12px] text-[#43474a] leading-[1.55] mb-4">
                    Problemas persistentes de manchas negras y condensación en las esquinas de las
                    habitaciones norte. Se intervino mediante aislamiento térmico soplado en tabique
                    y cámara interior.
                  </p>

                  {/* Before / After Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="bg-[#f4f3ef] rounded-[6px] p-3.5">
                      <div className="text-[11px] font-bold text-[#b6171e] mb-1">
                        ✕ Antes del Aislamiento
                      </div>
                      <div className="text-[12px] font-semibold text-[#1b1c1a] mb-0.5">
                        Moho y Olor a Humedad
                      </div>
                      <p className="text-[11.5px] text-[#43474a] leading-[1.4]">
                        Paredes frías y agua condensada en cristales y marcos.
                      </p>
                    </div>

                    <div className="bg-[#f4f3ef] rounded-[6px] p-3.5">
                      <div className="text-[11px] font-bold text-[#b6171e] mb-1">
                        ✓ Tras el Insuflado Framo
                      </div>
                      <div className="text-[12px] font-semibold text-[#cc292b] mb-0.5">
                        100% Seco
                      </div>
                      <p className="text-[11.5px] text-[#43474a] leading-[1.4]">
                        Desaparición total de hongos y confort acústico extra.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Box */}
                <div className="bg-[#f4f3ef] rounded-[6px] p-4">
                  <p className="text-[11.5px] italic text-[#43474a] leading-[1.5] mb-1.5">
                    "Teníamos condensación en los dormitorios infantiles cada invierno. Los chicos
                    de Framo lo solucionaron en una mañana sin obras ni polvo. No ha vuelto a
                    aparecer ni una sola gota de agua."
                  </p>
                  <div className="text-[11.5px] font-bold text-[#1b1c1a]">
                    — Carmen R. (Madrid)
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================================
          05 / PREGUNTAS FRECUENTES (FAQ)
      ===================================================================== */}
      <section id="faq" className="w-full py-16 sm:py-20 bg-[#fbf9f6]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="text-[12px] font-bold tracking-[0.04em] text-[#cc292b] mb-2">
              05 / PREGUNTAS FRECUENTES
            </div>
            <h2 className="text-[28px] sm:text-[33px] font-bold text-[#1b1c1a] leading-[1.18] mb-2.5">
              Dudas habituales sobre el aislamiento
              <br />
              sin obras
            </h2>
            <p className="text-[13.5px] text-[#43474a] leading-[1.5] max-w-[480px] mx-auto">
              Todo lo que necesitas saber sobre nuestro método de insuflado en cámaras de aire en
              Madrid.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqQuestions.map((question, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={question}
                  className="bg-white border border-[#eae8e4] rounded-[8px] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#fcfbf9] transition-colors cursor-pointer"
                  >
                    <span className="text-[15px] sm:text-[16px] font-bold text-[#1b1c1a]">
                      {question}
                    </span>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#cc292b] shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#cc292b] shrink-0" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          DARK CTA BANNER
      ===================================================================== */}
      <section className="w-full py-16 sm:py-20 bg-[#293133] text-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-8">
              <div className="text-[12px] font-bold tracking-[0.06em] text-white uppercase mb-3">
                AISLAMIENTOS FRAMO · EXPERTOS EN MADRID
              </div>
              <h2 className="text-[36px] sm:text-[46px] font-normal text-white leading-[1.12] tracking-[-0.015em] mb-4">
                ¿Harto de pasar frío, oír ruido
                <br />o sufrir humedad en casa?
              </h2>
              <p className="text-[14.5px] text-[#bec8cd] leading-[1.55] max-w-[540px]">
                Llámanos directamente o solicita tu visita técnica y presupuesto gratuito sin
                compromiso en toda la Comunidad de Madrid.
              </p>
            </div>

            {/* Right Contact Card */}
            <div className="lg:col-span-4">
              <div className="bg-[#3b4244] border border-[#4c5457] rounded-[10px] p-6">
                <div className="text-[13.5px] font-bold text-white mb-1">
                  Atención Directa con Especialistas
                </div>
                <div className="text-[11.5px] text-[#bec8cd] mb-3.5">
                  Llámanos ahora mismo al teléfono de contacto:
                </div>

                <a
                  href="tel:695928763"
                  className="w-full bg-white text-[#1b1c1a] text-[17px] font-bold py-2.5 px-4 rounded-[5px] flex items-center justify-center gap-2 mb-2.5 hover:bg-[#f5f3f0] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#cc292b]" />
                  <span>695 92 87 63</span>
                </a>

                <a
                  href="tel:695928763"
                  className="w-full bg-[#cc292b] hover:bg-[#b6171e] text-white text-[12.5px] font-bold py-2.5 px-4 rounded-[5px] flex items-center justify-center transition-colors mb-2.5"
                >
                  Llamar al 695 92 87 63
                </a>

                <div className="text-center text-[10.5px] text-[#bec8cd]">
                  Visita y presupuesto sin ningún compromiso.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FOOTER
      ===================================================================== */}
      <footer className="w-full pt-14 pb-10 bg-[#efede9] text-[#43474a] border-t border-[#e2e0dc]">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-[#dfddd8]">
            {/* Column 1 */}
            <div>
              <div className="mb-3.5">
                <img
                  src="/assets/aistudio/footer_logo.jpg"
                  alt="Hábitat Eficiente"
                  className="h-[28px] w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[11.5px] text-[#43474a] leading-[1.55] mb-4">
                Especialistas en aislamiento térmico y acústico sin obras en Madrid. Insuflado de
                lana de roca, celulosa y EPS grafito para eliminar el frío, el ruido y las
                humedades por condensación.
              </p>
              <div className="inline-block bg-[#e3e1dd] text-[#1b1c1a] text-[11.5px] font-bold px-3 py-1.5 rounded-[5px]">
                Teléfono: 695 92 87 63
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <div className="text-[12.5px] font-bold text-[#1b1c1a] mb-3.5">Soluciones Framo</div>
              <ul className="space-y-2 text-[11.5px] text-[#43474a]">
                <li>
                  <a href="#soluciones" className="hover:text-[#1b1c1a] transition-colors">
                    Aislamiento de Cámaras de Aire
                  </a>
                </li>
                <li>
                  <a href="#humedades" className="hover:text-[#1b1c1a] transition-colors">
                    Eliminar Humedades y Condensación
                  </a>
                </li>
                <li>
                  <a href="#acustico" className="hover:text-[#1b1c1a] transition-colors">
                    Aislamiento Acústico en Paredes
                  </a>
                </li>
                <li>
                  <a href="#soluciones" className="hover:text-[#1b1c1a] transition-colors">
                    Lana de Roca y Celulosa
                  </a>
                </li>
                <li>
                  <a href="#soluciones" className="hover:text-[#1b1c1a] transition-colors">
                    Aislamiento para Chalets y Pisos
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <div className="text-[12.5px] font-bold text-[#1b1c1a] mb-3.5">
                Comunidad de Madrid
              </div>
              <ul className="space-y-2 text-[11.5px] text-[#43474a]">
                <li>Madrid Capital y Barrios</li>
                <li>Pozuelo de Alarcón y Majadahonda</li>
                <li>Las Rozas y Boadilla del Monte</li>
                <li>Alcobendas y San Sebastián de los Reyes</li>
                <li>Zona Sur y Corredor del Henares</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <div className="text-[12.5px] font-bold text-[#1b1c1a] mb-3.5">Contacto Directo</div>
              <p className="text-[11.5px] text-[#43474a] leading-[1.55] mb-3.5">
                Llámanos ahora para recibir asesoramiento técnico personalizado y presupuesto
                inmediato sin compromiso.
              </p>
              <div className="bg-[#e8e6e2] rounded-[6px] p-3.5">
                <a
                  href="tel:695928763"
                  className="flex items-center gap-1.5 text-[12.5px] font-bold text-[#cc292b] mb-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>695 92 87 63</span>
                </a>
                <p className="text-[11.5px] text-[#43474a] leading-[1.4]">
                  Visita técnica y endoscopia de cámara 100% gratuita.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Legal Row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11.5px] text-[#43474a]">
            <div>© 2025 Aislamientos Framo S.L. Todos los derechos reservados.</div>
            <div className="flex items-center gap-5">
              <a href="#aviso-legal" className="hover:text-[#1b1c1a] transition-colors">
                Aviso Legal
              </a>
              <a href="#privacidad" className="hover:text-[#1b1c1a] transition-colors">
                Política de Privacidad
              </a>
              <a href="#cookies" className="hover:text-[#1b1c1a] transition-colors">
                Política de Cookies
              </a>
              <a href="#contacto" className="hover:text-[#1b1c1a] transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          FLOATING GUTENBERG TT5 EXPORT TRIGGER BUTTON
      ===================================================================== */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          type="button"
          onClick={() => setIsGutenbergModalOpen(true)}
          className="flex items-center gap-2.5 bg-[#172024] hover:bg-[#cc292b] text-white text-[13px] font-bold px-4 py-3 rounded-lg shadow-lg border border-white/15 transition-all cursor-pointer"
        >
          <Code2 className="w-4 h-4 text-[#ffb3ac]" />
          <span>Código Bloques Gutenberg (TT5)</span>
        </button>
      </div>

      {/* =====================================================================
          WORDPRESS TWENTY TWENTY-FIVE (TT5) GUTENBERG BLOCKS MODAL
      ===================================================================== */}
      {isGutenbergModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fbf9f6] border border-[#dcdad6] rounded-xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="bg-[#172024] text-white px-6 py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileCode2 className="w-5 h-5 text-[#cc292b]" />
                <div>
                  <h3 className="text-[16px] font-bold leading-tight">
                    Conversión Literal a Bloques Gutenberg — WordPress Twenty Twenty-Five (TT5)
                  </h3>
                  <p className="text-[12px] text-[#bec8cd]">
                    100% textos literales palabra por palabra · Compatible con el Editor de Código
                    de WordPress TT5
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => handleCopyCode(FULL_GUTENBERG_TT5_PAGE, 'full-top')}
                  className="inline-flex items-center gap-1.5 bg-[#cc292b] hover:bg-[#b6171e] text-white text-[12px] font-bold px-3.5 py-2 rounded-md transition-colors cursor-pointer"
                >
                  {copiedId === 'full-top' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>¡Copiado Todo!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Página Completa TT5</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleDownloadBlocks}
                  className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-[12px] font-semibold px-3 py-2 rounded-md transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Descargar .html</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsGutenbergModalOpen(false)}
                  className="p-1.5 text-[#bec8cd] hover:text-white rounded-md transition-colors cursor-pointer"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Sub-navigation Tabs */}
            <div className="bg-[#efede9] border-b border-[#dcdad6] px-6 py-2.5 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('blocks')}
                  className={`px-3.5 py-1.5 rounded-md text-[12.5px] font-bold transition-colors cursor-pointer ${
                    activeTab === 'blocks'
                      ? 'bg-[#172024] text-white'
                      : 'text-[#43474a] hover:text-[#1b1c1a]'
                  }`}
                >
                  Bloques Gutenberg (HTML de Bloques WP)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('theme')}
                  className={`px-3.5 py-1.5 rounded-md text-[12.5px] font-bold transition-colors cursor-pointer ${
                    activeTab === 'theme'
                      ? 'bg-[#172024] text-white'
                      : 'text-[#43474a] hover:text-[#1b1c1a]'
                  }`}
                >
                  Configuración theme.json (TT5)
                </button>
              </div>

              <div className="text-[11.5px] text-[#43474a]">
                En WordPress (TT5): <strong>Opciones (⋮) → Editor de código</strong> y pega el
                código directamente.
              </div>
            </div>

            {/* Modal Body */}
            {activeTab === 'blocks' ? (
              <div className="flex-1 grid grid-cols-1 md:grid-cols-12 min-h-0 overflow-hidden">
                {/* Sidebar of Sections */}
                <div className="md:col-span-4 border-r border-[#dcdad6] bg-[#f4f2ee] overflow-y-auto p-3 space-y-1.5">
                  {GUTENBERG_SECTIONS.map((sec) => {
                    const isSelected = sec.id === selectedSectionId;
                    return (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => setSelectedSectionId(sec.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white border-[#cc292b] shadow-xs'
                            : 'bg-transparent border-transparent hover:bg-white/60'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-[11px] font-bold text-[#cc292b]">
                            SECCIÓN {sec.number}
                          </span>
                          {isSelected && (
                            <span className="text-[10px] font-bold text-[#172024] bg-[#eae8e5] px-1.5 py-0.5 rounded">
                              Activo
                            </span>
                          )}
                        </div>
                        <div className="text-[13px] font-bold text-[#1b1c1a] leading-snug">
                          {sec.title}
                        </div>
                        <p className="text-[11px] text-[#43474a] line-clamp-2 mt-0.5">
                          {sec.description}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Code Viewer */}
                <div className="md:col-span-8 flex flex-col min-h-0 bg-[#141d21] text-[#f2f0ed]">
                  <div className="px-5 py-3 bg-[#1c262b] border-b border-white/10 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[13px] font-bold text-white">
                        {currentSection.number} — {currentSection.title}
                      </div>
                      <div className="text-[11px] text-[#949da2]">{currentSection.description}</div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyCode(currentSection.blockCode, currentSection.id)}
                      className="inline-flex items-center gap-1.5 bg-[#cc292b] hover:bg-[#b6171e] text-white text-[12px] font-bold px-3.5 py-1.5 rounded-md transition-colors shrink-0 cursor-pointer"
                    >
                      {copiedId === currentSection.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>¡Bloque Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Esta Sección</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="flex-1 p-5 overflow-auto text-[12px] font-mono leading-relaxed text-[#dbe4e9] select-all">
                    <code>{currentSection.blockCode}</code>
                  </pre>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col min-h-0 bg-[#141d21] text-[#f2f0ed]">
                <div className="px-6 py-3 bg-[#1c262b] border-b border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[13px] font-bold text-white">
                      theme.json — Paleta de Color y Tipografía (Newsreader + Source Sans 3) para
                      Twenty Twenty-Five (TT5)
                    </div>
                    <div className="text-[11px] text-[#949da2]">
                      Configuración de tokens del sistema Aislamientos Framo Professional System
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(TT5_THEME_JSON_SNIPPET, 'theme-json')}
                    className="inline-flex items-center gap-1.5 bg-[#cc292b] hover:bg-[#b6171e] text-white text-[12px] font-bold px-3.5 py-1.5 rounded-md transition-colors cursor-pointer"
                  >
                    {copiedId === 'theme-json' ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar theme.json</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="flex-1 p-6 overflow-auto text-[12px] font-mono leading-relaxed text-[#dbe4e9] select-all">
                  <code>{TT5_THEME_JSON_SNIPPET}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
