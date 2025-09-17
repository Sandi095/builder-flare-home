import { Link, NavLink } from "react-router-dom";
import {
  ShoppingBag,
  Dog,
  Cat,
  Fish,
  Rabbit,
  Turtle,
  Bird,
  Search,
  User,
} from "lucide-react";

const navItem = (
  to: string,
  label: string,
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-2 px-2 py-1 rounded-full text-sm transition-colors ${
        isActive
          ? "bg-white/10 text-white"
          : "text-white/80 hover:text-white hover:bg-white/10"
      }`
    }
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </NavLink>
);

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-[#042e40] text-white">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white/10 grid place-items-center font-bold">
            R
          </div>
          <span className="font-display text-lg font-semibold">Ricky</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-3">
          {navItem("/shop", "Shop", ShoppingBag)}
          {navItem("/dogs", "Dogs", Dog)}
          {navItem("/cats", "Cats", Cat)}
          {navItem("/fish", "Fish", Fish)}
          {navItem("/small-pets", "Small Pets", Rabbit)}
          {navItem("/reptiles", "Reptiles", Turtle)}
          {navItem("/birds", "Birds", Bird)}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="h-9 w-9 grid place-items-center rounded-full hover:bg-white/10"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Account"
            className="h-9 w-9 grid place-items-center rounded-full hover:bg-white/10"
          >
            <User className="h-5 w-5" />
          </button>
          <Link
            to="/shop"
            aria-label="Cart"
            className="relative h-9 w-9 grid place-items-center rounded-full hover:bg-white/10"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-[#ffe074] text-[#042e40] text-[10px] font-semibold grid place-items-center">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile scrollable categories */}
      <div className="lg:hidden border-t border-white/10">
        <div className="mx-auto max-w-[1160px] overflow-x-auto no-scrollbar px-4">
          <div className="flex items-center gap-2 py-2">
            {navItem("/shop", "Shop", ShoppingBag)}
            {navItem("/dogs", "Dogs", Dog)}
            {navItem("/cats", "Cats", Cat)}
            {navItem("/fish", "Fish", Fish)}
            {navItem("/small-pets", "Small Pets", Rabbit)}
            {navItem("/reptiles", "Reptiles", Turtle)}
            {navItem("/birds", "Birds", Bird)}
          </div>
        </div>
      </div>
    </header>
  );
}
