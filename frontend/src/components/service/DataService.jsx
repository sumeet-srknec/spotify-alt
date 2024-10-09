import React from 'react'
import { FaBars, FaListUl } from 'react-icons/fa6'
import { HiBars2, HiMiniBars3 } from 'react-icons/hi2'
import { IoGridOutline } from 'react-icons/io5'

export const fetchSongs = () => {
    return [
        {
            name: 'You are G.O.A.T',
            singer: 'DJ',
            runtime: '3:52',
            album: 'G.O.A.T'
        }
    ]
}

export const fetchTypes = () => {
    return [
        { key: 'playlists', label: 'Playlists' },
        { key: 'podcasts', label: 'Podcasts' },
        { key: 'albums', label: 'Albums' },
        { key: 'artists', label: 'Artists' },
        { key: 'downloaded', label: 'Downloaded' }
    ]
}

export const fetchSortOptions = () => {
    return [
        { key: 'Recents', label: 'Recents' },
        { key: 'Recently Added', label: 'Recently Added' },
        { key: 'Alphabetical', label: 'Alphabetical' },
        { key: 'Creator', label: 'Creator' }
    ]
}

export const fetchViewOptions = () => {
    return [
        {
            logo: <FaBars className="h-3 w-3 font-bold" />,
            label: 'Compact',
            key: 'Compact'
        },
        {
            logo: <FaListUl className="h-3 w-3 font-bold" />,
            label: 'List',
            key: 'List'
        },
        {
            logo: <IoGridOutline className="h-3 w-3 font-bold" />,
            label: 'Grid',
            key: 'Grid'
        }
    ]
}

export const fetchMusicContent = () => {
    return [
        {
            logo: <HiBars2 className="h-12 w-12 border rounded cursor-pointer text-orange-400" />,
            title: 'Liked Songs',
            count: 117,
            pinned: true,
            tags: ['playlists']
        },
        {
            logo: <HiMiniBars3 className="h-12 w-12 border rounded cursor-pointer text-orange-400" />,
            title: 'G.O.A.T',
            count: 20,
            pinned: false,
            tags: ['playlists']
        },
        {
            logo: <HiMiniBars3 className="h-12 w-12 border rounded cursor-pointer text-orange-400" />,
            title: 'My Universe',
            count: 20,
            pinned: false,
            tags: ['albums']
        },
        {
            logo: <HiMiniBars3 className="h-12 w-12 border rounded cursor-pointer text-orange-400" />,
            title: 'Decatholon Podcasts',
            count: 20,
            pinned: false,
            tags: ['podcasts']
        },
        {
            logo: <HiMiniBars3 className="h-12 w-12 border rounded cursor-pointer text-orange-400" />,
            title: 'BWood Folks',
            count: 20,
            pinned: false,
            tags: ['Playlist']
        },
        {
            logo: <HiMiniBars3 className="h-12 w-12 border rounded cursor-pointer text-orange-400" />,
            title: 'Mega Hits',
            count: 20,
            pinned: false,
            tags: ['podcasts']
        },
        {
            logo: <HiMiniBars3 className="h-12 w-12 border rounded cursor-pointer text-orange-400" />,
            title: 'BWood Folks',
            count: 20,
            pinned: false,
            tags: ['Playlist']
        },
        {
            logo: <HiMiniBars3 className="h-12 w-12 border rounded cursor-pointer text-orange-400" />,
            title: 'Mega Hits',
            count: 20,
            pinned: false,
            tags: ['albums']
        },
        {
            logo: <HiMiniBars3 className="h-12 w-12 border rounded cursor-pointer text-orange-400" />,
            title: 'BWood Folks',
            count: 20,
            pinned: false,
            tags: ['Playlist']
        },
        {
            logo: <HiMiniBars3 className="h-12 w-12 border rounded cursor-pointer text-orange-400" />,
            title: 'Mega Hits',
            count: 20,
            pinned: false,
            tags: ['albums']
        },
        {
            logo: <HiMiniBars3 className="h-12 w-12 border rounded cursor-pointer text-orange-400" />,
            title: 'BWood Folks',
            count: 20,
            pinned: false,
            tags: ['podcasts']
        }
    ]
}
