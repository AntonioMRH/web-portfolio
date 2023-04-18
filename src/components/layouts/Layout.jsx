import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import SocialLinkBar from '../SocialLinkBar'
import Footer from '../Footer'
import VoxelMe from '../VoxelMe'

function Layout() {
    return (
        <>
            <Navbar />
            <main
                className="max-w-screen w-full h-full min-h-screen pt-20 bg-light-bg dark:bg-black-bg flex
				flex-col items-center justify-start"
            >
                <div className="h-[350px] w-full flex items-center justify-center">
                    <VoxelMe />
                </div>
                <Outlet />
                <SocialLinkBar />
            </main>
            <Footer />
        </>
    )
}

export default Layout
