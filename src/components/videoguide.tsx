"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export default function VideoGuideSection() {
  return (
    <section aria-labelledby="video-guide-title" className={cn("hidden dark:block")}>
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <header className="text-center">
          <h2 id="video-guide-title" className="text-pretty text-3xl font-semibold md:text-4xl">
            <span className="text-brand">Connect Top Messaging Channels</span>{" "}
            <span className="text-foreground">with Control Media</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Integrate popular messaging apps for simplified communication, better engagement, and efficient support.
          </p>
        </header>

        {/* Channels row */}
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {["WhatsApp", "Instagram", "Gmail", "Messenger", "Telegram", "iMessage", "Slack"].map((name) => (
            <li key={name} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
              {name}
            </li>
          ))}
        </ul>

        {/* Two-column content */}
        <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">WhatsApp Business API</h3>
            <p className="mt-3 text-muted-foreground">
              Optimize messaging operations and organize workflows. Orchestrate campaigns and respond in real time from
              one dashboard.
            </p>

            <ul className="mt-4 space-y-3">
              {[
                "Targeted outreach via broadcast campaigns",
                "Real-time engagement using live chat",
                "Bulk announcements and offers",
                "Integrate CRMs to understand behavior",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full bg-brand" aria-hidden />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-[color:var(--brand-foreground)]"
              >
                Explore More
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 -z-10 rounded-xl border border-border" aria-hidden />
            <Image
              src="/images/video-guide-hero.png"
              alt="Messaging dashboard preview with WhatsApp overlays"
              width={800}
              height={500}
              priority
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
