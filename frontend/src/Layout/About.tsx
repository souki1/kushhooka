function About() {
  const phoneNumber = '+18476765874'
  const address = '3327 Dempster St, Skokie, IL 60076'
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#07070a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 tracking-wider">
            About Us
          </h2>
        </div>

        {/* About Hookah Section */}
        <div className="mb-16">
          <div className="bg-black border border-amber-400/20 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-400 mb-6 text-center">
                What is Hookah?
              </h3>
              
              <div className="space-y-6 text-white/90 text-base md:text-lg leading-relaxed">
                <p>
                  Hookah, also known as shisha, waterpipe, or narghile, is a traditional Middle Eastern smoking device that has been enjoyed for centuries. It consists of a water-filled base, a pipe, a bowl for tobacco, and a hose with a mouthpiece. The tobacco is heated with charcoal, and the smoke passes through water before being inhaled, creating a smooth and flavorful experience.
                </p>
                
                <p>
                  The art of hookah smoking dates back to ancient Persia and India, where it was originally used for smoking tobacco and herbs. Over time, it spread throughout the Middle East, North Africa, and eventually to the rest of the world. Today, hookah has become a popular social activity, bringing people together in lounges and cafes to relax, socialize, and enjoy a variety of flavored tobacco blends.
                </p>
                
                <p>
                  At Kush Hookah Lounge, we honor this rich tradition while providing a modern, comfortable environment. We offer premium hookah flavors from renowned brands like Al Fakher, Fumari, Starbuzz, and Serbetli. Our expert staff carefully prepares each hookah session, ensuring optimal flavor and smoke quality. Whether you're a seasoned hookah enthusiast or trying it for the first time, we're here to provide an exceptional experience.
                </p>
                
                <div className="mt-8 pt-8 border-t border-amber-400/20">
                  <h4 className="text-2xl font-bold text-amber-400 mb-4">
                    Why Choose Kush Hookah Lounge?
                  </h4>
                  <ul className="space-y-3 list-disc list-inside text-white/80">
                    <li>Premium quality hookah flavors from top international brands</li>
                    <li>Expert preparation by trained staff for the perfect session</li>
                    <li>Comfortable and welcoming atmosphere for groups and individuals</li>
                    <li>VIP options with natural coal and luxury hookahs</li>
                    <li>Late-night hours until 2 AM for your convenience</li>
                    <li>Clean, hygienic environment with strict quality standards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Map Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-black border border-amber-400/20 rounded-lg p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-6">
              Contact Us
            </h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Phone</p>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-amber-400 font-semibold text-lg hover:text-amber-300 transition-colors"
                  >
                    {phoneNumber}
                  </a>
                  <p className="text-white/50 text-xs mt-1">Click to call</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Address</p>
                  <p className="text-white font-semibold text-lg">
                    {address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Hours</p>
                  <p className="text-white font-semibold text-lg">
                    Open until 2 AM
                  </p>
                  <p className="text-white/50 text-xs mt-1">Daily</p>
                </div>
              </div>

              {/* Call Button */}
              <div className="pt-4">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-amber-400 hover:bg-amber-300 text-black font-semibold rounded-lg transition-colors shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now to Reserve
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-black border border-amber-400/20 rounded-lg overflow-hidden">
            <div className="h-full min-h-[400px] relative">
              {/* Note: For production, you'll need to get an embed URL from Google Maps
                  Go to Google Maps, search for the address, click Share > Embed a map
                  and copy the iframe src URL */}
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kush Hookah Lounge Location"
                className="w-full h-full"
              />
            </div>
            <div className="p-4 bg-black/50">
              <p className="text-white/70 text-sm text-center">
                <a
                  href={mapSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-2"
                >
                  <span>Open in Google Maps</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
