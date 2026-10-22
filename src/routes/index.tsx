import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import {
  Mail, MapPin, Github, Linkedin, ArrowRight, Menu, X, Cloud,
  ShieldCheck, Activity, Package, Boxes, GitBranch, FileCode, Terminal, Layers, Briefcase, GraduationCap, Code2, BarChart3, Users,
  Search, Cpu, CheckCircle2,
} from "lucide-react";
import { TECH_STACK_ITEMS, TECH_STACK_CATEGORIES, type TechCategory } from "../data/tech-stack";

const TITLE = "Muaz Pathan — Expert in Cloud Architecture & Systems";
const DESC =
  "Portfolio of Muaz Pathan, an expert in cloud architecture, distributed systems, infrastructure as code, multi-cloud platforms (AWS, Azure, GCP), and enterprise DevOps.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "muazpathan0416@gmail.com";
const GITHUB = "https://github.com/MuazPathan";
const LINKEDIN = "https://www.linkedin.com/in/muaz-pathan/";

const NAV = [
  ["about", "About"],
  ["cloud", "Cloud Architecture"],
  ["techstack", "Tech Stack"],
  ["skills", "Core Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["contact", "Contact"],
] as const;

const SKILL_GROUPS = [
  { icon: BarChart3, title: "Data & Systems Analysis", items: ["System telemetry", "Data validation", "SAP ERP", "Capacity planning", "Cost reconciliation", "Operational metrics"] },
  { icon: Code2, title: "Cloud & Development", items: ["Python", "SQL", "Bash / Shell", "Terraform / HCL", "TypeScript", "Docker", "REST APIs", "GitOps"] },
  { icon: Users, title: "Leadership & Operations", items: ["Team leadership", "Operational efficiency", "Incident management", "Change management", "Cross-functional execution"] },
  { icon: Briefcase, title: "Architectural Excellence", items: ["High availability design", "Disaster recovery planning", "Zero-trust security", "FinOps optimization", "Multi-cloud architecture"] },
];

const ARCHITECTURE_PILLARS: {
  iconFile: string;
  title: string;
  badge: string;
  text: string;
  items: [string, string][];
}[] = [
  {
    iconFile: "AWS-Dark.svg",
    title: "AWS (Amazon Web Services)",
    badge: "Cloud Architecture",
    text: "Designing highly resilient, auto-scaling enterprise systems using AWS compute, networking, security, and data services.",
    items: [
      ["EC2 & Auto Scaling", "dynamic compute fleets, spot instances, and launch templates"],
      ["S3 & Glacier", "lifecycle-managed tiered storage with object lock policies"],
      ["IAM & Organizations", "least-privilege access, SCPs, and cross-account federation"],
      ["VPC & Transit Gateway", "multi-tier private subnets, NAT, endpoints, and routing tables"],
      ["Lambda & EventBridge", "decoupled serverless event-driven processing"],
      ["RDS & Aurora", "multi-AZ relational databases with automated failover and read replicas"],
      ["CloudWatch & CloudTrail", "centralized metrics, distributed tracing, and compliance auditing"],
    ],
  },
  {
    iconFile: "Azure-Dark.svg",
    title: "Microsoft Azure",
    badge: "Cloud Architecture",
    text: "Architecting cloud solutions, enterprise identity federation, and hybrid-cloud infrastructures on Microsoft Azure.",
    items: [
      ["Virtual Machines", "scalable compute instances and scale sets with availability zones"],
      ["Blob Storage", "immutable, geo-redundant storage with tiering lifecycle rules"],
      ["Entra ID (Azure AD)", "enterprise identity, RBAC, and conditional access policies"],
      ["Virtual Network (VNet)", "isolated virtual networks, peering, and Network Security Groups"],
      ["Azure Functions", "event-driven serverless computing with enterprise integrations"],
      ["Azure Monitor", "centralized log analytics, health diagnostics, and proactive alerts"],
    ],
  },
  {
    iconFile: "GCP-Dark.svg",
    title: "Google Cloud Platform (GCP)",
    badge: "Cloud Architecture",
    text: "Building resilient distributed workloads, containerized applications, and global software-defined networks on GCP.",
    items: [
      ["Compute Engine", "custom machine configurations and managed instance groups"],
      ["Cloud Storage", "global multi-region buckets with granular IAM controls"],
      ["IAM & Service Accounts", "short-lived credentials, workload identity, and role binding"],
      ["VPC & Cloud Router", "global software-defined virtual private cloud networks"],
      ["Cloud Run", "fully managed, auto-scaling containerized execution"],
      ["Cloud Operations", "integrated logging, synthetic monitoring, and SLO tracking"],
    ],
  },
  {
    iconFile: "Docker.svg",
    title: "Containers & Packaging",
    badge: "Containerization",
    text: "Standardizing application packaging with minimal, multi-stage, hardened, and reproducible container images.",
    items: [
      ["Docker", "multi-stage builds, non-root user execution, and layer caching"],
      ["OCI Compliance", "standardized container specifications and image signing"],
      ["Docker Compose", "multi-container local orchestration and service topology parity"],
      ["Container Registries", "secure artifact management with automated vulnerability scans"],
    ],
  },
  {
    iconFile: "Kubernetes.svg",
    title: "Kubernetes (K8s) Orchestration",
    badge: "Orchestration",
    text: "Production clustering, declarative reconciliation, automated self-healing, and traffic routing at scale.",
    items: [
      ["Pods & Deployments", "declarative configurations and zero-downtime rolling updates"],
      ["Services & Ingress", "L4/L7 ingress controllers, SSL termination, and service mesh"],
      ["ConfigMaps & Secrets", "externalized configurations and secure secret injection"],
      ["Horizontal Pod Autoscaler", "metric-driven autoscaling and cluster node scaling"],
      ["StatefulSets & Storage", "persistent volume claims, CSI drivers, and stateful workloads"],
    ],
  },
  {
    iconFile: "GithubActions-Dark.svg",
    title: "DevOps & CI/CD Automation",
    badge: "CI/CD & Automation",
    text: "Continuous integration and deployment pipelines automating testing, vulnerability audits, and production releases.",
    items: [
      ["Git Workflows", "trunk-based branching, branch protection rules, and signed commits"],
      ["GitHub Actions & GitLab CI", "matrix workflows, reusable pipeline actions, and artifact caching"],
      ["Automated Security", "SAST, dependency analysis, and container image scans in pipelines"],
      ["Deployment Strategies", "blue-green, canary, and rolling deployment methodologies"],
    ],
  },
  {
    iconFile: "Terraform-Dark.svg",
    title: "Infrastructure as Code (IaC)",
    badge: "IaC & GitOps",
    text: "Treating infrastructure as version-controlled, auditable, and repeatable code across heterogeneous cloud environments.",
    items: [
      ["Terraform", "declarative multi-cloud provisioning and resource management"],
      ["Modular Architecture", "DRY, reusable, and version-pinned infrastructure modules"],
      ["State Management", "remote state locks, S3/blob backends, and state encryption"],
      ["Ansible Automation", "idempotent configuration management and server orchestration"],
    ],
  },
  {
    iconFile: "Linux-Dark.svg",
    title: "Linux & Systems Engineering",
    badge: "Systems & OS",
    text: "Deep Linux operating system administration, performance optimization, kernel tuning, and shell automation.",
    items: [
      ["Linux Administration", "systemd service management, cgroups, kernel tuning, and storage"],
      ["Bash / Shell Scripting", "robust automation scripts with error traps and POSIX compliance"],
      ["Process & Memory Tuning", "resource limits, load monitoring, and performance profiling"],
      ["Server Hardening", "SSH key authentication, firewall configurations, and CIS standards"],
    ],
  },
  {
    iconFile: "Cloudflare-Dark.svg",
    title: "Cloud Networking & Security",
    badge: "Security & Net",
    text: "Zero-trust network architecture, defense-in-depth, encrypted transit, and edge protection.",
    items: [
      ["IP & CIDR Subnetting", "isolated network boundaries, route tables, and NAT gateways"],
      ["DNS & Edge Networks", "Route 53, Cloudflare edge, GeoDNS, and anycast routing"],
      ["TLS / HTTPS", "end-to-end cryptographic transit and automated certificate renewals"],
      ["Firewalls & Security Groups", "stateful packet inspection, WAF policies, and DDoS protection"],
      ["Least Privilege Security", "zero-trust identity governance and auditable access control"],
    ],
  },
  {
    iconFile: "Prometheus.svg",
    title: "Observability, SRE & FinOps",
    badge: "Observability",
    text: "Full-stack monitoring, incident response workflows, and FinOps cloud cost optimization.",
    items: [
      ["Prometheus & Grafana", "custom metric scrapers, PromQL dashboards, and alerting rules"],
      ["Centralized Logging", "structured JSON log ingestion, index retention, and search"],
      ["High Availability & DR", "multi-region disaster recovery, RTO/RPO targets, and failover"],
      ["FinOps & Cost Management", "right-sizing instances, reserved capacity, and tag allocations"],
    ],
  },
  {
    iconFile: "Nginx.svg",
    title: "Architectural Patterns",
    badge: "System Design",
    text: "Distributed architectural paradigms engineered for peak scalability, resilience, and operational simplicity.",
    items: [
      ["Microservices & Decoupling", "asynchronous messaging queues, pub/sub, and loose coupling"],
      ["Event-Driven Architecture", "distributed event streams and idempotent message handlers"],
      ["Load Balancing", "application and network load balancers with health checks"],
      ["Fault Tolerance", "circuit breaking, rate limiting, and graceful degradation"],
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Commercial Manager",
    org: "Reliance Trends",
    place: "Margao",
    period: "12/2025 – 05/2026",
    points: [
      "Led a high-performing team of 5 cashiers and 30 sales associates.",
      "Managed POS and SAP workflows, cash reconciliation, and transactional data validation.",
      "Enforced stringent operational controls and exception handling procedures.",
      "Produced advanced analytical reports and trend reconciliations using Excel and SAP.",
    ],
  },
  {
    role: "Assistant Department Manager",
    org: "ABFRL (Pantaloons)",
    place: "Margao",
    period: "06/2024 – 12/2025",
    points: [
      "Oversaw front-line cashiering systems, POS infrastructure, and departmental operations.",
      "Maintained transactional data integrity and performed detailed operational analytics.",
      "Spearheaded process improvements that streamlined cashier throughput and reporting.",
      "Prepared comprehensive operational reports, audit datasets, and performance dashboards.",
    ],
  },
];

const PROJECTS = [
  {
    name: "COMPASS",
    tagline: "Collaborative Platform for Academic Reflection, Support & Success",
    text: "An enterprise-ready academic support platform featuring mentor connectivity, knowledge repositories, peer learning, and learning analytics engineered with a modular backend ready for AI categorization.",
    stack: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP", "MySQL", "Figma"],
  },
  {
    name: "ALMAS",
    tagline: "Intelligent AI Voice Assistant",
    text: "A low-latency voice assistant system incorporating wake-word activation, real-time STT/TTS pipelines, device hardware automation, media controls, and modular REST microservices.",
    stack: ["Flutter", "Dart", "Android SDK", "Speech Recognition", "TTS", "REST APIs", "Spotify / YouTube Music"],
  },
  {
    name: "ECOTRACE",
    tagline: "Intelligent Carbon & Sustainability Tracking System",
    text: "A cloud-connected sustainability tracking architecture featuring location analytics, carbon footprint calculation algorithms, dynamic reporting dashboards, and an extensible cloud database.",
    stack: ["Flutter", "Dart", "REST APIs", "Firebase / Node.js", "Cloud Firestore", "Geolocation", "Charts"],
  },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function NetworkMotif({ className = "" }: { className?: string }) {
  const nodes: [number, number][] = [[40, 60], [140, 30], [230, 90], [120, 150], [260, 190], [60, 210], [190, 250]];
  const links: [number, number][] = [[0, 1], [1, 2], [0, 3], [3, 2], [2, 4], [3, 5], [4, 6], [5, 6], [3, 6]];
  return (
    <svg viewBox="0 0 300 280" className={className} aria-hidden="true">
      {links.map(([a, b], i) => {
        const [x1, y1] = nodes[a]!;
        const [x2, y2] = nodes[b]!;
        return <line key={i} className="net-line" x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1" />;
      })}
      {nodes.map(([x, y], i) => (
        <circle key={i} className="net-node" cx={x} cy={y} r="3" style={{ animationDelay: `${i * 0.5}s` }} />
      ))}
    </svg>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="reveal mb-10">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`} className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="border-2 border-foreground bg-card px-2.5 py-1 font-mono text-xs font-semibold text-foreground shadow-[var(--shadow-hard-sm)]">{children}</span>;
}

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  useReveal();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const filteredTechItems = useMemo(() => {
    return TECH_STACK_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const btnPrimary = "btn-brut bg-accent text-accent-foreground";
  const btnGhost = "btn-brut bg-yellow text-foreground";

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="sky-bg pointer-events-none fixed inset-0 -z-10" />
      <div className="grid-bg pointer-events-none fixed inset-0 -z-10" />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="glass-orb animate-drift-slow right-[3%] top-[70%] hidden h-24 w-24 lg:block" />
        <div className="glass-orb animate-drift right-[-2rem] top-[40%] hidden h-16 w-16 md:block" />
        <div className="glass-orb animate-drift left-[-2.5rem] top-[85%] hidden h-20 w-20 md:block" />
        <div className="glass-pane animate-drift-slow right-[14%] top-[14%] hidden h-40 w-32 rotate-12 md:block" />
        <NetworkMotif className="absolute bottom-[-4rem] left-[30%] w-[34rem] opacity-15" />
      </div>

      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-accent-foreground">Skip to content</a>

      <header className={`fixed inset-x-0 top-0 z-40 transition ${scrolled || open ? "glass-strong" : ""}`}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Primary">
          <a href="#top" className="font-display border-2 border-foreground bg-yellow px-2 py-0.5 text-lg shadow-[var(--shadow-hard-sm)]">
            Muaz<span className="text-accent">.</span>
          </a>
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="border-2 border-transparent px-3 py-1.5 text-sm font-semibold transition hover:border-foreground hover:bg-yellow">{label}</a>
              </li>
            ))}
          </ul>
          <a href={`mailto:${EMAIL}`} className="hidden btn-brut bg-yellow px-4 py-2 text-sm lg:inline-flex">Get in touch</a>
          <button className="border-2 border-foreground bg-yellow p-2 shadow-[var(--shadow-hard-sm)] lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {open && (
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 pb-5 lg:hidden">
            {NAV.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)} className="block border-2 border-foreground bg-card px-3 py-3 font-semibold hover:bg-yellow">{label}</a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 pt-28 pb-16">
          <NetworkMotif className="animate-drift pointer-events-none absolute right-0 top-28 hidden w-[26rem] opacity-70 md:block" />
          
          <div className="reveal max-w-3xl">
            <p className="inline-flex -rotate-2 items-center gap-2 border-2 border-foreground bg-lime px-3 py-1 font-mono text-xs font-semibold shadow-[var(--shadow-hard-sm)]">
              <MapPin className="h-3.5 w-3.5 text-accent" /> Margao, Goa, India
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl md:text-8xl">
              Muaz <span className="bg-yellow px-2 box-decoration-clone">Pathan</span>
            </h1>
            <p className="mt-5 w-fit border-2 border-foreground bg-accent px-3 py-1 font-mono text-sm font-semibold text-accent-foreground shadow-[var(--shadow-hard-sm)] sm:text-base">
              Expert in Cloud Architecture & Systems Engineering
            </p>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Designing and operating resilient, enterprise-scale cloud infrastructures, distributed container platforms,
              and automated GitOps workflows across multi-cloud environments (AWS, Azure, GCP).
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#cloud" className={btnPrimary}>Cloud Architecture <ArrowRight className="h-4 w-4" /></a>
              <a href="#techstack" className={btnGhost}>Explore Tech Stack</a>
            </div>
            <div className="mt-8 flex gap-3">
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn-brut bg-card p-3"><Github className="h-5 w-5" /></a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn-brut bg-card p-3"><Linkedin className="h-5 w-5" /></a>
              <a href={`mailto:${EMAIL}`} aria-label="Email" className="btn-brut bg-card p-3"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about" eyebrow="01 — About" title="Systems-minded, cloud architect">
          <div className="grid gap-6 md:grid-cols-5">
            <div className="glass reveal rounded-md p-7 md:col-span-3">
              <p className="leading-relaxed text-muted-foreground">
                I'm Muaz Pathan, an expert in cloud architecture, distributed systems, and infrastructure engineering.
                I specialize in architecting highly available, secure, and auto-scaling platforms across AWS, Azure, and Google Cloud,
                leveraging modern container orchestration with Kubernetes and Infrastructure as Code with Terraform.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                My hands-on experience in high-volume operations management—directing teams, managing SAP workflows, and performing
                rigorous transactional analysis—gives me a distinct operational edge: I design cloud systems that are not just technically
                sound, but financially optimized, auditable, and resilient under real-world pressure.
              </p>
            </div>
            <dl className="glass reveal grid gap-5 rounded-md p-7 md:col-span-2">
              {[
                ["Specialization", "Cloud Architecture & Distributed Systems"],
                ["Core Platforms", "AWS, Azure, GCP, Kubernetes, Terraform"],
                ["Experience", "Operations Management, Data & Systems Leadership"],
                ["Based in", "Margao, Goa, India"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="eyebrow">{k}</dt>
                  <dd className="mt-1 font-semibold text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Cloud Architecture */}
        <Section id="cloud" eyebrow="02 — Cloud Architecture" title="Cloud Architecture & Systems Engineering">
          <div className="reveal -mt-4 mb-10 flex flex-col gap-4 border-[3px] border-foreground bg-lime p-5 shadow-[var(--shadow-hard)] sm:flex-row sm:items-center">
            <span className="w-fit shrink-0 border-2 border-foreground bg-card px-2 py-1 font-mono text-xs font-bold uppercase">
              Architectural Standard
            </span>
            <p className="text-sm font-medium text-foreground sm:text-base">
              Architecting with zero-trust security, multi-region high availability, automated self-healing, and proactive FinOps cost efficiency across every cloud deployment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ARCHITECTURE_PILLARS.map((pillar) => (
              <article key={pillar.title} className="glass glass-hover reveal flex flex-col rounded-md p-6">
                <div className="flex items-start justify-between gap-3">
                  <img
                    src={`/icons/${pillar.iconFile}`}
                    alt={pillar.title}
                    className="h-10 w-10 object-contain drop-shadow-sm transition-transform duration-200 hover:scale-110"
                  />
                  <span className="border-2 border-foreground bg-card px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pillar.text}</p>
                <ul className="mt-4 space-y-2 border-t-2 border-dashed border-foreground pt-4">
                  {pillar.items.map(([name, desc]) => (
                    <li key={name} className="text-sm">
                      <span className="font-semibold text-foreground">{name}</span>
                      <span className="text-muted-foreground"> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* Tech Stack */}
        <Section id="techstack" eyebrow="03 — Tech Stack" title="Complete Tech Stack & Tooling">
          <div className="reveal mb-8 space-y-5">
            <p className="max-w-3xl text-lg text-muted-foreground">
              A comprehensive directory of my technical stack, platforms, languages, runtimes, and developer tooling—all loaded from the project's dark icon suite ({TECH_STACK_ITEMS.length} technologies).
            </p>

            {/* Search and Category Filter */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full max-w-md">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search technologies (e.g. AWS, Docker, Python, Linux)..."
                  className="w-full border-2 border-foreground bg-card py-2 pl-9 pr-4 text-sm font-medium shadow-[var(--shadow-hard-sm)] outline-none focus:bg-yellow"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground hover:text-foreground"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="font-mono text-xs font-semibold text-muted-foreground">
                Showing <span className="font-bold text-foreground">{filteredTechItems.length}</span> of {TECH_STACK_ITEMS.length} items
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {TECH_STACK_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`border-2 border-foreground px-3 py-1 font-mono text-xs font-semibold transition ${
                    selectedCategory === cat
                      ? "bg-accent text-accent-foreground shadow-[var(--shadow-hard-sm)]"
                      : "bg-card text-foreground hover:bg-yellow"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Clean Tech Icons (No boxes) */}
          {filteredTechItems.length > 0 ? (
            <div className="reveal flex flex-wrap items-center justify-center gap-6 sm:gap-7 md:gap-8 py-8 px-2">
              {filteredTechItems.map((item) => (
                <div
                  key={item.file}
                  title={`${item.name} (${item.category})`}
                  className="group relative flex items-center justify-center p-1 transition-transform duration-200 hover:scale-125 hover:z-20 cursor-pointer"
                >
                  <img
                    src={`/icons/${item.file}`}
                    alt={item.name}
                    loading="lazy"
                    className="h-11 w-11 sm:h-12 sm:w-12 md:h-13 md:w-13 object-contain drop-shadow transition-all"
                  />
                  <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-foreground bg-foreground px-2 py-0.5 font-mono text-[10px] font-semibold text-background opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 z-30">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass reveal rounded-md border-2 border-foreground p-10 text-center">
              <p className="text-base font-semibold">No technologies found matching "{searchQuery}"</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="btn-brut mt-4 bg-yellow px-4 py-2 text-xs"
              >
                Reset filters
              </button>
            </div>
          )}
        </Section>

        {/* Skills */}
        <Section id="skills" eyebrow="04 — Skills" title="What I bring to the table">
          <div className="grid gap-5 sm:grid-cols-2">
            {SKILL_GROUPS.map(({ icon: Icon, title, items }) => (
              <article key={title} className="glass glass-hover reveal rounded-md p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-sm border-2 border-foreground bg-yellow p-2.5">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" eyebrow="05 — Experience" title="Where I've led & delivered">
          <ol className="relative space-y-8 border-l-4 border-foreground pl-6 sm:pl-10">
            {EXPERIENCE.map((e) => (
              <li key={e.role} className="reveal relative">
                <span className="absolute -left-[31px] top-7 h-4 w-4 border-2 border-foreground bg-yellow sm:-left-[47px]" />
                <article className="glass glass-hover rounded-md p-6 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold">{e.role}</h3>
                    <span className="font-mono text-xs text-accent">{e.period}</span>
                  </div>
                  <p className="mt-1 text-muted-foreground">{e.org} · {e.place}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="06 — Projects" title="Featured technical projects">
          <div className="grid gap-6 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <article key={p.name} className="glass glass-hover reveal flex flex-col rounded-md p-7">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-3 text-2xl font-bold text-gradient">{p.name}</h3>
                <p className="mt-1 text-sm font-semibold text-foreground">{p.tagline}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="reveal mt-8 text-center">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={btnGhost}>
              <Github className="h-4 w-4" /> More on GitHub
            </a>
          </div>
        </Section>

        {/* Education */}
        <Section id="education" eyebrow="07 — Education" title="Education">
          <article className="glass reveal flex flex-col gap-5 rounded-md p-7 sm:flex-row sm:items-center">
            <span className="w-fit rounded-sm border-2 border-foreground bg-yellow p-3">
              <GraduationCap className="h-7 w-7" />
            </span>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Bachelor of Computer Applications (Computer Science)</h3>
              <p className="mt-1 text-muted-foreground">Shree Damodar College of Commerce and Economics, Margao</p>
            </div>
            <span className="font-mono text-sm text-accent">Expected 2027</span>
          </article>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="08 — Contact" title="Let's connect">
          <div className="glass reveal relative overflow-hidden rounded-lg bg-lime! p-8 sm:p-12">
            <NetworkMotif className="pointer-events-none absolute -right-10 -top-6 w-72 opacity-40" />
            <p className="relative max-w-xl text-lg text-muted-foreground">
              Open to cloud architecture opportunities, engineering leadership roles, and technical collaborations.
            </p>
            <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { href: `mailto:${EMAIL}`, icon: Mail, label: "Email", value: EMAIL },
                { href: LINKEDIN, icon: Linkedin, label: "LinkedIn", value: "in/muaz-pathan", ext: true },
                { href: GITHUB, icon: Github, label: "GitHub", value: "MuazPathan", ext: true },
              ].map(({ href, icon: Icon, label, value, ext }) => (
                <a
                  key={label}
                  href={href}
                  {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="glass glass-hover flex items-center gap-4 rounded-md p-5"
                >
                  <Icon className="h-5 w-5 shrink-0 text-accent" />
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{label}</span>
                    <span className="block truncate font-medium">{value}</span>
                  </span>
                </a>
              ))}
            </div>
            <a href={`mailto:${EMAIL}`} className={`${btnPrimary} relative mt-8`}>
              Send an email <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t-4 border-foreground bg-yellow">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm font-semibold text-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Muaz Pathan</p>
          <div className="flex items-center gap-4">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">GitHub</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">LinkedIn</a>
            <a href="#top" className="underline-offset-4 hover:underline">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
