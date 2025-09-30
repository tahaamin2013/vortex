"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Unified inbox",
    body: "View and respond to Instagram and WhatsApp in one place.",
  },
  {
    title: "Smart automation",
    body: "Auto-replies that feel human and reduce first response time.",
  },
  {
    title: "Team workflows",
    body: "Assign, tag, and prioritize conversations effortlessly.",
  },
]

export function FeatureCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="mb-10 text-center">
        <h2 className="text-balance text-3xl font-semibold md:text-4xl">Made for fast support</h2>
        <p className="mt-3 text-gray-600 md:text-lg">Modern tools to help you scale conversations across channels.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
          >
            <Card className="h-full border-blue-100 hover:border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-700">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{f.body}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
