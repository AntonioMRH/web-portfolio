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
                <div className="sm:px-4 px-2 sm:mx-28 mx-4 flex flex-col items-center justify-start gap-2 dark:text-[rgba(255,255,255,0.9)] text-body-text">
                    <h5 className="ml-3 font-plus text-2xl w-full">Projects</h5>
                    <p className="ml-3 w-full font-roboto indent-8 text-regular">
                        These are some of my projects. I will add more as soon as possible. Unfortunately, I can't share
                        my work-related projects due to NDAs and data privacy laws.
                    </p>
                    <section className=" mt-6 flex items-start justify-center gap-8 flex-wrap">
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
                </div>
            </AnimatedSection>
        </article>
    )
}

export default ProjectsPage
