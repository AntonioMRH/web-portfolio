import * as Tabs from '@radix-ui/react-tabs'
import { DownloadSimple, CaretRight } from '@phosphor-icons/react'
import AnimatedSection from '../components/AnimatedSection'
import StyledButton from '../components/Button'
import CV from '../assets/docs/cv.pdf'

const tabTriggerStyle =
    'font-roboto py-0 px-4 h-10 flex-1 flex items-center justify-center text-sm text-strong-gray dark:hover:text-moon-purple hover:text-orange dark:data-[state=active]:text-moon-purple data-[state=active]:text-orange shadow-ext shadow-current data-[state=active]:font-bold'

function ExperiencePage() {
    return (
        <article className="md:max-w-3xl w-full h-full mb-8">
            <section className="sm:px-4 px-2 sm:mx-28 mx-4 dark:text-[rgba(255,255,255,0.9)] text-body-text">
                <AnimatedSection delay={0.1}>
                    <section className="flex flex-col w-full items-start justify-center">
                        <h3
                            className="font-plus text-2xl mt-3 mb-4 underline
					 underline-offset-8 decoration-4 decoration-strong-gray"
                        >
                            Where I’ve Worked
                        </h3>
                        <Tabs.Root
                            defaultValue="tab1"
                            className="flex flex-col w-full items-start justify-center gap-4 mt-4"
                        >
                            <Tabs.List
                                aria-label="tabs example"
                                className="flex border-b-[1px] border-solid border-strong-gray shrink-0 w-full"
                            >
                                <Tabs.Trigger value="tab1" className={tabTriggerStyle}>
                                    Hack-a-Chain
                                </Tabs.Trigger>
                                <Tabs.Trigger value="tab2" className={tabTriggerStyle}>
                                    BIX Tech
                                </Tabs.Trigger>
                                <Tabs.Trigger value="tab3" className={tabTriggerStyle}>
                                    RD Station
                                </Tabs.Trigger>
                            </Tabs.List>
                            <Tabs.Content value="tab1">
                                <TabContent
                                    position="Software Engineer"
                                    companyName="Hack-a-Chain"
                                    companyPage="https://www.linkedin.com/company/hackachain/"
                                    duration="September 2022 - December 2022"
                                    tasks={[
                                        'Worked with a team to build a DeFi platform for the NEAR Blockchain.',
                                        'Responsible for the front-end of the application',
                                        'Implemented performance enhancements on the back-end of the project.',
                                    ]}
                                    stackList={[
                                        'React',
                                        'Typescript',
                                        'TailwindCSS',
                                        'Chakra UI',
                                        'GraphQL',
                                        'Apollo',
                                        'Node.js',
                                        'Postgresql',
                                    ]}
                                />
                            </Tabs.Content>
                            <Tabs.Content value="tab2">
                                <TabContent
                                    position="Software Developer"
                                    companyName="BIX Tech"
                                    companyPage="https://bix-tech.com/"
                                    duration="May 2021 - August 2022"
                                    tasks={[
                                        `Responsible for developing a customer section page for the international branch of the
                                        leading ceramic tile company in Brazil. Designed and implemented a system to display purchase and product
                                        data for e-commerce customers on the client's website, covering both front-end and back-end development.`,
                                        `Developed a software solution for monitoring factory processes in the agricultural sector, focusing
                                        on the creation of the front-end of the platform. Contributed to the development of a mobile app for the same
                                        client, which aids in the classification of grain quality.`,
                                        `Created a blog and advertising page for a company specializing in providing advertising
                                        services to financial sector clients. Designed and implemented the front-end and back-end architecture of the
                                        page. Coordinated the work of an intern during the development process.`,
                                    ]}
                                    stackList={[
                                        'HTML',
                                        'CSS',
                                        'Javascript',
                                        'Typescript',
                                        'React',
                                        'Next.js',
                                        'Material UI',
                                        'Styled Components',
                                        'Python',
                                        'FastAPI',
                                        'Postgresql',
                                        'AWS',
                                        'GCP',
                                        'Docker',
                                    ]}
                                />
                            </Tabs.Content>
                            <Tabs.Content value="tab3">
                                <TabContent
                                    position="Marketing Operations Intern"
                                    companyName="RD Station"
                                    companyPage="https://www.rdstation.com/"
                                    duration="March 2019 - March 2021"
                                    tasks={[
                                        'Analyzed business metrics to support marketing strategy decisions and helped create metrics and KPIs.',
                                        'Assisted in the construction and implementation of business processes, including the restructuring of chatbot flows on company website pages. This resulted in a 33% improvement in chatbot conversion rates.',
                                        'Created reports and dashboards for data visualization to track results and developed playbooks to map and document various processes.',
                                    ]}
                                    stackList={[
                                        'Python',
                                        'Postgresql',
                                        'MongoDB',
                                        'PowerBI',
                                        'Google Analytics',
                                        'G Workspace',
                                        'MS Excel',
                                    ]}
                                />
                            </Tabs.Content>
                        </Tabs.Root>

                        <a
                            className="w-full flex items-center justify-center"
                            href={CV}
                            download="Resume_Antonio_Moreno"
                            target="_blank"
                        >
                            <StyledButton type="button">
                                My Resume <DownloadSimple size={16} weight="bold" />
                            </StyledButton>
                        </a>
                    </section>
                </AnimatedSection>
            </section>
        </article>
    )
}

export default ExperiencePage

function TabContent(props) {
    return (
        <>
            <div className="flex w-full flex-col items-start justify-start gap-2">
                <p className="font-roboto sm:text-xl text-base dark:text-white text-midnight">
                    {props.position}
                    <a
                        className="dark:text-purple text-dark-yellow hover:underline decoration-solid underline-offset-4 decoration-1 ml-2 font-[500]"
                        href={props.companyPage}
                        target="_blank"
                    >
                        @{props.companyName}
                    </a>
                </p>
                <span className="text-sm dark:text-strong-gray text-orange">{props.duration}</span>
            </div>
            {props.tasks.map((task) => {
                return (
                    <div className="flex w-full items-start justify-start gap-2 mt-3 font-roboto text-sm">
                        <div className="min-w-[12px]">
                            <CaretRight size={12} weight="fill" className="text-moon-purple" />
                        </div>
                        <p className="mt-[-3px]">{task}</p>
                    </div>
                )
            })}
            <ul className="flex w-full items-start justify-start gap-2 mt-5 font-roboto text-sm flex-wrap">
                {props.stackList.map((stack) => {
                    return (
                        <li className="dark:bg-purple/20 bg-orange/20 px-2 py-0.5 rounded-md font-semibold dark:text-purple text-orange">
                            {stack}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
