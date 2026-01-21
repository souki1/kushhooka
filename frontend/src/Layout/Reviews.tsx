import { useState } from 'react'

interface Review {
  id: number
  name: string
  rating: number
  date: string
  review: string
  fullReview?: string
  verified?: boolean
}

function Reviews() {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null)

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Michael Johnson',
      rating: 5,
      date: '2 weeks ago',
      review: 'Amazing atmosphere and great hookah flavors! The staff is friendly and the lounge is clean. Highly recommend!',
      fullReview: 'I\'ve been coming to Kush Hookah Lounge for months now, and it never disappoints. The atmosphere is perfect - not too loud, great lighting, and comfortable seating. The hookah flavors are always fresh and well-prepared. The staff knows what they\'re doing and are always willing to help you choose the perfect flavor. The prices are reasonable, and the two-hour time limit is fair. I love that they stay open late - perfect for after-work relaxation. This is definitely my go-to spot for hookah in Skokie!',
      verified: true
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      rating: 4,
      date: '1 month ago',
      review: 'Great selection of flavors and good service. The VIP hookah is worth the extra cost. Will definitely come back!',
      fullReview: 'My friends and I had a great time here last weekend. We tried the VIP hookah option and it was excellent - the natural coal made a noticeable difference in the flavor. The staff was attentive and checked on us regularly. The lounge has a nice vibe, though it can get a bit crowded on weekends. The only minor issue was the wait time, but it was worth it. The fruit head option looked amazing, though we didn\'t try it this time. Overall, a solid hookah lounge experience!',
      verified: true
    },
    {
      id: 3,
      name: 'David Chen',
      rating: 5,
      date: '3 weeks ago',
      review: 'Best hookah lounge in the area! Premium quality, excellent service, and the ambiance is perfect for hanging out with friends.',
      fullReview: 'This place is fantastic! I\'ve tried several hookah lounges in the area, and Kush Hookah Lounge stands out. The quality of the hookah is consistently excellent - great clouds, smooth smoke, and the flavors are authentic. The staff is knowledgeable and friendly. I appreciate that they use quality brands like Al Fakher and Fumari. The lounge itself is well-maintained and has a great atmosphere. The location is convenient with good parking. I\'ve become a regular here and always bring friends when they visit. Highly recommend checking it out!',
      verified: true
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      rating: 4,
      date: '2 months ago',
      review: 'Nice place with good vibes. The hookah was well-prepared and the flavors were on point. Only wish they had more seating options.',
      fullReview: 'I had a pleasant experience at Kush Hookah Lounge. The hookah was prepared well and the flavors were good. I tried the Double Apple Mint and it was exactly what I expected. The staff was friendly and the atmosphere was relaxed. The only thing I\'d note is that on busy nights, seating can be limited, so it\'s good to come early or call ahead. The pricing is fair for the quality you get. I\'ll definitely return, especially for the late-night hours which are perfect for my schedule.',
      verified: false
    },
    {
      id: 5,
      name: 'James Wilson',
      rating: 5,
      date: '1 week ago',
      review: 'Outstanding experience! The staff went above and beyond to make sure we had a great time. The hookah quality is top-notch.',
      fullReview: 'Wow, what an experience! My group of friends and I came here for a birthday celebration, and the staff made it special. They helped us choose the perfect flavors and even gave us some recommendations based on our preferences. The hookah was prepared perfectly - great clouds, smooth smoke, and the flavors lasted the entire session. The lounge has a great energy without being too loud. The two-hour limit was perfect for our group. We\'ll definitely be back for more celebrations!',
      verified: true
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      rating: 4,
      date: '3 weeks ago',
      review: 'Good selection of flavors and decent prices. The atmosphere is chill and perfect for a relaxed evening. Staff is helpful.',
      fullReview: 'I enjoyed my visit to Kush Hookah Lounge. The selection of flavors is impressive, and I appreciate that they have options from multiple premium brands. The staff was helpful in explaining the different options and helping me choose. The hookah was good quality and lasted well throughout the session. The atmosphere is laid-back, which I prefer. The only reason I\'m giving 4 stars instead of 5 is that I wish they had more non-mint options, but that\'s just personal preference. Overall, a solid hookah lounge that I\'d recommend.',
      verified: true
    },
    {
      id: 7,
      name: 'Robert Brown',
      rating: 5,
      date: '4 days ago',
      review: 'Excellent hookah lounge! The quality is consistent, the staff is professional, and the location is convenient. My favorite spot!',
      fullReview: 'I\'ve been a regular at Kush Hookah Lounge for over a year now, and it\'s become my favorite spot. The consistency in quality is what keeps me coming back - every visit is as good as the last. The staff recognizes regulars and always makes you feel welcome. I love trying different flavors, and they always have something new or interesting to try. The VIP option is great for special occasions. The lounge is always clean, and they maintain good hygiene standards. The late hours are perfect for my schedule. Can\'t recommend this place enough!',
      verified: true
    },
    {
      id: 8,
      name: 'Amanda Lee',
      rating: 4,
      date: '2 weeks ago',
      review: 'Nice atmosphere and good hookah. The prices are fair and the service is quick. Great place to unwind after work.',
      fullReview: 'I came here with a coworker after a long day, and it was exactly what we needed. The lounge has a relaxing atmosphere that helps you decompress. The hookah was prepared quickly and tasted great. We tried the Watermelon Mint and it was refreshing. The staff was efficient and friendly. The location is easy to get to, and parking wasn\'t an issue. The two-hour session was perfect for catching up and relaxing. I\'ll definitely come back, especially since they\'re open late. Good value for the quality you get.',
      verified: false
    }
  ]

  const handleReviewClick = (review: Review) => {
    setSelectedReview(review)
  }

  const closeModal = () => {
    setSelectedReview(null)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#07070a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 tracking-wider">
            Customer Reviews
          </h2>
          <p className="text-white/70 text-lg">
            See what our customers are saying about their experience
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex items-center">
              {renderStars(4)}
            </div>
            <span className="text-white/70 text-sm ml-2">4.5/5 from 118 reviews</span>
          </div>
        </div>

        {/* Scrollable Reviews Container */}
        <div className="relative">
          {/* Scrollable Reviews */}
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-6 px-2" style={{ scrollbarWidth: 'thin' }}>
              {reviews.map((review) => (
                <div
                  key={review.id}
                  onClick={() => handleReviewClick(review)}
                  className="flex-shrink-0 w-80 md:w-96 cursor-pointer group"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105 bg-black border border-amber-400/20 p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-white font-bold text-lg">
                            {review.name}
                          </h3>
                          {review.verified && (
                            <span className="text-amber-400 text-xs bg-amber-400/20 px-2 py-1 rounded">
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <p className="text-white/50 text-xs">
                          {review.date}
                        </p>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-4 flex-grow">
                      {review.review}
                    </p>

                    {/* Footer */}
                    <div className="mt-auto">
                      <p className="text-amber-400 text-sm font-semibold">
                        Click to read full review →
                      </p>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-white text-sm font-semibold">
                          Read Full Review
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
              ← Scroll to see more reviews →
            </p>
          </div>
        </div>

        {/* Modal for Expanded Review */}
        {selectedReview && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeModal}
          >
            <div
              className="relative max-w-3xl w-full max-h-[90vh] bg-black rounded-lg overflow-hidden shadow-2xl border border-amber-400/30"
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

              {/* Content */}
              <div className="p-8 overflow-y-auto max-h-[90vh]">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-white font-bold text-2xl">
                      {selectedReview.name}
                    </h3>
                    {selectedReview.verified && (
                      <span className="text-amber-400 text-xs bg-amber-400/20 px-2 py-1 rounded">
                        Verified Customer
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex">
                      {renderStars(selectedReview.rating)}
                    </div>
                    <span className="text-white/70 text-sm">
                      {selectedReview.date}
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <div className="space-y-4">
                  <p className="text-white/90 text-base leading-relaxed">
                    {selectedReview.review}
                  </p>
                  {selectedReview.fullReview && (
                    <p className="text-white/80 text-base leading-relaxed">
                      {selectedReview.fullReview}
                    </p>
                  )}
                </div>
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

export default Reviews
