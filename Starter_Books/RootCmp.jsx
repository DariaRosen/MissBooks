const Router = ReactRouterDOM.HashRouter
const { Routes, Route, Navigate } = ReactRouterDOM

import { AboutTeam } from "./cmps/AboutCmps/AboutTeam.jsx"
import { AboutGoal } from "./cmps/AboutCmps/AboutGoal.jsx"
import { AppHeader } from "./cmps/AppHeader.jsx"
import { NotFound } from "./cmps/NotFound.jsx"
import { AboutUs } from "./pages/AboutUs.jsx"
import { BookIndex } from "./pages/BookIndex.jsx"
import { HomePage } from "./pages/HomePage.jsx"
import { BookDetails } from "./pages/BookDetails.jsx"
import { UserMsg } from "./cmps/UserMsg.jsx"
import { BookEdit } from "./pages/BookEdit.jsx"

export function App() {

    return (
        <Router>sss
            <section className="app">
                <AppHeader />

                <main className="main-layout">
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/about" element={<AboutUs />} >
                            <Route path="/about/team" element={<AboutTeam />} />
                            <Route path="/about/goal" element={<AboutGoal />} />
                        </Route>
                        <Route path="/book" element={<BookIndex />} />
                        <Route path="/book/:bookId" element={<BookDetails />} />
                        <Route path="/book/edit" element={<BookEdit />} />
                        <Route path="/book/edit/:bookId" element={<BookEdit />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <UserMsg />
            </section>
        </Router>
    )
} 
