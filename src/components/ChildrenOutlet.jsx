import { Suspense } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Loaders from './loader/Loaders'

const ChildrenOutlet = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<Loaders />}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    )
}

export default ChildrenOutlet 