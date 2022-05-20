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
} from '@heroicons/react/outline';

function Header() {
  const [isOpen, setIsIOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
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
          <MenuIcon className='h-7 w-7 transition shadow-sm  ease-in-out duration-105 cursor-pointer scale-105 delay-200 text-gray-500 sm:hidden' />
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
          <div className='flex ml-24  p-2 h-70  bg-white  border rounded-lg  space-x-1 space-y-2'>
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
    </div>
  );
}

export default Header;
