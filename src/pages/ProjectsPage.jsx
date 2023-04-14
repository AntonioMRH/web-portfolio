import AnimatedSection from '../components/AnimatedSection'
import ProjectBox from '../components/ProjectBox'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import { useNavigate } from 'react-router-dom'

function ProjectsPage() {
    const navigate = useNavigate()
    return (
        <article className="md:max-w-3xl w-full h-full">
            <AnimatedSection delay={0.1}>
                <section className="sm:px-4 px-2 sm:mx-28 mx-4 dark:text-[rgba(255,255,255,0.9)] text-body-text mt-6 flex items-start justify-center gap-8 flex-wrap">
                    <ProjectBox
                        img={img1}
                        projectName="Coffee Delivery"
                        projectDescription="A simple Coffee Delivery website made for a course challenge."
                        onClick={() => navigate('/coffee-delivery-app')}
                    />
                    <ProjectBox
                        img={img2}
                        projectName="Todo App"
                        projectDescription="A basic to do list."
                        onClick={() => navigate('/todo-app')}
                    />
                </section>
            </AnimatedSection>
        </article>
    )
}

export default ProjectsPage
