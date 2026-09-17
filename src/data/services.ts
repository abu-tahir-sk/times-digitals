import { Monitor, Smartphone, PenTool, Video, TrendingUp, Search as SearchIcon, Paintbrush, Sparkles, Layers, Zap, Shield, Target, LayoutTemplate } from "lucide-react";
import React from "react";

export type ServiceFeature = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceData = {
  id: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  features: ServiceFeature[];
  technologies: string[];
  process: ServiceStep[];
};

export const servicesData: Record<string, ServiceData> = {
  "web": {
    id: "web",
    title: "Web Development",
    shortDescription: "Enterprise-grade web solutions tailored for growth.",
    heroHeadline: "High-Performance Web Architecture",
    heroSubheadline: "We engineer scalable, secure, and lightning-fast web applications using modern technologies.",
    features: [
      { title: "React & Next.js", description: "Built on the most powerful modern frontend frameworks.", icon: Monitor },
      { title: "WordPress & CMS", description: "Custom WordPress development and headless CMS solutions.", icon: LayoutTemplate },
      { title: "Scalable Architecture", description: "Designed to handle millions of requests without breaking a sweat.", icon: Layers },
      { title: "Extreme Performance", description: "Sub-second load times that keep your users engaged.", icon: Zap },
      { title: "Enterprise Security", description: "Bank-level encryption and security practices built-in.", icon: Shield },
    ],
    technologies: ["React", "Next.js", "WordPress", "PHP", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    process: [
      { title: "Technical Discovery", description: "We map out your architecture and database requirements." },
      { title: "Prototyping", description: "Wireframing and structural planning before code is written." },
      { title: "Development", description: "Agile sprints delivering functional software every two weeks." },
      { title: "Testing & Launch", description: "Rigorous QA and seamless deployment to production." }
    ]
  },
  "mobile": {
    id: "mobile",
    title: "Mobile App Development",
    shortDescription: "Fluid native experiences for iOS & Android.",
    heroHeadline: "Next-Gen Mobile Experiences",
    heroSubheadline: "Transform your business with beautiful, high-performance native applications for iOS and Android.",
    features: [
      { title: "Cross-Platform", description: "One codebase, deploying seamlessly to both Apple and Google stores.", icon: Smartphone },
      { title: "Native Feel", description: "Silky smooth 60fps animations and intuitive gestures.", icon: Zap },
      { title: "Offline Support", description: "Apps that work perfectly even when the connection drops.", icon: Layers },
      { title: "App Store Optimization", description: "Built to rank high and convert well on app stores.", icon: TrendingUp },
    ],
    technologies: ["React Native", "Swift", "Kotlin", "Firebase", "GraphQL", "Redux", "Framer Motion"],
    process: [
      { title: "User Journey Mapping", description: "Defining how users interact with your app on the go." },
      { title: "UI/UX Design", description: "Pixel-perfect screens tailored for mobile interfaces." },
      { title: "Development", description: "Building robust frontend and backend systems." },
      { title: "App Store Launch", description: "Navigating the complex submission processes for you." }
    ]
  },
  "design": {
    id: "design",
    title: "UI/UX Design",
    shortDescription: "Beautiful interfaces that convert users into customers.",
    heroHeadline: "Design That Drives Growth",
    heroSubheadline: "We craft intuitive, stunning digital interfaces that elevate your brand and maximize conversions.",
    features: [
      { title: "User-Centric Approach", description: "Designing based on real user data and psychology.", icon: PenTool },
      { title: "Design Systems", description: "Scalable component libraries for consistent branding.", icon: Layers },
      { title: "Conversion Optimized", description: "Interfaces designed specifically to increase your KPIs.", icon: Target },
      { title: "Micro-interactions", description: "Delightful animations that make your product feel alive.", icon: Zap },
    ],
    technologies: ["Figma", "Framer", "Adobe XD", "Principle", "Webflow", "Protopie"],
    process: [
      { title: "Research", description: "Understanding your audience and competitors." },
      { title: "Wireframing", description: "Low-fidelity layouts to establish user flow." },
      { title: "Visual Design", description: "Applying colors, typography, and brand identity." },
      { title: "Prototyping", description: "Interactive mockups to test before development." }
    ]
  },
  "video": {
    id: "video",
    title: "Video Editing",
    shortDescription: "Cinematic storytelling and motion graphics.",
    heroHeadline: "Cinematic Visual Storytelling",
    heroSubheadline: "We produce high-end video content that captures attention, evokes emotion, and builds brand loyalty.",
    features: [
      { title: "Motion Graphics", description: "Dynamic animations that explain complex concepts simply.", icon: Video },
      { title: "Color Grading", description: "Professional color correction for that Hollywood look.", icon: Paintbrush },
      { title: "Audio Mixing", description: "Crisp sound design that elevates the visual experience.", icon: Zap },
      { title: "Social Optimization", description: "Formats tailored perfectly for TikTok, Reels, and YouTube.", icon: Smartphone },
    ],
    technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", "Audition"],
    process: [
      { title: "Storyboarding", description: "Planning the visual narrative frame by frame." },
      { title: "Asset Collection", description: "Gathering footage, audio, and graphical elements." },
      { title: "Editing", description: "Cutting, pacing, and assembling the story." },
      { title: "Finishing", description: "Color grading, sound design, and final rendering." }
    ]
  },
  "marketing": {
    id: "marketing",
    title: "Digital Marketing",
    shortDescription: "Data-driven growth strategies.",
    heroHeadline: "Data-Driven Growth Engines",
    heroSubheadline: "We build scalable marketing funnels that predictably turn strangers into loyal customers.",
    features: [
      { title: "Performance Ads", description: "High-ROI campaigns across Meta, Google, and LinkedIn.", icon: TrendingUp },
      { title: "Email Automation", description: "Automated sequences that nurture and convert leads.", icon: Zap },
      { title: "Conversion Tracking", description: "Pixel-perfect tracking to know exactly where money goes.", icon: Target },
      { title: "A/B Testing", description: "Continuous optimization to lower acquisition costs.", icon: Layers },
    ],
    technologies: ["Google Ads", "Meta Ads", "Klaviyo", "HubSpot", "Google Analytics", "Mixpanel"],
    process: [
      { title: "Audience Research", description: "Identifying your ideal customer profile." },
      { title: "Funnel Strategy", description: "Mapping out the steps from ad click to purchase." },
      { title: "Campaign Launch", description: "Setting up creatives, copy, and targeting." },
      { title: "Optimization", description: "Scaling winning ads and cutting the losers." }
    ]
  },
  "seo": {
    id: "seo",
    title: "SEO Optimization",
    shortDescription: "Dominate search rankings and drive organic traffic.",
    heroHeadline: "Dominate Search Results",
    heroSubheadline: "Stop paying for every click. Build a sustainable organic traffic machine that brings customers to you.",
    features: [
      { title: "Technical SEO", description: "Fixing crawl errors and optimizing site architecture.", icon: SearchIcon },
      { title: "Content Strategy", description: "Targeting high-intent keywords that drive sales.", icon: PenTool },
      { title: "Link Building", description: "Acquiring high-authority backlinks to boost trust.", icon: Shield },
      { title: "Local SEO", description: "Dominating local search results for physical businesses.", icon: Target },
    ],
    technologies: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "SurferSEO"],
    process: [
      { title: "Site Audit", description: "Identifying technical bottlenecks holding you back." },
      { title: "Keyword Research", description: "Finding gaps in the market you can exploit." },
      { title: "On-Page Optimization", description: "Updating metadata, headers, and internal links." },
      { title: "Off-Page Growth", description: "Executing strategic outreach for link acquisition." }
    ]
  },
  "branding": {
    id: "branding",
    title: "Branding",
    shortDescription: "Memorable identities that stand out.",
    heroHeadline: "Crafting Iconic Identities",
    heroSubheadline: "We build premium brand identities that resonate with your audience and command higher perceived value.",
    features: [
      { title: "Visual Identity", description: "Logos, color palettes, and typography systems.", icon: Paintbrush },
      { title: "Brand Voice", description: "The tone and personality of your communications.", icon: PenTool },
      { title: "Guidelines", description: "Comprehensive rules for keeping your brand consistent.", icon: Layers },
      { title: "Brand Strategy", description: "Positioning your business uniquely in the market.", icon: Target },
    ],
    technologies: ["Illustrator", "Photoshop", "InDesign", "Figma", "Midjourney"],
    process: [
      { title: "Discovery", description: "Uncovering your core values and market position." },
      { title: "Concepting", description: "Developing initial visual directions." },
      { title: "Refinement", description: "Polishing the chosen direction into a final identity." },
      { title: "Delivery", description: "Handing off assets and comprehensive guidelines." }
    ]
  },
  "ai": {
    id: "ai",
    title: "AI Automation",
    shortDescription: "Supercharge your team's output with custom AI.",
    heroHeadline: "Intelligent Business Automation",
    heroSubheadline: "Leverage cutting-edge LLMs and AI workflows to automate tedious tasks and multiply your team's output.",
    features: [
      { title: "Custom LLMs", description: "Fine-tuned models trained on your specific company data.", icon: Sparkles },
      { title: "Workflow Automation", description: "Connecting tools to eliminate manual data entry.", icon: Zap },
      { title: "AI Agents", description: "Autonomous bots that handle customer support or research.", icon: Monitor },
      { title: "Data Analysis", description: "AI that uncovers hidden insights in your databases.", icon: Target },
    ],
    technologies: ["OpenAI API", "LangChain", "Pinecone", "Make.com", "Python", "Vercel AI SDK"],
    process: [
      { title: "Process Audit", description: "Identifying bottlenecks ripe for AI automation." },
      { title: "Solution Design", description: "Architecting the AI workflow and data pipelines." },
      { title: "Implementation", description: "Building and testing the AI integration." },
      { title: "Deployment", description: "Training your team on how to use the new automated systems." }
    ]
  }
};
