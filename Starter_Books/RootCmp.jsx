const Router = ReactRouterDOM.HashRouter
const { Routes, Route, Navigate } = ReactRouterDOM



import { Vision } from "./cmps/AboutCmps/Vision.jsx"
import { Team } from "./cmps/AboutCmps/Team.jsx"
import { AppHeader } from "./cmps/AppHeader.jsx"
import { NotFound } from "./cmps/NotFound.jsx"
import { About } from "./pages/About.jsx"
import { CarIndex } from "./pages/CarIndex.jsx"
import { Home } from "./pages/Home.jsx"
import { CarDetails } from "./pages/CarDetails.jsx"


export function App() {

    return (
        <Router>
            <section className="app">
                <AppHeader />

                <main className="main-layout">
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />}>
                            <Route path="/about/vision" element={<Vision />} />
                            <Route path="/about/team" element={<Team />} />ƒ
                        </Route>
                        <Route path="/car" element={<CarIndex />} />
                        <Route path="/car/:carId" element={<CarDetails />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </section>
        </Router>
    )
} 