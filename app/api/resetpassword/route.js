// app/api/resetpassword/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import {
  findUserByResetToken,
  clearResetPasswordToken,
  updateUserById,
} from "@/models/User";

/**
 * POST /api/resetpassword
 * Body: { token, password }
 *
 * This route:
 *  - validates the token (via findUserByResetToken)
 *  - hashes & updates the user's password
 *  - clears the reset token/expiry fields
 *  - sends a non-blocking confirmation email (if email settings present)
 */
export async function POST(req) {
  try {
    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json({ error: "Missing token or password." }, { status: 400 });
    }

    // 1) Find user by reset token (helper checks expiry)
    const user = await findUserByResetToken(token);
    if (!user) {
      return NextResponse.json({ error: "Invalid or expired reset token." }, { status: 400 });
    }

    // 2) Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3) Update user password (use your existing helper)
    await updateUserById(user._id, { password: hashedPassword });

    // 4) Clear reset token & expiry
    await clearResetPasswordToken(user._id);

    // 5) Send confirmation email (non-blocking)
    // Only attempt if environment has mail credentials; errors are caught and logged.
    sendPasswordResetSuccessEmail(user.email, user.name).catch((err) => {
      console.error("Non-blocking: failed to send password reset confirmation email:", err);
    });

    // 6) Respond
    return NextResponse.json({ message: "Password reset successful. You may now log in." });
  } catch (err) {
    console.error("Reset Password Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

/**
 * sendPasswordResetSuccessEmail
 * Non-blocking: errors are caught by caller.
 */
async function sendPasswordResetSuccessEmail(email, name = "") {
  // Do not throw here; caller handles errors. This function attempts to send an email only if config exists.
  try {
    // If developer did not set EMAIL_USER/EMAIL_PASS/EMAIL_FROM, skip sending silently.
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_FROM) {
      console.log("Skipping password reset confirmation email: mail env vars not configured.");
      return;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail", // you can change to another SMTP provider if desired
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const html = `
      <div style="font-family: Arial, sans-serif; color: #0f172a; padding: 20px;">
        <h2 style="color:#007bff;">Password Changed Successfully</h2>
        <p>Hi ${name || "there"},</p>
        <p>This is to confirm that your <strong>AfyaConnect</strong> account password was successfully updated.</p>
        <p>If this was you, you can safely ignore this message.</p>
        <p>If you did not request this change, please contact our support team immediately.</p>
        <br/>
        <a href="${baseUrl}/login"
           style="display:inline-block;padding:10px 20px;background-color:#007bff;
                  color:white;text-decoration:none;border-radius:6px;">
          Go to Login
        </a>
        <br/><br/>
        <p>– The AfyaConnect Team</p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "AfyaConnect — Password successfully changed",
      html,
    });

    console.log(`Password change confirmation email sent to ${email}`);
  } catch (error) {
    // propagate error to caller (but caller logs and ignores it)
    throw error;
  }
}
