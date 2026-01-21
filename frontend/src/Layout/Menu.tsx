function Menu() {
  const alFakherFlavors = [
    { id: 1, name: "Kush", description: "Grapefruit, Orange & Rose" },
    { id: 2, name: "Double Apple" },
    { id: 3, name: "White Peach" },
    { id: 4, name: "Bahama Mama", description: "Mango, Peach & Orange" },
    { id: 5, name: "Watermelon" },
    { id: 6, name: "Mango Raspberry" },
    { id: 7, name: "Blueberry" },
    { id: 8, name: "Passion Fruit", description: "Mixed Fruit" },
    { id: 9, name: "Very Berry", description: "Blueberry & Strawberry" },
    { id: 10, name: "ZootEm", description: "Blueberry, Guava & Kiwi" },
    { id: 11, name: "Sex on the Beach", description: "Blumist, Peach & Orange" },
    { id: 12, name: "Chicago", description: "Blueberry, Kiwi & Vanilla" },
    { id: 13, name: "Citrus Breeze", description: "Lemon, Orange & Blumist" },
    { id: 14, name: "Orange Mint" },
    { id: 15, name: "Watermelon Mint" },
    { id: 16, name: "Wild Mint" },
    { id: 17, name: "Grape Mint" },
    { id: 18, name: "Blueberry Mint" },
    { id: 19, name: "Tropical Mint", description: "Blueberry, Orange & Mint" },
    { id: 20, name: "Lemon Mint" },
    { id: 21, name: "Double Apple Mint" },
    { id: 22, name: "Citrus Mint" },
  ]

  const fumariFlavors = [
    { id: 25, name: "Lemon Mint" },
    { id: 26, name: "Spiced Chai" },
    { id: 27, name: "White Gummy Bear" },
  ]

  const starbuzzFlavors = [
    { id: 29, name: "Blumist" },
    { id: 30, name: "Irish Peach" },
  ]

  const serbetliFlavors = [
    { id: 32, name: "Ice Berry Tunes" },
    { id: 34, name: "Istanbul Nights" },
    { id: 35, name: "Lime Lychee Blueberry" },
    { id: 36, name: "Snake" },
    { id: 37, name: "Flavor of the Month" },
  ]

  return (
    <section id="menu" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#07070a]">
      <div className="max-w-4xl mx-auto">
        {/* Menu Container with Decorative Borders */}
        <div className="relative bg-black py-12 px-8 md:px-12 shadow-2xl">
          {/* Decorative Rope-like Border Effect - Left */}
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-b from-amber-800 via-amber-700 to-amber-800 opacity-70">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
          </div>
          {/* Decorative Rope-like Border Effect - Right */}
          <div className="absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-b from-amber-800 via-amber-700 to-amber-800 opacity-70">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-amber-600/50 to-transparent"></div>
          </div>

          {/* Header Information */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 tracking-wider">
             Kush Hookah Lounge
            </h1>
            <p className="text-white text-lg md:text-xl mb-1">
              (847) 676 - KUSH
            </p>
            <p className="text-white text-sm md:text-base">
              3327 Dempster St. Skokie IL, 60076
            </p>
          </div>

          {/* AL FAKHER FLAVORS Section */}
          <div className="mb-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-400 inline-block px-4">
                <span className="text-amber-500">›</span> AL FAKHER FLAVORS $17 <span className="text-amber-500">‹</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {alFakherFlavors.map((flavor) => (
                <div key={flavor.id} className="text-white text-sm md:text-base">
                  <span className="text-amber-400 font-semibold">
                    {String(flavor.id).padStart(2, '0')}.
                  </span>{' '}
                  <span className="font-medium">{flavor.name}</span>
                  {flavor.description && (
                    <span className="text-gray-300"> ({flavor.description})</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Premium Brands Section */}
          <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* FUMARI */}
              <div>
                <div className="border-2 border-amber-500 text-center py-2 mb-4">
                  <h3 className="text-xl font-bold text-amber-400">FUMARI $20</h3>
                </div>
                <div className="space-y-2">
                  {fumariFlavors.map((flavor) => (
                    <div key={flavor.id} className="text-white text-sm md:text-base">
                      <span className="text-amber-400 font-semibold">
                        {flavor.id}.
                      </span>{' '}
                      <span className="font-medium">{flavor.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* STARBUZZ */}
              <div>
                <div className="border-2 border-amber-500 text-center py-2 mb-4">
                  <h3 className="text-xl font-bold text-amber-400">STARBUZZ $20</h3>
                </div>
                <div className="space-y-2">
                  {starbuzzFlavors.map((flavor) => (
                    <div key={flavor.id} className="text-white text-sm md:text-base">
                      <span className="text-amber-400 font-semibold">
                        {flavor.id}.
                      </span>{' '}
                      <span className="font-medium">{flavor.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SERBETLI */}
              <div>
                <div className="border-2 border-amber-500 text-center py-2 mb-4">
                  <h3 className="text-xl font-bold text-amber-400">SERBETLI $20</h3>
                </div>
                <div className="space-y-2">
                  {serbetliFlavors.map((flavor) => (
                    <div key={flavor.id} className="text-white text-sm md:text-base">
                      <span className="text-amber-400 font-semibold">
                        {flavor.id}.
                      </span>{' '}
                      <span className="font-medium">{flavor.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* VIP HOOKAHS Section */}
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-2 inline-block px-4">
              <span className="text-amber-500">›</span> VIP HOOKAHS $25 <span className="text-amber-500">‹</span>
            </h2>
            <p className="text-white text-sm md:text-base">
              (Natural Coal • Luxury Hookah)
            </p>
          </div>

          {/* EXTRAS Section */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
              EXTRAS
            </h2>
            <div className="text-white text-sm md:text-base space-y-2">
              <p>Fruit Heads (Market Price) • Refills $6 to $10 depending on flavor</p>
              <p>If you share a hookah or you're not smoking, an additional $5 per person will be added to bill.</p>
              <p className="mt-4 font-semibold">(TWO HOUR TIME LIMIT)</p>
            </div>
          </div>

          {/* General Information Box */}
          <div className="border-2 border-amber-500 p-6 space-y-4">
            <div className="text-white text-sm md:text-base space-y-2">
              <p className="font-semibold">18% Gratuity + Tax Included</p>
              <p>Cash Only • ATM Inside</p>
            </div>
            
            <div className="pt-4 border-t border-amber-500/30">
              <p className="text-white text-sm md:text-base font-bold uppercase mb-2">
                HEALTH TIPS: KEEP YOURSELF HYDRATED WHILE SMOKING.
              </p>
              <p className="text-white text-sm md:text-base font-bold uppercase mb-2">
                TRY A FEW SNACKS OR ORDER FOOD FROM OUTSIDE.
              </p>
              <p className="text-white text-sm md:text-base font-bold uppercase">
                TAKE A BREAK DURING HOOKAH SESSIONS.
              </p>
            </div>
          </div>

          {/* Session Duration */}
          <div className="mt-6 text-center">
            <p className="text-white text-xs md:text-sm">
              FOR BEST HOOKAH SESSION EXPERIENCE EXPECT HOOKAH TO LAST 45-60 MIN
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu