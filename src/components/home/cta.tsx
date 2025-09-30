"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="bg-blue-700 text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 text-center md:py-16">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="text-balance text-3xl font-semibold md:text-4xl"
        >
          Be everywhere your customers are — from one place
        </motion.h3>
        <p className="mx-auto mt-3 max-w-2xl text-blue-100 md:text-lg">
          Start your 14-day free trial and connect your Instagram and WhatsApp in minutes.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            Start free trial
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-600 bg-transparent">
            Talk to sales
          </Button>
        </div>
      </div>
    </section>
  )
}
