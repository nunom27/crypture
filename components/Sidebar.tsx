"use client";
import { useLocation } from 'react-router-dom';
import { Children, Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline'
import {
  HomeIcon,
  WalletIcon,
  CurrencyDollarIcon,
  SparklesIcon,
} from '@heroicons/react/24/solid'
import Image from 'next/image'

const navigation = [
  { name: 'Overview', href: '/', icon: HomeIcon, current: location.pathname === '/' },
  { name: 'Wallet', href: 'wallet', icon: WalletIcon, current: location.pathname === '/wallet' },
  { name: 'Explore', href: 'explore', icon: CurrencyDollarIcon, current: location.pathname === '/explore' },
  { name: 'Crypture Bot', href: 'crypture-bot', icon: SparklesIcon, current: location.pathname === '/crypture-bot' },
]


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >

                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'text-gray-100'
                                      : 'text-gray-700 hover:text-indigo-600 hover:bg-white',
                                    'group flex gap-x-3 rounded-md p-2 text-text leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="w-[300px] p-5 flex grow flex-col gap-y-5 overflow-y-auto overflow-x-hidden bg-gradient-to-r from-white to-gray-100">
            <div className="flex h-16 shrink-0 items-center">
              <Image
                src="/crypture.png"
                width={110}
                height={44.69}
                alt="crypture"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7 justify-between">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-purple-100 text-purple-200 font-extrabold text-text rounded-[15px] border-purple-200 border-2 border-opacity-[6%]'
                              : 'text-gray-500 text-text font-medium rounded-[15px] border-black border-2 border-opacity-0 hover:text-purple-200 hover:border-purple-100 hover:bg-purple-100',
                            'group flex gap-x-3 pl-[11px] pt-[10px] pb-[8px] text-text leading-6 font-medium'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-purple-200' : 'text-gray-500 group-hover:text-purple-200',
                              'h-[23px] w-[23px] shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <div className="m-[13px] box-border">
                  <hr className='h-[2px] my-4 opacity-[8%] bg-black'></hr>
                  <div className="flex flex-col items-start  justify-center gap-[2px] w-[100%] h-auto box-border">
                    <span className="text-white box-size flex items-center justify-center text-text font-medium w-[40px] h-[40px] rounded-full bg-gradient-to-t from-purple-200-to-gold from-purple-200 from-0% to-gold to-70% mb-[8px]">CS</span>
                    <span className='text-text font-medium text-gray-700' aria-hidden="true">Code Sailors</span>
                    <span className='text-text font-medium text-gray-400' aria-hidden="true">@codesailors</span>
                    <div className='w-[100%] flex flex-row gap-[16px]'>
                        <div className='flex flex-row mt-[8px]'>
                          <Cog6ToothIcon className='w-[23px] h-[23px] text-purple-200 mr-[6px]'></Cog6ToothIcon>
                          <span className="text-purple-200 text-text">Settings</span>
                        </div>
                        <div className='flex flex-row mt-[8px]'>
                          <ArrowRightStartOnRectangleIcon className='w-[23px] h-[23px] text-purple-200 mr-[6px]'></ArrowRightStartOnRectangleIcon>
                          <span className="text-purple-200 text-text">Log Out</span>
                        </div>
                    </div>
                  </div>
                </div>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-text font-semibold leading-6 text-gray-900">Dashboard</div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        <main className="py-10 lg:pl-[300px] box-border">
          <div className='px-[30px]'>{children}</div>
        </main>
      </div>
    </>
  )
}
