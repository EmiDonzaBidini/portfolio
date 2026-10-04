import { useState, useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Download,
  Moon,
  Sun,
  Menu,
  X,
  MapPin,
  Mail,
} from "lucide-react";

type Theme = "light" | "dark";
type Lang = "es" | "en";

const TEAL = "#0D6E7A";
const TEAL_LIGHT = "#3FB8C6"; // para textos/hover sobre fondos oscuros (mejor contraste)

const BASE: string = (import.meta as any).env?.BASE_URL ?? "/";
// Subí tus CVs a /public/cv/ con estos nombres exactos
const CV_FILES: Record<Lang, string> = {
  es: `${BASE}cv/Emilia-Donza-Bidini-CV-ES.pdf`,
  en: `${BASE}cv/Emilia-Donza-Bidini-CV-EN.pdf`,
};

/* ─────────────────────────────────────────────────────────────
   REVEAL (respeta prefers-reduced-motion)
───────────────────────────────────────────────────────────── */
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
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONTENIDO COMPARTIDO (no se traduce)
───────────────────────────────────────────────────────────── */
const skillGroups = [
  {
    label: "Business",
    skills: [
      "B2B Strategy",
      "Go-to-Market",
      "Business Development",
      "Revenue Operations",
      "Commercial Strategy",
      "Market Expansion",
      "Partnerships",
    ],
  },
  {
    label: "Growth & Marketing",
    skills: [
      "Growth Marketing",
      "Demand Generation",
      "CRM Strategy",
      "Marketing Automation",
      "Funnel Optimization",
      "Performance Marketing",
      "Content Strategy",
      "Event Marketing",
    ],
  },
  {
    label: "Data & Technology",
    skills: [
      "Business Intelligence",
      "Data Analysis",
      "Power BI",
      "SQL",
      "Python",
      "GIS Analytics",
      "Marketing Technology",
      "AEM",
      "AI Tools",
    ],
  },
  {
    label: "Content & Creative",
    skills: [
      "Content Production",
      "Content Localization",
      "Video Editing",
      "Adobe Creative Cloud",
      "Premiere Pro",
      "Canva",
      "Figma",
      "Visual Communication",
    ],
  },
];

const tools = [
  "Salesforce",
  "Salesforce Marketing Cloud",
  "HubSpot",
  "Klaviyo",
  "Brevo",
  "Mailchimp",
  "Power BI",
  "Tableau",
  "SQL",
  "Python",
  "Google Analytics",
  "Looker Studio",
  "Esri ArcGIS",
  "AEM",
  "Adobe Creative Cloud",
  "Adobe Premiere Pro",
  "Canva",
  "Figma",
  "Meta Ads",
  "Google Ads",
  "Typeform",
  "Airtable",
  "ClickUp",
  "Notion",
  "Trello",
  "Slack",
  "Hootsuite",
  "Later",
  "Bitly",
];

const lookingFor = [
  "B2B Marketing",
  "Growth Marketing",
  "Demand Generation",
  "Go-to-Market",
  "Marketing Operations",
  "Revenue Operations",
  "Business Development",
  "Commercial Strategy",
];

const heroTags = [
  "B2B Marketing",
  "Demand Generation",
  "Go-to-Market",
  "Marketing Automation",
  "Data & BI",
];

