import logo from './logo.svg'
import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App

// npm install -D tailwindcss postcss autoprefixer prettier @headlessui/react @reduxjs/toolkit prettier-plugin-tailwindcss react-icons react-redux dotenv react-router-dom
// npx tailwindcss init
