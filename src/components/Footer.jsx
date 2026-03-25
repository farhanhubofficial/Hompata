export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src="/brand/hompata-logo.png"
              alt="Hompata"
              className="h-14 w-auto max-w-[240px] object-contain saturate-150 contrast-125 drop-shadow-[0_10px_18px_rgba(0,0,0,0.22)]"
            />
          </div>
          <p className="mt-2 max-w-md text-sm text-slate-600">
            A simple place for landlords to post vacancies and properties for
            sale, and for tenants and buyers to find their next home.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Explore</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a className="hover:text-slate-900" href="#rent">
                Rentals
              </a>
            </li>
            <li>
              <a className="hover:text-slate-900" href="#buy">
                Homes for sale
              </a>
            </li>
            <li>
              <a className="hover:text-slate-900" href="#list">
                Post a listing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a className="hover:text-slate-900" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-slate-900" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:text-slate-900" href="#">
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Hompata. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:text-slate-700" href="#">
              Terms
            </a>
            <a className="hover:text-slate-700" href="#">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

