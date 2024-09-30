import classNames from 'classnames'
import React from 'react'
import { HiXMark } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import { setClosed } from './slices/sidepanelSlice'
import SpotButton from './SpotButton'

function SidePanel() {
    const dispatch = useDispatch()
    const { closed, title } = useSelector((state) => state.sidepanel)
    return closed === true ? (
        <></>
    ) : (
        <div className="bg-gray-900 rounded-lg w-1/5 p-4">
            <div className="flex flex-row items-center justify-between">
                <span
                    aria-hidden="true"
                    className={classNames('h-6 w-auto font-bold text-sm text-gray-400 hover:text-white')}
                >
                    {title}
                </span>
                <div className="flex flex-row gap-1">
                    <SpotButton onClick={(e) => dispatch(setClosed())}>
                        <HiXMark aria-hidden="true" className="h-6 w-6" />
                    </SpotButton>
                </div>
            </div>
        </div>
    )
}

export default SidePanel
