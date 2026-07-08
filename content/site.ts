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
  {
    title: "Medicine Inventory",
    description: "Add medicines with batch numbers, expiry dates, generic names, dosage forms and strength. Get instant low-stock and expiry alerts.",
    icon: Pill,
  },
  {
    title: "Patient Records",
    description: "Complete patient profiles with medical history, allergies, blood group and outstanding balance tracking. Share read-only portal link with patients.",
    icon: Users,
  },
  {
    title: "Billing & Invoices",
    description: "Create professional invoices in seconds. Support for cash, JazzCash, EasyPaisa and card. Thermal 58mm/80mm and A4 invoice templates.",
    icon: CreditCard,
  },
  {
    title: "Expiry Alerts",
    description: "Automatic weekly email and push notification digest every Monday. See expired, expiring in 30 days and low stock in one report. Export to PDF.",
    icon: BadgeCheck,
  },
  {
    title: "Digital Prescriptions",
    description: "Write digital prescriptions with dosage, frequency and duration. Print A5 letterhead PDF. Convert prescription to invoice in one click.",
    icon: FileText,
  },
  {
    title: "Appointment Tracking",
    description: "Schedule patient visits with time slots. Record vital signs, diagnosis and medicines given during each visit. Monthly calendar view included.",
    icon: Activity,
  },
  {
    title: "Lab Test Tracking",
    description: "Order and track CBC, blood sugar, X-ray and 30+ common tests. Enter panel results with H/L flags. Upload result PDF or image to Cloudinary.",
    icon: Stethoscope,
  },
  {
    title: "Supplier Management",
    description: "Full supplier database with payment history, outstanding balances, delivery performance score and star ratings. Track which supplier provides which medicines.",
    icon: Boxes,
  },
  {
    title: "Purchase Orders",
    description: "Create orders for suppliers, receive stock and track payments. Auto-updates medicine inventory when order is received.",
    icon: ShieldCheck,
  },
  {
    title: "Reports & Analytics",
    description: "Revenue trends, top-selling medicines, top patients by spending. Filter by any date range. Export as branded PDF or CSV spreadsheet.",
    icon: BarChart3,
  },
  {
    title: "AI Medicine Assistant",
    description: "Powered by Google Gemini and Groq. Ask about side effects, drug interactions, dosages. Auto-fill medicine details. Smart reorder suggestions from sales data.",
    icon: QrCode,
  },
  {
    title: "Role Management",
    description: "Admin, Doctor and Pharmacist roles with different permissions. Staff invited via email with temporary password. Deactivate accounts instantly.",
    icon: Lock,
  },
  {
    title: "Document Storage",
    description: "Upload patient ID cards, previous prescriptions, batch certificates and drug licenses. All files stored on Cloudinary CDN. Attach documents to any record.",
    icon: Cloud,
  },
  {
    title: "WhatsApp Reminders",
    description: "Send payment reminders to patients with outstanding balance directly via WhatsApp Web. Pre-filled message with balance amount and store name.",
    icon: Bell,
  },
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
  {
    name: "Free Trial",
    price: "Free",
    period: "14 days",
    description: "Try every feature free for 14 days. No credit card required.",
    features: [
      "50 medicines",
      "20 patients",
      "50 bills per month",
      "1 user account",
      "All features unlocked",
      "PDF invoices & expiry alerts",
    ],
  },
  {
    name: "Basic",
    price: "₨2,999",
    period: "per month",
    description: "For growing pharmacies with a small team and full billing needs.",
    features: [
      "500 medicines",
      "200 patients",
      "3 staff members",
      "Unlimited bills",
      "PDF invoices & reports",
      "WhatsApp reminders",
      "Purchase orders",
      "Expiry alerts",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "₨5,999",
    period: "per month",
    description: "For busy pharmacies needing unlimited capacity and advanced features.",
    features: [
      "Unlimited medicines",
      "Unlimited patients",
      "Unlimited staff",
      "Unlimited bills",
      "Advanced analytics",
      "AI medicine assistant",
      "Audit log",
      "Data backup & restore",
      "Priority support",
    ],
  },
];

export const integrations = ["Barcode scanners", "Thermal printers", "Invoice printers", "Accounting exports", "WhatsApp reminders", "Payment gateways", "Supplier catalogs", "Analytics tools"];
