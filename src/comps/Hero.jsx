import { useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Hero = () => {
  const [toggleHamburger, settoggleHamburger] = useState(false)
  const [toggleMenu, settoggleMenu] = useState(false)
  return (
    <section id='hero'>
      {/* hero container */}
      <div className='container max-w-6xl mx-auto px-6 py-12'>
        {/* ,menu/Logo Container */}
        <nav className='flex items-center justify-between font-bold text-white'>
          <img src='/images/logo.svg' alt='Loopstudios logo' />
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
          {/* hamburger button */}
          <div className='md:hidden'>
            <button
              id='menu-btn'
              aria-label='menu button'
              type='button'
              className={`z-40 block hamburger md:hidden focus:outline-none ${
                toggleHamburger ? 'open' : ''
              }`}
              onClick={() => {
                settoggleHamburger(!toggleHamburger)
                settoggleMenu(!toggleMenu)
              }}
            >
              <span className='hamburger-top'></span>
              <span className='hamburger-middle'></span>
              <span className='hamburger-bottom'></span>
            </button>
          </div>
        </nav>
        {/* mobile menu */}
        <TransitionGroup>
          {toggleMenu && (
            <CSSTransition classNames='menu-animation' timeout={300}>
              <div
                className={`menu absolute top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black opacity-90 ${
                  toggleMenu ? 'flex' : 'hidden'
                }`}
              >
                <a href='#' className='hover:text-pink-500'>
                  About
                </a>
                <a href='#' className='hover:text-pink-500'>
                  Careers
                </a>
                <a href='#' className='hover:text-pink-500'>
                  Events
                </a>
                <a href='#' className='hover:text-pink-500'>
                  Products
                </a>
                <a href='#' className='hover:text-pink-500'>
                  Support
                </a>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>

        <div className='max-w-lg my-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m32 md:mx-0 md:text-6xl'>
          Impressive Experinces That Deliver
        </div>
      </div>
    </section>
  )
}
export default Hero