/* ─────────────────────────────────────────────────────────────
   TEXTOS ES / EN
───────────────────────────────────────────────────────────── */
const content = {
  es: {
    meta: {
      title: "Emilia Donza Bidini · Marketing B2B & Growth",
      description:
        "Marketing B2B y Growth: Demand Generation, Go-to-Market, expansión internacional y estrategia comercial. Conectando negocio, datos y tecnología.",
    },
    nav: {
      links: [
        { label: "Sobre mí", id: "about" },
        { label: "Experiencia", id: "experience" },
        { label: "Proyectos", id: "projects" },
        { label: "Eventos", id: "events" },
        { label: "Skills", id: "skills" },
        { label: "Formación", id: "certifications" },
      ],
      contact: "Contacto",
      themeLabel: "Cambiar tema",
      langLabel: "Switch to English",
      langShort: "EN",
      menuLabel: "Abrir o cerrar el menú",
      skip: "Saltar al contenido",
    },
    hero: {
      available: "Marketing B2B & Growth",
      headlineRest:
        "Conectando estrategia, negocio, datos y tecnología para generar crecimiento.",
      sub: "Experiencia en Demand Generation, Go-to-Market, Marketing Automation, expansión internacional y estrategia comercial para compañías B2B y tecnológicas.",
      ctaProjects: "Ver proyectos",
      ctaCv: "Descargar CV",
      ctaContact: "Escribime",
      stats: [
        { num: "331%", label: "crecimiento de ventas" },
        { num: "x3", label: "asistentes a eventos" },
        { num: "4 → 13", label: "eventos virtuales al año" },
        { num: "288K+", label: "impresiones en LinkedIn" },
      ],
      photoAlt: "Retrato de Emilia Donza Bidini",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Estrategia, crecimiento y tecnología aplicados al negocio.",
      p1: "Mi carrera fue evolucionando desde el análisis financiero hacia el desarrollo comercial, el marketing B2B y el crecimiento de negocios tecnológicos. Esa combinación me permite entender un problema desde el negocio, trabajar con datos y convertirlo en una estrategia que se pueda ejecutar.",
      p2: "Trabajé en Oil & Gas, servicios financieros y tecnología geoespacial, liderando marketing, ventas, expansión internacional, eventos y generación de demanda. Me siento especialmente cómoda en empresas B2B y tecnológicas que necesitan profesionalizar su crecimiento.",
      location: "Buenos Aires, Argentina",
      availability: "Disponible para roles remotos e híbridos",
      cards: [
        {
          icon: "01",
          title: "Pensamiento estratégico a escala",
          desc: "Conecto objetivos comerciales con posicionamiento, generación de demanda, campañas, eventos y ejecución digital.",
        },
        {
          icon: "02",
          title: "Experiencia en mercados internacionales",
          desc: "Desarrollo de negocios y oportunidades en Argentina, Chile, Colombia y Uruguay, con análisis de mercado en Reino Unido.",
        },
        {
          icon: "03",
          title: "Enfoque tech-native al negocio",
          desc: "Combino marketing, datos y tecnología: BI, CRM, AEM, automatización, desarrollo web e IA aplicada al negocio.",
        },
      ],
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Trayectoria profesional.",
      items: [
        {
          num: "01",
          company: "Aeroterra · Distribuidor Oficial Esri",
          role: "Marketing & Growth Lead",
          period: "2025 — Presente",
          location: "Buenos Aires, Argentina",
          description:
          "Lidero marketing B2B, demand generation y Marketing Operations para soluciones GIS de Esri en Argentina y Uruguay. Desarrollo estrategias de posicionamiento, campañas, contenidos, email marketing y eventos conectados con objetivos comerciales, trabajando con CRM, automatización y herramientas de analítica.\n\nEscalé la asistencia promedio a eventos de 300 a 900 personas y aumenté los eventos virtuales de 4 a 13. Gestiono la estrategia de LinkedIn, actualizo páginas de industrias, eventos y landing pages mediante AEM, y adapto y localizo contenidos globales de Esri para los mercados locales siguiendo sus lineamientos de marca.",          
          tags: [
            "B2B Marketing",
            "Demand Generation",
            "Marketing Automation",
            "CRM",
            "Event Marketing",
            "AEM",
            "Esri",
          ],
        },
        {
          num: "02",
          company: "Desitec",
          role: "Marketing & Commercial Strategy",
          period: "2021 — 2025",
          location: "Buenos Aires, Argentina",
          description:
            "Lideré la estrategia comercial y de marketing de una empresa B2B de Oil & Gas, integrando posicionamiento, generación de demanda, ventas y expansión internacional. Gestioné licitaciones y oportunidades comerciales para clientes corporativos como Techint, YPF, PAE, Pampa Energía, AESA, Cliba, Roemmers, Banco Galicia, Citi, Claro, Movistar y Coca-Cola FEMSA.\n\n. Impulsé un crecimiento de ventas del 331% en 2023 y 129% en 2024, acompañando la evolución de la facturación de $105M a $455M y luego a $1.045M. Expandí además la presencia internacional con ventas y exportaciones a Chile, Colombia y Uruguay, junto con análisis de oportunidad para Reino Unido. También posicioné a la empresa en telemedición y redacté los cuatro casos de éxito publicados en su web.",
          tags: [
            "Business Development",
            "Go-to-Market",
            "Revenue Growth",
            "International Expansion",
            "Oil & Gas",
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
          tags: ["Finance", "Business Analysis", "Reporting", "Analytics"],
        },
      ],
    },
    projects: {
    eyebrow: "Proyectos",
    title: "Casos reales.",
    items: [
      {
        num: "01",
        title: "Marketing & Growth para tecnología GIS",
        category: "Go-to-Market",
        problem:
          "Posicionar soluciones GIS en mercados B2B con ciclos comerciales largos y conectar tecnología con necesidades concretas de industrias como Oil & Gas, Utilities y Gobierno.",
        work:
          "Diseñé y ejecuté iniciativas de Go-to-Market combinando posicionamiento, Demand Generation, contenido, LinkedIn, email marketing, eventos y localización de contenidos globales de Esri para Argentina y Uruguay.",
        result:
          "Escalé la asistencia promedio a eventos de 300 a 900 personas y los eventos virtuales de 4 a 13.",
        tags: ["GTM", "GIS", "Demand Generation", "B2B"],
      },
      {
        num: "02",
        title: "Expansión internacional de Desitec",
        category: "Business Development",
        problem:
          "Expandir una empresa B2B de Oil & Gas más allá del mercado argentino y detectar nuevas oportunidades comerciales en mercados regionales.",
        work:
          "Desarrollé oportunidades comerciales, gestioné licitaciones y clientes corporativos, analicé mercados y acompañé la estrategia de entrada y desarrollo comercial en Chile, Colombia y Uruguay.",
        result:
          "La operación pasó de Argentina a trabajar comercialmente en 3 mercados internacionales, además de realizar un análisis de oportunidad para Reino Unido.",
        tags: ["Business Development", "Expansion", "LATAM", "Growth"],
      },
      {
        num: "03",
        title: "Revenue Growth & Commercial Strategy",
        category: "Revenue Growth",
        problem:
          "Acompañar el crecimiento de una empresa B2B integrando marketing, ventas y estrategia comercial en una misma dirección.",
        work:
          "Conecté posicionamiento, generación de demanda, desarrollo comercial, licitaciones y expansión de mercados con una mirada orientada a revenue. También posicioné nuevas soluciones y desarrollé casos de éxito comerciales.",
        result:
          "331% de crecimiento de ventas en 2023 y 129% en 2024, acompañando una evolución de facturación de $105M a $455M y luego a $1.045M.",
        tags: ["Revenue Growth", "Go-to-Market", "B2B", "Commercial Strategy"],
      },
      {
        num: "04",
        title: "LinkedIn & Content Growth",
        category: "Content & Growth",
        problem:
          "Fortalecer la presencia digital de una compañía tecnológica B2B y convertir contenido especializado en posicionamiento y alcance de mercado.",
        work:
          "Gestiono la estrategia de LinkedIn, planificación de contenidos, adaptación de contenidos globales de Esri, comunicación de eventos y actualización de páginas de industrias, productos y eventos mediante AEM.",
        result:
          "288K+ impresiones en LinkedIn durante el período analizado, reforzando el alcance y posicionamiento digital de la marca.",
        tags: ["LinkedIn", "Content Strategy", "AEM", "B2B"],
      },
    ],
   },
    events: {
      eyebrow: "Eventos Estratégicos",
      title: "Comunidad, posicionamiento y generación de demanda.",
      intro:
        "Lidero la planificación, comunicación y ejecución de eventos presenciales y virtuales para la comunidad GIS de Argentina y Uruguay. El foco no es solo organizar eventos: es generar posicionamiento, comunidad, oportunidades comerciales y adopción tecnológica.",
      stats: [
        { value: "300 → 900", label: "asistentes promedio" },
        { value: "4 → 13", label: "eventos virtuales" },
        { value: "+1.500", label: "participaciones" },
        { value: "ARG + UY", label: "cobertura regional" },
      ],
      items: [
        {
          title: "Conferencia de Usuarios Esri Argentina",
          type: "Evento Anual Presencial",
          description:
            "Planificación y coordinación integral del principal encuentro GIS de Argentina. Gestión de agenda, speakers, sponsors, campañas de comunicación, logística y experiencia de asistentes.",
          impact: "Posicionamiento de marca y relacionamiento con clientes clave",
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
      ],
    },
    skills: {
      eyebrow: "Competencias",
      title: "Business, Growth & Technology.",
      toolsTitle: "Tools & Technologies",
    },
    certs: {
      eyebrow: "Formación Profesional",
      title: "Formación y certificaciones",
      items: [
        {
          title: "Máster en Big Data y Business Intelligence",
          institution: "Escuela de Negocios Europea de Barcelona",
          year: "2025 – 2026",
          type: "Máster",
        },
        {
          title: "Máster en IA Empresarial",
          institution: "Escuela de Negocios Europea de Barcelona",
          year: "2025 – 2026",
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
          institution: "Talento Tech · Gobierno de la Ciudad de Buenos Aires",
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
          title: "Inglés — Avanzado",
          institution: "AACI / Britland English Institute",
          year: "2020",
          type: "Idioma",
        },
      ],
    },
    diff: {
    eyebrow: "Valor diferencial",
    title: "Lo que aporto al negocio.",
    items: [
      {
        title: "Business + Growth",
        desc: "Entiendo marketing, ventas, operaciones y finanzas para conectar adquisición, pipeline y resultados comerciales.",
      },
      {
        title: "Marketing + Technology",
        desc: "Combino estrategia con CRM, automatización, BI, IA y herramientas digitales para llevar las ideas a ejecución.",
      },
      {
        title: "International B2B",
        desc: "Experiencia desarrollando mercados y oportunidades en Argentina, Uruguay, Chile y Colombia, además de análisis de expansión internacional.",
      },
    ],
    },  
    contact: {
      eyebrow: "Conectemos",
      title1: "¿Listos para construir",
      title2: "algo grande?",
      text: "Explorando selectivamente roles estratégicos en SaaS, tecnología, consultoría y empresas en crecimiento.",
      lookingFor: "Roles de interés",
      location:
        "Buenos Aires, Argentina · Disponible remoto / híbrido / relocalización",
      mail: "Enviame un mail",
      cv: "Descargar CV",
    },
    footer: "Portfolio diseñado y desarrollado por Emilia Donza Bidini",
  },

  en: {
    meta: {
      title: "Emilia Donza Bidini · B2B Marketing & Growth",
      description:
        "B2B Marketing and Growth: Demand Generation, Go-to-Market, international expansion and commercial strategy. Connecting business, data and technology.",
    },
    nav: {
      links: [
        { label: "About", id: "about" },
        { label: "Experience", id: "experience" },
        { label: "Projects", id: "projects" },
        { label: "Events", id: "events" },
        { label: "Skills", id: "skills" },
        { label: "Education", id: "certifications" },
      ],
      contact: "Contact",
      themeLabel: "Toggle theme",
      langLabel: "Cambiar a español",
      langShort: "ES",
      menuLabel: "Open or close menu",
      skip: "Skip to content",
    },
    hero: {
      available: "Marketing B2B & Growth",
      headlineRest:
        "Connecting strategy, business, data and technology to drive growth.",
      sub: "Experience in Demand Generation, Go-to-Market, international expansion, events and commercial strategy for B2B companies.",
      ctaProjects: "View projects",
      ctaCv: "Download CV",
      ctaContact: "Get in touch",
      stats: [
        { num: "331%", label: "sales growth in 2023" },
        { num: "3×", label: "average event attendance" },
        { num: "4 → 13", label: "virtual events in one year" },
        { num: "288K+", label: "LinkedIn impressions" },
      ],
      photoAlt: "Portrait of Emilia Donza Bidini",
    },
    about: {
      eyebrow: "About me",
      title: "Strategy, growth and technology applied to business.",
      p1: "My career evolved from financial analysis into business development, B2B marketing and the growth of technology companies. That combination lets me understand a problem from the business side, work with data, and turn it into a strategy that can actually be executed.",
      p2: "I have worked in Oil & Gas, financial services and geospatial technology, leading marketing, sales, international expansion, events and demand generation. I am especially comfortable in B2B and tech companies that need to professionalize their growth.",
      location: "Buenos Aires, Argentina",
      availability: "Available for remote and hybrid roles",
      cards: [
        {
          icon: "01",
          title: "Strategic thinking at scale",
          desc: "I connect commercial goals with positioning, demand generation, campaigns, events and digital execution.",
        },
        {
          icon: "02",
          title: "International market experience",
          desc: "Business and opportunity development in Argentina, Chile, Colombia and Uruguay, plus market analysis for the UK.",
        },
        {
          icon: "03",
          title: "A tech-native approach to business",
          desc: "I combine marketing, data and technology: BI, CRM, AEM, automation, web development and applied AI.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Professional track record.",
      items: [
        {
          num: "01",
          company: "Aeroterra · Official Esri Distributor",
          role: "Marketing & Growth Lead",
          period: "2025 — Present",
          location: "Buenos Aires, Argentina",
          description:
            "I lead B2B marketing and demand generation for Esri GIS solutions in Argentina and Uruguay, building positioning strategies, campaigns, content and events tied to commercial goals.\n\nI grew average event attendance from 300 to 900 people and increased virtual events from 4 to 13. I also run the LinkedIn strategy, continuously update industry pages, event pages and product landing pages through AEM, and adapt and localize Esri content for local markets.",
          tags: [
            "B2B Marketing",
            "Demand Generation",
            "Growth",
            "Event Marketing",
            "AEM",
          ],
        },
        {
          num: "02",
          company: "Desitec",
          role: "Marketing & Commercial Strategy",
          period: "2021 — 2025",
          location: "Buenos Aires, Argentina",
          description:
            "I led commercial and marketing strategy for a B2B Oil & Gas company, combining positioning, demand generation, sales and international expansion. I managed tenders and sales opportunities for corporate clients such as Techint, YPF, PAE, Pampa Energía, AESA, Cliba, Roemmers, Banco Galicia, Citi, Claro, Movistar and Coca-Cola FEMSA.\n\nI drove sales growth of 331% in 2023 and 129% in 2024, and expanded the company's international presence with sales and exports to Chile, Colombia and Uruguay, along with a UK market analysis. I also positioned the company in remote metering and wrote the four success stories published on its website.",
          tags: [
            "Business Development",
            "Go-to-Market",
            "Revenue Growth",
            "International Expansion",
            "Oil & Gas",
          ],
        },
        {
          num: "03",
          company: "Finantech SAS",
          role: "Financial Analyst",
          period: "2020 — 2021",
          location: "Argentina",
          description:
            "I took part in financial analysis and corporate credit assessment through data modeling, BI tools and report automation to support decision-making.",
          tags: ["Finance", "Business Analysis", "Reporting", "Analytics"],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected cases.",
      items: [
        {
          num: "01",
          title: "Marketing & Growth for GIS Technology",
          category: "Go-to-Market",
          problem:
            "Position GIS solutions in B2B markets with long sales cycles and connect complex technology with concrete business needs across sectors such as Oil & Gas, Utilities and Government.",
          work:
            "Designed and executed Go-to-Market initiatives combining positioning, Demand Generation, content, LinkedIn, email marketing, events and localization of global Esri content for Argentina and Uruguay.",
          result:
            "Grew average event attendance from 300 to 900 people and increased virtual events from 4 to 13.",
          tags: ["GTM", "GIS", "Demand Generation", "B2B"],
        },
        {
          num: "02",
          title: "Desitec International Expansion",
          category: "Business Development",
          problem:
            "Expand a B2B Oil & Gas company beyond Argentina and identify new commercial opportunities across regional markets.",
          work:
            "Developed commercial opportunities, managed tenders and corporate accounts, analyzed markets and supported market entry and business development across Chile, Colombia and Uruguay.",
          result:
            "Expanded commercial operations from Argentina into 3 international markets, alongside an opportunity analysis for the UK.",
          tags: ["Business Development", "Expansion", "LATAM", "Growth"],
        },
        {
          num: "03",
          title: "Revenue Growth & Commercial Strategy",
          category: "Revenue Growth",
          problem:
            "Support the growth of a B2B company by aligning marketing, sales and commercial strategy around revenue objectives.",
          work:
            "Connected positioning, demand generation, business development, tenders and market expansion through a revenue-focused approach. Also positioned new solutions and developed commercial success stories.",
          result:
            "Delivered 331% sales growth in 2023 and 129% in 2024, alongside revenue growth from $105M to $455M and then $1.045B.",
          tags: ["Revenue Growth", "Go-to-Market", "B2B", "Commercial Strategy"],
        },
        {
          num: "04",
          title: "LinkedIn & Content Growth",
          category: "Content & Growth",
          problem:
            "Strengthen the digital presence of a B2B technology company and turn specialized content into market visibility and positioning.",
          work:
            "Manage LinkedIn strategy, content planning, localization of global Esri content, event communications and ongoing updates to industry, product and event pages through AEM.",
          result:
            "Generated 288K+ LinkedIn impressions during the period analyzed, strengthening digital reach and brand positioning.",
          tags: ["LinkedIn", "Content Strategy", "AEM", "B2B"],
        },
      ],
    },
    events: {
      eyebrow: "Strategic Events",
      title: "Community, positioning and demand generation.",
      intro:
        "I lead the planning, communication and execution of in-person and virtual events for the GIS community in Argentina and Uruguay. The goal goes beyond organizing events: it is to build positioning, community, commercial opportunities and technology adoption.",
      stats: [
        { value: "300 → 900", label: "average attendees" },
        { value: "4 → 13", label: "virtual events" },
        { value: "+1,500", label: "participations" },
        { value: "ARG + UY", label: "regional coverage" },
      ],
      items: [
        {
          title: "Esri User Conference Argentina",
          type: "Annual In-Person Event",
          description:
            "End-to-end planning and coordination of Argentina's main GIS gathering: agenda, speakers, sponsors, communication campaigns, logistics and attendee experience.",
          impact: "Brand positioning and key-client relationships",
        },
        {
          title: "Esri User Conference Uruguay",
          type: "In-Person Event",
          description:
            "Organization of the Uruguayan edition, strengthening Esri's regional presence and the geospatial ecosystem in Uruguay.",
          impact: "GIS community building in Uruguay",
        },
        {
          title: "GIS Express Sessions",
          type: "Live Virtual Event",
          description:
            "Design and coordination of online sessions on innovation, use cases and GIS trends for customers and prospects.",
          impact: "Demand generation and market education",
        },
        {
          title: "Technical & Commercial Webinars",
          type: "Demand Generation",
          description:
            "Production and promotion of webinars focused on solution positioning, lead capture and sales acceleration.",
          impact: "Commercial opportunity development",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Business, Growth & Technology.",
      toolsTitle: "Tools & Technologies",
    },
    certs: {
      eyebrow: "Education",
      title: "Education and certifications",
      items: [
        {
          title: "Master's in Big Data and Business Intelligence",
          institution: "Escuela de Negocios Europea de Barcelona",
          year: "2025 – 2026",
          type: "Master's",
        },
        {
          title: "Master's in Business AI",
          institution: "Escuela de Negocios Europea de Barcelona",
          year: "2025 – 2026",
          type: "Master's",
        },
        {
          title: "Bachelor's in Marketing",
          institution: "Instituto Universitario River Plate",
          year: "2021",
          type: "Degree",
        },
        {
          title: "Bachelor's in Business Administration",
          institution: "Instituto Universitario River Plate",
          year: "2023",
          type: "Degree",
        },
        {
          title: "Power BI",
          institution: "Microsoft",
          year: "2024",
          type: "Certification",
        },
        {
          title: "QA Testing",
          institution: "Talento Tech",
          year: "2024",
          type: "Course",
        },
        {
          title: "Full Stack Web Development",
          institution: "Talento Tech · Buenos Aires City Government",
          year: "2024",
          type: "Course",
        },
        {
          title: "Programming Fundamentals",
          institution: "Egg Cooperation",
          year: "2024",
          type: "Course",
        },
        {
          title: "Digital Marketing",
          institution: "Platzi",
          year: "2023",
          type: "Course",
        },
        {
          title: "Adobe Creative Suite",
          institution: "Platzi",
          year: "2023",
          type: "Tools",
        },
        {
          title: "English — Advanced",
          institution: "AACI / Britland English Institute",
          year: "2020",
          type: "Language",
        },      
      ],
    },
    diff: {
    eyebrow: "Differentiators",
    title: "What I bring to the business.",
    items: [
      {
        title: "Business + Growth",
        desc: "I understand marketing, sales, operations and finance, allowing me to connect acquisition, pipeline and commercial results.",
      },
      {
        title: "Marketing + Technology",
        desc: "I combine strategy with CRM, automation, BI, AI and digital tools to turn ideas into execution.",
      },
      {
        title: "International B2B",
        desc: "Experience developing markets and opportunities across Argentina, Uruguay, Chile and Colombia, plus international expansion analysis.",
      },
    ],
  },
    contact: {
      eyebrow: "Let's connect",
      title1: "Ready to build",
      title2: "something great?",
      text: "Selectively exploring strategic roles in SaaS, technology, consulting and growing companies.",
      lookingFor: "Roles of interest",
      location:
        "Buenos Aires, Argentina · Open to remote / hybrid / relocation",
      mail: "Send me an email",
      cv: "Download CV",
    },
    footer: "Portfolio designed and developed by Emilia Donza Bidini",
  },
} as const;

/* ─────────────────────────────────────────────────────────────
   APP
───────────────────────────────────────────────────────────── */
function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved === "light" || saved === "dark") return saved;
  } catch {}
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "es" || saved === "en") return saved;
  } catch {}
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

const eyebrow =
  "text-xs font-semibold uppercase tracking-widest text-muted-foreground";
const h2Class =
  "font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground";

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang, t]);

  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));
  const toggleTheme = () =>
    setTheme((x) => (x === "light" ? "dark" : "light"));

  const navLinkClass =
    "text-sm font-medium text-white/60 hover:text-[#3FB8C6] focus-visible:text-[#3FB8C6] transition-colors";
  const iconBtnClass =
    "h-8 min-w-8 px-2 flex items-center justify-center rounded-full text-white/60 hover:text-white focus-visible:text-white transition-colors";

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-full"
      >
        {t.nav.skip}
      </a>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
        style={{
          background: "rgba(0,0,0,0.94)",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <nav
          className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
          aria-label="Principal"
        >
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="https://i.imgur.com/qPkbrKD.png"
              alt="Emilia Donza Bidini"
              width={44}
              height={44}
              className="w-[44px] h-[44px] object-contain transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {t.nav.links.map((link) => (
              <a key={link.id} href={`#${link.id}`} className={navLinkClass}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              aria-label={t.nav.langLabel}
              className={`${iconBtnClass} text-xs font-semibold tracking-wider border border-white/15`}
            >
              {t.nav.langShort}
            </button>
            <button
              onClick={toggleTheme}
              aria-label={t.nav.themeLabel}
              className={iconBtnClass}
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full ml-1 hover:opacity-90 transition-opacity"
              style={{ background: TEAL, color: "#fff" }}
            >
              {t.nav.contact}
            </a>
            <button
              className="md:hidden text-white/60 hover:text-white p-1"
              aria-label={t.nav.menuLabel}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
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
            {[...t.nav.links, { label: t.nav.contact, id: "contact" }].map(
              (link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-sm text-white/60 hover:text-[#3FB8C6]"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        )}
      </header>

      <main>
        {/* ── HERO ────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 text-foreground opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${TEAL}18 0%, transparent 70%)`,
            }}
          />

          <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
            <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-center">
              {/* LEFT */}
              <div>
                {/* Foto en mobile / tablet */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="lg:hidden mb-6"
                >
                  <img
                    src="https://i.imgur.com/pCVOcQ7.png"
                    alt={t.hero.photoAlt}
                    width={112}
                    height={112}
                    className="w-28 h-28 rounded-2xl object-cover object-top shadow-lg border border-border/40"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 mb-6"
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
                  <span
                    className="text-xs font-medium"
                    style={{ color: TEAL }}
                  >
                    {t.hero.available}
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
                  className="font-display text-5xl md:text-7xl lg:text-[60px] font-extrabold tracking-tight leading-none mb-6 text-foreground"
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
                    {t.hero.headline}
                  </span>{" "}
                  {t.hero.headlineRest}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="text-sm text-muted-foreground max-w-xl leading-relaxed mb-6"
                >
                  {t.hero.sub}
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  className="flex flex-wrap gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-10"
                >
                  {heroTags.map((tag, i) => (
                    <li key={tag} className="flex items-center gap-2">
                      {tag}
                      {i < heroTags.length - 1 && (
                        <span aria-hidden="true" style={{ color: TEAL }}>
                          •
                        </span>
                      )}
                    </li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.65 }}
                  className="flex flex-wrap items-center gap-4 mb-16"
                >
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity"
                    style={{ background: TEAL, color: "#fff" }}
                  >
                    {t.hero.ctaProjects} <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={CV_FILES[lang]}
                    download
                    className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-medium px-5 py-2.5 rounded-full hover:bg-muted transition-colors"
                  >
                    <Download size={14} /> {t.hero.ctaCv}
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2.5 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t.hero.ctaContact}
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-px border border-border rounded-2xl overflow-hidden bg-border"
                >
                  {t.hero.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="bg-background px-6 py-6 flex flex-col justify-center min-h-[100px]"
                        >
                          <div className="font-display text-2xl font-bold text-foreground mb-1.5 whitespace-nowrap">
                            {stat.num}
                          </div>
                          <div className="text-xs text-muted-foreground leading-snug">
                            {stat.label}
                          </div>
                        </div>
                                      ))}
                </motion.div>
              </div>

              {/* RIGHT — foto desktop */}
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
                  alt={t.hero.photoAlt}
                  width={320}
                  height={400}
                  fetchPriority="high"
                  className="w-full max-w-[320px] aspect-[4/5] rounded-2xl object-cover object-top shadow-xl border border-border/40"
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-px h-12 bg-gradient-to-b from-border to-transparent" />
          </motion.div>
        </section>

        {/* ── ABOUT (fondo base) ─────────────────────────────── */}
        <section
          id="about"
          className="scroll-mt-16 py-32 border-t border-border"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <Reveal>
                  <p className={`${eyebrow} mb-8`}>{t.about.eyebrow}</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6 leading-snug">
                    {t.about.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                    {t.about.p1}
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-muted-foreground leading-relaxed mb-10 text-sm">
                    {t.about.p2}
                  </p>
                </Reveal>
                <Reveal delay={0.25}>
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={13} />
                      {t.about.location}
                    </div>
                    <div
                      className="flex items-center gap-2 text-sm font-medium"
                      style={{ color: TEAL }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: TEAL }}
                      />
                      {t.about.availability}
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="space-y-3 pt-2 md:pt-14">
                {t.about.cards.map((item, i) => (
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

        {/* ── EXPERIENCE (gris) ──────────────────────────────── */}
        <section
          id="experience"
          className="scroll-mt-16 py-32 border-t border-border bg-muted/40"
        >
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <p className={`${eyebrow} mb-3`}>{t.experience.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className={`${h2Class} mb-16`}>{t.experience.title}</h2>
            </Reveal>
            <div>
              {t.experience.items.map((exp, i) => (
                <Reveal key={exp.num} delay={0.08 * i}>
                  <div className="grid md:grid-cols-[72px_1fr_180px] gap-6 py-10 border-t border-border hover:bg-background/50 transition-colors rounded-lg -mx-3 px-3">
                    <div className="font-mono text-xs text-muted-foreground pt-1">
                      {exp.num}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-3">
                        <h3 className="font-display text-base font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          · {exp.company}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xl space-y-2">
                        {exp.description.split("\n\n").map((para, j) => (
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

        {/* ── PROJECTS (base) ────────────────────────────────── */}
        <section
          id="projects"
          className="scroll-mt-16 py-32 border-t border-border"
        >
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <p className={`${eyebrow} mb-3`}>{t.projects.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className={`${h2Class} mb-16`}>{t.projects.title}</h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {t.projects.items.map((proj, i) => (
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
                    <h3 className="font-display text-base font-semibold text-foreground mb-3">
                      {proj.title}
                    </h3>
                    <div className="space-y-5 flex-1">
                      <div>
                        <div
                          className="text-[10px] font-semibold uppercase tracking-widest mb-1.5"
                          style={{ color: TEAL }}
                        >
                          Qué hice
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {proj.problem}
                        </p>
                      </div>

                      <div>
                        <div
                          className="text-[10px] font-semibold uppercase tracking-widest mb-1.5"
                          style={{ color: TEAL }}
                        >
                          Cómo lo hice
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {proj.work}
                        </p>
                      </div>

                      <div>
                        <div
                          className="text-[10px] font-semibold uppercase tracking-widest mb-1.5"
                          style={{ color: TEAL }}
                        >
                          Resultado
                        </div>
                        <p className="text-sm font-semibold text-foreground leading-relaxed">
                          {proj.result}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4 mt-6">
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

        {/* ── EVENTS (gris) ──────────────────────────────────── */}
        <section
          id="events"
          className="scroll-mt-16 py-32 border-t border-border bg-muted/40"
        >
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <p className={`${eyebrow} mb-3`}>{t.events.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className={`${h2Class} mb-6`}>{t.events.title}</h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-sm text-muted-foreground max-w-3xl mb-10 leading-relaxed">
                {t.events.intro}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
                {t.events.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-border rounded-xl px-5 py-4 bg-background"
                  >
                    <div
                      className="font-display text-lg md:text-xl font-bold whitespace-nowrap"
                      style={{ color: TEAL }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-5">
              {t.events.items.map((event, i) => (
                <Reveal key={event.title} delay={0.08 * i}>
                  <div className="border border-border rounded-2xl p-6 bg-background hover:border-[#0D6E7A]/40 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div
                      className="text-xs font-semibold uppercase tracking-wider mb-3"
                      style={{ color: TEAL }}
                    >
                      {event.type}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">
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
          </div>
        </section>

        {/* ── SKILLS (base) ──────────────────────────────────── */}
        <section
          id="skills"
          className="scroll-mt-16 py-32 border-t border-border"
        >
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <p className={`${eyebrow} mb-3`}>{t.skills.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className={`${h2Class} mb-16`}>{t.skills.title}</h2>
            </Reveal>
            <div className="grid md:grid-cols-4 gap-12">
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
                  {t.skills.toolsTitle}
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

        {/* ── CERTIFICATIONS (gris) ──────────────────────────── */}
        <section
          id="certifications"
          className="scroll-mt-16 py-32 border-t border-border bg-muted/40"
        >
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <p className={`${eyebrow} mb-3`}>{t.certs.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className={`${h2Class} mb-16`}>{t.certs.title}</h2>
            </Reveal>
            <div>
              {t.certs.items.map((cert, i) => (
                <Reveal key={cert.title} delay={0.05 * i}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5 border-t border-border hover:bg-background/50 rounded-lg -mx-3 px-3 transition-colors">
                    <span className="w-28 shrink-0 text-center text-xs font-medium px-2 py-0.5 rounded border border-border text-muted-foreground whitespace-nowrap self-start sm:self-auto">
                      {cert.type}
                    </span>
                    <span className="text-sm font-medium text-foreground sm:flex-1">
                      {cert.title}
                    </span>
                    <div className="flex items-center justify-between sm:justify-end gap-6">
                      <span className="text-sm text-muted-foreground sm:text-right">
                        {cert.institution}
                      </span>
                      <span className="text-xs text-muted-foreground w-24 text-right whitespace-nowrap shrink-0">
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

        {/* ── DIFFERENTIATORS (base) ─────────────────────────── */}
        <section className="py-32 border-t border-border">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <p className={`${eyebrow} mb-3`}>{t.diff.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className={`${h2Class} mb-16`}>{t.diff.title}</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5">
              {t.diff.items.map((item, i) => (
                <Reveal key={item.title} delay={0.08 * i}>
                  <div className="border border-border rounded-2xl p-6 bg-card hover:border-[#0D6E7A]/40 transition-all h-full">
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

        {/* ── CTA / CONTACTO ─────────────────────────────────── */}
        <section
          id="contact"
          className="scroll-mt-16 py-32 border-t border-border"
          style={{ background: "#0A0A0A" }}
        >
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Reveal>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-7"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {t.contact.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
                style={{ color: "#FFFFFF" }}
              >
                {t.contact.title1}
                <br />
                {t.contact.title2}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p
                className="text-sm leading-relaxed mb-8 max-w-sm mx-auto"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {t.contact.text}
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="max-w-2xl mx-auto mb-8">
                <div
                  className="text-[11px] font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {t.contact.lookingFor}
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {lookingFor.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 rounded-full"
                      style={{
                        color: "rgba(255,255,255,0.75)",
                        border: "1px solid rgba(255,255,255,0.15)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex items-center justify-center gap-2 mb-10">
                <MapPin size={12} style={{ color: "rgba(255,255,255,0.5)" }} />
                <span
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {t.contact.location}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:emidonza@gmail.com"
                  className="inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  <Mail size={14} />
                  {t.contact.mail}
                </a>
                <a
                  href={CV_FILES[lang]}
                  download
                  className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-colors hover:bg-white/10"
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <Download size={14} />
                  {t.contact.cv}
                </a>
                <a
                  href="https://www.linkedin.com/in/emiliadonzabidini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-colors hover:bg-white/10"
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  LinkedIn <ArrowUpRight size={14} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} · {t.footer}
          </span>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm">
            <a
              href="mailto:emidonza@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              emidonza@gmail.com
            </a>
            <span
              aria-hidden="true"
              className="hidden md:block text-muted-foreground"
            >
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