"use client"

import { motion } from "framer-motion"

export function Integrations() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Native Instagram and WhatsApp integrations
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Connect your accounts in minutes and sync messages bi-directionally. Replies sent from Control Media are
              delivered back on the original channel.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Official APIs with reliable delivery</li>
              <li>• Map conversations to orders or customers</li>
              <li>• Analytics on response time and CSAT</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border bg-white p-5 shadow-sm">
                <img src="/instagram-logo.png" width={80} height={80} alt="Instagram logo" />
                <p className="mt-3 font-medium text-gray-900">Instagram</p>
                <p className="text-sm text-gray-600">DMs, mentions, story replies</p>
              </div>
              <div className="rounded-xl border bg-white p-5 shadow-sm">
                <img src="/whatsapp-logo.png" width={80} height={80} alt="WhatsApp logo" />
                <p className="mt-3 font-medium text-gray-900">WhatsApp</p>
                <p className="text-sm text-gray-600">Business API, templates</p>
              </div>
              <div className="rounded-xl border bg-white p-5 shadow-sm md:col-span-2">
                <img
                  src="/unified-inbox-screenshot.jpg"
                  width={560}
                  height={140}
                  alt="Unified inbox mock"
                  className="w-full rounded-md"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
