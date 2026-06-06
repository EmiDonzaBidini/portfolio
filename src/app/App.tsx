import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowUpRight,
  Moon,
  Sun,
  Menu,
  X,
  MapPin,
  Mail,
  CheckCircle2,
} from "lucide-react";

type Theme = "light" | "dark";

const TEAL = "#0D6E7A";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-60px 0px",
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={
        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
      }
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const experience = [
  {
    num: "01",
    company: "Aeroterra · Distribuidor Oficial Esri",
    role: "Estrategia Comercial y Crecimiento",
    period: "2025 — Presente",
    location: "Buenos Aires, Argentina",
    description:
      "Impulso el crecimiento comercial de soluciones GIS de Esri para Argentina y Uruguay, conectando capacidades tecnológicas con necesidades estratégicas de sectores como Oil & Gas, Utilities y Gobierno.\n\nLidero iniciativas de generación de demanda, posicionamiento, eventos, automatización y desarrollo de oportunidades comerciales de alto valor.",
    tags: [
      "GIS",
      "Growth Strategy",
      "Demand Generation",
      "B2B",
      "Marketing Ops",
    ],
  },
  {
    num: "02",
    company: "Desitec",
    role: "Chief Marketing Officer",
    period: "2021 — 2025",
    location: "Buenos Aires, Argentina / Londres, Reino Unido",
    description:
      "Dirigí la estrategia comercial y de marketing para mercados nacionales e internacionales, liderando iniciativas de expansión, posicionamiento y generación de demanda.\n\nDiseñé procesos comerciales, estrategias go-to-market y acciones de crecimiento que impulsaron la presencia internacional de la compañía.",
    tags: [
      "CMO",
      "Internacionalización",
      "Oil & Gas",
      "Revenue Growth",
    ],
  },
  {
    num: "03",
    company: "Finantech SAS",
    role: "Financial Analyst",
    period: "2020 — 2021",
    location: "Argentina",
    description:
      "Participé en procesos de análisis financiero y evaluación crediticia corporativa mediante modelado de datos, herramientas BI y automatización de reportes para la toma de decisiones.",
    tags: [
      "Finance",
      "Business Analysis",
      "Reporting",
      "Analytics",
    ],
  },
];

const achievements = [
  {
    value: "331%",
    label: "Incremento comercial generado",
  },
  {
    value: "LATAM",
    label: "Expansión internacional",
  },
  {
    value: "GIS",
    label: "Especialización tecnológica",
  },
  {
    value: "B2B",
    label: "Experiencia Enterprise",
  },
];

const projects = [
  {
    num: "01",
    title: "Estrategia Comercial GIS para Argentina y Uruguay",
    category: "Go-To-Market",
    description:
      "Desarrollo de estrategia comercial y marketing para impulsar la adopción de tecnología geoespacial en operadores energéticos y empresas de infraestructura. ",
    tags: ["GTM", "GIS", "Oil & Gas", "B2B"],
    impact: "Adopción tecnológica en sectores clave",
  },
  {
    num: "02",
    title: "Expansión Internacional Desitec",
    category: "Business Development",
    description:
      "Diseño y ejecución de acciones comerciales para apertura y consolidación de mercados internacionales.",
    tags: ["Expansion", "LATAM", "Growth"],
    impact: "+3 mercados internacionales",
  },
  {
    num: "03",
    title: "Automatización Comercial y Marketing Operations",
    category: "Marketing Ops",
    description:
      "Implementación de procesos, automatizaciones y herramientas analíticas para optimizar generación de demanda y seguimiento comercial.",
    tags: ["Automation", "CRM", "HubSpot", "Power BI"],
    impact: "Optimización operativa y escalabilidad",
  },
];

const events = [
  {
    title: "Conferencia de Usuarios Esri Argentina",
    type: "Evento Anual Presencial",
    description:
      "Planificación y coordinación integral del principal encuentro GIS de Argentina. Gestión de agenda, speakers, sponsors, campañas de comunicación, logística y experiencia de asistentes.",
    impact:
      "Posicionamiento de marca y relacionamiento con clientes clave",
  },
  {
    title: "Conferencia de Usuarios Esri Uruguay",
    type: "Evento Presencial",
    description:
      "Organización de la edición uruguaya del evento, fortaleciendo la presencia regional de Esri y el ecosistema geoespacial en Uruguay.",
    impact: "Desarrollo de comunidad GIS en Uruguay",
  },
  {
    title: "GIS Express Sessions",
    type: "Evento Virtual Sincrónico",
    description:
      "Diseño y coordinación de encuentros online enfocados en innovación, casos de uso y tendencias GIS para clientes y prospectos.",
    impact: "Generación de demanda y educación del mercado",
  },
  {
    title: "Webinars Técnicos y Comerciales",
    type: "Demand Generation",
    description:
      "Producción y promoción de webinars orientados a posicionamiento de soluciones, captación de leads y aceleración comercial.",
    impact: "Desarrollo de oportunidades comerciales",
  },
];

