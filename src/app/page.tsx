type CardItem = {
  id: string
  title: string
  description: string
  borderClass?: string
  iconBg?: string
  icon?: string
}

const cards: CardItem[] = [
  {
    id: 'ui',
    title: 'User-Friendly Interface',
    description:
      "Navigate effortlessly with our intuitive design, optimised for all devices. Enjoy a seamless experience whether you're on a computer or mobile.",
    borderClass: 'border-gray-200',
    iconBg: 'bg-gray-100',
    icon: '🧭',
  },
  {
    id: 'checkout',
    title: 'Secure Checkout',
    description:
      'Enjoy a safe shopping experience with multiple payment options and SSL encryption. Your personal and financial information is always protected.',
    borderClass: 'border-green-300',
    iconBg: 'bg-green-100',
    icon: '🔒',
  },
  {
    id: 'search',
    title: 'Advanced Search',
    description:
      'Find products quickly with advanced filters, sorting options, and suggestions. Save time and effortlessly locate exactly what you need with ease.',
    borderClass: 'border-amber-300',
    iconBg: 'bg-amber-100',
    icon: '🔍',
  },
  {
    id: 'reviews',
    title: 'Customer Reviews and Ratings',
    description:
      'Make informed decisions with detailed product reviews and ratings from other buyers. Trust the experiences of fellow shoppers to guide choices.',
    borderClass: 'border-rose-300',
    iconBg: 'bg-rose-100',
    icon: '⭐',
  },
  {
    id: 'mobile',
    title: 'Mobile App Integration',
    description:
      'Enhance your shopping experience with our mobile app and push notifications. Stay updated on arrivals and exclusive offers directly on your phone.',
    borderClass: 'border-sky-300',
    iconBg: 'bg-sky-100',
    icon: '📱',
  },
  {
    id: 'security',
    title: 'Security Features',
    description:
      'Protect your data with fraud detection and two-factor authentication. Ensure a secure environment for all transactions and account activities.',
    borderClass: 'border-slate-300',
    iconBg: 'bg-slate-100',
    icon: '🛡️',
  },
]

function Card({ item }: { item: CardItem }) {
  return (
    <div
      className={`rounded-lg bg-white ${item.borderClass ?? 'border-gray-200'} border p-6 flex flex-col gap-3`}
    >
      <div className="flex items-start gap-3">
        <div className={`rounded-md p-2 ${item.iconBg ?? 'bg-gray-100'} text-xl`}>
          {item.icon}
        </div>
        <div className="text-base font-semibold text-gray-900">{item.title}</div>
      </div>
      <div className="text-sm text-gray-600">{item.description}</div>
    </div>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-black p-4 sm:p-8 lg:p-12 font-sans flex flex-col gap-2 sm:gap-4 lg:gap-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <div className="gap-2 sm:gap-4 lg:gap-6 flex flex-col">
          <h1 className="text-lg sm:text-xl lg:text-2xl text-white font-bold">Discover the Exclusive Perks Today</h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400">
            Explore key features designed to enhance your shopping experience with intuitive navigation,
            robust security, and seamless functionality.
          </p>
          <div>
            <button
              type="button"
              className="rounded-lg border border-gray-600 text-center px-4 py-2 text-white flex items-center gap-2"
            >
              See all features
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <Card key={c.id} item={c} />
          ))}
        </div>
      </div>
    </div>
  )
}
