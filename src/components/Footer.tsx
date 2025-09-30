import { cn } from "@/lib/utils"

export default function Footer() {
  return (
    <footer role="contentinfo" className={cn("hidden dark:block border-t bg-footer text-foreground border-border")}>
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="mb-6 h-1 w-16 bg-brand" aria-hidden />
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="text-sm font-medium tracking-widest text-brand uppercase">Control Media</div>

          <h2 className="text-pretty text-3xl font-semibold leading-tight md:text-4xl">
            <span className="text-brand">Connect With</span> <span className="text-foreground">Your Customers</span>
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Our omnichannel conversational AI platform simplifies business communications. Manage multiple messaging
            channels from one dashboard.
          </p>
        </div>

        <nav aria-label="Footer" className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-brand">Product</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="text-sm text-muted-foreground hover:text-brand" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="text-sm text-muted-foreground hover:text-brand" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-sm text-muted-foreground hover:text-brand" href="#">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand">Solutions</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="text-sm text-muted-foreground hover:text-brand" href="#">
                  E-commerce
                </a>
              </li>
              <li>
                <a className="text-sm text-muted-foreground hover:text-brand" href="#">
                  Support
                </a>
              </li>
              <li>
                <a className="text-sm text-muted-foreground hover:text-brand" href="#">
                  Marketing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand">Company</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="text-sm text-muted-foreground hover:text-brand" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-sm text-muted-foreground hover:text-brand" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-sm text-muted-foreground hover:text-brand" href="#">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand">Resources</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="text-sm text-muted-foreground hover:text-brand" href="#">
                  Docs
                </a>
              </li>
              <li>
                <a className="text-sm text-muted-foreground hover:text-brand" href="#">
                  Guides
                </a>
              </li>
              <li>
                <a className="text-sm text-muted-foreground hover:text-brand" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Control Media</span>
          <span className="text-sm font-medium text-brand">Content • Connect With • Your Customers</span>
        </div>
      </div>
    </footer>
  )
}
