import { useState } from 'react'
import entrance from '../assets/entrance .jpeg'
import inside from '../assets/inside.jpeg'
import outside from '../assets/outside.jpeg'
import outside1 from '../assets/outside1.jpeg'

interface AboutCard {
  id: number
  image: string
  title: string
  description: string
  details: string
}

function About() {
  const [selectedCard, setSelectedCard] = useState<AboutCard | null>(null)

  const aboutCards: AboutCard[] = [
    {
      id: 1,
      image: entrance,
      title: 'Our Story',
      description: 'Founded with a passion for creating the perfect hookah experience, Kush Hookah Lounge has been serving the Skokie community since our opening.',
      details: 'We started with a simple vision: to create a space where people can relax, socialize, and enjoy premium hookah in a comfortable atmosphere. Our team is dedicated to providing exceptional service and the highest quality products. We source our flavors from the best brands in the industry and ensure every hookah is prepared with care and expertise.'
    },
    {
      id: 2,
      image: inside,
      title: 'Premium Experience',
      description: 'We offer a wide selection of premium hookah flavors from top brands including Al Fakher, Fumari, Starbuzz, and Serbetli.',
      details: 'Our premium experience includes VIP hookah options with natural coal and luxury hookahs. We maintain strict quality standards and use only the finest materials. Our staff is trained to prepare each hookah session perfectly, ensuring optimal flavor and smoke quality. We also offer fruit heads and special preparations for those looking for an extra special experience.'
    },
    {
      id: 3,
      image: outside,
      title: 'Our Location',
      description: 'Conveniently located at 3327 Dempster St, Skokie, IL 60076, we are easily accessible and open late until 2 AM.',
      details: 'Our lounge is designed for comfort and relaxation. We have spacious seating areas perfect for groups, intimate corners for couples, and a welcoming atmosphere for solo visitors. The location features ample parking and is close to public transportation. We\'re open late to accommodate your schedule, making us the perfect spot for after-work relaxation or late-night gatherings.'
    },
    {
      id: 4,
      image: outside1,
      title: 'Our Mission',
      description: 'To provide an exceptional hookah experience that brings people together in a welcoming and comfortable environment.',
      details: 'Our mission is to create memorable experiences for every guest. We believe in the power of community and connection, and our lounge serves as a gathering place where friendships are formed and good times are shared. We are committed to maintaining the highest standards of quality, service, and hospitality. Every visit should feel special, and we work hard to make that happen.'
    },
    {
      id: 5,
      image: entrance,
      title: 'Quality & Service',
      description: 'We pride ourselves on using only premium products and providing exceptional customer service to every guest.',
      details: 'Quality is at the heart of everything we do. From the selection of our hookah flavors to the preparation of each session, we never compromise. Our staff undergoes regular training to stay updated on the latest techniques and products. We also maintain a clean and hygienic environment, ensuring that every aspect of your visit meets our high standards. Your satisfaction is our priority.'
    },
    {
      id: 6,
      image: inside,
      title: 'Community Focus',
      description: 'We are more than just a hookah lounge - we are a community gathering place where people come together.',
      details: 'Community is important to us. We host events, support local artists, and create a space where everyone feels welcome. Whether you\'re a regular or a first-time visitor, you\'ll find a friendly atmosphere and people who share your appreciation for quality hookah. We value our customers and their feedback, constantly working to improve and enhance the experience we provide.'
    }
  ]

  const handleCardClick = (card: AboutCard) => {
    setSelectedCard(card)
  }

  const closeModal = () => {
    setSelectedCard(null)
  }

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#07070a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 tracking-wider">
            About Us
          </h2>
          <p className="text-white/70 text-lg">
            Learn more about Kush Hookah Lounge and what makes us special
          </p>
        </div>

        {/* Scrollable About Cards Container */}
        <div className="relative">
          {/* Scrollable Cards */}
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-6 px-2" style={{ scrollbarWidth: 'thin' }}>
              {aboutCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(card)}
                  className="flex-shrink-0 w-80 md:w-96 cursor-pointer group"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105 bg-black border border-amber-400/20">
                    {/* Image */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-48 object-cover"
                    />
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-amber-400 font-bold text-xl mb-3">
                        {card.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-3">
                        {card.description}
                      </p>
                      <p className="text-amber-400 text-sm font-semibold">
                        Click to read more →
                      </p>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-white text-sm font-semibold">
                          Learn More
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-4 text-center">
            <p className="text-white/50 text-sm">
              ← Scroll to see more about us →
            </p>
          </div>
        </div>

        {/* Modal for Expanded View */}
        {selectedCard && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeModal}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] bg-black rounded-lg overflow-hidden shadow-2xl border border-amber-400/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image */}
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="w-full h-64 object-cover"
              />

              {/* Details */}
              <div className="p-8 bg-gradient-to-t from-black to-black/80 overflow-y-auto max-h-[calc(90vh-16rem)]">
                <h3 className="text-amber-400 font-bold text-3xl mb-4">
                  {selectedCard.title}
                </h3>
                <p className="text-white/90 text-base leading-relaxed mb-4">
                  {selectedCard.description}
                </p>
                <p className="text-white/80 text-base leading-relaxed">
                  {selectedCard.details}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-hide::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .scrollbar-hide::-webkit-scrollbar-thumb {
          background: rgba(230, 196, 122, 0.5);
          border-radius: 4px;
        }
        .scrollbar-hide::-webkit-scrollbar-thumb:hover {
          background: rgba(230, 196, 122, 0.7);
        }
      `}</style>
    </section>
  )
}

export default About
