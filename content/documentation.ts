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
      page("subscription", "My Subscription"),
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