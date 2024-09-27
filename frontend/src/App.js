import Header from './components/shared/Header'
import Navigation from './components/shared/Navigation'
import SidePanel from './components/shared/SidePanel'

export default function App() {
    return (
        <div className="bg-gray-900 h-screen w-screen text-white/75 flex flex-col gap-0.5">
            <Header />
            <div className="flex flex-row gap-2 justify-between h-full p-2">
                <Navigation />
                <div className="bg-gray-800 rounded-lg flex-1 p-4">
                    <span>Body</span>
                </div>
                <SidePanel />
            </div>
        </div>
    )
}
