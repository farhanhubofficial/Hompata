import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  New: list vacancies & properties for sale
                </div>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                  Find a home to <span className="text-indigo-700">rent</span>{' '}
                  or <span className="text-indigo-700">buy</span> — faster.
                </h1>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                  Hompata connects landlords, tenants, sellers, and buyers in one
                  place. Post vacancies, upload properties for sale, and browse
                  listings with clear details.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#rent"
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white hover:bg-indigo-700"
                  >
                    Browse rentals
                  </a>
                  <a
                    href="#buy"
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Browse for sale
                  </a>
                </div>

                <div className="mt-6 grid max-w-xl grid-cols-3 gap-3 text-center text-xs text-slate-600">
                  <div className="rounded-xl border border-slate-200 bg-white px-3 py-3">
                    <div className="text-base font-semibold text-slate-900">
                      Verified
                    </div>
                    <div className="mt-1">Listings (soon)</div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white px-3 py-3">
                    <div className="text-base font-semibold text-slate-900">
                      Smart
                    </div>
                    <div className="mt-1">Search (soon)</div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white px-3 py-3">
                    <div className="text-base font-semibold text-slate-900">
                      Fast
                    </div>
                    <div className="mt-1">Publishing</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-900">
                    Quick search
                  </div>
                  <div className="text-xs text-slate-500">demo UI</div>
                </div>

                <div className="mt-4 grid gap-3">
                  <label className="grid gap-1">
                    <span className="text-xs font-medium text-slate-700">
                      Location
                    </span>
                    <input
                      className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none ring-indigo-600 placeholder:text-slate-400 focus:ring-2"
                      placeholder="e.g. Accra, East Legon"
                    />
                  </label>

                  <div className="grid grid-cols-2 gap-3">
                    <label className="grid gap-1">
                      <span className="text-xs font-medium text-slate-700">
                        Type
                      </span>
                      <select className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none ring-indigo-600 focus:ring-2">
                        <option>Rent</option>
                        <option>Buy</option>
                      </select>
                    </label>
                    <label className="grid gap-1">
                      <span className="text-xs font-medium text-slate-700">
                        Bedrooms
                      </span>
                      <select className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none ring-indigo-600 focus:ring-2">
                        <option>Any</option>
                        <option>1+</option>
                        <option>2+</option>
                        <option>3+</option>
                      </select>
                    </label>
                  </div>

                  <button
                    type="button"
                    className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Search
                  </button>

                  <p className="text-xs text-slate-500">
                    Next step: we’ll power this with Firebase + search filters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="rent" className="mx-auto w-full max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Latest vacancies
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                New rental listings will appear here.
              </p>
            </div>
            <a
              href="#"
              className="hidden text-sm font-semibold text-indigo-700 hover:text-indigo-800 sm:inline"
            >
              View all
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="h-36 rounded-xl bg-slate-100" />
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Coming soon
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      Location • Beds • Baths
                    </div>
                  </div>
                  <div className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    Rent
                  </div>
                </div>
                <div className="mt-4 text-sm font-semibold text-slate-900">
                  GHS — / month
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="buy" className="bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-14">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Homes for sale
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Sellers can upload properties; buyers can browse here.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="h-36 rounded-xl bg-slate-200/60" />
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        Coming soon
                      </div>
                      <div className="mt-1 text-xs text-slate-500">
                        Area • Beds • Baths
                      </div>
                    </div>
                    <div className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                      Sale
                    </div>
                  </div>
                  <div className="mt-4 text-sm font-semibold text-slate-900">
                    GHS —
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="list" className="mx-auto w-full max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-600 to-slate-900 px-6 py-10 text-white sm:px-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Landlord or seller?
                </h2>
                <p className="mt-2 text-sm text-white/80">
                  Post your vacancy or property for sale in minutes. Next we’ll
                  add Firebase sign-in and a listing form.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <a
                  href="#"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-slate-900 hover:bg-white/90"
                >
                  Create an account
                </a>
                <a
                  href="#"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 text-sm font-semibold text-white hover:bg-white/15"
                >
                  Learn how it works
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
