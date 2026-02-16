"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils/cn";
import { contactSchema, type ContactFormValues } from "@/features/contact/schemas/contact.schema";

export const ContactForm = () => {
  const [lastSubmission, setLastSubmission] = useState<ContactFormValues | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    setLastSubmission(values);
    form.reset();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <Input placeholder="Jane Doe" {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <Input type="email" placeholder="jane@example.com" {...register("email")} />
        </Field>
      </div>

      <Field label="Message" error={errors.message?.message}>
        <Textarea placeholder="Tell us what you are building..." {...register("message")} />
      </Field>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
        {lastSubmission ? (
          <p className="text-sm text-slate-600">
            Last submission by <span className="font-medium text-slate-900">{lastSubmission.name}</span>
          </p>
        ) : null}
      </div>
    </form>
  );
};

type FieldProps = {
  label: string;
  error?: string | undefined;
  children: ReactNode;
};

const Field = ({ label, error, children }: FieldProps) => (
  <label className="space-y-1.5">
    <span className="block text-sm font-medium text-slate-800">{label}</span>
    {children}
    <span className={cn("block min-h-5 text-xs text-rose-600", !error && "opacity-0")}>{error ?? "."}</span>
  </label>
);
