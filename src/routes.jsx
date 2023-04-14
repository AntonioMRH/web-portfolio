import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage'
import HomePage from './pages/HomePage'
import ExperiencePage from './pages/ExperiencePage'
import Layout from './components/layouts/Layout'
import ScrollToTop from './components/ScrollToTop'
import TodoAppPage from './pages/projects/TodoApp'
import DeliveryPage from './pages/projects/DeliveryApp'

function RouteProvider() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/todo-app" element={<TodoAppPage />} />
                    <Route path="/coffee-delivery-app" element={<DeliveryPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default RouteProvider
