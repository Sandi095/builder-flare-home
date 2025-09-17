export default function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary/10 grid place-items-center text-primary font-bold">F</div>
            <span className="font-header text-base font-semibold text-primary">Farm & Fetch</span>
          </div>
          <p className="mt-4 text-sm text-foreground/80 max-w-sm">Organic, non‑GMO, farm‑fresh recipes for healthy, satisfied pets. Delivered on your schedule.</p>
        </div>
        <div>
          <h4 className="font-header font-semibold text-primary mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><a href="/about" className="hover:text-primary">About</a></li>
            <li><a href="#" className="pointer-events-none opacity-60">Blog</a></li>
            <li><a href="#" className="pointer-events-none opacity-60">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-header font-semibold text-primary mb-3">Help</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><a href="#" className="pointer-events-none opacity-60">Support</a></li>
            <li><a href="#" className="pointer-events-none opacity-60">Shipping</a></li>
            <li><a href="#" className="pointer-events-none opacity-60">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8 py-6 text-xs text-foreground/70">© {new Date().getFullYear()} Farm & Fetch. All rights reserved.</div>
      </div>
    </footer>
  );
}
