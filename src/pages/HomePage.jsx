import { CaretRight } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import profile from '../assets/images/me.jpg'
import StyledButton from '../components/Button'

const timeLine = [
    { event: 'Born in Tampa, US.', year: '1994' },
    { event: 'Moved to Spain (Spanish Dad).', year: '1995' },
    { event: 'Moved to Brazil (Brazilian Mom).', year: '2006' },
    { event: 'Internship at RD Station (One of the largest SaaS company in South America).', year: '2019' },
    { event: 'College Graduation!! (Bacherlor in Control and Automation Engineering at UFSC).', year: '2021' },
    { event: 'Worked at BIX Tech.', year: '2021' },
    { event: 'Worked at Hack-a-Chain.', year: '2022' },
]

function HomePage() {
    const navigate = useNavigate()
    return (
        <article className="md:max-w-3xl w-full h-full">
            <section className="sm:px-4 px-4 sm:mx-28 mx-4 dark:text-[rgba(255,255,255,0.9)] text-body-text">
                <div
                    className="backdrop-blur-sm rounded-lg p-3 text-center 
					dark:bg-white/[.08]  mb-6  font-roboto text-sm bg-[rgba(255,255,255,0.36)] mt-[-10px]"
                >
                    Hi, I&apos;m a full-stack developer currently living in Brazil!
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="flex flex-col grow-1 max-w-full">
                        <h2 className="font-plus text-4xl">Antonio Moreno</h2>
                        <p className="font-roboto text-sm font-light">
                            Software Engineer (React / Typescript / Next.js / Node.js)
                        </p>
                    </div>
                    <div className="shrink-0 mt-4 sm:mt-0 md:mt-0 md:ml-6 items-center">
                        <img
                            className="border-white-800 border-2 border-solid 
							max-w-[100px] inline-block rounded-full"
                            src={profile}
                            alt="dall-e generate profile pic"
                        />
                    </div>
                </div>
                <AnimatedSection delay={0.1}>
                    <section className="flex flex-col w-full items-start justify-center mb-8">
                        <h3
                            className="font-plus text-2xl mt-3 mb-4 underline
					 underline-offset-8 decoration-4 decoration-strong-gray"
                        >
                            About me!
                        </h3>
                        <p className="font-roboto text-md text-justify indent-4">
                            Welcome to my page! I'm a software engineer based in Brazil with over two years of
                            experience. I hold a Bachelor's degree in Control and Automation Engineering, which has
                            given me a strong foundation in logical thinking and problem-solving.
                        </p>
                        <p className="font-roboto text-md text-justify indent-4">
                            As a full stack developer, I'm passionate about creating dynamic and intuitive user
                            experiences that are both functional and aesthetically pleasing. I'm always looking for new
                            challenges and opportunities to expand my knowledge and skills. Thanks for taking the time
                            to learn a bit about me and my work. Let's collaborate on your next project!
                        </p>
                        <div className="w-full flex items-center justify-center">
                            <StyledButton type="button" onClick={() => navigate('/projects')}>
                                Projects <CaretRight size={15} weight="bold" />
                            </StyledButton>
                        </div>
                        <h3
                            className="font-plus text-2xl mt-6 mb-4 underline
					        underline-offset-8 decoration-4 decoration-strong-gray"
                        >
                            Bio
                        </h3>
                        <div className="flex flex-col items-start justify-start gap-1.5 pl-12 font-roboto">
                            {timeLine.map((item) => {
                                return (
                                    <div key={item.event} className="flex ">
                                        <span className="font-semibold mr-4 ml-[-3rem]">{item.year}</span>
                                        {item.event}
                                    </div>
                                )
                            })}
                        </div>
                        <h3
                            className="font-plus text-2xl mt-8 mb-4 underline
					 underline-offset-8 decoration-4 decoration-strong-gray"
                        >
                            I ♥
                        </h3>
                        <p className="font-roboto text-md text-justify indent-4">
                            Skating,{' '}
                            <a
                                href="https://www.instagram.com/antonio_mrh/"
                                className="cursor-pointer dark:text-moon-purple text-orange"
                                target="_blank"
                            >
                                photography
                            </a>
                            , traveling,{' '}
                            <a
                                href="https://www.goodreads.com/user/show/49920462-antonio-ribeiro"
                                className="cursor-pointer dark:text-moon-purple text-orange"
                                target="_blank"
                            >
                                reading{' '}
                            </a>
                            and hanging out with my friends.
                        </p>
                    </section>
                </AnimatedSection>
            </section>
        </article>
    )
}

export default HomePage
