export const projects = [
  {
    title: "Change Radar",
    slug: "change-radar",
    summary: "Enterprise PMO platform, 550K LOC.",
    oneLine: "Enterprise PMO with 8 AI engines. 550K lines, built solo.",
    details:
      "8 AI engines, multi-tenant SaaS architecture, and SOC 2-grade security built solo in 8 months.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "8 AI engines"],
    privateLabel: "Private - available on request",
    featured: true,
    problem:
      "Enterprise PMOs are drowning in manual change tracking across sprawling organisations, which means missed dependencies, late risks, and leadership decisions made on stale information.",
    solution:
      "Austin built a multi-tenant SaaS with eight AI engines that automate impact analysis, risk scoring, stakeholder mapping, and change readiness assessment so portfolio teams can see where change risk is accumulating before it becomes political fallout.",
    architecture:
      "Next.js frontend -> FastAPI backend -> PostgreSQL + Redis -> 8 AI engine microservices -> Multi-tenant auth layer",
    architectureNodes: [
      "Next.js frontend",
      "FastAPI backend",
      "PostgreSQL + Redis",
      "8 AI engine microservices",
      "Multi-tenant auth layer",
    ],
    timeToBuild: "8 months solo",
    repo: { type: "private", label: "Private - available on request" },
    screenshotLabel: "Change Radar dashboard",
  },
  {
    title: "AI Due Diligence Agent",
    slug: "ai-due-diligence",
    summary: "Multi-agent system for automated business analysis.",
    oneLine: "Four AI agents analyse company docs in parallel. LangGraph + RAG.",
    details:
      "Four specialised AI agents analyse documents in parallel with human checkpoints, RAG, and LangSmith tracing.",
    tech: ["Next.js", "FastAPI", "LangGraph", "LangSmith", "ChromaDB", "SSE"],
    problem:
      "Due diligence is manual, expensive, and slow. Analysts spend weeks reading dense document sets, stitching together findings, and manually reconciling contradictions.",
    solution:
      "Austin built a LangGraph multi-agent system with dedicated Financial, Legal, Market, and Synthesiser agents. Documents are analysed in parallel, streamed back live, and held at a human approval checkpoint before final synthesis.",
    architecture:
      "Next.js frontend -> FastAPI + SSE streaming -> LangGraph StateGraph -> Financial Agent + Legal Agent + Market Agent (parallel) -> Human Checkpoint -> Synthesiser Agent -> ChromaDB (RAG) -> LangSmith (tracing)",
    architectureNodes: [
      "Next.js frontend",
      "FastAPI + SSE streaming",
      "LangGraph StateGraph",
      "Financial + Legal + Market agents",
      "Human checkpoint",
      "Synthesiser agent",
      "ChromaDB (RAG)",
      "LangSmith tracing",
    ],
    timeToBuild: "1 day",
    repo: {
      type: "github",
      href: "https://github.com/Snack-JPG/ai-due-diligence",
      label: "GitHub",
    },
    screenshotLabel: "Analysis dashboard",
  },
  {
    title: "OpenClaw Knowledge Base",
    slug: "openclaw-kb",
    summary: "Organisational memory system for AI agents.",
    oneLine: "Agents propose knowledge, humans approve. Markdown files in folders.",
    details:
      "Markdown-first architecture with propose-save workflows, trust controls, and conflict detection.",
    tech: ["Bash", "Markdown", "CLI", "Git", "Knowledge ops"],
    problem:
      "AI agents start dumb. Without durable business context, they repeatedly ask the same questions and lose organisational knowledge between sessions.",
    solution:
      "Austin built an organisational memory system where agents propose captures during real work, humans approve what matters, and a markdown-first knowledge base compounds over time with full git auditability.",
    architecture:
      "OpenClaw Agent -> SKILL.md instructions -> kb CLI (init/propose/approve/search/lint/index) -> Markdown files in folders -> .kb-index.json cross-references -> Git version control",
    architectureNodes: [
      "OpenClaw Agent",
      "SKILL.md instructions",
      "kb CLI",
      "Markdown knowledge files",
      ".kb-index.json",
      "Git version control",
    ],
    timeToBuild: "1 day (specced + built)",
    repo: {
      type: "github",
      href: "https://github.com/Snack-JPG/openclaw-kb",
      label: "GitHub",
    },
    screenshotLabel: "Knowledge capture flow",
  },
  {
    title: "OpenClaw Outreach",
    slug: "openclaw-outreach",
    summary: "Cold email copilot replacing $97/mo SaaS tools.",
    oneLine: "Replaces Instantly.ai. AI writes the emails, classifies the replies.",
    details:
      "Sequence engine, reply classification, and personalisation built around lightweight local-first state.",
    tech: ["OpenClaw", "CLI", "Himalaya", "YAML", "State machine"],
    problem:
      "Cold email tools are expensive, lock away your data, and call basic merge fields AI personalisation while still requiring operators to babysit campaigns.",
    solution:
      "Austin built an AI-powered outreach copilot that researches each lead, personalises messages with actual context, manages sequence state, and classifies replies with full LLM reasoning instead of brittle tag logic.",
    architecture:
      "OpenClaw Agent -> SKILL.md -> outreach CLI -> campaign.yaml config -> state.json (per-lead tracking) -> Himalaya SMTP/IMAP -> Reply Classification Prompt -> Daily Briefing",
    architectureNodes: [
      "OpenClaw Agent",
      "SKILL.md",
      "outreach CLI",
      "campaign.yaml",
      "state.json",
      "Himalaya SMTP/IMAP",
      "Reply classification prompt",
      "Daily briefing",
    ],
    timeToBuild: "1 day",
    repo: {
      type: "github",
      href: "https://github.com/Snack-JPG/openclaw-outreach",
      label: "GitHub",
    },
    screenshotLabel: "Outreach dashboard",
  },
  {
    title: "QuantFlow",
    slug: "quantflow",
    summary: "Real-time order book intelligence platform.",
    oneLine: "Microstructure analytics and manipulation detection for retail traders.",
    details:
      "Tracks 15+ microstructure metrics, 8 manipulation detectors, and a custom event-driven backtester.",
    tech: ["Next.js", "FastAPI", "WebSockets", "TradingView", "D3.js", "Redis"],
    problem:
      "Retail traders rarely get access to the market microstructure tooling that hedge funds use, which leaves them trading without visibility into order flow quality or manipulation signals.",
    solution:
      "Austin built a real-time intelligence platform that ingests exchange feeds, computes over fifteen microstructure metrics, detects eight manipulation patterns, and visualises the resulting state in a trader-friendly dashboard.",
    architecture:
      "Exchange WebSocket feeds (Binance, Coinbase, Kraken) -> FastAPI gateway -> Microstructure metrics engine -> Pattern detection (rule-based + AI) -> WebSocket broadcast -> Next.js dashboard (TradingView charts, D3.js heatmaps)",
    architectureNodes: [
      "Exchange WebSocket feeds",
      "FastAPI gateway",
      "Metrics engine",
      "Pattern detection",
      "WebSocket broadcast",
      "Next.js dashboard",
    ],
    timeToBuild: "5 days",
    repo: {
      type: "github",
      href: "https://github.com/Snack-JPG/quantflow",
      label: "GitHub",
    },
    screenshotLabel: "Live trading view",
  },
  {
    title: "GHL MCP Server",
    slug: "ghl-mcp",
    summary: "50-tool MCP integration for GoHighLevel.",
    oneLine: "The missing AI control layer for GoHighLevel.",
    details:
      "Connects AI agents to CRM, email, SMS, calendar, pipelines, and the operational surface area businesses actually use.",
    tech: ["TypeScript", "MCP Protocol", "GoHighLevel API", "AI tools"],
    problem:
      "GoHighLevel is powerful but disconnected from AI agents, so businesses cannot safely expose their CRM, conversations, or scheduling systems to automation through natural language.",
    solution:
      "Austin built a 50-tool MCP server that surfaces the full GHL API to agents, making contacts, conversations, calendars, pipelines, emails, and SMS programmable through a single natural-language interface.",
    architecture:
      "AI Agent (OpenClaw/Claude) -> MCP Protocol -> GHL MCP Server (TypeScript) -> GoHighLevel API v2 -> CRM data, conversations, pipelines, calendars",
    architectureNodes: [
      "AI Agent",
      "MCP Protocol",
      "GHL MCP Server",
      "GoHighLevel API v2",
      "CRM + comms data",
    ],
    timeToBuild: "3 days",
    repo: {
      type: "github",
      href: "https://github.com/Snack-JPG/ghl-mcp",
      label: "GitHub",
    },
    screenshotLabel: "MCP tool integration",
  },
  {
    title: "chase.md",
    slug: "chase-md",
    summary: "AI document chasing for UK accountancy practices.",
    oneLine: "Automated client chasing across email, SMS, and WhatsApp.",
    details:
      "Intelligent multi-channel chasing (email -> SMS -> WhatsApp), AI doc recognition, and progress gamification. Solves a GBP945M industry problem.",
    tech: ["Next.js", "Supabase", "Stripe", "AI workflows", "WhatsApp"],
    problem:
      "UK accountancy practices lose hundreds of hours every year chasing clients for tax documents, creating a repeated operational bottleneck that scales with every new client.",
    solution:
      "Austin built an AI-powered chasing system with escalation across email, SMS, and WhatsApp, document recognition, progress gamification, and a no-login client portal that removes friction from the collection process.",
    architecture:
      "Next.js frontend -> Supabase (PostgreSQL + Auth) -> AI chasing engine -> Multi-channel dispatcher (Email/SMS/WhatsApp) -> Client portal -> Stripe billing",
    architectureNodes: [
      "Next.js frontend",
      "Supabase",
      "AI chasing engine",
      "Multi-channel dispatcher",
      "Client portal",
      "Stripe billing",
    ],
    timeToBuild: "4 weeks",
    repo: {
      type: "github",
      href: "https://github.com/Snack-JPG/chase.md",
      label: "GitHub",
    },
    screenshotLabel: "Document chase timeline",
  },
  {
    title: "Solana TX Explainer",
    slug: "solana-tx-explainer",
    summary: "Blockchain transaction parser and visualiser.",
    oneLine: "Plain-English transaction decoding for Solana users.",
    details:
      "Decodes Solana transactions into human-readable explanations with full UI. Built to demonstrate real-time blockchain data processing.",
    tech: ["Next.js", "TypeScript", "Solana Web3.js", "Helius API"],
    problem:
      "Solana transactions are opaque to normal users because explorers surface raw signatures and instruction data rather than plain-language explanations of what actually happened.",
    solution:
      "Austin built a decoder pipeline that takes enriched transaction data, parses the instruction graph, and renders a clear English explanation in a UI that feels accessible instead of forensic.",
    architecture:
      "Next.js frontend -> Solana Web3.js -> Helius API (enriched transaction data) -> Transaction decoder -> Human-readable renderer",
    architectureNodes: [
      "Next.js frontend",
      "Solana Web3.js",
      "Helius API",
      "Transaction decoder",
      "Human-readable renderer",
    ],
    timeToBuild: "2 days",
    repo: {
      type: "github",
      href: "https://github.com/Snack-JPG/solana-tx-explainer",
      label: "GitHub",
    },
    screenshotLabel: "Transaction decode view",
  },
  {
    title: "TradeHub Directory",
    slug: "tradehub-directory",
    summary: "Business directory for UK tradesmen.",
    oneLine: "Automated prospecting and site generation for local trades businesses.",
    details:
      "Live at tradehub.directory. Prospecting pipeline with automated site generation for local trades businesses.",
    tech: ["Google Places API", "Claude Code", "Vercel", "Static sites"],
    problem:
      "Local tradesmen need websites to win work, but agencies are expensive and owner-operators do not have spare time to commission or manage a custom build.",
    solution:
      "Austin designed an automated pipeline that scrapes prospects, generates site briefs, builds bespoke websites with AI assistance, deploys them, and uses the finished result as the outreach wedge.",
    architecture:
      "Google Places API -> Prospect scraper -> Site brief generator -> Claude Code (site builder) -> Static HTML on Vercel/Cloudflare -> Cold outreach pipeline",
    architectureNodes: [
      "Google Places API",
      "Prospect scraper",
      "Site brief generator",
      "Claude Code site builder",
      "Static deploy",
      "Cold outreach pipeline",
    ],
    timeToBuild: "1 week",
    repo: {
      type: "external",
      href: "https://tradehub.directory",
      label: "Live site",
    },
    screenshotLabel: "Pipeline overview",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
