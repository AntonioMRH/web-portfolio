import AnimatedSection from '../../components/AnimatedSection'
import screen1 from '../../assets/images/img3.png'
import { ArrowSquareOut, GithubLogo } from '@phosphor-icons/react'

const projectStack = [
    'Next.js',
    'Typescript',
    'Tailwind CSS',
    'Clerk',
    'Planetscale',
    'Upstash',
    'Vercel',
    'Axiom',
    'Prisma',
    'tRPC',
]

function ChirpPage() {
    return (
        <article className="md:max-w-3xl w-full h-full">
            <section className="sm:px-4 px-4 sm:mx-28 mx-4 dark:text-[rgba(255,255,255,0.9)] text-body-text">
                <AnimatedSection delay={0.1}>
                    <div className="mt-4 w-full flex flex-col items-start justify-start gap-4">
                        <h5 className="font-plus text-xl">Chirp 🐦</h5>
                        <div className="w-full flex-col items-start justify-center mb-2 font-roboto indent-8 text-regular">
                            <p>
                                Chirp is a Twitter clone that only allows users to use emojis to express themselves.
                                This project was built using the t3 stack. It was created following the tutorial
                                available on{' '}
                                <a href="https://www.youtube.com/watch?v=YkOSUVzOAA4&t=223s" target="_blank">
                                    Theo's channel on YouTube
                                </a>
                                .
                            </p>
                            <p>
                                Users can post chirps and see chirps from other users. The app allows users to view
                                other users chirps and visit the history page of a particular chirp.
                            </p>
                        </div>
                        <div className="flex items-start justify start gap-2 flex-col mb-4">
                            <p className="font-roboto text-md font-semibold color">STACK</p>
                            <ul className="flex w-full items-start justify-start gap-2 font-roboto text-sm flex-wrap">
                                {projectStack.map((item) => {
                                    return (
                                        <li
                                            key={item}
                                            className=" bg-turquoise-100/30 px-2 py-0.5 rounded-md font-semibold text-turquoise-300 dark:bg-turquoise-200/25 dark:text-turquoise-100"
                                        >
                                            {item}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="w-full flex items-center justify-end gap-3">
                            <a
                                className="dark:text-light-bg hover:opacity-80 flex items-center justify-start gap-1 hover:underline underline-offset-2"
                                href="https://chirp-i2if9b7vd-antoniomrh.vercel.app/"
                                target="_blank"
                            >
                                Website <ArrowSquareOut size={20} />
                            </a>
                            <a
                                className="p-1 dark:bg-moon-purple/90 dark:text-midnight text-light-bg bg-orange rounded-[99%] flex items-center justify-center hover:opacity-80"
                                href="https://github.com/AntonioMRH/chirp"
                                target="_blank"
                            >
                                <GithubLogo size={20} />
                            </a>
                        </div>
                        <div className="w-full rounded-md overflow-hidden mb-10 sm:h-[290px]">
                            <img src={screen1} alt="screenshot of coffee delivery website" />
                        </div>
                    </div>
                </AnimatedSection>
            </section>
        </article>
    )
}

export default ChirpPage
