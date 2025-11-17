import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const headersList = await headers();
    const webhookSecret = process.env.SUPABASE_WEBHOOK_SECRET;
    const signature = headersList.get("x-webhook-signature");

    // Verify webhook signature for security
    if (webhookSecret && signature !== webhookSecret) {
      console.error("Webhook signature mismatch");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = await request.json();
    console.log("Webhook payload:", JSON.stringify(payload, null, 2));

    const { type, record } = payload;

    // Only send email for new sign-ups
    if (type === "INSERT" && record) {
      const { email } = record;
      
      if (email) {
        console.log(`Sending welcome email to: ${email}`);
        await sendWelcomeEmail(email);
      }

      return NextResponse.json({ success: true, message: "Welcome email sent" });
    }

    return NextResponse.json({ success: true, message: "Event processed" });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

async function sendWelcomeEmail(email: string) {
  try {
    console.log(`Sending welcome email to: ${email}`);

    const { data, error } = await resend.emails.send({
      to: email,
      template: {
        id: "d308991a-42ca-4ec4-adb2-cd1e1c8a38d8",
      },
    });

    if (error) {
      console.error("Resend error:", error);
      throw error;
    }

    console.log("Welcome email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Failed to send welcome email:", error);
    throw error;
  }
}

