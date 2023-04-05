import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WorkPage from './pages/WorkPage'
import HomePage from './pages/HomePage'
import ExperiencePage from './pages/ExperiencePage'
import Layout from './components/layouts/Layout'

function RouteProvider() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/work" element={<WorkPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default RouteProvider
