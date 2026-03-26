import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
        
        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src="/brand/hompata-logo-transparent.png"
            alt="Hompata"
            className="
              h-10 sm:h-12 md:h-14 lg:h-16 
              w-auto object-contain 
              transition-all duration-300
              drop-shadow-md
            "
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a className="hover:text-slate-900 transition" href="#rent">
            Rent
          </a>
          <a className="hover:text-slate-900 transition" href="#buy">
            Buy
          </a>
          <a className="hover:text-slate-900 transition" href="#list">
            List a property
          </a>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">
          {/* MENU BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-100 transition"
          >
            ☰
          </button>

          {/* POST */}
          <a
            href="#list"
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 hover:bg-slate-100 transition"
          >
            Post listing
          </a>

          {/* SIGN IN */}
          <a
            href="#"
            className="hidden md:inline-flex h-10 items-center justify-center rounded-xl bg-indigo-600 px-4 text-sm font-semibold text-white hover:bg-indigo-700 transition"
          >
            Sign in
          </a>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end md:hidden">
          
          {/* SIDEBAR */}
          <aside
            className="
              h-full w-72
              bg-blue-900/95
              backdrop-blur-xl
              shadow-[0_20px_60px_rgba(0,0,0,0.4)]
              border-l border-white/10
              flex flex-col
              p-4
              transform transition-transform duration-300 ease-in-out
              translate-x-0
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between pb-4">
              <p className="text-base font-semibold tracking-wide text-white">
                Menu
              </p>

              <button
                onClick={() => setIsOpen(false)}
                className="h-10 w-10 rounded-xl bg-white/90 hover:bg-white transition"
              >
                ✕
              </button>
            </div>

            {/* LINKS */}
            <nav className="flex flex-col gap-3 py-2 text-base">
              {["Rent", "Buy", "List a property"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().split(" ")[0]}`}
                  onClick={() => setIsOpen(false)}
                  className="
                    rounded-xl
                    bg-white/90
                    px-4 py-3
                    font-medium text-slate-900
                    hover:bg-white
                    transition
                  "
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* BUTTONS */}
            <div className="mt-auto pt-4">
              <a
                href="#list"
                onClick={() => setIsOpen(false)}
                className="
                  w-full inline-flex h-11 items-center justify-center
                  rounded-xl bg-indigo-600 text-white font-semibold
                  hover:bg-indigo-700 transition
                "
              >
                Post listing
              </a>

              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="
                  mt-3 w-full inline-flex h-11 items-center justify-center
                  rounded-xl bg-white/90 text-slate-900 font-semibold
                  hover:bg-white transition
                "
              >
                Sign in
              </a>
            </div>
          </aside>

          {/* OVERLAY (LEFT SIDE TRANSPARENCY) */}
          <div
            className="flex-1 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </header>
  );
}