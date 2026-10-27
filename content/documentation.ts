import {
  Building2, LifeBuoy, Pill, Rocket, Settings, Sparkles, Stethoscope, type LucideIcon,
} from "lucide-react";

// ───────────── Types ─────────────
export type DocBlock =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "steps"; items: { title: string; detail?: string }[] }
  | { type: "callout"; kind: "tip" | "note" | "warning"; text: string }
  | { type: "cards"; items: { icon?: string; title: string; text: string }[] };

export type DocPage = {
  slug: string;
  title: string;
  description: string;
  image?: string; // hero image; falls back to the group image
  blocks?: DocBlock[]; // empty = "being written" placeholder page
};

export type DocGroup = {
  title: string;
  icon: LucideIcon;
  image: string;
  pages: DocPage[];
};

// ───────────── Helpers ─────────────
// Unsplash placeholders. Replace with your own screenshots later, e.g. "/docs/billing.png"
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

const IMG = {
  hospital: u("photo-1519494026892-80bbd2d6fd0d"),
  pharmacy: u("photo-1584308666744-24d5c474f2ae"),
  doctor: u("photo-1576091160399-112ba8d25d1d"),
  lab: u("photo-1579154204601-01588f351e67"),
  tech: u("photo-1576091160550-2173dba999ef"),
  team: u("photo-1551601651-2a8555f1a136"),
  dashboard: u("photo-1551288049-bebda4e38f71"),
  analytics: u("photo-1460925895917-afdab827c52f"),
  finance: u("photo-1554224155-6726b3ff858f"),
  payment: u("photo-1563013544-824ae1b704d3"),
  checkout: u("photo-1556742049-0cfed4f6a45d"),
};

const page = (slug: string, title: string, description?: string, extra: Partial<DocPage> = {}): DocPage => ({
  slug,
  title,
  description: description ?? `Everything you need to know about ${title} in EliteHMS.`,
  ...extra,
});

