import AnimatedSection from '../../components/AnimatedSection'
import screen1 from '../../assets/images/img1.png'
import screen2 from '../../assets/images/img1_1.png'
import { ArrowSquareOut, GithubLogo } from '@phosphor-icons/react'

const projectStack = ['React', 'Typescript', 'Styled Components', 'React Hook Form', 'Zod']

function DeliveryPage() {
    return (
        <article className="md:max-w-3xl w-full h-full">
            <section className="sm:px-4 px-4 sm:mx-28 mx-4 dark:text-[rgba(255,255,255,0.9)] text-body-text">
                <AnimatedSection delay={0.1}>
                    <div className="mt-4 w-full flex flex-col items-start justify-start gap-4">
                        <h5 className="font-plus text-xl">Coffee Delivery</h5>
                        <div className="w-full flex-col items-start justify-center mb-2 font-roboto indent-8 text-regular">
                            <p>
                                This website is a mock of a coffee delivery service, where users can browse and select
                                from various types of coffee products. The page has a clean and modern design, with a
                                user-friendly interface.
                            </p>
                            <p>
                                Users can add items to their shopping cart and view their cart at any time. Also, they
                                can adjust the quantity of items in their cart or remove items completely before
                                proceeding to checkout. At checkout, users are prompted to provide their shipping
                                information and select a payment method.
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
                                href="https://coffee-delivery-ignite-omega.vercel.app/"
                                target="_blank"
                            >
                                Website <ArrowSquareOut size={20} />
                            </a>
                            <a
                                className="p-1 dark:bg-moon-purple/90 dark:text-midnight text-light-bg bg-orange rounded-[99%] flex items-center justify-center hover:opacity-80"
                                href="https://github.com/AntonioMRH/coffee-delivery-ignite"
                                target="_blank"
                            >
                                <GithubLogo size={20} />
                            </a>
                        </div>
                        <div className="w-full rounded-md overflow-hidden mb-2 sm:h-[290px] h-[185px]">
                            <img src={screen1} alt="screenshot of coffee delivery website" />
                        </div>
                        <div className="w-full rounded-md overflow-hidden mb-10 sm:h-[290px] h-[185px]">
                            <img src={screen2} alt="screenshot of coffee delivery website" />
                        </div>
                    </div>
                </AnimatedSection>
            </section>
        </article>
    )
}

export default DeliveryPage
