import { useState } from 'react'
import entrance from '../assets/entrance .jpeg'
import inside from '../assets/inside.jpeg'
import outside from '../assets/outside.jpeg'
import outside1 from '../assets/outside1.jpeg'

interface GalleryImage {
  id: number
  src: string
  alt: string
  title: string
  description?: string
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  // Sample gallery images - you can replace these with actual images
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: entrance,
      alt: 'Kush Hookah Lounge Interior',
      title: 'Premium Lounge Experience',
      description: 'Experience our luxurious hookah lounge with premium flavors and a relaxing atmosphere.'
    },
    {
      id: 2,
      src: inside,
      alt: 'Kush Hookah Logo',
      title: 'Kush Hookah Brand',
      description: 'Our signature brand representing quality and excellence in hookah culture.'
    },
    {
      id: 3,
      src: outside,
      alt: 'Hookah Setup',
      title: 'Expert Hookah Setup',
      description: 'Our skilled staff prepares each hookah with precision and care for the perfect session.'
    },
    {
      id: 4,
      src: outside1,    
      alt: 'Lounge Atmosphere',
      title: 'Chill Atmosphere',
      description: 'Relax and unwind in our comfortable lounge setting, perfect for groups and individuals.'
    },
    {
      id: 5,
      src: entrance,
      alt: 'Premium Flavors',
      title: 'Wide Selection of Flavors',
      description: 'Choose from our extensive menu of premium hookah flavors from top brands.'
    },
    {
      id: 6,
      src: inside,
      alt: 'VIP Experience',
      title: 'VIP Hookah Experience',
      description: 'Upgrade to our VIP hookah service with natural coal and luxury hookahs.'
    },
    {
      id: 7,
      src: outside,
      alt: 'Social Gathering',
      title: 'Perfect for Groups',
      description: 'Bring your friends and enjoy a memorable hookah session together.'
    },
    {
      id: 8,
      src: outside1,
      alt: 'Late Night Hours',
      title: 'Open Late',
      description: 'We stay open until 2 AM, perfect for late-night sessions and gatherings.'
    }
  ]

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#07070a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 tracking-wider">
            Gallery
          </h2>
          <p className="text-white/70 text-lg">
            Explore our lounge and premium hookah experience
          </p>
        </div>

        {/* Scrollable Gallery Container */}
        <div className="relative">
          {/* Scrollable Gallery */}
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-6 px-2" style={{ scrollbarWidth: 'thin' }}>
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => handleImageClick(image)}
                  className="flex-shrink-0 w-80 md:w-96 cursor-pointer group"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105">
                    {/* Image */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white font-bold text-xl mb-2">
                          {image.title}
                        </h3>
                        <p className="text-white/90 text-sm line-clamp-2">
                          {image.description}
                        </p>
                        <p className="text-amber-400 text-sm mt-2 font-semibold">
                          Click to view more →
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
              ← Scroll to see more images →
            </p>
          </div>
        </div>

        {/* Modal for Expanded View */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeModal}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] bg-black rounded-lg overflow-hidden shadow-2xl"
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
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[60vh] object-contain"
              />

              {/* Details */}
              <div className="p-6 bg-gradient-to-t from-black to-black/80">
                <h3 className="text-amber-400 font-bold text-2xl mb-2">
                  {selectedImage.title}
                </h3>
                {selectedImage.description && (
                  <p className="text-white/90 text-base leading-relaxed">
                    {selectedImage.description}
                  </p>
                )}
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

export default Gallery