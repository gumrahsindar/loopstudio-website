import { useState } from 'react'

const Hero = () => {
  const [toggleHamburger, settoggleHamburger] = useState(false)
  return (
    <section id='hero'>
      {/* hero container */}
      <div className='container max-w-6xl mx-auto px-6 py-12'>
        {/* ,menu/Logo Container */}
        <nav className='flex items-center justify-between font-bold text-white'>
          <img src='images/logo.svg' alt='' />
          {/* Menu */}
          <div className='hidden h-10 font-alata md:flex md:space-x-8'>
            <div className='group'>
              <a href='#'>About</a>
              <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
            </div>
            <div className='group'>
              <a href='#'>Careers</a>
              <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
            </div>
            <div className='group'>
              <a href='#'>Events</a>
              <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
            </div>
            <div className='group'>
              <a href='#'>Product</a>
              <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
            </div>
            <div className='group'>
              <a href='#'>Support</a>
              <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
            </div>
          </div>
          {/* Hamburger button */}
          <div className='md:hidden'>
            <button
              id='menu-btn'
              type='button'
              className={`z-40 block hamburger md:hidden focus:outline-none ${
                toggleHamburger ? 'open' : ''
              }`}
              onClick={() => settoggleHamburger(!toggleHamburger)}
            >
              <span className='hamburger-top'></span>
              <span className='hamburger-middle'></span>
              <span className='hamburger-bottom'></span>
            </button>
          </div>
        </nav>
        {/* @todo mobile menu */}

        <div className='max-w-lg my-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m32 md:mx-0 md:text-6xl'>
          Impressive Experinces That Deliver
        </div>
      </div>
    </section>
  )
}
export default Hero
