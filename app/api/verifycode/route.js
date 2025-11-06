// ✅ Corrected verifycode route
import { NextResponse } from "next/server";
import crypto from "crypto";
import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const { db } = await dbConnect();
    const { email, code } = await req.json();

    if (!email || !code) {
      return NextResponse.json(
        { error: "Email and verification code are required." },
        { status: 400 }
      );
    }

    const user = await db.collection("users").findOne({ email });
    if (!user || !user.resetCode) {
      return NextResponse.json(
        { error: "Invalid or expired verification code." },
        { status: 400 }
      );
    }

    if (user.resetCode !== code) {
      return NextResponse.json(
        { error: "Incorrect verification code." },
        { status: 400 }
      );
    }

    if (Date.now() > user.resetCodeExpiry) {
      return NextResponse.json(
        { error: "Verification code has expired. Please request again." },
        { status: 400 }
      );
    }

    // ✅ Generate and hash reset token for security (matches model!)
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenHash = crypto.createHash("sha256").update(resetToken).digest("hex");
    const resetPasswordExpiry = Date.now() + 15 * 60 * 1000; // 15 minutes

    // ✅ Clear verification code & save hashed token
    await db.collection("users").updateOne(
      { email },
      {
        $unset: { resetCode: "", resetCodeExpiry: "" },
        $set: {
          resetPasswordToken: resetTokenHash,
          resetPasswordExpiry,
        },
      }
    );

    // ✅ Send token (plain) back to frontend
    return NextResponse.json({
      success: true,
      message: "Code verified successfully.",
      token: resetToken,
    });
  } catch (err) {
    console.error("Verify Code Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
