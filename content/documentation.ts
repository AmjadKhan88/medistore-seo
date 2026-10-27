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
  hospital: u("photo-1793110853158-03bbff4179b4"),
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

  cashier: u("photo-1556742502-ec7c0e9f34b1"),
  receipt: u("photo-1554224155-8d04cb21cd6c"),
  email: u("photo-1596526131083-e8c633c948d2"),

  rx: u("photo-1584982751601-97dcc096659c"),
  printer: u("photo-1586953208448-b95a79798f07"),

  calendar: u("photo-1506784983877-45594efa4cbe"),
  vitals: u("photo-1584515933487-779824d29309"),
  visit: u("photo-1559757148-5c350d0d3c56"),

  sample: u("photo-1582719471384-894fbb16e074"),
  report: u("photo-1576671081837-49000212a370"),

  ward: u("photo-1586773860418-d37222d8fce3"),
  bed: u("photo-1538108149393-fbbd81895907"),
  nurse: u("photo-1584432810601-6c7f27d2362b"),

  mar: u("photo-1631815589968-fdb09a223b1e"),
  discharge: u("photo-1516549655169-df83a0774514"),

  waiting: u("photo-1519494140681-8b17d830a050"),
  screen: u("photo-1593359677879-a4bb92f829d1"),
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
      page(
        "billing-invoices",
        "Billing & Invoices",
        "The Billing & Invoices page lets you create invoices, review bills, record payments, and download or email invoice copies.",
        {
          image: IMG.cashier,
          blocks: [
            {
              type: "callout",
              kind: "note",
              text: "Bills belong to the location selected in the top bar, so check the branch before starting.",
            },

            { type: "heading", text: "How to Find This Page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Choose **Billing & Invoices** from the left-hand menu" },
                { title: "To start a bill, select **Create Invoice**" },
              ],
            },
            {
              type: "image",
              src: IMG.invoice,
              alt: "Billing & Invoices option in the left-hand menu",
              caption: "Billing & Invoices in the left-hand menu",
            },
            {
              type: "callout",
              kind: "tip",
              text: "You can also select **New Invoice** on the Dashboard.",
            },

            { type: "heading", text: "Find an Invoice" },
            {
              type: "paragraph",
              text: "Search by invoice number or patient name. Use the status buttons to filter the list:",
            },
            {
              type: "list",
              items: [
                "**All:** Invoices matching your search.",
                "**Paid:** The full invoice amount has been recorded as paid.",
                "**Partial:** Some payment has been recorded, and a balance remains.",
                "**Pending:** No payment has been recorded.",
              ],
            },
            {
              type: "image",
              src: IMG.finance,
              alt: "Invoice list with search box and status buttons",
              caption: "The invoice list with search and status buttons",
            },
            {
              type: "paragraph",
              text: "The list shows up to 15 invoices per page.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the page says **No invoices found**, create the first invoice or check your search, status filter, and selected location.",
            },

            { type: "heading", text: "Create an Invoice" },
            {
              type: "steps",
              items: [
                { title: "Select **Create Invoice**" },
                {
                  title: "Under **Select Patient**, search by the patient’s name or ID, then select the correct patient",
                  detail: "If the patient is not registered, add them from the **Patients** page first.",
                },
                {
                  title: "Under **Add Medicines**, search for a medicine and select it",
                  detail: "You can also scan its barcode.",
                },
                {
                  title: "Check each item’s name, price, and quantity",
                  detail: "The quantity cannot exceed the available stock. Remove an item from the invoice if it was selected by mistake.",
                },
                { title: "Review any medicine interaction warnings shown by the checker" },
                { title: "Check the invoice summary, enter payment details, and select **Create Invoice**" },
              ],
            },
            {
              type: "image",
              src: IMG.barcode,
              alt: "Create Invoice form with patient selection and medicine search",
              caption: "Selecting a patient and adding medicines",
            },
            {
              type: "callout",
              kind: "note",
              text: "When an invoice is created, the listed medicine quantities are deducted from the selected location’s stock.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "If a medicine is out of stock, the app may show linked alternatives. A qualified pharmacist or clinician should confirm whether an alternative is appropriate.",
            },

            { type: "heading", text: "Check the Invoice Total" },
            { type: "paragraph", text: "The summary shows:" },
            {
              type: "list",
              items: [
                "**Subtotal:** Total price of the selected medicines before adjustments.",
                "**Discount:** Amount subtracted from the subtotal.",
                "**Tax / Extra:** Amount added to the subtotal after the discount.",
                "**Total:** Subtotal minus discount, plus tax or extra charges.",
                "**Amount Paid:** Payment received when the invoice is created.",
                "**Remaining Balance:** Total still owed.",
                "**Payment Method:** The method recorded for the payment, such as **Cash**, **Card**, **Online**, or **Pending**.",
                "**Notes:** Optional information saved with the invoice.",
              ],
            },
            {
              type: "image",
              src: IMG.receipt,
              alt: "Invoice summary with subtotal, discount, tax, total, and balance",
              caption: "The invoice summary",
            },
            {
              type: "callout",
              kind: "note",
              text: "Example: if items total PKR 1,500, the discount is PKR 100, and tax is PKR 0, the invoice total is PKR 1,400. If PKR 500 is paid, the remaining balance is PKR 900.",
            },

            { type: "heading", text: "Understand Payment Status" },
            { type: "paragraph", text: "The status is based on the amount paid:" },
            {
              type: "list",
              items: [
                "**Pending:** No payment has been recorded.",
                "**Partial:** A payment has been recorded, but the full total is still due.",
                "**Paid:** The full invoice amount has been recorded as paid.",
              ],
            },
            {
              type: "callout",
              kind: "tip",
              text: "The payment method and payment status are separate details. For example, **Cash** describes how the payment was made; **Partial** describes whether the bill is fully paid.",
            },

            { type: "heading", text: "Review an Invoice" },
            {
              type: "paragraph",
              text: "The list can show the invoice number, patient, date, total, amount paid, remaining balance, payment method, and status.",
            },
            {
              type: "paragraph",
              text: "Select the view icon to open the invoice details. Check the patient, items, quantities, prices, discount, tax, total, amount paid, remaining balance, and any notes.",
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Invoice details page",
              caption: "Invoice details",
            },

            { type: "heading", text: "Record Another Payment" },
            { type: "paragraph", text: "For an invoice that is not fully paid:" },
            {
              type: "steps",
              items: [
                { title: "Select its **Record Payment** action" },
                {
                  title: "Enter the amount received",
                  detail: "It must be greater than zero and cannot exceed the remaining balance.",
                },
                { title: "Choose **Cash**, **Card**, or **Online**" },
                { title: "Select **Record Payment**" },
              ],
            },
            {
              type: "image",
              src: IMG.payment,
              alt: "Record Payment form with amount and payment method",
              caption: "Recording a payment",
            },
            {
              type: "paragraph",
              text: "The invoice status and patient balance update after the payment is saved.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Confirm the patient and invoice before recording money.",
            },

            { type: "heading", text: "Download or Email an Invoice" },
            {
              type: "list",
              items: [
                "Select the **PDF** action in the invoice list or **Download PDF** in the invoice details to save a copy.",
                "In the invoice details, select **Email to Patient** to send a copy to the patient’s email address.",
                "When an invoice is first created, the app also attempts to email it if the patient has an email address.",
              ],
            },
            {
              type: "image",
              src: IMG.email,
              alt: "Download PDF and Email to Patient buttons in the invoice details",
              caption: "Download PDF and Email to Patient",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If no email is saved on the patient record, add or correct it from the **Patients** page first.",
            },

            { type: "heading", text: "Delete an Invoice" },
            {
              type: "paragraph",
              text: "Deleting a bill requires the correct account permission. The app asks for confirmation and restores the bill’s medicine quantities to stock.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Delete only if you are sure the invoice should be removed; check the patient, bill number, and items before confirming.",
            },

            { type: "heading", text: "Useful Checks" },
            {
              type: "list",
              items: [
                "Confirm the selected location and patient before creating an invoice.",
                "Check medicine quantities against the items being supplied.",
                "Review discounts, tax, amount paid, and remaining balance before saving.",
                "Verify the payment was actually received before recording it.",
                "Treat invoice PDFs and patient billing details as private information.",
              ],
            },
          ],
        }
      ),
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
      page(
        "appointments",
        "Appointments",
        "The Appointments page helps your team schedule patient visits, review the schedule, and record what happened during a visit.",
        {
          image: IMG.calendar,
          blocks: [
            {
              type: "callout",
              kind: "note",
              text: "Appointment information belongs to the location selected in the top bar, so confirm the correct branch first.",
            },

            { type: "heading", text: "How to Find This Page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Select **Appointments** from the left-hand menu" },
              ],
            },
            {
              type: "image",
              src: IMG.doctor,
              alt: "Appointments option in the left-hand menu",
              caption: "Appointments in the left-hand menu",
            },

            { type: "heading", text: "Summary Cards" },
            { type: "paragraph", text: "The cards at the top show:" },
            {
              type: "list",
              items: [
                "**Today’s Appointments:** Appointments scheduled for today.",
                "**Completed Today:** Today’s appointments marked completed.",
                "**This Week:** The appointment count shown for the week.",
                "**Unique Patients:** The number of different patients who have appointments at this location.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Appointment summary cards",
              caption: "Summary cards at the top of the page",
            },

            { type: "heading", text: "List and Calendar Views" },
            {
              type: "paragraph",
              text: "Use **List** to search and filter appointments in a table. Search by patient or doctor, choose a date, or filter by status:",
            },
            {
              type: "list",
              items: ["**Scheduled**", "**Completed**", "**Cancelled**", "**No-Show**"],
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Appointment list with search, date, and status filters",
              caption: "List view with filters",
            },
            {
              type: "paragraph",
              text: "Use **Calendar** to see appointments by date. The arrows change the displayed month. Select a day with appointments to see its scheduled visits, then select a visit to open its details.",
            },
            {
              type: "image",
              src: IMG.visit ?? IMG.calendar,
              alt: "Calendar view with a day selected",
              caption: "Calendar view",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the page says **No appointments found**, schedule a visit or check the selected location, search, date, and status filters.",
            },

            { type: "heading", text: "Schedule an Appointment" },
            {
              type: "steps",
              items: [
                { title: "Select **Schedule**" },
                {
                  title: "Search for and select the patient",
                  detail: "If the patient is not registered, add them from **Patients** first.",
                },
                { title: "Choose the appointment date and time" },
                {
                  title: "Enter the doctor’s name",
                  detail: "Check the name, even if it is filled in for you.",
                },
                {
                  title: "Choose an appointment type",
                  detail: "Checkup, Follow-up, Emergency, Consultation, Procedure, Lab Test, or Other.",
                },
                { title: "Add a reason or other useful information in **Notes**" },
                { title: "Select **Schedule Appointment**" },
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Schedule Appointment form",
              caption: "The Schedule Appointment form",
            },
            {
              type: "callout",
              kind: "note",
              text: "The available time choices are in 30-minute steps.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Confirm the selected time with your clinic’s schedule; do not assume the app checks for overlapping appointments.",
            },

            { type: "heading", text: "View, Edit, or Cancel" },
            {
              type: "paragraph",
              text: "Select the view icon in List view, or select an appointment from the Calendar view, to see its details. A scheduled appointment can be edited, recorded as a visit, or cancelled.",
            },
            { type: "paragraph", text: "To change a scheduled visit:" },
            {
              type: "steps",
              items: [
                { title: "Select **Edit**" },
                { title: "Update the date, time, doctor, type, or notes" },
                { title: "Save" },
              ],
            },
            { type: "paragraph", text: "To cancel a scheduled visit:" },
            {
              type: "steps",
              items: [
                { title: "Select **Cancel**" },
                { title: "Confirm" },
              ],
            },
            {
              type: "callout",
              kind: "note",
              text: "Cancellation changes the status; it does not delete the appointment.",
            },

            { type: "heading", text: "Record a Completed Visit" },
            {
              type: "steps",
              items: [
                { title: "For a scheduled appointment, select **Record Visit**" },
                { title: "Enter the visit details", detail: "See the list below." },
                {
                  title: "Select **Complete Visit**",
                  detail: "This saves the visit and marks the appointment **Completed**.",
                },
              ],
            },
            { type: "paragraph", text: "You can enter:" },
            {
              type: "list",
              items: [
                "Visit notes and diagnosis",
                "Vital signs, such as blood pressure, pulse, temperature, weight, and blood sugar",
                "A follow-up date",
                "Medicines given, with dosage and quantity",
              ],
            },
            {
              type: "image",
              src: IMG.vitals,
              alt: "Record Visit form with notes, vital signs, and medicines given",
              caption: "The Record Visit form",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Use the correct patient record, and enter measurements in the units requested on the form.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "The medicines section records what was given during the visit. It does not create a prescription or invoice, or deduct stock through this form. Use the appropriate prescription or billing workflow if those records are needed.",
            },

            { type: "heading", text: "Understand the Statuses" },
            {
              type: "list",
              items: [
                "**Scheduled:** The visit is planned.",
                "**Completed:** The visit has been recorded.",
                "**Cancelled:** The appointment was cancelled.",
                "**No-Show:** The patient did not attend, according to the recorded status.",
              ],
            },
            {
              type: "callout",
              kind: "note",
              text: "The page includes a **No-Show** filter, but it does not currently show an action to mark an appointment as No-Show. Follow your clinic’s process for recording missed visits.",
            },

            { type: "heading", text: "Keep Appointment Records Clear" },
            {
              type: "list",
              items: [
                "Confirm the patient, branch, doctor, date, and time before saving.",
                "Add notes that help staff prepare for the visit.",
                "Record visit details under the correct appointment.",
                "Treat patient names, contact details, and clinical notes as private information.",
              ],
            },
          ],
        }
      ),
      page(
        "opd-queue",
        "OPD Queue",
        "Use OPD Queue to issue visit tokens, call patients in order, track consultation progress, and view queue statistics.",
        {
          image: IMG.waiting,
          blocks: [
            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Select **OPD Queue** from the left-hand menu" },
              ],
            },
            {
              type: "image",
              src: IMG.doctor,
              alt: "OPD Queue option in the left-hand menu",
              caption: "OPD Queue in the left-hand menu",
            },
            {
              type: "callout",
              kind: "note",
              text: "OPD means Outpatient Department: patients who come for a visit and do not stay in a hospital bed.",
            },

            { type: "heading", text: "What this page is for" },
            {
              type: "paragraph",
              text: "Use OPD Queue to issue visit tokens, call patients in order, track consultation progress, and view queue statistics. A token is a number used to identify a patient’s place in the queue.",
            },
            {
              type: "paragraph",
              text: "The page works with registered patient records, but you can also create a queue token for a walk-in patient without linking a record.",
            },

            { type: "heading", text: "Understand the page overview" },
            {
              type: "list",
              items: [
                "**Queue Open / Queue Closed:** Shows whether staff can register new tokens. Registration is disabled while the queue is closed.",
                "**Waiting:** Tokens waiting to be called.",
                "**In Consultation:** Patients whose consultation has started.",
                "**Done:** Consultations marked complete.",
                "**Avg Wait:** Average waiting time for completed consultations.",
                "**Avg Consult:** Average consultation length for completed consultations.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "OPD Queue overview with Waiting, In Consultation, Done, and average times",
              caption: "The OPD Queue overview",
            },
            {
              type: "paragraph",
              text: "**Display Screen** opens a separate queue board for patients. **Refresh** reloads the current queue.",
            },

            { type: "heading", text: "Register a patient" },
            {
              type: "steps",
              items: [
                {
                  title: "Make sure the queue is open, then select **Register Token** or **Register First Patient**",
                },
                {
                  title: "Optionally search for an existing patient",
                  detail: "Selecting one fills in their name and phone number.",
                },
                {
                  title: "If the patient is not registered, enter their name as a walk-in",
                  detail: "The patient name is required.",
                },
                { title: "Add a phone number if useful" },
                {
                  title: "Optionally enter the doctor and choose a department",
                  detail: "For example, General OPD, Cardiology, or Pediatrics.",
                },
                {
                  title: "Choose a priority: **Normal**, **Urgent**, or **VIP**",
                  detail: "Use priority according to your clinic’s policy.",
                },
                { title: "Optionally add a short note, then select **Issue Token**" },
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Register Token form with patient, doctor, department, and priority",
              caption: "The Register Token form",
            },
            {
              type: "callout",
              kind: "note",
              text: "The system issues a token such as **A-001** and adds the patient to the waiting list. The token is for today’s queue at the selected location.",
            },

            { type: "heading", text: "Call and serve patients" },
            {
              type: "paragraph",
              text: "Use **Call Next** to call the next person in line. The system calls by priority (Urgent, then VIP, then Normal) and uses registration order within each priority. You can also use **Call** on an individual waiting patient’s card.",
            },
            {
              type: "image",
              src: IMG.reception,
              alt: "Call Next button and waiting patient cards",
              caption: "Calling the next patient",
            },
            { type: "paragraph", text: "After a token is called:" },
            {
              type: "steps",
              items: [
                { title: "Select **Start** when the consultation begins" },
                { title: "Select **Done** when it is finished" },
              ],
            },
            {
              type: "callout",
              kind: "tip",
              text: "These steps update the consultation status and timing. Use the list buttons to keep each patient’s status accurate.",
            },

            { type: "heading", text: "Manage exceptions" },
            {
              type: "list",
              items: [
                "**Skip:** Use when a waiting or called patient cannot be seen at that moment.",
                "**No-Show:** Use when the patient did not attend after being called.",
                "**Re-Queue:** Returns a skipped or no-show token to the waiting list.",
              ],
            },
            {
              type: "callout",
              kind: "tip",
              text: "Check the patient and token before changing a status.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "The red trash button resets today’s queue and clears its tokens. Use it only when you intentionally want to remove the day’s queue records.",
            },

            { type: "heading", text: "Queue filters and Statistics tab" },
            {
              type: "paragraph",
              text: "On the **Queue** tab, choose **All** or a status filter to narrow the token list. The **Statistics** tab includes a seven-day patient trend, today’s peak hours, a summary of today’s queue, and a priority breakdown.",
            },
            {
              type: "image",
              src: IMG.charts,
              alt: "Statistics tab with a seven-day trend and peak hours",
              caption: "The Statistics tab",
            },
            {
              type: "callout",
              kind: "note",
              text: "Use the averages as operational summaries. They reflect queue timing recorded by staff and may not include unfinished visits.",
            },

            { type: "heading", text: "Display Screen" },
            {
              type: "paragraph",
              text: "Select **Display Screen** to open a separate board suitable for a waiting-room monitor. It shows the current token and waiting information. When a token is called, the board updates and may announce it aloud.",
            },
            {
              type: "image",
              src: IMG.screen,
              alt: "Display Screen showing the current token on a waiting-room monitor",
              caption: "The Display Screen on a waiting-room monitor",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Keep the display device’s sound at a suitable level.",
            },

            { type: "heading", text: "Helpful terms" },
            {
              type: "list",
              items: [
                "**Token:** A queue number assigned to a visit.",
                "**Priority:** The queue category used to decide who is called first.",
                "**FIFO:** “First in, first out.” Earlier registrations are served first within the same priority.",
                "**Walk-in:** A patient visiting without a pre-booked appointment.",
                "**Consultation:** The patient’s visit with the doctor or clinician.",
              ],
            },
          ],
        }
      ),
      page(
        "prescriptions",
        "Prescriptions",
        "The Prescriptions page lets authorized staff create digital prescriptions, find previous ones, view or print them, and convert an active prescription into an invoice.",
        {
          image: IMG.rx,
          blocks: [
            { type: "heading", text: "How to Find This Page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Select **Prescriptions** from the left-hand menu" },
              ],
            },
            {
              type: "image",
              src: IMG.doctor,
              alt: "Prescriptions option in the left-hand menu",
              caption: "Prescriptions in the left-hand menu",
            },
            {
              type: "callout",
              kind: "note",
              text: "Check the location shown in the top bar so you work with the correct branch.",
            },

            { type: "heading", text: "Prescription Summary Cards" },
            { type: "paragraph", text: "The cards at the top show:" },
            {
              type: "list",
              items: [
                "**Total:** All prescriptions for the selected location.",
                "**Active:** Prescriptions that are still active.",
                "**Dispensed:** Prescriptions converted into invoices in EliteHMS.",
                "**Expiring (7d):** Active prescriptions that expire within the next seven days.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Prescription summary cards",
              caption: "Summary cards at the top of the page",
            },

            { type: "heading", text: "Search and Status Filters" },
            {
              type: "paragraph",
              text: "Search by prescription number, patient, doctor, or diagnosis. Use the status buttons to filter the list:",
            },
            {
              type: "list",
              items: ["**All**", "**Active**", "**Dispensed**", "**Expired**", "**Cancelled**"],
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Prescription list with search box and status buttons",
              caption: "The prescription list with search and status buttons",
            },
            {
              type: "paragraph",
              text: "The list shows up to 15 prescriptions per page.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the page says **No prescriptions found**, create the first prescription or check the search, filter, and selected location.",
            },

            { type: "heading", text: "Write a Prescription" },
            {
              type: "steps",
              items: [
                { title: "Select **Write Prescription**" },
                {
                  title: "Search for and select the correct patient",
                  detail: "If the patient is not registered, add them from **Patients** first.",
                },
                {
                  title: "Enter the **Doctor Name**",
                  detail: "The field may already contain a name; verify it.",
                },
                { title: "Add a diagnosis or complaint if needed" },
                { title: "Choose how many days the prescription is valid for" },
                { title: "Add each prescribed medicine and complete its instructions" },
                { title: "Review the summary, then select **Create Prescription**" },
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Write Prescription form with patient, doctor, diagnosis, and validity",
              caption: "The Write Prescription form",
            },
            {
              type: "callout",
              kind: "note",
              text: "The app assigns a prescription number and calculates the **Valid Until** date from the validity period you selected.",
            },

            { type: "heading", text: "Add Prescribed Medicines" },
            {
              type: "paragraph",
              text: "You can search for an item in inventory using **Quick-add from inventory**, or enter a medicine name in a prescription row. Use **Add Row** to add more medicines.",
            },
            { type: "paragraph", text: "For each medicine, review:" },
            {
              type: "list",
              items: [
                "**Medicine Name**",
                "**Dosage:** Amount taken at one time.",
                "**Frequency:** How often it is taken.",
                "**Duration:** How long it is taken.",
                "**Total Qty to Dispense:** Total units for the prescription.",
                "**Route:** How it is taken or applied, such as oral, topical, injection, inhaled, or drops.",
                "**Instructions:** Extra directions, if any.",
              ],
            },
            {
              type: "image",
              src: IMG.meds,
              alt: "Prescribed medicine rows with dosage, frequency, duration, and quantity",
              caption: "Prescribed medicine rows",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Use the instructions from the authorized prescriber. Check the patient, medicine, dosage, frequency, duration, and quantity carefully before saving or printing.",
            },

            { type: "heading", text: "View or Print a Prescription" },
            {
              type: "paragraph",
              text: "Select the view icon to open a prescription. The details can include the patient, doctor, diagnosis, validity date, medicines, instructions, and notes.",
            },
            {
              type: "paragraph",
              text: "Select **Print PDF** to create a printable copy. The list also has a **PDF** action for each prescription.",
            },
            {
              type: "image",
              src: IMG.printer,
              alt: "Prescription details with the Print PDF button",
              caption: "Viewing and printing a prescription",
            },

            { type: "heading", text: "Convert to Invoice" },
            {
              type: "paragraph",
              text: "For an **Active** prescription, select **Convert to Invoice** if you need to create a bill from it. The app asks you to confirm because conversion deducts stock.",
            },
            {
              type: "image",
              src: IMG.invoice,
              alt: "Convert to Invoice confirmation",
              caption: "Convert to Invoice confirmation",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Only medicines linked to inventory records with enough stock can be added to the invoice. Medicines entered as free text, or linked items without sufficient stock, may be skipped. Review the resulting invoice and linked medicines carefully.",
            },
            {
              type: "paragraph",
              text: "After a successful conversion, the prescription is marked **Dispensed** and its linked invoice number appears in the list or prescription details.",
            },
            {
              type: "callout",
              kind: "note",
              text: "The generated invoice is initially unpaid. Record payment separately from **Billing & Invoices**.",
            },

            { type: "heading", text: "Cancel a Prescription" },
            {
              type: "paragraph",
              text: "For an **Active** prescription, select **Cancel** and confirm. Cancelled prescriptions cannot be converted through the normal action on this page.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "If you find an error, the current page does not show an edit action; follow your organization’s correction process before cancelling and creating a replacement.",
            },

            { type: "heading", text: "Keep Records Accurate" },
            {
              type: "list",
              items: [
                "Confirm the selected location and patient before creating a prescription.",
                "Verify the prescriber’s name and all medicine instructions.",
                "Check the validity date before printing or using the prescription.",
                "Treat prescription PDFs and patient details as private records.",
              ],
            },
          ],
        }
      ),
      page(
        "lab-tests",
        "Lab Tests",
        "The Lab Tests page records lab test orders, tracks their status, stores results, and attaches a result file.",
        {
          image: IMG.lab,
          blocks: [
            {
              type: "callout",
              kind: "note",
              text: "Records belong to the location selected in the top bar, so check the branch before ordering or updating a test.",
            },

            { type: "heading", text: "How to Find This Page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Select **Lab Tests** from the left-hand menu" },
              ],
            },
            {
              type: "image",
              src: IMG.doctor,
              alt: "Lab Tests option in the left-hand menu",
              caption: "Lab Tests in the left-hand menu",
            },

            { type: "heading", text: "Summary Cards" },
            {
              type: "list",
              items: [
                "**Total Tests:** All lab test records for the selected location.",
                "**Pending:** Tests with status **Ordered**, **Sample Collected**, or **In Progress**.",
                "**Completed:** Tests marked completed.",
                "**Critical:** Tests whose overall result interpretation is marked **Critical**.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Lab test summary cards",
              caption: "Summary cards at the top of the page",
            },

            { type: "heading", text: "Search and Filters" },
            {
              type: "paragraph",
              text: "Search by test name, patient, doctor, or laboratory. Use the category menu to narrow results, or filter by status:",
            },
            {
              type: "list",
              items: [
                "**All**",
                "**Ordered**",
                "**Sample Collected**",
                "**In Progress**",
                "**Completed**",
                "**Cancelled**",
              ],
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Lab test list with search box, category menu, and status buttons",
              caption: "The lab test list with search and filters",
            },
            {
              type: "paragraph",
              text: "The list shows up to 20 tests per page.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the page says **No lab tests found**, order the first test or check the selected location, search text, category, and status.",
            },

            { type: "heading", text: "Order a Lab Test" },
            {
              type: "steps",
              items: [
                { title: "Select **Order Lab Test**" },
                {
                  title: "Search for and select the patient",
                  detail: "If the patient is not registered, add them from **Patients** first.",
                },
                {
                  title: "Choose a category",
                  detail: "Blood Test, Urine Test, Imaging, Microbiology, Pathology, Cardiac, or Other.",
                },
                {
                  title: "Enter a test name",
                  detail: "The form suggests common tests for the selected category, or you can type another name.",
                },
                { title: "Add the ordering doctor, laboratory name, and order date if available" },
                {
                  title: "Add notes such as preparation instructions, then select **Order Lab Test**",
                },
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Order Lab Test form with patient, category, and test name",
              caption: "The Order Lab Test form",
            },
            {
              type: "callout",
              kind: "note",
              text: "The patient and test name are required. This page records the order in EliteHMS; coordinate sample collection and lab processing through your normal workflow.",
            },

            { type: "heading", text: "Enter or Edit Results" },
            {
              type: "steps",
              items: [
                {
                  title: "Select the result action on a test row, or open the test and select **Enter Results**",
                },
                { title: "Choose the result date and overall interpretation" },
                { title: "Select a result-entry mode", detail: "See the two modes below." },
                { title: "Enter the values" },
                {
                  title: "Select **Save Results**",
                  detail: "The form saves the test as **Completed**. Results for completed tests can be edited later.",
                },
              ],
            },
            { type: "paragraph", text: "The two result-entry modes are:" },
            {
              type: "list",
              items: [
                "**Single Result:** Enter one value, its unit, the lab’s normal range, interpretation, and notes.",
                "**Panel / Multiple Parameters:** Enter several values, each with a parameter name, unit, normal range, and flag. CBC tests may open with common parameters already listed. You can add or remove rows.",
              ],
            },
            {
              type: "image",
              src: IMG.sample,
              alt: "Enter Results form with a panel of parameters",
              caption: "Entering results for a panel of parameters",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Enter values and units exactly as shown on the laboratory report. Review any pre-filled ranges against the lab’s report; ranges can vary.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "**High**, **Low**, and **Critical** labels are not a diagnosis. A qualified clinician should interpret results.",
            },

            { type: "heading", text: "Upload a Result File" },
            {
              type: "steps",
              items: [
                { title: "Open a test" },
                { title: "Select **Upload File**" },
                { title: "Choose the result file" },
              ],
            },
            {
              type: "image",
              src: IMG.report,
              alt: "Upload File option on the test details page",
              caption: "Uploading a result file",
            },
            {
              type: "paragraph",
              text: "The page accepts PDF, JPG/JPEG, PNG, or WEBP files up to 5 MB. After upload, you can view or download the file from the test details.",
            },
            {
              type: "callout",
              kind: "note",
              text: "Uploading a file also marks the test **Completed**.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the attached file is incorrect, remove it from the test details and upload the correct one. Removing a file does not delete the lab test record.",
            },

            { type: "heading", text: "Understand the Statuses" },
            {
              type: "list",
              items: [
                "**Ordered:** The test has been recorded.",
                "**Sample Collected:** The sample has been collected.",
                "**In Progress:** The test is being processed.",
                "**Completed:** Results or a result file have been recorded.",
                "**Cancelled:** The test order was cancelled.",
              ],
            },
            {
              type: "callout",
              kind: "note",
              text: "The page can display **Sample Collected** and **In Progress** statuses, but the current screen does not show buttons to set those statuses. Use the normal lab workflow to track those steps.",
            },

            { type: "heading", text: "View Test Details" },
            {
              type: "paragraph",
              text: "Select the view icon to see the patient and test information, result values or parameter table, interpretation, notes, attached result file, and any linked prescription or appointment.",
            },
            {
              type: "image",
              src: IMG.lab,
              alt: "Lab test details with result values and attached file",
              caption: "Lab test details",
            },
            {
              type: "paragraph",
              text: "The list can also show the category, patient, doctor, laboratory, order date, result summary, file name, and current status.",
            },

            { type: "heading", text: "Cancel a Test" },
            {
              type: "paragraph",
              text: "A test that is not completed or already cancelled can be cancelled from its row.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Confirm the action carefully.",
            },
            {
              type: "callout",
              kind: "note",
              text: "The page changes its status to **Cancelled**; it does not provide a delete action for the test record.",
            },

            { type: "heading", text: "Keep Lab Records Accurate and Private" },
            {
              type: "list",
              items: [
                "Check the patient, selected location, test name, and laboratory before saving.",
                "Use the correct result date, value, unit, and reference range from the lab report.",
                "Upload the result file to the correct patient and test.",
                "Treat patient details and lab reports as confidential.",
              ],
            },
          ],
        }
      ),
    ],
  },
  {
    title: "Hospital & IPD",
    icon: Building2,
    image: IMG.team,
    pages: [
      page(
        "ipd-management",
        "IPD Management",
        "Use IPD Management to record a patient’s admission, ward and bed, doctor, and admission notes.",
        {
          image: IMG.discharge,
          blocks: [
            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Select **IPD Management** from the left-hand menu" },
              ],
            },
            {
              type: "image",
              src: IMG.hospital,
              alt: "IPD Management option in the left-hand menu",
              caption: "IPD Management in the left-hand menu",
            },
            {
              type: "callout",
              kind: "note",
              text: "IPD means Inpatient Department: the part of a hospital that manages patients staying in the hospital.",
            },

            { type: "heading", text: "What this page is for" },
            {
              type: "paragraph",
              text: "Use IPD Management to record a patient’s admission, ward and bed, doctor, and admission notes. You can also review the admission, record medicine orders and charges, track medicine doses, and discharge the patient.",
            },
            { type: "paragraph", text: "This page works with **Ward & Beds**:" },
            {
              type: "list",
              items: [
                "Set up wards and beds in **Ward & Beds** first.",
                "Register patients in **Patients** first.",
                "Use **IPD Management** to create and follow the patient’s inpatient admission.",
              ],
            },

            { type: "heading", text: "Understand the summary cards" },
            {
              type: "list",
              items: [
                "**Active Admissions:** Patients who are currently admitted.",
                "**Today Admitted:** Admissions recorded today.",
                "**Total Discharged:** Admissions marked as discharged.",
                "**Pending Payments:** Discharged admissions that are not fully paid.",
                "**Total Revenue:** Total charges recorded for discharged admissions.",
                "**Total Collected:** Payments recorded for discharged admissions.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "IPD summary cards",
              caption: "Summary cards at the top of the page",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the cards show zero values, there are no admissions or related billing totals yet for this location.",
            },

            { type: "heading", text: "Create an admission" },
            {
              type: "steps",
              items: [
                {
                  title: "Select **New Admission** or, when the list is empty, **Admit First Patient**",
                },
                {
                  title: "Search for and select the registered **Patient**",
                  detail: "Check the patient name and ID before continuing.",
                },
                {
                  title: "Choose a **Ward**",
                  detail: "The list shows the number of free beds in each ward.",
                },
                {
                  title: "Choose an available **Bed**",
                  detail: "If the ward has no free beds, check **Ward & Beds** for its current status.",
                },
                {
                  title: "Optionally enter the **Attending Doctor**, **Expected Discharge** date, **Admission Diagnosis**, and **Admission Notes**",
                },
                { title: "Review the details and select **Admit Patient**" },
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "New Admission form with patient, ward, bed, and doctor",
              caption: "The New Admission form",
            },
            {
              type: "callout",
              kind: "note",
              text: "The patient, ward, and bed are required. When the admission is created, the system marks that bed as occupied and creates an admission number. It also adds an initial room charge based on the bed type.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Confirm admission and charge details with your facility’s process.",
            },

            { type: "heading", text: "Find and review admissions" },
            {
              type: "paragraph",
              text: "Use the search box to look up admissions by patient name, admission number, or doctor. Choose **Active**, **Discharged**, or **Transferred** to filter the list. If there are many results, use the page controls below the list.",
            },
            {
              type: "paragraph",
              text: "The table shows the admission number, patient, ward and bed, doctor, admission date, days admitted, charges, status, and a **View** button.",
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Admissions list with search box, status filters, and View buttons",
              caption: "The admissions list",
            },
            {
              type: "callout",
              kind: "note",
              text: "An overdue marker may appear if an active admission’s expected discharge date has passed. It is a reminder to review the record, not an automatic discharge.",
            },
            {
              type: "paragraph",
              text: "Select **View** to open the admission details. The detail view has these sections:",
            },
            {
              type: "list",
              items: [
                "**Overview:** Patient and admission information, running charges, payment status, and active medicine orders.",
                "**Orders:** Medicine orders recorded for this admission.",
                "**MAR Sheet:** Scheduled doses and their recorded statuses.",
                "**Charges:** Itemized charges and the current total.",
              ],
            },
            {
              type: "image",
              src: IMG.bed,
              alt: "Admission details with Overview, Orders, MAR Sheet, and Charges sections",
              caption: "Admission details",
            },

            { type: "heading", text: "Record a medicine order and doses" },
            {
              type: "steps",
              items: [
                {
                  title: "From an active admission, select **Add Order**",
                  detail: "You can also open **Orders** and select **Add Medicine Order**.",
                },
                {
                  title: "Search inventory for a medicine or type its name manually",
                },
                { title: "Enter the required **Dosage**" },
                {
                  title: "Select the route and frequency",
                  detail: "You can also add an end date, ordering doctor, and notes.",
                },
              ],
            },
            {
              type: "image",
              src: IMG.meds,
              alt: "Add Medicine Order form with dosage, route, and frequency",
              caption: "The Add Medicine Order form",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Use medicine orders only as directed by an authorized clinician.",
            },
            {
              type: "paragraph",
              text: "The **MAR Sheet** is the Medicine Administration Record. It helps staff record whether a scheduled dose was given, skipped, refused, or held.",
            },
            {
              type: "image",
              src: IMG.mar,
              alt: "MAR Sheet with scheduled doses and their statuses",
              caption: "The MAR Sheet",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Check the patient, medicine, dose, route, and schedule against the authorized order before recording a dose.",
            },
            {
              type: "callout",
              kind: "note",
              text: "Marking a dose **Given** also reduces the linked medicine’s inventory stock by one unit.",
            },

            { type: "heading", text: "Add and review charges" },
            {
              type: "steps",
              items: [
                { title: "Open **Charges** on an active admission" },
                {
                  title: "Choose the charge type",
                  detail: "Medicine, Procedure, Room, Consultation, Lab, or Other.",
                },
                { title: "Enter a description, quantity, and unit price" },
              ],
            },
            {
              type: "paragraph",
              text: "The app calculates the line total and updates the running total.",
            },
            {
              type: "image",
              src: IMG.receipt,
              alt: "Charges section with itemized charges and the running total",
              caption: "Charges on an admission",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Review charge descriptions and amounts before adding them.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Active-admission charges can be removed from this section; verify a charge carefully before deleting it.",
            },

            { type: "heading", text: "Discharge a patient" },
            {
              type: "steps",
              items: [
                { title: "Open the active admission and select **Discharge**" },
                { title: "Enter the discharge diagnosis, notes, and instructions as appropriate" },
                { title: "Review the **Final Bill Summary** and total charges" },
                { title: "Enter any discount and the amount paid" },
                {
                  title: "Review the displayed net payable and balance, then select **Discharge & Generate Bill**",
                },
              ],
            },
            {
              type: "image",
              src: IMG.finance,
              alt: "Discharge form with the Final Bill Summary",
              caption: "The discharge form and Final Bill Summary",
            },
            {
              type: "callout",
              kind: "note",
              text: "Discharging ends the active admission, stops its active medicine orders, creates a final bill, and changes the bed to **Cleaning**. Staff should clean and check the bed before marking it available in **Ward & Beds**.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "The discharge form records a payment amount and generates the final bill. The admission detail screen does not show a separate **Record Payment** button, so use the available billing workflow or ask your administrator how to record later payments against the bill.",
            },

            { type: "heading", text: "Understand the statuses and payment labels" },
            {
              type: "list",
              items: [
                "**Active:** The patient is currently admitted.",
                "**Discharged:** The patient’s admission has ended.",
                "**Transferred:** A status filter is present, but this screen does not show a transfer action. Ask your administrator about the correct transfer workflow.",
              ],
            },
            { type: "paragraph", text: "Payment labels:" },
            {
              type: "list",
              items: [
                "**Pending payment:** No payment has been recorded against the final amount.",
                "**Partial payment:** Some payment is recorded, but a balance remains.",
                "**Paid:** Recorded payments cover the amount due after discount.",
              ],
            },

            { type: "heading", text: "Helpful terms" },
            {
              type: "list",
              items: [
                "**Admission number:** A reference number for one inpatient stay.",
                "**Diagnosis:** The condition recorded by the clinical team.",
                "**MAR:** Medicine Administration Record; the log of scheduled and recorded doses.",
                "**Running bill:** Charges accumulated during an active admission.",
                "**Discharge:** The recorded end of the patient’s inpatient stay.",
              ],
            },
          ],
        }
      ),
      page(
        "ward-bed-management",
        "Ward & Bed Management",
        "Use this page to set up hospital wards, see which beds are free or in use, and track bed occupancy.",
        {
          image: IMG.ward,
          blocks: [
            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Choose **Ward & Beds** from the left-hand menu" },
              ],
            },
            {
              type: "image",
              src: IMG.hospital,
              alt: "Ward & Beds option in the left-hand menu",
              caption: "Ward & Beds in the left-hand menu",
            },
            {
              type: "callout",
              kind: "note",
              text: "The page is available to users whose plan includes ward and bed management.",
            },

            { type: "heading", text: "What this page is for" },
            {
              type: "paragraph",
              text: "Use this page to set up hospital wards, see which beds are free or in use, and track bed occupancy. Each ward has its own group of beds.",
            },
            {
              type: "paragraph",
              text: "The figures shown are for the active location.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the page shows **0 total beds** and **No wards created yet**, no wards have been set up for that location yet. Start with **Add Ward** or **Add First Ward**.",
            },

            { type: "heading", text: "Create a ward" },
            {
              type: "steps",
              items: [
                { title: "Select **Add Ward**" },
                {
                  title: "Enter a clear **Ward Name**",
                  detail: "For example, “General Ward A” or “ICU”.",
                },
                { title: "Choose the **Ward Type** and enter its **Floor** if useful" },
                { title: "Enter **Total Beds**", detail: "The form allows 1–200 beds." },
                {
                  title: "Optionally enter a **Bed Number Prefix**",
                  detail: "For example, A- or ICU-. The preview shows the numbers the system will create.",
                },
                { title: "Check the name, type, floor, and bed count, then select **Create Ward**" },
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Add Ward form with name, type, floor, total beds, and bed number prefix",
              caption: "The Add Ward form",
            },
            {
              type: "callout",
              kind: "note",
              text: "New beds start with the **Available** status.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Choose names and prefixes that staff can recognize easily. Confirm the bed count and numbering before creating the ward.",
            },

            { type: "heading", text: "Understand the overview cards" },
            {
              type: "list",
              items: [
                "**Total Beds:** All beds set up across the active location’s wards.",
                "**Occupied:** Beds currently assigned to admitted patients.",
                "**Available:** Beds ready to be assigned.",
                "**Cleaning:** Beds marked for cleaning, including after a patient is discharged.",
                "**Maintenance:** Beds that should not be used while they need repair or service.",
                "**Occupancy Rate:** The percentage of all beds currently occupied.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Ward and bed overview cards",
              caption: "Overview cards at the top of the page",
            },
            {
              type: "paragraph",
              text: "The rate is calculated as occupied beds divided by total beds. A ward’s small occupancy bar shows the same kind of information for that ward.",
            },

            { type: "heading", text: "Choose a ward and review its beds" },
            {
              type: "paragraph",
              text: "After wards exist, select one from the **Wards** list on the left side of the page. The selected ward shows its type, floor, beds, and occupancy.",
            },
            {
              type: "paragraph",
              text: "Use the status filters to show all beds or only beds with a particular status. A filter appears when there are beds in that status.",
            },
            {
              type: "image",
              src: IMG.bed,
              alt: "Wards list and the beds of the selected ward",
              caption: "A ward’s beds with status filters",
            },
            { type: "paragraph", text: "Bed statuses mean:" },
            {
              type: "list",
              items: [
                "**Available:** Ready for a patient.",
                "**Occupied:** Assigned to a currently admitted patient.",
                "**Cleaning:** Needs cleaning before it can be used again.",
                "**Maintenance:** Not ready for use because it needs repair or service.",
                "**Reserved:** Held aside and not currently available for general assignment.",
              ],
            },

            { type: "heading", text: "Admit a patient to a bed" },
            {
              type: "steps",
              items: [
                { title: "Select an **Available** bed and choose its admit action" },
                {
                  title: "Search for and select the registered patient",
                  detail: "If the patient is not registered yet, add them from **Patients** first.",
                },
                { title: "Check that the selected patient is the correct person" },
                {
                  title: "Optionally enter the **Assigned Doctor**, **Expected Discharge** date, and **Admission Notes**",
                },
                { title: "Select **Admit Patient**" },
              ],
            },
            {
              type: "image",
              src: IMG.nurse,
              alt: "Admit Patient form with patient, doctor, expected discharge, and notes",
              caption: "The Admit Patient form",
            },
            {
              type: "callout",
              kind: "warning",
              text: "The notes field can record relevant admission details for staff. Enter only information your facility is permitted to store and share.",
            },
            {
              type: "callout",
              kind: "note",
              text: "A patient should not be assigned to a bed already marked **Occupied** or **Maintenance**. The system also checks that the patient is not already admitted to another bed at the same location.",
            },

            { type: "heading", text: "Discharge a patient and prepare the bed" },
            {
              type: "steps",
              items: [
                { title: "Use the bed’s discharge action when the patient is leaving" },
                {
                  title: "Confirm",
                  detail: "The system clears the patient details and changes the bed to **Cleaning**.",
                },
                {
                  title: "After staff have cleaned and checked the bed, change its status to **Available**",
                },
              ],
            },
            {
              type: "callout",
              kind: "note",
              text: "This keeps a recently used bed from appearing ready before the cleaning step is complete.",
            },

            { type: "heading", text: "Change a bed’s status" },
            {
              type: "paragraph",
              text: "For a bed that is not occupied, use its status action to mark it **Available**, **Cleaning**, **Maintenance**, or **Reserved**, as appropriate. After the work is complete, update the status again, for example from **Maintenance** to **Available**.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "An occupied bed must be discharged before its status can be changed.",
            },

            { type: "heading", text: "Use the occupancy report" },
            {
              type: "paragraph",
              text: "Select **Report** to view overall bed totals and a breakdown for each ward. The report can also show occupied-bed details, such as the patient, assigned doctor, time admitted, and expected discharge date. It flags patients whose expected discharge date has passed.",
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Occupancy report with a breakdown for each ward",
              caption: "The occupancy report",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Use **Refresh** to reload the ward and bed information if another staff member has updated it.",
            },

            { type: "heading", text: "Updating or removing a ward" },
            {
              type: "paragraph",
              text: "The screen shown does not provide a visible ward-edit or bed-count adjustment control. If ward details or capacity need changing, check with your EliteHMS administrator or support team before making changes.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Do not remove a ward while it has occupied beds; patients must be discharged first.",
            },

            { type: "heading", text: "Billing and payment information" },
            {
              type: "paragraph",
              text: "This page manages wards, beds, and occupancy. It does not show ward charges, patient invoices, or payment collection. Use **Billing & Invoices** for invoice and payment records, and follow your facility’s process for recording accommodation charges.",
            },

            { type: "heading", text: "Helpful terms" },
            {
              type: "list",
              items: [
                "**Occupancy:** How many beds are in use.",
                "**Occupancy rate:** The percentage of configured beds that are occupied.",
                "**Admit:** Record that a patient is staying in a bed.",
                "**Discharge:** Record that the patient has left the bed.",
                "**Reserved:** Kept aside for a planned use.",
              ],
            },
          ],
        }
      ),
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