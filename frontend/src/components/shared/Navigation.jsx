import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import classNames from 'classnames'
import React, { useState } from 'react'
import { FaBars, FaListUl, FaPlay } from 'react-icons/fa6'
import { HiCheck, HiSearch } from 'react-icons/hi'
import { HiArrowRight, HiBars2, HiMiniBars3, HiPlus } from 'react-icons/hi2'
import { IoGridOutline } from 'react-icons/io5'
import { RiPushpinFill } from 'react-icons/ri'
import { VscLibrary } from 'react-icons/vsc'
import SpotButton from './SpotButton'
import { fetchMusicContent, fetchSortOptions, fetchTypes, fetchViewOptions } from '../service/DataService'

function Navigation() {
    const [navClosed, setNavClosed] = useState(false)
    const [selectTag, setSelectedTag] = useState('playlists')
    const [sortBy, setSortBy] = useState('Recents')
    const [showSearch, setShowSearch] = useState('Recents')
    const [viewAs, setViewAs] = useState({
        logo: <FaListUl className="h-3 w-3 font-bold" />,
        label: 'List',
        key: 'List'
    })

    return (
        <div
            className={classNames(
                'bg-gray-900 rounded-lg p-4 flex flex-col gap-2 justify-start',
                navClosed ? 'w-auto' : 'w-1/4'
            )}
        >
            <div className="flex flex-row gap-0 justify-between">
                <div className="flex flex-row items-center gap-2">
                    <SpotButton onClick={(e) => setNavClosed(!navClosed)}>
                        <VscLibrary aria-hidden="true" className="h-6 w-6" />
                    </SpotButton>
                    {navClosed === false && (
                        <span
                            aria-hidden="true"
                            className={classNames('h-6 w-auto font-bold text-sm text-gray-400 hover:text-white')}
                        >
                            Your Library
                        </span>
                    )}
                </div>
                {navClosed === false && (
                    <div className="flex flex-row items-center gap-2">
                        <SpotButton>
                            <HiPlus aria-hidden="true" className="h-6 w-6" />
                        </SpotButton>
                        <SpotButton>
                            <HiArrowRight aria-hidden="true" className="h-6 w-6" />
                        </SpotButton>
                    </div>
                )}
            </div>
            {navClosed === false && (
                <div className="flex flex-row gap-1 items-center justify-center cursor-pointer">
                    {fetchTypes().map((item) => {
                        return (
                            <div
                                key={item.key}
                                className={classNames(
                                    'rounded-full p-1.5 text-xs text-gray-400 hover:text-white hover:bg-gray-700 active:text-green-500 focus:bg-gray-700  bg-gray-800',
                                    selectTag === item.key && 'text-green-500'
                                )}
                                onClick={(e) => setSelectedTag(item.key)}
                            >
                                {item.label}
                            </div>
                        )
                    })}
                </div>
            )}
            {navClosed === false && (
                <div className="flex flex-row gap-2 items-center justify-between text-sm cursor-pointer">
                    <div
                        className={classNames(
                            'relative group flex flex-row gap-1 items-center justify-between rounded p-2 hover:bg-gray-800',
                            showSearch === true && 'bg-gray-800'
                        )}
                    >
                        <HiSearch className="h-4" onClick={(e) => setShowSearch(!showSearch)} />
                        {showSearch === true && <input type="text" className="bg-inherit outline-none h-4" />}
                    </div>
                    <Popover className="group">
                        <PopoverButton className="flex flex-row items-center justify-between gap-1 text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                            <span className="mb-1">{sortBy}</span>
                            <span>{viewAs?.logo}</span>
                        </PopoverButton>
                        <PopoverPanel
                            anchor="bottom end"
                            className="flex flex-col divide-y divide-white/5 [--anchor-gap:4px] rounded bg-white/5 w-52 text-gray-300 p-2 text-sm/6 transition duration-200 ease-in-out data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                        >
                            <div>
                                <span className="p-2 text-xs text-gray-400 font-bold">Sort by</span>
                                {fetchSortOptions().map((item) => {
                                    return (
                                        <div
                                            key={item.key}
                                            className={classNames(
                                                'p-2 flex flex-row items-center justify-between text-xs cursor-pointer gap-5 hover:text-white hover:bg-gray-700 rounded group',
                                                sortBy === item.key && 'text-green-500'
                                            )}
                                            onClick={(e) => setSortBy(item.key)}
                                        >
                                            {item.label}
                                            <HiCheck className="hidden group-hover:block text-green-500 h-4 w-4" />
                                        </div>
                                    )
                                })}
                            </div>

                            <div>
                                <span className="p-2 text-xs text-gray-400 font-bold">View as</span>
                                {fetchViewOptions().map((item) => {
                                    return (
                                        <div
                                            key={item.key}
                                            className={classNames(
                                                'p-2 flex flex-row items-center justify-between text-xs cursor-pointer gap-5 hover:text-white hover:bg-gray-700 rounded group',
                                                viewAs?.key === item.key && 'text-green-500'
                                            )}
                                            onClick={(e) => setViewAs(item)}
                                        >
                                            <div className="flex flex-row gap-4 items-center">
                                                {item.logo}
                                                {item.label}
                                            </div>
                                            <HiCheck className="hidden group-hover:block text-green-500 h-4 w-4" />
                                        </div>
                                    )
                                })}
                            </div>
                        </PopoverPanel>
                    </Popover>
                </div>
            )}
            {navClosed === false && (
                <div className="flex flex-col gap-2 h-full overflow-y-auto scrollbar scrollbar-thumb-gray-700 scrollbar-track-inherit ">
                    {fetchMusicContent().map((item) => {
                        return (
                            <div className="relative flex flex-row items-center gap-4 hover:bg-gray-700 hover:text-white text-gray-400 cursor-pointer rounded p-2 group">
                                {item.logo}
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold">{item.title}</span>
                                    <div className="flex flex-row items-center gap-1 text-xs">
                                        {item.pinned && (
                                            <span className="text-green-500">
                                                <RiPushpinFill />
                                            </span>
                                        )}
                                        <span>{item.tags}</span>
                                        <span>.</span>
                                        <span>{`${item.count} songs`}</span>
                                    </div>
                                </div>
                                <FaPlay className="hidden group-hover:block absolute translate-y-0.4 translate-x-5" />
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Navigation
