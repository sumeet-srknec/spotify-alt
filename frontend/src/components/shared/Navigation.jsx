import classNames from 'classnames'
import React, { useState } from 'react'
import { HiArrowRight, HiPlus } from 'react-icons/hi2'
import { VscLibrary } from 'react-icons/vsc'
import SpotButton from './SpotButton'

function Navigation() {
    const [navClosed, setNavClosed] = useState(false)

    return (
        <div
            className={classNames(
                'bg-gray-900 rounded-lg p-4 flex flex-col gap-0 justify-between',
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
            {navClosed === false && <div className="flex flex-row gap-2">content</div>}
        </div>
    )
}

export default Navigation
