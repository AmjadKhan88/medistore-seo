import {
  Activity,
  BadgeCheck,
  BarChart3,
  Bell,
  Boxes,
  Cloud,
  CreditCard,
  FileText,
  Lock,
  Pill,
  QrCode,
  ShieldCheck,
  Stethoscope,
  Users
} from "lucide-react";

export const navItems = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const keywords = [
  "Medicine Store Management Software",
  "Medical Inventory System",
  "Pharmacy Management Software",
  "Medicine Billing Software",
  "Medical POS",
  "Medicine Inventory",
  "Pharmacy ERP",
  "Clinic Medicine Software",
  "Medicine Stock Management",
  "Medical Store Dashboard",
  "Healthcare Inventory Software",
  "Medical Billing Software",
  "Hospital Pharmacy Software",
  "Patient Medicine Records",
  "Medical Reports Dashboard",
  "Medicine Expiry Tracking",
  "Medical Inventory Analytics",
  "Medical Shop Software",
  "Medicine CRM",
  "Medical Management SaaS"
];

export const features = [
  { title: "Medicine Inventory", description: "Batch-aware stock records for tablets, syrups, injections, medical supplies, and controlled medicine workflows.", icon: Pill },
  { title: "Patient Records", description: "Maintain patient medicine history, repeat purchase notes, prescription references, and pharmacy service context.", icon: Users },
  { title: "Billing and POS", description: "Fast checkout, discounts, tax-ready invoices, returns, and cashier-friendly medical POS screens.", icon: CreditCard },
  { title: "Stock Alerts", description: "Low stock reminders, reorder points, vendor follow-ups, and daily purchase planning for busy pharmacies.", icon: Bell },
  { title: "Expiry Tracking", description: "Find near-expiry medicine by batch, rack, supplier, and category before it becomes dead inventory.", icon: BadgeCheck },
  { title: "Analytics and Reports", description: "Track revenue, gross margin, inventory turnover, patient demand, and slow-moving SKUs.", icon: BarChart3 },
  { title: "Secure Authentication", description: "Redirect users to your existing protected dashboard while the website remains SEO-focused.", icon: Lock },
  { title: "Role Management", description: "Support owner, pharmacist, cashier, inventory manager, and accountant responsibilities in the app.", icon: ShieldCheck },
  { title: "Prescription Tracking", description: "Link prescriptions, medicine instructions, and purchase trails for cleaner pharmacy operations.", icon: FileText },
  { title: "Barcode Support", description: "Prepare scanning flows for faster item lookup, fewer billing mistakes, and cleaner stock counts.", icon: QrCode },
  { title: "Medical Reports", description: "Daily closing, medicine movement, expiry summaries, purchase ledgers, and performance reports.", icon: Activity },
  { title: "Cloud Backup", description: "Cloud-first data access that keeps medical shop operations available across devices.", icon: Cloud },
  { title: "Supplier Control", description: "Track vendors, purchases, returns, payable balances, and repeat ordering patterns.", icon: Boxes },
  { title: "Clinic Ready", description: "Useful for clinic dispensaries, hospital pharmacies, and multi-counter medicine shops.", icon: Stethoscope }
];

export const faqs = [
  {
    question: "Is this website the pharmacy dashboard?",
    answer: "No. This Next.js project is the SEO and marketing website. Login, dashboard, authentication, and management features redirect to your existing React management application."
  },
  {
    question: "Can I change the dashboard URL later?",
    answer: "Yes. Set NEXT_PUBLIC_APP_URL in Vercel and every Login, Demo, Get Started, Try Demo, and Start Free button will point to that URL."
  },
  {
    question: "Does the site support Google rich results?",
    answer: "Yes. It includes Organization, SoftwareApplication, Product, FAQ, Review, Article, BlogPosting, and Breadcrumb JSON-LD helpers across relevant pages."
  },
  {
    question: "Can content move into a CMS?",
    answer: "Yes. The content is isolated in the content directory so Sanity, Contentful, Strapi, or another headless CMS can replace local arrays later."
  },
  {
    question: "Is the website ready for Vercel?",
    answer: "Yes. It uses App Router, static-first rendering, Metadata API, sitemap, robots, security headers, and environment variables suitable for Vercel deployment."
  }
];

export const testimonials = [
  { name: "Ayesha Rahman", role: "Owner, HealthPlus Pharmacy", quote: "We finally stopped finding expired stock during emergencies. The inventory and billing flow made our counters calmer and faster." },
  { name: "Dr. Imran Qureshi", role: "Clinic Director", quote: "The reporting dashboard gave us better control of clinic medicine movement, patient purchases, and supplier ordering." },
  { name: "Maria Chen", role: "Operations Lead", quote: "Our team adopted it quickly because the workflow matches how a real pharmacy works at the counter." }
];

export const pricingPlans = [
  { name: "Starter", price: "$49", description: "For single-location medical stores getting organized.", features: ["Inventory and billing", "Expiry alerts", "Basic reports", "Email support"] },
  { name: "Growth", price: "$99", description: "For busy pharmacies with multiple roles and reports.", features: ["Advanced analytics", "Role management", "Supplier tracking", "Priority support"], popular: true },
  { name: "Enterprise", price: "Custom", description: "For hospital pharmacies, chains, and custom operations.", features: ["Multi-branch workflows", "Custom integrations", "Security review", "Dedicated onboarding"] }
];

export const integrations = ["Barcode scanners", "Thermal printers", "Invoice printers", "Accounting exports", "WhatsApp reminders", "Payment gateways", "Supplier catalogs", "Analytics tools"];
