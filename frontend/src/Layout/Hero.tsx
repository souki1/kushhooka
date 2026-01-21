function Hero() {
    return (
        <>
        <main id="home" className="bg-black text-white">
      {/* HERO */}
      <section
        className="relative isolate min-h-[86vh] overflow-hidden bg-cover bg-center brightness-[1.12] contrast-[1.05]"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        {/* ONE premium overlay (balanced brightness) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/40" />

        {/* Subtle warm glow on the right (luxury look) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,200,120,0.15),transparent_55%)]" />

        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl sm:text-6xl leading-[1.05] tracking-tight">
              <span className="text-[#E6C47A] drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
                Kush Hookah
              </span>
              <br />
              <span className="text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.65)]">
                Lounge
              </span>
            </h1>

            <p className="mt-5 text-sm sm:text-base text-white/80 tracking-wide">
              Premium Hookah • Chill Atmosphere • Open Late
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="tel:+18476765874"
                className="inline-flex items-center justify-center rounded-full bg-[#E6C47A] px-7 py-3 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(0,0,0,0.65)] hover:bg-[#F1D18A] transition"
              >
                Call to Reserve
              </a>

              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/25 px-7 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(0,0,0,0.45)] hover:bg-black/40 hover:border-white/30 transition"
              >
                View Menu
              </a>
            </div>

            {/* Info chips */}
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/15 bg-black/45 backdrop-blur-sm px-4 py-2 text-xs text-white/85">
                Rating: <span className="text-white">3.5/5</span>
              </span>
              <span className="rounded-full border border-white/15 bg-black/45 backdrop-blur-sm px-4 py-2 text-xs text-white/85">
                <span className="text-white">118</span> Reviews
              </span>
              <span className="rounded-full border border-white/15 bg-black/45 backdrop-blur-sm px-4 py-2 text-xs text-white/85">
                Open • Closes <span className="text-white">2 AM</span>
              </span>
              <span className="rounded-full border border-white/15 bg-black/45 backdrop-blur-sm px-4 py-2 text-xs text-white/85">
                3327 Dempster St, Skokie, IL
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Premium divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      {/* MENU placeholder (next we’ll build real cards) */}
      <section id="menu" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">Menu</h2>
        <p className="mt-3 text-white/70">
          Next: premium menu cards (Hookah Flavors + Drinks) like your mockup.
        </p>
      </section>
    </main>
    </>
    )
}

export default Hero