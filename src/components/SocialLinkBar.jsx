import { InstagramLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

const socialLinks = [
    {
        link: 'https://github.com/AntonioMRH',
        icon: <GithubLogo size={20} />,
    },
    {
        link: 'https://www.linkedin.com/in/antonio-mrh/',
        icon: <LinkedinLogo size={20} />,
    },
    {
        link: 'https://www.instagram.com/antonio_mrh/',
        icon: <InstagramLogo size={20} />,
    },
]

function SocialLinkBar() {
    const listStyles =
        'w-full flex items-center justify-center dark:hover:bg-moon-purple hover:bg-orange rounded-md transition hover:ease-in-out duration-200'

    return (
        <div className="hidden lg:block lg:fixed lg:w-10 bottom-0 right-auto z-10 left-10">
            <ul className="flex flex-col items-center justify-center dark:text-white text-midnight w-full list-none gap-2 ">
                {socialLinks.map((item) => {
                    return (
                        <li className={listStyles} key={item.link}>
                            <a className="p-[10px] cursor-pointer" href={item.link} target="_blank">
                                {item.icon}
                            </a>
                        </li>
                    )
                })}
                <div className="block h-[90px] w-[1px] bg-midnight dark:bg-slate-200 after:content-[''] cursor-none" />
            </ul>
        </div>
    )
}

export default SocialLinkBar
