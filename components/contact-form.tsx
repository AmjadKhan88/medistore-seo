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
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) });

  function onSubmit(values: FormValues) {
    if (values.website) return;
    setSent(true);
    reset();
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <input className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} />
      <label className="grid gap-2 text-sm font-medium">Name<Input {...register("name")} autoComplete="name" />{errors.name ? <span className="text-red-600">{errors.name.message}</span> : null}</label>
      <label className="grid gap-2 text-sm font-medium">Email<Input type="email" {...register("email")} autoComplete="email" />{errors.email ? <span className="text-red-600">{errors.email.message}</span> : null}</label>
      <label className="grid gap-2 text-sm font-medium">Company<Input {...register("company")} autoComplete="organization" /></label>
      <label className="grid gap-2 text-sm font-medium">Message<Textarea {...register("message")} />{errors.message ? <span className="text-red-600">{errors.message.message}</span> : null}</label>
      <Button type="submit" disabled={isSubmitting}><Send size={18} /> Send message</Button>
      {sent ? <p className="rounded-md bg-[rgb(var(--primary) / 0.12)] p-3 text-sm text-[rgb(var(--primary))]">Thanks. Your message is ready to connect to an email, CRM, or form endpoint.</p> : null}
    </form>
  );
}
