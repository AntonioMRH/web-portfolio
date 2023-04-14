import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import SwitchThemeBtn from './SwitchThemeBtn'
import { useNavigate } from 'react-router-dom'

const navigation = [
    { name: 'Portfolio', href: '/projects' },
    { name: 'Experience', href: '/experience' },
]

const mobileNavigation = [
    { name: 'About', href: '/' },
    { name: 'Portfolio', href: '/projects' },
    { name: 'Experience', href: '/experience' },
]

const navLinkBaseClass =
    'font-inter font-light <text-md></text-md> p-2 hover:underline decoration-solid underline-offset-4 decoration-1'

function Navbar() {
    const [theme, setTheme] = useState('dark')
    const navigate = useNavigate()

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return (
        <header className="w-full z-10 fixed flex justify-center backdrop-blur-md h-16 dark:bg-[#20202380] dark:text-white bg-[#ffffff40]">
            <Disclosure as="nav" className="w-full h-full flex  md:max-w-3xl p-3 sm:p-2">
                {({ open }) => (
                    <>
                        <div className="flex flex-row flex-wrap w-full  justify-between items-center">
                            <div className="flex items-center sm:mr-5 ml-2 sm:ml-0">
                                <NavLink to="/">
                                    <h1 className="font-plus text-xl ">Antonio Moreno</h1>
                                </NavLink>
                            </div>

                            <div className="absolute flex items-center justify-end sm:hidden right-2">
                                {/* Mobile menu button */}
                                <Disclosure.Button className=" inline-flex items-center justify-center h-10 w-10 rounded-md p-1 dark:text-[rgba(255,255,255,0.9)] border-solid border-2 dark:border-[rgba(255,255,255,0.2)] hover:bg-midnight">
                                    {open ? (
                                        <XMarkIcon className="block h-5 w-5" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-5 w-5" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.href}
                                                className={({ isActive }) =>
                                                    `${navLinkBaseClass} ${
                                                        isActive
                                                            ? 'dark:bg-moon-purple bg-orange dark:text-midnight text-yellow-sun rounded-md font-bold '
                                                            : ''
                                                    }`
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center absolute right-14 top-3 sm:relative sm:right-0 sm:top-0">
                            <SwitchThemeBtn theme={theme} handleChangeFunc={handleThemeSwitch} />
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3  dark:bg-midnight bg-white rounded-md mt-12 min-w-[10rem] font-roboto font-light drop-shadow-lg border-[rgba(255,255,255,0.2)] border-[1px]">
                                {mobileNavigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        onClick={() => navigate(item.href)}
                                        className="block px-3 py-2 rounded-md text-base"
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </header>
    )
}

export default Navbar