const skillGroups = [
  {
    label: "Business",
    skills: [
      "Business Development",
      "Go-to-Market",
      "Strategic Planning",
      "Revenue Operations",
      "Partnerships",
      "Market Expansion",
    ],
  },
  {
    label: "Growth",
    skills: [
      "Growth Marketing",
      "Demand Generation",
      "CRM Strategy",
      "Automation",
      "Performance Marketing",
      "Brand Positioning",
    ],
  },
  {
    label: "Data & Technology",
    skills: [
      "Business Intelligence",
      "Power BI",
      "GIS Analytics",
      "AI Tools",
      "Data Analysis",
      "Marketing Technology",
    ],
  },
];

const tools = [
  "Salesforce",
  "HubSpot",
  "Power BI",
  "Tableau",
  "Google Analytics",
  "Esri ArcGIS",
  "Notion",
  "Figma",
  "Meta Ads",
  "Google Ads",
  "Looker Studio",
  "Airtable",
  "Machine Learning",
  "ClickUp",
  "Trello",
  "Slack",
];

const certifications = [
  {
    title: "Máster en Big Data y Business Intelligence",
    institution: "Escuela de Negocios Europea de Barcelona",
    year: "2025 - 2026",
    type: "Máster",
  },
  {
    title: "Máster en IA Empresarial",
    institution: "Escuela de Negocios Europea de Barcelona",
    year: "2025 - 2026",
    type: "Máster",
  },
  {
    title: "Licenciatura en Marketing",
    institution: "Instituto Universitario River Plate",
    year: "2021",
    type: "Grado",
  },
  {
    title: "Licenciatura en Administración",
    institution: "Instituto Universitario River Plate",
    year: "2023",
    type: "Grado",
  },
  {
    title: "Power BI",
    institution: "Microsoft",
    year: "2024",
    type: "Certificación",
  },
  {
    title: "Testing QA",
    institution: "Talento Tech",
    year: "2024",
    type: "Curso",
  },
  {
    title: "Desarrollo Web Full Stack",
    institution: "Talento Tech - Gobierno Ciudad de Buenos Aires",
    year: "2024",
    type: "Curso",
  },
  {
    title: "Fundamentos de la Programación",
    institution: "Egg Cooperation",
    year: "2024",
    type: "Curso",
  },
  {
    title: "Marketing Digital",
    institution: "Platzi",
    year: "2023",
    type: "Curso",
  },
  {
    title: "Adobe Creative Suite",
    institution: "Platzi",
    year: "2023",
    type: "Herramientas",
  },
  {
    title: "Inglés Avanzado | Profesional (B1/B2)",
    institution: "AACI / Britland English Institute",
    year: "2020",
    type: "Idioma",
  },
];

const differentiators = [
  {
    title: "Visión de negocio",
    desc: "Entiendo marketing, ventas, operaciones y finanzas para conectar estrategia con resultados.",
  },
  {
    title: "Perfil híbrido",
    desc: "Combino crecimiento, datos, tecnología y ejecución comercial en un mismo rol.",
  },
  {
    title: "Mentalidad internacional",
    desc: "Experiencia desarrollando mercados, alianzas y oportunidades comerciales en LATAM.",
  },
];

const lookingFor = [
  "Business Development",
  "Growth & Revenue Operations",
  "Commercial Strategy",
  "Product Marketing",
  "Technology & GIS",
  "Empresas en expansión",
];

