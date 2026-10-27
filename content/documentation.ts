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
  map: u("photo-1524661135-423995f22d0b"),

  office: u("photo-1486406146926-c627a92ad1ab"),
  staff: u("photo-1522071820081-009f0129c71c"),
  form: u("photo-1450101499163-c8848c66ca85"),
  
  charts: u("photo-1543286386-713bdd548da4"),
  stock: u("photo-1585435557343-3b092031a831"),
  invoice: u("photo-1554224154-22dec7ec8818"),

  ai: u("photo-1677442136019-21780ecad995"),
  robot: u("photo-1531746790731-6c087fecd65a"),
  laptop: u("photo-1516321318423-f06f85e504b3"),
  meds: u("photo-1587854692152-cbe660dbde88"),
  pills: u("photo-1471864190281-a93a3070b6de"),

  barcode: u("photo-1601599561213-832382fd07ba"),
  warehouse: u("photo-1553413077-190dd305871c"),
  capsules: u("photo-1550572017-edd951b55104"),

  reception: u("photo-1631217868264-e5b90bb7e133"),
  records: u("photo-1581594693702-fbdc51b2763b"),
  phone: u("photo-1556745757-8d76bdb6984b"),
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
      page(
        "dashboard",
        "Dashboard",
        "The Dashboard gives you a quick overview of the selected location’s medicine store activity.",
        {
          image: IMG.analytics,
          blocks: [
            {
              type: "paragraph",
              text: "Use it to spot stock and payment issues, review sales, and open common tasks.",
            },

            { type: "heading", text: "How to Find the Dashboard" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Select **Dashboard** from the left-hand menu" },
              ],
            },
            {
              type: "image",
              src: IMG.dashboard,
              alt: "Dashboard option in the left-hand menu",
              caption: "Dashboard in the left-hand menu",
            },
            {
              type: "callout",
              kind: "note",
              text: "Before using the figures, check the location name in the top bar. Dashboard information is for the selected location, so figures may differ when you switch branches.",
            },

            { type: "heading", text: "New Invoice" },
            {
              type: "paragraph",
              text: "Select **New Invoice** in the upper-right corner to open the invoice form and create a bill.",
            },
            {
              type: "image",
              src: IMG.invoice,
              alt: "New Invoice button in the upper-right corner of the Dashboard",
              caption: "The New Invoice button",
            },

            { type: "heading", text: "Summary Cards" },
            { type: "paragraph", text: "The cards show counts and totals for the selected location:" },
            {
              type: "list",
              items: [
                "**Total Medicines:** Number of active medicine records. The smaller line shows how many are low in stock.",
                "**Total Patients:** Number of active patient records.",
                "**Expired Medicines:** Number of medicines past their expiry date. The smaller line shows how many medicines are expiring soon, within 30 days.",
                "**Today’s Revenue:** Total value of bills created today, with the number of bills shown below. This is the bill total; it may differ from the amount already collected if a bill is unpaid or partly paid.",
                "**Monthly Revenue:** Total value and number of bills created this month.",
                "**Pending Balance:** Money still owed on pending or partly paid bills. The smaller line shows how many bills are pending.",
                "**Low Stock Items:** Number of medicines whose recorded stock is at or below their minimum stock level.",
                "**Pending Bills:** Number of bills awaiting full payment.",
              ],
            },
            {
              type: "image",
              src: IMG.finance,
              alt: "Dashboard summary cards",
              caption: "Summary cards for the selected location",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Select a card to open its related page. For example, **Pending Balance** opens **Patient Balances**, and **Expired Medicines** opens **Expiry Alerts**.",
            },

            { type: "heading", text: "Expiry Warning" },
            {
              type: "paragraph",
              text: "If medicines are expired or expiring soon, a warning can appear above the cards. Select it to open **Expiry Alerts** and review the affected medicines.",
            },
            {
              type: "image",
              src: IMG.stock,
              alt: "Expiry warning banner above the summary cards",
              caption: "The expiry warning above the cards",
            },

            { type: "heading", text: "Charts" },
            {
              type: "list",
              items: [
                "**Monthly Revenue:** A bar chart showing bill totals for the last six months. Hover over a bar to see its revenue value. If there are no bills for the period, the chart may be empty.",
                "**Medicine Categories:** A chart showing how active medicine records are divided among categories. It counts medicine records by category; it does not show sales.",
              ],
            },
            {
              type: "image",
              src: IMG.charts,
              alt: "Monthly Revenue bar chart and Medicine Categories chart",
              caption: "Monthly Revenue and Medicine Categories charts",
            },

            { type: "heading", text: "More Dashboard Information" },
            {
              type: "paragraph",
              text: "Scroll down to see **Top Selling Medicines**, which lists up to five medicines by quantity sold, with units sold and revenue.",
            },
            {
              type: "paragraph",
              text: "When new bills are created, they may also appear in **Live Activity** with the bill number, patient name, and total.",
            },
            {
              type: "image",
              src: IMG.office,
              alt: "Top Selling Medicines and Live Activity sections",
              caption: "Top Selling Medicines and Live Activity",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Be mindful of patient privacy when viewing or sharing the screen.",
            },

            { type: "heading", text: "Helpful Checks" },
            {
              type: "list",
              items: [
                "A zero can mean there are no matching records for the selected location or time period. Check the location before assuming data is missing.",
                "Revenue is the total value of bills. Pending balance is the part of bills that has not yet been paid.",
                "Low stock means the medicine’s recorded stock is at or below its configured minimum.",
                "Review expiry and low-stock cards regularly so the team can take action.",
              ],
            },
          ],
        }
      ),
    ],
  },
  {
    title: "Pharmacy",
    icon: Pill,
    image: IMG.pharmacy,
    pages: [
      page(
        "medicines",
        "Medicines",
        "The Medicines page is where you manage the selected location’s medicine inventory.",
        {
          image: IMG.capsules,
          blocks: [
            {
              type: "paragraph",
              text: "You can add and update medicine records, search the list, check expiry or low-stock items, and scan barcodes.",
            },

            { type: "heading", text: "How to Find This Page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Select **Medicines** from the left-hand menu" },
              ],
            },
            {
              type: "image",
              src: IMG.pharmacy,
              alt: "Medicines option in the left-hand menu",
              caption: "Medicines in the left-hand menu",
            },
            {
              type: "callout",
              kind: "note",
              text: "Before adding or changing a record, check the branch shown in the top bar. Medicine inventory belongs to the selected location.",
            },

            { type: "heading", text: "Search and Filter" },
            {
              type: "paragraph",
              text: "Use the search box to find a medicine by its name, generic name, or batch number. Use the category menu and status buttons to narrow the list:",
            },
            {
              type: "list",
              items: [
                "**All:** Show medicines matching the current search and category.",
                "**Expiring Soon:** Show medicines nearing their expiry date.",
                "**Expired:** Show medicines past their expiry date.",
                "**Low Stock:** Show medicines at or below their minimum stock level.",
              ],
            },
            {
              type: "image",
              src: IMG.warehouse,
              alt: "Search box, category menu, and status buttons above the medicine list",
              caption: "Search box, category menu, and status buttons",
            },
            {
              type: "paragraph",
              text: "The page shows up to 15 records at a time; use the page controls at the bottom to view more.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the list says **No medicines found**, add a medicine or check whether your search, category, or status filters are hiding the records.",
            },

            { type: "heading", text: "Add a Medicine" },
            {
              type: "steps",
              items: [
                { title: "Select **Add Medicine**" },
                {
                  title: "Enter the required details",
                  detail: "Medicine name, purchase price, sale price, stock quantity, and expiry date are required.",
                },
                { title: "Add the other details where available", detail: "See the list below." },
                { title: "Check the details, then select **Add Medicine**" },
              ],
            },
            { type: "paragraph", text: "Other details you can add:" },
            {
              type: "list",
              items: [
                "Generic name, category, dosage form, and strength",
                "Unit, manufacturer, and batch number",
                "Minimum stock alert",
                "Manufacturing date and storage location",
                "Whether a prescription is required",
                "Description and barcode",
              ],
            },
            {
              type: "image",
              src: IMG.meds,
              alt: "Add Medicine form",
              caption: "The Add Medicine form",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Use the correct unit for the stock quantity, such as **Pcs**, **Strip**, **Box**, **Bottle**, **Vial**, or **Tube**.",
            },
            {
              type: "callout",
              kind: "note",
              text: "The **Storage Location** field means the shelf or place inside this branch, such as “Shelf A, Row 2.”",
            },

            { type: "heading", text: "AI Autofill" },
            {
              type: "paragraph",
              text: "Enter the medicine name, then select the AI suggestion button beside it to fill some details, such as generic name, category, dosage form, strength, prescription requirement, and description.",
            },
            {
              type: "image",
              src: IMG.ai,
              alt: "AI suggestion button beside the medicine name field",
              caption: "The AI suggestion button beside the medicine name",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Review every suggested value before saving. AI can make mistakes, and it may not fill every field. Confirm important medicine information with a trusted source or qualified pharmacist.",
            },

            { type: "heading", text: "Barcode Scanner" },
            {
              type: "paragraph",
              text: "Select **Scan Barcode** to look up a medicine by scanning its barcode.",
            },
            {
              type: "list",
              items: [
                "If the barcode matches a medicine already in the inventory, its record opens for editing.",
                "If no medicine matches, the page opens the **Add Medicine** form with the scanned barcode filled in.",
              ],
            },
            {
              type: "image",
              src: IMG.barcode,
              alt: "Scan Barcode button and camera view",
              caption: "Scanning a barcode",
            },
            {
              type: "paragraph",
              text: "You can also scan from inside the Add or Edit form to fill the barcode field.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Allow camera access if your browser asks for it.",
            },

            { type: "heading", text: "Understanding the Medicine List" },
            { type: "paragraph", text: "When medicines are present, the table can show:" },
            {
              type: "list",
              items: [
                "**Medicine:** Name, generic name, dosage form, strength, and an **Rx** badge if a prescription is required.",
                "**Category:** The medicine’s category.",
                "**Stock:** Quantity currently recorded, its unit, and the minimum stock alert.",
                "**Purchase / Sale:** Recorded purchase and sale prices.",
                "**Expiry / Status:** Expiry date and whether the medicine is valid, expiring soon, or expired.",
                "**Actions:** Open available clinical information, edit the record, link substitutes, or delete it if your account has permission.",
              ],
            },
            {
              type: "image",
              src: IMG.stock,
              alt: "Medicine list table with stock, prices, expiry, and actions",
              caption: "The medicine list",
            },

            { type: "heading", text: "Update a Medicine" },
            {
              type: "steps",
              items: [
                { title: "Select the edit button on the medicine’s row", detail: "The form opens with the current details filled in." },
                { title: "Make the correction" },
                { title: "Select **Update Medicine**" },
              ],
            },
            {
              type: "callout",
              kind: "tip",
              text: "Check the batch, stock, prices, and dates before saving.",
            },

            { type: "heading", text: "Low Stock, Expiry, and Substitutes" },
            {
              type: "list",
              items: [
                "A medicine is marked **Low Stock** when its recorded quantity is at or below its minimum stock alert. Update the minimum stock value to match your store’s needs.",
                "**Expiring Soon** means the expiry date is within the next 30 days. Check the physical package and batch before taking action.",
                "**Expired** means the expiry date has passed. Follow your pharmacy’s process for removing expired stock from sale.",
                "Use **Link Substitutes** to connect possible alternative medicines. The page suggests medicines in the same category first.",
              ],
            },
            {
              type: "callout",
              kind: "warning",
              text: "A qualified pharmacist or clinician must confirm that a substitute is appropriate.",
            },

            { type: "heading", text: "Deleting a Medicine" },
            {
              type: "callout",
              kind: "warning",
              text: "Delete only when you are sure the record should be removed. The confirmation warns that deletion cannot be undone.",
            },
            {
              type: "paragraph",
              text: "If you only need to correct a name, price, quantity, or date, edit the record instead. Delete access may depend on your account permissions.",
            },

            { type: "heading", text: "Useful Checks" },
            {
              type: "list",
              items: [
                "Confirm the selected branch before entering stock.",
                "Check the medicine name, strength, dosage form, batch, and expiry against the package.",
                "Enter the correct stock unit and prices.",
                "Review AI suggestions before saving.",
                "Do not treat a linked substitute as automatic approval to replace a medicine.",
              ],
            },
          ],
        }
      ),
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
      page(
        "patients",
        "Patients",
        "The Patients page stores patient contact and health information for the selected location.",
        {
          image: IMG.reception,
          blocks: [
            {
              type: "paragraph",
              text: "You can register patients, view or update their records, check billing totals, manage patient documents, and create a patient portal link.",
            },

            { type: "heading", text: "How to Find This Page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Select **Patients** from the left-hand menu" },
              ],
            },
            {
              type: "image",
              src: IMG.doctor,
              alt: "Patients option in the left-hand menu",
              caption: "Patients in the left-hand menu",
            },
            {
              type: "callout",
              kind: "note",
              text: "Check the location shown in the top bar. Patient records are associated with the selected branch.",
            },

            { type: "heading", text: "Search and Patient List" },
            {
              type: "paragraph",
              text: "Search by patient name, patient ID, or phone number. The page shows up to 15 patients at a time; use the controls below the list to see more.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the page says **No patients found**, register a patient or check the search text and selected location.",
            },
            {
              type: "paragraph",
              text: "When records are available, the table can show the patient’s name, ID, age, gender, city, contact details, blood group, doctor, and billing totals.",
            },
            {
              type: "list",
              items: [
                "**Billed:** Total amount of the patient’s bills.",
                "**Paid:** Amount recorded as paid.",
                "**Balance:** The amount still owed. **Cleared** means no balance is currently due.",
              ],
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Patient list with search box and billing totals",
              caption: "The patient list with Billed, Paid, and Balance",
            },
            {
              type: "paragraph",
              text: "Select **View Balances** to open the **Patient Balances** page, where staff can review outstanding dues and record payments.",
            },

            { type: "heading", text: "Register a Patient" },
            {
              type: "steps",
              items: [
                { title: "Select **Add Patient**" },
                { title: "Enter the patient’s **Full Name**", detail: "This is required." },
                { title: "Add other details as available", detail: "See the list below." },
                { title: "Check the details and select **Register Patient**" },
              ],
            },
            { type: "paragraph", text: "Other details you can add:" },
            {
              type: "list",
              items: [
                "Age and gender",
                "Phone and email",
                "Blood group",
                "City and address",
                "Attending doctor",
                "Medical history",
                "Known allergies",
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Register Patient form",
              caption: "The Register Patient form",
            },
            {
              type: "callout",
              kind: "note",
              text: "The app assigns a patient ID after registration.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Enter allergies separated by commas, for example: **Penicillin, Aspirin**.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Search the patient list before registering so you can check whether a record already exists.",
            },

            { type: "heading", text: "View or Update a Patient" },
            {
              type: "paragraph",
              text: "Select the view icon on a patient’s row to open the patient profile. The **Info** tab can show contact details, blood group, doctor, billing totals, address, medical history, and allergies. Select **Documents** to view or upload files for that patient.",
            },
            { type: "paragraph", text: "To update details:" },
            {
              type: "steps",
              items: [
                { title: "Select **Edit** in the profile or the edit icon in the list" },
                { title: "Make the changes" },
                { title: "Select **Update Patient**" },
              ],
            },
            {
              type: "image",
              src: IMG.laptop,
              alt: "Patient profile with the Info and Documents tabs",
              caption: "The patient profile",
            },

            { type: "heading", text: "Patient Documents" },
            {
              type: "steps",
              items: [
                { title: "In the patient profile, open **Documents**" },
                { title: "Select **Upload** to attach a file" },
                { title: "Add a title and choose a category" },
              ],
            },
            {
              type: "paragraph",
              text: "Categories include **ID Card**, **Previous Prescription**, **Test Result**, **Insurance Card**, **Discharge Summary**, **Referral Letter**, **Consent Form**, or **Other**.",
            },
            {
              type: "image",
              src: IMG.warehouse,
              alt: "Upload document form with title and category",
              caption: "Uploading a patient document",
            },
            {
              type: "callout",
              kind: "note",
              text: "The page accepts PDF, JPG, JPEG, PNG, and WEBP files up to 10 MB. You can open or delete an uploaded document from the list.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Upload files only to the correct patient record and protect them as private information.",
            },

            { type: "heading", text: "Patient Portal Link" },
            {
              type: "paragraph",
              text: "Select the link icon on the patient’s row to generate a private portal link. The patient can use it to view bills, prescriptions, lab tests, and appointments without signing in.",
            },
            {
              type: "image",
              src: IMG.phone,
              alt: "Patient portal link with copy, share, open, and revoke options",
              caption: "The patient portal link",
            },
            {
              type: "paragraph",
              text: "You can copy or share the link, open it, or revoke access. If you revoke access, the existing link stops working.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Share the link only with the intended patient.",
            },

            { type: "heading", text: "Delete a Patient" },
            {
              type: "paragraph",
              text: "Delete is available only to accounts with the required permission.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "The confirmation says the patient record will be removed permanently. Check carefully before confirming; use **Edit** to correct information rather than deleting the record.",
            },

            { type: "heading", text: "Keep Patient Records Accurate and Private" },
            {
              type: "list",
              items: [
                "Confirm you have the correct patient before viewing, editing, uploading, or sharing information.",
                "Check spelling and contact details so staff can find the right record.",
                "Record allergies and medical history carefully.",
                "Do not share patient portal links or documents with unintended recipients.",
              ],
            },
          ],
        }
      ),
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
      page(
        "ai-medicine-assistant",
        "AI Medicine Assistant",
        "The AI Medicine Assistant lets you ask general questions about medicines and view inventory reorder suggestions.",
        {
          image: IMG.pills,
          blocks: [
            {
              type: "callout",
              kind: "warning",
              text: "Use it as a support tool: AI answers can be incomplete or incorrect, so a qualified pharmacist or clinician should verify medicine information before acting on it.",
            },

            { type: "heading", text: "How to Find This Page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Select **AI Assistant** from the left-hand menu" },
              ],
            },
            {
              type: "paragraph",
              text: "From here you can ask a medicine question, choose an available AI model, or open **Smart Reorder** suggestions.",
            },
            {
              type: "image",
              src: IMG.laptop,
              alt: "AI Assistant option in the left-hand menu",
              caption: "AI Assistant in the left-hand menu",
            },

            { type: "heading", text: "Ask a Medicine Question" },
            {
              type: "steps",
              items: [
                { title: "Choose a question under **Quick Questions**, or type your own in the box at the bottom" },
                {
                  title: "Select the send arrow",
                  detail: "You can also press **Enter** to send; use **Shift + Enter** to start a new line.",
                },
                { title: "Wait for the answer to appear in the conversation" },
              ],
            },
            {
              type: "image",
              src: IMG.ai,
              alt: "Quick Questions and the message box in the AI Assistant",
              caption: "Quick Questions and the message box",
            },
            {
              type: "paragraph",
              text: "**Quick Questions** are examples. You can ask about medicine uses, side effects, interactions, dosage information, or alternatives.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Include the medicine name and strength when relevant so the question is clear.",
            },

            { type: "heading", text: "Choose an AI Model" },
            {
              type: "paragraph",
              text: "Use the model menu in the upper-right corner to select an available AI model. The selected model is used for your questions and **Smart Reorder** suggestions.",
            },
            {
              type: "image",
              src: IMG.robot,
              alt: "AI model menu in the upper-right corner",
              caption: "The AI model menu",
            },
            {
              type: "callout",
              kind: "note",
              text: "Available choices may change.",
            },

            { type: "heading", text: "Smart Reorder" },
            {
              type: "paragraph",
              text: "Select **Smart Reorder** to view suggested medicines to reorder. Suggestions may include a reason, priority, quantity, and estimated cost. They are based on available sales and inventory information.",
            },
            {
              type: "image",
              src: IMG.stock,
              alt: "Smart Reorder suggestions with reason, priority, quantity, and estimated cost",
              caption: "Smart Reorder suggestions",
            },
            {
              type: "callout",
              kind: "note",
              text: "Review each suggestion against your current stock and purchasing needs before placing an order. A suggestion is not a purchase order.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If **Smart Reorder** cannot generate suggestions, the store may not have enough sales history yet.",
            },

            { type: "heading", text: "Other Information on the Screen" },
            {
              type: "paragraph",
              text: "The **Medicine Info**, **Drug Interactions**, **Inventory Insights**, and **Generic Alternatives** panels describe topics the assistant can help with. They are informational panels; use the question box or **Quick Questions** to ask the assistant.",
            },
            {
              type: "image",
              src: IMG.meds,
              alt: "Medicine Info, Drug Interactions, Inventory Insights, and Generic Alternatives panels",
              caption: "The informational panels on the screen",
            },

            { type: "heading", text: "Keep Questions Safe and Clear" },
            {
              type: "list",
              items: [
                "Verify dosage, interaction, and treatment information with a qualified pharmacist or clinician.",
                "Do not use AI as a diagnosis or prescription.",
                "Do not enter patient names, phone numbers, or other identifying information.",
                "For urgent medical situations, follow your organization’s emergency procedure instead of waiting for an AI response.",
              ],
            },
          ],
        }
      ),
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
      page(
        "my-locations",
        "My Locations",
        "The My Locations page helps the account owner manage the organization’s branches, such as separate pharmacy, clinic, or hospital sites.",
        {
          image: IMG.office,
          blocks: [
            {
              type: "paragraph",
              text: "Each location keeps its own inventory, patients, and bills. The subscription covers the locations included in the plan and any paid add-ons.",
            },

            { type: "heading", text: "How to Find This Page" },
            {
              type: "list",
              items: [
                "**From the left menu:** Sign in and select **My Locations**.",
                "**From the location selector:** Click the current location name in the top bar, then choose **Manage locations**.",
              ],
            },
            {
              type: "image",
              src: IMG.map,
              alt: "Location selector in the top bar with Manage locations option",
              caption: "The location selector in the top bar",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If My Locations is missing, ask the account owner or administrator to check your access.",
            },

            { type: "heading", text: "What You See" },
            {
              type: "list",
              items: [
                "**Plan coverage summary:** Shows how many locations are active and how many your plan covers. It may also show paid add-ons and deactivated locations.",
                "**Location cards:** Each card shows the location name, its code and contact details if provided, its status, and counts for medicines, patients, and bills.",
                "**Primary:** Marks the main location for the account. The primary location cannot be deactivated.",
                "**Active:** The location is available for work and can appear in the top location selector.",
                "**Viewing:** Marks the location currently selected in your account.",
              ],
            },
            {
              type: "image",
              src: IMG.hospital,
              alt: "My Locations page with plan coverage summary and location cards",
              caption: "Plan coverage summary and location cards",
            },
            {
              type: "callout",
              kind: "note",
              text: "The figures on the page can change as records are added or locations are activated or deactivated.",
            },

            { type: "heading", text: "Add a Location" },
            {
              type: "steps",
              items: [
                { title: "Select **Add Location**" },
                { title: "Enter a **Location Name**", detail: "This is required." },
                {
                  title: "Add the code, address, phone number, and city if available",
                  detail: "These fields are optional on the form.",
                },
                {
                  title: "Check that the name and code are correct",
                  detail: "Make sure they are not already used by another location in your account.",
                },
                { title: "Review the price summary, then continue" },
              ],
            },
            {
              type: "list",
              items: [
                "If your plan covers the new location, select **Add Location** to create it.",
                "If an additional charge applies, select **Continue to payment** and review the quote on the **Subscription & Billing** page.",
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Add Location form with name, code, address, phone, and city fields",
              caption: "The Add Location form",
            },
            {
              type: "callout",
              kind: "tip",
              text: "A clear name and unique code make it easier for staff to select the right branch. For example, you could use a branch name such as “Main Branch - Gulberg” and a short code such as “GLB-01”.",
            },

            { type: "heading", text: "Payment for an Additional Location" },
            {
              type: "paragraph",
              text: "The page calculates the price using your plan and the number of locations you want. Review the displayed total before paying; the amount shown in your account is the one to follow.",
            },
            { type: "paragraph", text: "If payment is required:" },
            {
              type: "steps",
              items: [
                {
                  title: "Continue to **Subscription & Billing**",
                  detail: "Review the plan, location count, and total due.",
                },
                { title: "Choose the payment method shown", detail: "Send the displayed amount." },
                {
                  title: "Add your store email as the payment reference",
                  detail: "Use it as the reference or description, as instructed in the payment window.",
                },
                { title: "Enter the transaction ID or reference number" },
                {
                  title: "Upload a screenshot of the payment receipt",
                  detail: "The form accepts PNG or JPG images up to 5 MB.",
                },
                { title: "Select **Submit Payment Request**" },
              ],
            },
            {
              type: "image",
              src: IMG.payment,
              alt: "Payment request form with transaction ID and receipt upload",
              caption: "The payment request form",
            },
            {
              type: "callout",
              kind: "note",
              text: "The request will show as pending while it is reviewed. The page indicates activation within 24 hours. After the location allowance is activated, return to **My Locations** to add the branch.",
            },

            { type: "heading", text: "Switch Between Locations" },
            {
              type: "paragraph",
              text: "Use the location selector in the top bar to choose an active branch.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Check the location name before adding or changing records.",
            },
            {
              type: "paragraph",
              text: "Switching locations reloads the app so that the pages show information for the selected branch.",
            },

            { type: "heading", text: "Update Location Details" },
            {
              type: "paragraph",
              text: "The page shown does not have an Edit button. It lets you add a location or deactivate and reactivate one.",
            },
            {
              type: "callout",
              kind: "note",
              text: "If a location’s name, code, address, phone, or city needs to be corrected, contact the account owner or support for help.",
            },

            { type: "heading", text: "Deactivate or Reactivate a Location" },
            {
              type: "paragraph",
              text: "To deactivate a non-primary location, select **Deactivate** on its card and confirm. The location becomes read-only and is removed from the location selector. Its records are kept; deactivation does not delete its data.",
            },
            {
              type: "paragraph",
              text: "To use it again, select **Reactivate**. The account needs an available location slot. If the plan no longer covers another active location, you may need to arrange the required plan or add-on first.",
            },

            { type: "heading", text: "Assign Staff to a Location" },
            {
              type: "paragraph",
              text: "Staff assignment is managed from **Staff Management**, not from the location card:",
            },
            {
              type: "steps",
              items: [
                { title: "Open **Staff Management** from the left menu" },
                { title: "Add a staff member or edit an existing one" },
                {
                  title: "Under **Assigned Locations**, select the branches where that person should work",
                },
                { title: "Save or create the staff account" },
              ],
            },
            {
              type: "image",
              src: IMG.staff,
              alt: "Staff form with the Assigned Locations field",
              caption: "Assigned Locations in the staff form",
            },
            {
              type: "callout",
              kind: "note",
              text: "Assign only the locations the staff member needs. Staff accounts are limited to their assigned locations. If no location is selected in the form, the staff member is assigned to the primary location.",
            },

            { type: "heading", text: "Before You Add or Change a Location" },
            {
              type: "list",
              items: [
                "Confirm you are using the correct account.",
                "Use a clear branch name and a code that is not already in use.",
                "Check the payment quote before sending money.",
                "Confirm the selected branch in the top bar before entering patient, stock, or billing records.",
                "Contact the account owner if you cannot see a location or need to correct its details.",
              ],
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