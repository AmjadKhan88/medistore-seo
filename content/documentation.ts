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

  monitor: u("photo-1530026405186-ed1f139313f8"),
  alert: u("photo-1584036561566-baf8f5f1b144"),

  surgery: u("photo-1551076805-e1869033e561"),
  theatre: u("photo-1579684385127-1ef15d508118"),

  blood: u("photo-1615461066159-fea0960485d5"),
  donor: u("photo-1615461065929-4f8ffed6ca40"),

  xray: u("photo-1530497610245-94d3c16cda28"),
  imaging: u("photo-1559757175-5700dde675bc"),

  rounds: u("photo-1612349317150-e413f6a5b16d"),
  handover: u("photo-1622253692010-333f2da6031d"),
  
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
      page(
        "demand-forecast",
        "Predictive Medicine Demand",
        "Use Predictive Medicine Demand to estimate how much of each medicine may be needed in a selected month.",
        {
          image: IMG.stock,
          blocks: [
            { type: "heading", text: "What this page does" },
            {
              type: "paragraph",
              text: "The forecast uses sales history and seasonal patterns for Pakistan. You can compare predicted demand with current stock and use the suggested order quantities to help plan purchases.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Forecasts are estimates to support stock planning. Check actual stock, supplier lead times, upcoming needs, and your own sales records before placing an order.",
            },

            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "In the left menu, select **Demand Forecast**" },
              ],
            },
            {
              type: "image",
              src: IMG.dashboard,
              alt: "Demand Forecast option in the left menu",
              caption: "Demand Forecast in the left menu",
            },

            { type: "heading", text: "Generate a forecast" },
            {
              type: "steps",
              items: [
                { title: "Choose the month and year at the top of the page" },
                { title: "Select **Generate**" },
                { title: "Confirm the target month and year in the dialog" },
                {
                  title: "Choose whether to use **Use Gemini AI Enhancement**",
                  detail: "Leave it selected to add Pakistan-specific seasonal insights for the top 25 medicines, or turn it off for a forecast based on sales and seasonal patterns.",
                },
                { title: "Select **Generate Predictions** and wait for the results" },
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Generate dialog with the target month and the Gemini AI Enhancement option",
              caption: "The Generate dialog",
            },
            {
              type: "callout",
              kind: "note",
              text: "The forecast needs active medicines and at least two months of sales history for a medicine. If a medicine has too little history, it may not appear in the results.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "For better estimates, keep medicine records and sales up to date.",
            },

            { type: "heading", text: "What the cards mean" },
            {
              type: "list",
              items: [
                "**Predictions Generated:** Forecasts available for the selected period.",
                "**Critical Stock:** Medicines with urgent stock coverage.",
                "**High Urgency:** Medicines that may need attention soon.",
                "**Rising Demand:** Medicines with an increasing sales trend.",
                "**Avg Accuracy:** Average forecast accuracy recorded from months where actual sales were updated.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Demand forecast summary cards and the seasonal context banner",
              caption: "Summary cards and the seasonal context banner",
            },
            {
              type: "paragraph",
              text: "The seasonal context banner gives a general note for the selected month. For example, a winter-related note may appear for a winter month.",
            },
            {
              type: "callout",
              kind: "note",
              text: "Treat the seasonal note as planning context, not a guarantee of demand.",
            },

            { type: "heading", text: "Review predictions" },
            {
              type: "paragraph",
              text: "On the **Predictions** tab, use the filters to focus on **Critical**, **High**, **Medium**, or **Low** urgency. Choose a category or sort by urgency, predicted quantity, days of stock, or trend.",
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Predictions tab with urgency filters and medicine rows",
              caption: "The Predictions tab",
            },
            {
              type: "paragraph",
              text: "Select a medicine row to expand its details, including:",
            },
            {
              type: "list",
              items: [
                "**Predicted:** Estimated quantity needed for the month.",
                "**Confidence interval:** A range around the estimate.",
                "**Actual:** Recorded sales after actuals have been updated.",
                "**Trend:** Whether demand is rising, falling, stable, or volatile.",
                "**Days of Stock:** Estimated coverage based on current stock and forecast demand.",
                "**Suggested Order:** Estimated quantity to order and a suggested order-by date.",
                "**Sales History:** Recorded quantities in previous months.",
                "**Seasonal Factor** and **Confidence:** Extra context about the forecast calculation.",
                "**AI Insight:** Available when generated, for added planning context.",
              ],
            },
            {
              type: "callout",
              kind: "tip",
              text: "Urgency is based on the estimate and stock coverage. Review the underlying numbers before deciding what to purchase.",
            },

            { type: "heading", text: "Charts and accuracy" },
            {
              type: "list",
              items: [
                "**Charts:** Compare predicted demand with current stock and suggested order quantities. The charts also summarize stock coverage and demand trends.",
                "**Model Accuracy:** Review accuracy over time after actual sales have been recorded for forecast months.",
              ],
            },
            {
              type: "image",
              src: IMG.charts,
              alt: "Charts comparing predicted demand with current stock and suggested orders",
              caption: "Demand and stock charts",
            },
            {
              type: "paragraph",
              text: "Select **Update Actuals** for a selected month after sales are recorded. EliteHMS reads quantities from bills for that month and compares them with the forecast. This updates accuracy figures.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Avoid updating actuals before the month’s sales are complete, because the comparison will use the sales recorded so far.",
            },

            { type: "heading", text: "Create a purchase order" },
            {
              type: "steps",
              items: [
                { title: "When predictions are available, select **Create PO**" },
                { title: "Choose which urgency levels to include" },
                {
                  title: "Enter a supplier name",
                  detail: "Or leave it blank to use the default.",
                },
              ],
            },
            {
              type: "image",
              src: IMG.warehouse,
              alt: "Create PO dialog with urgency levels and a supplier name",
              caption: "The Create PO dialog",
            },
            {
              type: "paragraph",
              text: "EliteHMS creates a purchase order with the suggested quantities in the **Purchases** section.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Review and adjust the order before sending it to a supplier.",
            },

            { type: "heading", text: "Helpful definitions" },
            {
              type: "list",
              items: [
                "**Forecast:** An estimate of future demand based on past sales and other patterns.",
                "**Confidence interval:** A range showing how far the forecast may vary.",
                "**Urgency:** A label that helps prioritize stock review.",
                "**Actuals:** Real sales quantities recorded in bills.",
                "**Volatile demand:** Sales that change sharply rather than following a steady pattern.",
              ],
            },
          ],
        }
      ),
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
        "patient-matching",
        "Smart Patient Matching",
        "Smart Patient Matching compares active patient records and highlights pairs that might belong to the same person.",
        {
          image: IMG.records,
          blocks: [
            { type: "heading", text: "What this page does" },
            {
              type: "paragraph",
              text: "This can help staff find duplicate records and keep a patient’s information and history together.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the page shows 0 potential duplicates, no pairs met the current matching threshold. It does not prove that no duplicates exist.",
            },

            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "In the left menu, select **Deduplication**" },
              ],
            },
            {
              type: "image",
              src: IMG.dashboard,
              alt: "Deduplication option in the left menu",
              caption: "Deduplication in the left menu",
            },

            { type: "heading", text: "What the page shows" },
            {
              type: "list",
              items: [
                "**Potential duplicates found:** The number of patient pairs that match the current threshold.",
                "**High confidence:** Pairs with a strong match score.",
                "**Sensitivity Threshold:** Controls how similar records must be before they appear.",
                "**All, High, Medium, Low:** Filters the results by match confidence.",
                "**Rescan:** Runs the comparison again using the selected threshold.",
                "**No duplicate patients found:** No pairs currently meet the threshold.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Smart Patient Matching summary, threshold slider, and filters",
              caption: "Summary, threshold slider, and filters",
            },
            {
              type: "paragraph",
              text: "The system compares details such as phone number, CNIC, name, age, gender, and city. Each suggested pair includes a score, confidence level, and reasons for the match.",
            },

            { type: "heading", text: "Set the sensitivity threshold" },
            { type: "paragraph", text: "Move the slider from 50% to 90%:" },
            {
              type: "list",
              items: [
                "A **lower threshold** (closer to 50%) finds more possible matches, including weaker ones. Review these carefully.",
                "A **higher threshold** (closer to 90%) shows fewer, stronger matches.",
              ],
            },
            {
              type: "paragraph",
              text: "Changing the threshold triggers a new scan. Use the confidence filters to focus on **High**, **Medium**, or **Low** results.",
            },

            { type: "heading", text: "Review a possible duplicate" },
            {
              type: "paragraph",
              text: "For each pair, compare the information shown for both patients, including their names, patient IDs, phone numbers, age, gender, city, billed totals, and record dates. Read the match reasons and score.",
            },
            {
              type: "image",
              src: IMG.form,
              alt: "A possible duplicate pair with both patients’ details, score, and reasons",
              caption: "A possible duplicate pair",
            },
            {
              type: "callout",
              kind: "warning",
              text: "A match is only a suggestion. Family members may share a phone number or address, and two different people may have similar names. Confirm the person’s identity and records before merging anything.",
            },

            { type: "heading", text: "Merge records carefully" },
            {
              type: "paragraph",
              text: "Select **Merge** only after confirming that both records belong to the same patient.",
            },
            {
              type: "steps",
              items: [
                {
                  title: "Choose which patient record to **Keep**",
                  detail: "This record remains active and keeps its patient ID.",
                },
                { title: "Review the field-by-field comparison" },
                {
                  title: "For a differing field, select **Use other** if the value from the other record is the correct one",
                },
                { title: "Check all information, then select **Merge Records** and confirm" },
              ],
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Merge dialog with Keep selection and field-by-field comparison",
              caption: "The merge dialog",
            },
            {
              type: "paragraph",
              text: "When merged, the other patient’s bills, prescriptions, lab tests, appointments, IPD records, vital signs, feedback, insurance claims, radiology studies, broadcast records, and OPD queue records are reassigned to the kept patient. Financial totals are combined.",
            },
            {
              type: "callout",
              kind: "note",
              text: "The other patient record is archived rather than deleted.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Merging cannot be fully reversed. If you are unsure whether records belong to the same person, cancel and ask an authorized staff member to verify first.",
            },

            { type: "heading", text: "Helpful definitions" },
            {
              type: "list",
              items: [
                "**Potential duplicate:** Two records that share enough details to be worth checking.",
                "**Match score:** The system’s estimate of how similar two records are.",
                "**Confidence:** A High, Medium, or Low label based on the match score.",
                "**Threshold:** The minimum score needed for a pair to appear.",
                "**Merge:** Combine the related records under one kept patient record.",
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
        "online-booking",
        "Online Appointment Booking",
        "Use Online Appointment Booking to let patients request appointments through a public webpage.",
        {
          image: IMG.visit,
          blocks: [
            { type: "heading", text: "What this page does" },
            {
              type: "paragraph",
              text: "Patients do not need an EliteHMS login. They choose a doctor, date, and available time, then enter their name and phone number.",
            },
            {
              type: "callout",
              kind: "note",
              text: "Patients cannot book through the public page until you enable it.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the booking page is disabled and there are 0 total bookings, you have not turned online booking on yet. Follow the setup steps below.",
            },

            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "In the left menu, select **Online Booking**" },
              ],
            },
            {
              type: "image",
              src: IMG.dashboard,
              alt: "Online Booking option in the left menu",
              caption: "Online Booking in the left menu",
            },

            { type: "heading", text: "Set up the booking page" },
            { type: "subheading", text: "1. Complete clinic information" },
            {
              type: "paragraph",
              text: "On the **Setup** tab, check the clinic details:",
            },
            {
              type: "list",
              items: [
                "**Booking URL (slug):** The short name used in your public link, such as amjad-ullah. Use lowercase letters, numbers, and hyphens.",
                "**Clinic Name**, **Tagline**, **Address**, **Phone:** Enter the information patients should see.",
                "**Allow same-day bookings:** Turn this on if patients may book for today.",
                "**Advance Booking (days):** How many days ahead patients may book.",
                "**Cancellation Window (hours):** How long before the visit a patient must cancel.",
                "**Confirmation Message Template:** Edit the message shown after booking. Available placeholders are **{patientName}**, **{doctor}**, **{date}**, **{time}**, **{clinic}**, and **{cancelLink}**.",
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Setup tab with booking URL, clinic details, and booking rules",
              caption: "The Setup tab",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Changing the booking URL (slug) changes the link you share. Patients who saved the old link will no longer reach your page.",
            },
            {
              type: "paragraph",
              text: "Select **Save Settings** after making changes.",
            },

            { type: "subheading", text: "2. Add doctors and schedules" },
            {
              type: "steps",
              items: [
                { title: "Open the **Doctors** tab and select **Add Doctor**" },
                {
                  title: "Enter the doctor’s name",
                  detail: "And, where relevant, specialization, qualification, consultation fee, and short bio.",
                },
                { title: "Set the days and time slots when the doctor accepts appointments" },
                {
                  title: "Choose **Max Per Slot**",
                  detail: "This controls how many patients can book the same time.",
                },
                {
                  title: "Keep **Doctor is active** selected",
                  detail: "The doctor appears on the public page only while it is selected.",
                },
              ],
            },
            {
              type: "image",
              src: IMG.doctor,
              alt: "Add Doctor form with specialization, fee, days, and time slots",
              caption: "Adding a doctor and their schedule",
            },
            {
              type: "callout",
              kind: "note",
              text: "You need at least one active doctor with at least one available day and time slot before patients can book. Use the edit button on a doctor’s card to update their information or schedule.",
            },

            { type: "subheading", text: "3. Enable and share the page" },
            {
              type: "steps",
              items: [
                {
                  title: "Make sure the clinic details and doctor schedules are ready",
                },
                {
                  title: "Select **Enable Booking**",
                  detail: "The page status should change to **Booking page is LIVE**.",
                },
                {
                  title: "Find the public URL near the top of the page",
                  detail: "For example, https://app.elitehms.online/book/amjad-ullah",
                },
                {
                  title: "Select **Copy** to copy the link or **Preview** to check the public page",
                },
                {
                  title: "Share the link with patients",
                  detail: "Through a suitable channel, such as WhatsApp, your clinic’s website, or social media.",
                },
              ],
            },
            {
              type: "image",
              src: IMG.phone,
              alt: "Booking page is LIVE with the public URL, Copy, and Preview buttons",
              caption: "The booking page when it is live",
            },

            { type: "heading", text: "What patients do" },
            { type: "paragraph", text: "On the public page, patients:" },
            {
              type: "steps",
              items: [
                { title: "Choose a doctor" },
                { title: "Select an available date and time" },
                {
                  title: "Enter their name and phone number",
                  detail: "These are required.",
                },
                { title: "Choose an appointment type and optionally add notes" },
                { title: "Submit the booking and view the confirmation details" },
              ],
            },
            {
              type: "image",
              src: IMG.calendar,
              alt: "Public booking page with doctor, date, and time selection",
              caption: "The public booking page",
            },
            {
              type: "paragraph",
              text: "Patients can use the cancellation link in their confirmation to cancel, subject to the cancellation window set by the clinic.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Check the **Upcoming** and cancellation counts on the dashboard to monitor activity.",
            },

            { type: "heading", text: "Tabs and booking counts" },
            {
              type: "list",
              items: [
                "**Setup:** Clinic details, booking rules, and confirmation message.",
                "**Doctors:** Doctors who appear on the public booking page and their schedules.",
                "**Stats:** Total bookings, bookings this month and today, upcoming bookings, cancellations, and booking success rate. It also provides options to copy or share the public link.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Online booking summary cards and the Stats tab",
              caption: "Summary cards and the Stats tab",
            },
            {
              type: "paragraph",
              text: "The top cards show **Total Bookings**, **This Month**, **Upcoming**, and **Cancellations**. Select **Refresh** to reload the page information.",
            },

            { type: "heading", text: "Helpful definitions" },
            {
              type: "list",
              items: [
                "**Public booking URL:** A link patients can open without signing in.",
                "**Slug:** The clinic-specific part at the end of the booking link.",
                "**Time slot:** A bookable appointment time.",
                "**Max per slot:** The number of patients allowed to book one time slot.",
                "**Cancellation window:** The minimum notice required before a patient can cancel.",
              ],
            },

            { type: "heading", text: "Before sharing the link" },
            {
              type: "callout",
              kind: "warning",
              text: "Preview the public page and confirm the clinic contact details, doctor names, schedules, fees, and cancellation rules are correct. Make sure each doctor’s active days and time slots reflect their real availability.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Disable booking if the clinic is temporarily not accepting online appointments.",
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
      page(
        "vital-signs",
        "Vital Signs Monitoring",
        "This page lets authorized staff record a patient’s measurements and review past readings, alerts, and trends.",
        {
          image: IMG.monitor,
          blocks: [
            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Choose the correct location from the top bar" },
                { title: "Select **Vital Signs** from the left menu" },
              ],
            },
            {
              type: "image",
              src: IMG.doctor,
              alt: "Vital Signs option in the left menu",
              caption: "Vital Signs in the left menu",
            },

            { type: "heading", text: "What the page shows" },
            {
              type: "list",
              items: [
                "**Today Readings:** Measurements recorded today.",
                "**Critical (24h):** Readings flagged with critical values during the last 24 hours.",
                "**Total Readings:** All saved readings for the selected location.",
                "**Patient search:** Search by patient name or ID. Enter at least two characters, then select the matching patient.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Vital Signs summary cards and patient search",
              caption: "Summary cards and patient search",
            },
            {
              type: "paragraph",
              text: "Select **Record** to enter a reading, or **View Charts** to review that patient’s history. Use **Refresh** to reload the summary.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If all the totals are zero, there are no readings currently shown for the selected location.",
            },

            { type: "heading", text: "Record a patient’s vital signs" },
            {
              type: "steps",
              items: [
                { title: "Select the patient" },
                { title: "Choose **Record Vitals**" },
                {
                  title: "Enter at least one measurement",
                  detail: "See the fields below.",
                },
                { title: "Check the patient and units" },
                { title: "Select **Record Vitals**" },
              ],
            },
            { type: "paragraph", text: "The form can include:" },
            {
              type: "list",
              items: [
                "**Date & Time** and **Context** (such as OPD, IPD, Emergency, ICU, OT, Follow-up, or Home).",
                "**Blood pressure:** Systolic and diastolic values, the patient’s position, and which arm was used.",
                "**Pulse**, **respiratory rate**, and **SpO₂** (oxygen saturation).",
                "**Temperature** and measurement route.",
                "**Blood sugar (RBS)** and timing, such as fasting, random, or after a meal.",
                "**Weight**, **height**, **pain score**, and **GCS score**.",
                "**Notes** for relevant observations.",
              ],
            },
            {
              type: "image",
              src: IMG.vitals,
              alt: "Record Vitals form with blood pressure, pulse, temperature, and SpO₂",
              caption: "The Record Vitals form",
            },
            {
              type: "callout",
              kind: "note",
              text: "The form may show an abnormal or critical warning while values are entered.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Alerts are based on built-in thresholds; they support staff review and do not replace clinical judgment.",
            },

            { type: "heading", text: "Review charts and history" },
            { type: "paragraph", text: "On the patient view, you can:" },
            {
              type: "list",
              items: [
                "Review the latest measurements and any critical alerts.",
                "Filter readings by admission and date range; use **Clear** to remove those filters.",
                "View available trend charts for blood pressure, pulse, temperature, SpO₂, blood sugar, and weight.",
                "Compare readings in the summary table, including latest, average, minimum, and maximum values.",
                "Review the vitals history table, including date, measurements, and who recorded them.",
                "Select **Print** to print the patient’s vitals view.",
              ],
            },
            {
              type: "image",
              src: IMG.charts,
              alt: "Trend charts for blood pressure, pulse, temperature, and SpO₂",
              caption: "Trend charts on the patient view",
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Vitals history table with date, measurements, and who recorded them",
              caption: "The vitals history table",
            },
            {
              type: "callout",
              kind: "warning",
              text: "The history table includes a delete control for each record. Use it only if an entry must be removed under your organization’s record-correction policy.",
            },

            { type: "heading", text: "Critical alerts" },
            {
              type: "paragraph",
              text: "The main page may show recent critical alerts. Select an alert to open that patient’s readings. Critical readings can also trigger an in-app notification.",
            },
            {
              type: "image",
              src: IMG.alert,
              alt: "Recent critical alerts on the Vital Signs page",
              caption: "Recent critical alerts",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Follow your facility’s process for checking and escalating alerts; do not rely on the screen alone for urgent care decisions.",
            },

            { type: "heading", text: "Short definitions" },
            {
              type: "list",
              items: [
                "**Systolic / diastolic:** The upper and lower numbers in a blood pressure reading.",
                "**Pulse:** Heartbeats per minute.",
                "**Respiratory rate:** Breaths per minute.",
                "**SpO₂:** The percentage of oxygen carried in the blood, as measured by a pulse oximeter.",
                "**RBS:** Random blood sugar measurement.",
                "**GCS:** Glasgow Coma Scale, a clinical score used to describe a person’s level of consciousness.",
                "**Trend:** How a measurement changes across multiple readings.",
              ],
            },
          ],
        }
      ),
      page(
        "emr",
        "Electronic Medical Records (EMR)",
        "EMR brings a patient’s recorded medical information and visit history together.",
        {
          image: IMG.laptop,
          blocks: [
            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Choose the correct location from the top bar" },
                { title: "Select **EMR** from the left menu" },
              ],
            },
            {
              type: "image",
              src: IMG.doctor,
              alt: "EMR option in the left menu",
              caption: "EMR in the left menu",
            },
            {
              type: "callout",
              kind: "note",
              text: "Until you select a patient, no record is shown.",
            },

            { type: "heading", text: "Find a patient" },
            {
              type: "steps",
              items: [
                {
                  title: "Search by the patient’s name, ID, or phone number",
                  detail: "Enter at least two characters.",
                },
                {
                  title: "Check the matching patient’s name and details",
                  detail: "Such as patient ID, age, and gender.",
                },
                { title: "Select the patient row or **Open EMR** to open their record" },
              ],
            },
            {
              type: "image",
              src: IMG.records,
              alt: "EMR patient search with matching patients",
              caption: "Searching for a patient",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the patient does not appear, check the spelling or search by a different detail. Make sure you are in the correct location.",
            },

            { type: "heading", text: "What is in a patient’s EMR" },
            { type: "paragraph", text: "The patient record has several tabs:" },
            {
              type: "list",
              items: [
                "**Overview:** Patient details, allergies, active conditions, a medical summary, clinical summary, and past medical history. The summary can also show counts for bills, prescriptions, lab tests, appointments, and admissions, plus billed and outstanding amounts.",
                "**Problems:** A list of conditions with their status and, where entered, severity, ICD-10 code, onset date, and notes.",
                "**Timeline:** A chronological view of recorded bills, prescriptions, lab tests, appointments, admissions, discharges, and vital-sign readings. Use the filters to focus on one type of event.",
                "**History:** Surgical history, family history, and immunizations.",
                "**Social:** Lifestyle information such as smoking, alcohol use, occupation, exercise, diet, and living status.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Patient EMR with the Overview, Problems, Timeline, History, and Social tabs",
              caption: "A patient’s EMR tabs",
            },
            {
              type: "callout",
              kind: "note",
              text: "The page heading mentions referral records, but the EMR tabs shown in the application do not have a separate referral tab. Referral information may be documented in another relevant record, such as an appointment or admission.",
            },

            { type: "heading", text: "Add or update information" },
            {
              type: "paragraph",
              text: "Use **Edit** on an editable section, enter accurate information, and select **Save**.",
            },
            { type: "paragraph", text: "To add a condition:" },
            {
              type: "steps",
              items: [
                { title: "Open **Problems**" },
                { title: "Choose **Add Problem**" },
                {
                  title: "Enter the condition and its status",
                  detail: "Status is required. Severity, ICD-10 code, onset date, and notes can provide more context.",
                },
                { title: "Save" },
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Add Problem form with condition, status, severity, and ICD-10 code",
              caption: "The Add Problem form",
            },
            {
              type: "paragraph",
              text: "Use **Edit** to update a problem or **Delete** to remove it when appropriate.",
            },
            {
              type: "paragraph",
              text: "The **History** tab lets staff add or update surgery, family history, and immunization entries. The **Social** tab has a **Save Social History** button.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Follow your organization’s correction process when changing existing clinical information, and do not enter unverified details.",
            },

            { type: "heading", text: "Timeline, refresh, and print" },
            {
              type: "paragraph",
              text: "Timeline events are grouped by month. Select a type filter to narrow the list, or **All** to show every available event. Some events include extra details, such as appointment notes, prescription medicines, or vital-sign alerts.",
            },
            {
              type: "image",
              src: IMG.calendar,
              alt: "Timeline grouped by month with type filters",
              caption: "The Timeline tab",
            },
            {
              type: "paragraph",
              text: "Use **Refresh** to reload the record and **Print EMR** to print the current patient record.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Before printing, confirm you opened the correct patient.",
            },

            { type: "heading", text: "Important notes" },
            {
              type: "callout",
              kind: "note",
              text: "Opening a patient’s EMR automatically creates an empty EMR record if one does not exist yet.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "The allergy banner uses allergies recorded on the patient profile. Check allergy details carefully before care decisions.",
            },
            {
              type: "callout",
              kind: "note",
              text: "The EMR summary combines information from different modules. A count or timeline entry reflects records saved elsewhere in the app; it does not replace those source records.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "EMR contains sensitive patient information. Open and print records only when you are authorized and need them for your work.",
            },

            { type: "heading", text: "Short definitions" },
            {
              type: "list",
              items: [
                "**EMR:** Electronic Medical Record; a digital collection of a patient’s health information.",
                "**Problem list:** Conditions recorded for the patient, including whether they are active, suspected, inactive, or resolved.",
                "**Timeline:** A date-ordered list of events from different parts of the patient record.",
                "**ICD-10 code:** A standard code used to identify a diagnosis or health condition.",
                "**Social history:** Health-related lifestyle and background information.",
                "**Resolved:** A condition marked as no longer active.",
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
      page(
        "nurse-station",
        "Nurse Station",
        "Nurse Station brings together key information for active IPD admissions: the patient’s ward and bed, scheduled medicine doses, recorded vital signs, and medicine requests sent to the pharmacy.",
        {
          image: IMG.nurse,
          blocks: [
            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Select **Nurse Station** from the left-hand menu" },
              ],
            },
            {
              type: "image",
              src: IMG.hospital,
              alt: "Nurse Station option in the left-hand menu",
              caption: "Nurse Station in the left-hand menu",
            },

            { type: "heading", text: "What this page is for" },
            {
              type: "paragraph",
              text: "Nurse Station brings together key information for active IPD admissions: the patient’s ward and bed, scheduled medicine doses, recorded vital signs, and medicine requests sent to the pharmacy.",
            },
            {
              type: "paragraph",
              text: "It uses admissions and medicine orders created elsewhere in EliteHMS:",
            },
            {
              type: "list",
              items: [
                "Admit patients through **IPD Management**.",
                "Set up wards and beds in **Ward & Beds**.",
                "Add medicine orders in the patient’s IPD admission.",
              ],
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the page shows **0 patients** and **No active IPD patients**, there are no active inpatient admissions to display for the selected location. It does not mean that the patient list is broken.",
            },
            {
              type: "callout",
              kind: "note",
              text: "Registering an OPD queue token alone does not create an IPD admission.",
            },

            { type: "heading", text: "Find a patient" },
            {
              type: "paragraph",
              text: "The left panel lists active inpatients. Search by the patient’s name, bed number, or ward. Select a patient to open their details on the right.",
            },
            {
              type: "paragraph",
              text: "Each patient entry can show their ward and bed, days admitted, admission diagnosis, active medicine orders, and a summary of today’s scheduled doses. An overdue marker highlights pending doses whose scheduled times have passed.",
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Active inpatient list with search box and overdue markers",
              caption: "The active inpatient list",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Use the **Refresh** button near the Nurse Station heading to reload the patient list and alerts.",
            },

            { type: "heading", text: "Review the MAR" },
            {
              type: "paragraph",
              text: "The **MAR** tab is the Medicine Administration Record. It lists doses scheduled for the selected patient, grouped by time. Choose a date to review that day’s record, then use refresh if you need to reload it.",
            },
            {
              type: "image",
              src: IMG.mar,
              alt: "MAR tab with scheduled doses grouped by time",
              caption: "The MAR tab",
            },
            { type: "paragraph", text: "For today’s pending doses, the available actions are:" },
            {
              type: "list",
              items: [
                "**Given:** Record that the dose was given.",
                "**Skip:** Record that the dose was not given.",
                "**Refused:** Record that the patient refused it.",
              ],
            },
            {
              type: "paragraph",
              text: "The screen shows the dose’s medicine, dosage, route, status, and, when recorded, who marked it and when. Pending doses from earlier today may be highlighted as overdue.",
            },
            {
              type: "callout",
              kind: "note",
              text: "Dose actions are only available for pending doses dated today; past dates are for review.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Check the patient and authorized medication instructions before recording a dose. Record what actually happened, and follow your facility’s process for omissions or refusals.",
            },

            { type: "heading", text: "Record and review vital signs" },
            { type: "paragraph", text: "Open the **Vitals** tab to record one or more readings:" },
            {
              type: "list",
              items: [
                "**Blood Pressure** in mmHg",
                "**Pulse** in bpm (beats per minute)",
                "**Temperature** in °C",
                "**SpO₂** in percent (oxygen saturation)",
                "**Blood Sugar** in mg/dL",
                "**Weight** in kg",
                "**Notes** for observations",
              ],
            },
            {
              type: "steps",
              items: [
                { title: "Open the **Vitals** tab" },
                { title: "Enter at least one reading" },
                { title: "Select **Record Vitals**" },
              ],
            },
            {
              type: "image",
              src: IMG.vitals,
              alt: "Vitals tab with reading fields and recent history",
              caption: "The Vitals tab",
            },
            {
              type: "paragraph",
              text: "The app records the time and staff member and shows recent entries in the history. The screen displays up to the latest 20 records.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Make sure readings and units are entered correctly.",
            },
            {
              type: "paragraph",
              text: "The app sends alerts for some preset readings, including very low or high pulse, SpO₂ below 90%, temperature above 39.5°C, and blood sugar above 400 mg/dL.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Treat alerts as prompts to follow your facility’s clinical escalation process; use clinical judgement and local protocols.",
            },

            { type: "heading", text: "Request medicine from the pharmacy" },
            {
              type: "paragraph",
              text: "Select **Request Med** in the patient header, or open **Requests** and choose **New Request**.",
            },
            {
              type: "steps",
              items: [
                { title: "Search the inventory for a medicine, or enter its name manually" },
                {
                  title: "Enter the required quantity",
                  detail: "Dosage and route can also be added.",
                },
                { title: "Select urgency: **Routine**, **Urgent**, or **STAT**" },
                { title: "Add notes if needed, then select **Send to Pharmacy**" },
              ],
            },
            {
              type: "image",
              src: IMG.meds,
              alt: "New Request form with medicine, quantity, and urgency",
              caption: "The New Request form",
            },
            {
              type: "callout",
              kind: "note",
              text: "A **STAT** request is marked as an immediate-priority request. Use urgency according to your facility’s policy.",
            },
            {
              type: "callout",
              kind: "note",
              text: "A request is not the same as a medicine order or a dose administration record: pharmacy staff still need to process the request.",
            },
            {
              type: "paragraph",
              text: "Pending requests for the selected patient appear in the **Requests** tab. The app can notify nursing staff when pharmacy marks a request dispensed.",
            },

            { type: "heading", text: "Alerts and notifications" },
            {
              type: "paragraph",
              text: "The bell button shows overdue-dose alerts. Select it to view the overdue list, which includes the patient, ward or bed, medicine, scheduled time, and how late the dose is. The page also shows a pending-request count when requests are outstanding.",
            },
            {
              type: "image",
              src: IMG.alert,
              alt: "Bell button with the overdue-dose alert list",
              caption: "Overdue-dose alerts",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Alerts refresh automatically every two minutes, and you can refresh them manually with the refresh button. Critical vital alerts can appear as notifications while the page is open.",
            },

            { type: "heading", text: "Helpful terms" },
            {
              type: "list",
              items: [
                "**IPD:** Inpatient Department; care for patients staying in the hospital.",
                "**MAR:** Medicine Administration Record; a record of scheduled doses and what happened to them.",
                "**SpO₂:** A reading of the oxygen level in the blood.",
                "**STAT:** An instruction that something is needed immediately.",
                "**Overdue dose:** A pending dose whose scheduled time has passed.",
              ],
            },
          ],
        }
      ),
      page(
        "doctor-orders-notes",
        "Doctor Orders & Nursing Notes",
        "Use this page to view active inpatients, create and track doctor orders, write nursing notes, and record shift handovers.",
        {
          image: IMG.rounds,
          blocks: [
            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Select **Orders & Notes** from the left-hand menu" },
              ],
            },
            {
              type: "image",
              src: IMG.hospital,
              alt: "Orders & Notes option in the left-hand menu",
              caption: "Orders & Notes in the left-hand menu",
            },

            { type: "heading", text: "What this page is for" },
            {
              type: "paragraph",
              text: "Use this page to view active inpatients, create and track doctor orders, write nursing notes, and record shift handovers.",
            },
            {
              type: "callout",
              kind: "note",
              text: "It works with **IPD Management**: a patient must have an active IPD admission before they appear in the **Active Patients** list.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the page shows **0 Active Patients**, there are no active inpatient admissions at the selected location. Admit the patient in **IPD Management** first, then return here.",
            },

            { type: "heading", text: "Understand the summary cards" },
            {
              type: "list",
              items: [
                "**Pending Ack:** Orders waiting for a nurse to acknowledge them.",
                "**Unacknowledged:** A summary count of orders that have not reached a completed or cancelled state.",
                "**Today Orders:** Orders created today.",
                "**Active Patients:** Patients with active IPD admissions.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Orders & Notes summary cards",
              caption: "Summary cards at the top of the page",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Use **Refresh** to reload the patient list, order counts, and handovers.",
            },

            { type: "heading", text: "Active Patients: open a patient’s orders and notes" },
            {
              type: "paragraph",
              text: "Select **Active Patients**, then search by patient name, bed, or ward. Choose a patient to open their record. From there, use the **Orders** and **Notes** tabs.",
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Active Patients list with search box and pending-order highlights",
              caption: "The Active Patients list",
            },
            {
              type: "paragraph",
              text: "The patient list can highlight patients who have pending orders. A **No active IPD patients** message means there are no current admissions to select.",
            },

            { type: "heading", text: "Create a doctor order" },
            {
              type: "paragraph",
              text: "From a patient’s order view, select **New Order**. The order is linked to that patient’s active admission.",
            },
            {
              type: "steps",
              items: [
                {
                  title: "Choose an **Order Type**",
                  detail: "Medicine, Investigation, Diet, Procedure, Nursing, Consultation, Restriction, or Other.",
                },
                {
                  title: "Choose a **Priority**",
                  detail: "Routine, Urgent, STAT, or One-Time.",
                },
                { title: "Enter the required **Order Title / Summary**" },
                { title: "Add clear **Detailed Instructions**" },
                { title: "Add **Frequency**, **Duration**, and start or end dates where needed" },
                { title: "Review the order, then select **Send Order to Nurses**" },
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "New Order form with order type, priority, title, and instructions",
              caption: "The New Order form",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Make the title and instructions clear enough for the receiving staff to understand the intended task.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Use priority according to your facility’s policy. **STAT** means the request needs immediate attention under that policy.",
            },
            {
              type: "paragraph",
              text: "The app notifies staff about new orders. The receiving nurse should read and acknowledge the order.",
            },
            {
              type: "callout",
              kind: "note",
              text: "Acknowledgement records that the order was seen, not that the task was completed.",
            },

            { type: "heading", text: "Review and update orders" },
            {
              type: "paragraph",
              text: "Expand an order card to read its detailed instructions, acknowledgement notes, completion notes, or modification history. Use the status filters to narrow the list.",
            },
            {
              type: "image",
              src: IMG.mar,
              alt: "Order cards with status filters",
              caption: "Order cards and status filters",
            },
            { type: "paragraph", text: "Statuses include:" },
            {
              type: "list",
              items: [
                "**Pending:** Waiting for acknowledgement.",
                "**Acknowledged:** A nurse has recorded that they read the order.",
                "**In-Progress:** The task has been started.",
                "**Completed:** The task was marked done.",
                "**Cancelled:** The order was cancelled.",
                "**On-Hold:** The order is paused.",
              ],
            },
            {
              type: "paragraph",
              text: "Available actions may include **Acknowledge**, **Done**, and **Cancel**. When marking an order done, add completion notes if they help explain what was completed. Cancelling asks for a reason.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Acknowledging all orders is available in the patient view; use it only after reading every order.",
            },
            {
              type: "callout",
              kind: "note",
              text: "A doctor can edit an order before it is completed or cancelled. If an acknowledged order is changed, it returns to **Pending** so nurses can review the updated instructions.",
            },

            { type: "heading", text: "Write a nursing note" },
            {
              type: "paragraph",
              text: "Select a patient and choose **Write Note**, or use the page’s handover option for a shift-wide handover. Choose a note type:",
            },
            {
              type: "list",
              items: [
                "**Progress Note:** A record of the patient’s progress.",
                "**Observation:** An observation made during care.",
                "**Incident Report:** A record of an incident.",
                "**Patient Education:** Information or instructions given to the patient.",
                "**Discharge Note:** Notes related to discharge.",
                "**Other:** Another nursing note type.",
              ],
            },
            {
              type: "image",
              src: IMG.nurse,
              alt: "Write Note form with note type, title, content, and tags",
              caption: "The Write Note form",
            },
            {
              type: "paragraph",
              text: "Enter a required **Title** and **Note Content**. You may add comma-separated tags to make notes easier to recognize. In the patient view, the note is associated with that admission.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "The note form also offers **Private (nursing staff only)** and **Pin to top** options. Use them according to your facility’s documentation and access policies.",
            },

            { type: "heading", text: "Write a shift handover" },
            {
              type: "steps",
              items: [
                {
                  title: "Select **Write Handover** at the top of the page",
                  detail: "Or choose **Shift Handovers** and select **Write Shift Handover**.",
                },
                { title: "Enter the handover title and overall shift summary" },
                { title: "Complete the handover section", detail: "See the list below." },
              ],
            },
            { type: "paragraph", text: "The handover section can include:" },
            {
              type: "list",
              items: [
                "**Shift:** Morning, Evening, or Night.",
                "**Outgoing Nurse** and **Incoming Nurse**",
                "**Ward**",
                "**Critical Patients**",
                "**Pending Tasks**",
                "A patient-by-patient summary, including condition, last vitals, pending tasks, and alerts for the next nurse.",
              ],
            },
            {
              type: "image",
              src: IMG.handover,
              alt: "Shift Handover form with shift, nurses, ward, and patient summaries",
              caption: "The Shift Handover form",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Include clear, current information that helps the incoming staff continue care safely. Verify patient names and bed numbers, and follow your facility’s handover policy.",
            },
            {
              type: "paragraph",
              text: "Past handovers appear under **Shift Handovers**. Select a handover card to expand and read its summary and patient details.",
            },

            { type: "heading", text: "Helpful terms" },
            {
              type: "list",
              items: [
                "**Acknowledge:** Record that an order has been read.",
                "**Handover:** Passing important patient and task information from one shift to the next.",
                "**IPD:** Inpatient Department; patients staying in the hospital.",
                "**STAT:** A priority label for immediate attention under the facility’s policy.",
                "**Investigation:** A requested test or examination, such as a lab test or imaging.",
              ],
            },
          ],
        }
      ),
      page(
        "ot-scheduling",
        "OT Scheduling",
        "Use OT Scheduling to plan surgeries, assign an OT room and surgical team, record pre-operation checks, track progress, and save operation and recovery notes.",
        {
          image: IMG.surgery,
          blocks: [
            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Select **OT Scheduling** from the left-hand menu" },
              ],
            },
            {
              type: "image",
              src: IMG.hospital,
              alt: "OT Scheduling option in the left-hand menu",
              caption: "OT Scheduling in the left-hand menu",
            },
            {
              type: "callout",
              kind: "note",
              text: "OT means Operating Theatre: the room where a surgical procedure takes place.",
            },

            { type: "heading", text: "What this page is for" },
            {
              type: "paragraph",
              text: "Use OT Scheduling to plan surgeries, assign an OT room and surgical team, record pre-operation checks, track progress, and save operation and recovery notes.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the page shows no surgeries for the selected location and date filter, select **Schedule First Surgery** or **Schedule Surgery** to begin.",
            },

            { type: "heading", text: "Understand the summary cards" },
            {
              type: "list",
              items: [
                "**Today Total:** Surgeries scheduled for today.",
                "**In Progress:** Surgeries currently marked as underway.",
                "**Completed Today:** Surgeries marked complete today.",
                "**Upcoming:** Future scheduled surgeries.",
                "**This Month Done:** Surgeries completed this month.",
                "**This Month Hours:** Operation time recorded for the month.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "OT Scheduling summary cards",
              caption: "Summary cards at the top of the page",
            },
            {
              type: "callout",
              kind: "note",
              text: "Use the cards as an operational overview. They depend on schedules and status updates entered in the system.",
            },

            { type: "heading", text: "Schedule a surgery" },
            {
              type: "steps",
              items: [
                { title: "Select **Schedule Surgery**" },
                {
                  title: "Search for and select a registered **Patient**",
                  detail: "Confirm that you have selected the correct patient.",
                },
                {
                  title: "Enter the **Surgery Type / Procedure**",
                  detail: "For example, “Appendectomy” or “Hernia Repair”.",
                },
                { title: "Choose the **OT Room** and **Category**" },
                {
                  title: "Choose a **Priority**: **Routine**, **Urgent**, or **Emergency**",
                  detail: "Use priority according to your hospital’s policy.",
                },
                { title: "Set the **Date**, **Start Time**, and estimated duration" },
                { title: "Select the planned anesthesia type" },
                { title: "Optionally add an estimated cost and **Pre-Op Notes**" },
                { title: "Review the details and select **Schedule Surgery**" },
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Schedule Surgery form with patient, procedure, room, and time",
              caption: "The Schedule Surgery form",
            },
            {
              type: "callout",
              kind: "note",
              text: "Patient, procedure, room, date, and start time are required. The system checks for overlapping bookings in the same room using the scheduled time and estimated duration. If there is a conflict, adjust the room or schedule time before saving.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "The form’s default OT rooms, categories, and anesthesia choices are selection lists. Confirm the details with the clinical and theatre teams before saving.",
            },

            { type: "heading", text: "Search, filter, and switch views" },
            {
              type: "paragraph",
              text: "Use the search box to find schedules by patient, surgery type, or surgeon. Choose a date or select **Today** to filter the list. Select **Clear** to remove a date filter.",
            },
            {
              type: "paragraph",
              text: "Use a status filter to show schedules that are **Scheduled**, **Pre-Op**, **In-Progress**, **Completed**, **Cancelled**, or **Postponed**.",
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Surgery list with search box, date filter, and status filters",
              caption: "The surgery list with search and filters",
            },
            {
              type: "paragraph",
              text: "Select **Calendar** to see schedules in calendar view. The button changes to **List** so you can return to the list. Use **Refresh** to reload schedules and summary cards.",
            },
            {
              type: "image",
              src: IMG.calendar,
              alt: "Surgery schedules in calendar view",
              caption: "Calendar view",
            },
            {
              type: "paragraph",
              text: "Select a schedule card to open its details. The card includes the patient, room, date and time, estimated duration, status, priority, surgeon (when assigned), anesthesia, and checklist progress.",
            },

            { type: "heading", text: "Review schedule details and progress it" },
            {
              type: "paragraph",
              text: "The schedule detail page shows the patient and procedure information, timing, estimated cost, pre-op notes, team, and checklist.",
            },
            {
              type: "image",
              src: IMG.theatre,
              alt: "Surgery schedule details with status actions",
              caption: "Schedule details",
            },
            { type: "paragraph", text: "Use the status actions to record progress:" },
            {
              type: "list",
              items: [
                "**Scheduled:** The operation has been planned.",
                "**Pre-Op:** The team is preparing the patient and checking readiness.",
                "**In-Progress:** The surgery has started. This records the actual start time.",
                "**Completed:** The operation is finished. Complete the completion form to save the end time and operation details.",
                "**Cancelled:** The schedule will not proceed as planned.",
                "**Postponed:** The surgery has been delayed.",
              ],
            },
            {
              type: "callout",
              kind: "note",
              text: "The normal on-screen sequence is **Scheduled**, **Pre-Op**, **In-Progress**, then **Completed**. A schedule in **Scheduled** or **Pre-Op** can also be edited, cancelled, or postponed. Status changes require confirmation.",
            },

            { type: "heading", text: "Complete the pre-operation checklist" },
            {
              type: "paragraph",
              text: "Open **Pre-Op Checklist** in the schedule details. The page records who marked each item and when, and shows overall checklist progress.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Mark an item complete only after it has actually been checked.",
            },
            { type: "paragraph", text: "The checklist includes checks such as:" },
            {
              type: "list",
              items: [
                "Blood work and blood group",
                "Patient and anesthesia consent",
                "Fasting confirmation",
                "Allergy review and imaging availability",
                "Blood arrangements, IV access, and pre-medication",
                "Patient identity and surgical site marking",
              ],
            },
            {
              type: "image",
              src: IMG.mar,
              alt: "Pre-Op Checklist with items and progress",
              caption: "The Pre-Op Checklist",
            },
            {
              type: "paragraph",
              text: "The app warns when checklist items remain incomplete.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Use the hospital’s approved clinical procedures and required sign-offs; the software checklist does not replace them.",
            },

            { type: "heading", text: "Assign the surgical team" },
            {
              type: "steps",
              items: [
                { title: "Open **Team** in the schedule details" },
                {
                  title: "Add each team member’s role, name, and optional phone number",
                  detail: "Roles include Surgeon, Co-Surgeon, Anesthesiologist, OT Nurse, Scrub Nurse, OT Technician, and Other.",
                },
              ],
            },
            {
              type: "image",
              src: IMG.nurse,
              alt: "Team tab with role, name, and phone number fields",
              caption: "The Team tab",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Check spelling and role assignments before saving. Team members can be removed before the surgery is marked **Completed**.",
            },

            { type: "heading", text: "Mark the surgery completed" },
            {
              type: "paragraph",
              text: "When the operation has finished, choose **Complete**. Record the applicable details in the form:",
            },
            {
              type: "list",
              items: [
                "**Operative Notes:** Findings and procedure details.",
                "**Post-Op Notes:** Post-operation care or follow-up notes.",
                "**Complications:** Record “None” or describe what occurred.",
                "**Implants / Materials Used:** Materials used during the operation.",
                "**Post-Op Ward and Bed:** Where the patient is going after surgery.",
                "**Actual Cost:** The recorded actual cost.",
                "**Recovery Notes:** The patient’s condition or notes from recovery.",
              ],
            },
            {
              type: "steps",
              items: [
                { title: "Choose **Complete**" },
                { title: "Record the applicable details in the form" },
                { title: "Review the record, then select **Mark Completed**" },
              ],
            },
            {
              type: "image",
              src: IMG.discharge,
              alt: "Completion form with operative notes, complications, and post-op ward",
              caption: "The completion form",
            },
            {
              type: "callout",
              kind: "note",
              text: "The system records actual end time and calculates actual duration when the surgery was started in EliteHMS.",
            },

            { type: "heading", text: "Use the report" },
            {
              type: "paragraph",
              text: "Select **Report** to open the **OT Utilization Report**. Choose a month to review totals and breakdowns by OT room, procedure type, and surgeon. The report can include scheduled, completed, cancelled, and postponed counts, and operation hours.",
            },
            {
              type: "image",
              src: IMG.charts,
              alt: "OT Utilization Report with breakdowns by room, procedure, and surgeon",
              caption: "The OT Utilization Report",
            },
            {
              type: "callout",
              kind: "note",
              text: "Report figures depend on the statuses and operation details recorded in schedules.",
            },

            { type: "heading", text: "Helpful terms" },
            {
              type: "list",
              items: [
                "**Pre-Op:** Preparation and checks performed before surgery.",
                "**Anesthesia:** Medicine or care used to prevent pain during a procedure.",
                "**Estimated duration:** Planned operation length.",
                "**Actual duration:** Time recorded between starting and completing the surgery in EliteHMS.",
                "**Post-Op:** Care and recovery after surgery.",
                "**OT utilization:** How scheduled operating rooms and time are being used.",
              ],
            },
          ],
        }
      ),
      page(
        "blood-bank",
        "Blood Bank",
        "Use Blood Bank to keep records of blood donors and units, review stock by blood group, track expiry dates, and record when a unit is reserved, issued, or discarded.",
        {
          image: IMG.blood,
          blocks: [
            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Select **Blood Bank** from the left-hand menu" },
              ],
            },
            {
              type: "image",
              src: IMG.hospital,
              alt: "Blood Bank option in the left-hand menu",
              caption: "Blood Bank in the left-hand menu",
            },

            { type: "heading", text: "What this page is for" },
            {
              type: "paragraph",
              text: "Use Blood Bank to keep records of blood donors and units, review stock by blood group, track expiry dates, and record when a unit is reserved, issued, or discarded.",
            },
            {
              type: "callout",
              kind: "note",
              text: "Blood Bank records are scoped to the selected location.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the page shows **0 units available**, no units are currently available in its inventory.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "The **Critical Stock Alert** flags blood groups with fewer than two available units. It is a stock warning, not a clinical recommendation about which blood product to use.",
            },

            { type: "heading", text: "Understand the summary cards" },
            {
              type: "list",
              items: [
                "**Available:** Units currently marked available.",
                "**Reserved:** Units held for a patient.",
                "**Issued Today:** Units issued today.",
                "**Expiring (7d):** Available units with an expiry date within seven days.",
                "**Total Donors:** Active donor records.",
                "**Critical Groups:** Blood groups with fewer than two available units.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Blood Bank summary cards",
              caption: "Summary cards at the top of the page",
            },
            {
              type: "paragraph",
              text: "The inventory overview shows available-unit counts for each blood group and, where present, a breakdown by component.",
            },
            {
              type: "callout",
              kind: "note",
              text: "Reserved, issued, expired, and discarded units are not counted as available stock.",
            },

            { type: "heading", text: "Add a donor" },
            {
              type: "steps",
              items: [
                { title: "Select **Add Donor**" },
                {
                  title: "Enter the donor’s name and select their blood group",
                  detail: "These are required.",
                },
                {
                  title: "Add other details as appropriate",
                  detail: "Gender, age, CNIC, phone, email, address, occupation, and medical history.",
                },
                {
                  title: "If the donor has a disqualifying condition, mark the checkbox and record the reason",
                },
                { title: "Select **Register Donor**" },
              ],
            },
            {
              type: "image",
              src: IMG.donor,
              alt: "Add Donor form with name, blood group, and medical history",
              caption: "The Add Donor form",
            },
            {
              type: "paragraph",
              text: "The **Donors** tab shows donor ID, blood group, donation count, last donation, and an eligibility label. The app uses a 56-day interval after a recorded donation when calculating whether a donor may be eligible again.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Treat the eligibility label as a reminder only: donor screening and eligibility must be assessed by qualified staff under your blood bank’s policy.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Donor medical details are sensitive. Enter them accurately and share them only with staff who are authorized to access them.",
            },

            { type: "heading", text: "Add a blood unit" },
            {
              type: "steps",
              items: [
                { title: "Select **Add Blood Unit**" },
                { title: "Select the **Blood Group**" },
                {
                  title: "Choose a **Component**",
                  detail: "Whole Blood, Packed RBC, Fresh Frozen Plasma, Platelets, Cryoprecipitate, or Single Donor Plasma.",
                },
                {
                  title: "Enter the volume and collection date",
                  detail: "Confirm the **Expiry Date** against the blood bag label and your facility’s validated process.",
                },
                {
                  title: "Choose the source: **Donor**, **External Blood Bank**, or **Replacement**",
                  detail: "If applicable, link the donor or enter the external blood bank name.",
                },
                { title: "Record screening results and whether all required tests are clear" },
                { title: "Add storage location and cost if known" },
                { title: "Review the details and select **Add Blood Unit**" },
              ],
            },
            {
              type: "image",
              src: IMG.sample,
              alt: "Add Blood Unit form with blood group, component, and expiry date",
              caption: "The Add Blood Unit form",
            },
            {
              type: "paragraph",
              text: "The expiry date is prefilled based on the selected component and collection date. The app generates a bag ID for tracking.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Always verify the actual expiry date and storage requirements from the unit label and your facility’s approved procedures before saving or using a unit.",
            },

            { type: "heading", text: "Screening and issuing blood" },
            {
              type: "paragraph",
              text: "In the **Blood Units** tab, search by bag ID, storage location, or patient. Filter by blood group and status to find a specific unit. Unit cards display details such as component, volume, source, donor, storage location, collection and expiry dates, screening status, and current status.",
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Blood Units tab with unit cards and filters",
              caption: "The Blood Units tab",
            },
            { type: "paragraph", text: "To issue a unit:" },
            {
              type: "steps",
              items: [
                { title: "Select **Issue** for an available unit" },
                { title: "Search for and select the registered patient" },
                {
                  title: "Carefully compare the patient and unit details",
                  detail: "The screen warns if their recorded blood groups differ.",
                },
                { title: "Enter the requesting doctor and notes, if applicable" },
                {
                  title: "Confirm that the required cross-match was completed, then select **Issue Blood Unit**",
                },
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Issue Blood Unit form with patient, doctor, and cross-match confirmation",
              caption: "The Issue Blood Unit form",
            },
            {
              type: "paragraph",
              text: "The app records the issue and marks the unit as issued.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "A displayed blood-group match or mismatch is not a compatibility assessment. The app does not replace laboratory testing, professional interpretation, bedside identity checks, or your facility’s transfusion protocol. Do not issue a unit based only on the inventory screen or its warning.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "The system requires the unit’s screening tests to be marked clear before issuing it. Enter test results truthfully; never mark tests clear unless the required results have been verified.",
            },

            { type: "heading", text: "Reservations and other unit actions" },
            {
              type: "paragraph",
              text: "The summary and unit records include a **Reserved** status, and reserved units can be released from the **Blood Units** list.",
            },
            {
              type: "callout",
              kind: "note",
              text: "In the current screen, there is no visible button to create a reservation. If your workflow requires reserving a unit, follow your facility’s approved process and ask your administrator how to record it.",
            },
            {
              type: "list",
              items: [
                "**Release:** Returns a reserved unit to **Available** status. Confirm it is appropriate to release before doing so.",
                "**Discard:** Removes an available or reserved unit from usable inventory and prompts for a reason. Do not discard an issued unit through this workflow.",
                "**Expired:** Indicates an expired unit; it should not be treated as available.",
              ],
            },

            { type: "heading", text: "Inventory Overview, Blood Units, and Donors tabs" },
            {
              type: "list",
              items: [
                "**Inventory Overview:** Stock by blood group and component, units expiring within seven days, and recent activity.",
                "**Blood Units:** Search and filter individual units by status and blood group. Use pagination if there are more results.",
                "**Donors:** Search donor records by name, CNIC, phone, or donor ID. Donor cards show donation history and the app’s eligibility reminder.",
              ],
            },
            {
              type: "image",
              src: IMG.charts,
              alt: "Inventory Overview tab with stock by blood group",
              caption: "The Inventory Overview tab",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Select **Refresh** near the top of the page to reload inventory counts and expiry information.",
            },

            { type: "heading", text: "Helpful terms" },
            {
              type: "list",
              items: [
                "**Blood group:** The ABO and Rh type recorded for a donor or unit, such as A+ or O−.",
                "**Component:** The prepared blood product, such as platelets or packed red cells.",
                "**Cross-match:** Laboratory testing used by qualified staff to assess whether a donor unit is suitable for a specific patient.",
                "**Reserved:** Set aside for a patient but not yet issued.",
                "**Issued:** Recorded as released for a patient.",
                "**Expiry date:** The final date the unit may be used under the applicable storage and blood bank rules.",
              ],
            },
          ],
        }
      ),
      page(
        "radiology",
        "Radiology (PACS-lite)",
        "Radiology lets staff keep an imaging study’s order, uploaded files, written report, and review status together.",
        {
          image: IMG.xray,
          blocks: [
            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Choose the correct location from the top bar" },
                { title: "Select **Radiology** from the left menu" },
              ],
            },
            {
              type: "image",
              src: IMG.hospital,
              alt: "Radiology option in the left menu",
              caption: "Radiology in the left menu",
            },

            { type: "heading", text: "What Radiology is for" },
            {
              type: "paragraph",
              text: "Radiology lets staff keep an imaging study’s order, uploaded files, written report, and review status together.",
            },
            {
              type: "callout",
              kind: "note",
              text: "PACS-lite means a smaller imaging record and workflow; the screen does not establish that EliteHMS replaces a full diagnostic imaging system.",
            },

            { type: "heading", text: "What the page shows" },
            {
              type: "list",
              items: [
                "**Ordered:** Studies that have been requested.",
                "**Images Uploaded:** Studies with files attached.",
                "**Reported:** Studies with a report submitted.",
                "**Verified:** Reports marked as reviewed.",
                "**Critical Pending:** The number of studies flagged as critical and still awaiting verification.",
                "**Today:** Studies dated today.",
                "**Search:** Find a study by patient, study type, radiologist, or study number.",
                "**Status filter:** Narrow the list by its current status.",
                "**Refresh:** Reload the list and counts.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Radiology summary cards, search box, and status filter",
              caption: "Summary cards, search, and status filter",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If a study is missing, check the selected location, clear the search, choose **All Statuses**, and refresh.",
            },

            { type: "heading", text: "Order a study" },
            {
              type: "paragraph",
              text: "Select **Order Study** (or **Order First Study** when the list is empty), then enter the study details:",
            },
            {
              type: "steps",
              items: [
                {
                  title: "Choose the patient",
                  detail: "Confirm the patient’s identity before saving.",
                },
                {
                  title: "Select the modality",
                  detail: "The type of imaging, such as X-ray, ultrasound, CT, or MRI.",
                },
                {
                  title: "Enter the study type and, if applicable, the body part and laterality",
                  detail: "Laterality means left, right, or both sides.",
                },
                {
                  title: "Set the priority: **Routine**, **Urgent**, **STAT**, or **Emergency**",
                  detail: "Use the urgency options according to your facility’s procedure.",
                },
                {
                  title: "Enter the study date, referring doctor, and clinical history/indication",
                  detail: "The indication is the reason for the study.",
                },
                { title: "If contrast is used, mark it and enter the contrast agent" },
                { title: "Add the radiologist and cost if known, then save the order" },
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Order Study form with patient, modality, study type, and priority",
              caption: "The Order Study form",
            },
            {
              type: "callout",
              kind: "note",
              text: "The study receives a study number and starts with the **Ordered** status.",
            },

            { type: "heading", text: "Upload images" },
            {
              type: "paragraph",
              text: "Open a study to view its patient and order details. You can upload files while it is **Ordered** or **In Progress**; after images are uploaded, you can add more files while it is **Images Uploaded**.",
            },
            { type: "paragraph", text: "The upload accepts:" },
            {
              type: "list",
              items: [
                "Image files, PDFs, and `.dcm` files",
                "Up to 10 files per upload",
                "A 20 MB limit per file",
              ],
            },
            {
              type: "image",
              src: IMG.imaging,
              alt: "Study details with the file upload area",
              caption: "Uploading images to a study",
            },
            {
              type: "callout",
              kind: "warning",
              text: "The app provides a study record and file viewing/sharing workflow. The upload accepts DICOM files, but this alone does not confirm a full diagnostic DICOM viewer or complete PACS functionality.",
            },

            { type: "heading", text: "Complete the report" },
            {
              type: "steps",
              items: [
                {
                  title: "Enter the radiologist name, findings, and impression/conclusion",
                  detail: "Technique and recommendation are optional.",
                },
                { title: "Mark **Normal Study** or **Critical Finding** as appropriate" },
                {
                  title: "Submit the report",
                  detail: "A submitted report moves to **Reported**.",
                },
                {
                  title: "An authorized reviewer selects **Verify**",
                  detail: "This marks the report **Verified**.",
                },
              ],
            },
            {
              type: "image",
              src: IMG.report,
              alt: "Report form with findings, impression, and Critical Finding option",
              caption: "The report form",
            },
            {
              type: "callout",
              kind: "warning",
              text: "A critical finding can trigger a notification, so follow your organization’s urgent-result procedure as well.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Check the patient, study, images, and report carefully before reporting or verifying.",
            },

            { type: "heading", text: "Share a report" },
            {
              type: "paragraph",
              text: "For a **Reported** or **Verified** study, select **Share**.",
            },
            {
              type: "steps",
              items: [
                { title: "Choose an expiry of 1, 3, 7, 14, or 30 days" },
                { title: "Generate the link" },
                { title: "Copy it or share it through WhatsApp" },
              ],
            },
            {
              type: "image",
              src: IMG.phone,
              alt: "Share dialog with expiry options and WhatsApp button",
              caption: "Sharing a report",
            },
            {
              type: "paragraph",
              text: "The link opens a read-only view without requiring sign-in and includes the report and uploaded images. You can revoke the link from **Manage Share**.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Anyone with the link can open it until it expires or is revoked. The link contains patient-related information, so share it only with the intended, authorized recipient.",
            },

            { type: "heading", text: "Status meanings" },
            {
              type: "list",
              items: [
                "**Ordered:** The study request has been entered.",
                "**In Progress:** Work on the study has started.",
                "**Images Uploaded:** Files have been attached.",
                "**Reported:** A report has been submitted.",
                "**Verified:** The report has been reviewed and marked verified.",
                "**Cancelled:** The study was cancelled.",
              ],
            },

            { type: "heading", text: "Short definitions" },
            {
              type: "list",
              items: [
                "**Modality:** The kind of imaging used, such as X-ray or MRI.",
                "**Laterality:** Which side of the body is being examined.",
                "**Contrast:** A substance used in some imaging studies to make structures easier to see.",
                "**Findings:** What the radiologist observes in the study.",
                "**Impression:** A short summary or conclusion of the report.",
                "**Verified:** Marked as reviewed in the system.",
              ],
            },
          ],
        }
      ),
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
      page(
        "store-knowledge-base",
        "Store Knowledge Base",
        "This page lets staff add store-specific reference information and ask AI questions about it.",
        {
          image: IMG.robot,
          blocks: [
            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Choose the correct location from the top bar" },
                { title: "Select **My Knowledge Base** from the left menu" },
              ],
            },
            {
              type: "image",
              src: IMG.laptop,
              alt: "My Knowledge Base option in the left menu",
              caption: "My Knowledge Base in the left menu",
            },

            { type: "heading", text: "My Documents" },
            {
              type: "paragraph",
              text: "The **My Documents** tab lists uploaded or pasted documents. Use **Search documents** to find one by its name, medicine name, or description, or use **All Categories** to filter by category.",
            },
            {
              type: "paragraph",
              text: "The summary cards show document count, documents processing, searchable vectors, and storage used. The storage bar shows how many document slots and how much space remain.",
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "My Documents tab with summary cards and storage bar",
              caption: "Summary cards and the storage bar",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the document and storage counts are zero, no store documents have been added yet.",
            },

            { type: "heading", text: "Add a document" },
            {
              type: "steps",
              items: [
                { title: "Select **Add Document**" },
                {
                  title: "Upload a file, or choose **Paste Text** to add written content directly",
                },
                { title: "Provide a document name and choose a category" },
                {
                  title: "Add optional details",
                  detail: "Such as medicine name, tags, source, and description.",
                },
                { title: "Select **Upload & Vectorize** to submit the document" },
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Add Document form with name, category, and file upload",
              caption: "The Add Document form",
            },
            { type: "paragraph", text: "Choose one of these categories:" },
            {
              type: "list",
              items: [
                "**Medicine Info:** Information about medicines your pharmacy stocks.",
                "**Our Services:** Clinic services and packages.",
                "**Our Protocols:** Your clinic’s procedures.",
                "**Guidelines:** Clinical guidelines your team follows.",
                "**Store Information:** Pharmacy details, FAQs, and policies.",
                "**Pricing & Packages:** Service fees and packages.",
                "**General:** Other reference material.",
              ],
            },
            { type: "paragraph", text: "The limits are:" },
            {
              type: "list",
              items: [
                "Files: PDF, DOCX, TXT, MD, and JSON, up to 5 MB each.",
                "Pasted text: up to 5 MB.",
                "Each store: up to 25 documents and 15 MB total storage.",
              ],
            },
            {
              type: "callout",
              kind: "tip",
              text: "For a medicine document, entering the medicine name helps AI find relevant information. Keep the content clear and current; for example, use headings and include the effective date on policies or fee schedules.",
            },

            { type: "heading", text: "Document status" },
            {
              type: "list",
              items: [
                "**Processing:** The document is being prepared for search.",
                "**Ready:** The document is searchable.",
                "**Failed:** Read the error shown beside it, correct the source file or content, and upload it again.",
              ],
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Document list with Processing, Ready, and Failed statuses",
              caption: "Document statuses in the list",
            },
            {
              type: "callout",
              kind: "note",
              text: "A ready document cannot be edited from this list. Delete it and upload the corrected version if you need to replace it. Deleting also removes its searchable vectors.",
            },

            { type: "heading", text: "Ask AI" },
            {
              type: "steps",
              items: [
                { title: "Choose the **Ask AI** tab" },
                {
                  title: "Choose a question type",
                  detail: "See the two types below.",
                },
                { title: "Use a suggested question or type your own, and submit" },
                { title: "Review the answer and its source labels" },
                {
                  title: "Open **View retrieved chunks**",
                  detail: "This shows the pieces of documents used for the answer.",
                },
              ],
            },
            {
              type: "list",
              items: [
                "**General Query:** Ask about your store documents, services, protocols, and other reference information.",
                "**Medicine Lookup:** Enter a medicine name, then ask a related question, such as where the store’s document discusses its information.",
              ],
            },
            {
              type: "image",
              src: IMG.ai,
              alt: "Ask AI tab with General Query, Medicine Lookup, and suggested questions",
              caption: "The Ask AI tab",
            },
            {
              type: "paragraph",
              text: "The page describes a three-stage search:",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "It searches your store’s documents.",
                "Then it searches a global clinical database.",
                "It may also use the AI model’s general training knowledge.",
              ],
            },
            {
              type: "paragraph",
              text: "The answer’s source label indicates which sources contributed.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "If no store document is used, the answer may not reflect your store’s own policy or stock details.",
            },

            { type: "heading", text: "Good information to add" },
            {
              type: "paragraph",
              text: "Useful documents include current opening hours, service fees, store policies, medicine reference notes, and internal procedures.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Avoid uploading information that your team should not make available to the AI query workflow. Keep patient-identifying details out of general reference documents.",
            },

            { type: "heading", text: "Short definitions" },
            {
              type: "list",
              items: [
                "**Vector:** A searchable representation of a small piece of a document that helps AI find relevant information.",
                "**Processing:** The app is preparing the content for search.",
                "**Vectorize:** Convert document content into searchable pieces for AI retrieval.",
                "**Source:** The document or database that contributed information to an answer.",
                "**Global clinical database:** Clinical reference information shared beyond your store’s own documents.",
              ],
            },
          ],
        }
      ),
      page(
        "prescription-ocr",
        "Prescription OCR Scanner",
        "The Prescription OCR Scanner reads a photo of a printed or handwritten prescription and uses Gemini AI to extract details such as the doctor, patient, date, diagnosis, instructions, and medicines.",
        {
          image: IMG.rx,
          blocks: [
            { type: "heading", text: "What this page does" },
            {
              type: "paragraph",
              text: "The scanner can also compare extracted medicine names with your inventory.",
            },
            {
              type: "callout",
              kind: "note",
              text: "OCR means optical character recognition: software reading text from an image.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "The scanner is an assistant for reading the prescription. It does not confirm that the prescription or extracted details are correct.",
            },

            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "In the left menu, select **Rx OCR Scanner**" },
              ],
            },
            {
              type: "image",
              src: IMG.dashboard,
              alt: "Rx OCR Scanner option in the left menu",
              caption: "Rx OCR Scanner in the left menu",
            },

            { type: "heading", text: "Scan a prescription" },
            {
              type: "steps",
              items: [
                {
                  title: "Prepare a clear image of the prescription",
                  detail: "The page accepts image files up to 10 MB.",
                },
                {
                  title: "Drag the image into the upload area, or click the area to choose a file",
                },
                { title: "Check that the preview shows the complete, readable prescription" },
                { title: "Select **Scan with Gemini AI** and wait for the results" },
              ],
            },
            {
              type: "image",
              src: IMG.printer,
              alt: "Upload area with a prescription preview and the Scan with Gemini AI button",
              caption: "Uploading and scanning a prescription",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the result is missing details or the scan fails, try a clearer, well-lit image with the writing in focus.",
            },

            { type: "heading", text: "Read the results" },
            { type: "paragraph", text: "The results may include:" },
            {
              type: "list",
              items: [
                "**Doctor**, **Patient**, **Date**, **Diagnosis**, and **Instructions** when the scanner can read them.",
                "**Medicines found**, with extracted details such as dosage, frequency, duration, route, and notes.",
                "A **confidence** label indicating how certain the scan says it is.",
                "**In Stock** or **Not in inventory** for each medicine.",
                "**Matched in inventory**, which can show possible matching items, stock, unit, and sale price.",
              ],
            },
            {
              type: "image",
              src: IMG.rx,
              alt: "Scan results with medicines, confidence, and inventory matches",
              caption: "Scan results",
            },
            {
              type: "callout",
              kind: "warning",
              text: "A medicine match is only a possible inventory match. Similar names can refer to different products, strengths, or forms.",
            },

            { type: "heading", text: "Use the extracted list" },
            {
              type: "list",
              items: [
                "Select **Copy List** to copy the medicine names and available dosage, frequency, and duration text.",
                "Select **Create Prescription from This** to open the prescription page.",
              ],
            },
            {
              type: "callout",
              kind: "note",
              text: "The OCR page itself does not save a prescription or update inventory. Check the details again in the prescription workflow.",
            },

            { type: "heading", text: "Important safety check" },
            {
              type: "paragraph",
              text: "Before creating or dispensing a prescription:",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Compare the scan with the original image.",
                "Confirm the patient, medicine name, strength, dosage, route, frequency, and duration with the prescribing clinician or authorized staff.",
              ],
            },
            {
              type: "callout",
              kind: "warning",
              text: "Handwriting, blurry photos, abbreviations, and similar medicine names can lead to incorrect readings. Do not use the AI result alone to make treatment decisions.",
            },

            { type: "heading", text: "Helpful definitions" },
            {
              type: "list",
              items: [
                "**Dosage:** How much medicine to take each time.",
                "**Frequency:** How often to take it.",
                "**Duration:** How long to take it.",
                "**Route:** How the medicine is taken, such as by mouth or applied to the skin.",
                "**Confidence:** The scanner’s estimate of how certain its reading is.",
              ],
            },
          ],
        }
      ),
      page(
        "ai-diagnosis",
        "AI Diagnosis Assistant",
        "The AI Diagnosis Assistant provides clinical decision support based on the case details entered.",
        {
          image: IMG.ai,
          blocks: [
            { type: "heading", text: "What this page does" },
            {
              type: "paragraph",
              text: "It can suggest possible diagnoses, investigations, treatment guidelines, red flags, and specialist referral advice. The page describes it as Gemini AI-powered and Pakistan-focused.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "It does not diagnose or treat patients. A licensed physician must examine the patient, verify the information, and make all clinical decisions.",
            },

            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "In the left menu, select **AI Diagnosis**" },
              ],
            },
            {
              type: "image",
              src: IMG.dashboard,
              alt: "AI Diagnosis option in the left menu",
              caption: "AI Diagnosis in the left menu",
            },

            { type: "heading", text: "Enter a case" },
            {
              type: "paragraph",
              text: "Complete the relevant fields as accurately as possible:",
            },
            {
              type: "list",
              items: [
                "**Patient Details:** Age is required; gender is selectable; name is optional.",
                "**Chief Complaint:** Describe the main problem. This is required.",
                "**Duration:** How long the problem has been present.",
                "**Symptoms:** Select symptoms under the available body-system tabs, or add a custom symptom. At least one symptom is required.",
                "**Vitals:** Optional measurements include blood pressure, pulse, temperature, oxygen level (SpO₂), blood sugar (RBS), and weight. Enter current, correctly measured values.",
                "**Lab Results:** Add relevant test results if available.",
                "**Existing Conditions:** Select listed conditions or add another.",
                "**Current Medications:** Enter medicines separated by commas.",
                "**Allergies:** Enter known allergies or relevant allergy information.",
                "**Additional History:** Include useful family, social, travel, occupation, or risk-factor details.",
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Case form with patient details, chief complaint, symptoms, and vitals",
              caption: "The case form",
            },
            {
              type: "image",
              src: IMG.vitals,
              alt: "Symptom body-system tabs and vitals fields",
              caption: "Symptoms and vitals",
            },
            {
              type: "steps",
              items: [
                {
                  title: "Complete the required fields",
                  detail: "The system requires age, chief complaint, and at least one symptom.",
                },
                { title: "Select **Analyze with AI — Get Differential Diagnoses**" },
              ],
            },

            { type: "heading", text: "Understand the results" },
            { type: "paragraph", text: "The result page may include:" },
            {
              type: "list",
              items: [
                "**Confidence level and summary:** The AI’s confidence estimate and short overview.",
                "**Red Flags:** Symptoms the assistant marks for urgent attention.",
                "**Differential Diagnoses:** Possible explanations, ranked by estimated probability, with reasoning and supporting or opposing details.",
                "**Recommended Investigations:** Possible tests, their rationale, and priority.",
                "**Treatment Plan:** Suggested immediate actions, medicines, non-medicine measures, and follow-up guidance.",
                "**Referral:** The assistant may suggest a specialist and urgency.",
                "**Pakistan-Specific Notes** and **Clinical Pearls:** Additional context that may be relevant to the case.",
              ],
            },
            {
              type: "image",
              src: IMG.report,
              alt: "Results with red flags, differential diagnoses, and recommended investigations",
              caption: "The results page",
            },
            {
              type: "callout",
              kind: "note",
              text: "The confidence level is not a measure of clinical certainty.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Assess red flags promptly; do not rely on the AI to rule out an emergency.",
            },
            {
              type: "callout",
              kind: "note",
              text: "A differential is a list of possibilities, not a final diagnosis.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Review every recommendation against the patient’s examination, history, current guidelines, allergies, medicines, and local availability before acting. Do not copy an AI medication suggestion into a prescription without clinician review.",
            },

            { type: "heading", text: "Ask a follow-up question" },
            {
              type: "paragraph",
              text: "In **Ask a Follow-up Question**, ask for clarification about the case, for example, how a provided allergy or pregnancy status could affect the discussion.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "The response is AI-generated and must be checked by the clinician, just like the initial analysis.",
            },

            { type: "heading", text: "View previous sessions" },
            {
              type: "steps",
              items: [
                { title: "Select **History** to view recent diagnosis sessions" },
                { title: "Select a session to reopen its analysis" },
              ],
            },
            {
              type: "paragraph",
              text: "You can delete a session from the history list; the page asks for confirmation first. Select **New Case** to return to the form and start another analysis.",
            },
            {
              type: "image",
              src: IMG.records,
              alt: "History list of previous diagnosis sessions",
              caption: "Previous sessions in History",
            },

            { type: "heading", text: "Helpful definitions" },
            {
              type: "list",
              items: [
                "**Clinical decision support:** Information intended to assist a clinician’s judgment.",
                "**Differential diagnosis:** A set of possible causes being considered.",
                "**Red flag:** A sign or symptom that may need urgent assessment.",
                "**Confidence level:** The AI’s estimate of certainty; it does not confirm that an answer is correct.",
                "**SpO₂:** The measured oxygen level in the blood.",
                "**RBS:** Random blood sugar measurement.",
              ],
            },

            { type: "heading", text: "Safety reminder" },
            {
              type: "callout",
              kind: "warning",
              text: "For an emergency, prioritize immediate patient stabilization and urgent in-person care. Always perform a complete physical examination. Final diagnosis and treatment decisions must be made by a licensed physician.",
            },
          ],
        }
      ),
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
      page(
        "accounting-finance",
        "Accounting & Finance",
        "This page brings together sales and collection figures, recorded expenses, estimated medicine margins, yearly trends, and an FBR/GST summary.",
        {
          image: IMG.finance,
          blocks: [
            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Select the correct location from the top bar" },
                { title: "Choose **Accounting** from the left menu" },
              ],
            },
            {
              type: "image",
              src: IMG.dashboard,
              alt: "Accounting option in the left menu",
              caption: "Accounting in the left menu",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the displayed month shows zero values, there are no recorded bills or expenses for that month at the selected location.",
            },

            { type: "heading", text: "Select a reporting period" },
            {
              type: "paragraph",
              text: "Use the month selector in the top right to change the month. The **P&L**, **Expenses**, **Medicine Margins**, and **FBR / Tax** sections use the selected month. In **Yearly Trend**, choose a year instead.",
            },
            {
              type: "paragraph",
              text: "The four summary cards show this month’s **Revenue**, **Expenses**, **Profit**, and **Collected** amount. The page compares revenue, expenses, and profit with the previous month when comparison data is available.",
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Month selector and the four summary cards",
              caption: "Month selector and summary cards",
            },

            { type: "heading", text: "P&L Statement" },
            { type: "paragraph", text: "The **Profit & Loss Statement** tab summarizes:" },
            {
              type: "list",
              items: [
                "**Gross Revenue:** Total bill amounts recorded in the selected month.",
                "**Discounts:** Discounts recorded on those bills.",
                "**Net Revenue:** Gross revenue after discounts.",
                "**Cost of Goods Sold (COGS):** Estimated cost of the medicines sold.",
                "**Gross Profit:** Net revenue less medicine cost.",
                "**Operating Expenses:** Expenses entered for the selected month.",
                "**Net Profit:** Gross profit less operating expenses.",
                "**Payment Collection:** Amount collected, grouped by payment method, plus outstanding balances.",
              ],
            },
            {
              type: "image",
              src: IMG.receipt,
              alt: "Profit & Loss Statement with gross revenue, COGS, and net profit",
              caption: "The Profit & Loss Statement",
            },
            {
              type: "paragraph",
              text: "The chart groups expenses by category. **Export Excel** downloads a workbook containing the P&L and, when available, medicine margin details.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "COGS is estimated using each medicine’s current purchase price and quantity sold. It may differ from accounting figures prepared using historical purchase costs or other accounting methods.",
            },

            { type: "heading", text: "Expenses" },
            {
              type: "paragraph",
              text: "Choose **Expenses** to review entries for the selected month. You can filter by category, use the page controls to browse entries, and export the displayed expenses to Excel.",
            },
            { type: "paragraph", text: "To add an expense, choose **Add Expense** and enter:" },
            {
              type: "steps",
              items: [
                { title: "**Category** and **Title / Description**" },
                { title: "**Amount** and **Date**" },
                {
                  title: "Payment method",
                  detail: "Cash, Bank Transfer, Cheque, JazzCash, EasyPaisa, or Other.",
                },
                { title: "Vendor/supplier, invoice number, and reference or cheque number if available" },
                {
                  title: "If applicable, select **GST Applicable (FBR)**",
                  detail: "Enter the GST rate and vendor NTN. The form shows the GST amount and total with GST.",
                },
                {
                  title: "Add notes if needed",
                  detail: "The form also has a **Recurring expense** option with Monthly, Quarterly, or Yearly cycles.",
                },
                { title: "Select **Add Expense** to save it" },
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Add Expense form with category, amount, payment method, and GST options",
              caption: "The Add Expense form",
            },
            {
              type: "paragraph",
              text: "Existing entries can be edited or deleted from the **Expenses** list.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Keep invoices and payment evidence according to your organization’s recordkeeping process.",
            },

            { type: "heading", text: "Medicine Margins" },
            {
              type: "paragraph",
              text: "This tab analyzes medicines sold during the selected month. It shows revenue, quantity sold, average selling price, purchase price, COGS, gross profit, and margin percentage. A chart highlights the top medicines by revenue.",
            },
            {
              type: "image",
              src: IMG.charts,
              alt: "Medicine Margins table and top medicines chart",
              caption: "The Medicine Margins tab",
            },
            {
              type: "paragraph",
              text: "Use these figures to compare recorded sales with estimated product costs.",
            },
            {
              type: "callout",
              kind: "note",
              text: "Margin results depend on the purchase prices stored for the medicines.",
            },

            { type: "heading", text: "Yearly Trend" },
            {
              type: "paragraph",
              text: "Select **Yearly Trend** and choose a year to compare monthly revenue, collections, expenses, profit, bill count, and margin. The chart and table make it easier to spot changes across months.",
            },
            {
              type: "image",
              src: IMG.office,
              alt: "Yearly Trend chart and table",
              caption: "The Yearly Trend tab",
            },

            { type: "heading", text: "FBR / Tax" },
            {
              type: "paragraph",
              text: "The **FBR / Tax** tab shows a GST summary for the selected month, including output tax from bills, input tax from GST-marked expenses, the calculated net amount payable or excess credit, and vendor-wise expense tax information. **Export for FBR** downloads the summary to Excel.",
            },
            {
              type: "image",
              src: IMG.payment,
              alt: "FBR / Tax tab with GST summary and Export for FBR button",
              caption: "The FBR / Tax tab",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Treat this as a preparation summary, not a tax filing or confirmation of tax liability. Check the figures, invoices, rates, and current requirements with your accountant or tax adviser before submitting anything to FBR.",
            },

            { type: "heading", text: "Short definitions" },
            {
              type: "list",
              items: [
                "**Revenue:** The amount billed for sales.",
                "**Collected:** The amount of bill payments received.",
                "**Outstanding:** The amount still unpaid on bills.",
                "**COGS:** The estimated cost of the products sold.",
                "**Gross profit:** Revenue after discounts, minus the estimated product cost.",
                "**Net profit:** Gross profit after recorded operating expenses.",
                "**Margin:** Profit shown as a percentage of revenue.",
                "**GST:** Goods and Services Tax.",
                "**NTN:** National Tax Number.",
                "**Recurring expense:** An expense marked as repeating.",
              ],
            },
            {
              type: "callout",
              kind: "note",
              text: "The form records a recurring cycle, so check the expense list to confirm future entries are recorded.",
            },
          ],
        }
      ),
      page(
        "insurance-panels",
        "Insurance & Panel Management",
        "This page records insurance companies or other payment panels, links patients to a panel, and tracks claims and payments.",
        {
          image: IMG.payment,
          blocks: [
            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Select the correct location from the top bar" },
                { title: "Choose **Insurance** from the left menu" },
              ],
            },
            {
              type: "image",
              src: IMG.dashboard,
              alt: "Insurance option in the left menu",
              caption: "Insurance in the left menu",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If there are no panels or claims yet, the summary cards show zero values. Start with **Add Panel**.",
            },

            { type: "heading", text: "What the summary cards show" },
            {
              type: "list",
              items: [
                "**Active Panels:** Panels available for use.",
                "**Insured Patients:** Patients linked to an insurance panel.",
                "**Pending Claims:** Claims in **Submitted** or **Under Review** status.",
                "**Outstanding:** The unpaid balance on approved or partially approved claims.",
                "**Paid This Month:** Insurance payments marked as paid during the current month.",
                "**Total Claims:** All recorded claims.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Insurance summary cards",
              caption: "Summary cards at the top of the page",
            },

            { type: "heading", text: "Add a panel" },
            {
              type: "steps",
              items: [
                { title: "Select **Add Panel**" },
                {
                  title: "Enter the panel’s details",
                  detail: "**Panel / Company Name** and **Type** are required.",
                },
                { title: "Save the panel" },
              ],
            },
            { type: "paragraph", text: "The form also lets you record:" },
            {
              type: "list",
              items: [
                "**Category**, such as Health Insurance, EOBI, PESSI, or Corporate HR.",
                "Coverage type, percentage paid by insurance, and the patient’s co-pay percentage.",
                "Maximum claim per bill and annual limit per patient.",
                "Covered services, such as medicines, consultations, lab tests, radiology, IPD, OPD, surgery, or emergency care.",
                "Contact person, phone, email, city, agreement or policy number, agreement date, and expiry date.",
                "Payment terms and how claims are submitted: online portal, email, physical, WhatsApp, or another method.",
                "Portal address, NTN, and notes where relevant.",
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Add Panel form with coverage, limits, and covered services",
              caption: "The Add Panel form",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Use the actual agreement terms when entering coverage and limits.",
            },
            {
              type: "paragraph",
              text: "The panel card can show expiry reminders, coverage, permitted services, claims, amounts claimed and paid, and payment/submission terms. You can edit a panel later.",
            },
            {
              type: "callout",
              kind: "note",
              text: "A panel cannot be deleted while it has claims recorded against it.",
            },

            { type: "heading", text: "Link a patient to a panel" },
            {
              type: "steps",
              items: [
                { title: "Select **Link Patient**" },
                { title: "Search for the patient" },
                { title: "Choose the panel" },
                { title: "Enter the policy/member number and coverage expiry date" },
              ],
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Link Patient form with patient, panel, and policy number",
              caption: "The Link Patient form",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Confirm the patient’s identity and policy details before linking.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "A patient record stores one linked panel at a time. Linking a different panel updates the patient’s current insurance details, so check the existing panel before changing it.",
            },

            { type: "heading", text: "Create a claim" },
            {
              type: "steps",
              items: [
                {
                  title: "Select **New Claim**",
                  detail: "Choose the patient, panel, and total bill amount. The patient should already have the relevant insurance information recorded.",
                },
                {
                  title: "Review the calculation",
                  detail: "The page calculates an estimated insurance portion and patient portion using the panel’s coverage percentage and maximum claim per bill.",
                },
                {
                  title: "Indicate whether pre-authorization is required",
                  detail: "If it is, enter its reference number.",
                },
                { title: "Add submission notes" },
                { title: "Select **Create Claim**" },
              ],
            },
            {
              type: "image",
              src: IMG.receipt,
              alt: "New Claim form with estimated insurance and patient portions",
              caption: "The New Claim form",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Review the calculation against the insurer’s policy and bill before selecting **Create Claim**.",
            },
            {
              type: "callout",
              kind: "note",
              text: "Creating a claim records it in EliteHMS; it does not submit it to the insurer. Follow the panel’s submission method and update the claim status when you receive a response.",
            },

            { type: "heading", text: "Track a claim" },
            {
              type: "paragraph",
              text: "In the **Claims** tab, search by claim number, patient, or bill; filter by panel or status; and select **Update Status** to record progress:",
            },
            {
              type: "list",
              items: [
                "**Draft:** Claim record created.",
                "**Submitted:** Sent to the insurer or panel.",
                "**Under Review:** Waiting for the insurer’s decision.",
                "**Approved** or **Partially Approved:** The insurer approved all or part of the claim.",
                "**Rejected:** The insurer declined it.",
                "**Appealed:** A challenge or appeal has been recorded.",
                "**Paid:** Payment received and recorded.",
              ],
            },
            {
              type: "image",
              src: IMG.finance,
              alt: "Claims tab with search, filters, and the Update Status button",
              caption: "The Claims tab",
            },
            {
              type: "paragraph",
              text: "When updating a claim, record the approved amount, amount received, insurer’s reference number, cheque or transfer number, and notes as applicable.",
            },
            {
              type: "callout",
              kind: "note",
              text: "Only draft claims can be deleted.",
            },

            { type: "heading", text: "Reports" },
            {
              type: "paragraph",
              text: "Open the **Report** tab to review totals claimed, approved, paid, and pending payment; panel performance; and claims grouped by status.",
            },
            {
              type: "image",
              src: IMG.charts,
              alt: "Report tab with panel performance and claims by status",
              caption: "The Report tab",
            },
            {
              type: "callout",
              kind: "note",
              text: "These totals depend on claim records and statuses entered in the system.",
            },

            { type: "heading", text: "Short definitions" },
            {
              type: "list",
              items: [
                "**Panel:** An insurer, employer, or program that may cover eligible patient costs.",
                "**Coverage percentage:** The share of eligible costs assigned to insurance under the panel settings.",
                "**Co-pay:** The share assigned to the patient under those settings.",
                "**Pre-authorization:** Approval requested from the insurer before providing certain services.",
                "**Claim:** A request for reimbursement or payment sent to an insurer or panel.",
                "**Outstanding:** The approved amount that has not yet been recorded as paid.",
                "**TPA:** Third-party administrator; an organization that manages insurance claims for an insurer or employer.",
              ],
            },
          ],
        }
      ),
      page(
        "salary-payroll",
        "Salary & Payroll",
        "This page helps you keep employee salary profiles, monthly payroll records, staff advances, and yearly totals.",
        {
          image: IMG.staff,
          blocks: [
            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "Select the correct location from the top bar" },
                { title: "Choose **Payroll** from the left menu" },
              ],
            },
            {
              type: "image",
              src: IMG.dashboard,
              alt: "Payroll option in the left menu",
              caption: "Payroll in the left menu",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the selected month shows no payroll records, start by adding employee profiles.",
            },

            { type: "heading", text: "Summary cards" },
            {
              type: "list",
              items: [
                "**Total Employees:** Employees with active salary profiles.",
                "**This Month Total:** Net payroll recorded for the current month.",
                "**Paid:** Payroll records marked as paid.",
                "**Pending:** Payroll records not yet marked as paid.",
                "**Advances Outstanding:** The remaining balances on staff advances.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Payroll summary cards",
              caption: "Summary cards at the top of the page",
            },

            { type: "heading", text: "1. Add employee salary profiles" },
            {
              type: "steps",
              items: [
                { title: "Open **Employee Profiles** and choose **Add Profile**" },
                {
                  title: "Select an existing staff member",
                  detail: "This form creates a salary profile for that person, not a new staff account.",
                },
                {
                  title: "Enter their basic salary",
                  detail: "And, if applicable, designation, department, employee code, joining date, employment type, and bank details.",
                },
                {
                  title: "Add allowances such as housing, medical, transport, or bonus",
                  detail: "An allowance can be a fixed amount or a percentage of basic salary. The form previews gross monthly salary.",
                },
                {
                  title: "Choose whether to deduct EOBI and income tax",
                  detail: "You can also enter a leave balance and notes.",
                },
                { title: "Save the profile" },
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Add Profile form with basic salary, allowances, and deductions",
              caption: "The Add Profile form",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Check every salary, deduction, and bank detail before saving. Profile information can be edited later.",
            },

            { type: "heading", text: "2. Generate monthly payroll" },
            {
              type: "steps",
              items: [
                { title: "Go to **Monthly Payroll** and select the month" },
                { title: "Choose **Generate Payroll**" },
                {
                  title: "Review each employee’s record before paying",
                  detail: "If needed, select **Adjust** to enter days absent, overtime hours, bonuses, and notes.",
                },
              ],
            },
            {
              type: "paragraph",
              text: "Payroll is created for active staff who have active salary profiles. The system creates draft records using each profile’s basic salary, allowances, selected deductions, and any monthly advance recovery. The generated record starts with the default 26 working days and no absences.",
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Monthly Payroll table with Generate Payroll and Adjust buttons",
              caption: "The Monthly Payroll tab",
            },
            {
              type: "paragraph",
              text: "When you adjust a record, the system recalculates gross pay and deductions.",
            },
            {
              type: "callout",
              kind: "note",
              text: "Paid records cannot be edited. If a record already exists for that employee and month, generating again skips it. To make a correction after generation, adjust the existing unpaid record.",
            },

            { type: "heading", text: "3. Review and mark payment" },
            {
              type: "paragraph",
              text: "The monthly table shows each employee’s basic pay, allowances, gross salary, absences, deductions, net salary, and status.",
            },
            {
              type: "list",
              items: [
                "**Draft:** Payroll record created.",
                "**Processed:** Record adjusted or updated.",
                "**Paid:** Marked as paid in EliteHMS.",
              ],
            },
            {
              type: "steps",
              items: [
                { title: "Confirm the payment has happened" },
                {
                  title: "Use the employee’s **Mark Paid** button",
                  detail: "The app asks for a payment method.",
                },
              ],
            },
            {
              type: "image",
              src: IMG.payment,
              alt: "Mark Paid dialog with a payment method",
              caption: "Marking a record as paid",
            },
            {
              type: "callout",
              kind: "note",
              text: "**Mark All Paid** marks all unpaid records for the selected month as paid and records the payment method as **Cash**.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "These actions update payroll records; they do not send money or make a bank transfer. Confirm the real payment has happened before marking it paid.",
            },

            { type: "heading", text: "Payslips" },
            {
              type: "paragraph",
              text: "Select the payslip icon in an employee’s row to preview a payslip. It includes employee and period details, earnings, deductions, net salary, and signature lines. You can print it or share its details through WhatsApp.",
            },
            {
              type: "image",
              src: IMG.receipt,
              alt: "Payslip preview with earnings, deductions, and net salary",
              caption: "A payslip preview",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Confirm the recipient before sharing salary information.",
            },

            { type: "heading", text: "Advances" },
            {
              type: "steps",
              items: [
                { title: "Open **Advances** and choose **Record Advance**" },
                { title: "Select the employee" },
                {
                  title: "Enter the amount, date, and reason",
                  detail: "You can also add an optional monthly recovery amount, approver, and notes.",
                },
              ],
            },
            {
              type: "image",
              src: IMG.finance,
              alt: "Advances tab with original amount, amount repaid, and remaining balance",
              caption: "The Advances tab",
            },
            {
              type: "paragraph",
              text: "Outstanding advances can be included in monthly payroll recovery according to the monthly deduction entered. When the payroll record is marked paid, the recovered amount is applied to the advance balance. The **Advances** tab shows the original amount, amount repaid, remaining balance, and repayment status.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "An advance record can be deleted from this tab; check it carefully before removal.",
            },

            { type: "heading", text: "Annual Summary" },
            {
              type: "paragraph",
              text: "Choose **Annual Summary** and select a year to review each employee’s monthly payroll records and yearly totals. The summary shows gross pay, deductions, net pay, tax, EOBI, advances deducted, and bonuses. Months marked paid appear differently from unpaid records.",
            },
            {
              type: "image",
              src: IMG.charts,
              alt: "Annual Summary with each employee’s monthly payroll and yearly totals",
              caption: "The Annual Summary tab",
            },

            { type: "heading", text: "Important notes" },
            {
              type: "callout",
              kind: "warning",
              text: "Income tax and statutory deductions shown by the system are calculated estimates based on its configured payroll rules. Verify them against current requirements and your organization’s payroll advice before finalizing pay.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Salary, bank, tax, and payslip details are sensitive. Limit access and sharing to authorized people.",
            },

            { type: "heading", text: "Short definitions" },
            {
              type: "list",
              items: [
                "**Basic salary:** The employee’s base pay before allowances and deductions.",
                "**Allowance:** Extra pay added to basic salary, either as a fixed amount or percentage.",
                "**Gross salary:** Basic salary plus allowances, overtime, and bonuses.",
                "**Deduction:** An amount subtracted from gross salary.",
                "**Net salary:** The amount remaining after deductions.",
                "**EOBI:** Employees’ Old-Age Benefits Institution contribution.",
                "**Advance recovery:** A portion of a previous staff advance deducted from salary.",
                "**Processed:** A payroll record that has been prepared or adjusted.",
                "**Paid:** The record has been marked paid in the app.",
              ],
            },
          ],
        }
      ),
      page(
        "whatsapp-sms-broadcast",
        "WhatsApp & SMS Broadcast",
        "Use WhatsApp & SMS Broadcast to prepare a message for a group of patients, such as an appointment reminder or a general health tip.",
        {
          image: IMG.phone,
          blocks: [
            { type: "heading", text: "What this page does" },
            {
              type: "paragraph",
              text: "You choose who should receive the message, write it, review the recipient count, then open WhatsApp or the phone’s SMS app to send it.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "The app prepares messages and keeps a sending checklist. It does not automatically send them or confirm delivery. Staff send each message and then update its status in EliteHMS.",
            },

            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "In the left menu, select **Broadcast**" },
              ],
            },
            {
              type: "image",
              src: IMG.dashboard,
              alt: "Broadcast option in the left menu",
              caption: "Broadcast in the left menu",
            },

            { type: "heading", text: "What you see on the page" },
            {
              type: "list",
              items: [
                "**Total Campaigns:** Broadcasts created.",
                "**Completed:** Campaigns where all recipients have been processed.",
                "**In Progress:** Campaigns that still have recipients to process.",
                "**Total Messages Sent:** Messages staff marked as **Sent** in EliteHMS.",
                "**Campaign Ideas:** Examples such as appointment reminders, health tips, Eid greetings, and messages for patients with outstanding balances.",
                "**New Broadcast:** Opens the form to prepare a campaign.",
                "**Refresh:** Reloads the campaign list and counts.",
                "**No broadcasts yet:** Appears until the first campaign is created.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Broadcast summary cards and campaign ideas",
              caption: "Summary cards and campaign ideas",
            },
            {
              type: "callout",
              kind: "note",
              text: "**Total Messages Sent** is a tracking count, not a delivery receipt from WhatsApp or a mobile network.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "The idea buttons are suggestions to start from. Review the audience and message in the campaign form before creating anything.",
            },

            { type: "heading", text: "Create a broadcast" },
            {
              type: "paragraph",
              text: "Select **New Broadcast** or **Create First Broadcast**. The form has three steps.",
            },
            { type: "subheading", text: "1. Choose the campaign and audience" },
            {
              type: "paragraph",
              text: "Give the campaign a clear title, choose a channel, and select a **Target Audience**, the group of patients you want to contact. Available audience filters include:",
            },
            {
              type: "list",
              items: [
                "**All Active Patients**",
                "**By Medical Condition:** Enter a keyword such as diabetes or asthma.",
                "**Not Seen in X Days:** Choose how many days since a completed appointment.",
                "**By City**",
                "**By Blood Group**",
                "**By Age Range**",
                "**Have Outstanding Balance:** Set a minimum balance.",
                "**Upcoming Appointments (next 48h)**",
                "**Insured Patients**",
                "**Custom Search:** Search patient details such as name, phone, city, or patient ID.",
              ],
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Target Audience filters and the recipient preview",
              caption: "Choosing the audience",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Check the recipient preview and sample recipients. Confirm that the people and phone numbers are appropriate before moving on.",
            },
            {
              type: "callout",
              kind: "note",
              text: "Patients need a phone number for the message workflow.",
            },

            { type: "subheading", text: "2. Write the message" },
            {
              type: "paragraph",
              text: "Choose a quick template or write your own. Templates include appointment reminders, health tips, and refill reminders.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Read and edit template text before sending.",
            },
            {
              type: "paragraph",
              text: "You can personalize messages with these variables:",
            },
            {
              type: "list",
              items: [
                "**{name}:** Patient’s full name.",
                "**{firstName}:** Patient’s first name.",
                "**{storeName}:** Clinic or store name.",
                "**{city}:** Patient’s city.",
                "**{bloodGroup}:** Blood group.",
                "**{patientId}:** Patient ID.",
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Message form with templates, variables, and a preview",
              caption: "Writing the message",
            },
            {
              type: "paragraph",
              text: "The preview shows an example of how the message may look. Check the actual wording, spelling, dates, and contact details before continuing.",
            },

            { type: "subheading", text: "3. Review and create" },
            {
              type: "steps",
              items: [
                {
                  title: "Review the campaign details",
                  detail: "Title, channel, audience, recipient count, skipped count, and message preview. If anything is wrong, go back and edit it.",
                },
                { title: "Select **Create & Start Sending**" },
              ],
            },
            {
              type: "paragraph",
              text: "The campaign will appear in the campaign list, where you can choose **Start Sending** or **Continue Sending**.",
            },

            { type: "heading", text: "Send and track messages" },
            {
              type: "paragraph",
              text: "Open a campaign to see its recipients and sending progress. For each person:",
            },
            {
              type: "steps",
              items: [
                { title: "Check the patient name, number, and personalized message" },
                { title: "Select **Open in WhatsApp** or **Open in SMS**" },
                {
                  title: "Press **Send** in WhatsApp or SMS yourself",
                  detail: "The selected app opens with the message prepared.",
                },
                {
                  title: "Return to EliteHMS and mark the message **Sent**",
                  detail: "Only after you have sent it.",
                },
                {
                  title: "If you do not send it, choose **Skip**",
                  detail: "Use **Mark as Failed** if sending failed.",
                },
              ],
            },
            {
              type: "image",
              src: IMG.email,
              alt: "Campaign recipients with Open in WhatsApp and Open in SMS buttons",
              caption: "Sending to each recipient",
            },
            {
              type: "paragraph",
              text: "WhatsApp and SMS are handled through the apps on your device.",
            },
            {
              type: "callout",
              kind: "note",
              text: "The system’s **Sent** status is a record entered by staff; it does not verify that the recipient received or read the message.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "The **Mark All Sent** button updates all remaining recipients at once, so use it only after you have actually sent those messages.",
            },
            {
              type: "paragraph",
              text: "The campaign list shows its status and progress. You can refresh the page, cancel an eligible campaign, or open a completed campaign’s report. The recipient list lets you review **Pending**, **Sent**, **Failed**, and **Skipped** entries.",
            },
            {
              type: "image",
              src: IMG.charts,
              alt: "Campaign report with Pending, Sent, Failed, and Skipped counts",
              caption: "A campaign report",
            },

            { type: "heading", text: "Helpful definitions" },
            {
              type: "list",
              items: [
                "**Campaign:** One prepared message sent to a selected group.",
                "**Audience:** The patients selected to receive the campaign.",
                "**Template:** A reusable example message that you can edit.",
                "**Variable:** A placeholder such as {firstName} that is filled with patient information.",
                "**Pending:** Not yet marked as sent, failed, or skipped.",
                "**Skipped:** Not sent to that recipient.",
                "**Failed:** Staff recorded that sending did not succeed.",
              ],
            },

            { type: "heading", text: "Good practice" },
            {
              type: "list",
              items: [
                "Choose only the patients who need the message.",
                "Check that the patient’s contact details are correct.",
              ],
            },
            {
              type: "callout",
              kind: "warning",
              text: "Keep health messages general and respectful of patient privacy; avoid putting sensitive medical details in a group message.",
            },
            {
              type: "callout",
              kind: "warning",
              text: "Review health advice carefully and have a qualified clinician approve it when needed. Follow your clinic’s consent and communication rules.",
            },
          ],
        }
      ),
      page(
        "patient-feedback",
        "Patient Feedback & Ratings",
        "Use Patient Feedback & Ratings to invite patients to rate a visit, read their feedback, and review satisfaction ratings for doctors and staff.",
        {
          image: IMG.reception,
          blocks: [
            { type: "heading", text: "What this page does" },
            {
              type: "paragraph",
              text: "Patients open a personal feedback link and submit their rating. The page then summarizes the reviews for your clinic.",
            },

            { type: "heading", text: "How to find this page" },
            {
              type: "steps",
              items: [
                { title: "Sign in to EliteHMS" },
                { title: "In the left menu, select **Feedback**" },
              ],
            },
            {
              type: "image",
              src: IMG.dashboard,
              alt: "Feedback option in the left menu",
              caption: "Feedback in the left menu",
            },

            { type: "heading", text: "What you see" },
            { type: "paragraph", text: "The top cards show:" },
            {
              type: "list",
              items: [
                "**Overall Rating:** Average overall patient rating out of 5.",
                "**Total Reviews:** Feedback forms submitted.",
                "**Flagged:** Reviews marked for follow-up.",
                "**Doctor Rating:** Average doctor rating.",
                "**Staff Rating:** Average staff rating.",
                "**Wait Time Rating:** Average wait-time rating.",
              ],
            },
            {
              type: "image",
              src: IMG.analytics,
              alt: "Patient feedback summary cards",
              caption: "Summary cards at the top of the page",
            },
            {
              type: "callout",
              kind: "tip",
              text: "If the page shows 0 reviews and ratings of 0/5, these will change after patients submit feedback.",
            },
            {
              type: "paragraph",
              text: "Select **Refresh** to reload the counts and reviews. Use the tabs to explore the information:",
            },
            {
              type: "list",
              items: [
                "**Overview:** Summary and recent feedback highlights.",
                "**Reviews:** Individual reviews, with search and filters.",
                "**Doctors:** Ratings grouped by doctor.",
                "**Trend:** Monthly satisfaction ratings over time.",
              ],
            },

            { type: "heading", text: "Generate and send a feedback link" },
            {
              type: "steps",
              items: [
                { title: "Select **Generate Feedback Link**" },
                { title: "Search for a patient and select the correct record" },
                {
                  title: "If available, link the request to a completed appointment",
                  detail: "You can leave it as **General feedback** instead.",
                },
                { title: "Enter or confirm the doctor’s name" },
                {
                  title: "Choose how long the link stays valid",
                  detail: "3, 7, 14, or 30 days.",
                },
                { title: "Select **Generate Link**" },
                {
                  title: "Send the link",
                  detail: "Use **Send via WhatsApp**, or select **Copy** and share it through another approved channel.",
                },
                {
                  title: "Use **Preview Form** to see what the patient will see",
                },
              ],
            },
            {
              type: "image",
              src: IMG.form,
              alt: "Generate Feedback Link form with patient, doctor, and validity",
              caption: "The Generate Feedback Link form",
            },
            {
              type: "paragraph",
              text: "The feedback form asks for an overall star rating. Patients may also rate the doctor, staff, cleanliness, and wait time, write a comment, and choose to submit anonymously.",
            },
            {
              type: "image",
              src: IMG.phone,
              alt: "Patient feedback form with star ratings and a comment box",
              caption: "The form the patient sees",
            },
            {
              type: "callout",
              kind: "note",
              text: "The overall rating is required; the category ratings and written comment are optional.",
            },
            {
              type: "callout",
              kind: "tip",
              text: "Generate the link for the correct patient and visit, then share it through an appropriate channel.",
            },

            { type: "heading", text: "Review patient feedback" },
            {
              type: "paragraph",
              text: "Open the **Reviews** tab to search and filter reviews by doctor, status, rating, or flagged status. A review can show its star ratings, patient name (or “Anonymous Patient”), doctor, date, written comment, and any clinic response.",
            },
            {
              type: "image",
              src: IMG.records,
              alt: "Reviews tab with star ratings, comments, and filters",
              caption: "The Reviews tab",
            },
            { type: "paragraph", text: "Staff can:" },
            {
              type: "list",
              items: [
                "Flag a review for follow-up, or remove the flag later.",
                "Reply to a review that does not already have a response.",
                "Delete a review if necessary.",
              ],
            },
            {
              type: "callout",
              kind: "tip",
              text: "If a review is flagged, the page may show an alert. Select **View Flagged** or open **Reviews** and choose **Flagged Only** to find it.",
            },

            { type: "heading", text: "Doctor ratings and trends" },
            {
              type: "list",
              items: [
                "In **Doctors**, compare doctors’ average ratings and review counts. The page can also show doctor-skill ratings and the number of negative reviews.",
                "In **Trend**, view monthly average satisfaction and review counts.",
              ],
            },
            {
              type: "image",
              src: IMG.charts,
              alt: "Doctors tab and monthly satisfaction trend chart",
              caption: "Doctor ratings and the monthly trend",
            },
            {
              type: "callout",
              kind: "note",
              text: "These figures reflect submitted feedback. A small number of reviews may not represent every patient’s experience, so consider the review count alongside the score.",
            },

            { type: "heading", text: "Helpful definitions" },
            {
              type: "list",
              items: [
                "**Overall rating:** The patient’s general score for their experience, from 1 to 5 stars.",
                "**Flagged review:** A review staff marked for attention.",
                "**Trend:** How ratings change over time.",
                "**Anonymous:** The patient chose not to display their name with the feedback.",
              ],
            },

            { type: "heading", text: "Good practice" },
            {
              type: "list",
              items: [
                "Review negative feedback promptly and respond politely.",
              ],
            },
            {
              type: "callout",
              kind: "warning",
              text: "Keep patient comments private and follow your clinic’s privacy practices when discussing them with staff.",
            },
          ],
        }
      ),
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