export default function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark",
    );
  }, [theme]);

  const navLinks = [
    { label: "Sobre mí", id: "about" },
    { label: "Experiencia", id: "experience" },
    { label: "Formación", id: "certifications" },
    { label: "Proyectos", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Eventos", id: "events" },
  ];

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── NAV ─────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
        style={{
          background: "rgba(0,0,0,0.94)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo — sin fondo ni marco, solo la imagen */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="https://i.imgur.com/qPkbrKD.png"
              alt="Emilia Donza"
              className="w-[44px] h-[44px] object-contain transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.6)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = TEAL)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    "rgba(255,255,255,0.6)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                setTheme((t) =>
                  t === "light" ? "dark" : "light",
                )
              }
              className="w-8 h-8 flex items-center justify-center rounded-full transition-all"
              style={{ color: "rgba(255,255,255,0.5)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#fff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  "rgba(255,255,255,0.5)")
              }
            >
              {theme === "dark" ? (
                <Sun size={14} />
              ) : (
                <Moon size={14} />
              )}
            </button>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full transition-all"
              style={{ background: TEAL, color: "#fff" }}
            >
              Contacto
            </a>
            <button
              className="md:hidden"
              style={{ color: "rgba(255,255,255,0.6)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div
            className="md:hidden border-t px-6 pb-5 pt-1"
            style={{
              background: "rgba(0,0,0,0.95)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 text-sm"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 dark:opacity-[0.04] opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${TEAL}18 0%, transparent 70%)`,
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-center">
            {/* LEFT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                    style={{ background: TEAL }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ background: TEAL }}
                  />
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-5xl md:text-7xl lg:text-[60px] font-extrabold tracking-tight leading-none mb-6 text-foreground"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Emilia Donza Bidini
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-3"
              >
                <span className="text-foreground font-semibold">
                  Business Development, Growth & Commercial
                  Strategy
                </span>{" "}
                especializada en transformar tecnología compleja
                en crecimiento comercial.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-sm text-muted-foreground max-w-xl leading-relaxed mb-6"
              >
                Experiencia liderando expansión internacional,
                revenue growth, go-to-market y generación de
                demanda para compañías B2B.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-wrap gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-10"
              >
                {[
                  "Business Strategy",
                  "GTM",
                  "Revenue Growth",
                  "GIS Technology",
                  "Business Intelligence",
                ].map((tag, i, arr) => (
                  <span
                    key={tag}
                    className="flex items-center gap-2"
                  >
                    {tag}
                    {i < arr.length - 1 && (
                      <span style={{ color: TEAL }}>•</span>
                    )}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="flex flex-wrap items-center gap-3 mb-16"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity"
                  style={{ background: TEAL, color: "#fff" }}
                >
                  Ver proyectos <ArrowUpRight size={14} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-medium px-5 py-2.5 rounded-full hover:bg-muted transition-colors"
                >
                  Escribime
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-px border border-border rounded-2xl overflow-hidden bg-border"
              >
                {[
                  { num: "8+", label: "Años de experiencia" },
                  { num: "2", label: "Licenciaturas" },
                  { num: "2", label: "Másters realizados" },
                  {
                    num: "3",
                    label: "Mercados Internacionales",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-background px-6 py-5"
                  >
                    <div
                      className="text-2xl font-bold text-foreground mb-0.5"
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                      }}
                    >
                      {stat.num}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — foto limpia, sin badges */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hidden lg:flex justify-center items-center -mt-20"
            >
              <img
                src="https://i.imgur.com/pCVOcQ7.png"
                alt="Emilia Donza Bidini"
                className="w-[420px] rounded-2xl object-cover shadow-xl border border-border/40"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-border to-transparent" />
        </motion.div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────── */}
      <section
        id="about"
        className="py-32 border-t border-border"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
                  Sobre mí
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h3
                  className="text-2xl font-bold text-foreground mb-6 leading-snug"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  Estrategia, crecimiento y tecnología aplicados
                  al negocio.
                </h3>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                  Mi carrera se desarrolló construyendo puentes
                  entre equipos comerciales, marketing y
                  tecnología. Me especializo en transformar
                  productos y capacidades técnicas complejas en
                  propuestas de valor claras que generan
                  oportunidades de negocio.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-muted-foreground leading-relaxed mb-10 text-sm">
                  He liderado iniciativas de marketing, ventas,
                  expansión internacional y desarrollo comercial
                  en industrias como Oil & Gas y tecnología
                  geoespacial. Mi enfoque combina visión
                  estratégica, análisis de datos y ejecución
                  orientada a resultados.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="flex flex-col gap-2 mb-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={13} />
                    Buenos Aires, Argentina
                  </div>
                  <div
                    className="flex items-center gap-2 text-sm font-medium"
                    style={{ color: TEAL }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: TEAL }}
                    />
                    Disponible para roles remotos e híbridos
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="space-y-3 pt-2 md:pt-14">
              {[
                {
                  icon: "01",
                  title: "Pensamiento estratégico a escala",
                  desc: "Cómoda operando en las capas comercial, analítica y de ejecución — desde la estrategia de alto nivel hasta las decisiones operativas del día a día.",
                },
                {
                  icon: "02",
                  title:
                    "Experiencia en mercados internacionales",
                  desc: "Trayectoria en diseño de entrada a mercados, estrategia de canales de distribución y operaciones comerciales cross-border en América Latina.",
                },
                {
                  icon: "03",
                  title: "Enfoque tech-native al negocio",
                  desc: "Fluida en herramientas modernas de BI, GIS e IA. Construyo sistemas que escalan — infraestructura que crece sin sumar headcount.",
                },
              ].map((item, i) => (
                <Reveal key={item.icon} delay={0.1 * i}>
                  <div className="border border-border rounded-xl p-5 hover:border-[#0D6E7A]/40 transition-all duration-200">
                    <div
                      className="text-xs font-mono mb-3"
                      style={{ color: TEAL }}
                    >
                      {item.icon}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-1.5">
                      {item.title}
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ──────────────────────────────────────── */}
      <section
        id="experience"
        className="py-32 border-t border-border bg-muted/40"
      >
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Experiencia
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Trayectoria profesional.
            </h2>
          </Reveal>
          <div>
            {experience.map((exp, i) => (
              <Reveal key={exp.num} delay={0.08 * i}>
                <div className="grid md:grid-cols-[72px_1fr_180px] gap-6 py-10 border-t border-border hover:bg-background/50 transition-colors rounded-lg -mx-3 px-3">
                  <div className="font-mono text-xs text-muted-foreground pt-1">
                    {exp.num}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-3">
                      <span
                        className="text-base font-semibold text-foreground"
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                        }}
                      >
                        {exp.role}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        · {exp.company}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xl space-y-2">
                      {exp.description
                        .split("\n\n")
                        .map((para, j) => (
                          <p key={j}>{para}</p>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs border border-border px-2.5 py-1 rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:text-right">
                    <div className="text-xs text-muted-foreground">
                      {exp.period}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {exp.location}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </section>

      {/* ── IMPACTO ─────────────────────────────────────────── */}
      <section className="py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Resultados
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Impacto medible.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {achievements.map((a, i) => (
              <Reveal key={a.value} delay={0.1 * i}>
                <div
                  className="rounded-2xl p-8 flex flex-col items-center text-center border border-border hover:border-[#0D6E7A]/40 transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${TEAL}08 0%, transparent 100%)`,
                  }}
                >
                  <div
                    className="text-4xl font-extrabold mb-2"
                    style={{
                      color: TEAL,
                      fontFamily: "'Manrope', sans-serif",
                    }}
                  >
                    {a.value}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {a.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ──────────────────────────────────── */}
      <section className="py-32 border-t border-border bg-muted/40"        
      id="certifications">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Formación Profesional
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Títulos obtenidos
            </h2>
          </Reveal>
          <div>
            {certifications.map((cert, i) => (
              <Reveal key={cert.title} delay={0.05 * i}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-5 border-t border-border hover:bg-background/50 rounded-lg -mx-3 px-3 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-medium px-2 py-0.5 rounded border border-border text-muted-foreground whitespace-nowrap">
                      {cert.type}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {cert.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 pl-14 sm:pl-0">
                    <span className="text-sm text-muted-foreground">
                      {cert.institution}
                    </span>
                    <span className="text-xs text-muted-foreground w-16 text-right">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </section>

      {/* ── PROJECTS ────────────────────────────────────────── */}
      <section
        id="projects"
        className="py-32 border-t border-border bg-muted/40"
      >
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Proyectos
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Casos reales.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((proj, i) => (
              <Reveal key={proj.num} delay={0.1 * i}>
                <div className="group border border-border rounded-2xl p-6 hover:border-[#0D6E7A]/40 hover:-translate-y-1 transition-all duration-300 bg-card flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-muted-foreground">
                      {proj.num}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {proj.category}
                    </span>
                  </div>
                  <h3
                    className="text-base font-semibold text-foreground mb-3"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                    }}
                  >
                    {proj.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {proj.description}
                  </p>
                  <div className="border-t border-border pt-4">
                    <div
                      className="text-xs font-semibold mb-3"
                      style={{ color: TEAL }}
                    >
                      {proj.impact}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-muted px-2.5 py-1 rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS ─────────────────────────────────────────── */}
      <section
        id="events"
        className="py-32 border-t border-border bg-muted/40"
      >
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Eventos Estratégicos
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Comunidad, posicionamiento y generación de
              demanda.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-sm text-muted-foreground max-w-3xl mb-14 leading-relaxed">
              Lideré la planificación, coordinación y ejecución
              de eventos presenciales y virtuales para la
              comunidad GIS de Argentina y Uruguay, impulsando
              posicionamiento de marca, relacionamiento con
              clientes estratégicos, generación de oportunidades
              comerciales y adopción tecnológica.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {events.map((event, i) => (
              <Reveal key={event.title} delay={0.08 * i}>
                <div className="border border-border rounded-2xl p-6 bg-background hover:border-[#0D6E7A]/40 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div
                    className="text-xs font-semibold uppercase tracking-wider mb-3"
                    style={{ color: TEAL }}
                  >
                    {event.type}
                  </div>

                  <h3
                    className="text-lg font-semibold text-foreground mb-3"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                    }}
                  >
                    {event.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {event.description}
                  </p>

                  <div
                    className="mt-6 pt-4 border-t border-border text-xs font-semibold uppercase tracking-wide"
                    style={{ color: TEAL }}
                  >
                    {event.impact}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="grid md:grid-cols-3 gap-5 mt-14">
              <div className="border border-border rounded-2xl p-6 bg-background">
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: TEAL }}
                >
                  +1.500
                </div>
                <div className="text-sm text-muted-foreground">
                  Asistentes presenciales y virtuales.
                </div>
              </div>

              <div className="border border-border rounded-2xl p-6 bg-background">
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: TEAL }}
                >
                  ARG + UY
                </div>
                <div className="text-sm text-muted-foreground">
                  Eventos regionales con tendencias GIS. Sesión
                  Plenaria + Sesiones Técnicas.
                </div>
              </div>

              <div className="border border-border rounded-2xl p-6 bg-background">
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: TEAL }}
                >
                  Online
                </div>
                <div className="text-sm text-muted-foreground">
                  Webinars y sesiones GIS Express para
                  generación de demanda y educación ArcGIS.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────────────────────── */}
      <section
        id="skills"
        className="py-32 border-t border-border"
      >
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Competencias
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Áreas de expertise.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12">
            {skillGroups.map((group, i) => (
              <Reveal key={group.label} delay={0.1 * i}>
                <div>
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-5"
                    style={{ color: TEAL }}
                  >
                    {group.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm border border-border bg-background px-3 py-1.5 rounded-full text-foreground hover:border-[#0D6E7A]/50 hover:text-[#0D6E7A] transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-20 pt-12 border-t border-border">
            <Reveal>
              <div className="text-xs font-semibold uppercase tracking-widest text-foreground mb-6">
                Herramientas y Tecnologías
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm text-muted-foreground bg-background border border-border px-3 py-1.5 rounded-full hover:text-foreground transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ───────────────────────────── */}
      <section className="py-32 border-t border-border bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Valor diferencial
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              ¿Por qué trabajar conmigo?
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {differentiators.map((item, i) => (
              <Reveal key={item.title} delay={0.08 * i}>
                <div className="border border-border rounded-2xl p-6 bg-background hover:border-[#0D6E7A]/40 transition-all">
                  <div
                    className="w-2 h-2 rounded-full mb-4"
                    style={{ background: TEAL }}
                  />

                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / CONTACTO ──────────────────────────────────── */}
      <section
        id="contact"
        className="py-32 border-t border-border"
        style={{
          background: "#0A0A0A",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Reveal>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-7"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Conectemos
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
              style={{
                color: "#FFFFFF",
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              ¿Listos para construir
              <br />
              algo grande?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="text-sm leading-relaxed mb-4 max-w-sm mx-auto"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Explorando selectivamente roles estratégicos en
              SaaS, tecnología, consultoría y empresas en
              crecimiento.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="flex items-center justify-center gap-2 mb-10">
              <MapPin
                size={12}
                style={{ color: "rgba(255,255,255,0.4)" }}
              />
              <span
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Buenos Aires, Argentina · Disponible remoto /
                híbrido / relocalización
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:emidonza@gmail.com"
                className="inline-flex items-center gap-2 bg-background text-foreground text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                <Mail size={14} />
                Enviame un mail
              </a>
              <a
                href="https://www.linkedin.com/in/emiliadonzabidini"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-colors"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} · Portfolio diseñado y
            desarrollado por Emilia Donza Bidini
          </span>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm">
            <a
              href="mailto:emidonza@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              emidonza@gmail.com
            </a>

            <span className="hidden md:block text-muted-foreground">
              •
            </span>

            <a
              href="https://www.linkedin.com/in/emiliadonzabidini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}