import {
  Activity,
  BadgeCheck,
  BarChart3,
  BedDouble,
  Bell,
  BookOpen,
  Brain,
  Building2,
  ClipboardList,
  Clock,
  CreditCard,
  Database,
  FileImage,
  FileSearch,
  FileText,
  Fingerprint,
  FlaskConical,
  Heart,
  Lock,
  Package,
  Pill,
  QrCode,
  Radio,
  Receipt,
  ShieldCheck,
  Stethoscope,
  Syringe,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
  Wallet,
  Wifi,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type FeaturePlan =
  | "Pharmacy Basic"
  | "Pharmacy Pro"
  | "Clinic"
  | "Hospital Basic"
  | "Hospital Pro"
  | "All Plans";

export type FeatureCategory =
  | "Pharmacy & Inventory"
  | "Clinical & Patient"
  | "Hospital Operations"
  | "AI & Intelligence"
  | "Administration & Finance";

export interface EliteFeature {
  slug: string;
  title: string;
  shortTitle: string;
  category: FeatureCategory;
  icon: LucideIcon;
  plan: FeaturePlan;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  description: string;
  workflow: { step: number; title: string; detail: string }[];
  benefits: string[];
  useCases: { title: string; body: string }[];
  relatedSlugs: string[];
}

export const allFeatures: EliteFeature[] = [
  // ─── PHARMACY & INVENTORY ───────────────────────────────────────────────────
  {
    slug: "medicine-inventory",
    title: "Medicine Inventory Management",
    shortTitle: "Medicine Inventory",
    category: "Pharmacy & Inventory",
    icon: Pill,
    plan: "All Plans",
    tagline: "Track every batch, expiry, and stock movement in real time",
    metaTitle: "Medicine Inventory Management Software Pakistan | EliteHMS",
    metaDescription:
      "Track medicines with batch numbers, expiry dates, barcode scanning, reorder alerts, and stock movement. Built for Pakistani pharmacies and hospital pharmacies.",
    keywords: [
      "medicine inventory management Pakistan",
      "pharmacy stock management software",
      "medicine batch tracking",
      "medicine expiry tracking software",
      "barcode medicine scanning",
      "hospital pharmacy inventory system",
    ],
    description:
      "EliteHMS gives you a complete medicine inventory layer — every medicine tracked by name, generic name, batch number, expiry date, strength, and dosage form. Barcode scanning via ZXing eliminates manual search at the billing counter. Reorder level alerts fire automatically when stock drops below your set threshold.",
    workflow: [
      { step: 1, title: "Add Medicine", detail: "Enter name, generic name, category, manufacturer, strength, dosage form, purchase price, and sale price. System auto-calculates your profit margin." },
      { step: 2, title: "Set Batch & Expiry", detail: "Enter batch number, expiry date, and opening stock. The system immediately flags any medicine already expiring within 30 days." },
      { step: 3, title: "Configure Reorder", detail: "Set a reorder level (e.g. 50 units). When stock falls below this, a sidebar badge alerts the pharmacist instantly." },
      { step: 4, title: "Scan Barcodes", detail: "At billing or stock check, click the scanner icon — camera opens, scan the medicine box barcode, medicine auto-fills. No manual typing." },
      { step: 5, title: "Monitor Dashboard", detail: "Filter by Below Reorder Level, Expiring in 30 Days, or Out of Stock. Export list as Excel for purchase planning." },
    ],
    benefits: [
      "Zero manual stock counting errors — barcode confirms identity",
      "Never sell an expired medicine — batch-level expiry tracking",
      "Automatic margin calculation on every medicine added",
      "One-click reorder: jump from low-stock alert to purchase order",
      "DRAP-ready batch records for regulatory audits",
    ],
    useCases: [
      { title: "Busy Saturday Counter", body: "Pharmacist scans barcode on every medicine during billing — no misidentification, no manual search, 5x faster checkout for 30 patients waiting." },
      { title: "Monthly Expiry Review", body: "Admin filters 'Expiring in 30 Days' — sees 12 medicines. Creates purchase order for replacements, schedules destruction for expired stock, stays DRAP compliant." },
    ],
    relatedSlugs: ["expiry-alerts", "purchase-orders", "billing-invoices", "drap-compliance"],
  },
  {
    slug: "billing-invoices",
    title: "Billing & Invoice Management",
    shortTitle: "Billing & Invoices",
    category: "Pharmacy & Inventory",
    icon: Receipt,
    plan: "All Plans",
    tagline: "Create professional invoices in seconds with automatic stock deduction",
    metaTitle: "Pharmacy Billing Software Pakistan | Hospital Invoice System | EliteHMS",
    metaDescription:
      "Create pharmacy bills with cash, JazzCash, EasyPaisa, insurance, or credit payment. Auto-deducts stock, tracks partial payments, and generates PDF invoices with WhatsApp share.",
    keywords: [
      "pharmacy billing software Pakistan",
      "hospital billing system",
      "medical invoice software",
      "JazzCash pharmacy billing",
      "EasyPaisa medical billing",
      "insurance billing hospital Pakistan",
      "partial payment tracking pharmacy",
    ],
    description:
      "EliteHMS billing handles every payment scenario — cash, JazzCash, EasyPaisa, bank transfer, insurance, or credit. When a bill is created, medicine stock automatically deducts. Partial payments are tracked against the patient's balance. PDF invoices can be shared directly via WhatsApp.",
    workflow: [
      { step: 1, title: "Search Patient or Walk-In", detail: "Search registered patient or create a walk-in sale. Patient's allergy banner and outstanding balance show immediately." },
      { step: 2, title: "Add Items", detail: "Search medicine by name or scan barcode. Quantity entered — price auto-fills from inventory. Add services or lab charges as line items." },
      { step: 3, title: "Apply Discount & Tax", detail: "Discount as a flat amount or percentage. Tax applied if applicable. Running total updates in real time." },
      { step: 4, title: "Select Payment Method", detail: "Cash / JazzCash / EasyPaisa / Bank Transfer / Insurance / Credit. Partial payment records balance on patient account." },
      { step: 5, title: "Generate & Share", detail: "Bill saved, stock deducted, PDF invoice generated. WhatsApp share button opens pre-filled message with bill link." },
    ],
    benefits: [
      "Stock auto-deducts — no manual inventory adjustment needed",
      "Outstanding balances tracked per patient across all visits",
      "Insurance billing calculates patient co-pay vs panel portion automatically",
      "WhatsApp share for instant digital invoice delivery",
      "Supports all Pakistani payment methods including JazzCash and EasyPaisa",
    ],
    useCases: [
      { title: "Partial Payment Tracking", body: "Patient buys ₨2,500 of medicines, pays ₨1,000 today. Bill marked Partial. Next visit — receptionist sees ₨1,500 outstanding before adding new charges." },
      { title: "Insurance Billing", body: "Insured patient, 80% coverage. Bill ₨8,500 → insurance portion ₨6,800 auto-calculated. Patient pays ₨1,700 at counter. Claim submitted separately." },
    ],
    relatedSlugs: ["medicine-inventory", "patient-management", "insurance-panels", "reports-analytics"],
  },
  {
    slug: "purchase-orders",
    title: "Purchase Orders & Supplier Management",
    shortTitle: "Purchase Orders",
    category: "Pharmacy & Inventory",
    icon: Truck,
    plan: "All Plans",
    tagline: "Order from suppliers, receive stock, and track payments in one workflow",
    metaTitle: "Pharmacy Purchase Order Software | Supplier Management Pakistan | EliteHMS",
    metaDescription:
      "Create purchase orders for medicine suppliers, receive stock with batch tracking, and manage outstanding supplier payments. Full supplier database with delivery performance scores.",
    keywords: [
      "pharmacy purchase order software",
      "medicine supplier management Pakistan",
      "hospital pharmacy procurement",
      "medicine stock ordering system",
      "supplier payment tracking pharmacy",
    ],
    description:
      "Create purchase orders for your suppliers, receive deliveries with batch and expiry data, and auto-update inventory — all in one workflow. The supplier database tracks contact info, payment history, outstanding balances, and delivery performance.",
    workflow: [
      { step: 1, title: "Create Purchase Order", detail: "Select supplier, add medicines with ordered quantities and unit cost. PO number auto-generated. Status: Pending." },
      { step: 2, title: "Send to Supplier", detail: "Print PO or share via WhatsApp. Supplier confirms order." },
      { step: 3, title: "Receive Delivery", detail: "Click Receive — enter actual quantities received (may differ from ordered), batch numbers, and expiry dates for each item." },
      { step: 4, title: "Auto-Update Inventory", detail: "Medicine stock automatically increments. PO status changes to Received." },
      { step: 5, title: "Record Payment", detail: "Enter amount paid to supplier. Outstanding balance tracked. Partial payments supported." },
    ],
    benefits: [
      "Actual vs ordered quantity comparison on every delivery",
      "Batch and expiry data captured at receiving — DRAP-ready",
      "Supplier outstanding balances tracked automatically",
      "Delivery performance metrics per supplier (fulfillment rate)",
      "One-click PO from AI demand forecast suggestions",
    ],
    useCases: [
      { title: "Received Short Delivery", body: "Ordered 200 Paracetamol strips, supplier delivered 180. System records 180 received, 20 short. Invoice adjusted. Supplier balance updated." },
      { title: "DRAP Audit Trail", body: "Inspector asks about Batch BATCH-002341. Admin pulls Supplier Purchase Records — shows it came from Muller & Phipps, PO-000012, June 5. Full chain of custody." },
    ],
    relatedSlugs: ["medicine-inventory", "expiry-alerts", "drap-compliance", "demand-forecasting"],
  },
  {
    slug: "expiry-alerts",
    title: "Expiry Alerts & Management",
    shortTitle: "Expiry Alerts",
    category: "Pharmacy & Inventory",
    icon: BadgeCheck,
    plan: "All Plans",
    tagline: "Never sell an expired medicine — automated alerts before it happens",
    metaTitle: "Medicine Expiry Alert System | Pharmacy Expiry Management Pakistan | EliteHMS",
    metaDescription:
      "Automatic expiry alerts for medicines expiring in 30 days or already expired. Sidebar badge count, DRAP destruction records, and direct link to purchase order replacement.",
    keywords: [
      "medicine expiry alert system Pakistan",
      "pharmacy expiry management software",
      "expired medicine tracking",
      "DRAP expiry compliance",
      "medicine batch expiry monitoring",
    ],
    description:
      "EliteHMS monitors every medicine's expiry date and surfaces alerts in the sidebar. A red badge shows already-expired medicines (DRAP violation risk), orange shows medicines expiring within 30 days. From the alerts page, staff can directly record destruction with full DRAP documentation or create a replacement purchase order.",
    workflow: [
      { step: 1, title: "Automatic Detection", detail: "System continuously monitors expiry dates for all medicines in inventory. No manual check needed." },
      { step: 2, title: "Sidebar Badge", detail: "Red badge = expired medicines. Orange badge = expiring within 30 days. Always visible to pharmacist and admin." },
      { step: 3, title: "Expiry Alerts Page", detail: "View full list: medicine name, batch, expiry date, current stock, and supplier. Filterable by status." },
      { step: 4, title: "Take Action", detail: "Click 'Record Destruction' to open DRAP destruction form, or 'Create Purchase Order' to reorder before stock runs out." },
    ],
    benefits: [
      "Zero chance of accidentally dispensing expired medicine",
      "DRAP destruction records created directly from the alert",
      "Stock value of expiring medicines shown for financial planning",
      "Immediate reorder link from expiry alert to purchase order",
      "Compliance score improves when expired stock is cleared",
    ],
    useCases: [
      { title: "Monday Morning Review", body: "Admin opens sidebar — sees 3 expired (red), 11 expiring soon (orange). Records destruction for expired stock, creates PO for 2 items running low before expiry." },
    ],
    relatedSlugs: ["medicine-inventory", "drap-compliance", "purchase-orders"],
  },
  {
    slug: "drap-compliance",
    title: "DRAP Compliance Reports",
    shortTitle: "DRAP Compliance",
    category: "Pharmacy & Inventory",
    icon: ShieldCheck,
    plan: "Hospital Pro",
    tagline: "Full DRAP audit readiness — controlled medicines, batch tracking, destruction records",
    metaTitle: "DRAP Compliance Software Pakistan | Drug Regulatory Authority Reports | EliteHMS",
    metaDescription:
      "Generate DRAP-compliant reports for controlled medicines, batch tracking, expiry destruction, and supplier records. Compliance score dashboard. One-click PDF for DRAP inspector visits.",
    keywords: [
      "DRAP compliance software Pakistan",
      "Drug Regulatory Authority Pakistan pharmacy",
      "controlled medicines register Pakistan",
      "Schedule H medicines tracking",
      "pharmacy DRAP audit software",
      "medicine batch tracking DRAP",
    ],
    description:
      "EliteHMS provides the complete DRAP compliance stack — a controlled medicines register (equivalent to Form-10), batch tracking from purchase to patient, expiry destruction records with pharmacist signature, and supplier purchase summaries. A compliance score (0–100%) shows your current regulatory health at a glance.",
    workflow: [
      { step: 1, title: "Controlled Medicines Register", detail: "Every sale of a Schedule H / prescription medicine (Tramadol, Alprazolam, Codeine etc.) is auto-logged with date, bill number, patient name, CNIC, batch, and quantity." },
      { step: 2, title: "Batch Tracking", detail: "Search any batch number — see which PO it came from and every patient who received it. Critical for product recall response." },
      { step: 3, title: "Expiry Destruction Register", detail: "Record destroyed medicines with: quantity, purchase value, destruction method, location, pharmacist PCP number, and witness. Stock deducted automatically." },
      { step: 4, title: "Compliance Score", detail: "Score = Controlled register maintained (25%) + Destruction records (25%) + Supplier records (25%) + No expired stock (25%). 100% = fully ready." },
      { step: 5, title: "One-Click Report", detail: "Select month → Generate Report → A4 PDF with all sections, pharmacist declaration, and signature lines. Print when DRAP inspector arrives." },
    ],
    benefits: [
      "Instant response to product recalls — identify all patients from any batch",
      "Schedule H auto-detection from keywords (Tramadol, Morphine, Codeine, etc.)",
      "Compliance score shows gaps before inspector visit",
      "Complete audit trail from supplier to patient",
      "Excel export for DRAP IRIS portal submission",
    ],
    useCases: [
      { title: "Tramadol Recall", body: "DRAP issues recall for Tramadol Batch-44. Pharmacist searches batch — instantly sees 6 patients who received it, with phone numbers. All 6 contacted within 1 hour." },
      { title: "Surprise Inspector Visit", body: "DRAP inspector walks in unannounced. Admin clicks Generate Report for current month. 4-page A4 PDF printed in 30 seconds — 100% compliance score." },
    ],
    relatedSlugs: ["expiry-alerts", "medicine-inventory", "purchase-orders", "reports-analytics"],
  },
  {
    slug: "prescription-ocr",
    title: "Prescription OCR Scanner",
    shortTitle: "Prescription OCR",
    category: "Pharmacy & Inventory",
    icon: FileSearch,
    plan: "Pharmacy Pro",
    tagline: "Scan handwritten prescriptions — Gemini AI extracts medicines automatically",
    metaTitle: "Prescription OCR Scanner | AI Prescription Reader Pakistan | EliteHMS",
    metaDescription:
      "Scan paper prescriptions with your phone camera. Gemini AI reads handwriting and extracts medicine names, dosages, and frequencies. Auto-matches to your inventory in seconds.",
    keywords: [
      "prescription OCR software Pakistan",
      "AI prescription reader pharmacy",
      "handwritten prescription scanner",
      "Gemini AI pharmacy software",
      "prescription digitization Pakistan",
    ],
    description:
      "Pharmacists can photograph any paper prescription — printed or handwritten — and Gemini 1.5 Flash extracts doctor name, patient name, diagnosis, and all medicines with dosage, frequency, route, and duration. Each medicine auto-matches to your inventory with stock availability shown instantly.",
    workflow: [
      { step: 1, title: "Upload or Capture", detail: "Drag-drop a photo or use your phone camera. Supports JPG, PNG, HEIC." },
      { step: 2, title: "AI Reads Prescription", detail: "Gemini 1.5 Flash analyses the image. Extracts: doctor name, patient name, date, diagnosis, and all medicines with full dosing instructions." },
      { step: 3, title: "Inventory Match", detail: "Each medicine matched to your inventory. Green tick = in stock, orange warning = not in inventory. Quantity shown." },
      { step: 4, title: "Review & Confirm", detail: "Pharmacist reviews extracted data, corrects any errors (low-confidence items highlighted), confirms." },
      { step: 5, title: "Create Prescription", detail: "One click pre-fills the prescription form with all medicines. Proceed to billing directly." },
    ],
    benefits: [
      "5x faster than manual prescription entry",
      "Confidence level shown per medicine (High / Medium / Low)",
      "Catches inventory gaps before patient is told medicine is unavailable",
      "Reduces transcription errors from illegible handwriting",
      "Works with phone camera — no scanner hardware needed",
    ],
    useCases: [
      { title: "30 Saturday Prescriptions", body: "Pharmacist scans each prescription — OCR extracts all medicines in 3 seconds. Reviews, confirms, bills. Entire queue processed 5x faster than manual entry." },
    ],
    relatedSlugs: ["prescriptions", "medicine-inventory", "billing-invoices", "ai-diagnosis"],
  },

  // ─── CLINICAL & PATIENT ─────────────────────────────────────────────────────
  {
    slug: "patient-management",
    title: "Patient Management",
    shortTitle: "Patient Management",
    category: "Clinical & Patient",
    icon: Users,
    plan: "All Plans",
    tagline: "Complete patient profiles with allergy alerts, financial tracking, and medical history",
    metaTitle: "Patient Management Software Pakistan | Medical Records System | EliteHMS",
    metaDescription:
      "Register patients with CNIC, blood group, allergies, insurance info, and financial history. Auto-generated patient IDs. Allergy banners visible across all modules.",
    keywords: [
      "patient management software Pakistan",
      "medical records system Pakistan",
      "hospital patient registration",
      "patient allergy tracking",
      "patient financial tracking hospital",
    ],
    description:
      "Every patient in EliteHMS gets a unique ID (PT-000001), a complete profile, and an allergy banner that appears on every page they're mentioned — billing, prescriptions, MAR sheets, IPD. Financial tracking accumulates totalBilled and totalPaid across all visits, giving any staff member instant visibility into outstanding balances.",
    workflow: [
      { step: 1, title: "Register Patient", detail: "Name, phone, age, gender, CNIC, blood group, city. Auto-generated PT-000001 ID." },
      { step: 2, title: "Add Allergies", detail: "Enter allergens (e.g. Penicillin). A red warning banner now appears on every page for this patient." },
      { step: 3, title: "Link Insurance", detail: "Optional: link to an insurance panel with policy number and coverage expiry." },
      { step: 4, title: "Track Financials", detail: "Every bill auto-updates totalBilled. Payments update totalPaid. remainingBalance visible on patient card in real time." },
    ],
    benefits: [
      "Allergy banner cannot be missed — shown at top of every patient page",
      "One patient ID links bills, prescriptions, lab tests, IPD, appointments",
      "Outstanding balance visible before adding new charges",
      "Blood group shown prominently — critical for emergency admissions",
      "CNIC field enables DRAP controlled medicine logging",
    ],
    useCases: [
      { title: "Allergy Catch", body: "Receptionist registers Ali with Penicillin allergy. Doctor prescribes Amoxicillin. Nurse sees ⚠️ PENICILLIN ALLERGY on MAR sheet. Flags it to doctor before administration." },
    ],
    relatedSlugs: ["billing-invoices", "emr", "appointments", "insurance-panels"],
  },
  {
    slug: "prescriptions",
    title: "Digital Prescriptions",
    shortTitle: "Prescriptions",
    category: "Clinical & Patient",
    icon: FileText,
    plan: "All Plans",
    tagline: "Write, print, and fill digital prescriptions linked to patient records",
    metaTitle: "Digital Prescription Software Pakistan | Electronic Prescription System | EliteHMS",
    metaDescription:
      "Create digital prescriptions with dosage, frequency, and duration. Print A4 PDF with clinic header. Pharmacist fills directly from prescription. Linked to patient EMR.",
    keywords: [
      "digital prescription software Pakistan",
      "electronic prescription system hospital",
      "online prescription management",
      "pharmacy prescription filling system",
    ],
    description:
      "Doctors write digital prescriptions in EliteHMS with diagnosis, validity period, and full medicine details (name, dosage, frequency, route, duration, instructions). Each prescription gets a unique RX number and links directly to the patient's EMR timeline. Pharmacists can see pending prescriptions and fill from inventory.",
    workflow: [
      { step: 1, title: "Search Patient", detail: "Select patient — existing medical history and allergies load automatically." },
      { step: 2, title: "Add Medicines", detail: "Add medicines with dose, frequency, route, duration, and patient instructions. RX-000001 generated." },
      { step: 3, title: "Print or Share", detail: "PDF with clinic header generated — printable as A4. WhatsApp share option available." },
      { step: 4, title: "Pharmacist Fills", detail: "Pharmacist sees prescription in their queue. Verifies stock availability, dispenses, marks filled." },
    ],
    benefits: [
      "Eliminates illegible handwriting — clear digital instructions for pharmacist",
      "Prescription linked to EMR — full history accessible",
      "Expiry date on prescriptions — prevents stale fills",
      "Direct path from prescription to billing — one click",
    ],
    useCases: [
      { title: "Chronic Patient Repeat", body: "Diabetic patient's monthly prescription auto-carries previous medicines as template. Doctor reviews, adjusts dose, signs. Pharmacist fills in 30 seconds." },
    ],
    relatedSlugs: ["prescription-ocr", "patient-management", "emr", "billing-invoices"],
  },
  {
    slug: "appointments",
    title: "Appointment Management",
    shortTitle: "Appointments",
    category: "Clinical & Patient",
    icon: Clock,
    plan: "Pharmacy Pro",
    tagline: "Schedule, track, and complete patient appointments with visit notes",
    metaTitle: "Appointment Management Software Pakistan | Clinic Scheduling System | EliteHMS",
    metaDescription:
      "Book and manage patient appointments for doctors. Track status from Scheduled to Completed. Record diagnosis, vitals, and notes. Integrated with online booking for patient self-service.",
    keywords: [
      "appointment management software Pakistan",
      "clinic scheduling software",
      "doctor appointment system Pakistan",
      "patient appointment booking software",
      "OPD appointment management",
    ],
    description:
      "Appointments flow from Scheduled → Confirmed → In Progress → Completed (or No Show / Cancelled). Receptionists book from the dashboard; patients book themselves via the public online booking page. When the doctor marks an appointment In Progress, they can record diagnosis, vital signs, and visit notes directly.",
    workflow: [
      { step: 1, title: "Book Appointment", detail: "Select patient, doctor, date, time, type (Checkup/Follow-up/Consultation/Procedure), and chief complaint." },
      { step: 2, title: "Patient Arrives", detail: "Receptionist marks 'In Progress'. Patient called from OPD queue." },
      { step: 3, title: "Doctor Consultation", detail: "Doctor enters diagnosis, visit notes, and vital signs. Views patient's complete history inline." },
      { step: 4, title: "Mark Completed", detail: "Records locked. Appointment logged in patient EMR timeline." },
    ],
    benefits: [
      "Online booking reduces phone load on reception staff",
      "Doctor sees full history during consultation without switching screens",
      "No-show tracking for recall campaigns",
      "Online bookings marked with 🌐 badge for easy identification",
    ],
    useCases: [
      { title: "High-Volume OPD", body: "Doctor sees 40 patients Saturday. Each appointment in chronological order. One-click to EMR. Visit notes entered in under 2 minutes per patient." },
    ],
    relatedSlugs: ["opd-queue", "online-booking", "emr", "patient-management"],
  },
  {
    slug: "lab-tests",
    title: "Lab Test Management",
    shortTitle: "Lab Tests",
    category: "Clinical & Patient",
    icon: FlaskConical,
    plan: "Pharmacy Pro",
    tagline: "Order, track, and report lab tests with critical value alerts",
    metaTitle: "Lab Test Management Software Pakistan | Laboratory Information System | EliteHMS",
    metaDescription:
      "Order CBC, LFT, RFT, HbA1c, and 30+ tests. Track from order to result. Critical value socket alerts notify doctors instantly. Reports appear in patient EMR timeline.",
    keywords: [
      "lab test management software Pakistan",
      "laboratory information system hospital",
      "clinical lab software Pakistan",
      "CBC blood test tracking software",
      "critical lab value alert system",
    ],
    description:
      "Lab test orders flow from Ordered → Sample Collected → Processing → Result Entered. When a result is flagged Critical, a real-time Socket.io alert fires to every logged-in device. Results auto-appear in the patient's EMR timeline.",
    workflow: [
      { step: 1, title: "Order Test", detail: "Select patient, test type (CBC, LFT, HbA1c etc.), priority (Routine/Urgent/STAT), ordering doctor, and lab." },
      { step: 2, title: "Track Progress", detail: "Status updates: Sample Collected → Processing → Result Entered." },
      { step: 3, title: "Enter Result", detail: "Lab technician enters values with interpretation: Normal / Abnormal / Critical. Flag critical values." },
      { step: 4, title: "Critical Alert", detail: "If Critical: Socket.io alert fires instantly to all logged-in devices. Doctor sees pop-up with patient name and critical value." },
      { step: 5, title: "PDF Report", detail: "Result auto-links to patient EMR. PDF report generated and shareable." },
    ],
    benefits: [
      "Critical value alerts prevent life-threatening delays",
      "All lab history in one patient timeline",
      "STAT priority marks urgent tests for immediate processing",
      "PDF report sharing via WhatsApp or link",
    ],
    useCases: [
      { title: "Emergency Detection", body: "CBC ordered during OPD. Hemoglobin 5.2 g/dL returned (critical). Doctor alerted immediately via socket. Blood transfusion ordered before patient leaves lab area." },
    ],
    relatedSlugs: ["emr", "doctor-orders", "vital-signs", "reports-analytics"],
  },
  {
    slug: "vital-signs",
    title: "Vital Signs Monitoring",
    shortTitle: "Vital Signs",
    category: "Clinical & Patient",
    icon: Activity,
    plan: "Clinic",
    tagline: "Record and chart vitals with automatic critical threshold alerts",
    metaTitle: "Vital Signs Monitoring Software | Patient Vitals Tracking Pakistan | EliteHMS",
    metaDescription:
      "Record BP, pulse, temperature, SpO2, RBS, weight, and height. Automatic critical alerts (SpO2 < 90%, BP > 180/110). Trend charts and printable A4 vitals report.",
    keywords: [
      "vital signs monitoring software Pakistan",
      "patient vitals tracking hospital",
      "blood pressure monitoring software",
      "SpO2 alert system hospital",
      "nurse vitals recording software",
    ],
    description:
      "Nurses record BP (systolic/diastolic), pulse, temperature, SpO2, RBS, weight, and height. Each reading is timestamped with the nurse's name and context (Routine, Post-procedure, Emergency). Critical thresholds trigger immediate Socket.io alerts to all logged-in staff. Recharts area charts show trends across the last 20 readings.",
    workflow: [
      { step: 1, title: "Search Patient", detail: "Open Vital Signs, search patient by name or ID." },
      { step: 2, title: "Record Vitals", detail: "Enter values for BP, pulse, temp, SpO2, RBS, weight. Select context (Routine/Emergency/Post-procedure etc.)." },
      { step: 3, title: "Threshold Check", detail: "System checks instantly: SpO2 < 90%, BP > 180/110, Pulse > 150 → red alert badge + socket notification to all devices." },
      { step: 4, title: "View Trends", detail: "Charts show BP, pulse, temperature, SpO2, and RBS trends over time. Print A4 vitals report." },
    ],
    benefits: [
      "Critical alerts reach doctor in seconds without a phone call",
      "Complete audit trail — every reading timestamped with nurse name",
      "Trend charts show clinical deterioration or improvement visually",
      "Printable A4 chart for patient handover",
    ],
    useCases: [
      { title: "Night Round Catch", body: "Nurse records SpO2 87% at 2:14 AM. Critical alert fires. Doctor arrives in 3 minutes. Patient moved to ICU. Timestamp documents timely nursing response." },
    ],
    relatedSlugs: ["nurse-station", "emr", "doctor-orders", "ipd-management"],
  },
  {
    slug: "emr",
    title: "Electronic Medical Records (EMR)",
    shortTitle: "EMR",
    category: "Clinical & Patient",
    icon: BookOpen,
    plan: "Clinic",
    tagline: "Complete patient medical history in one unified timeline",
    metaTitle: "Electronic Medical Records Software Pakistan | EMR System | EliteHMS",
    metaDescription:
      "Full EMR with problem list, medications, allergies, social history, surgical history, immunizations, and a unified timeline merging bills, prescriptions, lab tests, vitals, and admissions.",
    keywords: [
      "electronic medical records Pakistan",
      "EMR software Pakistan",
      "patient EMR system hospital",
      "digital medical records clinic",
      "unified patient timeline software",
      "problem list software hospital",
    ],
    description:
      "EliteHMS EMR covers 10 clinical sections: Problem List (ICD-10), Current Medications, Allergies, Past Medical History, Family History, Social History (smoking, alcohol, occupation), Surgical History, Immunizations, Review of Systems, and Functional Status. The Unified Timeline merges every clinical event chronologically — bills, prescriptions, lab tests, appointments, IPD admissions, vitals, and radiology — into one scrollable view.",
    workflow: [
      { step: 1, title: "Open Patient EMR", detail: "From any patient page, click EMR. Sections load instantly." },
      { step: 2, title: "Problem List", detail: "Add active/resolved/suspected conditions with ICD-10 codes, onset date, and severity. Quick-fill for common conditions (Hypertension, DM, etc.)." },
      { step: 3, title: "Social & Family History", detail: "Record smoking (pack years), alcohol, occupation, marital status, exercise, diet. Family history with relation, condition, and status." },
      { step: 4, title: "Unified Timeline", detail: "Timeline tab — all events sorted by date. Filter by type: Bills only / Lab Tests / Admissions / Vitals. See complete patient journey at a glance." },
    ],
    benefits: [
      "New doctor sees 12 months of patient history in 30 seconds",
      "Timeline merges 7 data sources — no switching between modules",
      "ICD-10 codes for international standard compliance",
      "Filter by event type to find specific clinical events instantly",
    ],
    useCases: [
      { title: "Transferred Patient", body: "Patient transferred from another hospital. Attending opens EMR → Timeline. Sees 3 prior hospitalizations, 2 cardiac events, HbA1c trend, allergies. Full clinical picture in under a minute." },
    ],
    relatedSlugs: ["vital-signs", "lab-tests", "prescriptions", "ipd-management"],
  },
  {
    slug: "patient-feedback",
    title: "Patient Feedback & Ratings",
    shortTitle: "Patient Feedback",
    category: "Clinical & Patient",
    icon: Heart,
    plan: "Clinic",
    tagline: "Collect star ratings per department, alert on negative reviews instantly",
    metaTitle: "Patient Feedback System Pakistan | Hospital Rating Software | EliteHMS",
    metaDescription:
      "Send feedback links via WhatsApp. Patients rate Overall, Doctor, Staff, Cleanliness, and Wait Time. Negative feedback (1-2 stars) triggers real-time admin alert. Doctor leaderboard included.",
    keywords: [
      "patient feedback system hospital Pakistan",
      "hospital patient satisfaction software",
      "doctor rating system Pakistan",
      "patient review management hospital",
    ],
    description:
      "After each visit, send a unique feedback link via WhatsApp. Patients rate 5 categories (1–5 stars each) and leave an optional written review without logging in. Ratings below 2 stars trigger an instant Socket.io alert to all admin devices. A doctor leaderboard ranks satisfaction scores monthly.",
    workflow: [
      { step: 1, title: "Generate Link", detail: "Search patient, select appointment, set 7-day expiry. Unique feedback URL created." },
      { step: 2, title: "WhatsApp Share", detail: "One-click opens pre-filled WhatsApp message with feedback link to patient." },
      { step: 3, title: "Patient Rates", detail: "Patient opens link (no login), rates 5 categories, writes optional review, submits." },
      { step: 4, title: "Negative Alert", detail: "Score ≤ 2 stars → real-time socket alert to all admin. Admin responds from dashboard." },
    ],
    benefits: [
      "No login required for patients — maximum completion rate",
      "Negative feedback caught within seconds — not weeks later",
      "Doctor leaderboard drives internal quality competition",
      "Monthly trend chart shows overall service improvement",
    ],
    useCases: [
      { title: "Service Recovery", body: "Patient submits 2-star review for long wait time. Admin receives alert in 10 seconds. Responds with apology and contact. Relationship saved before it becomes a public complaint." },
    ],
    relatedSlugs: ["appointments", "patient-management", "reports-analytics"],
  },
  {
    slug: "online-booking",
    title: "Online Appointment Booking",
    shortTitle: "Online Booking",
    category: "Clinical & Patient",
    icon: Wifi,
    plan: "Clinic",
    tagline: "Patients book appointments online 24/7 — no phone call needed",
    metaTitle: "Online Appointment Booking System Pakistan | Patient Self-Booking | EliteHMS",
    metaDescription:
      "Public booking page for your clinic. Patients choose doctor, date, and time slot. Real-time slot availability. Cancellation link. Instant clinic notification via Socket.io.",
    keywords: [
      "online appointment booking system Pakistan",
      "patient self-booking clinic software",
      "doctor online booking Pakistan",
      "hospital appointment booking website",
      "clinic online scheduling system",
    ],
    description:
      "Each clinic gets a public booking page (elitehms.online/book/your-clinic-name) — no login required for patients. Admin configures doctors, available days, time slots, and consultation fees. Real-time slot availability prevents double-booking. Clinics receive instant Socket.io notifications for every new booking.",
    workflow: [
      { step: 1, title: "Admin Setup", detail: "Set clinic slug, add doctors with availability (days, time slots, max per slot) and consultation fee. Enable booking to go live." },
      { step: 2, title: "Patient Books", detail: "Patient visits your booking URL. 5 steps: choose doctor → choose date → choose time → enter details → confirmation." },
      { step: 3, title: "Clinic Notified", detail: "Socket.io alert: '📅 New online booking: Fatima Bibi → Dr. Ahmed, 10:30 AM'. Patient appears in appointments immediately." },
      { step: 4, title: "Cancellation", detail: "Patient clicks cancel link → enters reason → slot freed. Clinic notified instantly." },
    ],
    benefits: [
      "Reduces incoming calls by 60% for busy clinics",
      "24/7 booking without staff involvement",
      "Auto-creates patient record if new phone number",
      "Online bookings marked with 🌐 badge in appointments list",
      "Cancellation window configurable (e.g. 2 hours before appointment)",
    ],
    useCases: [
      { title: "Evening Bookings", body: "After clinic closes at 8 PM, 12 patients book for next morning via the public page. Receptionist arrives to a pre-filled appointment list — no calls needed." },
    ],
    relatedSlugs: ["appointments", "opd-queue", "patient-management"],
  },
  {
    slug: "patient-matching",
    title: "Smart Patient Matching",
    shortTitle: "Patient Matching",
    category: "Clinical & Patient",
    icon: UserCheck,
    plan: "Clinic",
    tagline: "Detect and merge duplicate patient records automatically",
    metaTitle: "Patient Duplicate Detection Software | Smart Patient Matching | EliteHMS",
    metaDescription:
      "AI-powered patient deduplication. Scores matches by phone, CNIC, name similarity, age, and city. Merge duplicate records while preserving all bills, prescriptions, and appointments.",
    keywords: [
      "patient duplicate detection software",
      "patient record merging hospital",
      "medical record deduplication Pakistan",
      "patient matching algorithm hospital software",
    ],
    description:
      "Duplicate patient records accumulate over time — 'Muhammad Ali', 'M. Ali', 'Mohammad Ali' all become separate records for the same person. EliteHMS scores every patient pair (0–100) using phone number, CNIC, name similarity (Levenshtein distance), age, gender, and city. High confidence pairs (85+) are flagged for review. Merging re-points all bills, prescriptions, lab tests, and appointments to the surviving record.",
    workflow: [
      { step: 1, title: "Run Scan", detail: "Patient Matching → Rescan. System calculates match scores for all patient pairs." },
      { step: 2, title: "Review Pairs", detail: "Pairs shown by confidence: High (85+), Medium (70–84), Low (65–69). Score rationale shown." },
      { step: 3, title: "Compare Fields", detail: "Side-by-side comparison. CNIC on one record but not other → option to use from either." },
      { step: 4, title: "Confirm Merge", detail: "Choose record to keep. All linked data re-pointed. Financial totals combined. Duplicate archived." },
    ],
    benefits: [
      "Accurate financial reports — no split patient balances",
      "Complete medical history on one record instead of fragments",
      "Archived duplicates maintain audit trail — not permanently deleted",
      "Reduces insurance claim errors caused by duplicate records",
    ],
    useCases: [
      { title: "Post-Registration Cleanup", body: "After 6 months, scan finds 43 duplicate pairs. Admin merges 38 high-confidence matches in 15 minutes. Financial totals corrected. Reports now accurate." },
    ],
    relatedSlugs: ["patient-management", "billing-invoices", "reports-analytics"],
  },

  // ─── HOSPITAL OPERATIONS ────────────────────────────────────────────────────
  {
    slug: "ward-bed-management",
    title: "Ward & Bed Management",
    shortTitle: "Ward & Beds",
    category: "Hospital Operations",
    icon: BedDouble,
    plan: "Hospital Basic",
    tagline: "Real-time bed occupancy map across all wards and ICU",
    metaTitle: "Ward & Bed Management Software Pakistan | Hospital Bed Tracking | EliteHMS",
    metaDescription:
      "Manage General, ICU, Maternity, Pediatric, Surgical, and Private wards. Real-time color-coded bed map. Bed status: Available, Occupied, Cleaning, Maintenance, Reserved.",
    keywords: [
      "ward management software Pakistan",
      "hospital bed management system",
      "ICU bed tracking software",
      "hospital ward occupancy system",
      "bed allocation software hospital Pakistan",
    ],
    description:
      "Create wards by type (General, ICU, Maternity, Pediatric, Surgical, Cardiac, Private, Semi-Private), floor, and capacity. Each bed is individually tracked with a color-coded map: Green = Available, Red = Occupied, Yellow = Cleaning, Blue = Maintenance, Purple = Reserved. Real-time occupancy (e.g. 12/20 beds = 60%) visible to admin and nursing staff.",
    workflow: [
      { step: 1, title: "Create Ward", detail: "Name, type, floor, total capacity. Each ward gets a separate management view." },
      { step: 2, title: "Add Beds", detail: "Add individual beds with type (General/ICU/HDU) and daily charge rate (₨500/day). Beds instantly appear on occupancy map." },
      { step: 3, title: "Monitor Occupancy", detail: "Color-coded map updates in real time as patients are admitted and discharged. Filter by ward type." },
      { step: 4, title: "Bed Status Updates", detail: "After discharge → Cleaning (auto). After cleaning confirmed → Available. Maintenance reported → status locked until resolved." },
    ],
    benefits: [
      "Emergency department can check ICU availability instantly without phone calls",
      "Cleaning status prevents premature patient assignment to uncleaned beds",
      "Daily rate per bed auto-flows to IPD billing",
      "Capacity planning — see trends in ward utilization",
    ],
    useCases: [
      { title: "ICU Emergency", body: "Critical patient incoming. Administrator checks ICU → 8/10 beds occupied, 2 available. Emergency team informed immediately. Patient admitted without delay." },
    ],
    relatedSlugs: ["ipd-management", "nurse-station", "blood-bank"],
  },
  {
    slug: "ipd-management",
    title: "IPD Management",
    shortTitle: "IPD Management",
    category: "Hospital Operations",
    icon: Building2,
    plan: "Hospital Basic",
    tagline: "Complete inpatient workflow — admission to discharge with MAR, charges, and billing",
    metaTitle: "IPD Management Software Pakistan | Inpatient Department System | EliteHMS",
    metaDescription:
      "Full IPD lifecycle: admission, doctor orders, MAR sheets, nursing notes, running charges, and discharge with automatic billing. Pakistan's most complete inpatient management system.",
    keywords: [
      "IPD management software Pakistan",
      "inpatient department system hospital",
      "hospital admission management",
      "MAR sheet software Pakistan",
      "patient admission discharge system",
      "inpatient billing software",
    ],
    description:
      "EliteHMS IPD covers the entire inpatient journey: patient admission to a specific bed, doctor medicine orders (with schedule auto-calculation), nurse MAR administration recording, running charges accumulation, and final discharge with automatic bill generation. Every step is timestamped and auditable.",
    workflow: [
      { step: 1, title: "Admission", detail: "Search patient, select ward and available bed, enter admission diagnosis and attending doctor. Bed instantly marked Occupied." },
      { step: 2, title: "Doctor Orders", detail: "Doctor adds medicine orders: name, dose, route, frequency. System calculates administration schedule (Twice daily → 08:00 + 20:00 automatically)." },
      { step: 3, title: "MAR Sheet", detail: "Nurses see all scheduled doses by time. Each dose: [Given] [Skipped] [Refused]. Given logs nurse name + timestamp. Refused/Skipped require reason." },
      { step: 4, title: "Running Charges", detail: "Room charge auto-adds daily. Nurse adds procedure charges (IV Setup, Dressing etc.). Running total visible to doctor and admin." },
      { step: 5, title: "Discharge", detail: "Doctor enters discharge diagnosis and notes. System generates full bill: room days × rate + procedures + medicines + labs. Patient pays, balance tracked." },
    ],
    benefits: [
      "Auto-calculated dose schedules — no manual timing calculation",
      "Complete MAR audit trail with nurse names and timestamps",
      "Running charges prevent billing surprises at discharge",
      "Discharge bill auto-created in Billing module — no double entry",
      "Bed auto-moves to Cleaning status after discharge",
    ],
    useCases: [
      { title: "Diabetic IPD Case", body: "Patient admitted for uncontrolled DM. Insulin 10u SC 3x daily (07:00/13:00/19:00), Metformin 500mg BD. Night nurse sees 19:00 dose, patient NPO for surgery — enters reason. Doctor sees refusal, adjusts order. 3-day discharge: Room ₨1,500 + Meds ₨2,200 + Labs ₨800 = ₨4,500." },
    ],
    relatedSlugs: ["ward-bed-management", "nurse-station", "doctor-orders", "billing-invoices"],
  },
  {
    slug: "opd-queue",
    title: "OPD Queue Management",
    shortTitle: "OPD Queue",
    category: "Hospital Operations",
    icon: ClipboardList,
    plan: "Clinic",
    tagline: "Token-based OPD queue with TV display and voice announcements",
    metaTitle: "OPD Queue Management System Pakistan | Hospital Token System | EliteHMS",
    metaDescription:
      "Issue tokens, manage Normal/VIP/Urgent priority, and broadcast to a TV display with voice announcements. Real-time queue updates via Socket.io. No hardware needed.",
    keywords: [
      "OPD queue management system Pakistan",
      "hospital token system",
      "outpatient queue software",
      "doctor queue display system",
      "patient token system clinic Pakistan",
      "OPD TV display system",
    ],
    description:
      "Receptionists issue tokens (T-001, T-002…) with priority levels: Normal, VIP, or Urgent. When the doctor calls next, the priority logic (Urgent → VIP → Normal) selects the next patient. A Socket.io broadcast updates all staff screens and a full-screen TV display simultaneously. Web Speech API announces the token number and doctor name — no hardware speaker needed.",
    workflow: [
      { step: 1, title: "Issue Token", detail: "Select patient (or walk-in), choose type: Normal / VIP / Urgent. Token number assigned automatically." },
      { step: 2, title: "Doctor Calls Next", detail: "Doctor clicks 'Call Next'. Priority logic fires: Urgent first, then VIP, then FIFO Normal." },
      { step: 3, title: "Broadcast", detail: "Socket.io pushes current token to all staff screens and the TV display page simultaneously." },
      { step: 4, title: "Voice Announcement", detail: "TV display speaks: 'Token T-003, please proceed to Doctor Ahmed.' Web Speech API — any laptop + HDMI TV works." },
      { step: 5, title: "TV Display", detail: "Full-screen public page (/opd-display/:storeId). Shows current token + next 3. No login required. Auto-refreshes." },
    ],
    benefits: [
      "Urgent patients bypass queue automatically — emergency safety",
      "TV display works on any HDMI-connected laptop — no dedicated hardware",
      "Voice announcement eliminates need for reception staff to call names",
      "Real-time Socket.io — zero delay between doctor click and display update",
    ],
    useCases: [
      { title: "Chest Pain Walk-In", body: "25 patients waiting. Elderly man arrives with chest pain — marked Urgent. Next 'Call Next' by doctor brings him in immediately, despite registering 15th." },
    ],
    relatedSlugs: ["appointments", "online-booking", "doctor-orders"],
  },
  {
    slug: "nurse-station",
    title: "Nurse Station & MAR Sheets",
    shortTitle: "Nurse Station",
    category: "Hospital Operations",
    icon: Syringe,
    plan: "Hospital Basic",
    tagline: "Central nursing hub — MAR, vitals, and medicine requests for all IPD patients",
    metaTitle: "Nurse Station Software Pakistan | MAR Sheet System Hospital | EliteHMS",
    metaDescription:
      "Two-panel nurse station: patient list on left, full nursing interface on right. MAR sheet with dose status, vital signs recording with critical alerts, and pharmacy medicine requests.",
    keywords: [
      "nurse station software Pakistan",
      "MAR sheet software hospital",
      "medication administration record system",
      "nursing management software Pakistan",
      "hospital nurse module software",
    ],
    description:
      "The Nurse Station gives nurses a two-panel interface: all admitted IPD patients (left) and the selected patient's full nursing tools (right). Three tabs per patient: MAR Sheet (all scheduled doses with Given/Skipped/Refused recording), Vitals (with critical alerts), and Medicine Requests (notify pharmacy for urgent needs).",
    workflow: [
      { step: 1, title: "Select Patient", detail: "Left panel shows all admitted patients with bed and ward info. Click to load patient's nursing interface." },
      { step: 2, title: "MAR Sheet", detail: "All today's doses by time. Click Given → timestamp and nurse name auto-logged. Skipped/Refused → reason required." },
      { step: 3, title: "Record Vitals", detail: "Enter BP, pulse, temp, SpO2, RBS. Critical thresholds checked instantly. Alert fires to all logged-in devices if critical." },
      { step: 4, title: "Medicine Request", detail: "Need medicine not in current orders? Select from inventory, set urgency (Routine/Urgent/STAT), enter quantity and reason. Pharmacy notified via socket." },
    ],
    benefits: [
      "Single screen for all nursing tasks — no module switching",
      "MAR color coding: Green (given), Red (refused), Orange (upcoming)",
      "Historical MAR viewable — previous days' administration records",
      "Medicine request with socket notification eliminates phone calls to pharmacy",
    ],
    useCases: [
      { title: "Night Shift Continuity", body: "Day nurse hands over to night nurse. Night nurse opens Nurse Station — sees all 12 admitted patients, today's MAR completion (8 doses given, 2 upcoming), and 1 critical vital flag from 6 PM." },
    ],
    relatedSlugs: ["ipd-management", "vital-signs", "doctor-orders", "ward-bed-management"],
  },
  {
    slug: "doctor-orders",
    title: "Doctor Orders & Nursing Notes",
    shortTitle: "Doctor Orders",
    category: "Hospital Operations",
    icon: Stethoscope,
    plan: "Hospital Basic",
    tagline: "Structured order communication between doctors and nurses with full audit trail",
    metaTitle: "Doctor Order Management System | Nursing Notes Software Pakistan | EliteHMS",
    metaDescription:
      "Doctors create Medication, Lab, Radiology, Diet, Activity, and Procedure orders. Real-time nurse notifications. Shift handover notes. Complete audit trail with timestamps.",
    keywords: [
      "doctor order management system hospital",
      "nursing notes software Pakistan",
      "clinical order communication system",
      "shift handover notes software",
      "CPOE hospital software Pakistan",
    ],
    description:
      "Doctors create structured orders (Medication, Lab Test, Radiology, Vital Signs, Diet, Activity, Procedure, Consult) with priority (Routine/Urgent/STAT). Nurses receive real-time socket notifications, acknowledge orders, and mark them complete. Every order has a full audit trail: created, modified, acknowledged, and completed — all with timestamps.",
    workflow: [
      { step: 1, title: "Doctor Creates Order", detail: "Select admitted patient, choose order type, enter details, set priority (Routine/Urgent/STAT)." },
      { step: 2, title: "Nurse Notified", detail: "Socket notification fires: 'New STAT Order — CBC for Bed 5'. Nurse sees it instantly." },
      { step: 3, title: "Acknowledge", detail: "Nurse acknowledges → timestamp logged. Order status: Acknowledged." },
      { step: 4, title: "Complete", detail: "After execution, nurse/lab marks Completed. Doctor sees real-time status update." },
      { step: 5, title: "Nursing Notes", detail: "Nurses create shift handovers, incident reports, progress notes, and family communication records per patient." },
    ],
    benefits: [
      "STAT orders reach nurse in under 2 seconds via socket",
      "Audit trail proves order was acknowledged and executed — medico-legal protection",
      "Shift handover notes ensure continuity across nursing shifts",
      "Incident reports documented with timestamps for risk management",
    ],
    useCases: [
      { title: "Night Refusal Documented", body: "Doctor orders Insulin. Night nurse marks Refused — 'Patient NPO for surgery'. Doctor sees refusal in real time. Adjusts order. Refusal documented with timestamp and reason — full protection for nurse and doctor." },
    ],
    relatedSlugs: ["ipd-management", "nurse-station", "lab-tests", "radiology"],
  },
  {
    slug: "ot-scheduling",
    title: "OT Scheduling",
    shortTitle: "OT Scheduling",
    category: "Hospital Operations",
    icon: Radio,
    plan: "Hospital Basic",
    tagline: "Schedule surgeries with conflict detection, pre-op checklists, and OT reports",
    metaTitle: "OT Scheduling Software Pakistan | Operation Theatre Management | EliteHMS",
    metaDescription:
      "Schedule surgeries with team assignment, duration, and OT room. Automatic conflict detection prevents double-booking. 12-item pre-op checklist. Post-op notes and complication tracking.",
    keywords: [
      "OT scheduling software Pakistan",
      "operation theatre management system",
      "surgery scheduling software hospital",
      "pre-operative checklist software",
      "OR scheduling system Pakistan",
    ],
    description:
      "Book surgeries for specific OT rooms with full team assignment (Surgeon, Anesthesiologist, Scrub Nurse, OT Technician) and estimated duration. The system automatically detects scheduling conflicts and prevents double-booking. A 12-item pre-operative checklist ensures all safety checks are completed before the procedure begins.",
    workflow: [
      { step: 1, title: "Schedule Surgery", detail: "Select patient, date/time, OT room, procedure name, and estimated duration." },
      { step: 2, title: "Assign Team", detail: "Assign surgeon, anesthesiologist, scrub nurse, and OT technician by name." },
      { step: 3, title: "Conflict Check", detail: "System checks: OT room availability for the scheduled duration. Overlap detected → red warning, cannot save." },
      { step: 4, title: "Pre-Op Checklist", detail: "12 items: consent form signed, blood group verified, pre-op labs done, allergy check, NPO confirmed, IV access established, antibiotics given, etc. Nurse checks each." },
      { step: 5, title: "Post-Op Notes", detail: "After completion: post-op notes, complications, blood loss, anesthesia notes. OT report PDF generated." },
    ],
    benefits: [
      "Zero OT double-booking — duration-aware conflict detection",
      "Pre-op checklist prevents wrong-site and consent issues",
      "Full team assigned and documented before procedure",
      "OT report PDF for medico-legal records",
    ],
    useCases: [
      { title: "OT Conflict Prevention", body: "Surgeon books Appendectomy in OT Room 1 at 9:00 AM (90 min). Second surgeon tries 9:30 AM same room. System blocks: 'OT Room 1 occupied until 10:30 AM.' Rescheduled to OT Room 2." },
    ],
    relatedSlugs: ["ipd-management", "doctor-orders", "ward-bed-management"],
  },
  {
    slug: "blood-bank",
    title: "Blood Bank Management",
    shortTitle: "Blood Bank",
    category: "Hospital Operations",
    icon: Heart,
    plan: "Hospital Basic",
    tagline: "Track blood units, donors, and critical stock alerts across all blood groups",
    metaTitle: "Blood Bank Management Software Pakistan | Hospital Blood Tracking | EliteHMS",
    metaDescription:
      "Track blood units by blood group with collection date, expiry, and screening results. Manage donors with 56-day eligibility. Critical stock alerts when any group drops below 2 units.",
    keywords: [
      "blood bank management software Pakistan",
      "hospital blood bank system",
      "blood inventory tracking software",
      "blood donor management system",
      "blood group tracking hospital Pakistan",
    ],
    description:
      "Every blood unit gets a unique ID (BB-000001) tracked by blood group, collection date (35-day shelf life auto-expiry), screening tests (HBsAg, HIV, HCV, VDRL, Malaria), and status (Available/Reserved/Issued/Discarded). Donors are managed with 56-day re-donation eligibility tracking. Critical stock alerts fire when any blood group drops below 2 units.",
    workflow: [
      { step: 1, title: "Add Blood Unit", detail: "Enter blood group, collection date, volume, and screening test results. Status: Available." },
      { step: 2, title: "Issue Blood", detail: "Select blood group, choose unit by expiry date (oldest first), link to IPD patient. Charge added to patient bill automatically." },
      { step: 3, title: "Critical Alert", detail: "Stock drops to < 2 units of any blood group → 🚨 socket alert: 'URGENT: B+ critically low — 1 unit remaining.'" },
      { step: 4, title: "Donor Management", detail: "Add donor profile. Record donation with screening tests. System shows next eligible donation date (56 days from last)." },
      { step: 5, title: "Auto-Expire", detail: "Units 35+ days old automatically flagged as Discarded. Removed from available stock." },
    ],
    benefits: [
      "FIFO issuing — oldest units used first to minimize wastage",
      "56-day donor eligibility enforced — prevents unsafe repeated donations",
      "Blood cost auto-billed to patient IPD account",
      "Critical stock alerts enable emergency donor mobilization before shortage",
    ],
    useCases: [
      { title: "O- Emergency", body: "Patient needs 2 units O-. Blood bank has 3. Technician issues 2. Stock hits 1 unit. Critical alert fires. Administrator calls O- donors. Emergency donation secured within 2 hours." },
    ],
    relatedSlugs: ["ipd-management", "ward-bed-management", "doctor-orders"],
  },
  {
    slug: "radiology",
    title: "Radiology Module",
    shortTitle: "Radiology",
    category: "Hospital Operations",
    icon: FileImage,
    plan: "Hospital Basic",
    tagline: "Order, upload, and share radiology reports with a secure public link",
    metaTitle: "Radiology Management Software Pakistan | PACS Alternative | EliteHMS",
    metaDescription:
      "Order X-Ray, CT, MRI, Ultrasound, and ECG. Upload up to 10 images per study to Cloudinary. Radiologist writes report. Share via secure public link — viewable on any device without login.",
    keywords: [
      "radiology management software Pakistan",
      "hospital radiology system",
      "X-ray report software Pakistan",
      "CT scan report management",
      "radiology report sharing system",
      "PACS alternative Pakistan",
    ],
    description:
      "Doctors order radiology studies (X-Ray, CT, MRI, Ultrasound, ECG) with clinical indication and priority. Radiologists upload up to 10 images per study (via Cloudinary) and write structured reports (Findings, Impressions, Recommendations). A unique public share link (32-char hex token) allows doctors and patients to view images and reports on any device without logging in.",
    workflow: [
      { step: 1, title: "Order Study", detail: "Select patient, modality, body part, clinical indication, and priority (Routine/Urgent/STAT)." },
      { step: 2, title: "Upload Images", detail: "Radiologist uploads up to 10 images (JPG/PNG/DICOM) per study. Images stored on Cloudinary CDN." },
      { step: 3, title: "Write Report", detail: "Radiologist enters Findings, Impressions, and Recommendations. Critical findings → checkbox → socket alert fires." },
      { step: 4, title: "Verify & Share", detail: "Senior radiologist verifies report. Status: Verified. Share link generated." },
      { step: 5, title: "Remote Access", detail: "Doctor or patient opens share link on any device. Sees full HD images + report. No login required." },
    ],
    benefits: [
      "Remote specialist review without PACS infrastructure",
      "Critical radiology findings alert doctors instantly via socket",
      "Share link enables telemedicine consultation across Pakistan",
      "Cloudinary CDN ensures fast image loading anywhere",
      "Report auto-links to patient EMR timeline",
    ],
    useCases: [
      { title: "Karachi Specialist Consult", body: "Peshawar patient needs CT review by Karachi specialist. Radiologist generates share link, WhatsApps it. Specialist views full HD images on phone. Calls back with opinion in 20 minutes." },
    ],
    relatedSlugs: ["emr", "lab-tests", "doctor-orders", "patient-management"],
  },

  // ─── AI & INTELLIGENCE ──────────────────────────────────────────────────────
  {
    slug: "ai-diagnosis",
    title: "AI Diagnosis Assistant",
    shortTitle: "AI Diagnosis",
    category: "AI & Intelligence",
    icon: Brain,
    plan: "Hospital Pro",
    tagline: "Gemini + Groq powered differential diagnosis with Pakistan-specific clinical context",
    metaTitle: "AI Diagnosis Software Pakistan | Hospital AI Assistant | EliteHMS",
    metaDescription:
      "Enter symptoms, vitals, and lab results. Gemini AI generates differential diagnoses with probability scores, red flags, investigations, treatment plans, and Pakistan-specific clinical notes.",
    keywords: [
      "AI diagnosis software Pakistan",
      "hospital AI assistant",
      "clinical decision support software",
      "Gemini AI medical software",
      "differential diagnosis software",
      "AI doctor assistant Pakistan",
      "Groq LLM medical software",
    ],
    description:
      "The AI Diagnosis Assistant uses Gemini 1.5 Flash for analysis and Groq Llama-3.1-8b-instant for reasoning. Doctors enter patient demographics, symptoms (per body system), vitals, and lab results. The AI returns red flags, ranked differential diagnoses with probability percentages and supporting/against evidence, recommended investigations with Pakistani availability and cost, treatment protocols, and referral guidance. Follow-up chat allows nuanced questions.",
    workflow: [
      { step: 1, title: "Enter Patient Details", detail: "Age, gender, chief complaint, duration of symptoms." },
      { step: 2, title: "Select Symptoms", detail: "Click-to-select symptom grid organized by body system (General, GI, Cardiovascular, Respiratory, etc.)." },
      { step: 3, title: "Add Vitals & Labs", detail: "Enter vital signs and paste lab results. Add existing conditions and allergies." },
      { step: 4, title: "Analyze", detail: "Click 'Analyze with AI'. Gemini + Groq process the case." },
      { step: 5, title: "Review Output", detail: "Red flags → differential diagnoses with % scores → investigations (with PKR cost ranges) → treatment plan → referral recommendation → Pakistan-specific notes." },
      { step: 6, title: "Follow-Up Chat", detail: "Ask follow-up questions: 'Patient cannot afford admission' → AI adjusts management plan." },
    ],
    benefits: [
      "Differential diagnoses ranked by probability — reduces diagnostic uncertainty",
      "Pakistan-specific context (dengue season, local drug availability, PKR costs)",
      "Red flags highlighted immediately — prevents missed emergencies",
      "Investigation costs in PKR — helps patients make informed decisions",
      "All sessions saved per clinic — searchable case history",
    ],
    useCases: [
      { title: "Dengue Diagnosis", body: "Fever + thrombocytopenia + hypotension in July. AI returns: Dengue Fever 62% with thrombocytopenia red flag, NS1 test recommendation (₨800–1,200), fluid resuscitation protocol, and mandatory DRAP reporting note." },
    ],
    relatedSlugs: ["prescription-ocr", "emr", "lab-tests", "knowledge-base"],
  },
  {
    slug: "demand-forecasting",
    title: "Predictive Medicine Demand",
    shortTitle: "Demand Forecasting",
    category: "AI & Intelligence",
    icon: TrendingUp,
    plan: "Pharmacy Pro",
    tagline: "AI predicts next month's medicine demand with Pakistan seasonality factors",
    metaTitle: "Medicine Demand Forecasting Software Pakistan | Pharmacy AI | EliteHMS",
    metaDescription:
      "Predict medicine demand using 12 months of sales data, weighted moving average, and Pakistan seasonality patterns (dengue season, winter respiratory peak). One-click purchase order creation.",
    keywords: [
      "medicine demand forecasting software",
      "pharmacy AI demand prediction Pakistan",
      "medical inventory forecasting",
      "medicine stock prediction software",
      "pharmacy demand planning Pakistan",
    ],
    description:
      "EliteHMS forecasts demand for each medicine using a weighted moving average (recent 3 months: 3:2:1 weight, blended 70/30 with historical average) enhanced by Pakistan-specific seasonality multipliers. Categories like Antibiotics peak in winter (×1.3) and GI medicines in monsoon (×1.4). Gemini AI adds Pakistan-specific market insights for the top 25 medicines. Accuracy is tracked monthly against actuals.",
    workflow: [
      { step: 1, title: "Historical Data", detail: "System automatically uses 12 months of billing sales data per medicine. No manual input needed." },
      { step: 2, title: "Run Forecast", detail: "Weighted moving average + seasonality factor applied. Prediction, safety stock (20%), and current stock computed." },
      { step: 3, title: "Order Suggestion", detail: "Suggested order qty = Predicted + Safety Stock − Current Stock. Urgency: Critical (< 7 days stock), High, Medium, Low." },
      { step: 4, title: "AI Insights", detail: "Gemini generates Pakistan-specific text insight per medicine: 'Augmentin demand peaks in winter Pakistan — order immediately.'" },
      { step: 5, title: "Create PO", detail: "Filter Critical + High urgency → Create Purchase Order → PO created with AI quantities. Pharmacist reviews before sending." },
    ],
    benefits: [
      "Never run out of a medicine during peak demand season",
      "Pakistan seasonality built-in — dengue, monsoon GI, winter respiratory patterns",
      "Monthly accuracy tracking drives model improvement over time",
      "One-click PO from forecast reduces procurement time to minutes",
      "Safety stock buffer prevents stockouts from demand spikes",
    ],
    useCases: [
      { title: "December Preparation", body: "October forecast: Azithromycin predicted 87 units for December (winter ×1.3). Current stock: 35. System suggests ordering 69 units by November 18. Pharmacist creates PO from forecast. December arrives — no stockout." },
    ],
    relatedSlugs: ["medicine-inventory", "purchase-orders", "knowledge-base", "reports-analytics"],
  },
  {
    slug: "knowledge-base",
    title: "RAG Knowledge Base",
    shortTitle: "Knowledge Base",
    category: "AI & Intelligence",
    icon: Database,
    plan: "Clinic",
    tagline: "Clinical drug information powered by your own documents + global medical database",
    metaTitle: "Medical Knowledge Base Software | RAG Clinical AI Pakistan | EliteHMS",
    metaDescription:
      "3-tier RAG knowledge base: store documents, global clinical database (BNF, WHO guidelines), and AI fallback. Groq Llama answers drug queries with source citations and dosing information.",
    keywords: [
      "medical knowledge base software",
      "clinical decision support Pakistan",
      "drug information system hospital",
      "RAG knowledge base pharmacy",
      "Qdrant vector database medical",
    ],
    description:
      "A 3-tier query system: Tier 1 searches the clinic's own uploaded documents (protocols, fee lists, formulary), Tier 2 searches the global clinical database (BNF, WHO guidelines, DRAP drug list, Pakistan National Formulary uploaded by EliteHMS), and Tier 3 falls back to Groq Llama AI. Responses are labeled by source. Store owners can upload up to 25 documents (15 MB total).",
    workflow: [
      { step: 1, title: "Upload Documents (Admin)", detail: "Pharmacy uploads own protocols, fee schedules, medicine list. Supported: PDF/DOCX/TXT/MD (up to 5 MB each)." },
      { step: 2, title: "Processing", detail: "System splits text into 600-char chunks → Gemini embedding (768-dim) → stored in Qdrant Cloud with store ID tag. Status: Ready." },
      { step: 3, title: "Staff Query", detail: "Doctor or pharmacist types question: 'Paracetamol dose for a 5-year-old?'" },
      { step: 4, title: "3-Tier Search", detail: "Tier 1: store docs (no match) → Tier 2: global DB (Paracetamol monograph found) → Groq generates answer with source citation." },
      { step: 5, title: "Labeled Response", detail: "'📋 Your Knowledge' / '🌐 Clinical Database' / '🤖 AI Knowledge'. User knows exactly how confident to be." },
    ],
    benefits: [
      "Pharmacists answer drug queries in seconds — no manual book lookup",
      "Store-specific documents stay private — isolated by store ID in Qdrant",
      "Source labeling shows whether answer is from clinic's own docs or global DB",
      "Global clinical DB maintained by EliteHMS — updated regularly",
    ],
    useCases: [
      { title: "Pediatric Dose Query", body: "Pharmacist asks: 'Paracetamol syrup dose for 3-year-old?' System searches global DB, finds monograph chunk, returns: '10–15 mg/kg every 4–6 hours. For 120mg/5ml syrup: 2.5–5ml per dose.' Source cited." },
    ],
    relatedSlugs: ["ai-diagnosis", "prescriptions", "demand-forecasting"],
  },

  // ─── ADMINISTRATION & FINANCE ────────────────────────────────────────────────
  {
    slug: "authentication",
    title: "Authentication & Security",
    shortTitle: "Authentication",
    category: "Administration & Finance",
    icon: Fingerprint,
    plan: "All Plans",
    tagline: "JWT + 2FA + session management with 30-day persistent login",
    metaTitle: "Hospital Management System Security | 2FA Authentication | EliteHMS",
    metaDescription:
      "JWT access tokens (15 min), 30-day refresh token cookies, Google Authenticator 2FA, 10 recovery codes, and active session management across 5 devices. HIPAA-aligned security architecture.",
    keywords: [
      "hospital management system security",
      "2FA medical software Pakistan",
      "healthcare software authentication",
      "JWT refresh token medical software",
      "Google Authenticator pharmacy software",
    ],
    description:
      "EliteHMS uses a two-token strategy: a 15-minute access token (localStorage) and a 30-day httpOnly cookie refresh token. An Axios interceptor silently refreshes sessions — staff never see a login prompt mid-work. Optional Google Authenticator 2FA with 10 one-time recovery codes. Max 5 active sessions per user with remote logout.",
    workflow: [
      { step: 1, title: "Login", detail: "Email + password verified. If 2FA enabled: tempToken returned. User enters 6-digit OTP." },
      { step: 2, title: "Tokens Issued", detail: "Access token (15 min) + httpOnly refresh cookie (30 days). User lands on dashboard." },
      { step: 3, title: "Silent Refresh", detail: "Access token expires → Axios interceptor catches 401 → calls /auth/refresh → retries original request. User sees nothing." },
      { step: 4, title: "2FA Setup", detail: "Settings → Security → Enable 2FA. QR code scanned with Google Authenticator. 10 recovery codes generated (bcrypt hashed)." },
      { step: 5, title: "Session Management", detail: "View all active sessions with device info. Logout all devices with one click." },
    ],
    benefits: [
      "30-day persistent login — staff never re-enter passwords during work week",
      "2FA prevents account takeover even if password is stolen",
      "Recovery codes ensure 2FA lockout never loses account access",
      "Max 5 sessions prevents credential sharing abuse",
      "httpOnly cookie refresh token immune to XSS attacks",
    ],
    useCases: [
      { title: "Stolen Phone 2FA Block", body: "Doctor's phone stolen. Attacker has password from breach. Hits 2FA screen. Without the authenticator app, cannot log in. Doctor uses recovery code to log in, changes password." },
    ],
    relatedSlugs: ["staff-management", "navigation"],
  },
  {
    slug: "staff-management",
    title: "Staff Management",
    shortTitle: "Staff",
    category: "Administration & Finance",
    icon: Lock,
    plan: "All Plans",
    tagline: "Role-based access control with email invitations and instant deactivation",
    metaTitle: "Hospital Staff Management Software | Role-Based Access Control | EliteHMS",
    metaDescription:
      "Add staff with role-based access: Admin, Pharmacist, Doctor, Nurse, Receptionist, Lab Tech. Email invitations. Instant deactivation. Audit trail preserved even for inactive accounts.",
    keywords: [
      "hospital staff management software",
      "role-based access control medical software",
      "pharmacy staff management",
      "hospital employee management system",
      "medical staff access control Pakistan",
    ],
    description:
      "EliteHMS supports 6 staff roles with distinct module access: Admin (full), Pharmacist (medicines/billing/patients), Doctor (appointments/EMR/AI), Nurse (nursing station/vitals/MAR), Receptionist (patients/appointments/billing), Lab Tech (lab tests only). Staff are invited via email and set their own password. Deactivated accounts preserve the full audit trail.",
    workflow: [
      { step: 1, title: "Invite Staff", detail: "Enter email, select role. Invitation sent. Staff clicks link, sets password. Account active." },
      { step: 2, title: "Role Enforcement", detail: "Each role sees only permitted modules. Pharmacist cannot access Payroll. Nurse cannot access Accounting." },
      { step: 3, title: "Deactivate", detail: "Toggle staff to Inactive. Account blocked immediately. All historical records remain linked to their name." },
      { step: 4, title: "Role Change", detail: "Admin can change role at any time. Permissions update immediately on next login." },
    ],
    benefits: [
      "Confidential financial data hidden from non-admin staff",
      "Instant deactivation when staff leaves — no IT ticket needed",
      "Audit trail links every action to a specific staff member",
      "Email invitation eliminates password sharing during onboarding",
    ],
    useCases: [
      { title: "Staff Departure", body: "Pharmacist resigns. Admin deactivates account in 10 seconds. Former employee immediately loses all access. All their past bills and records remain intact and attributed." },
    ],
    relatedSlugs: ["authentication", "payroll", "reports-analytics"],
  },
  {
    slug: "accounting",
    title: "Advanced Accounting",
    shortTitle: "Accounting",
    category: "Administration & Finance",
    icon: Wallet,
    plan: "Pharmacy Pro",
    tagline: "P&L statement, expense management, medicine margins, and FBR tax summary",
    metaTitle: "Hospital Accounting Software Pakistan | Pharmacy P&L Software | EliteHMS",
    metaDescription:
      "Full P&L statement, 12-category expense management, medicine margin analysis, yearly revenue trends, and FBR GST summary with Excel export for IRIS portal submission.",
    keywords: [
      "hospital accounting software Pakistan",
      "pharmacy P&L software",
      "medical store accounting Pakistan",
      "FBR tax summary pharmacy",
      "medicine profit margin software",
      "healthcare financial management Pakistan",
    ],
    description:
      "EliteHMS Advanced Accounting gives owners a full picture: Gross Revenue → Less Discounts → Net Revenue → COGS (purchase price × qty sold) → Gross Profit → Operating Expenses → Net Profit. Expenses tracked across 12 categories with vendor NTN and GST flags for FBR input tax credits. Medicine-level margin analysis highlights products below 15% margin. Excel export for FBR IRIS portal.",
    workflow: [
      { step: 1, title: "P&L Statement", detail: "Auto-calculated from all bills (revenue) and purchase orders (COGS). Operating expenses entered manually. Net profit calculated with margin %." },
      { step: 2, title: "Expense Management", detail: "Add expenses: category (Rent/Salaries/Utilities/Medicine Purchase/Equipment etc.), amount, payment method, vendor NTN, GST applicable flag." },
      { step: 3, title: "Medicine Margins", detail: "Per-medicine: Revenue, COGS, Gross Profit, Margin %. Red alert for < 15% margin. Green for healthy margins." },
      { step: 4, title: "FBR Tax Summary", detail: "Output Tax (GST collected) − Input Tax (GST paid with NTN invoices) = Net Tax Payable. Export to Excel for IRIS portal." },
      { step: 5, title: "Yearly Trend", detail: "12-month Revenue vs Expenses vs Profit chart. Year-over-year comparison." },
    ],
    benefits: [
      "Real net profit — not just revenue — visible at any time",
      "FBR GST reconciliation done in minutes instead of hours",
      "Low-margin medicine alerts enable pricing strategy adjustments",
      "Only accessible by Admin/Owner — financial data stays confidential",
      "Excel export compatible with accountant and FBR requirements",
    ],
    useCases: [
      { title: "Year-End FBR Filing", body: "Accountant needs GST summary. Admin opens Accounting → FBR Tax Summary → exports Excel. Vendor-wise input tax breakdown ready for IRIS portal in 2 minutes." },
    ],
    relatedSlugs: ["billing-invoices", "payroll", "reports-analytics", "insurance-panels"],
  },
  {
    slug: "insurance-panels",
    title: "Insurance & Panel Management",
    shortTitle: "Insurance Panels",
    category: "Administration & Finance",
    icon: BadgeCheck,
    plan: "Hospital Pro",
    tagline: "Manage Jubilee, EFU, State Life, EOBI and 10+ panels with automated claim tracking",
    metaTitle: "Insurance Panel Management Software Pakistan | Hospital Insurance Claims | EliteHMS",
    metaDescription:
      "Configure insurance panels (Jubilee, EFU, State Life, EOBI, PESSI, corporate HR), enroll patients, auto-calculate claims, and track from Draft to Paid. Panel performance reports included.",
    keywords: [
      "insurance panel management software Pakistan",
      "hospital insurance claim system",
      "Jubilee Health Insurance software",
      "EOBI hospital management",
      "medical insurance billing software Pakistan",
      "health panel claim tracking",
    ],
    description:
      "Configure any insurance or corporate panel with coverage type (Full/Partial/Co-pay/Cashless), coverage percentage, allowed services, max claim per bill, and annual limit per patient. Billing automatically calculates the patient's co-pay and the insurance portion. Claims track from Draft → Submitted → Under Review → Approved → Paid (or Rejected → Appealed).",
    workflow: [
      { step: 1, title: "Configure Panel", detail: "Add panel name, type, coverage %, allowed services, max claim, annual limit, contact details, and payment terms (Net 30/Net 60)." },
      { step: 2, title: "Enroll Patient", detail: "Link patient to panel with policy number and coverage expiry date." },
      { step: 3, title: "Auto-Calculate Claim", detail: "Bill created → insurance portion auto-calculated. Patient pays co-pay at counter. Claim CLM-000042 created (Draft)." },
      { step: 4, title: "Submit Claim", detail: "Submit to insurance → status: Submitted → Under Review → Approved/Partially Approved." },
      { step: 5, title: "Record Payment", detail: "Insurance pays cheque → record cheque number and amount → status: Paid → socket alert: '💰 Jubilee payment received: ₨6,500.'" },
    ],
    benefits: [
      "Co-pay calculated automatically — no manual arithmetic at counter",
      "Full claim lifecycle tracked — never lose a pending claim",
      "Panel performance report shows approval rates and processing times",
      "Partial approval and appeal tracking built-in",
      "Annual limit tracking prevents over-claiming per patient",
    ],
    useCases: [
      { title: "Jubilee Claim Cycle", body: "Patient bill ₨8,500. Jubilee 80% coverage. System calculates patient co-pay ₨1,700 instantly. Claim CLM-042 submitted. Jubilee approves ₨6,500 (slight reduction). Cheque recorded. Admin receives socket alert." },
    ],
    relatedSlugs: ["billing-invoices", "patient-management", "accounting", "reports-analytics"],
  },
  {
    slug: "payroll",
    title: "Salary & Payroll Management",
    shortTitle: "Payroll",
    category: "Administration & Finance",
    icon: CreditCard,
    plan: "Hospital Pro",
    tagline: "Pakistan payroll with FBR tax slabs, EOBI deductions, and payslip generation",
    metaTitle: "Hospital Payroll Software Pakistan | Medical Staff Salary Management | EliteHMS",
    metaDescription:
      "Calculate salaries with FBR 2024 income tax slabs, EOBI deductions, absence deductions, bonuses, and advance repayments. Generate professional payslips as PDF or WhatsApp share.",
    keywords: [
      "hospital payroll software Pakistan",
      "medical staff salary management",
      "FBR income tax payroll software",
      "EOBI deduction software Pakistan",
      "pharmacy salary management system",
      "payslip generator Pakistan",
    ],
    description:
      "EliteHMS Payroll handles the complete Pakistan payroll cycle: Basic + Allowances (HRA, Medical, Transport) = Gross. EOBI (₨570/month employee share), FBR income tax (auto-calculated per current slabs), absence deductions, and advance repayments. Each month's payroll generates as Draft for HR review before being marked Processed and then Paid. Professional payslips with signature lines generated as PDF.",
    workflow: [
      { step: 1, title: "Employee Profile", detail: "Basic salary + allowances (HRA, Medical, Transport) configured. Bank details added. EOBI and income tax enabled." },
      { step: 2, title: "Generate Payroll", detail: "Select month/year, set working days. System creates Draft records for all active employees with auto-calculated deductions." },
      { step: 3, title: "HR Review", detail: "Adjust for absences (salary/working days × absent days), add bonuses (Eid etc.), review tax calculations." },
      { step: 4, title: "Process & Pay", detail: "Mark Processed → Mark Paid with payment method (Bank Transfer). Advance repayments auto-deducted." },
      { step: 5, title: "Payslip", detail: "PDF payslip with clinic header, earnings table, deductions table, net salary, and signature lines. Print or WhatsApp share." },
    ],
    benefits: [
      "FBR tax slabs auto-applied — no manual tax calculation",
      "Advance recovery tracked and auto-deducted each month until cleared",
      "Absence deductions calculated precisely per working days",
      "Annual tax summary per employee ready for income tax returns",
      "Confidential — accessible only to Admin/Owner role",
    ],
    useCases: [
      { title: "Eid Bonus Month", body: "July payroll: Nurse Fatima has 2 absences + ₨10,000 advance (₨2,000/month recovery). HR adds ₨2,000 Eid bonus. Net = Gross ₨66,000 − Absence ₨3,461 − EOBI ₨570 − Tax ₨1,250 − Advance ₨2,000 + Bonus ₨2,000 = ₨60,719." },
    ],
    relatedSlugs: ["staff-management", "accounting", "reports-analytics"],
  },
  {
    slug: "whatsapp-broadcast",
    title: "WhatsApp & SMS Broadcast",
    shortTitle: "Broadcast",
    category: "Administration & Finance",
    icon: Bell,
    plan: "Clinic",
    tagline: "Targeted patient campaigns with 8 audience filters and personalized messages",
    metaTitle: "WhatsApp Broadcast for Hospitals Pakistan | Patient SMS Campaign | EliteHMS",
    metaDescription:
      "Send bulk WhatsApp messages to patients filtered by condition, city, blood group, age, last visit date, outstanding balance, or upcoming appointment. 15+ built-in message templates.",
    keywords: [
      "WhatsApp broadcast hospital Pakistan",
      "patient SMS campaign software",
      "medical WhatsApp marketing",
      "hospital patient messaging software",
      "pharmacy patient broadcast system",
    ],
    description:
      "Create targeted WhatsApp campaigns with 8 audience filter types: All Active Patients, By Medical Condition, Not Seen in X Days, By City, By Blood Group, Age Range, Outstanding Balance, and Insured Patients. Messages are personalized with variables ({name}, {storeName}, {city}) and preview shows the exact message per patient. 15+ built-in templates (Eid Mubarak, diabetes health tips, appointment reminders, etc.).",
    workflow: [
      { step: 1, title: "Define Audience", detail: "Choose filter type (e.g. 'Not Seen in 30 Days'). Preview shows patient count and those without phones." },
      { step: 2, title: "Write Message", detail: "Select template or write custom. Use variables: {name}, {storeName}, {city}. Live personalized preview." },
      { step: 3, title: "Review & Send", detail: "Summary: 847 recipients. Create & Start Sending." },
      { step: 4, title: "Sending Queue", detail: "Patient shown one at a time with pre-filled message. [Open in WhatsApp Web] → send → [✓ Sent] → next. Progress: 127/847." },
    ],
    benefits: [
      "Blood group filter enables emergency donor drives instantly",
      "Outstanding balance filter automates payment reminders",
      "Diabetic patient filter for HbA1c recall campaigns",
      "City filter for local health awareness or clinic events",
      "15+ ready templates reduce message composition time to seconds",
    ],
    useCases: [
      { title: "Ramadan Campaign", body: "Admin creates 'Ramadan Mubarak' campaign → All Active Patients filter → 847 patients → template auto-fills with {name} and {storeName}. Campaign sent over 2 hours. Patient satisfaction messages returned." },
    ],
    relatedSlugs: ["patient-management", "patient-feedback", "reports-analytics"],
  },
  {
    slug: "reports-analytics",
    title: "Reports & Analytics",
    shortTitle: "Reports",
    category: "Administration & Finance",
    icon: BarChart3,
    plan: "All Plans",
    tagline: "9 report types with date filters and Excel/PDF export",
    metaTitle: "Hospital Reports & Analytics Software Pakistan | Healthcare Dashboard | EliteHMS",
    metaDescription:
      "Sales reports, medicine-wise analysis, doctor billing, patient demographics, stock reports, purchase reports, payment method breakdown, staff performance, and outstanding balances. All exportable.",
    keywords: [
      "hospital reports analytics software",
      "pharmacy management reports Pakistan",
      "medical store dashboard analytics",
      "healthcare analytics software Pakistan",
      "hospital billing analytics",
      "medical inventory reports",
    ],
    description:
      "EliteHMS includes 9 core report types accessible to Admin: Sales Report (daily/weekly/monthly revenue), Medicine-wise Sales (top sellers), Doctor-wise Billing (revenue per doctor), Patient Report (new vs returning, demographics), Stock Report (inventory value, low stock), Purchase Report (supplier spending), Payment Method Report (Cash vs Digital vs Insurance split), Staff Performance (bills per staff member), and Outstanding Balances (overdue patient accounts). All reports support date range filtering and Excel/PDF export.",
    workflow: [
      { step: 1, title: "Select Report", detail: "Choose from 9 report types in the Reports module." },
      { step: 2, title: "Set Date Range", detail: "Filter by day, week, month, quarter, or custom date range." },
      { step: 3, title: "View & Analyze", detail: "Charts, tables, and key metrics shown instantly." },
      { step: 4, title: "Export", detail: "Download as Excel spreadsheet or branded PDF report." },
    ],
    benefits: [
      "Doctor billing report reveals revenue contribution per doctor",
      "Payment method split helps with bank reconciliation",
      "Outstanding balances report drives collection follow-ups",
      "Stock report shows total inventory value for balance sheet",
      "Staff performance report used for appraisals",
    ],
    useCases: [
      { title: "Month-End Review", body: "Admin opens Sales Report for July → Revenue ₨847,500, Top medicine: Augmentin (₨45,000), Payment split: 60% cash / 25% insurance / 15% digital. Exports to Excel for accountant." },
    ],
    relatedSlugs: ["accounting", "billing-invoices", "medicine-inventory", "staff-management"],
  },
  {
    slug: "navigation",
    title: "Navigation Customization",
    shortTitle: "Navigation",
    category: "Administration & Finance",
    icon: Zap,
    plan: "All Plans",
    tagline: "Show only the modules your facility uses — clean sidebar for every role",
    metaTitle: "Customizable Hospital Software Interface | Navigation Settings | EliteHMS",
    metaDescription:
      "Toggle module visibility in the sidebar per user. Pharmacies hide OT Scheduling and Blood Bank. Clinics hide IPD. Keeps the interface clean and relevant. Saved in localStorage instantly.",
    keywords: [
      "customizable hospital management software",
      "pharmacy software interface customization",
      "module visibility hospital software",
    ],
    description:
      "Each user can toggle module visibility in Settings → Navigation. Modules are grouped (Pharmacy, Hospital, AI & Tools). A pharmacy can hide all Hospital modules (Ward, IPD, OT, Blood Bank, Nurse Station) to keep their sidebar uncluttered. Changes save to localStorage and apply immediately without a page reload. Core items (Dashboard, Settings, Subscription, Expiry Alerts) are locked and cannot be hidden.",
    workflow: [
      { step: 1, title: "Open Navigation Settings", detail: "Settings → Navigation tab. Module groups displayed." },
      { step: 2, title: "Toggle Modules", detail: "Toggle individual modules or use 'Hide All' per group. Pharmacy user hides entire Hospital group." },
      { step: 3, title: "Instant Update", detail: "Sidebar updates immediately — no page reload. Hospital modules disappear. Clean pharmacy interface." },
    ],
    benefits: [
      "Reduces cognitive load for staff who don't use hospital modules",
      "Per-user settings — different staff see what they need",
      "No page reload — instant visual feedback",
      "Core compliance items always visible regardless of settings",
    ],
    useCases: [
      { title: "Pharmacy Setup", body: "New pharmacy on EliteHMS. Admin hides Ward, IPD, OT, Blood Bank, Nurse Station, Radiology from sidebar. Pharmacist sees only Medicines, Billing, Patients, Prescriptions, Reports." },
    ],
    relatedSlugs: ["authentication", "staff-management"],
  },
  {
    slug: "subscription-pricing",
    title: "Subscription & Pricing",
    shortTitle: "Subscription",
    category: "Administration & Finance",
    icon: Package,
    plan: "All Plans",
    tagline: "6 plans from ₨0 to ₨20,999/month — pharmacy to full hospital",
    metaTitle: "EliteHMS Pricing Plans Pakistan | Hospital Software Subscription | EliteHMS",
    metaDescription:
      "Free 14-day trial. Pharmacy Basic ₨1,999, Pharmacy Pro ₨3,999, Clinic ₨5,999, Hospital Basic ₨10,999, Hospital Pro ₨20,999/month. Pay via JazzCash, EasyPaisa, or bank transfer.",
    keywords: [
      "EliteHMS pricing Pakistan",
      "hospital management system price Pakistan",
      "pharmacy software subscription Pakistan",
      "HMS monthly subscription",
      "healthcare software pricing PKR",
    ],
    description:
      "EliteHMS offers 6 subscription tiers covering facilities from a single pharmacy to a full-service hospital. Payment is accepted via JazzCash, EasyPaisa, or bank transfer — no international card required. Subscriptions are activated within 2 hours after payment confirmation via WhatsApp.",
    workflow: [
      { step: 1, title: "Choose Plan", detail: "Select plan based on facility type. Free Trial unlocks all features for 14 days." },
      { step: 2, title: "Contact via WhatsApp", detail: "WhatsApp message auto-composed to EliteHMS number." },
      { step: 3, title: "Transfer Payment", detail: "Pay via JazzCash / EasyPaisa / Bank Transfer. Send screenshot." },
      { step: 4, title: "Activation", detail: "Subscription activated within 2 hours. Full plan access granted." },
    ],
    benefits: [
      "No credit card required — all Pakistani payment methods accepted",
      "Free trial includes every feature — informed decision before paying",
      "Upgrade at any time — plan changes apply immediately",
      "Single platform from small pharmacy to large hospital",
    ],
    useCases: [
      { title: "Scale-Up", body: "Single-branch pharmacy starts on Pharmacy Basic (₨1,999). Expands to clinic — upgrades to Clinic plan (₨5,999). Later opens hospital ward — upgrades to Hospital Basic (₨10,999). One platform throughout." },
    ],
    relatedSlugs: ["authentication", "staff-management", "navigation"],
  },
];

// Group features by category
export const featuresByCategory = allFeatures.reduce((acc, f) => {
  if (!acc[f.category]) acc[f.category] = [];
  acc[f.category].push(f);
  return acc;
}, {} as Record<FeatureCategory, EliteFeature[]>);

export const featureCategories: FeatureCategory[] = [
  "Pharmacy & Inventory",
  "Clinical & Patient",
  "Hospital Operations",
  "AI & Intelligence",
  "Administration & Finance",
];

export const categoryIcons: Record<FeatureCategory, string> = {
  "Pharmacy & Inventory": "💊",
  "Clinical & Patient": "🏥",
  "Hospital Operations": "🏨",
  "AI & Intelligence": "🤖",
  "Administration & Finance": "📊",
};

export function getFeatureBySlug(slug: string): EliteFeature | undefined {
  return allFeatures.find((f) => f.slug === slug);
}

export function getRelatedFeatures(slug: string): EliteFeature[] {
  const feature = getFeatureBySlug(slug);
  if (!feature) return [];
  return feature.relatedSlugs
    .map((s) => getFeatureBySlug(s))
    .filter(Boolean) as EliteFeature[];
}
