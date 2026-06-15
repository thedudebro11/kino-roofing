"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const SERVICES = [
  "Residential Roofing",
  "Commercial Roofing",
  "Roof Repair",
  "Roof Inspection",
  "Metal Roofing",
  "Shingle Roofing",
  "Other",
]

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    if (data.website) return
    setStatus("loading")
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus("success")
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-green-50 rounded-xl border border-green-200">
        <div className="bg-green-100 rounded-full p-4 mb-6">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-stone-900 mb-3">Message Sent!</h2>
        <p className="text-stone-600 max-w-sm">
          Thanks for reaching out. A member of our team will contact you within 1 business day to
          schedule your free inspection.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Honeypot — hidden from real users, bots fill it out */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
      >
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            placeholder="John Smith"
            {...register("name")}
            className={cn(errors.name && "border-red-500 focus-visible:ring-red-500")}
          />
          {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            className={cn(errors.email && "border-red-500 focus-visible:ring-red-500")}
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone Number{" "}
            <span className="text-stone-400 text-xs font-normal">(optional)</span>
          </Label>
          <Input id="phone" type="tel" placeholder="(520) 555-1234" {...register("phone")} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">
            Service Needed <span className="text-red-500">*</span>
          </Label>
          <select
            id="service"
            {...register("service")}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              errors.service && "border-red-500 focus-visible:ring-red-500"
            )}
          >
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-sm text-red-600">{errors.service.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Describe your roofing needs, ask a question, or request a free inspection…"
          rows={5}
          {...register("message")}
          className={cn(errors.message && "border-red-500 focus-visible:ring-red-500")}
        />
        {errors.message && (
          <p className="text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-orange-600 hover:bg-orange-700"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
