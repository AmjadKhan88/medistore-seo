import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, company, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        // Configure transporter with Gmail SMTP and App Password
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.GMAIL_USER,     // your Gmail address
                pass: process.env.GMAIL_APP_PASSWORD, // the 16‑char app password
            },
        });

        const mailOptions = {
            from: `"${name}" <${process.env.GMAIL_USER}>`, // must be the authenticated user
            to: process.env.CONTACT_EMAIL_RECIPIENT,
            replyTo: email,
            subject: `New contact form submission from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Message:
${message}
      `,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Email sending error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}