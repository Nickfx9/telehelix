// app/api/forgotpassword/route.js
import { NextResponse } from "next/server";
import crypto from "crypto";
import dbConnect from "@/lib/dbConnect";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { db } = await dbConnect();
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Check if user exists
    const user = await db.collection("users").findOne({ email });
    if (!user) {
      // Return same response for security (don’t reveal if user exists)
      return NextResponse.json({
        message: "If this email is registered, a verification code has been sent.",
      });
    }

    // ✅ Generate 6-digit numeric code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = Date.now() + 1000 * 60 * 10; // 10 minutes

    // ✅ Save the code and expiry in the database
    await db.collection("users").updateOne(
      { email },
      {
        $set: {
          resetCode: verificationCode,
          resetCodeExpiry: expiry,
        },
      }
    );

    // ✅ Setup Nodemailer (Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Compose email
    const mailOptions = {
      from: `"AfyaConnect" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🔐 AfyaConnect Password Reset Code",
      html: `
        <p>Hello ${user.fullName || "User"},</p>
        <p>You requested to reset your AfyaConnect password.</p>
        <p>Here is your verification code (valid for 10 minutes):</p>
        <h2 style="letter-spacing: 3px; color: #007bff;">${verificationCode}</h2>
        <p>Enter this code on the password reset page to continue.</p>
        <br/>
        <p>If you didn’t request this, please ignore this email.</p>
      `,
    };

    // ✅ Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "If this email is registered, a verification code has been sent.",
    });
  } catch (err) {
    console.error("Forgot Password Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
