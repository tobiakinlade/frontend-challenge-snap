import { useState } from 'react';
import Image from 'next/image';
import {
  AtSymbolIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ClipboardListIcon,
  ClockIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';

function HomePage() {
  const [isOpen, setIsIOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className='flex  p-2  justify-between'>
        <div className='flex'>
          <Image
            height={40}
            width={80}
            className='sticky top-0'
            src='/images/logo.svg'
            objectFit='contain'
          />

          <div className='hidden hover hover:text-black cursor-pointer text-gray-500 ml-4 mt-2 sm:inline-flex space-x-3 p-1'>
            <div className='flex' onClick={() => setIsIOpen(!isOpen)}>
              {!isOpen ? (
                <div className=''>
                  <div className='flex'>
                    <p>Features</p>
                    <ChevronDownIcon className='h-7 w-7 text-gray-500' />
                  </div>
                </div>
              ) : (
                <div className=''>
                  <div className='flex'>
                    <p>Features</p>
                    <ChevronUpIcon className='h-7 w-7 text-gray-500' />
                  </div>
                </div>
              )}
            </div>

            <div
              className='flex  '
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            >
              {!isCompanyOpen ? (
                <div className='flex'>
                  <p>Company</p>
                  <ChevronDownIcon className='h-7 w-7 text-gray-500' />
                </div>
              ) : (
                <div className='flex'>
                  <p>Company</p>
                  <ChevronUpIcon className='h-7 w-7 text-gray-500' />
                </div>
              )}
            </div>
            <div className='flex'>
              <p>Careers</p>
            </div>
            <div className='flex'>
              <p>About</p>
            </div>
          </div>
        </div>

        <div className='flex '>
          <div className='sm:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {!isMenuOpen ? (
              <div>
                <MenuIcon className='h-7 w-7 transition shadow-sm  ease-in-out duration-105 cursor-pointer scale-105 delay-200 text-gray-500' />
              </div>
            ) : (
              <div>
                <XIcon className='h-7 rotate-180 w-7 transition shadow-sm  ease-in-out duration-105 cursor-pointer scale-105 delay-200 text-gray-500' />
              </div>
            )}
          </div>

          <div className=' hidden p-2 sm:inline-flex space-x-2'>
            <p className='mt-1 cursor-pointer'>Login</p>
            <div className='border  border-gray-500 justify-content  rounded-lg'>
              <p className='cursor-pointer p-1'>Register</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown logic */}
      <div className='hidden sm:inline-flex ml-24 space-x-4'>
        {isOpen && (
          <div className=' p-2 h-70  bg-white  border rounded-lg space-x-1 space-y-2'>
            <ul>
              <li className='flex'>
                <ClipboardListIcon className='h-7 w-5 text-blue-200' />
                <p className='text-xs mt-2 text-gray-500'>Todo List</p>
              </li>
              <li className='flex'>
                <CalendarIcon className='h-7 w-5 text-blue-600' />
                <p className='text-xs mt-2 text-gray-500'>Calender</p>
              </li>

              <li className='flex'>
                <ClockIcon className='h-7 w-5 text-yellow-400' />
                <p className='text-xs mt-2 text-gray-500'>Reminders</p>
              </li>
              <li className='flex'>
                <AtSymbolIcon className='h-7 w-5 text-purple-400' />
                <p className='text-xs mt-2 text-gray-500'>Planning</p>
              </li>
            </ul>
          </div>
        )}

        {isCompanyOpen && (
          <div className='flex ml-24   p-2 h-70  bg-white  border rounded-lg  space-x-1 space-y-2'>
            <ul>
              <li className='flex'>
                <p className='text-xs mt-2 text-gray-500'>History</p>
              </li>
              <li className='flex'>
                <p className='text-xs mt-2 text-gray-500'>Our Team</p>
              </li>

              <li className='flex'>
                <p className='text-xs mt-2 text-gray-500'>Blog</p>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Menu icon logic */}
      {isMenuOpen && (
        <div className='flex justify-end p-8 sm:hidden mr-12 '>
          <div className='flex-col space-y-4 justify-between'>
            <div className='flex-col text-gray-500 hover hover:text-black'>
              <div className='flex' onClick={() => setIsIOpen(!isOpen)}>
                {!isOpen ? (
                  <div className=''>
                    <div className='flex'>
                      <p>Features</p>
                      <ChevronDownIcon className='h-7 w-7 text-gray-500' />
                    </div>
                  </div>
                ) : (
                  <div className=''>
                    <div className='flex cursor-pointer hover text-gray-500 hover:text-black'>
                      <p className=''>Features</p>
                      <ChevronUpIcon className='h-7 w-7 text-gray-500' />
                    </div>
                    <div className=' p-2   bg-white  space-y-2'>
                      <ul>
                        <li className='flex space-x-2'>
                          <ClipboardListIcon className='h-7 w-5 text-blue-200' />
                          <p className='text-xs mt-2 text-gray-500'>
                            Todo List
                          </p>
                        </li>
                        <li className='flex space-x-2'>
                          <CalendarIcon className='h-7 w-5 text-blue-600' />
                          <p className='text-xs mt-2 text-gray-500'>Calender</p>
                        </li>

                        <li className='flex space-x-2'>
                          <ClockIcon className='h-7 w-5 text-yellow-400' />
                          <p className='text-xs mt-2 text-gray-500'>
                            Reminders
                          </p>
                        </li>
                        <li className='flex space-x-2'>
                          <AtSymbolIcon className='h-7 w-5 text-purple-400' />
                          <p className='text-xs mt-2 text-gray-500'>Planning</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div
                className='flex '
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
              >
                {!isCompanyOpen ? (
                  <div className='flex'>
                    <p>Company</p>
                    <ChevronDownIcon className='h-7 w-7 text-gray-500' />
                  </div>
                ) : (
                  <div>
                    <div className='flex'>
                      <p>Company</p>
                      <ChevronUpIcon className='h-7 w-7 text-gray-500' />
                    </div>
                    <div className='flex   bg-white   space-x-2 space-y-2'>
                      <ul>
                        <li className='flex'>
                          <p className='text-xs mt-2 text-gray-500'>History</p>
                        </li>
                        <li className='flex'>
                          <p className='text-xs mt-2 text-gray-500'>Our Team</p>
                        </li>

                        <li className='flex'>
                          <p className='text-xs mt-2 text-gray-500'>Blog</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className='flex'>
                <p>Careers</p>
              </div>
              <div className='flex'>
                <p>About</p>
              </div>
            </div>

            <div className='flex text-gray-500  mt-4 flex-col'>
              <div className='cursor-pointer p-4 items-center w-auto justify-center space-y-2'>
                <p className='mt-1 ml-3 hover hover:text-black'>Login</p>
                <div className='border  border-gray-500 p-2  justify-center  items-center rounded-lg'>
                  <p className='hover  hover:text-black'>Register</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main body */}
      {/* Set two different logic for mobile and desktop */}
      {/* Mobile View */}
      {!isMenuOpen && (
        <div className='flex sm:hidden'>
          <div className=' flex justify-center flex-col '>
            <Image
              objectFit='contain'
              src='/images/image-hero-mobile.png'
              width={500}
              height={500}
            />

            <div className='flex flex-col justify-center items-center space-y-3'>
              <h1 className='text-3xl font-bold'>Make remote work</h1>
              <p className=''>
                Get your team in sync, no matter your location, Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
              <button className='rounded-xl text-white bg-black p-3'>
                Learn more
              </button>
            </div>
            <div className='flex mt-6 justify-evenly'>
              <Image
                src='/images/client-databiz.svg'
                objectFit='contain'
                height={40}
                width={80}
              />
              <Image
                src='/images/client-audiophile.svg'
                objectFit='contain'
                height={40}
                width={80}
              />
              <Image
                src='/images/client-meet.svg'
                objectFit='contain'
                height={40}
                width={80}
              />
              <Image
                src='/images/client-maker.svg'
                objectFit='contain'
                height={40}
                width={80}
              />
            </div>

            <div className='flex mt-12 justify-center bottom-0 text-sm text-gray-500 '>
              <div>
                Challenge by{' '}
                <a
                  href='https://www.frontendmentor.io?ref=challenge'
                  target='_blank'
                  className='cursor-pointer hover hover:text-black underline'
                >
                  Frontend Mentor
                </a>
                . Coded by <a href='#'>Tobi Akinlade</a>.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop View */}
      {!isMenuOpen && (
        <div
          className={`hidden sm:inline-flex ${
            (isOpen || isCompanyOpen) && '-mt-4'
          }`}
        >
          <div className='flex flex-col mb-12'>
            <div className='grid grid-cols-2'>
              <div className='flex flex-col p-2 space-y-4'>
                <div className='mb-4'>
                  <h1 className='text-5xl md:text-7xl lg:text-9xl font-extrabold'>
                    Make remote work
                  </h1>
                </div>

                <div className='mt-6 space-y-6 md:space-y-12 lg:space-y-18'>
                  <p className='md:text-md'>
                    Get your team in sync, no matter your location, Streamline
                    processes, create team rituals, and watch productivity soar.
                  </p>
                  <button className='rounded-xl cursor-pointer border border-gray-500 text-black bg-white p-3'>
                    Learn more
                  </button>
                </div>
                {/* logo display */}
                <div className='flex  mt-4 justify-start space-x-4 md:space-x-8 lg:space-x-12'>
                  <div>
                    <Image
                      src='/images/client-databiz.svg'
                      objectFit='contain'
                      height={40}
                      width={80}
                    />
                  </div>
                  <div>
                    <Image
                      src='/images/client-audiophile.svg'
                      objectFit='contain'
                      height={40}
                      width={80}
                    />
                  </div>
                  <div>
                    <Image
                      src='/images/client-meet.svg'
                      objectFit='contain'
                      height={40}
                      width={80}
                    />
                  </div>
                  <div>
                    <Image
                      src='/images/client-maker.svg'
                      objectFit='contain'
                      height={40}
                      width={80}
                    />
                  </div>
                </div>
              </div>

              <div className=' flex justify-center  '>
                <Image
                  objectFit='contain'
                  src='/images/image-hero-desktop.png'
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
