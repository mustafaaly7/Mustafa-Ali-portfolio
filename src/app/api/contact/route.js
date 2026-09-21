import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    const senderName = typeof name === "string" ? name.trim() : "";
    const senderEmail = typeof email === "string" ? email.trim() : "";
    const senderMessage = typeof message === "string" ? message.trim() : "";
    const recipient = process.env.GMAIL;
    const appPassword = process.env.APP_PASSWORD?.replace(/\s/g, "");

    if (!senderName || !senderEmail || !senderMessage) {
      return NextResponse.json({ error: "Please complete all fields." }, { status: 400 });
    }

    if (senderName.length > 100 || senderEmail.length > 254 || senderMessage.length > 5000) {
      return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!recipient || !appPassword) {
      console.error("Missing GMAIL or APP_PASSWORD environment variables.");
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: recipient,
        pass: appPassword,
      },
    });

    await transporter.sendMail({
      from: recipient,
      to: recipient,
      replyTo: senderEmail,
      subject: `Portfolio inquiry from ${senderName}`,
      text: `Name: ${senderName}\nEmail: ${senderEmail}\n\n${senderMessage}`,
      html: `<h2>New portfolio inquiry</h2><p><strong>Name:</strong> ${escapeHtml(senderName)}</p><p><strong>Email:</strong> ${escapeHtml(senderEmail)}</p><p>${escapeHtml(senderMessage).replace(/\n/g, "<br />")}</p>`,
    });

    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Unable to send your message right now." }, { status: 500 });
  }
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character]);
}
