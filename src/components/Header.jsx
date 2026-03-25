import { useEffect, useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="/" className="flex items-center">
          <img
            src="/brand/hompata-logo.png"
            alt="Hompata"
            className="h-12 w-auto max-w-[220px] object-contain saturate-150 contrast-125 drop-shadow-[0_10px_18px_rgba(0,0,0,0.22)] sm:h-14 md:h-16"
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a className="hover:text-slate-900" href="#rent">
            Rent
          </a>
          <a className="hover:text-slate-900" href="#buy">
            Buy
          </a>
          <a className="hover:text-slate-900" href="#list">
            List a property
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 md:hidden"
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                fill="currentColor"
                d="M4 6.75A.75.75 0 0 1 4.75 6h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 6.75ZM4 12a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 12Zm0 5.25A.75.75 0 0 1 4.75 16.5h14.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1-.75-.75Z"
              />
            </svg>
          </button>
          <a
            href="#list"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            Post listing
          </a>
          <a
            href="#"
            className="hidden h-10 items-center justify-center rounded-xl bg-indigo-600 px-4 text-sm font-semibold text-white hover:bg-indigo-700 sm:inline-flex"
          >
            Sign in
          </a>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/40"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
              <img
                src="/brand/hompata-logo.png"
                alt="Hompata"
                className="h-12 w-auto max-w-[200px] object-contain saturate-150 contrast-125"
              />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                aria-label="Close menu"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M6.22 6.22a.75.75 0 0 1 1.06 0L12 10.94l4.72-4.72a.75.75 0 1 1 1.06 1.06L13.06 12l4.72 4.72a.75.75 0 1 1-1.06 1.06L12 13.06l-4.72 4.72a.75.75 0 1 1-1.06-1.06L10.94 12 6.22 7.28a.75.75 0 0 1 0-1.06Z"
                  />
                </svg>
              </button>
            </div>

            <nav className="px-4 py-4">
              <a
                className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
                href="#rent"
                onClick={() => setIsOpen(false)}
              >
                Rentals
              </a>
              <a
                className="mt-1 flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
                href="#buy"
                onClick={() => setIsOpen(false)}
              >
                Buy
              </a>
              <a
                className="mt-1 flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
                href="#list"
                onClick={() => setIsOpen(false)}
              >
                List a property
              </a>
            </nav>

            <div className="mt-auto border-t border-slate-200 px-4 py-4">
              <a
                href="#list"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Post listing
              </a>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Sign in
              </a>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  )
}

