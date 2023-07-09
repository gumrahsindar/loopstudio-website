const Footer = () => {
  return (
    <section id='footer' className='bg-black'>
      <div className='container max-w-6xl py-10 mx-auto'>
        {/* Footer Flex Container */}
        <div className='flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start '>
          {/* Menu & Logo Container */}
          <div className='flex flex-col items-center space-y-8 md:items-start md:space-y-4'>
            {/* Logo */}
            <div className='h-8'>
              <img src='images/logo.svg' alt='' className='w44 md:ml-3' />
            </div>
            {/* Menu */}
            <div className='flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3'>
              {/* Item 1 */}
              <div className='h-10 group'>
                <a href='#'>About</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
              {/* Item 1 */}
              <div className='h-10 group'>
                <a href='#'>About</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
              {/* Item 2 */}
              <div className='h-10 group'>
                <a href='#'>Careers</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
              {/* Item 3 */}
              <div className='h-10 group'>
                <a href='#'>Events</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
              {/* Item 4 */}
              <div className='h-10 group'>
                <a href='#'>Products</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
              {/* Item 5 */}
              <div className='h-10 group'>
                <a href='#'>Support</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
            </div>
          </div>
          {/* Social & Copyright Container */}
          <div className='flex flex-col items-start justify-between space-y-4 text-gray-500'>
            {/* Icons Container */}
            <div className='flex items-center justify-center space-x-4 md:justify-end mx-auto md:mx-0'>
              {/* Icon 1 */}
              <div className='h-8 group'>
                <a href='#'>
                  <img
                    src='/images/icon-facebook.svg'
                    alt='facebook icon'
                    className='h-6'
                  />
                </a>
              </div>
              <div className='h-8 group'>
                <a href='#'>
                  <img
                    src='/images/icon-twitter.svg'
                    alt='facebook icon'
                    className='h-6'
                  />
                </a>
              </div>
              <div className='h-8 group'>
                <a href='#'>
                  <img
                    src='/images/icon-pinterest.svg'
                    alt='facebook icon'
                    className='h-6'
                  />
                </a>
              </div>
              <div className='h-8 group'>
                <a href='#'>
                  <img
                    src='/images/icon-instagram.svg'
                    alt='facebook icon'
                    className='h-6'
                  />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className='font-bold text-gray-300'>
              &copy; 2023 Loopstudios. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Footer
