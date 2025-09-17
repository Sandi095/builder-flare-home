import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/80">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-primary/10 grid place-items-center text-primary font-bold">F</div>
          <span className="font-header text-lg font-semibold text-primary">Farm & Fetch</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-primary" : "text-foreground/80 hover:text-primary")}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "text-primary" : "text-foreground/80 hover:text-primary")}>About</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Button className="rounded-full px-5 py-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90">View Plans</Button>
        </div>
      </div>
    </header>
  );
}
