"use client"

import { Check, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingSection() {
  const pricingData = {
    plans: [
      {
        id: "trial",
        name: "FREE TRIAL",
        price: 0,
        period: "/14 days",
        buttonText: "Start Free Trial",
        features: [
          "Get full access to Onsite software for 14 days.",
          "Dedicated work workspace"
        ]
      },
      {
        id: "premium",
        name: "PREMIUM",
        price: 200,
        period: "/Month",
        setupFee: 399,
        buttonText: "Buy Now",
        isPopular: true,
        features: [
          "Client management",
          "Lead Management",
          "Create Accurate & Profitable Estimates",
          "Easily Schedule Jobs",
          "Business Insights"
        ]
      }
    ],
    contact: {
      title: "Contact Us",
      description: "Help your team and organization plan better tasks and focus on what moves the needle.",
      buttonText: "Contact Us",
      note: "* For enterprise-level purchases"
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-zinc-900 mb-3">Budget-friendly pricing</h1>
        <p className="text-zinc-600 max-w-2xl mx-auto">
          Get started free or upgrade to share your impact for all completed tasks with multiple people
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side - Pricing Cards */}
        <div className="lg:col-span-2 space-y-4">
          {pricingData.plans.map((plan) => (
            <div key={plan.id} className="bg-white border border-zinc-200 rounded-lg p-5 relative">
              {plan.isPopular && (
                <div className="absolute -top-2 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">Most Popular</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left column - Price and CTA */}
                <div className="flex flex-col items-start justify-between">
                  <div>
                    <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-2">{plan.name}</h3>
                    <div className="flex items-baseline mb-2">
                      <span className="text-5xl font-bold text-zinc-900">${plan.price}</span>
                      <span className="text-zinc-500 text-lg ml-1 lowercase">{plan.period}</span>
                    </div>
                    {plan.setupFee && (
                      <div className="mb-4">
                        <span className="text-sm text-zinc-600">+ ${plan.setupFee} one-time setup fee</span>
                      </div>
                    )}
                    {!plan.setupFee && <div className="mb-4"></div>}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                    {plan.buttonText}
                  </Button>
                </div>

                {/* Right column - Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-zinc-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Contact Card spanning full height */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white h-full flex flex-col">
            
            <div className="bg-white/20 rounded-lg p-2.5 w-fit mb-5">
              <Phone className="w-5 h-5 text-white" />
            </div>

            <h3 className="text-xl font-bold mb-3">{pricingData.contact.title}</h3>

            <p className="text-blue-100 mb-6 text-sm leading-relaxed">
              {pricingData.contact.description}
            </p>

            <div className="mt-auto">
              <Button
                variant="secondary"
                className="w-full bg-white text-blue-600 hover:bg-zinc-50 font-medium text-sm py-2 mb-3"
              >
                {pricingData.contact.buttonText}
              </Button>

              <p className="text-xs text-blue-200">{pricingData.contact.note}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}