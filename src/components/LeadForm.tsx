"use client";

import { useState } from "react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";

interface LeadFormProps {
  className?: string;
}

export function LeadForm({ className = "" }: LeadFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [serviceInterested, setServiceInterested] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const { submit: submitLead } = useMegaLeadForm({
    customer_id: "d381ef69-33ec-4c11-bf98-cd9051a633b3",
    site_id: "caed0155-f895-4f47-810e-3a1944fa216c",
    source_provider: "customer-landing-vineyard-blinds",
  });

  const formatPhone = (value: string): string => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length === 0) return '';
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const isValidPhone = (value: string): boolean => {
    return value.replace(/\D/g, '').length === 10;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim() || !budget) {
      setError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    if (!isValidPhone(phone)) {
      setError("Please enter a valid 10-digit phone number");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitLead({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone,
        budget,
        serviceInterested: serviceInterested || undefined,
      });

      if (result.ok) {
        setIsSubmitted(true);
      }
    } catch (err) {
      setError("There was an error. Please try again.");
    }

    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8 ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
          <p className="text-white/80">
            We've received your request and will contact you within 24 hours to schedule your free consultation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8 ${className}`}>
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Get Your Free Estimate
      </h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
          </div>
          <div>
            <input
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
          </div>
        </div>
        
        <div>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            required
          />
        </div>
        
        <div>
          <input
            name="phone"
            type="tel"
            inputMode="numeric"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            placeholder="(555) 123-4567"
            pattern="\(\d{3}\) \d{3}-\d{4}"
            title="Please enter a valid 10-digit phone number"
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            required
          />
        </div>

        <div>
          <select
            name="serviceInterested"
            value={serviceInterested}
            onChange={(e) => setServiceInterested(e.target.value)}
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <option value="" className="text-gray-800">Service Interested In (Optional)</option>
            <option value="Blinds" className="text-gray-800">Blinds</option>
            <option value="Shutters" className="text-gray-800">Shutters</option>
            <option value="Shades" className="text-gray-800">Shades</option>
            <option value="Not Sure Yet" className="text-gray-800">Not Sure Yet</option>
          </select>
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2 text-white">
            Our window treatments start at $200. Is this within your budget?
          </p>
          <div className="flex gap-3">
            <label className="flex-1 cursor-pointer">
              <input
                type="radio"
                name="budget"
                value="yes"
                checked={budget === "yes"}
                onChange={(e) => setBudget(e.target.value)}
                required
                className="sr-only peer"
              />
              <div className="peer-checked:bg-white peer-checked:text-gray-900 border-2 border-white/30 peer-checked:border-white rounded-lg py-2.5 text-center font-semibold transition-all text-white">
                Yes
              </div>
            </label>
            <label className="flex-1 cursor-pointer">
              <input
                type="radio"
                name="budget"
                value="no"
                checked={budget === "no"}
                onChange={(e) => setBudget(e.target.value)}
                className="sr-only peer"
              />
              <div className="peer-checked:bg-white peer-checked:text-gray-900 border-2 border-white/30 peer-checked:border-white rounded-lg py-2.5 text-center font-semibold transition-all text-white">
                No
              </div>
            </label>
          </div>
        </div>
      </div>
      
      {error && (
        <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200">
          {error}
        </div>
      )}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-6 bg-white text-gray-900 px-6 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Get My Free Estimate"}
      </button>
      
      <p className="text-xs text-white/60 mt-3 text-center">
        Free measuring, free estimates, free installation. No obligation.
      </p>
    </form>
  );
}