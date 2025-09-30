"use client"

import { Check } from "lucide-react"
import { LineShadowText } from "@/components/line-shadow-text"
import { ShimmerButton } from "@/components/shimmer-button"

const bullets = [
  "Unified inbox across website, apps, and messaging platforms.",
  "Continues conversations across channels without losing context.",
  "Enables 24/7 customer engagement without extra staff.",
  "Built-in calendar for frictionless meeting bookings.",
]

export default function HeroModern() {
  return (
    <section aria-label="Hero" className="relative overflow-hidden bg-background text-foreground">
      {/* Background grid + glow (subtle, performant) */}
      <div aria-hidden="true">
        {/* soft primary glow */}
        <div className="pointer-events-none absolute -top-40 right-1/3 h-[42rem] w-[42rem] rounded-full bg-primary/20 blur-3xl" />
        {/* faint grid with radial mask */}
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15] [background:
            linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),
            linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)
          ] [background-size:40px_40px]"
        />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto max-w-6xl px-4 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Copy column */}
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <span className="sr-only">Brand</span>
                Control Media
              </div>

              {/* Heading */}
              <h1 className="mt-4 text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Connect with Customers{" "}
                <LineShadowText className="not-italic font-black" shadowColor={"hsl(var(--primary))"}>
                  Everywhere
                </LineShadowText>
              </h1>

              {/* Subheading */}
              <p className="mt-5 max-w-prose text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                Unify chats from your website, apps, and messaging platforms into one inbox. Continue conversations
                across channels without losing context.
              </p>

              {/* Bullets */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {bullets.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-border bg-primary text-primary-foreground">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <p className="text-sm md:text-base text-foreground/90">{item}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#book-demo" aria-label="Book a demo">
                  <ShimmerButton
                    className="px-6 py-3 rounded-xl font-semibold border-border text-primary-foreground"
                    background="hsl(var(--primary))"
                  >
                    Book a demo
                  </ShimmerButton>
                </a>
                <a
                  href="#features"
                  className="inline-block rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background/60"
                >
                  See features
                </a>
              </div>

              {/* Trust bar */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="rounded-md border border-border bg-card px-3 py-2">Trusted by 1,200+ teams</div>
                <div className="rounded-md border border-border bg-card px-3 py-2">Avg. reply time: &lt; 2m</div>
                <div className="rounded-md border border-border bg-card px-3 py-2">24/7 global support</div>
              </div>
            </div>

            {/* Visual column */}
            <div className="relative mx-auto w-full max-w-lg">
              {/* Card stack mock to suggest product UI without images */}
              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-3xl bg-primary/10 blur-2xl" aria-hidden="true" />
                <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-20 rounded bg-primary/30" />
                    <div className="h-2 w-10 rounded bg-muted-foreground/30" />
                  </div>
                  <div className="mt-4 h-24 rounded-lg border border-dashed border-border/60" />
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="h-14 rounded-lg border border-border/70 bg-background/70" />
                    <div className="h-14 rounded-lg border border-border/70 bg-background/70" />
                    <div className="h-14 rounded-lg border border-border/70 bg-background/70" />
                  </div>
                  <div className="mt-4 h-8 w-32 rounded-md bg-primary/20" />
                </div>

                <div className="mt-4 translate-x-6 rounded-2xl border border-border bg-card/70 p-4 shadow-sm">
                  <div className="h-3 w-24 rounded bg-muted-foreground/20" />
                  <div className="mt-3 h-9 rounded-md border border-border bg-background/70" />
                </div>

                <div className="mt-4 -translate-x-6 rounded-2xl border border-border bg-card/70 p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary/30" />
                    <div className="h-3 w-28 rounded bg-muted-foreground/20" />
                  </div>
                  <div className="mt-3 h-7 w-24 rounded-md bg-primary/25" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
