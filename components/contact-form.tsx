"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(20, "Tell us a little more"),
  website: z.string().max(0, "Spam detected").optional()
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  async function onSubmit(values: FormValues) {
    // Honeypot check
    if (values.website) return;

    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          company: values.company || "",
          message: values.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSent(true);
      reset();
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <input className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} />
      <label className="grid gap-2 text-sm font-medium">
        Name
        <Input {...register("name")} autoComplete="name" />
        {errors.name && <span className="text-red-600">{errors.name.message}</span>}
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Email
        <Input type="email" {...register("email")} autoComplete="email" />
        {errors.email && <span className="text-red-600">{errors.email.message}</span>}
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Company
        <Input {...register("company")} autoComplete="organization" />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Message
        <Textarea {...register("message")} rows={5} />
        {errors.message && <span className="text-red-600">{errors.message.message}</span>}
      </label>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <Button type="submit" disabled={isSubmitting}>
        <Send size={18} /> {isSubmitting ? "Sending..." : "Send message"}
      </Button>
      {sent && (
        <p className="rounded-md bg-[rgb(var(--primary) / 0.12)] p-3 text-sm text-[rgb(var(--primary))]">
          Thanks! Your message has been sent. We’ll get back to you soon.
        </p>
      )}
    </form>
  );
}