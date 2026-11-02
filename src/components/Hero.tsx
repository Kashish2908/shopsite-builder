import React from 'react'

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-137.5 px-5 text-center overflow-hidden font-sans">

      {/* Small Label */}
      <div className="mb-6 flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-blue-100 text-indigo-600 text-xs font-semibold tracking-wide">
        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
        MADE FOR SMALL BUSINESSES
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] text-gray-950">
        Your shop,
        <br />
        online from{' '}
        <span className="text-indigo-500">
          one simple form.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-xl text-base md:text-md leading-relaxed text-gray-500">
        Give your shop a beautiful online presence. Get a mobile-friendly page
        with Call and WhatsApp buttons, a searchable catalog, and a map link.
      </p>

      {/* CTA */}
      <button className="mt-8 flex items-center gap-3 px-5 py-2 bg-gray-950 hover:bg-indigo-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-gray-200 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        Build your shop page
        <span className="text-lg"><i className="ri-arrow-right-double-line"></i></span>
      </button>

      {/* Supporting Text */}
      <p className="mt-4 text-xs text-gray-400">
        No coding required · Simple setup · Mobile ready
      </p>

    </section>
  )
}

export default Hero