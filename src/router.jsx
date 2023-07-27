import { Outlet, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home.jsx"
import GameDevelopment from "./pages/GameDevelopment.jsx"
import Code from "./pages/Code.jsx"
import ThreeDArt from "./pages/ThreeDArt.jsx"
import Contact from "./pages/Contact.jsx"
import Navbar from "./Navbar.jsx"

export const router = createBrowserRouter([
    {
        element: <NavLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/code", element: <Code /> },
            { path: "/game-development", element: <GameDevelopment /> },
            { path: "/3d-art", element: <ThreeDArt /> },
            { path: "/contact", element: <Contact /> }
        ]
    }
])

function NavLayout() {
    return <>
        <Navbar />
        <Outlet />
    </>
}