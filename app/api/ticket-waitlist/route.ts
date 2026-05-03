import { NextResponse } from "next/server";

const SHEETDB_TICKET_WAITLIST_URL = "https://sheetdb.io/api/v1/vrlfj1hw7g00h";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: unknown };
    const email = typeof body.email === "string" ? body.email.trim() : "";

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 },
      );
    }

    const sheetResponse = await fetch(SHEETDB_TICKET_WAITLIST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            Email: email,
          },
        ],
      }),
    });

    if (!sheetResponse.ok) {
      const message = await sheetResponse.text();

      return NextResponse.json(
        { error: message || "SheetDB submission failed." },
        { status: sheetResponse.status },
      );
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Unable to submit waitlist signup." },
      { status: 500 },
    );
  }
}
