"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AnimatePresence, motion } from "motion/react";
import { navServices } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

type SubmitStatus = "success" | "error" | null;

const inputBase =
  "w-full rounded-xl border bg-surface-white px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 outline-none transition-all focus:ring-2";
const inputOk = "border-outline-variant focus:border-primary focus:ring-primary/15";
const inputErr = "border-error focus:border-error focus:ring-error/15";

export function ContactForm() {
  const { t } = useLanguage();
  const f = t.contact.form;
  const toast = t.contact.toast;
  const [status, setStatus] = useState<SubmitStatus>(null);

  const validationSchema = Yup.object({
    name: Yup.string().trim().required(f.requiredName),
    email: Yup.string().trim().email(f.invalidEmail).required(f.requiredEmail),
    phone: Yup.string().trim(),
    company: Yup.string().trim(),
    service: Yup.string().required(f.requiredService),
    message: Yup.string().trim().min(10, f.minMessage).required(f.requiredMessage),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      website: "", // honeypot
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus("success");
        resetForm();
      } catch {
        setStatus("error");
      }
    },
  });

  const errorFor = (name: keyof typeof formik.values) =>
    formik.touched[name] && formik.errors[name]
      ? (formik.errors[name] as string)
      : undefined;

  const fieldClass = (name: keyof typeof formik.values) =>
    `${inputBase} ${errorFor(name) ? inputErr : inputOk}`;

  const isSuccess = status === "success";

  return (
    <>
      <form onSubmit={formik.handleSubmit} noValidate className="space-y-5">
        <div>
          <h3 className="font-headline-md text-headline-md text-primary">{f.title}</h3>
          <p className="mt-1 text-sm text-on-surface-variant">{f.subtitle}</p>
        </div>

        {/* Honeypot (hidden from users) */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          value={formik.values.website}
          onChange={formik.handleChange}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-on-surface">
              {f.name} <span className="text-error">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={f.namePlaceholder}
              className={fieldClass("name")}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {errorFor("name") && <p className="mt-1.5 text-xs text-error">{errorFor("name")}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-on-surface">
              {f.email} <span className="text-error">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              dir="ltr"
              placeholder={f.emailPlaceholder}
              className={fieldClass("email")}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {errorFor("email") && <p className="mt-1.5 text-xs text-error">{errorFor("email")}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-on-surface">
              {f.phone}{" "}
              <span className="text-on-surface-variant/60 font-normal">({f.optional})</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              dir="ltr"
              placeholder={f.phonePlaceholder}
              className={fieldClass("phone")}
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-on-surface">
              {f.company}{" "}
              <span className="text-on-surface-variant/60 font-normal">({f.optional})</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder={f.companyPlaceholder}
              className={fieldClass("company")}
              value={formik.values.company}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-on-surface">
            {f.service} <span className="text-error">*</span>
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              className={`${fieldClass("service")} appearance-none pe-10 ${
                formik.values.service ? "text-on-surface" : "text-on-surface-variant/50"
              }`}
              value={formik.values.service}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" disabled>
                {f.servicePlaceholder}
              </option>
              {navServices.map((service) => (
                <option key={service.key} value={t.serviceItems[service.key]}>
                  {t.serviceItems[service.key]}
                </option>
              ))}
              <option value={f.otherService}>{f.otherService}</option>
            </select>
            <MaterialIcon
              name="expand_more"
              className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xl text-on-surface-variant"
            />
          </div>
          {errorFor("service") && (
            <p className="mt-1.5 text-xs text-error">{errorFor("service")}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-on-surface">
            {f.message} <span className="text-error">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder={f.messagePlaceholder}
            className={`${fieldClass("message")} resize-none`}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {errorFor("message") && (
            <p className="mt-1.5 text-xs text-error">{errorFor("message")}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-label-sm text-label-sm text-on-primary shadow-lg transition-all hover:bg-[#ff9100] hover:text-white hover:shadow-xl active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {formik.isSubmitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              {f.sending}
            </>
          ) : (
            <>
              {f.submit}
              <MaterialIcon
                name="send"
                className="text-base rtl:-scale-x-100 transition-transform group-hover:translate-x-0.5"
              />
            </>
          )}
        </button>
      </form>

      {/* Success / error popup */}
      <AnimatePresence>
        {status && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              aria-label={toast.close}
              onClick={() => setStatus(null)}
              className="absolute inset-0 bg-inverse-surface/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md rounded-2xl bg-surface-white p-8 text-center shadow-2xl"
            >
              <div
                className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full ${
                  isSuccess ? "bg-green-100 text-green-600" : "bg-error-container text-error"
                }`}
              >
                <MaterialIcon
                  name={isSuccess ? "check_circle" : "error"}
                  className="text-4xl"
                />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                {isSuccess ? toast.successTitle : toast.errorTitle}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
                {isSuccess ? toast.successMessage : toast.errorMessage}
              </p>
              <button
                type="button"
                onClick={() => setStatus(null)}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 font-label-sm text-label-sm text-on-primary transition-all hover:brightness-110 active:scale-95"
              >
                {toast.close}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
