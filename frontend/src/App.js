import ControlPanel from './components/shared/ControlPanel'
import Header from './components/shared/Header'
import Navigation from './components/shared/Navigation'
import SidePanel from './components/shared/SidePanel'

export default function App() {
    return (
        <div className="bg-gray-950 h-screen w-full text-white/75 flex flex-col gap-0.5">
            <Header />
            <div className="flex flex-row gap-2 justify-between h-[80%] p-2">
                <Navigation />
                <div className="bg-gray-900 rounded-lg flex-1 p-4">
                    <span>Body</span>
                </div>
                <SidePanel />
                <div></div>
            </div>
            {/* Player controls */}
            <ControlPanel />
        </div>
    )
}
