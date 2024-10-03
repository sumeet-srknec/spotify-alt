import classNames from 'classnames'
import React, { useState } from 'react'
import { AiOutlinePlaySquare } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import { CgMiniPlayer } from 'react-icons/cg'
import { FaExpandAlt, FaStepBackward, FaStepForward, FaVolumeUp } from 'react-icons/fa'
import { FaPlay, FaShuffle } from 'react-icons/fa6'
import { HiCheckCircle, HiChevronUp } from 'react-icons/hi'
import { HiBars2, HiOutlineQueueList } from 'react-icons/hi2'
import { SlLoop } from 'react-icons/sl'
import { TbDevices2, TbMicrophone2 } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { openPanel, setClosed } from './slices/sidepanelSlice'
import SpotButton from './SpotButton'

function ControlPanel() {
    const dispatch = useDispatch()
    const { closed } = useSelector((state) => state.sidepanel)

    const handleSongClicked = () => {
        if (closed === false) {
            dispatch(setClosed(true))
        } else {
            dispatch(openPanel('Liked Songs'))
        }
    }

    return (
        <div className="h-24 p-2 flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 items-center justify-between">
                <div className="relative group bg-gray-50">
                    <HiBars2 className="h-12 w-12 border rounded cursor-pointer text-black" />
                    <HiChevronUp
                        onClick={(e) => handleSongClicked()}
                        className={classNames(
                            'absolute hidden left-[50%] translate-x-1/6 -translate-y-1/3 top-[20%] group-hover:block h-6 w-6 group-hover:ring-0.5 group-hover:ring-offset-gray-950 rounded-full bg-gray-950 group',
                            closed === false && 'rotate-180'
                        )}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold hover:underline cursor-pointer">Song of your choice</span>
                    <span className="text-xs font-normal hover:underline cursor-pointer">Singer</span>
                </div>
                <HiCheckCircle className="h-6 w-6 text-green-500 cursor-pointer" />
            </div>
            <div className="flex flex-col items-center justify-between p-2">
                <div className="flex flex-row gap-6 items-center">
                    <span>
                        <SpotButton>
                            <FaShuffle className="h-4 w-4 cursor-pointer text-gray-300" />
                        </SpotButton>
                    </span>
                    <span>
                        <SpotButton>
                            <FaStepBackward className="h-4 w-4 cursor-pointer text-gray-300" />
                        </SpotButton>
                    </span>
                    <span>
                        <SpotButton>
                            <FaPlay className="h-6 w-6 cursor-pointer text-gray-300" />
                        </SpotButton>
                    </span>
                    <span>
                        <SpotButton>
                            <FaStepForward className="h-4 w-4 cursor-pointer text-gray-300" />
                        </SpotButton>
                    </span>
                    <span>
                        <SpotButton>
                            <SlLoop className="h-4 w-4 cursor-pointer text-green-600" />
                        </SpotButton>
                    </span>
                </div>
                <div className="flex flex-row gap-4  items-center justify-between">
                    <span className="text-xs">0:00</span>
                    <div className=" flex flex-row flex-1 h-1 relative group w-[36rem]">
                        <div className="rounded-l-lg w-[80%] bg-white text-xs group-hover:bg-green-600"></div>
                        <div className="rounded-r-lg w-[20%] bg-gray-500 text-xs"></div>
                        <BsDot className="absolute top-1/2 -translate-y-1/2 left-[75%] hidden group-hover:block h-12 w-12 text-white" />
                    </div>
                    <span className="text-xs">3:52</span>
                </div>
            </div>
            <div className="flex flex-row gap-1 cursor-pointer">
                <SpotButton>
                    <AiOutlinePlaySquare className="h-5 w-5 cursor-pointer text-gray-300" />
                </SpotButton>
                <SpotButton>
                    <TbMicrophone2 className="h-5 w-5 cursor-pointer text-gray-300" />
                </SpotButton>
                <SpotButton onClick={(e) => dispatch(openPanel('Queue'))}>
                    <HiOutlineQueueList className="h-5 w-5 cursor-pointer text-gray-300" />
                </SpotButton>
                <SpotButton>
                    <TbDevices2 className="h-5 w-5 cursor-pointer text-gray-300" />
                </SpotButton>
                <div className="flex flex-row gap-1 items-center justify-around relative group">
                    <SpotButton>
                        <FaVolumeUp className="h-5 w-5 cursor-pointer text-gray-300" />
                    </SpotButton>
                    <div className="flex flex-row flex-1 w-20">
                        <div className="rounded-l-lg w-[90%] bg-white text-xs h-1 group-hover:bg-green-500"></div>
                        <BsDot className="absolute top-1/2 -translate-y-1/2 left-[70%] hidden group-hover:block h-16 w-12" />
                        <div className="rounded-r-lg w-[10%] bg-gray-500 text-xs h-1"></div>
                    </div>
                </div>
                <SpotButton>
                    <CgMiniPlayer className="h-5 w-5 cursor-pointer text-gray-300" />
                </SpotButton>
                <SpotButton>
                    <FaExpandAlt className="h-5 w-5 cursor-pointer text-gray-300" />
                </SpotButton>
            </div>
        </div>
    )
}

export default ControlPanel