export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// ───────────── Sidebar structure (edit freely) ─────────────
export const docGroups: DocGroup[] = [
  {
    title: "Getting Started",
    icon: Rocket,
    image: IMG.hospital,
    pages: [
                  page(
        "introduction",
        "Introduction",
        "EliteHMS is a web-based hospital and healthcare management system that helps pharmacies, clinics, and hospitals manage their daily work in one place.",
        {
          blocks: [
            { type: "heading", text: "What is EliteHMS?" },
            {
              type: "paragraph",
              text: "EliteHMS brings together tools for handling medicines, patients, appointments, billing, and healthcare operations, all in one place.",
            },

            { type: "heading", text: "Built for your type of organization" },
            { type: "paragraph", text: "The platform includes features for different types of healthcare organizations." },
            {
              type: "cards",
              items: [
                { icon: "pill", title: "Pharmacy", text: "Manage stock, prescriptions, suppliers, and sales." },
                { icon: "stethoscope", title: "Clinic", text: "Adds appointments, patient records, and OPD visits." },
                {
                  icon: "building",
                  title: "Hospital",
                  text: "Adds admissions, wards, beds, nursing, operating theatre schedules, blood bank, and radiology.",
                },
              ],
            },

            { type: "heading", text: "Reports, staff access, and administration" },
            { type: "paragraph", text: "EliteHMS also provides tools for reports, staff access, and administration." },

            { type: "heading", text: "AI-powered features" },
            { type: "paragraph", text: "Some plans include AI-powered features, such as:" },
            { type: "list", items: ["Prescription scanning", "Medicine-demand forecasting", "Diagnosis support"] },

            { type: "heading", text: "How to use this guide" },
            { type: "paragraph", text: "This guide explains what each part of EliteHMS does and how to use it." },
            {
              type: "callout",
              kind: "note",
              text: "The features available to you depend on your subscription plan and your staff permissions.",
            },
          ],
        }
      ),
      page("quick-start", "Quick Start"),
      page("dashboard-overview", "Dashboard Overview"),
    ],
  },
  {
    title: "Pharmacy",
    icon: Pill,
    image: IMG.pharmacy,
    pages: [
      page("medicine-inventory", "Medicine Inventory"),
      page("billing-invoices", "Billing & Invoices"),
      page("purchase-orders", "Purchase Orders"),
      page("expiry-alerts", "Expiry Alerts"),
    ],
  },
  {
    title: "Clinic & OPD",
    icon: Stethoscope,
    image: IMG.doctor,
    pages: [
      page("patients", "Patients"),
      page("appointments", "Appointments"),
      page("opd-queue", "OPD Queue"),
      page("prescriptions", "Prescriptions"),
      page("lab-tests", "Lab Tests", undefined, { image: IMG.lab }),
    ],
  },
  {
    title: "Hospital & IPD",
    icon: Building2,
    image: IMG.team,
    pages: [
      page("ipd-management", "IPD Management"),
      page("ward-bed-management", "Ward & Bed Management"),
      page("nurse-station", "Nurse Station"),
      page("ot-scheduling", "OT Scheduling"),
      page("blood-bank", "Blood Bank"),
    ],
  },
  {
    title: "AI & Compliance",
    icon: Sparkles,
    image: IMG.tech,
    pages: [
      page("ai-diagnosis", "AI Diagnosis"),
      page("drap-compliance", "DRAP Compliance"),
    ],
  },
  {
    title: "Administration",
    icon: Settings,
    image: IMG.team,
    pages: [
      page("staff-roles", "Staff & Roles"),
      page(
        "subscription",
        "My Subscription",
        "The My Subscription page shows your current plan, how much of your plan you have used, your payment history, and other plans you can choose.",
        {
          blocks: [
            { type: "heading", text: "How to Find My Subscription" },
            {
              type: "steps",
              items: [
                { title: "Sign in to your EliteHMS account" },
                { title: "Select My Subscription in the left-hand menu", detail: "It is near the top of the menu." },
                { title: "The Subscription & Billing page opens" },
              ],
            },
            {
              type: "image",
              src: IMG.dashboard,
              alt: "My Subscription option in the left-hand menu",
              caption: "My Subscription in the left-hand menu",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If My Subscription is not visible, sign in with the correct account or ask your administrator to check your access.",
            },

            { type: "heading", text: "Current Plan" },
            {
              type: "paragraph",
              text: "At the top of the page, you can see the plan that is active for your account. In this example, the current plan is Pharmacy Basic Plan. The renewal date and remaining days are shown below it.",
            },
            {
              type: "image",
              src: IMG.checkout,
              alt: "Current plan section at the top of the Subscription & Billing page",
              caption: "The current plan, renewal date, and remaining days",
            },

            { type: "heading", text: "Current Usage" },
            { type: "paragraph", text: "This section shows how much of your plan’s allowance your store has used." },
            {
              type: "list",
              items: [
                "Medicines: 0 of 500 used",
                "Patients: 0 of 300 used",
                "Staff Members: 2 of 3 used",
                "Bills This Month: Unlimited",
              ],
            },
            { type: "paragraph", text: "The progress bars show your usage visually." },
            {
              type: "callout",
              kind: "note",
              text: "If you reach a plan limit, you may need to upgrade before adding more records or staff.",
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Current usage section with progress bars",
              caption: "Usage progress bars for medicines, patients, staff, and bills",
            },

            { type: "heading", text: "Payment History" },
            {
              type: "paragraph",
              text: "This section lists payments recorded for your subscription. Each entry can show the plan name, payment method or transaction reference, amount, and payment date.",
            },
            {
              type: "image",
              src: IMG.payment,
              alt: "Payment history list",
              caption: "Payments recorded for your subscription",
            },

            { type: "heading", text: "Available Plans" },
            {
              type: "paragraph",
              text: "Compare the plans shown on the page to find the features and limits that suit your organization. Prices are displayed in PKR per month. The button on your current plan identifies it; the other plans have upgrade buttons.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Before upgrading, review the plan price and included features. Follow the confirmation and payment steps shown by the app.",
            },
            {
              type: "image",
              src: IMG.finance,
              alt: "Available plans with upgrade buttons",
              caption: "Available plans, priced in PKR per month",
            },
            {
              type: "callout",
              kind: "note",
              text: "The values in these screenshots are examples from the account shown. Your plan, usage, payment history, prices, and renewal date may be different.",
            },
          ],
        }
      ),
      page("reports-analytics", "Reports & Analytics"),
    ],
  },
  {
    title: "Help & Support",
    icon: LifeBuoy,
    image: IMG.doctor,
    pages: [
      page("troubleshooting", "Troubleshooting"),
      page("contact-support", "Contact Support"),
    ],
  },
];

// ───────────── Lookups ─────────────
export const allDocPages = docGroups.flatMap((g) => g.pages.map((p) => ({ ...p, group: g })));

export const docHref = (slug: string) => (slug === "introduction" ? "/documentation" : `/documentation/${slug}`);

export function findDocPage(slug: string) {
  const i = allDocPages.findIndex((p) => p.slug === slug);
  if (i === -1) return null;
  const page = allDocPages[i];
  return { page, group: page.group, prev: allDocPages[i - 1] ?? null, next: allDocPages[i + 1] ?? null };
}