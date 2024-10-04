import { Disclosure } from '@headlessui/react'
import React from 'react'
import { HiDotsHorizontal, HiSearch } from 'react-icons/hi'
import { HiArchiveBox, HiBell, HiChevronLeft, HiChevronRight, HiHome, HiOutlineUserGroup } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { openPanel } from './slices/sidepanelSlice'

function Header() {
    const dispatch = useDispatch()

    return (
        <Disclosure as="nav" className="">
            <div className="max-w-full px-2 sm:px-2 lg:px-3">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 flex-row items-center justify-between">
                        <div className="flex items-center cursor-pointer">
                            <HiDotsHorizontal className="h-6 w-auto hover:text-white" />
                            <HiChevronLeft className="h-6 w-auto hover:text-white" />
                            <HiChevronRight className="h-6 w-auto hover:text-white" />
                        </div>
                        {/* Central search bar */}
                        <div className="flex flex-shrink-0 items-center cursor-pointer">
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Home</span>
                                    <HiHome aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                                <div className="flex flex-row gap-2 items-center relative w-auto rounded-full p-2 bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    {/* <span className='absolute -inset-1.5' /> */}
                                    <span className="sr-only">Search you songs</span>
                                    <HiSearch aria-hidden="true" className="h-6 w-6 text-gray-100" />
                                    <input
                                        type="text"
                                        placeholder="What do you want to play?"
                                        className="h-auto w-80 text-sm text-white bg-inherit focus:outline-none hover:bg-gray-700"
                                    />
                                    <span className="border-l-2 border-l-gray-500 pl-1">
                                        <HiArchiveBox aria-hidden="true" className="h-6 w-6 text-gray-100" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* User group */}
                        <div className="flex flex-shrink-0 items-center cursor-pointer">
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
                                onClick={(e) => dispatch(openPanel('Notifications'))}
                            >
                                <button
                                    type="button"
                                    className="relative rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View Notifications</span>
                                    <HiBell aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
                                onClick={(e) => dispatch(openPanel('Friend Activity'))}
                            >
                                <button
                                    type="button"
                                    className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View Friend Activity</span>
                                    <HiOutlineUserGroup aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
                                onClick={(e) => dispatch(openPanel('My Account'))}
                            >
                                <button
                                    type="button"
                                    className="relative rounded-full bg-orange-700 p-1 text-brown-400 hover:text-white ring-8 ring-gray-800 ring-offset-0 ring-offset-gray-800 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-4 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">User name</span>
                                    <span aria-hidden="true" className="h-6 w-6 pl-2 pr-2 font-bold text-sm text-black">
                                        S
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Disclosure>
    )
}

export default Header
