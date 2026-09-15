"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const feedbackTypes = ["General Feedback", "Feature Request", "Bug Report", "Call Issue", "Account Issue", "Payment/Earnings Issue", "Creator Feedback", "Other"] as const;
type FeedbackType = (typeof feedbackTypes)[number];

export function FeedbackForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [delivery, setDelivery] = useState<"api" | "email">("api");
  const [error, setError] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const type = String(form.get("type") ?? "General Feedback") as FeedbackType;
    const message = String(form.get("message") ?? "").trim();
    if (!message) { setError("Please add a message before submitting."); return; }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Enter a valid email address or leave the field blank."); return; }
    setStatus("loading");
    const endpoint = process.env.NEXT_PUBLIC_FEEDBACK_ENDPOINT;
    try {
      if (endpoint) {
        const response = await fetch(endpoint, { body: JSON.stringify({ name, email, feedback_type: type, message }), headers: { "Content-Type": "application/json" }, method: "POST" });
        if (!response.ok) throw new Error("The feedback service returned an error.");
      } else {
        setDelivery("email");
        const subject = encodeURIComponent(`[Amistaa feedback] ${type}`);
        const body = encodeURIComponent(`Name: ${name || "Not provided"}\nEmail: ${email || "Not provided"}\nType: ${type}\n\n${message}`);
        window.location.href = `mailto:hello@amistaa.com?subject=${subject}&body=${body}`;
      }
      setStatus("success");
      event.currentTarget.reset();
    } catch { setStatus("error"); setError("We couldn’t submit your feedback. Please try again or email hello@amistaa.com."); }
  }

  return <form className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_28px_90px_rgba(16,17,20,0.07)] sm:p-10" onSubmit={submit} noValidate>
    <div className="grid gap-6 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-semibold text-zinc-900">Name <span className="font-normal text-zinc-500">(optional)</span><input className="min-h-12 rounded-2xl border border-zinc-200 px-4 font-normal outline-none transition placeholder:text-zinc-400 focus:border-[#7D3CFF] focus:ring-4 focus:ring-[#7D3CFF]/10" name="name" placeholder="Your name" /></label>
      <label className="grid gap-2 text-sm font-semibold text-zinc-900">Email <span className="font-normal text-zinc-500">(optional)</span><input className="min-h-12 rounded-2xl border border-zinc-200 px-4 font-normal outline-none transition placeholder:text-zinc-400 focus:border-[#7D3CFF] focus:ring-4 focus:ring-[#7D3CFF]/10" name="email" placeholder="you@example.com" type="email" /></label>
    </div>
    <label className="mt-6 grid gap-2 text-sm font-semibold text-zinc-900">Feedback type<select className="min-h-12 rounded-2xl border border-zinc-200 bg-white px-4 font-normal outline-none transition focus:border-[#7D3CFF] focus:ring-4 focus:ring-[#7D3CFF]/10" defaultValue="General Feedback" name="type">{feedbackTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
    <label className="mt-6 grid gap-2 text-sm font-semibold text-zinc-900">Message <span className="font-normal text-zinc-500">(required)</span><textarea className="min-h-40 resize-y rounded-2xl border border-zinc-200 px-4 py-3 font-normal leading-6 outline-none transition placeholder:text-zinc-400 focus:border-[#7D3CFF] focus:ring-4 focus:ring-[#7D3CFF]/10" name="message" placeholder="What would you like us to know?" required /></label>
    {error ? <p aria-live="assertive" className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800">{error}</p> : null}
    {status === "success" ? <p aria-live="polite" className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-800">{delivery === "email" ? "Your email client is ready with your feedback. Please send the message to complete delivery." : "Thanks for your feedback. We’ve received your message."}</p> : null}
    <div className="mt-7 flex flex-wrap items-center gap-4"><Button disabled={status === "loading"} type="submit">{status === "loading" ? "Sending…" : "Send feedback"}</Button><p className="text-sm text-zinc-500">You can also email <a className="font-semibold text-zinc-800 underline underline-offset-4" href="mailto:hello@amistaa.com">hello@amistaa.com</a>.</p></div>
  </form>;
}
