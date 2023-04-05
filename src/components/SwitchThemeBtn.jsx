import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { Disclosure } from '@headlessui/react'

function SwitchThemeBtn({ theme, handleChangeFunc }) {
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                key={theme}
                className="inline-block"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <Disclosure.Button
                    className="transition duration-200 ease-out hover:ease-in w-10 h-10 flex items-center justify-center rounded-md p-1 dark:text-black-bg dark:hover:bg-dark-yellow dark:bg-yellow-sun text-light-bg hover:bg-dark-moon bg-moon-purple"
                    onClick={handleChangeFunc}
                >
                    {theme === 'dark' ? (
                        <SunIcon className="block h-5 w-5" aria-hidden="true" />
                    ) : (
                        <MoonIcon className="block h-4 w-4" aria-hidden="true" />
                    )}
                </Disclosure.Button>
            </motion.div>
        </AnimatePresence>
    )
}

export default SwitchThemeBtn
