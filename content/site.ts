import {
  Activity,
  BadgeCheck,
  BarChart3,
  BedDouble,
  Bell,
  Brain,
  Building2,
  ClipboardList,
  CreditCard,
  Database,
  FileText,
  Fingerprint,
  FlaskConical,
  Heart,
  Lock,
  Package,
  Pill,
  Receipt,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  Truck,
  Users,
  Wallet,
  Wifi,
} from "lucide-react";

export const navItems = [
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions/hospital" },
  { label: "Pricing", href: "/pricing" },
  // { label: "Docs", href: "/docs" },
  { label: "Docs", href: "/documentation" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const keywords = [
  "EliteHMS",
  "Hospital Management System Pakistan",
  "HMS Software Pakistan",
  "Pharmacy Management Software Pakistan",
  "IPD Management Software",
  "OPD Queue System Pakistan",
  "Electronic Medical Records EMR Pakistan",
  "Blood Bank Management System",
  "DRAP Compliance Software",
  "Medical Billing Software Pakistan",
  "Medicine Inventory System",
  "Lab Management Software Pakistan",
  "Nurse Station Software",
  "OT Scheduling Software",
  "Healthcare SaaS Pakistan",
  "Medical Store Software Pakistan",
  "Hospital Accounting Software",
  "Insurance Panel Management Pakistan",
  "AI Diagnosis Software",
  "Predictive Medicine Demand",
];

// Top 12 features shown on homepage
export const features = [
  {
    title: "Medicine Inventory",
    description:
      "Track every medicine by batch, expiry, barcode, and reorder level. Alerts fire automatically before stock runs out or medicines expire.",
    icon: Pill,
    href: "/features/medicine-inventory",
  },
  {
    title: "IPD Management",
    description:
      "Full inpatient lifecycle: admission, doctor orders, MAR sheets, nursing notes, running charges, and automated discharge billing.",
    icon: Building2,
    href: "/features/ipd-management",
  },
  {
    title: "Billing & Invoices",
    description:
      "Create bills in seconds. Supports Cash, JazzCash, EasyPaisa, insurance, and credit. Stock auto-deducts. PDF shared via WhatsApp.",
    icon: Receipt,
    href: "/features/billing-invoices",
  },
  {
    title: "Electronic Medical Records",
    description:
      "10-section EMR with unified timeline — bills, prescriptions, labs, vitals, and admissions merged into one chronological view.",
    icon: FileText,
    href: "/features/emr",
  },
  {
    title: "OPD Queue",
    description:
      "Token-based queue with Normal/VIP/Urgent priority. TV display with voice announcements via Web Speech API. No hardware needed.",
    icon: ClipboardList,
    href: "/features/opd-queue",
  },
  {
    title: "Lab Tests",
    description:
      "Order CBC, LFT, HbA1c, and 30+ tests. Critical values trigger instant Socket.io alerts to all logged-in devices.",
    icon: FlaskConical,
    href: "/features/lab-tests",
  },
  {
    title: "Blood Bank",
    description:
      "Track blood units by group, screening tests, and expiry. 56-day donor eligibility enforcement. Critical stock alerts fire automatically.",
    icon: Heart,
    href: "/features/blood-bank",
  },
  {
    title: "AI Diagnosis",
    description:
      "Gemini + Groq powered differential diagnosis with probability scores, red flags, Pakistan-specific investigations, and treatment plans.",
    icon: Brain,
    href: "/features/ai-diagnosis",
  },
  {
    title: "DRAP Compliance",
    description:
      "Controlled medicines register, batch tracking, expiry destruction records, and one-click PDF for DRAP inspector visits.",
    icon: ShieldCheck,
    href: "/features/drap-compliance",
  },
  {
    title: "Nurse Station",
    description:
      "Two-panel nursing hub: MAR administration (Given/Skipped/Refused), vitals with critical alerts, and pharmacy medicine requests.",
    icon: Activity,
    href: "/features/nurse-station",
  },
  {
    title: "OT Scheduling",
    description:
      "Schedule surgeries with team assignment, duration, and OT room. Conflict detection prevents double-booking. Pre-op checklist included.",
    icon: Stethoscope,
    href: "/features/ot-scheduling",
  },
  {
    title: "Payroll & Salary",
    description:
      "FBR 2024 income tax slabs, EOBI deductions, absence tracking, advance repayments, and professional payslip PDF generation.",
    icon: Wallet,
    href: "/features/payroll",
  },
];

// All 14 quick-links for features index
export const allFeatureLinks = [
  { title: "Medicine Inventory", href: "/features/medicine-inventory", icon: Pill },
  { title: "Billing & Invoices", href: "/features/billing-invoices", icon: Receipt },
  { title: "Purchase Orders", href: "/features/purchase-orders", icon: Truck },
  { title: "Expiry Alerts", href: "/features/expiry-alerts", icon: BadgeCheck },
  { title: "DRAP Compliance", href: "/features/drap-compliance", icon: ShieldCheck },
  { title: "Prescription OCR", href: "/features/prescription-ocr", icon: FileText },
  { title: "Patient Management", href: "/features/patient-management", icon: Users },
  { title: "Appointments", href: "/features/appointments", icon: Activity },
  { title: "Lab Tests", href: "/features/lab-tests", icon: FlaskConical },
  { title: "Vital Signs", href: "/features/vital-signs", icon: Activity },
  { title: "EMR", href: "/features/emr", icon: FileText },
  { title: "Online Booking", href: "/features/online-booking", icon: Wifi },
  { title: "Ward & Beds", href: "/features/ward-bed-management", icon: BedDouble },
  { title: "IPD Management", href: "/features/ipd-management", icon: Building2 },
  { title: "OPD Queue", href: "/features/opd-queue", icon: ClipboardList },
  { title: "Nurse Station", href: "/features/nurse-station", icon: Activity },
  { title: "Doctor Orders", href: "/features/doctor-orders", icon: Stethoscope },
  { title: "OT Scheduling", href: "/features/ot-scheduling", icon: Activity },
  { title: "Blood Bank", href: "/features/blood-bank", icon: Heart },
  { title: "Radiology", href: "/features/radiology", icon: FileText },
  { title: "AI Diagnosis", href: "/features/ai-diagnosis", icon: Brain },
  { title: "Demand Forecasting", href: "/features/demand-forecasting", icon: TrendingUp },
  { title: "Knowledge Base", href: "/features/knowledge-base", icon: Database },
  { title: "Authentication", href: "/features/authentication", icon: Fingerprint },
  { title: "Staff Management", href: "/features/staff-management", icon: Lock },
  { title: "Accounting", href: "/features/accounting", icon: Wallet },
  { title: "Insurance Panels", href: "/features/insurance-panels", icon: BadgeCheck },
  { title: "Payroll", href: "/features/payroll", icon: CreditCard },
  { title: "WhatsApp Broadcast", href: "/features/whatsapp-broadcast", icon: Bell },
  { title: "Patient Feedback", href: "/features/patient-feedback", icon: Heart },
  { title: "Reports & Analytics", href: "/features/reports-analytics", icon: BarChart3 },
  { title: "Navigation", href: "/features/navigation", icon: Package },
  { title: "Patient Matching", href: "/features/patient-matching", icon: Users },
  { title: "Prescriptions", href: "/features/prescriptions", icon: FileText },
  { title: "Subscription", href: "/features/subscription-pricing", icon: Package },
];

export const faqs = [
  {
    question: "Is EliteHMS suitable for a small pharmacy in Pakistan?",
    answer:
      "Yes. The Pharmacy Basic plan (₨1,999/month) covers medicine inventory, billing with barcode scanning, patient records, purchase orders, expiry alerts, and WhatsApp reminders. It is designed specifically for single-location pharmacies and medical stores in Pakistan.",
  },
  {
    question: "Does EliteHMS support JazzCash and EasyPaisa payments?",
    answer:
      "Yes. The billing module accepts Cash, JazzCash, EasyPaisa, Bank Transfer, Insurance Panel, and Credit. Each payment method is tracked separately in reports and payment method analysis.",
  },
  {
    question: "What is DRAP compliance and does EliteHMS support it?",
    answer:
      "DRAP is the Drug Regulatory Authority of Pakistan. EliteHMS provides a controlled medicines register (Form-10 equivalent), batch tracking from purchase to patient, expiry destruction records with pharmacist signature, and a one-click compliance PDF for inspector visits. This is available on the Hospital Pro plan.",
  },
  {
    question: "Can patients book appointments online without calling the clinic?",
    answer:
      "Yes. Each clinic gets a public booking page (elitehms.online/book/your-clinic). Patients choose doctor, date, and available time slot — no login required. The clinic receives a real-time Socket.io notification for every new booking. Available on Clinic plan and above.",
  },
  {
    question: "How does the AI Diagnosis Assistant work?",
    answer:
      "Doctors enter patient age, gender, symptoms (per body system), vital signs, and lab results. Gemini 1.5 Flash and Groq Llama-3.1 process the case and return ranked differential diagnoses with probability scores, red flags, recommended investigations with PKR cost ranges, treatment protocols, and Pakistan-specific clinical notes. All sessions are saved and searchable.",
  },
  {
    question: "Is patient data secure in EliteHMS?",
    answer:
      "Yes. EliteHMS uses JWT access tokens (15-minute expiry), httpOnly refresh token cookies (30 days), optional Google Authenticator 2FA with recovery codes, and a maximum of 5 active sessions per user. All passwords are bcrypt hashed. Admin can remotely logout all sessions for any staff member instantly.",
  },
  {
    question: "Can I export reports for FBR and my accountant?",
    answer:
      "Yes. The Advanced Accounting module generates a P&L statement, medicine margin analysis, expense register, and FBR GST summary (output tax minus input tax). All can be exported as Excel files compatible with the FBR IRIS portal. Available on Pharmacy Pro plan and above.",
  },
  {
    question: "Does the IPD module support medication administration records (MAR)?",
    answer:
      "Yes. Once a doctor creates medicine orders for an admitted patient, the system auto-calculates administration times (e.g. Twice daily → 08:00 and 20:00). Nurses record each dose as Given, Skipped (with reason), or Refused (with reason). Each action logs the nurse's name and exact timestamp.",
  },
  {
    question: "How does the OPD TV display work?",
    answer:
      "EliteHMS includes a full-screen public page (/opd-display/:storeId) that shows the current token and next 3 in queue. It requires no login and can run on any laptop connected to a TV via HDMI. Voice announcements (Web Speech API) call out token numbers and doctor names — no additional hardware or speaker system needed.",
  },
  {
    question: "What blood groups does the blood bank module support?",
    answer:
      "All 8 standard blood groups: A+, A−, B+, B−, O+, O−, AB+, AB−. Each group's stock is tracked separately. When any group falls below 2 units, a critical alert fires to all logged-in staff immediately via Socket.io.",
  },
  {
    question: "Does EliteHMS work on mobile phones?",
    answer:
      "Yes. EliteHMS is a fully responsive web application that works on any device with a modern browser — smartphones, tablets, and desktops. No app download required. The Prescription OCR scanner uses the phone camera directly in the browser.",
  },
  {
    question: "How is the subscription paid in Pakistan?",
    answer:
      "After selecting a plan, a pre-filled WhatsApp message is composed to the EliteHMS number. Payment is accepted via JazzCash, EasyPaisa, or direct bank transfer. Send the payment screenshot via WhatsApp and your subscription is activated within 2 hours — no international credit card needed.",
  },
  {
    question: "Can I try EliteHMS before subscribing?",
    answer:
      "Yes. The Free Trial gives you 14 days of full access to every feature across all modules with no credit card required. You can test billing, IPD, AI diagnosis, OPD queue, and every other module before making a decision.",
  },
  {
    question: "What insurance panels are supported in Pakistan?",
    answer:
      "EliteHMS supports Jubilee Health Insurance, EFU Health, Adamjee, State Life, IGI, TPL Health, EOBI, PESSI, SESSI, Zakat Fund, and corporate HR panels. You can also configure custom panel names for any panel not listed.",
  },
  {
    question: "How many staff accounts can I add?",
    answer:
      "The number of staff accounts depends on your plan. Pharmacy Basic supports 3 staff, Pharmacy Pro supports unlimited staff. Clinic, Hospital Basic, and Hospital Pro all include unlimited staff accounts with role-based access control.",
  },
];

export const testimonials = [
  {
    name: "Dr. Tariq Mehmood",
    role: "Medical Director, Al-Shifa Hospital, Peshawar",
    quote:
      "The IPD module and MAR sheets transformed how our nurses document medication. The real-time critical vitals alerts have already prevented two serious incidents this year.",
  },
  {
    name: "Muhammad Usman",
    role: "Owner, City Medical Store, Lahore",
    quote:
      "Expiry alerts and DRAP compliance reports saved us from a potential fine during a surprise inspector visit. Worth every rupee of the subscription.",
  },
  {
    name: "Dr. Sana Mir",
    role: "Clinic Director, HealthFirst Clinic, Islamabad",
    quote:
      "Our OPD patients love the token system with voice announcements. We went from complaints about waiting to compliments about how organized we are.",
  },
];

// All 6 EliteHMS pricing plans — exact prices from documentation
export const pricingPlans = [
  {
    name: "Free Trial",
    price: "₨0",
    period: "14 days",
    description: "Full access to every feature. No credit card. No commitment. Start today.",
    features: [
      "All modules unlocked",
      "Medicine inventory & billing",
      "Patient records & prescriptions",
      "Reports & analytics",
      "Expiry alerts",
      "14 days full access",
    ],
    cta: "Start Free Trial",
    popular: false,
    highlight: "No card required",
  },
  {
    name: "Pharmacy Basic",
    price: "₨1,999",
    period: "per month",
    description: "For small pharmacies and medical stores needing inventory, billing, and stock control.",
    features: [
      "Medicine inventory & barcode scanning",
      "Billing (Cash, JazzCash, EasyPaisa)",
      "Patient records",
      "Purchase orders & suppliers",
      "Expiry alerts",
      "3 staff accounts",
      "WhatsApp reminders",
      "PDF invoices & reports",
    ],
    cta: "Get Started",
    popular: false,
    highlight: null,
  },
  {
    name: "Pharmacy Pro",
    price: "₨3,999",
    period: "per month",
    description: "Established pharmacies needing lab integration, AI features, and accounting.",
    features: [
      "Everything in Pharmacy Basic",
      "Lab test tracking",
      "Appointments & scheduling",
      "P&L accounting & FBR GST export",
      "AI Prescription OCR scanner",
      "Demand forecasting",
      "Unlimited staff accounts",
    ],
    cta: "Get Started",
    popular: true,
    highlight: "Most Popular",
  },
  {
    name: "Clinic",
    price: "₨5,999",
    period: "per month",
    description: "OPD clinics and diagnostic centers needing EMR, queue management, and patient booking.",
    features: [
      "Everything in Pharmacy Pro",
      "OPD queue with TV display & voice",
      "Electronic Medical Records (EMR)",
      "Vital signs monitoring",
      "Online appointment booking page",
      "WhatsApp broadcast campaigns",
      "Patient feedback & ratings",
      "RAG knowledge base",
    ],
    cta: "Get Started",
    popular: false,
    highlight: null,
  },
  {
    name: "Hospital Basic",
    price: "₨10,999",
    period: "per month",
    description: "Small to mid-size hospitals needing full inpatient management.",
    features: [
      "Everything in Clinic",
      "IPD management & MAR sheets",
      "Ward & bed management",
      "Nurse station",
      "OT scheduling with conflict detection",
      "Blood bank management",
      "Doctor orders & nursing notes",
      "Radiology module",
    ],
    cta: "Get Started",
    popular: false,
    highlight: null,
  },
  {
    name: "Hospital Pro",
    price: "₨20,999",
    period: "per month",
    description: "Full-service hospitals needing insurance billing, payroll, DRAP compliance, and AI.",
    features: [
      "Everything in Hospital Basic",
      "Insurance & panel management",
      "Salary & payroll (FBR slabs + EOBI)",
      "DRAP compliance reports",
      "AI Diagnosis Assistant (Gemini + Groq)",
      "Advanced accounting",
      "Priority support",
    ],
    cta: "Get Started",
    popular: false,
    highlight: "Full Hospital",
  },
];

export const integrations = [
  "JazzCash",
  "EasyPaisa",
  "Bank Transfer",
  "Google Authenticator (2FA)",
  "Barcode Scanners (ZXing)",
  "WhatsApp Web",
  "Cloudinary (Image/DICOM Storage)",
  "Socket.io Real-Time Alerts",
  "Gemini AI (Google)",
  "Groq LLM",
  "Qdrant Vector Database",
  "FBR IRIS Portal (Excel Export)",
  "Jubilee Health Insurance",
  "EFU Health",
  "EOBI",
];

export const stats = [
  { value: "35+", label: "Modules & Features" },
  { value: "6", label: "Pricing Plans" },
  { value: "5", label: "Staff Role Types" },
  { value: "100%", label: "Web-Based — No Install" },
];
