"use server";

import { z } from "zod";
import { ContactFormSchema } from "./schemas";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { name, email, message } = result.data;

    const mailOptions = {
      from: `rohit777in.com <${process.env.EMAIL_USER}>`,
      to: "rohitrnc5458@gmail.com",
      replyTo: email,
      cc: email,
      subject: `New message from ${name}!`,
      text: `Name:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);

    if (!info.messageId) {
      throw new Error("Failed to send email!");
    }

    return { success: true };
  } catch (error) {
    return { error: error instanceof Error ? error.message : String(error) };
  }
}
