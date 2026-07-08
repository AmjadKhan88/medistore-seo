export type DocPage = {
  slug: string;
  title: string;
  description: string;
  sections: { title: string; body: string; code?: string }[];
};

export const docs: DocPage[] = [
  {
    slug: "getting-started",
    title: "Getting Started with MediStore",
    description: "Create your account, verify your email and set up your pharmacy profile in under 5 minutes.",
    sections: [
      {
        title: "Step 1 — Create your account",
        body: "Go to app.medistore.pk and click Start Free Trial. Fill in your full name, email address and password (minimum 6 characters). You do not need a credit card. Your 14-day free trial starts automatically after email verification.",
      },
      {
        title: "Step 2 — Verify your email",
        body: "After registering you will receive a verification email. Open it and click the Verify My Email button. The link expires in 24 hours. If you do not see the email, check your spam folder or click Resend Verification Email on the login page.",
      },
      {
        title: "Step 3 — Complete the onboarding wizard",
        body: "The 4-step wizard runs once after verification. Step 1: Enter your pharmacy name, doctor name, address, phone number and drug license number — these appear on every invoice you print. Step 2: Add your first medicine. Step 3: Invite your first staff member (optional). Step 4: Done — go to your dashboard.",
      },
      {
        title: "Step 4 — Install the app on your phone",
        body: "MediStore is a Progressive Web App. On Android open the app in Chrome and tap Add to Home Screen. On iOS open it in Safari, tap the Share button and tap Add to Home Screen. The app works offline for viewing existing data.",
      },
      {
        title: "Free trial limits",
        body: "The 14-day free trial gives you 50 medicines, 20 patients, 1 user account and 50 bills per month. All features are fully unlocked during the trial. After 14 days you can continue on the free plan (30 medicines, 15 patients) or upgrade to Basic or Pro.",
      },
    ],
  },
  {
    slug: "medicine-inventory",
    title: "Medicine Inventory",
    description: "Add, edit and manage your medicine stock. Track expiry dates, set minimum stock levels and get automatic alerts.",
    sections: [
      {
        title: "Adding a medicine",
        body: "Go to Medicines and click Add Medicine. Enter the medicine name and click the AI button (✦) to auto-fill the category, generic name, dosage form and strength using AI. Fill in the sale price, purchase price, stock quantity, minimum stock level and expiry date. Click Save.",
      },
      {
        title: "Understanding the fields",
        body: "Generic Name is the scientific name (e.g. Paracetamol for Panadol). Min Stock is the quantity at which you want a low stock alert — set it to your typical weekly usage. Batch Number comes from the medicine packaging and is used for expiry tracking. Purchase Price is what you paid the supplier. Sale Price is what you charge the patient.",
      },
      {
        title: "Searching and filtering",
        body: "Use the search box to find medicines by name or generic name. Use the category filter to show only a specific drug class. Use the status filter to show medicines that are expiring soon, already expired or below minimum stock.",
      },
      {
        title: "Medicine substitutes",
        body: "Open any medicine and click Link Substitutes. Select alternative medicines from your inventory. When you create a bill and a medicine is out of stock, the system automatically shows these substitutes so you can offer the patient an alternative.",
      },
      {
        title: "Real-time stock updates",
        body: "When a pharmacist creates a bill, the stock numbers on your Medicines page update instantly without a page refresh. If stock drops below the minimum, a low stock notification appears in the notification bell immediately.",
      },
    ],
  },
  {
    slug: "billing-invoices",
    title: "Billing & Invoices",
    description: "Create professional invoices, record payments and print receipts on A4 or thermal paper.",
    sections: [
      {
        title: "Creating a bill",
        body: "Go to Billing and click New Bill. Search for the patient by name or patient ID. Search for medicines and add them — quantity is set to 1 by default, change it as needed. The total calculates automatically. Enter the discount if any, enter the amount the patient is paying now, select payment method (Cash, JazzCash, EasyPaisa or Card) and click Create Bill.",
      },
      {
        title: "Drug interaction checker",
        body: "When you add 2 or more medicines to a bill, a Check Drug Interactions button appears. Click it to run an AI check. The result shows severity (Minor, Moderate or Major) for each pair of medicines along with what the interaction causes and what to do about it.",
      },
      {
        title: "Medicine substitutes during billing",
        body: "If a medicine shows Out of Stock when you search it, a substitutes panel opens automatically showing available alternatives from your inventory that you can add instead.",
      },
      {
        title: "Printing invoices",
        body: "Click the PDF button on any bill to download and print it. The invoice uses your selected template (A4 Detailed, A4 Compact, Thermal 80mm or Thermal 58mm) with your store name, logo and brand colors. Set your preferred template in Invoice Templates under Settings.",
      },
      {
        title: "Emailing invoices to patients",
        body: "Open any bill and click Email to Patient. The invoice is sent to the email address saved on the patient record. The email includes a full itemized bill with totals and outstanding balance if any.",
      },
      {
        title: "Recording partial payments",
        body: "If a patient pays part of the bill now and the rest later, enter the amount paid when creating the bill. The bill status shows as Partial. When they pay the remaining amount, find the bill and click Record Payment, enter the amount received and save.",
      },
      {
        title: "Payment statuses",
        body: "Paid means the full amount has been collected. Partial means some amount is still outstanding. Pending means nothing has been paid yet. Outstanding balances appear on the Patient Balance page where you can send WhatsApp reminders.",
      },
    ],
  },
  {
    slug: "patient-records",
    title: "Patient Records",
    description: "Maintain complete patient profiles including medical history, allergies, outstanding balances and uploaded documents.",
    sections: [
      {
        title: "Adding a patient",
        body: "Go to Patients and click Add Patient. Fill in the name, age, gender, phone number and blood group. Add any known allergies — these appear as a red warning banner every time you create a bill for this patient. Add medical history notes if relevant. A unique Patient ID is generated automatically (e.g. PT-00042).",
      },
      {
        title: "Viewing a patient record",
        body: "Click the eye icon on any patient row to open their full profile. The Info tab shows contact details, blood group, allergies, medical history and outstanding balance. The Documents tab shows all uploaded files for this patient.",
      },
      {
        title: "Patient portal link",
        body: "Click the link icon on any patient row to generate a unique portal link. Share this link with the patient via WhatsApp or SMS. The patient opens it on their phone and can see all their bills, prescriptions, lab results and appointments — no login required. You can revoke the link at any time.",
      },
      {
        title: "Uploading patient documents",
        body: "Open a patient record and go to the Documents tab. Click Upload. Select the file (PDF, JPG or PNG, max 10MB) and choose a category such as ID Card, Test Result or Insurance Card. The file is stored securely on Cloudinary and can be opened from any device.",
      },
      {
        title: "WhatsApp payment reminders",
        body: "Go to Patient Balance page to see all patients with outstanding bills. Click the Remind button next to any patient. WhatsApp Web opens with a pre-written message showing their name, balance amount and your store name. Just press Send.",
      },
    ],
  },
  {
    slug: "prescriptions",
    title: "Digital Prescriptions",
    description: "Write digital prescriptions, print A5 clinic letterhead PDFs and convert prescriptions to invoices in one click.",
    sections: [
      {
        title: "Writing a prescription",
        body: "Go to Prescriptions and click Write Prescription. Search and select the patient. Enter the doctor name (auto-filled from your profile). Enter the diagnosis. Use the quick-add search to find medicines from your inventory or type any medicine name manually. For each medicine set the dosage (e.g. 1 tablet), frequency (e.g. twice daily), duration (e.g. 5 days), total quantity to dispense and any special instructions. Set the validity period. Click Create Prescription.",
      },
      {
        title: "Prescription number",
        body: "Each prescription gets a unique auto-generated number starting from RX-000001. This number appears on the printed PDF and is used to link the prescription to a bill.",
      },
      {
        title: "Printing the prescription",
        body: "Click the Print PDF button on any prescription. The PDF is A5 size with your clinic letterhead, store name, doctor name, patient details, Rx symbol, medicine table with dosage instructions, doctor notes and a signature line at the bottom.",
      },
      {
        title: "Converting to an invoice",
        body: "Click Convert to Invoice on any active prescription. The system checks stock for each medicine, deducts the quantities and creates a bill automatically. The prescription status changes to Dispensed and the bill number is linked back to the prescription.",
      },
      {
        title: "Prescription statuses",
        body: "Active means the prescription is valid and has not been dispensed. Dispensed means it has been converted to an invoice. Expired means the validity date has passed. Cancelled means it was manually cancelled.",
      },
    ],
  },
  {
    slug: "appointments",
    title: "Appointments & Visits",
    description: "Schedule patient appointments, record vital signs during visits and view a monthly calendar of all bookings.",
    sections: [
      {
        title: "Scheduling an appointment",
        body: "Go to Appointments and click Schedule. Search and select the patient. Choose the date and time slot (every 30 minutes from 8:00 AM to 6:00 PM). Select the doctor. Choose appointment type: Checkup, Follow-up, Emergency, Consultation, Procedure, Lab Test or Other. Add any notes about the reason for the visit. Save.",
      },
      {
        title: "Calendar view",
        body: "Click the Calendar tab to switch to a monthly calendar. Each day shows colored dots for each appointment. Click any day to see the full list of appointments for that day. Click any appointment to open its full details.",
      },
      {
        title: "Recording a completed visit",
        body: "When the patient is seen, find their appointment and click Record Visit. Enter vital signs: blood pressure (e.g. 120/80), pulse (e.g. 72 bpm), temperature (e.g. 98.6°F), weight in kg and blood sugar in mg/dL. Enter the diagnosis and detailed visit notes. Add any medicines given during the visit. Set a follow-up date if needed. Save — status changes to Completed.",
      },
      {
        title: "Visit history",
        body: "Every completed visit is stored permanently on the patient record. You can see the full history of vital signs, diagnoses and medicines given over time, which helps track chronic conditions like hypertension and diabetes.",
      },
    ],
  },
  {
    slug: "lab-tests",
    title: "Lab Test Tracking",
    description: "Order lab tests, enter results with normal range flags and upload result PDFs or images to Cloudinary.",
    sections: [
      {
        title: "Ordering a lab test",
        body: "Go to Lab Tests and click Order Lab Test. Select the patient. Choose the test category (Blood Test, Urine Test, Imaging, Microbiology, Cardiac or Other). Type or select the test name — common tests like CBC, Blood Sugar, HbA1c, LFT, KFT, X-Ray and Ultrasound appear as suggestions. Enter the lab name (e.g. Chughtai Lab) and ordering doctor. Save.",
      },
      {
        title: "Entering results — single value",
        body: "Click the Edit Results button on any test. Choose Single Result mode. Enter the value (e.g. 110), unit (e.g. mg/dL) and normal range (e.g. 70-100 mg/dL). Set the interpretation to Normal, High, Low or Critical. Add any notes from the doctor. Save.",
      },
      {
        title: "Entering results — CBC panel",
        body: "For blood panel tests like CBC click Edit Results and choose Panel mode. A table appears with all parameters (WBC, RBC, Hemoglobin, Hematocrit, Platelets etc.) pre-filled. Enter the value for each parameter and set the flag: H for High, L for Low, HH for critically high or LL for critically low. These flags appear in red or blue in the results view.",
      },
      {
        title: "Uploading result files",
        body: "Click Upload File on any test to upload the printed lab report as a PDF or photo (max 10MB). The file is stored on Cloudinary. The patient can view it through their portal link. Lab staff can open it from any device by clicking the file link.",
      },
      {
        title: "Test statuses",
        body: "Ordered means the test has been requested. Sample Collected means the sample has been taken. In Progress means the lab is processing it. Completed means results are entered. Cancelled means the test was called off.",
      },
    ],
  },
  {
    slug: "expiry-alerts",
    title: "Expiry Alerts",
    description: "Automatic weekly email and push notification digest. View expired, expiring soon and low stock medicines in one report.",
    sections: [
      {
        title: "Viewing expiry alerts",
        body: "Go to Expiry Alerts in the sidebar. The page shows three sections: Expired (must be removed immediately), Expiring Within 30 Days (order replacements), and Low Stock (below minimum stock level). Each section shows the medicine name, batch number, quantity and exact expiry date.",
      },
      {
        title: "Weekly automatic email",
        body: "Every Monday at 8:00 AM Pakistan time, MediStore sends an email digest to the store admin. The email shows all three sections with medicine details. If there are any expired medicines the email subject line shows a red alert emoji. You do not need to do anything — this runs automatically.",
      },
      {
        title: "Push notifications",
        body: "If you have enabled push notifications (Settings → Mobile App → Push Notifications), you also receive a push notification on your phone every Monday alongside the email. The notification shows the total count of issues and links directly to the Expiry Alerts page.",
      },
      {
        title: "Exporting the report",
        body: "Click Download PDF to get a branded PDF report with your store name and logo. Click Download Excel to get a spreadsheet you can use for ordering replacements or showing to your supplier.",
      },
      {
        title: "Setting minimum stock levels",
        body: "The low stock section is based on the Min Stock value you set for each medicine. If current stock is less than or equal to Min Stock, the medicine appears in the low stock section. Set Min Stock to your typical weekly usage so you always get alerted with enough time to reorder.",
      },
    ],
  },
  {
    slug: "staff-management",
    title: "Staff Management",
    description: "Add doctors and pharmacists, assign roles with different permissions and manage access.",
    sections: [
      {
        title: "Adding a staff member",
        body: "Go to Staff Management and click Add Staff. Enter their full name, email address, role (Doctor or Pharmacist) and a temporary password. Click Save — they immediately receive an invitation email with their login credentials and a link to the app.",
      },
      {
        title: "Role permissions",
        body: "Admin can do everything including deleting records, managing staff, accessing reports, settings and subscription. Doctor can add and edit medicines and patients, write prescriptions, create bills and manage appointments. Pharmacist can create bills, view medicines and view patients but cannot add or edit medicines, delete anything or access settings.",
      },
      {
        title: "Resetting a staff password",
        body: "Find the staff member in the list and click Reset Password. A new temporary password is sent to their email. They can log in with it and change it from their profile settings.",
      },
      {
        title: "Deactivating a staff member",
        body: "If a staff member leaves, click Deactivate on their record. They immediately lose login access. Their name still appears on historical records (bills, prescriptions) that they created. You can reactivate them at any time.",
      },
      {
        title: "Staff limits by plan",
        body: "Free Trial allows 1 staff account. Basic plan allows 3 staff accounts. Pro plan allows unlimited staff accounts. Attempting to add more than your plan allows shows an upgrade prompt.",
      },
    ],
  },
  {
    slug: "suppliers",
    title: "Supplier Management",
    description: "Maintain a full supplier database with payment history, performance tracking and outstanding balance dashboard.",
    sections: [
      {
        title: "Adding a supplier",
        body: "Go to Suppliers and click Add Supplier. Fill the Basic Info tab (name, company, phone, email, city). Fill the Bank Details tab (bank name, account number, IBAN) — used when recording payments. Fill the Terms tab (payment terms like Net 30, credit limit and internal notes). Save.",
      },
      {
        title: "Linking medicines to a supplier",
        body: "Open a supplier and click Link Medicines. Search for medicines from your inventory and add them. For each medicine you can set your negotiated purchase price and mark it as the preferred supplier. This helps you quickly know which supplier to call when you need to reorder a specific medicine.",
      },
      {
        title: "Recording supplier payments",
        body: "When you pay a supplier, open their record and click Record Payment. Enter the amount paid. The outstanding balance updates automatically. Payment history is visible in the Purchase History tab.",
      },
      {
        title: "Performance tracking",
        body: "Open a supplier and go to the Performance tab. Click Log Delivery Event to record whether a delivery was on time, late, had quality issues or was returned. The delivery score percentage is calculated automatically. Use this to decide which suppliers to keep working with.",
      },
      {
        title: "Outstanding payments dashboard",
        body: "Click the Outstanding Payments tab on the main Suppliers page to see all suppliers you owe money to, sorted by the largest balance first. This shows total ordered, total paid and the outstanding amount for each supplier.",
      },
    ],
  },
  {
    slug: "reports-analytics",
    title: "Reports & Analytics",
    description: "View revenue trends, top-selling medicines and patient spending. Export as PDF or CSV.",
    sections: [
      {
        title: "Date range filters",
        body: "The Reports page has preset date filters: Today, Yesterday, This Week, This Month, Last Month, Last 30 Days, This Year and Custom Range. Select a preset or click Custom to pick exact start and end dates. All charts and tables update instantly.",
      },
      {
        title: "What the report shows",
        body: "Total revenue for the period. Total bills created. Average bill value. Revenue trend chart showing daily totals. Top 10 selling medicines by quantity and revenue. Top 10 patients by total spending. Payment method breakdown showing how much was paid via Cash, JazzCash, EasyPaisa and Card.",
      },
      {
        title: "Exporting reports",
        body: "Click Export PDF to download a branded PDF report with your store logo, name and address at the top. Click Export CSV to download a spreadsheet with all bill data that you can open in Excel or Google Sheets for further analysis.",
      },
    ],
  },
  {
    slug: "ai-assistant",
    title: "AI Medicine Assistant",
    description: "Powered by Google Gemini and Groq. Ask about medicines, check drug interactions and get smart reorder suggestions.",
    sections: [
      {
        title: "Choosing an AI model",
        body: "The AI Assistant page has a model selector in the top right. Available models are Gemini 2.0 Flash (Google, fastest and latest), Gemini 1.5 Flash (Google, stable), Llama 3.3 70B (Groq, detailed answers), Llama 3.1 8B (Groq, very fast), Mixtral 8x7B (Groq) and Gemma 2 9B (Groq). Your selection is saved automatically.",
      },
      {
        title: "Asking about medicines",
        body: "Type any question in the chat input and press Enter or click Send. The AI knows about your pharmacy inventory so it can tell you whether a medicine is in stock. Example questions: What are the side effects of Augmentin 625mg? Can Metformin and Aspirin be taken together? What is the pediatric dose of Amoxicillin? What is the difference between Paracetamol and Ibuprofen?",
      },
      {
        title: "Auto-fill medicine details",
        body: "When adding a new medicine, type the medicine name and click the sparkle (✦) button next to the name field. The AI automatically fills in the category, generic name, dosage form and typical strength. You can edit these values before saving.",
      },
      {
        title: "Drug interaction checker",
        body: "When creating a bill with 2 or more medicines, a Check Drug Interactions button appears below the items table. Click it to get an instant AI analysis. Results are color-coded: green for safe, yellow for minor interaction, orange for moderate and red for major interaction requiring attention.",
      },
      {
        title: "Smart reorder suggestions",
        body: "Click Smart Reorder on the AI Assistant page. The system analyzes your last 30 days of sales, current stock levels and minimum stock settings. The AI suggests which medicines to reorder, how many units to order and assigns a priority (High, Medium or Low). It also shows estimated reorder cost.",
      },
    ],
  },
  {
    slug: "subscription-billing",
    title: "Subscription & Billing",
    description: "Manage your plan, upgrade and pay via JazzCash, EasyPaisa or bank transfer.",
    sections: [
      {
        title: "Plan comparison",
        body: "Free Trial lasts 14 days with 50 medicines, 20 patients and 50 bills per month — all features unlocked. Free plan is permanent but limited to 30 medicines, 15 patients and 20 bills per month. Basic costs Rs. 2,999 per month and supports 500 medicines, 200 patients, 3 staff and unlimited bills. Pro costs Rs. 5,999 per month with unlimited everything plus audit log, data backup and priority support.",
      },
      {
        title: "How to upgrade",
        body: "Go to Subscription in the sidebar and click Upgrade Now. Step 1: Choose Basic or Pro. Step 2: Select payment method — JazzCash, EasyPaisa or Bank Transfer. Step 3: Send the payment to the number or IBAN shown. Use your store email as the payment reference. Step 4: Enter your transaction ID or reference number. Step 5: Submit. Your account is activated within 24 hours after verification.",
      },
      {
        title: "Tracking your usage",
        body: "The Subscription page shows 4 progress bars: Medicines used vs limit, Patients used vs limit, Staff members used vs limit, and Bills created this month vs limit. These update in real time as you use the app.",
      },
      {
        title: "What happens when a limit is reached",
        body: "If you try to add a medicine after reaching the medicines limit, the system shows an error with a link to upgrade. The same applies for patients, bills and staff. Existing data is never affected — only new additions are blocked.",
      },
      {
        title: "Payment history",
        body: "The right side of the Subscription page shows all previous payments with date, amount, payment method and transaction ID. This is your billing history for the MediStore service.",
      },
    ],
  },
  {
    slug: "invoice-templates",
    title: "Invoice Templates",
    description: "Choose from 4 invoice layouts, set brand colors, upload your logo and configure thermal printer settings.",
    sections: [
      {
        title: "Choosing a template",
        body: "Go to Invoice Templates in the sidebar. Four templates are available. Detailed (A4) has a full colored header, logo, info boxes and complete breakdown — best for professional invoices and emailing to patients. Compact (A4) has minimal whitespace and fits more items per page — best for fast counter printing. Thermal 80mm is for 80mm thermal receipt printers found at most pharmacy counters. Thermal 58mm is for narrow 58mm thermal printers.",
      },
      {
        title: "Setting brand colors",
        body: "The Template and Brand tab has two color pickers. Accent Color controls buttons, highlights and the INVOICE badge color. Header Background controls the dark header band at the top of the invoice. Choose from preset swatches or enter a hex color code. A live preview updates as you pick colors.",
      },
      {
        title: "Uploading your store logo",
        body: "In the Logo section click the upload area and select your logo file (PNG or JPG, recommended 200x80 pixels). The logo uploads to Cloudinary and appears on all invoices immediately. Click Remove to delete the logo and go back to text-only header.",
      },
      {
        title: "Configuring thermal printer",
        body: "Go to the Thermal Options tab. Use the Font Size slider to adjust text size between 7pt and 12pt — recommended 9pt for 58mm and 10pt for 80mm. Use the Line Spacing slider to control spacing between lines. Click Preview 80mm or Preview 58mm to download a sample receipt with your current settings.",
      },
      {
        title: "Toggling invoice fields",
        body: "Go to the Content and Fields tab to turn individual fields on or off. Header fields: store name, doctor name, address, phone, license number, email. Body fields: patient ID, patient age, generic name under brand name, discount line, tax line, savings badge. Footer fields: footer message text, powered by MediStore line.",
      },
    ],
  },
  {
    slug: "data-backup",
    title: "Data Backup & Restore",
    description: "Export your full pharmacy data as JSON or Excel and restore from a backup file.",
    sections: [
      {
        title: "Exporting a backup",
        body: "Go to Backup in the sidebar. Four export options are available. Full JSON Backup exports everything — all medicines, patients, bills and purchase orders in a single JSON file. Medicines Excel exports only your medicine inventory as a spreadsheet. Patients Excel exports only patient records. Both in One Excel exports medicines and patients together in one workbook with two sheets.",
      },
      {
        title: "When to back up",
        body: "Export a Full JSON Backup at least once per week and save it to Google Drive or your computer. Export before making large changes like importing new medicines. Export at the end of each month before closing the period.",
      },
      {
        title: "Restoring from backup",
        body: "Click Choose Backup File and select a JSON backup file. The system shows a preview of what will be imported — number of medicines, patients and bills found in the file. Click Restore Data to import. The restore uses upsert: existing records are updated, new records are added and nothing is deleted.",
      },
      {
        title: "What restore does NOT do",
        body: "Restore does not delete any existing data. If a medicine already exists with the same name it is updated with the backup values. If it does not exist it is created. Bills are skipped if they already exist in the database to prevent duplicate invoices.",
      },
    ],
  },
  {
    slug: "patient-portal",
    title: "Patient Portal",
    description: "Share a unique read-only link with patients so they can view their records, bills and prescriptions on their phone.",
    sections: [
      {
        title: "Generating a portal link",
        body: "Go to Patients and click the link icon on any patient row. A modal shows the unique portal link for that patient. Click Copy Link to copy it or click Share to open the native share menu on mobile. Click Open to preview what the patient will see.",
      },
      {
        title: "What the patient sees",
        body: "The patient portal opens on any phone browser without requiring a login. It shows their full name, age, blood group and allergies. An orange banner appears if they have outstanding balance. Below that are four collapsible sections: Bills and Invoices (with PDF download), Prescriptions (with medicine dosage instructions), Lab Tests (with results and file links) and Appointment History (with vital signs).",
      },
      {
        title: "Revoking access",
        body: "Open the portal link modal for a patient and click Revoke Access. The link immediately stops working. Generate a new link at any time to restore access. Each new generation creates a different link.",
      },
      {
        title: "Security",
        body: "Portal links use a 48-character random token that is impossible to guess. The portal is completely read-only — patients cannot change any data. Each token is tied to one patient and one store. If a patient shares their link with someone else, that person can only see that patient's data and nothing else from your store.",
      },
    ],
  },
  {
    slug: "document-storage",
    title: "Document Storage",
    description: "Upload and manage patient ID cards, medicine certificates, store licenses and supplier agreements.",
    sections: [
      {
        title: "Uploading a document",
        body: "Go to Documents in the sidebar and click Upload Document. Select the entity type (Patient, Medicine, Store or Supplier). Search and select the specific record. Drop your file or click to select it (PDF, JPG or PNG, max 10MB). Enter a title — the filename is used automatically if you leave it blank. Select a category. Add tags for easier searching (comma-separated). Click Upload.",
      },
      {
        title: "Document categories",
        body: "Patient documents: ID Card, Previous Prescription, Test Result, Insurance Card, Discharge Summary, Referral Letter, Consent Form. Medicine documents: Batch Certificate, Import License, Quality Report, Drug Registration. Store documents: Drug License, Tax Certificate, Inspection Report, Supplier Agreement.",
      },
      {
        title: "Uploading from patient profile",
        body: "Open any patient record and click the Documents tab. Click Upload, select a file and fill in the details. This is faster when you are already working with a specific patient.",
      },
      {
        title: "Archiving vs deleting",
        body: "Archive hides a document from the main list without deleting it. You can restore archived documents by enabling Show Archived in the filter. Delete permanently removes the document from both the database and Cloudinary storage. This cannot be undone.",
      },
      {
        title: "Opening documents",
        body: "Click Open on any document card to open the file directly from Cloudinary in a new browser tab. Images display inline. PDFs open in the browser PDF viewer. Files are served from a global CDN so they load quickly from anywhere.",
      },
    ],
  },
  {
    slug: "support",
    title: "Support Center",
    description: "Submit support tickets and get help from the MediStore team.",
    sections: [
      {
        title: "Submitting a ticket",
        body: "Go to Support Center in the sidebar and click New Ticket. Enter a subject (brief description of your issue). Select a category: Billing, Technical, Feature Request, Bug Report, Account or Other. Select priority: Low, Medium, High or Urgent. Describe your issue in detail — include any error messages and the steps that led to the problem. Submit.",
      },
      {
        title: "Response time",
        body: "The MediStore support team typically responds within 24 hours for standard tickets. Urgent priority tickets are reviewed first. You receive an email notification when the support team replies.",
      },
      {
        title: "Replying to a ticket",
        body: "Open any active ticket to see the conversation thread. Type your reply and click Send Reply. You can add more information, share screenshots or answer questions from the support team. Tickets stay open until marked Resolved.",
      },
      {
        title: "Ticket statuses",
        body: "Open means the ticket has been submitted and is waiting for review. In Progress means the support team is working on it. Resolved means the issue has been fixed or answered. Closed means the ticket has been closed.",
      },
    ],
  },
];
